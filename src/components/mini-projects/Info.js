import React, { useState } from 'react';
import "./Info.css"

function Info({ description }) {

  const [ projectInfo, setProjectInfo ] = useState("")
  const updateInfo = () => {
    projectInfo ? setProjectInfo("") : setProjectInfo(description);
  };

  return (
    <div className="info" onMouseEnter={updateInfo} onMouseLeave={updateInfo}> 
      INFO
      { projectInfo ? <div className="info-box" >{projectInfo}</div> : null}
    </div>  
  );
}

export default Info;
