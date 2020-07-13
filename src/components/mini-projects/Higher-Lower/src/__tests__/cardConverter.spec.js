import { cardConverter } from "../cardCoverter";

test("it converts Jack to value 11", () => {
  expect(cardConverter("JACK")).toEqual("11");
});

test("it converts Queen to value 12", () => {
  expect(cardConverter("QUEEN")).toEqual("12");
});

