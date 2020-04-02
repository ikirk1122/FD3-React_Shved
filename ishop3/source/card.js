"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import './ishop.css';

class ICard extends React.Component
{

  static propTypes = {
    good: PropTypes.object,
    
    checked: PropTypes.any,
    workmode: PropTypes.any.isRequired,
    cbCancel: PropTypes.func.isRequired,
    cbAdd: PropTypes.func.isRequired,
    firstChange: PropTypes.any.isRequired,
  };


  state = {
        good: this.props.good,
        
        workmode: this.props.workmode,
        checked: this.props.checked,
        textChangeAdd: null,
        priceChangeAdd: null,
        countChangeAdd: null,
        sourceChangeAdd: null,
        textChangeEdd: null,
        priceChangeEdd: null,
        countChangeEdd: null,
        sourceChangeEdd: null,
        firstChange: this.props.firstChange,
        kkey: 10000000,
  }
  
  componentWillReceiveProps(newProps){  

  this.setState({good: newProps.good});
  this.setState({checked: newProps.checked});
  this.setState({workmode: newProps.workmode});
  
  this.setState({firstChange: newProps.firstChange});
  if (newProps.good!=this.state.good) this.setState({kkey: this.state.kkey+1});
  }

forInCycle = (hash) =>{
  let arr=[];
for (var i in hash){
arr.push(hash.i)
} return arr.length
}

changeVolume = {
textChangeEdd: null,
countChangeEdd: null,
sourceChangeEdd: null,
priceChangeEdd: null
};

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

cancel = (EO) => { 

  this.changeVolume.textChangeEdd=null 
  this.changeVolume.sourceChangeEdd=null;
  this.changeVolume.priceChangeEdd=null;
  this.changeVolume.countChangeEdd=null;
  this.props.cbCancel(EO);
}

add = () => { 
  
  this.props.cbAdd(
    this.state.textChangeAdd,
    this.state.priceChangeAdd,
    this.state.countChangeAdd,
    this.state.sourceChangeAdd,
  );
    this.setState({textChangeAdd: null,priceChangeAdd: null,countChangeAdd: null,sourceChangeAdd: null});
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

    render () {

      let f1,f2,f3,f4=0;

let z=(<div className={"Card"} key={664}><div>NONE CHOOSEN</div></div>);//render will return variable z


if (this.state.workmode===3) {//add mode

  let text = "";   let price = "";   let count = "";   let source = ""; let saveButton={};

if (this.state.textChangeAdd==null||this.state.textChangeAdd=="") {text="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.state.priceChangeAdd==null||this.state.priceChangeAdd=="") {price="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.state.countChangeAdd==null||this.state.countChangeAdd=="") {count="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.state.sourceChangeAdd==null||this.state.sourceChangeAdd=="") {source="ERROR - empty blank space!"; saveButton={disabled:true}};
  z=(
<div className={"Card"} key={662}><div>ADD NEW</div>
<div><span>ID</span><span>{this.forInCycle(this.state.good)+1}</span></div>
<div><div className={"ViewDiv"}>TEXT</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.textChangeAdd} onChange={this.textChange} ></input>
<span className={"Red"}>{text}</span></div>

<div><div className={"ViewDiv"}>PRICE</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.priceChangeAdd} onChange={this.priceChange}></input>
<span className={"Red"}>{price}</span></div>

<div><div className={"ViewDiv"}>COUNT</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.countChangeAdd} onChange={this.countChange}></input>
<span className={"Red"}>{count}</span></div>

<div><div className={"ViewDiv"}>SOURCE</div><input className={"ViewInput"} type={"text"} defaultValue={this.state.sourceChangeAdd} onChange={this.sourceChange}></input>
<span className={"Red"}>{source}</span></div>

<input type={"button"} value={"Save"} onClick={this.add} {...saveButton}></input>
<input type={"button"} value={"Cancel"} onClick={this.cancel} ></input>
</div>
)};







if (this.state.workmode===2&&this.forInCycle(this.state.good)!=0) {//edit mode

  f1=this.state.good.text;
  f2=this.state.good.price;
  f3=this.state.good.count;
  f4=this.state.good.source;

  let text = "";   let price = "";   let count = "";   let source = ""; let saveButton={};

if (this.state.firstChange==true)
{if (this.changeVolume.textChangeEdd==null||this.changeVolume.textChangeEdd=="") {text="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.changeVolume.priceChangeEdd==null||this.changeVolume.priceChangeEdd=="") {price="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.changeVolume.countChangeEdd==null||this.changeVolume.countChangeEdd=="") {count="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.changeVolume.sourceChangeEdd==null||this.changeVolume.sourceChangeEdd=="") {source="ERROR - empty blank space!"; saveButton={disabled:true}};
};
  z=(
<div className={"Card"} key={this.state.kkey}><div>EDIT</div>
<div><span>ID</span><span>{this.state.good.code} </span></div>
<div><div  className={"ViewDiv"}>TEXT</div><input className={"ViewInput"} type={"text"} defaultValue={f1} onChange={this.textChangeEd}></input>
<span className={"Red"}>{text}</span></div>

<div><div  className={"ViewDiv"}>PRICE</div><input className={"ViewInput"} type={"text"} defaultValue={f2} onChange={this.priceChangeEd}></input>
<span className={"Red"}>{price}</span></div>

<div><div  className={"ViewDiv"}>COUNT</div><input className={"ViewInput"} type={"text"} defaultValue={f3} onChange={this.countChangeEd}></input>
<span className={"Red"}>{count}</span></div>

<div><div  className={"ViewDiv"}>SOURCE</div><input className={"ViewInput"} type={"text"} defaultValue={f4} onChange={this.sourceChangeEd}></input>
<span className={"Red"}>{source}</span></div>

<input type={"button"} value={"Save"} onClick={this.edd} {...saveButton}></input>
<input type={"button"} value={"Cancel"} onClick={this.cancel}></input>
</div>
)};

if (this.state.workmode===0&&this.forInCycle(this.state.good)==0) {//view mode
 
   z=(<div className={"Card"} key={665}>  <div>NONE CHOOSEN</div>  </div>)

  };

if (this.state.workmode===1&&this.forInCycle(this.state.good)!=0) {
  f1=this.state.good.text;
  f2=this.state.good.price;
  f3=this.state.good.count;
  f4=this.state.good.source


  z=(<div className={"Card"} key={666}>
<div>VIEW</div>
<div><span>ID</span><span>{this.state.good.code} </span></div>
<div><div className={"ViewDiv"}>TEXT</div><input className={"ViewInput"} type={"text"} value={f1} readOnly></input></div>
<div><div className={"ViewDiv"}>PRICE</div><input className={"ViewInput"} type={"text"} value={f2} readOnly></input></div>
<div><div className={"ViewDiv"}>COUNT</div><input className={"ViewInput"} type={"text"} value={f3} readOnly></input></div>
<div><div className={"ViewDiv"}>SOURCE</div><input className={"ViewInput"} type={"text"} value={f4} readOnly></input></div>
<div>
</div>
</div>)};

      return(z)//variable 
    }  
  }

  export default ICard;
