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
      <Navigation />
      <Links />
      <div className="Window ProjectDetails">
        <h1>{match.params.name}</h1>
        <div className="mini">
            {getProject()}
        </div>
      </div>
    </div>
  );
}

export default MiniProject;

