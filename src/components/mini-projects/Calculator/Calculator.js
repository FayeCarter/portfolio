import React, { useState } from 'react';
import './Calculator.css';

const NUMBERS = ["1","2","3","4","5","6","7","8","9","0"]
const ACTIONS = ["+","-","*","/"]

function Calculator(value) {

  const [ maths, setMaths ] = useState("");
  const [ result, setResult ] = useState("");

  const renderDisplay= (event, number) => {
    event.preventDefault()

    if ( NUMBERS.includes(number)) {
      setMaths( maths + (number))
    } else {
      setMaths( maths + ` ${number} `)
    }
  }

  const renderResult= (event) => {
    event.preventDefault()
    calculateResult()
  }

  const calculateResult= () => {
    let equation = maths.split(" ");
    let total = 0;
    let opperator = "+";
    for (let i = 0; i < equation.length ; i ++ ) {
      if (ACTIONS.includes(equation[i])) {
        opperator = equation[i]
      } else {
        if (opperator === "+" ) {
          total += parseInt(equation[i])
        } else if (opperator === "-" ){
          total -= parseInt(equation[i])
        } else if (opperator === "/" ){
          total /= parseInt(equation[i])
        }
      } 
    }
    setResult(total)
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
                  onClick={(event) => { renderDisplay(event, action) }}
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
