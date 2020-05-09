"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Player from './source/player';


/*
 artists={require('./source/artists.json')} 
  songs={require('./source/songs.json')}
*/

ReactDOM.render( 
  <Player />,
  document.getElementById('main') 
);

