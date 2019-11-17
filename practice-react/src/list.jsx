import React from 'react';
import ReactDOM from 'react-dom';
function ShowList(props){

  const listitems = props.numbers.map((curVal) =>

     <li key = {curVal.toString()}>{curVal}</li>
  );

  return (
    <ul>{listitems}</ul>
  );

}
export default ShowList;
