import React from 'react';
import logo from './logo.svg';

function TextBox(probs: {label: string, change: (value:string)=>void}) {
  return (
    <div>
        <label>{probs.label} </label>
        <input type="text" onChange={(event) => probs.change(event.target.value)}></input>
    </div>
  );
}

export default TextBox;