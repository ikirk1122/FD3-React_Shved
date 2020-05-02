"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import './ishop.css';
import Items from './items';
import ICard from './card';
import LeftPannel from './leftPannel';
import AddsPannel from './addsPannel';



class Player extends React.Component {

  static propTypes = {
    
    shop: PropTypes.string.isRequired,
    goods: PropTypes.array.isRequired,
    info: PropTypes.array.isRequired,
    
  }


  state = {
    
    checked: undefined,
    goods: this.props.goods,
    good: undefined,
    info: this.props.info,
    workmode: 0,// 0 - show no card mode
    shop: this.props.shop,
    firstChange: false,
    ownworkmode: 0

  }

  componentWillReceiveProps(newProps){
  
    this.setState({goods: newProps.goods});
    this.setState({checked: newProps.checked});
    this.setState({workmode: newProps.workmode});
  
    }
    
    checkedChanged = (x) => {  
if (this.state.workmode!=3&&this.state.firstChange==false){
     this.setState( {good: this.state.goods[x], checked:x, workmode:1} )};// - view mode
    }

    deletedChanged = (xx) => { 
function ff (v,i,a){return i!=xx};
this.setState( {checked:undefined,workmode:0,goods:((this.state.goods).filter(ff))} );
     }

     editedChanged = (xx) => { 
      if (this.state.firstChange==false)    
      this.setState( {good: this.state.goods[xx], checked:xx, workmode:2} );//2 - edit
}


addNew = () => {     
  this.setState( {workmode:3, checked:undefined} );//3 - addnew
       }

add = (t,p,c,s) => { 
  
  let codd=(
    (function iD (gg){
   let code; let temp=[];
 for (let i=0; i<gg.length; i++)
 {temp.push(gg[i].code)};
 for (let i=0; i<=gg.length; i++)
 {if (temp.indexOf(i)==(-1)) code=i}
 return code
 })(this.state.goods) //self-launch function
 );


let temp={};
temp.text=t;
if (p[p.length-1]=="$") {temp.price=p} else if (p[p.length-1]!="$") {temp.price=(p+"$")};
temp.count=c;
temp.source=s;
temp.code=codd;
let yy=this.state.goods.splice(0,this.state.goods.length);
yy.push(temp);
this.setState( {checked:undefined,workmode:0,goods:yy} );
             }

             edd = (t,p,c,s,cd) => { 
            
              let temp={};
              temp.text=t;
             if (p[p.length-1]=="$") {temp.price=p} else if (p[p.length-1]!="$") {temp.price=(p+"$")};
              temp.count=c;
              temp.source=s;
              temp.code=cd;
              let i=this.state.checked;
              let yy=this.state.goods.splice(0,this.state.goods.length);
              yy[i]=temp;
              this.setState( {checked:undefined,workmode:0,goods:yy, firstChange: false} );
                           }          
       
       cancel = (x) => {  
        if (this.state.workmode==3||this.state.workmode==2){
             this.setState( {checked:undefined, workmode:0, firstChange:false} )
            };// - view mode
            }
firstchangeFU = () =>{
  this.setState( {firstChange:true }) 
}

play=()=>{
  var zvukElem=document.getElementById('menu')
  zvukElem.play();
}

pause=()=>{
  var zvukElem=document.getElementById('menu');
  zvukElem.pause();
  //zvukElem.currentTime=0; 
};

render() { 
  let items=(<Items className='List'
  ownworkmode={this.state.ownworkmode}
  goods={this.state.goods}
  info={this.state.info}
  checked={this.state.checked}//needed for marking item
  cbcheckedChanged={this.checkedChanged}
  cbdeletedChanged={this.deletedChanged}
  cbEditedChanged={this.editedChanged}
  workmode={this.state.workmode}//needed for disabling buttons in IGood  
  />);
  if (this.state.ownworkmode==1) items=null;

  <div className='ShopName'>{this.props.shop}</div>;

  let xxx=(<div>
  <input type={"button"} value={"New Product"} onClick={this.addNew} {...newButton}></input>     
              <ICard className='List'
              good={this.state.good}
              workmode={this.state.workmode}//needed to choose type of render 
              firstChange={this.state.firstChange}//needed for disabling buttons in IGood
              cbCancel={this.cancel}
              cbAdd={this.add}
              cbEdd={this.edd}
              cbFirstchange={this.firstchangeFU}/></div>);
  let newButton={}; if (this.state.workmode==2||this.state.workmode==3) {newButton={disabled:true}};

  let output=(<div className='iShop'>
        <LeftPannel className='leftPannel'/>
      {items}
      <audio id='menu'   loop={true} controls={true}>
        
    <source src="/source/sound/menu.mp3" type="audio/mpeg"></source>
</audio>
<img src="/source/img/phone.png" onClick={this.play}></img>
<input type={"button"} value={"Play"} onClick={this.play} ></input>  
<input type={"button"} value={"Stop"} onClick={this.pause} ></input>  
        <AddsPannel className='addsPannel'/> 
              
                    </div>);
  return (
       output
      );      
    }          
  }


export default Player;