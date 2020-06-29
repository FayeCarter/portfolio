import React from 'react';
import Navigation from './Navigation';
import Links from './Links';

function MiniProject( { match } ) {

  const getProject = () => {
    const Item = require(`./mini-projects/${match.params.name}/${match.params.name}` ).default
    return (
      <Item />
    )
  }

  return (
    <div>
      <Links />
      <div className="Window">
        <div className="ProjectDetails">
          <Navigation />
          <h1>{match.params.name}</h1>
          <div className="mini">
              {getProject()}
          </div>
        </div>
      </div>    
    </div>
  );
}

export default MiniProject;

