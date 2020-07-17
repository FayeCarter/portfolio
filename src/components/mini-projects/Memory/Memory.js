import React, {useState} from 'react';
import Block from './src/components/Block';

const COLOURS = ["red", "green", "blue", "yellow"]

function Memory() {
  const [activeBlock, setActiveBlock] = useState("0")
  
  const startGame = () => {
    let randomNumber = (Math.floor(Math.random() * COLOURS.length))
    setActiveBlock(COLOURS[randomNumber])
  }

  return (
    <div className="memory">
      {COLOURS.map((colour, index) => {
        return (
          <Block 
            key={ index  }
            value={ colour }
            activeBlock={ activeBlock }
          />
        )
      })}
      <button onClick={startGame} >Start Game</button>
    </div>
  );
}

export default Memory;
