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
    getProject()
  })

  return (
    <div>
      <Navigation />
      <Links />
      <div className="Window ProjectDetails">
        <div className="details-container">
          <h1 className="project-detail-title">{ projectInfo.title }</h1>
          <div className="project-detail-stack">{ projectInfo["tech-stack" ]}</div>
          <ul className="project-links" >
            <a href={ projectInfo.github } target="_blank" rel="noopener noreferrer">
              <li className="project-link" >GITHUB</li>
            </a>
            { projectInfo.live ? <a href={ projectInfo.live } target="_blank" rel="noopener noreferrer">
              <li className="project-link" >LIVE</li>
            </a> : null } 
          </ul>
          <h2>What is { projectInfo.title }</h2>
          <div className="project-detail-description">{ projectInfo["full-description"] ? projectInfo["full-description"].map((line, index) => {
            return(
            <div key={ index }>{ line }</div>
            )}) : null}
          </div>
          <h2>What can { projectInfo.title } do</h2>
          <div className="project-key-features">{ projectInfo["key-features"] ? projectInfo["key-features"].map((line, index) => {
            return(
            <div key={ index }>{ line }</div>
            )}) : null}
          </div>
        </div>
        <img className="project-detail-image" src={ projectInfo["image"] } alt={projectInfo.title} />
      </div>
    </div>
  );
}

export default ProjectDetails;
