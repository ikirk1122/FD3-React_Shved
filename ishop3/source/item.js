"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import './ishop.css';

class Item extends React.Component
{

  static propTypes = {
    good: PropTypes.object,
    index: PropTypes.number.isRequired,
    cbcheckedChanged: PropTypes.func.isRequired,
    cbdeletedChanged: PropTypes.func.isRequired,
   cbEditedChanged: PropTypes.func.isRequired,

    workmode: PropTypes.number.isRequired
  
  };


  state = {
        good: this.props.good,
        workmode: this.props.workmode,
        index: this.props.index,
        checked: this.props.checked,

  }
  componentWillReceiveProps(newProps){
  
  this.setState({good: newProps.good});
  this.setState({checked: newProps.checked});
  this.setState({workmode: newProps.workmode});
  this.setState({index: newProps.index});

  }


  checkedF = (EO) => { 
  this.props.cbcheckedChanged(this.state.index);
  }

  deleted = (EO) => { 
    confirm("Delete Item???")&&(this.props.cbdeletedChanged(this.state.index))
  }

  edited = (EO) => { 
    this.props.cbEditedChanged(this.state.index)
  }
 
    render () {
      let delButton={};let eddButton={};
      if (this.state.workmode==2) {delButton={disabled:true}};
 if (this.state.workmode==3) {eddButton={disabled:true}; delButton={disabled:true}};

  
let item=(<div className="Lists" key={this.state.good.code} className={((this.props.checked==this.state.index)?("List"+" "+"Blue"):'List')}
data={this.state.good.code} >
<div className={'Text'} onClick={this.checkedF} data={this.state.good.code}>{this.state.good.text}</div>
<div className={'Prices'} onClick={this.checkedF} data={this.state.good.code}>{this.state.good.price}</div>
<div className={'Count'} onClick={this.checkedF} data={this.state.good.code}>{this.state.good.count}</div>
<a className={'Imga'} onClick={this.checkedF} data={this.state.good.code} href={this.state.good.source} target={"_b"} >{this.state.good.source}</a>
<input className={'Count'} type={'button'} defaultValue={"Edit"} {...eddButton}
data={undefined} data2={this.state.good.code} onClick= {this.edited}/>
<input className={'Count'} type={'button'} defaultValue={"Delete"} {...delButton}
data={undefined} data2={this.state.good.code} onClick= {this.deleted}/>
</div>);



 

      return(
        item

   
      )
      

    }
  
  }

  export default Item;
