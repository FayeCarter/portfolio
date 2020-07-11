import React, { useState, useEffect } from 'react';
import "./Block.css"

function Block ({value, activeNumber}) {

  const [ status, setStatus] = useState("inactive");

  useEffect(() => {
    if( value === activeNumber ) {
      setStatus("active")
    }
  }, [activeNumber]);

  return (
    <div className={`block ${status}`} value={value} >
      <div>{value}</div>
    </div>
  );
}

export default Block;
