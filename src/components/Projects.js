import React from 'react';
import Navigation from './Navigation';
import Project from "./Project";
import projectsList from "./projectsList";
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <Navigation />
      <h1>Projects</h1>
      <div className="project-container">
        {projectsList.map((project, index) => {
          return (
            <Project 
              key={ index  }
              title={ project.title }
              project_description={project["short-description"]}
              tech_stack={ project["tech-stack"]}
              image={ project.image }
            />
          )
        })}
        <Project title="Coming Soon" />
        <Project title="Coming Soon" />
        <Project title="Coming Soon" />
        <Project title="Coming Soon" />
        <Project title="Coming Soon" />
        <Project title="Coming Soon" />
        <Project title="Coming Soon" />
        <Project title="Coming Soon" />
        <Project title="Coming Soon" />
      </div>
    </div>
  );
}

export default Projects;
