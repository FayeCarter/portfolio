import React, {useState} from 'react';
import Block from './src/components/Block';
import "./Memory.css"

const COLOURS = ["red", "green", "blue", "yellow"]

function Memory() {
  const [activeBlock, setActiveBlock] = useState("0")
  
  const startGame = () => {
    let randomNumber = (Math.floor(Math.random() * COLOURS.length))
    setActiveBlock(COLOURS[randomNumber])
  }

  return (
    <div className="memory mini-project">
      <div className="blocks">
        {COLOURS.map((colour, index) => {
          return (
            <Block 
              key={ index  }
              value={ colour }
              activeBlock={ activeBlock }
            />
          )
        })}
        <button className="start" onClick={startGame} >Start</button>
      </div>
    </div>
  );
}

export default Memory;
