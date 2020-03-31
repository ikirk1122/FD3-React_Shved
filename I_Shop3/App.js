"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './ishop';

let goodsList=require('./answers.json');
let infoList=require('./answers2.json');
let shopName="Магазин компьютерной периферии";

ReactDOM.render(
  <IShop
    shop={shopName}
    goods={goodsList}
    info={infoList}  
  />
  , document.getElementById('main') 
);

