import React, {useState} from 'react';
import Block from './src/components/Block';

function Memory() {

  const [activeBlock, setActiveBlock] = useState("0")
  
  const startGame = () => {
    let randomNumber = (Math.floor(Math.random() * 4) + 1)
    setActiveBlock(String(randomNumber))
  }

  return (
    <div className="memory">
      <Block value="1" activeNumber={ activeBlock } />
      <Block value="2" activeNumber={ activeBlock } />
      <Block value="3" activeNumber={ activeBlock } />
      <Block value="4" activeNumber={ activeBlock } />
      <button onClick={startGame} >Start Game</button>
    </div>
  );
}

export default Memory;
