"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import './ishop.css';

class ICard extends React.Component
{

  static propTypes = {
    goods: PropTypes.array.isRequired,
    checked: PropTypes.any,
    workmode: PropTypes.any.isRequired,
    cbCancel: PropTypes.func.isRequired,
    cbAdd: PropTypes.func.isRequired,
    firstChange: PropTypes.any.isRequired,
  };


  state = {
        goods: this.props.goods,
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
        kkey: this.props.kkey,
  }
  
  componentWillReceiveProps(newProps){  

  this.setState({checked: newProps.checked});
  this.setState({workmode: newProps.workmode});
  this.setState({goods: newProps.goods});
  this.setState({firstChange: newProps.firstChange});
  this.setState({kkey: newProps.kkey});
  }

  componentDidUpdate(oldState,oldProps){
  }

  shouldComponentUpdate(newProps,newState){
  if (newProps.checked!=newProps.goods.length)  return true;   
  }

textChange = (EO) => { 
  this.setState({textChangeAdd:EO.target.value });

}
textChangeEd = (EO) => { 
  this.setState({textChangeEdd:EO.target.value});
  this.firstChange();

}
priceChange = (EO) => { 
  this.setState({priceChangeAdd:EO.target.value });
;
}
priceChangeEd = (EO) => { 
  this.setState({priceChangeEdd:EO.target.value});
  this.firstChange();

}
countChange = (EO) => { 
  this.setState({countChangeAdd:EO.target.value });

}
countChangeEd = (EO) => { 
  this.setState({countChangeEdd:EO.target.value});
  this.firstChange();

}
sourceChange = (EO) => { 
  this.setState({sourceChangeAdd:EO.target.value });

}
sourceChangeEd = (EO) => { 
  this.setState({sourceChangeEdd:EO.target.value});
  this.firstChange();

}
firstChange = () =>{
  if (this.state.firstChange==false)
  {
  this.props.cbFirstchange();
  if (this.state.textChangeEdd==null) 
  this.setState({textChangeEdd: this.state.goods[this.state.checked].text });
  if (this.state.priceChangeEdd==null) 
  this.setState({priceChangeEdd: this.state.goods[this.state.checked].price });
  if (this.state.countChangeEdd==null) 
  this.setState({countChangeEdd: this.state.goods[this.state.checked].count });
  if (this.state.sourceChangeEdd==null) 
  this.setState({sourceChangeEdd: this.state.goods[this.state.checked].source });}
}

cancel = (EO) => { 
  
  this.setState({textChangeAdd: null,priceChangeAdd: null,countChangeAdd: null,sourceChangeAdd: null, firstChange:false});
  this.props.cbCancel(EO);
}

add = () => { 
  let gg=this.state.goods;
 let codd=(
   (function iD (gg){
  let code; let temp=[];
for (let i=0; i<gg.length; i++)
{temp.push(gg[i].code)};
for (let i=0; i<=gg.length; i++)
{if (temp.indexOf(i)==(-1)) code=i}
return code
})(gg) //self-launch function
);

  
  this.props.cbAdd(
    this.state.textChangeAdd,
    this.state.priceChangeAdd,
    this.state.countChangeAdd,
    this.state.sourceChangeAdd,
    codd
  );
    this.setState({textChangeAdd: null,priceChangeAdd: null,countChangeAdd: null,sourceChangeAdd: null});
}

edd = () => { 
 let text=this.state.textChangeEdd;
 let price=this.state.priceChangeEdd;
 let count=this.state.countChangeEdd;
 let source=this.state.sourceChangeEdd;
  if (text==null) {text=this.state.goods[this.state.checked].text};
  if (price==null) {price=this.state.goods[this.state.checked].price};
  if (count==null) {count=this.state.goods[this.state.checked].count};
  if (source==null) {source=this.state.goods[this.state.checked].source};
  
  this.props.cbEdd(
    text,
    price,
    count,
    source,
    this.state.goods[this.state.checked].code,
    this.state.checked
    );
    this.setState({textChangeEdd: null,priceChangeEdd: null,countChangeEdd: null,sourceChangeEdd: null});
}

    render () {
      let f1,f2,f3,f4=0;

let z=(<div className={"Card"} key={664}><div>EMPTY</div></div>);//render will return variable z


if (this.state.workmode===3) {//add mode

  let text = "";   let price = "";   let count = "";   let source = ""; let saveButton={};

if (this.state.textChangeAdd==null||this.state.textChangeAdd=="") {text="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.state.priceChangeAdd==null||this.state.priceChangeAdd=="") {price="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.state.countChangeAdd==null||this.state.countChangeAdd=="") {count="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.state.sourceChangeAdd==null||this.state.sourceChangeAdd=="") {source="ERROR - empty blank space!"; saveButton={disabled:true}};
  z=(
<div className={"Card"} key={662}><div>ADD NEW</div>
<div><span>ID</span><span>{this.state.goods.length+1}</span></div>
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







if (this.state.workmode===2) {//edit mode
  f1=this.state.goods[this.state.checked].text;
  f2=this.state.goods[this.state.checked].price;
  f3=this.state.goods[this.state.checked].count;
  f4=this.state.goods[this.state.checked].source;

  let text = "";   let price = "";   let count = "";   let source = ""; let saveButton={};

if (this.state.firstChange==true)
{if (this.state.textChangeEdd==null||this.state.textChangeEdd=="") {text="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.state.priceChangeEdd==null||this.state.priceChangeEdd=="") {price="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.state.countChangeEdd==null||this.state.countChangeEdd=="") {count="ERROR - empty blank space!"; saveButton={disabled:true}};
if (this.state.sourceChangeEdd==null||this.state.sourceChangeEdd=="") {source="ERROR - empty blank space!"; saveButton={disabled:true}};
};
  z=(
<div className={"Card"} key={this.state.kkey}><div>EDIT</div>
<div><span>ID</span><span>{this.state.goods[this.state.checked].code} </span></div>
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


if (this.state.checked!==undefined&&this.state.goods.length!=0) {//view mode
 
  if (this.state.checked>this.state.goods.length) {return};
  if (this.state.checked==null) {return (<div className={"Card"} key={665}>  <div>NONE CHOOSEN</div>  </div>)};
  if (this.state.checked==undefined) {return (<div className={"Card"} key={665}>  <div>NONE CHOOSEN</div>  </div>)};
  f1=this.state.goods[this.state.checked].text;
  f2=this.state.goods[this.state.checked].price;
  f3=this.state.goods[this.state.checked].count;
  f4=this.state.goods[this.state.checked].source};

if (this.state.workmode===1&&this.state.checked!==undefined) {
  z=(<div className={"Card"} key={666}>
<div>VIEW</div>
<div><span>ID</span><span>{this.state.goods[this.state.checked].code} </span></div>
<div><div className={"ViewDiv"}>TEXT</div><input className={"ViewInput"} type={"text"} value={f1} readOnly></input></div>
<div><div className={"ViewDiv"}>PRICE</div><input className={"ViewInput"} type={"text"} value={f2} readOnly></input></div>
<div><div className={"ViewDiv"}>COUNT</div><input className={"ViewInput"} type={"text"} value={f3} readOnly></input></div>
<div><div className={"ViewDiv"}>SOURCE</div><input className={"ViewInput"} type={"text"} value={f4} readOnly></input></div>
<div>
</div>
</div>)};

if (this.state.workmode===0&&this.state.checked===undefined) {
  z=(<div className={"Card"} key={665}>
<div>NONE CHOOSEN</div>
</div>)};

if (this.state.goods.length==0&&this.state.workmode!=3) {z=(
<div className={"Card"} key={664}><div>EMPTY</div></div>

)};

      return(z)//variable 
    }  
  }

  export default ICard;
