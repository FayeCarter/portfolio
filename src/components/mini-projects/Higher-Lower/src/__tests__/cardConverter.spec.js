import { cardConverter } from "../cardCoverter";

test("it converts Jack to value 11", () => {
  expect(cardConverter("JACK")).toEqual(11);
});

test("it converts Queen to value 12", () => {
  expect(cardConverter("QUEEN")).toEqual(12);
});

test("it converts King to value 13", () => {
  expect(cardConverter("KING")).toEqual(13);
});

test("it converts Ace to value 14", () => {
  expect(cardConverter("ACE")).toEqual(14);
});

test("it converts string values to integers", () => {
  expect(cardConverter("1")).toEqual(1);
  expect(cardConverter("5")).toEqual(5);
});
