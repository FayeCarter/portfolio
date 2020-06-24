import React from "react";
import ProjectDetails from "../components/ProjectDetails";
import NavigationPanel from "../components/NavigationPanel";

import { shallow } from 'enzyme';

describe("ProjectDetails page", () => {
  let wrapper;
  
  beforeEach( () => {
    const mockMatch = {
      params: {
        name: "WhatStack"
      }
    }
    wrapper = shallow(
    <ProjectDetails match={mockMatch} />
    )
  })

  test("has a passed title `Project Name`", () => {
    setTimeout( () => {
      expect(wrapper.find(".project-title").text()).toBe("Project Name");
    }, 1)
  });

  test("renders with Navigation", () => {
    expect(wrapper.containsMatchingElement(<NavigationPanel />)).toEqual(true);
  });

})