import React from "react";
import ProjectDetails from "../components/ProjectDetails";

import { shallow } from 'enzyme';

describe("ProjectDetails page", () => {
  let wrapper;

  test("has a passed title `Project Name`", () => {
    wrapper = shallow(<ProjectDetails title="Project Name" />)
    expect(wrapper.find(".project-title").text()).toContain("Project Name");
  });

})