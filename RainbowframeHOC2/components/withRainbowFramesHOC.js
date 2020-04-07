import React from 'react';
import './Style.css';

const withRainbowFramesHOC = colors => Component => props =>{

  let tempVariable=<Component {...props}> {props.children} </Component>;
      colors.forEach( oneColor => {     
          tempVariable=<div style={{border:"solid 4px "+oneColor, padding:"5px"}} >{tempVariable}</div>
            });
              tempVariable=<div className='Main'>{tempVariable}</div>;

  return tempVariable;
};

export { withRainbowFramesHOC };
