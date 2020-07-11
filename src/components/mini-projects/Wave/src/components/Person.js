import React, { useState } from 'react';
import wave1 from "../../images/wave1.svg"
import wave2 from "../../images/wave2.svg"

function Person() {
  const [image, setImage] = useState(wave1)

  return (
    <div className="Person">
      <img 
        className="person" 
        src={image} 
        alt="person"
        onMouseEnter={() => setImage(wave2)} 
        onMouseLeave={() => setImage(wave1)} 
      />
    </div>
  );
}

export default Person;
