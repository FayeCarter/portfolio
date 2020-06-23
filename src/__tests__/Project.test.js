import React from "react";
import Project from "../components/Project";

import { shallow } from 'enzyme';

describe("Project page", () => {
  let wrapper;

  test("has a passed title `Project Name`", () => {
    wrapper = shallow(<Project title="Project Name" />)
    expect(wrapper.find("h1").text()).toContain("Project Name");
  });

  test("has a passed project description `Project Description`", () => {
    wrapper = shallow(<Project project_description="Project Description"/>)
    expect(wrapper.find(".project-description").text()).toContain("Project Description");
  });

  test("has a passed image source `Project Description`", () => {
    const img = "shorturl.at/ryMW1"
    wrapper = shallow(<Project image={img} />)
    expect(wrapper.find(".project-image").prop("src")).toBe(img);
  });

})