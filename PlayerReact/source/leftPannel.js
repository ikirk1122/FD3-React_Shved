"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import './player.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

class LeftPannel extends React.PureComponent
{
 
  static propTypes = {
    cbSetWorkmodeToZero: PropTypes.func.isRequired,
    cbSetWorkmodeToOne: PropTypes.func.isRequired,
  };

  componentWillMount(){
    setTimeout(this.allow,2600)
  }

  state = {
        good: this.props.good,
        chooseButton: {disabled:true},
        workmode: 1,
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
        animation: "leftPannel"
  }
  
  componentWillReceiveProps(newProps){  

  this.setState({good: newProps.good});
  this.setState({checked: newProps.checked});
  this.setState({workmode: newProps.workmode});

  if (newProps.workmode==1) this.setState({animation: "leftPannel"});
  if (newProps.workmode==0) this.setState({animation: "leftPannel AnimationLeftPannel"})
  
  }


  allow=()=>{
this.setState({chooseButton: {}})
  }

forInCycle = (hash) =>{
  let arr=[];
for (var i in hash){
arr.push(hash.i)
} return arr.length
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

artist = (EO) => { 
  this.props.history.push("/spotify:artists");
  //this.props.cbSetWorkmodeToZero()
}

songs = (EO) => { 
  this.props.history.push("/spotify:songs");
  //this.props.cbSetWorkmodeToOne()
}

mySongs = (EO) => { 
  this.props.history.push("/spotify:mysongs");
  //this.props.cbSetWorkmodeToMySongs()
}

main = (EO) => { 
  //this.props.cbSetWorkmodeToMain();
  this.props.history.push("/spotify:main");
}

search = (EO) => { 
  this.props.history.push("/spotify:search");
  //this.props.cbSearch()
}

move=()=>{
  //this.setState({animation: "leftPannel AnimationLeftPannel"})
  //this.setState({workmode: 0})
 // this.props.cbCloseLeftPannel()
  //setTimeout(this.move2,1000)
  this.props.cbCloseLeftPannel()
}

move2=()=>{
 // this.setState({workmode: 0})
  //this.props.cbCloseLeftPannel()
}

    render () {
      setTimeout(allow,2000);

      
      let style={color: "lightblue"};
let swith=(<div style={style}>ddfddf</div>)

let chooseButton=this.state.chooseButton;
let output=null;

function allow(){
        chooseButton={}
}
//if (this.state.workmode==1) 
output=(<div className={this.state.animation}>
  <img src="/source/img/logo.png" style={{width: 100 + '%'}}></img>   
<input type={"button"} value={"Main"} onClick={this.main} {...chooseButton}></input>   
<input type={"button"} value={"Artists"} onClick={this.artist} {...chooseButton}></input>  
<input type={"button"} value={"All songs"} onClick={this.songs} {...chooseButton}></input>
<input type={"button"} value={"My songs"} onClick={this.mySongs} {...chooseButton}></input> 
<input type={"button"} value={"Search..."} onClick={this.search} {...chooseButton}></input>
<input type={"button"} value="&lArr; Close" onClick={this.move} {...chooseButton}></input>      
             </div>  );
//if (this.state.workmode==0) output=null;

      return(output)//variable 
    }  
  }

  export default withRouter(LeftPannel);
