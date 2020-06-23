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
            <div className="project" key={ index  }>
              <Project 
                title={ project.title }
                project_description="A welcoming chat room environment for developers."
                tech_stack="Sockets, OAuth, React, Node, Express, MongoDB"
                image="https://github.com/FayeCarter/CV/raw/master/gifs/WhatStack.gif"
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Projects;
