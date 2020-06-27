import React from 'react';
import { Link } from 'react-router-dom';

function Calculator() {
  return (
    <div className="Calculator">
      <form 
        className="form" 
      >
        <input
          type="text"
          className="calc-input"
          value="0"
        />
      </form>   
    </div>
  );
}

export default Calculator;
