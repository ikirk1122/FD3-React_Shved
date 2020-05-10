"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Player from './source/player';
import PagesRouter from './PagesRouter';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render( 
  <BrowserRouter>
    <PagesRouter/>
  </BrowserRouter>
  ,
  document.getElementById('main') 
);

