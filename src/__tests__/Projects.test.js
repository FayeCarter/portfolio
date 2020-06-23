import React from "react";
import Projects from "../components/Projects";
import Navigation from "../components/Navigation";


import { shallow } from 'enzyme';

describe("Projects page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Projects />);
  })
  test("renders with `Projects` title", () => {
    expect(wrapper.find("h1").text()).toContain("Projects");
  });

  test("renders with Navigation", () => {
    expect(wrapper.containsMatchingElement(<Navigation />)).toEqual(true);
  });
})