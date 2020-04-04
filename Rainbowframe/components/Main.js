import React from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import RainbowFrame from './ColorFrame';

class Main extends React.Component {


  render() {
  
    let colors=['red','orange','yellow','green','#00bfff','blue','purple'];
    return (
      <div className='Main'>
    
        <RainbowFrame colors={colors}>
          Хэллоу!
        </RainbowFrame>
       
      </div>
    )
    ;

  }

}

export default Main ;
