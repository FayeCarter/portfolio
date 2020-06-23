import React from 'react';
import Navigation from './Navigation';
import Project from "./Project";

function Projects() {
  return (
    <div className="Projects">
      <Navigation />
      <h1>Projects</h1>
      <Project 
        title="WhatStack"
        project_description="The aim of the project was to create a welcoming chat room environment for developers to ask for help.
        Users can access the site using their GitHub Login details, create a room based around their concern, post a question and receive feedback in real-time.
        If the user wants to send a code block, it can be entered using markdown by typing three backticks followed by the language their code is written in. The message will be formatted as a code block in the specified language highlighting variables and correctly indenting each line."
        image="https://github.com/FayeCarter/CV/raw/master/gifs/WhatStack.gif"
      />
    </div>
  );
}

export default Projects;
