import React, { useState } from 'react';

function Calculator(value) {

  const [ display, setDisplay ] = useState("")

  const renderDisplay= (e, number) => {
    e.preventDefault()
    setDisplay(number)
  }

  return (
    <div className="Calculator">
      <form 
        className="form" 
      >
        <div className="calc-result" >0</div>
        <div className="calc-input" >{ display }</div>
        <div className="numbers">
          {[1,2,3,4,5,6,7,8,9,0].map((number, index) => {
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
      </form>   
    </div>
  );
}

export default Calculator;
