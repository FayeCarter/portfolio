import React, { useState, useEffect } from 'react';
import "./Block.css"

function Block ({value, activeBlock}) {

  const [ status, setStatus] = useState("inactive");

  useEffect(() => {
    if( value === activeBlock ) {
      setStatus("active")
      setTimeout(() => {
        setStatus("inactive")
      }, 1000)
    }
  }, [activeBlock]);

  return (
    <div className={`block ${status}`} value={value} >
      <div>{value}</div>
    </div>
  );
}

export default Block;
