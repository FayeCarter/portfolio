import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Links from './Links';

import projectsList from "./projectsList";
import './ProjectDetails.css';

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
    <div>
      <Links />
      <div className="Window">
        <div className="ProjectDetails">
          <Navigation />
          <div className="details-container">
            <h1 className="project-detail-title">{ projectInfo.title }</h1>
            <div className="project-detail-stack">{ projectInfo["tech-stack" ]}</div>
            <a href={ projectInfo.github } target="_blank" rel="noopener noreferrer">
              <img className="github-link" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/>
            </a>
            <div className="project-detail-description">{ projectInfo["full-description"] }</div>
            <img className="project-detail-image" src={ projectInfo["image"] } alt={projectInfo.title} />
          </div>
        </div>
        </div>    
    </div>
  );
}

export default ProjectDetails;
