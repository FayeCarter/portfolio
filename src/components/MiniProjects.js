import React from 'react';
import Navigation from './Navigation';
import Links from './Links';

function MiniProjects() {
  return (
    <div>
      <Links />
      <div className="Window">
        <Navigation />
        <div className="Mini-Projects">
          <a className="calculator-link">Calculator</a>
        </div>
      </div>
    </div>
  );
}

export default MiniProjects;
