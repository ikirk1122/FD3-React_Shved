import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'

import MobileClient from './MobileClient';
import ICard from './Card';

import {mobileEvents} from './events';
import memoize from 'memoizee'

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
  
cancel = () =>{
//works, but commented
 //let a= ReactDOM.findDOMNode(this._cardComp._inputBalanceAdd);  console.log(a);//ref to another component's input
 //let b =a.value;  console.log(b);
}

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

    let newClients=[...this.state.clients]; // копия самого массива клиентов
    let oldClientsId=[];
    let newId;

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
      this.setState({clients:newClients});
  }

fio ={};//для мутабельных изменений
memfio;//для мутабельных изменений

  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client => {
   if((this.fio[client.id] in this.fio)==false) this.fio[client.id]={};

function calc(a,b,c) {
  return {fam:a, im:b, otch:c};
}
let calcMemoizeed=memoize(calc);
this.memfio=calcMemoizeed(client.fam,client.im,client.otch) // не работает - ссылки новые

   
   // this.notstate.FIO={fam:client.fam,im:client.im,otch:client.otch};//так будет новая ссылка, а надо старая
    this.notstate.FIO.fam=client.fam;//question here!!!
    this.notstate.FIO.im=client.im;//question here!!!
    this.notstate.FIO.otch=client.otch;//question here!!!

    this.fio[(client.id)].fam=client.fam;
    this.fio[(client.id)].im=client.im;
    this.fio[(client.id)].otch=client.otch;
    //console.log(this.fio)
      

      let FIO={fam:client.fam,im:client.im,otch:client.otch};//для иммутабельных изменений - тут все ок
//FIO - если нужна новая ссылка и рендер, this.notstate.FIO - если нужна старая ссылка и не нужен рендер

      console.log(this.notstate.FIO);//когда работает МАР, что фио у клиентов нормальные, но после в отладчике видим, что 
      //у всех фио, как у последнего и 'value below was evaluated just now'
      //и в пропсы к лиентам приходят Григорьевы


        if (this.notstate.changed==true&&this.notstate.changedID==client.id)
        {this.notstate.changedID=undefined; this.notstate.changed=false;
        return <MobileClient key={client.id} id={client.id} FIO={FIO} balance={client.balance} />};
        if (this.notstate.changed==true&&this.notstate.changedID!=client.id)
        {
        return <MobileClient key={client.id} id={client.id} FIO={this.notstate.FIO} balance={client.balance} />;
        
      };
        if (this.notstate.changed==false){
        return <MobileClient key={client.id} id={client.id} FIO={this.notstate.FIO} balance={client.balance} />;}
        
      
      }
     
      
    );

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
<ICard key={123456789} ref={(node)=>{this._cardComp = node}}></ICard>
      </div>
    )
    ;

  }

}

export default MobileCompany;
