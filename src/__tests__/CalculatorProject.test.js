import React from "react";
import CalculatorProject from "../components/CalculatorProject";
import Navigation from "../components/Navigation";
import Links from "../components/Links";
import Calculator from "../components/mini-projects/Calculator/Calculator";

import { shallow } from 'enzyme';

describe("CalculatorProject page", () => {
  let wrapper;
  
  beforeEach( () => {
    wrapper = shallow( <CalculatorProject /> )
  })

  test("renders with Navigation", () => {
    expect(wrapper.containsMatchingElement(<Navigation />)).toEqual(true);
  });

  test("renders with Links", () => {
    expect(wrapper.containsMatchingElement(<Links />)).toEqual(true);
  });

  test("renders with Calculator", () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
})