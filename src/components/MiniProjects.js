import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Links from './Links';
import './MiniProjects.css';

function MiniProjects() {
  return (
    <div>
      <Navigation />
      <Links />
      <div className="Window Mini-Projects">
        <h1>Mini-Projects</h1>
        <div className="mini-projects-links">
          <Link className="calculator-link mini-links" to="/mini-projects/Calculator">Calculator</Link>
          <Link className="mini-links" to="/mini-projects/Wave">Wave</Link>
        </div>
      </div>
    </div>
  );
}

export default MiniProjects;
