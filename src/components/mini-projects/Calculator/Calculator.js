import React from 'react';
import { Link } from 'react-router-dom';

function Calculator() {
  return (
    <div className="Calculator">
      <form 
        className="form" 
      >
        <div className="calc-input" >0</div>
        <button className="number-buttons" value="1" >1</button>
        <button className="number-buttons" value="2" >2</button>
        <button className="number-buttons" value="3" >3</button>
        <button className="number-buttons" value="4" >4</button>
        <button className="number-buttons" value="5" >5</button>
        <button className="number-buttons" value="6" >6</button>
        <button className="number-buttons" value="7" >7</button>
        <button className="number-buttons" value="8" >8</button>
        <button className="number-buttons" value="9" >9</button>
        <button className="number-buttons" value="0" >0</button>
      </form>   
    </div>
  );
}

export default Calculator;
