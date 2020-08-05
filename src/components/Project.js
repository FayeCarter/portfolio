import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function Project( { title, project_description, tech_stack } ) {
  return (
    <div className="Project">
      <Link to={`projects/${title}`}>
        <div className="project-text">
          <div className="project-title">{ title }</div>
          <div className="project-description">{ project_description }</div>
          <div className="tech-stack">{ tech_stack }</div>
        </div>
      </Link>
    </div>
  );
}

export default Project;
