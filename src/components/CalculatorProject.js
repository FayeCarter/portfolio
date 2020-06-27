import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Links from './Links';
import Calculator from "../components/mini-projects/Calculator/Calculator";

function CalculatorProject() {

  return (
    <div>
      <Links />
      <div className="Window">
        <div className="CalculatorProject">
          <Navigation />
          <h1>Calculator</h1>
          <Calculator />
        </div>
      </div>    
    </div>
  );
}

export default CalculatorProject;
