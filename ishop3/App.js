"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './source/ishop';

let goodsList=require('./source/answers.json');
let infoList=require('./source/answers2.json');
let shopName="Магазин компьютерной периферии";

ReactDOM.render(
  <IShop
   shop={shopName}
    goods={goodsList}
    info={infoList}  
  />
  , document.getElementById('main') 
);

