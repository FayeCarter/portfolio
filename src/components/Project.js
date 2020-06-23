import React from 'react';
import './Project.css';

function Project( { title, project_description, tech_stack, image } ) {
  return (
    <div className="Project">
      <h1 className="project-title">{ title }</h1>
      <div className="project-description">{ project_description }</div>
      <div className="tech-stack">{ tech_stack }</div>
      <img className="project-image" src={ image } alt={title} />
    </div>
  );
}

export default Project;
