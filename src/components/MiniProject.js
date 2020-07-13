import React from 'react';
import Navigation from './Navigation';
import Links from './Links';
import Info from "./mini-projects/Info"

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
        <div className="mini">
        <h1>{match.params.name}</h1>
        <Info description="Words and Words"/>
          {getProject()}
        </div>
      </div>
    </div>
  );
}

export default MiniProject;

