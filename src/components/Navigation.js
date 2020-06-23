import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to="/Home">
            <button>Home</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
