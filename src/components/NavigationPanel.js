import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationPanel.css';

function Navigation() {
  return (
    <div className="NavigationPanel">
      <h1>Faye Carter</h1>
      <h2>Junior Full Stack Developer</h2>
      <ul>
          <Link to="/">
            <li className="home-button">Home</li>
          </Link>
          <Link to="/projects">
            <li className="projects-button">Projects</li>
          </Link>
      </ul>
    </div>
  );
}

export default Navigation;
