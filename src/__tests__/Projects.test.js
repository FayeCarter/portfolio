import React from "react";
import Projects from "../components/Projects";

import { shallow } from 'enzyme';

describe("Home page testing", () => {
  test("renders with `Home` link", () => {
    const wrapper = shallow(<Projects />)
    expect(wrapper.find("h1").text()).toContain("Projects");
  });

})