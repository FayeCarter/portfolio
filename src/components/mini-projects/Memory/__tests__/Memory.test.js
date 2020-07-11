import React from "react";
import Memory from "../Memory";
import Block from "../src/Block";
import { shallow } from 'enzyme';

describe("Memory component testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Memory />)
  })

  test("renders with a Block", () => {
    expect(wrapper.containsMatchingElement(<Block />)).toEqual(true);
  });

})