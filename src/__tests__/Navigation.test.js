import React from "react";
import Navigation from "../components/Navigation";

import { shallow } from 'enzyme';

describe("Home page testing", () => {
  test("renders with `Home` link", () => {
    const wrapper = shallow(<Navigation />)
    expect(wrapper.find("button").text()).toContain("Home");
  });
})