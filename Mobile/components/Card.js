"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import {mobileEvents} from './events';

class ICard extends React.PureComponent
{

  state = {

        currentClientId: undefined,
        currentClientFIO: undefined,
        currentClientBalanse: undefined,

        workmode: 0,    
        famAdd: null,
        imAdd: null,
        otchAdd: null,
        balanceAdd: null,
        famEdd: null,
        imEdd: null,
        otchEdd: null,
        balanceEdd: null,

        kkey: 10000000
  }

  componentDidMount = () => {
    mobileEvents.addListener('Addmode',this.setWorkmodeToThree);
    mobileEvents.addListener('EditClient',this.editClient);

  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('Addmode',this.setWorkmodeToThree);
    mobileEvents.removeListener('EditClient',this.editClient);
  };
  

changeVolume = {
textChangeEdd: null,
countChangeEdd: null,
sourceChangeEdd: null,
priceChangeEdd: null
};

addVolume = {
  fam: "null",
  im: "null",
  otch: "null",
  balance: "",
  
  };

  editClient=(clientProps)=>{
  
    this.setState({workmode:2, 
      kkey: (this.state.kkey+1),
      currentClientId: clientProps.clientInfo.id, 
      currentClientFam: clientProps.clientInfo.fam,
      currentClientIm: clientProps.clientInfo.im,
      currentClientOtch: clientProps.clientInfo.otch, 


  
      currentClientBalanse: clientProps.clientInfo.balance,
      famEdd: clientProps.clientInfo.fam,
      imEdd: clientProps.clientInfo.im,
      otchEdd: clientProps.clientInfo.otch,
      balanceEdd: clientProps.clientInfo.balance
    })

  
  }

textChange = (EO) => { 
  this.setState({textChangeAdd:EO.target.value });

}
textChangeEd = (EO) => { 
 this.changeVolume.textChangeEdd=EO.target.value;
  this.firstChange();

}
priceChange = (EO) => { 
  this.setState({priceChangeAdd:EO.target.value });
;
}
priceChangeEd = (EO) => { 
 this.changeVolume.priceChangeEdd=EO.target.value;
  this.firstChange();

}
countChange = (EO) => { 
  this.setState({countChangeAdd:EO.target.value });

}
countChangeEd = (EO) => { 
  this.changeVolume.countChangeEdd=EO.target.value;
  this.firstChange();

}
sourceChange = (EO) => { 
  this.setState({sourceChangeAdd:EO.target.value });

}
sourceChangeEd = (EO) => { 
  this.changeVolume.sourceChangeEdd=EO.target.value;
  this.firstChange();

}
firstChange = () =>{

    if (this.state.firstChange==false) {
      
      this.props.cbFirstchange();

  if (this.changeVolume.textChangeEdd==null) 
  this.changeVolume.textChangeEdd=this.state.good.text;

  if (this.changeVolume.sourceChangeEdd==null) 
  this.changeVolume.sourceChangeEdd=this.state.good.source;

  if ( this.changeVolume.priceChangeEdd==null) 
  this.changeVolume.priceChangeEdd=this.state.good.price;

  if (this.changeVolume.countChangeEdd==null) 
  this.changeVolume.countChangeEdd=this.state.good.count;
}


}

setWorkmodeToThree = (code) =>{
  this.setState({workmode:code})//- 3
}

cancel = (EO) => { 

  this.changeVolume.textChangeEdd=null 
  this.changeVolume.sourceChangeEdd=null;
  this.changeVolume.priceChangeEdd=null;
  this.changeVolume.countChangeEdd=null;
 this.setState({workmode:0,
  famAdd: null,
        imAdd: null,
        otchAdd: null,
        balanceAdd: null})
}

addEmit = () => { //sends proprpties of new client via EventEmitter
  
  mobileEvents.emit('AddNew',this.state);
  this.setState({balanceAdd: "", imAdd: "", otchAdd: "", famAdd: "",workmode:0});

}

eddEmit = () => { //sends proprpties of new client via EventEmitter
  let temp={fam: this._inputFamEdd.value,
    im: this._inputImEdd.value,
    otch: this._inputOtchEdd.value,
    balance: this._inputBalanceEdd.value,
    id: this.state.currentClientId
  }
  mobileEvents.emit('EddNew',temp);
  this.setState({balanceEdd: "", imEdd: "", otchEdd: "", famEdd: "",workmode:0});

}

edd = () => { 
 let text=this.changeVolume.textChangeEdd;
 let price=this.changeVolume.priceChangeEdd;
 let count=this.changeVolume.countChangeEdd;
 let source=this.changeVolume.sourceChangeEdd;
  if (text==null) {text=this.state.good.text};
  if (price==null) {price=this.state.good.price};
  if (count==null) {count=this.state.good.count};
  if (source==null) {source=this.state.good.source};
  
  this.props.cbEdd(
    text,
    price,
    count,
    source,
    this.state.good.code
    );
    this.setState({textChangeEdd: null,priceChangeEdd: null,countChangeEdd: null,sourceChangeEdd: null});
}

inputNew = () => {//needed for validation only
  this.setState({balanceAdd: this._inputBalanceAdd.value});//refs used
  this.setState({imAdd: this._inputImAdd.value});
  this.setState({famAdd: this._inputFamAdd.value});
  this.setState({otchAdd: this._inputOtchAdd.value});
}

inputOld = () => {//needed for validation only
  this.setState({balanceEdd: this._inputBalanceEdd.value});//refs used
  this.setState({imEdd: this._inputImEdd.value});
  this.setState({famEdd: this._inputFamEdd.value});
  this.setState({otchEdd: this._inputOtchEdd.value});
}

    render () {

      let f1,f2,f3,f4=0;

let output=null;//render value - renders nothing


if (this.state.workmode===3) {//add mode

  let fam = "";   let balance = "";   let im = "";   let otch = ""; let saveButton={};

if (this.state.famAdd==null||this.state.famAdd=="") {fam="Внимание - пустое поле!"; saveButton={disabled:true}};
if (this.state.imAdd==null||this.state.imAdd=="") {im="Внимание - пустое поле!"; saveButton={disabled:true}};
if (this.state.otchAdd==null||this.state.otchAdd=="") {otch="Внимание - пустое поле!"; saveButton={disabled:true}};
if (this.state.balanceAdd==null||this.state.balanceAdd=="") {balance="Необходимо число!"; saveButton={disabled:true}};

  output=(
<div className={"Card"} key={662}><div>Добавить нового клиента</div>


<div><div className={"ViewDiv"}>Фамилия</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.famAdd} 
onChange={this.inputNew} ref={(node)=> {this._inputFamAdd = node}}></input>
<span className={"Red"}>{fam}</span></div>

<div><div className={"ViewDiv"}>Имя</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.imAdd} 
onChange={this.inputNew} ref={(node)=> {this._inputImAdd = node}}></input>
<span className={"Red"}>{im}</span></div>

<div><div className={"ViewDiv"}>Отчество</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.otchAdd} 
onChange={this.inputNew} ref={(node)=> {this._inputOtchAdd = node}}></input>
<span className={"Red"}>{otch}</span></div>

<div><div className={"ViewDiv"}>Баланс</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.balanceAdd} 
onChange={this.inputNew} ref={(node)=> {this._inputBalanceAdd = node}}></input>
<span className={"Red"}>{balance}</span></div>

<input type={"button"} value={"Save"} onClick={this.addEmit} {...saveButton}></input>
<input type={"button"} value={"Cancel"} onClick={this.cancel} ></input>
</div>
)};




if (this.state.workmode===2) {//edit mode

   let fam = "";   let balance = "";   let im = "";   let otch = ""; let saveButton={};

if (this.state.famEdd==null||this.state.famEdd=="") {fam="Внимание - пустое поле!"; saveButton={disabled:true}};
if (this.state.imEdd==null||this.state.imEdd=="") {im="Внимание - пустое поле!"; saveButton={disabled:true}};
if (this.state.otchEdd==null||this.state.otchEdd=="") {otch="Внимание - пустое поле!"; saveButton={disabled:true}};
if (this.state.balanceEdd==null||this.state.balanceEdd=="") {balance="Необходимо число!"; saveButton={disabled:true}};

  output=(
<div className={"Card"} key={this.state.kkey}><div>Редактировать клиента</div>
<div>{this.state.currentClientId}</div>


<div><div className={"ViewDiv"}>Фамилия</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.currentClientFam} 
onChange={this.inputOld} ref={(node)=> {this._inputFamEdd = node}}></input>
<span className={"Red"}>{fam}</span></div>

<div><div className={"ViewDiv"}>Имя</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.currentClientIm} 
onChange={this.inputOld} ref={(node)=> {this._inputImEdd = node}}></input>
<span className={"Red"}>{im}</span></div>

<div><div className={"ViewDiv"}>Отчество</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.currentClientOtch} 
onChange={this.inputOld} ref={(node)=> {this._inputOtchEdd = node}}></input>
<span className={"Red"}>{otch}</span></div>

<div><div className={"ViewDiv"}>Баланс</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.currentClientBalanse} 
onChange={this.inputOld} ref={(node)=> {this._inputBalanceEdd = node}}></input>
<span className={"Red"}>{balance}</span></div>

<input type={"button"} value={"Save"} onClick={this.eddEmit} {...saveButton}></input>
<input type={"button"} value={"Cancel"} onClick={this.cancel} ></input>
</div>
)};

if (this.state.workmode===0) {//view mode
 
   output=(null)

  };


console.log("Card render")
      return(output)//variable 
    }  
  }

  export default ICard;
