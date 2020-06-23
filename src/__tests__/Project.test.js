import React from "react";
import Project from "../components/Project";

import { shallow } from 'enzyme';

describe("Project page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Project title="Project Name" project_description="Project Description"/>);
  })

  test("has a passed title `Project Name`", () => {
    expect(wrapper.find("h1").text()).toContain("Project Name");
  });

  test("has a passed project description `Project Description`", () => {
    expect(wrapper.find(".project-description").text()).toContain("Project Description");
  });

})