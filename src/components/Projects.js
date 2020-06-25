import React from 'react';
import Navigation from './Navigation';
import Project from "./Project";
import Links from './Links';
import projectsList from "./projectsList";
import './Projects.css';

function Projects() {
  return (
    <div>
      <Links />
      <div className="Window">
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
            <div className="Project">
              <div className="project-title">Coming Soon</div>
            </div>
            <a className="Project" href="https://github.com/FayeCarter?tab=repositories">
              <div className="project-title">see more on Github ...</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
