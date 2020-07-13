import React from 'react';
import axios from "axios";
import { shallow } from 'enzyme';
import waitUntil from 'async-wait-until';
import HigherLower from "../Higher-Lower";

jest.mock('axios');

describe('Higher-Lower testing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HigherLower />);
  })

  it('successfully fetches deck from an deck of cards API', async () => {
    const response = { data: 
      {
        "success": true,
        "deck_id": "98qslr8lv1u0",
        "cards": [
        {
        "code": "0S",
        "image": "https://deckofcardsapi.com/static/img/0S.png",
        "images": {
        "svg": "https://deckofcardsapi.com/static/img/0S.svg",
        "png": "https://deckofcardsapi.com/static/img/0S.png"
        },
        "value": "10",
        "suit": "SPADES"
        }
        ],
        "remaining": 51
      }
    }

    axios.get.mockResolvedValue(response);

    wrapper.find("button").simulate("click")
    await waitUntil(() => wrapper.find("current-card"))

    expect(wrapper.find(".current-card").prop("src")).toEqual("https://deckofcardsapi.com/static/img/0S.png");
  });
});