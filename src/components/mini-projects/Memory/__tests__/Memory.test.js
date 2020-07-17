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
      <Block value="red" />,
      <Block value="blue" />,
      <Block value="green" />,
      <Block value="yellow" />,
    ])).toEqual(true);
  });

  describe("Start Game", () => {

    beforeEach(() => {
      jest.spyOn(global.Math, 'floor').mockReturnValue(1);
    });

    test("randomly picks a block", () => {
      wrapper.find("button").simulate("click");

      expect(wrapper.containsAllMatchingElements([
        <Block value="green" activeBlock="green" />,
      ])).toEqual(true);
    });
  })

})