import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Links from './Links';

function MiniProjects() {
  return (
    <div>
      <Links />
      <div className="Window">
        <Navigation />
        <div className="Mini-Projects">
          <Link className="calculator-link" to="/mini-projects/Calculator">Calculator</Link>
        </div>
      </div>
    </div>
  );
}

export default MiniProjects;
