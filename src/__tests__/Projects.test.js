import React from "react";
import Projects from "../components/Projects";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import Links from "../components/Links";

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

  test("renders with WhatStack project", () => {
    expect(wrapper.containsMatchingElement(<Project title="WhatStack" />)).toEqual(true);
  });

  test("renders with Links", () => {
    expect(wrapper.containsMatchingElement(<Links />)).toEqual(true);
  });
})