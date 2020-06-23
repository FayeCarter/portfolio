import React from 'react';

function Project( { title, project_description } ) {
  return (
    <div className="Project">
      <h1>{ title }</h1>
      <div className="project-description">{ project_description }</div>
    </div>
  );
}

export default Project;
