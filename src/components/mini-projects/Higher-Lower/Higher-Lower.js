import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { cardConverter } from './src/cardCoverter';

function HigherLower() {
  const [ currentCard, setCurrentCard ] = useState({
    image: "",
    value: "",
  });
  const [ previousCard, setPreviousCard ] = useState({
    image: "",
    value: "",
  });
  const [ deckID, setDeckId ] = useState("");
  const [ active, setActive ] = useState(false);
  const [ score, setScore ] = useState(0);

  const startGame = async () => {
    setActive(true)
    let response = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    let cardImage = response.data.cards[0].image
    let cardValue = response.data.cards[0].value
    let deck = response.data.deck_id
    
    setCurrentCard({image: cardImage, value: cardConverter(cardValue)})
    setDeckId(deck)
  }

  const higher =  async () => {
    setPreviousCard(currentCard);
    let value = await getCard()
    cardConverter(value) > currentCard.value ? setScore(score + 1) : checkDraw(cardConverter(value), currentCard.value);
  }

  const lower =  async () => {
    setPreviousCard(currentCard);
    let value = await getCard()
    cardConverter(value) < currentCard.value ? setScore(score + 1) : checkDraw(cardConverter(value), currentCard.value);
  }

  const checkDraw =  (current, previous) => {
    if ( current !== previous) {
      setActive(false);
    }
  }


  const getCard = async () => {
    let response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    let cardImage = response.data.cards[0].image
    let cardValue = response.data.cards[0].value
    setCurrentCard({image: cardImage, value: cardConverter(cardValue)}) 
    return cardValue;
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
      <button className="lower" onClick={lower}>Lower</button>
      <div className="score" >{score}</div>
      { !active ? <div className="game-status" >Game Over</div> : null}
    </div>
  );
}

export default HigherLower;
