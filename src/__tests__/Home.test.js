import React from "react";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import Links from "../components/Links";

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

  test("renders with Navigation", () => {
    expect(wrapper.containsMatchingElement(<Navigation />)).toEqual(true);
  });

  test("renders with Links", () => {
    expect(wrapper.containsMatchingElement(<Links />)).toEqual(true);
  });
})