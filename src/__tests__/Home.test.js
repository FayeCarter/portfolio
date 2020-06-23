import React from "react";
import Home from "../components/Home";

import { shallow } from 'enzyme';

describe("Home page testing", () => {
  let wrapper;
  
  beforeEach( () => {
    wrapper = shallow(<Home />)
  })

  test("renders with `Faye Carter` title", () => {
    expect(wrapper.find("h1").text()).toContain("Faye Carter");
  });

  test("renders with `Junior Full Stack Developer` subheading", () => {
    expect(wrapper.find("h2").text()).toContain("Junior Full Stack Developer");
  });
})