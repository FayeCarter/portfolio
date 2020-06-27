import React, { useState } from 'react';

const NUMBERS = ["1","2","3","4","5","6","7","8","9","0"]
const ACTIONS = ["+","-","X","/"]

function Calculator(value) {

  const [ maths, setMaths ] = useState("");
  const [ result, setResult ] = useState("");

  const renderDisplay= (event, number) => {
    event.preventDefault()
    setMaths( maths + number)
  }

  const renderResult= (event) => {
    event.preventDefault()
    setResult( maths )
  }

  return (
    <div className="Calculator">
      <form 
        className="form" 
      >
        <div className="calc-result" >{ result }</div>
        <div className="calc-input" >{ maths }</div>
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
        <button 
          className="equals-button"
          value="="
          onClick={ renderResult }
          >=
        </button>
      </form>   
    </div>
  );
}

export default Calculator;
