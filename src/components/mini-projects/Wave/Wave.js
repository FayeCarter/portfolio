import React, {useState, useEffect} from 'react';
import wave1 from "./images/wave1.svg"
import wave2 from "./images/wave2.svg"

function Wave() {
  const [image, setImage] = useState(wave1)

  return (
    <div className="Wave">
      <img 
        className="person" 
        src={image} 
        onMouseEnter={() => setImage(wave2)} 
        onMouseLeave={() => setImage(wave1)} 
      />
    </div>
  );
}

export default Wave;
