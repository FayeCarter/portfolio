import React, {useEffect} from 'react';


function ProjectDetails( { match } ) {

  useEffect(() => [
    console.log({match})
  ])
  return (
    <div className="ProjectDetails">
      <div className="project-title">{ match.params.name }</div>
    </div>
  );
}

export default ProjectDetails;
