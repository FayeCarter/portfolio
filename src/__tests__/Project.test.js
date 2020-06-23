import React from "react";
import Project from "../components/Project";

import { shallow } from 'enzyme';

describe("Project page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Project title="Project Name" />);
  })

  test("has a passed title `Project Name`", () => {
    expect(wrapper.find("h1").text()).toContain("Project Name");
  });

})