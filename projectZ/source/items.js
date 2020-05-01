"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import './ishop.css';


class Items extends React.Component
{

  static propTypes = {
    goods: PropTypes.array.isRequired,
    info: PropTypes.array.isRequired,
    cbcheckedChanged: PropTypes.func.isRequired,
    cbdeletedChanged: PropTypes.func.isRequired,
    cbEditedChanged: PropTypes.func.isRequired,

    workmode: PropTypes.any.isRequired
  
  };


  state = {
        goods: this.props.goods,
        info: this.props.info,
        checked: this.props.checked,
 
  }
  componentWillReceiveProps(newProps){
  
  this.setState({goods: newProps.goods});
  this.setState({checked: newProps.checked});
  this.setState({workmode: newProps.workmode});

  }


 
    render () {

let items=this.props.goods.map( v=>
    <Item className='Lists' 
                key={v.code}
                good={v}
                index={this.props.goods.indexOf(v)}    
                checked={this.state.checked}
                workmode={this.props.workmode}
                cbcheckedChanged={this.props.cbcheckedChanged}
                cbdeletedChanged={this.props.cbdeletedChanged}
                cbEditedChanged={this.props.cbEditedChanged}
                 />                 
                );


var infosFinal=this.state.info.map( v=>
  <div key={v.uniquecode} className={'List'}>
<div className={'Text'}>{v.text}</div>
<div className={'Text'}>{v.price}</div>
<div className={'Text'}>{v.count}</div>
<div className={'Text'}>{v.source}</div>
<div className={'Text'}>{v.control2}</div>
<div className={'Text'}>{v.control}</div>
        </div>);


      return(
      <div className={"List"}>
<div className={'Lists'}>{infosFinal}</div>
<div className={'Lists'}>{items}</div>
       </div>
      )
      

    }
  
  }

  export default Items;
