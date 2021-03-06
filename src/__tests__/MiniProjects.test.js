import React from "react";
import MiniProjects from "../components/MiniProjects";
import Navigation from "../components/Navigation";
import Links from "../components/Links";

import { shallow } from 'enzyme';

describe("MiniProjects page testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<MiniProjects />)
  })

  test("renders with Navigation", () => {
    expect(wrapper.containsMatchingElement(<Navigation />)).toEqual(true);
  });

  test("renders with Links", () => {
    expect(wrapper.containsMatchingElement(<Links />)).toEqual(true);
  });

  test("renders with link to Calculator", () => {
    expect(wrapper.find(".calculator-link").text()).toEqual("Calculator");
    expect(wrapper.find(".calculator-link").prop("to")).toEqual("/mini-projects/Calculator");
  });
})