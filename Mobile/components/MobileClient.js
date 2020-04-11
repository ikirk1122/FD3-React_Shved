import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from './events';
import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    clientInfo:PropTypes.shape({
        id: PropTypes.number.isRequired,
          fam: PropTypes.string.isRequired,
          im: PropTypes.string.isRequired,
          otch: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired
  }),
  };

  state = {
          fam: this.props.clientInfo.fam,
          im: this.props.clientInfo.im,
          otch: this.props.clientInfo.otch,
          balance: this.props.clientInfo.balance,
          forceupdate: 1
  };

  notstate={//чтобы не рендерился пр изменении
    view: undefined,//какая кнопка нажата - изначально "Все"
    viewNow: true//отображается ли клиент сейчас
  };

  componentWillReceiveProps = (newProps) => {
 /*  if (newProps.clientInfo.balance!=this.state.balance
   ||newProps.clientInfo.im!=this.state.im
   ||newProps.clientInfo.fam!=this.state.fam
   ||newProps.clientInfo.otch!=this.state.otch) */

     this.setState({im: newProps.clientInfo.im, 
    fam: newProps.clientInfo.fam,
    otch: newProps.clientInfo.otch,
    balance: newProps.clientInfo.balance});
  };

  componentDidMount = () => {
    mobileEvents.addListener('ViewChange',this.setView);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('ViewChange',this.setView);
  };

  

  setView=(newView)=>{//если меняется режим отображения - клиент сохраняет текущее значение кнопки в notstate
    //но рендерится только при необходимости

if (newView!=this.notstate.view){//если кнопка нажата новая, отличная от предыдущей

if (newView==undefined){//если показать всех

          if (this.notstate.viewNow==true)
        {this.notstate.view=newView;}

        if (this.notstate.viewNow==false)
        {this.notstate.view=newView; this.setState({forceupdate: this.state.forceupdate++})}
}

if (newView==true){//если показать активных

  if (this.notstate.viewNow==true&&this.state.balance<=0)
{this.notstate.view=newView; this.setState({forceupdate: this.state.forceupdate++});}

if (this.notstate.viewNow==true&&this.state.balance>0) {this.notstate.view=newView; }

if (this.notstate.viewNow==false&&this.state.balance<=0) {this.notstate.view=newView; }

if (this.notstate.viewNow==false&&this.state.balance>0) 
{this.notstate.view=newView; this.setState({forceupdate: this.state.forceupdate++});}

};


if (newView==false){//если показать заблокированных

  if (this.notstate.viewNow==true&&this.state.balance<=0)
{this.notstate.view=newView; }

if (this.notstate.viewNow==true&&this.state.balance>0) 
{this.notstate.view=newView; this.setState({forceupdate: this.state.forceupdate++});}

if (this.notstate.viewNow==false&&this.state.balance<=0) 
{this.notstate.view=newView; this.setState({forceupdate: this.state.forceupdate++});}

if (this.notstate.viewNow==false&&this.state.balance>0) 
{this.notstate.view=newView; }

};
}
  };


  editEmit=()=>{
    let hash={...this.props};
    mobileEvents.emit('EditClient',hash);
  }

  deleteEmit=()=>{

    confirm("Удалить информацию о клиенте?")&&(mobileEvents.emit('Delete',this.props.clientInfo.id))
  }

  render() {

    console.log("MobileClient id="+this.props.clientInfo.id+" render");
    let color={backgroundColor: "lightgreen"}; let status="Активный";
    if (this.state.balance<=0) {color={backgroundColor: "lightcoral"};  status="Заблокированный"};
    
    let output=(<div className='MobileClient'>     
    <div className='MobileClientFIO Flex'>{this.state.fam}</div>
    <div className='MobileClientFIO Flex'>{this.state.im}</div>
    <div className='MobileClientFIO Flex'>{this.state.otch}</div>
    <div className='MobileClientBalance Flex'>{this.state.balance}</div>
    <div className='Flex' style={color}>{status}</div>
    <input className='Flex' type="button" value="Редактировать" onClick={this.editEmit}></input>
    <input className='Flex' type="button" value="Удалить" onClick={this.deleteEmit}></input>
    </div>);

    if (status=="Активный"&&this.notstate.view==true) {this.notstate.viewNow=true; return (output)};
    if (status=="Заблокированный"&&this.notstate.view==false) {this.notstate.viewNow=true; return (output)};
    if (this.notstate.view==undefined) {this.notstate.viewNow=true; return (output)}
    else {this.notstate.viewNow=false; return null};

  }

}

export default MobileClient;
