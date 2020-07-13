import React, { useState } from 'react';

function Info({ description }) {

  const [ projectInfo, setProjectInfo ] = useState("")
  const showInfo = () => {
    setProjectInfo(description)
  };

  return (
    <div className="info" onMouseEnter={showInfo}> 
      INFO
      { projectInfo ? <div className="info-box" >{projectInfo}</div> : null}
    </div>  
  );
}

export default Info;
