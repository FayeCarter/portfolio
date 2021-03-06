import React from 'react';
import axios from "axios";
import { shallow } from 'enzyme';
import waitUntil from 'async-wait-until';
import HigherLower from "../Higher-Lower";
import { firstCardMock, higherCardMock, lowerCardMock, equalValueMock } from '../fixtures/CardMocks';

jest.mock('axios');

describe('Higher-Lower testing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HigherLower />);
  })

  it('successfully fetches deck from an deck of cards API', async () => {
    const response = firstCardMock;
    axios.get.mockResolvedValue(response);

    wrapper.find(".start-game").simulate("click")
    await waitUntil(() => wrapper.find("current-card"))

    expect(wrapper.find(".current-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/8S.png");
  });

  describe("Higher button", () => {
    it('drawing a higher card adds to the score', async () => {
      const firstCard = firstCardMock;
      axios.get.mockResolvedValue(firstCard);
  
      wrapper.find(".start-game").simulate("click")
      await waitUntil(() => wrapper.find("current-card"))
  
      const higherCard = higherCardMock;
      axios.get.mockResolvedValue(higherCard);

      wrapper.find(".higher").simulate("click")
      await waitUntil(() => wrapper.find("previous-card"))
      
      expect(wrapper.find(".previous-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/8S.png");
      expect(wrapper.find(".current-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/9S.png");
      expect(wrapper.find(".score").text()).toEqual("Score: 1");
    });

    it('drawing a lower card ends game', async () => {
      const firstCard = firstCardMock;
      axios.get.mockResolvedValue(firstCard);
  
      wrapper.find(".start-game").simulate("click")
      await waitUntil(() => wrapper.find("current-card"))
  
      const lowerCard = lowerCardMock;
      axios.get.mockResolvedValue(lowerCard);

      wrapper.find(".higher").simulate("click")
      await waitUntil(() => wrapper.find("previous-card"))
      
      expect(wrapper.find(".previous-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/8S.png");
      expect(wrapper.find(".current-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/7S.png");
      expect(wrapper.find(".score").text()).toEqual("Score: 0");
      expect(wrapper.find(".game-status").text()).toEqual("Game Over");
    });
  })

  describe("Lower button", () => {
    it('drawing a lower card adds to the score', async () => {
      const firstCard = firstCardMock;
      axios.get.mockResolvedValue(firstCard);
  
      wrapper.find(".start-game").simulate("click")
      await waitUntil(() => wrapper.find("current-card"))
  
      const lowerCard = lowerCardMock;
      axios.get.mockResolvedValue(lowerCard);

      wrapper.find(".lower").simulate("click")
      await waitUntil(() => wrapper.find("previous-card"))
      
      expect(wrapper.find(".previous-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/8S.png");
      expect(wrapper.find(".current-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/7S.png");
      expect(wrapper.find(".score").text()).toEqual("Score: 1");
    });

    it('drawing a higher card ends game', async () => {
      const firstCard = firstCardMock;
      axios.get.mockResolvedValue(firstCard);
  
      wrapper.find(".start-game").simulate("click")
      await waitUntil(() => wrapper.find("current-card"))
  
      const higherCard = higherCardMock;
      axios.get.mockResolvedValue(higherCard);

      wrapper.find(".lower").simulate("click")
      await waitUntil(() => wrapper.find("previous-card"))
      
      expect(wrapper.find(".previous-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/8S.png");
      expect(wrapper.find(".current-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/9S.png");
      expect(wrapper.find(".score").text()).toEqual("Score: 0");
      expect(wrapper.find(".game-status").text()).toEqual("Game Over");
    });
  });

  describe("Equal values", () => {
    it("drawing an equal value card when selecting higher doesn't end game", async () => {
      const firstCard = firstCardMock;
      axios.get.mockResolvedValue(firstCard);
  
      wrapper.find(".start-game").simulate("click")
      await waitUntil(() => wrapper.find("current-card"))
  
      const equalValue = equalValueMock;
      axios.get.mockResolvedValue(equalValue);

      wrapper.find(".higher").simulate("click")
      await waitUntil(() => wrapper.find("previous-card"))
      
      expect(wrapper.find(".previous-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/8S.png");
      expect(wrapper.find(".current-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/8H.png");
      expect(wrapper.find(".score").text()).toEqual("Score: 0");
      expect(wrapper.find(".game-status")).toEqual({});
    });

    it("drawing an equal value card when selecting lower doesn't end game", async () => {
      const firstCard = firstCardMock;
      axios.get.mockResolvedValue(firstCard);
  
      wrapper.find(".start-game").simulate("click")
      await waitUntil(() => wrapper.find("current-card"))
  
      const equalValue = equalValueMock;
      axios.get.mockResolvedValue(equalValue);

      wrapper.find(".lower").simulate("click")
      await waitUntil(() => wrapper.find("previous-card"))
      
      expect(wrapper.find(".previous-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/8S.png");
      expect(wrapper.find(".current-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/8H.png");
      expect(wrapper.find(".score").text()).toEqual("Score: 0");
      expect(wrapper.find(".game-status")).toEqual({});
    });
  });
});