import React, { useState } from 'react';

const NUMBERS = ["1","2","3","4","5","6","7","8","9","0"]
const ACTIONS = ["+","-","X","/"]

function Calculator(value) {

  const [ display, setDisplay ] = useState("");

  const renderDisplay= (event, number) => {
    event.preventDefault()
    setDisplay( display + number)
  }

  return (
    <div className="Calculator">
      <form 
        className="form" 
      >
        <div className="calc-result" >0</div>
        <div className="calc-input" >{ display }</div>
        <div className="numbers">
          {NUMBERS.map((number, index) => {
              return (
                <button 
                  key={ index }
                  className="number-buttons"
                  value={ number }
                  onClick={(event) => { renderDisplay(event, number) }}
                  >{ number }
                </button>
              )})}
        </div>
        <div className="actions">
          {ACTIONS.map((action, index) => {
              return (
                <button 
                  key={ index }
                  className="action-buttons"
                  value={ action }
                  >{ action }
                </button>
              )})}
        </div>
      </form>   
    </div>
  );
}

export default Calculator;
