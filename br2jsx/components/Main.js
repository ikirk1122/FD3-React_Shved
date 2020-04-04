import React from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import Br2jsx from './br2jsx';


class Main extends React.Component {


  render() {
  
    let text="первый<br>второй<br/>третий<br />последний";
    return (
      <div className='Main'>
        <Br2jsx text={text}/> 
      </div>
    )
    ;

  }

}

export default Main ;
