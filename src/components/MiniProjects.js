import React from 'react';
import Navigation from './Navigation';
import Links from './Links';

function MiniProjects() {
  return (
    <div>
      <Links />
      <div className="Window">
        <div className="Projects">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default MiniProjects;
