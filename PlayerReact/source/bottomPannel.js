"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import './player.css';
import {connect} from 'react-redux';

class intBottomPannel extends React.PureComponent
{

  static propTypes = {
  };


  state = {
        playing: undefined,
        animation: "bottomPannel"
  }
  
 temp={
   value:undefined
 } 
  componentWillReceiveProps(newProps){  
    if (newProps.playing==undefined){ this.setState({playing: undefined})};
    if (newProps.playing!=undefined){ this.setState({playing: undefined});

    //this.setState({playing: this.temp.value})
  //this.temp.value=newProps.playing;
  this.mySet();
  ;}
 
  }

mySet=(x)=>{
setTimeout(this.mySet2,100)
}

mySet2=(x)=>{
  this.setState({playing: this.props.playing})
}



forInCycle = (hash) =>{
  let arr=[];
for (var i in hash){
arr.push(hash.i)
} return arr.length
}


play=()=>{
  var zvukElem=document.getElementById('player');zvukElem.play();
}

pause=()=>{
  var zvukElem=document.getElementById('player');zvukElem.pause();
};

stop=()=>{
  var zvukElem=document.getElementById('player');zvukElem.pause();zvukElem.currentTime=0; 
};

min=()=>{
  var zvukElem=document.getElementById('player');zvukElem.volume=0.5;
};

max=()=>{
  var zvukElem=document.getElementById('player');zvukElem.volume=1.0;
};

mute=()=>{
  var zvukElem=document.getElementById('player');zvukElem.volume=0.0;
};


    render () {

      let delButton={};let eddButton={};
      if (this.state.workmode==2) {delButton={disabled:true}};
 if (this.state.workmode==3) {eddButton={disabled:true}; delButton={disabled:true}};


let inner;
/*
if (this.state.playing!=undefined) inner=(
  <audio loop controls autoPlay id="player"><source src={"/source/sound/"+((this.state.playing.code-100)+"")+".mp3"} type="audio/mpeg"></source></audio>)
*/

if (this.state.playing!=undefined&&this.state.playing.code==101) inner=(
<audio loop autoPlay id="player"><source src="/source/sound/1.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==102) inner=(
  <audio loop autoPlay id="player"><source src="/source/sound/2.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==103) inner=(
  <audio loop autoPlay id="player"><source src="/source/sound/3.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==104) inner=(
  <audio loop autoPlay id="player"><source src="/source/sound/4.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==105) inner=(
  <audio loop autoPlay id="player"><source src="/source/sound/5.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==106) inner=(
    <audio loop autoPlay id="player"><source src="/source/sound/6.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==107) inner=(
      <audio loop autoPlay id="player"><source src="/source/sound/7.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==108) inner=(
      <audio loop autoPlay id="player"><source src="/source/sound/8.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==109) inner=(
    <audio loop autoPlay id="player"><source src="/source/sound/9.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==110) inner=(
      <audio loop autoPlay id="player"><source src="/source/sound/10.mp3" type="audio/mpeg"></source></audio>);  
if (this.state.playing!=undefined&&this.state.playing.code==111) inner=(
        <audio loop autoPlay id="player"><source src="/source/sound/11.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==112) inner=(
          <audio loop autoPlay id="player"><source src="/source/sound/12.mp3" type="audio/mpeg"></source></audio>);  
if (this.state.playing!=undefined&&this.state.playing.code==113) inner=(
<audio loop autoPlay id="player"><source src="/source/sound/13.mp3" type="audio/mpeg"></source></audio>); 
if (this.state.playing!=undefined&&this.state.playing.code==114) inner=(
<audio loop autoPlay id="player"><source src="/source/sound/14.mp3" type="audio/mpeg"></source></audio>);  
if (this.state.playing!=undefined&&this.state.playing.code==115) inner=(
  <audio loop autoPlay id="player"><source src="/source/sound/15.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==116) inner=(
   <audio loop autoPlay id="player"><source src="/source/sound/16.mp3" type="audio/mpeg"></source></audio>);  
if (this.state.playing!=undefined&&this.state.playing.code==117) inner=(
<audio loop autoPlay id="player"><source src="/source/sound/17.mp3" type="audio/mpeg"></source></audio>);             
if (this.state.playing!=undefined&&this.state.playing.code==118) inner=(
 <audio loop autoPlay id="player"><source src="/source/sound/18.mp3" type="audio/mpeg"></source></audio>);  
if (this.state.playing!=undefined&&this.state.playing.code==119) inner=(
<audio loop autoPlay id="player"><source src="/source/sound/19.mp3" type="audio/mpeg"></source></audio>);
if (this.state.playing!=undefined&&this.state.playing.code==120) inner=(
<audio loop autoPlay id="player"><source src="/source/sound/20.mp3" type="audio/mpeg"></source></audio>);  
if (this.state.playing!=undefined&&this.state.playing.code==121) inner=(
 <audio loop autoPlay id="player"><source src="/source/sound/21.mp3" type="audio/mpeg"></source></audio>);   
 if (this.state.playing!=undefined&&this.state.playing.code==122) inner=(
  <audio loop autoPlay id="player"><source src="/source/sound/22.mp3" type="audio/mpeg"></source></audio>);  
  if (this.state.playing!=undefined&&this.state.playing.code==123) inner=(
   <audio loop autoPlay id="player"><source src="/source/sound/23.mp3" type="audio/mpeg"></source></audio>);  
   if (this.state.playing!=undefined&&this.state.playing.code==124) inner=(
    <audio loop autoPlay id="player"><source src="/source/sound/24.mp3" type="audio/mpeg"></source></audio>);  
    if (this.state.playing!=undefined&&this.state.playing.code==125) inner=(
     <audio loop autoPlay id="player"><source src="/source/sound/25.mp3" type="audio/mpeg"></source></audio>);   
     if (this.state.playing!=undefined&&this.state.playing.code==126) inner=(
      <audio loop autoPlay id="player"><source src="/source/sound/26.mp3" type="audio/mpeg"></source></audio>);  
      if (this.state.playing!=undefined&&this.state.playing.code==127) inner=(
       <audio loop autoPlay id="player"><source src="/source/sound/27.mp3" type="audio/mpeg"></source></audio>);  
       if (this.state.playing!=undefined&&this.state.playing.code==128) inner=(
        <audio loop autoPlay id="player"><source src="/source/sound/28.mp3" type="audio/mpeg"></source></audio>);  
        if (this.state.playing!=undefined&&this.state.playing.code==129) inner=(
         <audio loop autoPlay id="player"><source src="/source/sound/29.mp3" type="audio/mpeg"></source></audio>);   
         if (this.state.playing!=undefined&&this.state.playing.code==130) inner=(
          <audio loop autoPlay id="player"><source src="/source/sound/30.mp3" type="audio/mpeg"></source></audio>);  
          if (this.state.playing!=undefined&&this.state.playing.code==131) inner=(
           <audio loop autoPlay id="player"><source src="/source/sound/31.mp3" type="audio/mpeg"></source></audio>);
           if (this.state.playing!=undefined&&this.state.playing.code==132) inner=(
            <audio loop autoPlay id="player"><source src="/source/sound/32.mp3" type="audio/mpeg"></source></audio>);  
            if (this.state.playing!=undefined&&this.state.playing.code==133) inner=(
             <audio loop autoPlay id="player"><source src="/source/sound/33.mp3" type="audio/mpeg"></source></audio>);           
             if (this.state.playing!=undefined&&this.state.playing.code==134) inner=(
              <audio loop autoPlay id="player"><source src="/source/sound/34.mp3" type="audio/mpeg"></source></audio>);  
              if (this.state.playing!=undefined&&this.state.playing.code==135) inner=(
               <audio loop autoPlay id="player"><source src="/source/sound/35.mp3" type="audio/mpeg"></source></audio>);
               if (this.state.playing!=undefined&&this.state.playing.code==136) inner=(
                <audio loop autoPlay id="player"><source src="/source/sound/36.mp3" type="audio/mpeg"></source></audio>);  
                if (this.state.playing!=undefined&&this.state.playing.code==137) inner=(
                 <audio loop autoPlay id="player"><source src="/source/sound/37.mp3" type="audio/mpeg"></source></audio>)           
                 if (this.state.playing!=undefined&&this.state.playing.code==138) inner=(
                  <audio loop autoPlay id="player"><source src="/source/sound/38.mp3" type="audio/mpeg"></source></audio>);   
                  if (this.state.playing!=undefined&&this.state.playing.code==139) inner=(
                   <audio loop autoPlay id="player"><source src="/source/sound/39.mp3" type="audio/mpeg"></source></audio>);  
                   if (this.state.playing!=undefined&&this.state.playing.code==140) inner=(
                    <audio loop autoPlay id="player"><source src="/source/sound/40.mp3" type="audio/mpeg"></source></audio>);  
                    if (this.state.playing!=undefined&&this.state.playing.code==141) inner=(
                     <audio loop autoPlay id="player"><source src="/source/sound/41.mp3" type="audio/mpeg"></source></audio>);  
                     if (this.state.playing!=undefined&&this.state.playing.code==142) inner=(
                      <audio loop autoPlay id="player"><source src="/source/sound/42.mp3" type="audio/mpeg"></source></audio>);   
                      if (this.state.playing!=undefined&&this.state.playing.code==143) inner=(
                       <audio loop autoPlay id="player"><source src="/source/sound/43.mp3" type="audio/mpeg"></source></audio>);  
                       if (this.state.playing!=undefined&&this.state.playing.code==144) inner=(
                        <audio loop autoPlay id="player"><source src="/source/sound/44.mp3" type="audio/mpeg"></source></audio>);
                        if (this.state.playing!=undefined&&this.state.playing.code==145) inner=(
                         <audio loop autoPlay id="player"><source src="/source/sound/45.mp3" type="audio/mpeg"></source></audio>);  
                         if (this.state.playing!=undefined&&this.state.playing.code==146) inner=(
                          <audio loop autoPlay id="player"><source src="/source/sound/46.mp3" type="audio/mpeg"></source></audio>);           
                          if (this.state.playing!=undefined&&this.state.playing.code==147) inner=(
                           <audio loop autoPlay id="player"><source src="/source/sound/47.mp3" type="audio/mpeg"></source></audio>);  
                           if (this.state.playing!=undefined&&this.state.playing.code==148) inner=(
                            <audio loop autoPlay id="player"><source src="/source/sound/48.mp3" type="audio/mpeg"></source></audio>);
                            if (this.state.playing!=undefined&&this.state.playing.code==149) inner=(
                             <audio loop autoPlay id="player"><source src="/source/sound/49.mp3" type="audio/mpeg"></source></audio>);  
                             if (this.state.playing!=undefined&&this.state.playing.code==150) inner=(
                              <audio loop autoPlay id="player"><source src="/source/sound/50.mp3" type="audio/mpeg"></source></audio>)
                              if (this.state.playing!=undefined&&this.state.playing.code==151) inner=(
                                <audio loop autoPlay id="player"><source src="/source/sound/51.mp3" type="audio/mpeg"></source></audio>)
                              //  let counterValue;
                             // if (this.props.playing!=undefined)  counterValue=this.props.playing.code;
let output=null;
if (this.state.playing!==undefined) output=(<div className={this.state.animation} id='main'>
  <img src={this.state.playing.source} id="BottomImg"></img>
  <div className={'Description'} onClick={this.checkedF} data={this.state.playing.code}>
    
    <div>{this.state.playing.name}</div><div>{this.state.playing.title}</div></div>

<img className="bottomImg" src="/source/img/play.png" onClick={this.play}></img>
<img className="bottomImg" src="/source/img/pause.png" onClick={this.pause}></img>
<img className="bottomImg" src="/source/img/stop.png" onClick={this.stop}></img>
<img className="bottomImg" src="/source/img/min.png" onClick={this.min}></img>
<img className="bottomImg" src="/source/img/max.png" onClick={this.max}></img>
<img className="bottomImg" src="/source/img/mute.png" onClick={this.mute}></img>

{inner}

</div> );

//if (this.state.render==false) {output=null, this.setState({render: true})};          
/*
  <div className={'Action'}>
 
  <input  type={'button'} defaultValue={"Edit"} {...eddButton}
  data={undefined} data2={this.state.playing.code} onClick= {this.edited}/>
  <input className={'Count'} type={'button'} defaultValue={"Delete"} {...delButton}
  data={undefined} data2={this.state.playing.code} onClick= {this.deleted}/>
  </div>
*/
return(output)//variable 
    }  
  }
  const mapStateToProps = function (state) {
    return {
      cnt: state.counter.cnt,
      playing: state.counter.song
    };
  };
  
  const BottomPannel = connect(mapStateToProps)(intBottomPannel);
  export default BottomPannel;
