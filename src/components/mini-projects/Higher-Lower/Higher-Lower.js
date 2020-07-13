import React, { useState, useEffect} from 'react';
import axios from 'axios';

function HigherLower() {
  const [ currentCard, setCurrentCard ] = useState({
    image: "",
    value: "",
  });
  const [ previousCard, setPreviousCard ] = useState("");
  const [ deckID, setDeckId ] = useState("");
  const [ test, setTest ] = useState("");
  const [ score, setScore ] = useState("");

  const startGame =  () => {
    axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then( response => {
      let cardImage = response.data.cards[0].image
      let cardValue = response.data.cards[0].value
      let deck = response.data.deck_id
      setCurrentCard({image: cardImage, value: cardValue})
      setDeckId(deck)
    })
  }

  const higher =  async () => {
    await setPreviousCard(currentCard);
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    .then( response => {
      let cardImage = response.data.cards[0].image
      let cardValue = response.data.cards[0].value
      setCurrentCard({image: cardImage, value: cardValue})
      checkValue(cardValue)    
    })
  }
 
  const checkValue =  (value) => {
    value > currentCard.value ? setScore("1") : console.log("lower")
  }
    
  return (
    <div className="high-low">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Card_back_05a.svg" alt="deck"/>
      <div>
        <h3>Previous</h3>
        { previousCard.image ? <img src={previousCard.image} className="previous-card" alt="previous card"/> : null}
      </div>
      <div>
        <h3>Current</h3>
        { currentCard.image ? <img src={currentCard.image} className="current-card" alt="current card"/> : null}
      </div>
      <button className="start-game" onClick={startGame}>Start</button>
      <button className="higher" onClick={higher}>Higher</button>
      <div className="score" >{score}</div>
    </div>
  );
}

export default HigherLower;
