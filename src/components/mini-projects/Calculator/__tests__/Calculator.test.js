import React from "react";
import Calculator from "../Calculator";

import { shallow } from 'enzyme';

describe("Navigation component testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  })

  test("renders with input field", () => {
    expect(wrapper.find(".calc-input").exists());
  });

  test("input field initially renders with 0", () => {
    expect(wrapper.find(".calc-input").prop("value")).toBe("0");
  });

})