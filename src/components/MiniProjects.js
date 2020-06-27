import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Links from './Links';
import './MiniProjects.css';

function MiniProjects() {
  return (
    <div>
      <Links />
      <div className="Window">
        <Navigation />
        <div className="Mini-Projects">
          <h1>Mini-Projects</h1>
          <div className="mini-projects-links">
            <Link className="calculator-link" to="/mini-projects/Calculator">Calculator</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniProjects;
