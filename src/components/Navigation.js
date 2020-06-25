import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <ul>
          <Link to="/">
            <li className="home-button">HOME</li>
          </Link>
          <Link to="/projects">
            <li className="projects-button">PROJECTS</li>
          </Link>
      </ul>
    </div>
  );
}

export default Navigation;
