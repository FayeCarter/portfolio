import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';

import projectsList from "./projectsList";

function ProjectDetails( { match } ) {
  const [ projectInfo, setProjectInfo ] = useState({})

  const getProject = () => {
    const project = projectsList.find((project) => project["title"] ===  match.params.name )
    setProjectInfo(project)
  }

  useEffect(() => {
    console.log(match)
    getProject()
  })

  return (
    <div className="ProjectDetails">
      <Navigation />
      <div className="project-title">{ projectInfo.title }</div>
    </div>
  );
}

export default ProjectDetails;
