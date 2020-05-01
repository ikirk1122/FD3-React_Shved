"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Player from './source/player';
import LeftPannel from './source/leftPannel';

let goodsList=require('./source/answers.json');
let infoList=require('./source/answers2.json');
let shopName="Магазин компьютерной периферии";

ReactDOM.render(
  
  <Player
   shop={shopName}
    goods={goodsList}
    info={infoList}  
  />
  
  , document.getElementById('main') 
);

