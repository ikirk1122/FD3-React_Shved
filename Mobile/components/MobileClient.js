import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from './events';
import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    FIO:PropTypes.shape({
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
    }),
    balance: PropTypes.number.isRequired,
  };

  state = {
    FIO: this.props.FIO,
    balance: this.props.balance,
    forceupdate: 1
  };

  notstate={//чтобы не рендерился пр изменении
    view: undefined,
    viewNow: true
  };

  componentWillReceiveProps = (newProps) => {
    //console.log(newProps)
    //console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
   if (newProps.balance!=this.state.balance||newProps.FIO!=this.state.FIO) 
   this.setState({FIO:newProps.FIO,balance:newProps.balance});
  };

  componentDidMount = () => {
    mobileEvents.addListener('ViewChange',this.setView);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('ViewChange',this.setView);
  };

  

  setView=(newView)=>{//если меняется режим отображения - логика рендера
 //   if (newView==this.notstate.view){console.log("same") }

if (newView!=this.notstate.view){

if (newView==undefined){

          if (this.notstate.viewNow==true)
        {this.notstate.view=newView;}

        if (this.notstate.viewNow==false)
        {this.notstate.view=newView; this.setState({forceupdate: this.state.forceupdate++})}
}

if (newView==true){

  if (this.notstate.viewNow==true&&this.state.balance<=0)
{this.notstate.view=newView; this.setState({forceupdate: this.state.forceupdate++});}

if (this.notstate.viewNow==true&&this.state.balance>0) {this.notstate.view=newView; }

if (this.notstate.viewNow==false&&this.state.balance<=0) {this.notstate.view=newView; }

if (this.notstate.viewNow==false&&this.state.balance>0) 
{this.notstate.view=newView; this.setState({forceupdate: this.state.forceupdate++});}

};


if (newView==false){

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
    //let hash={...this.props};
    confirm("Удалить?")&&(mobileEvents.emit('Delete',this.props.id))
  }

  render() {

    console.log("MobileClient id="+this.props.id+" render");
    let color={backgroundColor: "lightgreen"}; let status="Активный";
    if (this.state.balance<=0) {color={backgroundColor: "lightcoral"};  status="Заблокированный"};
    
    let output=(<div className='MobileClient'>     
    <div className='MobileClientFIO Flex'>{this.state.FIO.fam}</div>
    <div className='MobileClientFIO Flex'>{this.state.FIO.im}</div>
    <div className='MobileClientFIO Flex'>{this.state.FIO.otch}</div>
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
