import React, { useEffect, useState } from 'react';
import projectsList from "./projectsList";

function ProjectDetails( { match } ) {
  const [ projectInfo, setProjectInfo ] = useState({})

  const getProject = () => {
    const project = projectsList.find((project) => project["title"] ===  match.params.name )
    setProjectInfo(project)
  }

  useEffect(() => {
    getProject()
  })

  return (
    <div className="ProjectDetails">
      <div className="project-title">{ projectInfo.title }</div>
    </div>
  );
}

export default ProjectDetails;
