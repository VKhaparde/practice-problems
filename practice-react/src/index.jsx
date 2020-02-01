import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './calculator';
import ShowList from './list';
import ExampleForm from './form';
import App from './app';
import App2 from './app2';
// const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  // <ShowList numbers={numbers}/>,
  <ExampleForm/>,
  // <App />,
  // <App2 />,
  document.querySelector('#root')
);
