"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import './ishop.css';

class IGoods extends React.Component
{

  static propTypes = {
    goods: PropTypes.array.isRequired,
    info: PropTypes.array.isRequired,
    cbcheckedChanged: PropTypes.func.isRequired,
    cbdeletedChanged: PropTypes.func.isRequired,
    cbEditedChanged: PropTypes.func.isRequired,
    disableButton: PropTypes.bool.isRequired,
    workmode: PropTypes.number.isRequired
  
  };


  state = {
        goods: this.props.goods,
        info: this.props.info,
        checked: this.props.checked,
        disableButton: this.props.disableButton
  }
  componentWillReceiveProps(newProps){
  
  this.setState({goods: newProps.goods});
  this.setState({checked: newProps.checked});
  this.setState({workmode: newProps.workmode});

  }


  checkedF = (EO) => { 
  this.props.cbcheckedChanged(EO.target.getAttribute("data"));
  }

  deleted = (EO) => { 
    confirm("Delete Item???")&&(this.props.cbdeletedChanged(EO.target.getAttribute("data2")))
  }

  edited = (EO) => { 
    this.props.cbEditedChanged(EO.target.getAttribute("data2"))
  }
 
    render () {
      let delButton={};let eddButton={};
      if (this.state.workmode==2) {delButton={disabled:true}};
 if (this.state.workmode==3) {eddButton={disabled:true}; delButton={disabled:true}};

  
var items=this.state.goods.map( v =>

<div key={v.code} className={((this.props.checked==this.state.goods.indexOf(v))?("List"+" "+"Blue"):'List')}
data={this.state.goods.indexOf(v)} >
<div className={'Text'} onClick={this.checkedF} data={this.state.goods.indexOf(v)}>{v.text}</div>
<div className={'Prices'} onClick={this.checkedF} data={this.state.goods.indexOf(v)}>{v.price}</div>
<div className={'Count'} onClick={this.checkedF} data={this.state.goods.indexOf(v)}>{v.count}</div>
<a className={'Imga'} onClick={this.checkedF} data={this.state.goods.indexOf(v)} href={v.source} target={"_b"} >{v.source}</a>
<input className={'Count'} type={'button'} defaultValue={"Edit"} {...eddButton}
data={undefined} data2={this.state.goods.indexOf(v)} onClick= {this.edited}/>
<input className={'Count'} type={'button'} defaultValue={"Delete"} {...delButton}
data={undefined} data2={this.state.goods.indexOf(v)} onClick= {this.deleted}/>
</div>
);

var infosFinal=this.state.info.map( v=>
  <div key={v.uniquecode} className={'List'}>
<div className={'Text'}>{v.text}</div>
<div className={'Text'}>{v.price}</div>
<div className={'Text'}>{v.count}</div>
<div className={'Text'}>{v.source}</div>
<div className={'Text'}>{v.control2}</div>
<div className={'Text'}>{v.control}</div>

        </div>
);
 

      return(
        <div className={"List"}>
<div className={'Lists'}>{infosFinal}</div>
<div className={'Lists'}>{items}</div>

        </div>
      )
      

    }
  
  }

  export default IGoods;
