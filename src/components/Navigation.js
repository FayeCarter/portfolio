import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="Navigation">
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
