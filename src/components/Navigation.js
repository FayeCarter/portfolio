import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <ul>
          <Link to="/">
            <li className="navigation-link">HOME</li>
          </Link>
          <Link to="/projects">
            <li className="navigation-link">PROJECTS</li>
          </Link>
      </ul>
    </div>
  );
}

export default Navigation;
