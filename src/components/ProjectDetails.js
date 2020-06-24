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
      <h1 className="project-detail-title">{ projectInfo.title }</h1>
      <div className="project-detail-stack">{ projectInfo["tech-stack" ]}</div>
      <img className="project-detail-image" src={ projectInfo["image"] } alt={projectInfo.title} />
      <div className="project-detail-description">{ projectInfo["full-description"] }</div>
    </div>
  );
}

export default ProjectDetails;
