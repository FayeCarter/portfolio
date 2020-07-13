import React from 'react';
import axios from "axios";
import { shallow } from 'enzyme';
import waitUntil from 'async-wait-until';
import HigherLower from "../Higher-Lower";
import { firstCardMock, higherCardMock, lowerCardMock } from '../fixtures/CardMocks';

jest.mock('axios');

describe('Higher-Lower testing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HigherLower />);
  })

  it('successfully fetches deck from an deck of cards API', async () => {
    const response = firstCardMock;

    axios.get.mockResolvedValue(response);

    wrapper.find("button").simulate("click")
    await waitUntil(() => wrapper.find("current-card"))

    expect(wrapper.find(".current-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/8S.png");
  });
});