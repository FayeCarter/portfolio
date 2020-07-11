import React from "react";
import Memory from "../Memory";
import Block from "../src/components/Block";
import { shallow } from 'enzyme';

describe("Memory component testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Memory />)
  })

  test("renders with 4 Blocks", () => {
    expect(wrapper.containsAllMatchingElements([
      <Block value="1" />,
      <Block value="2" />,
      <Block value="3" />,
      <Block value="4" />,
    ])).toEqual(true);
  });

  describe("Start Game", () => {

    beforeEach(() => {
      jest.spyOn(global.Math, 'floor').mockReturnValue(1);
    });

    test("randomly picks a block", () => {
      wrapper.find("button").simulate("click");

      expect(wrapper.containsAllMatchingElements([
        <Block value="1" activeNumber="2" />,
      ])).toEqual(true);
    });
  })

})