import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <ul>
          <Link to="/">
            <li className="navigation-link, home-button">HOME</li>
          </Link>
          <Link to="/projects">
            <li className="navigation-link, projects-button">PROJECTS</li>
          </Link>
      </ul>
    </div>
  );
}

export default Navigation;
