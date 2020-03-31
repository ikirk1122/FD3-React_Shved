"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import './ishop.css';
import IGoods from './items';
import ICard from './card';



class IShop extends React.Component {

  static propTypes = {
    
    shop: PropTypes.string.isRequired,
    goods: PropTypes.array.isRequired,
    info: PropTypes.array.isRequired,
    
  }


  state = {
    checked: undefined,
    goods: this.props.goods,
    info: this.props.info,
    workmode: 0,// 0 - show no card mode
    shop: this.props.shop,
    disableButton: false,
    firstChange: false,
    kkey: 1000000 //key for refreshing 
  }

  componentWillReceiveProps(newProps){
  
    this.setState({goods: newProps.goods});
    this.setState({checked: newProps.checked});
    this.setState({workmode: newProps.workmode});
  
    }
    
    checkedChanged = (x) => {  
if (this.state.workmode!=3&&this.state.firstChange==false){
     this.setState( {checked:x, workmode:1} )};// - view mode
    }

    deletedChanged = (xx) => { 
function ff (v,i,a){return i!=xx};
this.setState( {checked:undefined,workmode:0,goods:((this.state.goods).filter(ff))} );
     }

     editedChanged = (xx) => { 
      if (this.state.firstChange==false)    
      this.setState( {checked:xx, workmode:2, kkey: (this.state.kkey+1)} );//2 - edit
}


addNew = () => {     
  this.setState( {workmode:3, checked:undefined, disableButton: true} );//3 - addnew
       }

add = (t,p,c,s,cd) => { 
let temp={};
temp.text=t;
if (p[p.length-1]=="$") {temp.price=p} else if (p[p.length-1]!="$") {temp.price=(p+"$")};
temp.count=c;
temp.source=s;
temp.code=cd;
let yy=this.state.goods.splice(0,this.state.goods.length);
yy.push(temp);
this.setState( {checked:undefined,workmode:0,goods:yy} );
             }

             edd = (t,p,c,s,cd,it) => { 
              let temp={};
              temp.text=t;
             if (p[p.length-1]=="$") {temp.price=p} else if (p[p.length-1]!="$") {temp.price=(p+"$")};
              temp.count=c;
              temp.source=s;
              temp.code=cd;
              let i=it;
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

render() { 
  let newButton={}; if (this.state.workmode==2||this.state.workmode==3) {newButton={disabled:true}};
  return (
      <div className='iShop'>
        <div className='ShopName'>{this.props.shop}</div>
        <IGoods className='List'
        goods={this.state.goods}
        info={this.state.info}
        checked={this.state.checked}
        cbcheckedChanged={this.checkedChanged}
        cbdeletedChanged={this.deletedChanged}
        cbEditedChanged={this.editedChanged}
        disableButton={this.state.disableButton}
        workmode={this.state.workmode}
        kkey={this.state.kkey}
        
        />
         <input type={"button"} value={"New Product"} onClick={this.addNew} {...newButton}></input>     
              <ICard className='List'
              goods={this.state.goods}            
              checked={this.state.checked}
              workmode={this.state.workmode}
              firstChange={this.state.firstChange}
              cbCancel={this.cancel}
              cbAdd={this.add}
              cbEdd={this.edd}
              cbFirstchange={this.firstchangeFU}
              kkey={this.state.kkey}
              />
                    </div>    
      );      
    }          
  }


export default IShop;