import React from "react";
import Projects from "../components/Projects";
import Navigation from "../components/Navigation";


import { shallow } from 'enzyme';

describe("Projects page", () => {
  test("renders with `Projects` title", () => {
    const wrapper = shallow(<Projects />)
    expect(wrapper.find("h1").text()).toContain("Projects");
  });

  test("renders with Navigation", () => {
    const wrapper = shallow(<Projects />)
    expect(wrapper.containsMatchingElement(<Navigation />)).toEqual(true);
  });
})