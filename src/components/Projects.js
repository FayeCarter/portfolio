import React from 'react';
import NavigationPanel from './NavigationPanel';
import Project from "./Project";
import projectsList from "./projectsList";
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <NavigationPanel />
      <h1>Projects</h1>
      <div className="project-container">
        {projectsList.map((project, index) => {
          return (
            <div className="project" key={ index  }>
              <Project 
                title={ project.title }
                project_description={project["short-description"]}
                tech_stack={ project["tech-stack"]}
                image={ project.image }
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Projects;
