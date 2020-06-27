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
          <Calculator />
        </div>
        </div>    
    </div>
  );
}

export default CalculatorProject;
