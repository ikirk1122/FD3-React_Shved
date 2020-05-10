"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import './player.css';


class Items extends React.Component
{

  static propTypes = {

  
    cbcheckedChanged: PropTypes.func.isRequired,
    cbdeletedChanged: PropTypes.func.isRequired,


    workmode: PropTypes.any.isRequired
  
  };


  state = {
        artists: this.props.artists,
        mysongs: this.props.mysongs,
        songs: this.props.songs,
        chosenArtist: this.props.chosenArtist,
        info: this.props.info,
        checked: this.props.checked,
        workmode: this.props.workmode,
        searchText: "",
        viewCount: "-1",
        viewThreshold: 10,
        search: this.props.search
        
  }
  componentWillReceiveProps(newProps){
  this.setState({songs: newProps.songs});
  this.setState({mysongs: newProps.mysongs});
  this.setState({artists: newProps.artists});
  this.setState({checked: newProps.checked});
  this.setState({workmode: newProps.workmode});
  
  this.setState({search: newProps.search});
  this.setState({checked: newProps.checked});
  this.setState({workmode: newProps.workmode});
  this.setState({chosenArtist: newProps.chosenArtist});

  }
  searchTextChange = (EO) => { 
    this.setState({searchText:EO.target.value, chosenArtist: undefined }); 
  }

  viewCountChange = (EO) => { 
    let temp=Number.parseInt(EO.target.getAttribute("data"));
     this.setState({viewCount:temp});
  }

  setThresholdToTen=()=>{
    this.setState({viewThreshold:10, viewCount:"0"})
  }

  setThresholdToFive=()=>{
    this.setState({viewThreshold:5, viewCount:"0"})
  }
 
    render () {
      if(this.state.workmode==10) return (<div className="MainPage">   &copy; Spotify gives you instant access to millions of songs – 
        from old favorites to the latest hits. Just hit play to stream anything you like.</div>)

var items;
  if (this.state.workmode==0) items=this.state.artists.map( v=>
    <Item className='Lists' 
    key={v.code}good={v}
    index={this.props.artists.indexOf(v)}    
    checked={this.state.checked}
    workmode={this.state.workmode}
    mysongsCodes={this.props.mysongsCodes}
    cbcheckedChanged={this.props.cbcheckedChanged}
    cbdeletedChanged={this.props.cbdeletedChanged}
    cbmoveToArtist={this.props.cbmoveToArtist}
                 />                 
                );
                if (this.state.workmode==1) items=this.state.songs.map( v=>
                <Item className='Lists' 
                              key={v.code}
                              good={v}
                              mysongsCodes={this.props.mysongsCodes}
                              index={this.state.songs.indexOf(v)}    
                              checked={this.state.checked}
                              workmode={this.state.workmode}
                              cbcheckedChanged={this.props.cbcheckedChanged}
                              cbdeletedChanged={this.props.cbdeletedChanged}
                              cbaddedChanged={this.props.cbaddedChanged}
                              cbmoveToArtist={this.props.cbmoveToArtist}
                               />               
                              );
                              if (this.state.workmode==2) items=this.state.mysongs.map( v=>
                                <Item className='Lists' 
                                            key={v.code}
                                            good={v}
                                            mysongsCodes={this.props.mysongsCodes}
                                            index={this.props.mysongs.indexOf(v)}    
                                            checked={this.state.checked}
                                            workmode={this.state.workmode}
                                            cbmoveToArtist={this.props.cbmoveToArtist}
                                            cbcheckedChanged={this.props.cbcheckedChanged}
                                            cbdeletedChanged={this.props.cbdeletedChanged}
                                             />                 
                                            );                                               
     
function searchF (array,text,state,props,mode){
  let tempSongsArtist=[]; 
  let output=[]; let searchKey;
  if (mode=="songs") searchKey="title";
  if (mode=="artists") {searchKey="name", text=props.chosenArtist.name};
  for (let i=0; i<array.length; i++){
    
if (array[i][searchKey].toLowerCase().indexOf(text.toLowerCase())!=(-1)) {output.push(
<Item className='Lists'
           key={array[i].code}
           good={array[i]}
           index={i}
           checked={state.checked}
           workmode={state.workmode}
           mysongsCodes={props.mysongsCodes}
           cbcheckedChanged={props.cbcheckedChanged}
           cbdeletedChanged={props.cbdeletedChanged}
           cbaddedChanged={props.cbaddedChanged}
           cbmoveToArtist={props.cbmoveToArtist}
         />); 
         tempSongsArtist.push(array[i])}
  
}

return [output,tempSongsArtist]
}

var temp;


      if (this.state.workmode == 1 && this.props.search==true) items = searchF(this.props.songs,this.state.searchText,this.state,this.props,"songs")[0];
      if (this.state.workmode == 1 && this.props.search==undefined) {items = searchF(this.props.songs,this.state.chosenArtist,this.state,this.props,"artists")[0];
      temp = searchF(this.props.songs,this.state.chosenArtist,this.state,this.props,"artists")[1];}
      if (this.state.workmode == 1 && this.state.viewCount!="-1") items=items.slice(this.state.viewCount*this.state.viewThreshold,(this.state.viewCount)*this.state.viewThreshold+this.state.viewThreshold);

let search=null;  let info=null;
if (this.state.workmode==0) info=(<div>ALL ARTISTS</div>);
if (this.state.workmode==1&&this.props.search==false) info=(<div>ALL SONGS</div>);
if (this.state.workmode==2) info=(<div>MY FAVORITE SONGS</div>);
if (this.state.workmode==1&&this.props.search==true) info=(<div>SEARCH MODE</div>);


if (this.props.search==true&&this.state.workmode==1) search=(<div><input style={{margin: "10px"}}type="text" id="SearchInput" onInput={this.searchTextChange} 
defaultValue={this.state.searchText}>
  </input><span> &lArr; Search Here Your Songs By Title</span></div>);

  let listcount=[];
   if (this.state.songs.length>0 && this.state.workmode == 1){
    listcount.push(<div className="ListCountElement" key={200} data="-1" onClick={this.viewCountChange}>All</div>);
    listcount.push(<div className="ListCountElement" key={199}  onClick={this.setThresholdToTen}>10 on page</div>);
    listcount.push(<div className="ListCountElement" key={198}  onClick={this.setThresholdToFive}>5 on page</div>);
  };
   let arrayKey=this.state.songs;
   if (this.props.search==undefined) arrayKey=temp;

   if (this.state.songs.length>0 && this.state.workmode == 1)
{for (let i=0; i<Math.ceil(arrayKey.length/this.state.viewThreshold); i++){
  listcount.push(<div className="ListCountElement" key={i+1+200} data={i+""} onClick={this.viewCountChange}>{((i*this.state.viewThreshold+1)+"-"+(i*this.state.viewThreshold+this.state.viewThreshold)+'')}</div>);
};}
  

 if (arrayKey.length==0&&this.state.search==undefined) listcount=(<div>No matches found</div>)
 if (arrayKey.length==0&&this.state.workmode == 2) listcount=(<div>No matches found</div>)

      return(
      <div className={"List"}>{info}{search}
  <div className="ListCount">
  
  {listcount}
  </div>
<div className={'Lists'}>{items}</div>
       </div>
      )
      

    }
  
  }

  export default Items;
