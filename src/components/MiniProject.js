import React, { useState } from 'react';
import Navigation from './Navigation';
import Links from './Links';
import Info from "../components/mini-projects/Info"
import { projectDescription } from "./mini-projects/projectDescription";

function MiniProject( { match } ) {
  const project = match.params.name
 
  const getProject = () => {
    const Item = require(`./mini-projects/${project}/${project}` ).default
    return (
      <>
        <h1>{match.params.name}</h1>
        <Info  description={projectDescription[project]} />
        <Item />
      </>
    )
  }

  return (
    <div>
      <Navigation />
      <Links />
      <div className="Window ProjectDetails">
        <div className="mini">
        {getProject()}
        </div>
      </div>
    </div>
  );
}

export default MiniProject;

