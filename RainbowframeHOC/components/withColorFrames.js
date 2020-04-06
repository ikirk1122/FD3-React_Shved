import React from 'react';
import './Main.css';

const withColorFrames = colors => Component => props =>{
  let temp=props.children;
  colors.forEach( color => {
    temp=<div style={{border:"solid 4px "+color, padding:"5px"}} >{temp}</div>
  });  
  temp=<div className='Main'>{temp}</div>;
  return temp;
}

export { withColorFrames };
