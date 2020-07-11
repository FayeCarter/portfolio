import React from "react";
import { shallow } from 'enzyme';
import Block from "../src/Block";

describe("Block component testing", () => {
  let wrapper;

  test("has passed value of 1", () => {
    wrapper = shallow(<Block value="1" />);
    expect(wrapper.prop("value")).toEqual("1");
  });

})