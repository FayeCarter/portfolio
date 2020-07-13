import React, { useState } from 'react';
import axios from 'axios';
import { cardConverter } from './src/cardCoverter';
import "./HL.css"

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
    resetGame();
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

  const resetGame = () => {
    setActive(true);
    setScore(0);
    setCurrentCard("");
    setPreviousCard("");
  }

  const getCard = async () => {
    let response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    let cardImage = response.data.cards[0].image
    let cardValue = response.data.cards[0].value
    setCurrentCard({image: cardImage, value: cardConverter(cardValue)}) 
    return cardValue;
  }

  return (
    <div className="high-low mini-project">
      <div className="game">
        <div className="score" >Score: {score}</div>
        { !active && currentCard.image ? <div className="game-status" >Game Over</div> : null}
      </div>
      <div className="cards">
        <div className="deck" />
        { previousCard.image ? <img src={previousCard.image} className="previous-card" alt="previous card"/> : null}
        { currentCard.image ? <img src={currentCard.image} className="current-card" alt="current card"/> : null}
      </div>
      <div className="controls">
        <button className="start-game" onClick={startGame}>Start</button>
        <button className="higher" onClick={higher}>Higher</button>
        <button className="lower" onClick={lower}>Lower</button>
      </div>
    </div>
  );
}

export default HigherLower;
