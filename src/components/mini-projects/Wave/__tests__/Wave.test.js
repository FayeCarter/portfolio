import React from "react";
import Wave from "../Wave";

import { shallow } from 'enzyme';

describe("Wave component testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Wave />)
  })

  test("renders with wave image", () => {
    expect(wrapper.find(".person").prop("src")).toBe("wave1.svg");
  });

  test("re-renders with second wave image on hover", () => {
    wrapper.find(".person").simulate("mouseenter");
    expect(wrapper.find(".person").prop("src")).toBe("wave2.svg");
  });

  test("re-renders with first wave image on mouse exit", () => {
    wrapper.find(".person").simulate("mouseenter");
    wrapper.find(".person").simulate("mouseleave");
    expect(wrapper.find(".person").prop("src")).toBe("wave1.svg");
  });

})