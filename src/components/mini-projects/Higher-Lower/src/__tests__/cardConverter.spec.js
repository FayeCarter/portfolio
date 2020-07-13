import { cardConverter } from "../cardCoverter";

test("it converts Jack to value 11", () => {
  expect(cardConverter("JACK")).toEqual("11");
});