export const cardConverter = (card) => {
  if (card === "JACK") {
    return 11;
  } else if (card === "QUEEN") {
    return 12;
  } else if (card === "KING") {
    return 13;
  } else if (card === "ACE") {
    return 14;
  } else {
    return parseInt(card);
  }
};