import React, { useState } from 'react';
import './Calculator.css';

const NUMBERS = ["1","2","3","4","5","6","7","8","9","0"]
const OPERATORS = ["+","-","*","/"]

function Calculator() {

  const [ calculation, setCalculation ] = useState("");
  const [ result, setResult ] = useState("");

  const renderDisplay= (event, buttonValue) => {
    event.preventDefault()

    if ( NUMBERS.includes(buttonValue)) {
      setCalculation( calculation + (buttonValue))
    } else {
      setCalculation( calculation + ` ${buttonValue} `)
    }
  }

  const renderResult= (event) => {
    event.preventDefault()
    calculateResult()
  }

  const clearDisplay= (event) => {
    event.preventDefault()
    setCalculation("")
    setResult("")
  }

  const calculateResult= () => {
    let equation = calculation.split(" ");
    let total = 0;
    let operator = "+";
    for (let i = 0; i < equation.length ; i ++ ) {
      if (OPERATORS.includes(equation[i])) {
        operator = equation[i]
      } else {
        if (operator === "+" ) {
          total += parseInt(equation[i])
        } else if (operator === "-" ){
          total -= parseInt(equation[i])
        } else if (operator === "/" ){
          total /= parseInt(equation[i])
        } else {
          total *= parseInt(equation[i])
        }
      } 
    }
    setResult(total)
  }

  return (
    <div className="Calculator mini-project">
      <form >
        <div className="result" >{ result }</div>
        <div className="calculation" >{ calculation }</div>
        <button 
          className="clear-button"
          onClick={ clearDisplay }
          >C
        </button>
        <div className="numbers">
          {NUMBERS.map((number, index) => {
              return (
                <button 
                  key={ index }
                  className="number-button"
                  value={ number }
                  onClick={(event) => { renderDisplay(event, number) }}
                  >{ number }
                </button>
              )})}
        </div>
        <div className="operators">
          {OPERATORS.map((operator, index) => {
              return (
                <button 
                  key={ index }
                  className="operator-button"
                  value={ operator }
                  onClick={(event) => { renderDisplay(event, operator) }}
                  >{ operator }
                </button>
              )})}
        </div>
        <button 
          className="equals-button"
          onClick={ renderResult }
          >=
        </button>
      </form>   
    </div>
  );
}

export default Calculator;
