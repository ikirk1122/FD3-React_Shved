"use strict";

import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import './player.css';

class intItem extends React.PureComponent
{

  static propTypes = {
    good: PropTypes.object,
    index: PropTypes.number.isRequired,
    cbmoveToArtist: PropTypes.func.isRequired,

    workmode: PropTypes.number.isRequired
  
  };


  state = {
        good: this.props.good,
        workmode: this.props.workmode,
        index: this.props.index,
        checked: this.props.checked,
        animation: 'None',
        animationS: 'NoneS',
        mysongsCodes: this.props.mysongsCodes,
        added: false

  }
  componentWillReceiveProps(newProps){

  this.setState({good: newProps.good});
  this.setState({checked: newProps.checked});
  this.setState({workmode: newProps.workmode});
  this.setState({index: newProps.index});
  this.setState({mysongsCodes: newProps.mysongsCodes});

  }

  sendRedux = () => {
    this.props.dispatch( { type:"PLAY", song:this.state.good } );
  }


  checkedF = (EO) => { 
  this.props.cbcheckedChanged(this.state.index, this.state.good);
  }

  deleted = (EO) => { 
    //confirm("Delete Item???")&&
   (setTimeout(this.dell,600)&&this.setState({animation: "Animation", animationS: "Animation"}))
   
    
  }


  dell=()=>{
    (this.props.cbdeletedChanged(this.state.index))
  }

  addToFav=()=>{
    this.props.cbaddedChanged(this.state.good);
    this.setState({added: true});
  }

  moveToArtist=()=>{
    this.props.cbmoveToArtist(this.props.good);
  }
 
  

    render () {

      
      let delButton={};let eddButton={};let addButton={};let artistButton={}; let addValue="Add to My Songs"
      if (this.state.workmode==0) {delButton={disabled:true}};
 if (this.state.workmode==3) {eddButton={disabled:true}; delButton={disabled:true}};
 if (this.props.checked!=this.state.index) {eddButton={disabled:true}; delButton={disabled:true}; artistButton={disabled:true};addButton={disabled:true} };
 if ( this.props.mysongsCodes.indexOf(this.props.good.code)==(-1)) addButton={};
 if ( this.props.mysongsCodes.indexOf(this.props.good.code)!=(-1)||this.state.added==true){addButton={disabled:true}; addValue="Is added to My Songs"};

 let buttonStyle=((this.props.checked==this.state.index)?{opacity: "1",transitionDuration: "1s"}:{opacity: "0",transitionDuration: "1s"});
 
  
let item;
if (this.props.workmode==0) item=(
    <div className="Lists" key={this.state.good.code} className={((this.props.checked==this.state.index)?("List"+" "+"Blue"+" "+this.state.animation):'List'+" "+this.state.animation)}
    
    index={this.props.index}
    onClick={this.checkedF}
    data={this.state.good.code} >
      

<img src={this.state.good.source} className="imgstyleA"></img>

    <div className={'Text'} onClick={this.checkedF} data={this.state.good.code}>{this.state.good.name}</div>
    <div className={'Description'} onClick={this.checkedF} data={this.state.good.code}>{this.state.good.description}</div>
    
    <div className={'Action'}>
    <input  type={'button'} defaultValue={"View Artist"} {...artistButton} style={buttonStyle}
    data={undefined} data2={this.state.good.code} onClick= {this.moveToArtist}/>
    
    </div>
    
    </div>);

if (this.props.workmode==1) item=(
  <div className="Lists" key={this.state.good.code} className={((this.props.checked==this.state.index)?("List"+" "+"Blue"+" "+this.state.animationS):'List'+" "+this.state.animationS)}
  
  index={this.props.index}
  onClick={this.checkedF}
  data={this.state.good.code} >
<div className={'Text'}>{this.props.index+1}</div>
<img src={this.state.good.source} className="imgstyleS"></img>
  <div className={'Description'} onClick={this.checkedF} data={this.state.good.code}>{this.state.good.name}</div>
  <div className={'Description'} onClick={this.checkedF} data={this.state.good.code}>{this.state.good.title}</div>
  
  <div className={'Action'}>
  <input  type={'button'} defaultValue={"Play"} {...eddButton} style={buttonStyle}
  data={undefined} data2={this.state.good.code} onClick= {this.sendRedux}/>
  <input className={'Count'} type={'button'} defaultValue={addValue} {...addButton} style={buttonStyle}
  data={undefined} data2={this.state.good.code} onClick= {this.addToFav}/>
  </div>
  
  </div>);


if (this.props.workmode==2) item=(
  <div className="Lists" key={this.state.good.code} className={((this.props.checked==this.state.index)?("List"+" "+"Blue"+" "+this.state.animationS):'List'+" "+this.state.animationS)}
  
  index={this.props.index}
  onClick={this.checkedF}
  data={this.state.good.code} >
<div className={'Text'}>{this.props.index+1}</div>
<img src={this.state.good.source} className="imgstyleS"></img>
  <div className={'Description'} onClick={this.checkedF} data={this.state.good.code}>{this.state.good.name}</div>
  <div className={'Description'} onClick={this.checkedF} data={this.state.good.code}>{this.state.good.title}</div>
  
  <div className={'Action'}>
  <input  type={'button'} defaultValue={"Play"} {...eddButton}
  data={undefined} data2={this.state.good.code} onClick= {this.sendRedux}/>
  <input className={'Count'} type={'button'} defaultValue={"Delete"} {...delButton}
  data={undefined} data2={this.state.good.code} onClick= {this.deleted}/>
  </div>
  
  </div>);



 

      return( item )
      

    }
  
  }

  const mapStateToProps = function (state) {
    return { }; 
  };

  const Item = connect(mapStateToProps)(intItem);

  export default Item;
