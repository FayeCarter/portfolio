import React from 'react';

function Project( { title, project_description, image } ) {
  return (
    <div className="Project">
      <h1>{ title }</h1>
      <div className="project-description">{ project_description }</div>
      <img className="project-image" src={ image } alt={title} />
    </div>
  );
}

export default Project;
