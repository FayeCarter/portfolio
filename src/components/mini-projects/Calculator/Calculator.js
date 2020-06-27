import React from 'react';
import { Link } from 'react-router-dom';

function Calculator() {
  return (
    <div className="Calculator">
      <form 
        className="form" 
      >
        <div className="calc-input" >0</div>
        <div className="numbers">
          {[1,2,3,4,5,6,7,8,9,0].map((number, index) => {
              return (
                <button 
                  key={ index }
                  className="number-buttons"
                  value={ number }
                  >{ number }
                </button>
              )})}
        </div>
      </form>   
    </div>
  );
}

export default Calculator;
