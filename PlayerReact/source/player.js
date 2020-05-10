"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import './player.css';
import Items from './items';

import LeftPannel from './leftPannel';

import BottomPannel from './bottomPannel';


import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import counterReducer from "./counterReducer";
import isoFetch from 'isomorphic-fetch';

let combinedReducer=combineReducers({
    counter: counterReducer});
let store=createStore(combinedReducer);



class Player extends React.PureComponent {

  componentDidMount() {
    this.restoreAllData();
  }
/*---------------------------------------------------------AJAX PART STARTS------------------------------------------------*/


updatePassword={a:true};
temp={a:true};
info={a:true};




 storeFavorites=()=>{
  this.updatePassword.a=Math.random();
  $.ajax( {
          url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
          data : { f : 'LOCKGET', n : 'SHVED_SPOTIFY_FAVORITES', p : this.updatePassword.a },
          success : this.lockGetReady, error : this.errorHandler
      }
  );
};

lockGetReady=(callresult)=>{
  if ( callresult.error!=undefined )
      {alert(callresult.error);
      console.error(callresult.error);}
  else {
      if ( callresult.result!="" ) {
        this.info.a=JSON.parse(callresult.result);
    this.temp.a=this.info.a; 
    if ((Array.isArray(this.temp.a))===true) this.temp.a=this.state.mysongs; 
    if ((Array.isArray(this.temp.a))===false) this.temp.a=[new Array];
      };
      $.ajax( {
              url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
              data : { f : 'UPDATE', n : 'SHVED_SPOTIFY_FAVORITES', v : JSON.stringify(this.temp.a), p : this.updatePassword.a },
              success : this.updateReady, error : this.errorHandler
          }
      );
  };
};

updateReady=(callresult)=>{
  if ( callresult.error!=undefined )
      alert(callresult.error);
};

restoreInfo=()=>{//starts fetch API!
  $.ajax(
      {
          url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
          data : { f : 'READ', n : 'SHVED_NFS_GAME' },
          success : this.readReady, error : this.errorHandler
      }
  );
};



errorHandler=(jqXHR,statusStr,errorStr)=>{
  alert(statusStr+' '+errorStr);
};

restoreFavorites=()=>{//starts fetch API!
  $.ajax(
      {
          url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
          data : { f : 'READ', n : 'SHVED_SPOTIFY_FAVORITES' },
          success : this.readReadyFavorites, error : this.errorHandler
      }
  );
};

restoreAllData=()=>{//starts fetch API!
  $.ajax(
      {
          url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
          data : { f : 'READ', n : 'SHVED_SPOTIFY_SONGS' },
          success : this.readReadySongs, error : this.errorHandler
      }
  );
    $.ajax(
      {
          url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
          data : { f : 'READ', n : 'SHVED_SPOTIFY_ARTISTS' },
          success : this.readReadyArtists, error : this.errorHandler
      }
  );
      $.ajax(
        {
            url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : 'SHVED_SPOTIFY_FAVORITES' },
            success : this.readReadyFavorites, error : this.errorHandler
        }
      );
};

readReadySongs=(callresult)=>{
  if ( callresult.error!=undefined )
     { alert(callresult.error);
      console.error(callresult.error);}
  else if ( callresult.result!="" ) {
 this.setState({songs: JSON.parse(callresult.result)}); 
  }
};

readReadyArtists=(callresult)=>{
  if ( callresult.error!=undefined )
     { alert(callresult.error);
      console.error(callresult.error);}
  else if ( callresult.result!="" ) {
    this.setState({artists: JSON.parse(callresult.result)}); 
  }
};


readReadyFavorites=(callresult)=>{
  if ( callresult.error!=undefined )
     { alert(callresult.error);
      console.error(callresult.error);}
  else if ( callresult.result!="" ) {
    this.setState({mysongs: JSON.parse(callresult.result)}); 
  }
};
/*
insertString=()=>{
  $.ajax(
      {
          url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
          data : { f: 'INSERT', n: 'SHVED_SPOTIFY_FAVORITES', v: JSON.stringify({}) },
          success : this.readReady, error : this.errorHandler
      }
  );
};
*/

/*---------------------------------------------------------AJAX PART ENDS------------------------------------------------*/


  state = {
    mysongs: undefined,//temporaty storage for favorites
    mysongsCodes: [],//temporaty storage for favorites
    songs: undefined,// all songs
    artists: undefined,// all artists
    checked: undefined,// current choosen
    good: undefined,

    workmode: 0,//items and item view mode - artist, songs, mysongs, search
    chosenArtist: undefined,
    firstChange: false,
    ownworkmode: 1,//player view mode - work or loggin mode
    className: "Player",
    classNameLogo: "Logo2",
    classNameOpen: "Open2",
    workmodeLeft: 1,
    search: false
  }

    addedChanged=(x)=>{
      let temp=this.state.mysongs;
      let tempCodes=this.state.mysongsCodes;//for each needed!
      temp.push(x);
      tempCodes.push(x.code);
      this.setState( { mysongs:temp, mysongsCodes: tempCodes} );
      this.callAjax();   
    }

    callAjax=()=>{
      this.storeFavorites();
    }
    
    checkedChanged = (x,y) => {  

     this.setState( { checked:x } )
    };// - view mode
    


  
    deletedChanged = (xx) => { 
function ff (v,i,a){return i!=xx};
if (this.state.workmode==0)
this.setState( {checked:undefined,artists:((this.state.artists).filter(ff))} );
if (this.state.workmode==1)
this.setState( {checked:undefined,songs:((this.state.songs).filter(ff))} );
if (this.state.workmode==2)
{this.setState( {checked:undefined,mysongs:((this.state.mysongs).filter(ff)),mysongsCodes:((this.state.mysongsCodes).filter(ff))} );
this.callAjax();}
     }

     editedChanged = (xx) => { 
      if (this.state.firstChange==false)    
      this.setState( {good: this.state.goods[xx], checked:xx, workmode:2} );//2 - edit
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

setWorkmodeToMySongs=()=>{
  this.setState( {checked:undefined, workmode:2, firstChange:false, search: false} )
}

setWorkmodeToZero=()=>{
  this.setState( {checked:undefined, workmode:0, firstChange:false, search: false} )
}

setWorkmodeToOne=()=>{
  this.setState( {checked:undefined, workmode:1, firstChange:false, search: false} )
}

search=()=>{
  this.setState( {checked:undefined, workmode:1, firstChange:false, search: true, chosenArtist: undefined} )
}

closeLeftPannel=()=>{
  this.setState( {className: "Player PlayerF", classNameLogo: "Logo2 Logo", classNameOpen: "Open", workmodeLeft: 0} )
}

openLeftPannel=()=>{
  this.setState( {className: "Player", classNameLogo: "Logo2", classNameOpen: "Open2", workmodeLeft: 1} )
}

moveToArtist=(artist)=>{
  this.setState({chosenArtist: artist, workmode: 1, search: undefined})
}

render() { 
  if (this.state.songs==undefined||this.state.artists==undefined||this.state.mysongs==undefined)
  return (<div style={{fontSize: "18px", color: "orange", textAlign: "center"}}>LOADING DATA...<br></br>PLEASE WAIT A MINUTE...<hr></hr></div>);
  

  let output;
  if (this.state.ownworkmode==0) output=null;
  let items;
  if (this.state.ownworkmode==1) items=(<Items className='List'
  ownworkmode={this.state.ownworkmode}
  mysongsCodes={this.state.mysongsCodes}
  search={this.state.search}
  songs={this.state.songs}
  mysongs={this.state.mysongs}
  artists={this.state.artists}
  chosenArtist={this.state.chosenArtist}
  checked={this.state.checked}//needed for marking item
  cbcheckedChanged={this.checkedChanged}
  cbaddedChanged={this.addedChanged}
  cbdeletedChanged={this.deletedChanged}
  cbEditedChanged={this.editedChanged}
  workmode={this.state.workmode}//needed for disabling buttons in IGood 
  cbmoveToArtist={this.moveToArtist} 
  />);
  
  if (this.state.ownworkmode==1) output=(<Provider store={store}>
  
  <div className={this.state.className}>
    
        <LeftPannel cbSetWorkmodeToZero={this.setWorkmodeToZero}
        cbSetWorkmodeToOne={this.setWorkmodeToOne}
        cbCloseLeftPannel={this.closeLeftPannel}
        cbSetWorkmodeToMySongs={this.setWorkmodeToMySongs}
        cbSearch={this.search}
        workmode={this.state.workmodeLeft}
        />
      

    <div className={this.state.classNameLogo}></div>
    <div className={this.state.classNameOpen} onClick={this.openLeftPannel}><img src="/source/img/arrow.png"></img></div>
      {items}
      <div className="Brick"></div>
      

<BottomPannel/>  
                    </div>
                    </Provider>);

                    
  return (output);      
    }          
  }


export default Player;