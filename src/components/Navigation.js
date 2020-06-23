import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="Navigation">
      <ul>
          <Link to="/">
            <li className="home-button">Home</li>
          </Link>
      </ul>
    </div>
  );
}

export default Navigation;
