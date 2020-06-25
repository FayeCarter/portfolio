import React from 'react';
import { Link } from 'react-router-dom';

import './Project.css';

function Project( { title, project_description, tech_stack, image } ) {
  return (
    <div className="Project">
      <Link to={`projects/${title}`}>
        <img className="project-image" src={ image } alt={title} />
        <div className="project-title">{ title }</div>
        <div className="project-description">{ project_description }</div>
        <div className="tech-stack">{ tech_stack }</div>
      </Link>
    </div>
  );
}

export default Project;
