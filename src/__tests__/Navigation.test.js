import React from "react";
import Navigation from "../components/Navigation";

import { shallow } from 'enzyme';

describe("Navigation component testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  })

  test("renders with `Home` link", () => {
    expect(wrapper.find(".home-button").text()).toContain("HOME");
  });

  test("`Home` link navigates to Home page", () => {
    wrapper.find(".home-button").simulate('click');
    expect(location.pathname).toBe("/");
  });

  test("renders with `Projects` link", () => {
    expect(wrapper.find(".projects-button").text()).toContain("PROJECTS");
  });

})