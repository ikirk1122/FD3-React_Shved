import React from 'react';
import PropTypes from 'prop-types';
import { withColorFrames} from './withColorFrames';
import './Main.css';


class Main extends React.Component {

  render() {
    let colors=['red','orange','yellow','green','#00bfff','blue','purple'];
    let FramedFragment=withColorFrames(colors)();
    return (
 
        <FramedFragment>
          Хэллоу!
        </FramedFragment> 


    )
    ;

  }

}

export default Main ;
