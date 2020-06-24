import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationPanel.css';

function Navigation() {
  return (
    <div className="NavigationPanel">
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
