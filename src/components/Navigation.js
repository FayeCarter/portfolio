import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <ul>
          <Link to="/">
            <li className="home-button">Home</li>
          </Link>
            <li> /  </li>
          <Link to="/projects">
            <li className="projects-button">Projects</li>
          </Link>
      </ul>
    </div>
  );
}

export default Navigation;
