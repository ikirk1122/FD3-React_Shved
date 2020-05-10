import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Player from './source/player';
import BeforePlayer from './beforePlayer';


window.onbeforeunload=function befUnload (EO) {EO=EO||window.event;EO.returnValue='Work will be lost!';};


class PagesRouter extends React.Component {

  constructor(){
    super();
    //window.location.hash="/spotify:main"
  }

  render() {
// <Route path="/" exact component={BeforePlayer} /> >
    return (  <div>
   <Route path="/" exact component={BeforePlayer} />
<Route path="/spotify:parameter" component={BeforePlayer} />
</div>  

         
    );
    
  }

}
    
export default PagesRouter;
    