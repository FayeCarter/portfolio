import React from "react";
import Navigation from "../components/Navigation";

import { shallow } from 'enzyme';

describe("Home page testing", () => {
  test("renders with `Home` link", () => {
    const wrapper = shallow(<Navigation />)
    expect(wrapper.find(".home-button").text()).toContain("Home");
  });

  test("`Home` link navigates to Home page", () => {
    const wrapper = shallow(<Navigation />)
    wrapper.find(".home-button").simulate('click');
    expect(window.location.pathname).toBe("/");
  });
})