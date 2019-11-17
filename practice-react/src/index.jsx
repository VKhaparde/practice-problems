import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './calculator';
import ShowList from './list'
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <ShowList numbers={numbers}/>,
  document.querySelector('#root')
);
