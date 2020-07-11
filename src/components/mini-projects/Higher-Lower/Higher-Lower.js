import React, { useState, useEffect} from 'react';
import axios from 'axios';

function HigherLower() {
  const [card, setCard] = useState("")
  
  const getCard =  () => {
    axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then( response => {
      let cardImage = response.data.cards[0].image
      setCard(cardImage)
    })
  }

  return (
    <div className="high-low">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Card_back_05a.svg" alt="deck"/>
      { card? <img src={card} alt="card"/> : null}
      <button onClick={getCard}>Start</button>
    </div>
  );
}

export default HigherLower;
