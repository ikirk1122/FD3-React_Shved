import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'

import MobileClient from './MobileClient';
import ICard from './Card';

import {mobileEvents} from './events';
//import memoize from 'memoizee'

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    brandname: 'Velcom',
    clients: this.props.clients,
   // workmode: 0,//0 -no card, 3 - add mode, 2 - edit mode
    
  };

  notstate={//my additional storage
    changed:false,
    changedID:undefined,
        fam: undefined,
        im: undefined,
        otch: undefined,
        FIO: {},
  viewmode: undefined,//undefined-all clients, true-active clients,false-locked clients
  
};


  componentDidMount = () => {
 
    mobileEvents.addListener('AddNew',this.addNewclient);
    mobileEvents.addListener('EddNew',this.eddNewclient);
    mobileEvents.addListener('Delete',this.deleteClient);
    

  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('AddNew',this.addNewclient);
    mobileEvents.removeListener('EddNew',this.eddNewclient);
    mobileEvents.removeListener('Delete',this.deleteClient);
  };
  

  setName1 = () => {
    if (this.state.brandname!=="МТС")
    this.setState({brandname:'МТС'});
  };

  setName2 = () => {
    if (this.state.brandname!=="Velcom'")
    this.setState({brandname:'Velcom'});
  };
  
  setVal1 = () => {
    mobileEvents.emit('ViewChange',undefined);
  };

  setVal2 = () => {
    mobileEvents.emit('ViewChange',true);
  };

  setVal3 = () => {
    mobileEvents.emit('ViewChange',false);
  };
  
  addnew = () =>{
    mobileEvents.emit('Addmode',3);
  }

  deleteClient = (idd) =>{
     let newClients=[];//new array
     for (let i=0; i<this.state.clients.length; i++){
       if (this.state.clients[i].id!=idd)
       newClients.push(this.state.clients[i])
     };
       this.setState({clients:newClients});
   }
 
  

  addNewclient = (hash) =>{
    let newClientProps={
      im: hash.imAdd,
      fam: hash.famAdd,
      otch: hash.otchAdd,
      balance: parseInt(hash.balanceAdd)
    }
if (!(parseInt(newClientProps.balance))){ 
  newClientProps.balance=-100500};

    let newClients=[...this.state.clients]; 
    let newId; let oldClientsId=[];

    for (let i=0; i<newClients.length; i++){
      oldClientsId.push(newClients[i].id)
    };

    for (let i=100; i<Infinity; i++){
      if (oldClientsId.indexOf(i)!=(-1)) continue;
      if (oldClientsId.indexOf(i)==(-1)) newId=i; break;
    }

newClientProps.id=newId;
newClients.push(newClientProps);

      this.setState({clients:newClients});
  }

  eddNewclient = (hash) =>{
    
    let newClientProps={//edit client
      im: hash.im,
      fam: hash.fam,
      otch: hash.otch,
      balance: parseInt(hash.balance),
      id: hash.id
    }
    
if (!(parseInt(newClientProps.balance))){ 
  newClientProps.balance=-100500};

    let changed=false; let newClients=[...this.state.clients]; 

    newClients.forEach( (c,i) => {
      if ( c.id==newClientProps.id)
 {if (c.balance!=newClientProps.balance||c.fam!=newClientProps.fam||c.im!=newClientProps.im||c.otch!=newClientProps.otch)    
      {
        newClients[i]=newClientProps;
        changed=true;
        this.notstate.changed=true;
        this.notstate.changedID=newClientProps.id;
      }}

    } );
    
    if ( changed )
      this.setState({clients: newClients});
      
  }


  render() {
    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client => {      
        return <MobileClient key={client.id} clientInfo={client} />;   

});

    return (
      <div className='MobileCompany'>
             <input type="button" value="Velcom" onClick={this.setName2} />
        <input type="button" value="МТС" onClick={this.setName1} />
   
        <div className='MobileCompanyName'>Компания: {this.state.brandname}</div>
        <div className='Borders'>
         <input type="button" value="Все"  onClick={this.setVal1}/>
          <input type="button" value="Активные"  onClick={this.setVal2}/>
           <input type="button" value="Заблокированные"  onClick={this.setVal3}/>
        </div>
        <div className='MobileCompanyDescription'>
          <div className='Flex'>Фамилия</div>
            <div className='Flex'>Имя</div>
             <div className='Flex'>Отчество</div>
               <div className='Flex'>Баланс</div>
                 <div className='Flex'>Статус</div>
                    <div className='Flex'>Редактировать</div>
                      <div className='Flex'>Удалить</div>
        </div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        <input type="button" value="Добавить нового клиента" onClick={this.addnew} />
        <ICard></ICard>
      </div>
    )
    ;

  }

}

export default MobileCompany;
