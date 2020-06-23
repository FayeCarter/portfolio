import React from 'react';
import Navigation from './Navigation';
import Project from "./Project";
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <Navigation />
      <h1>Projects</h1>
      <div className="project-container">
        <Project 
          title="WhatStack"
          project_description="A welcoming chat room environment for developers."
          tech_stack="Sockets, OAuth, React, Node, Express, MongoDB"
          image="https://github.com/FayeCarter/CV/raw/master/gifs/WhatStack.gif"
        />
      </div>
    </div>
  );
}

export default Projects;
