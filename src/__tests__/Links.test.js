import React from "react";
import Links from "../components/Links";

import { shallow } from 'enzyme';

describe("Links component testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Links />);
  })

  test("renders with `Github` link", () => {
    expect(wrapper.find(".github").text()).toContain("GITHUB");
  });

  test("Github link has link to github", () => {
    expect(wrapper.find(".github").prop("href")).toEqual("https://github.com/FayeCarter");
  });

  test("renders with `Linkedin` link", () => {
    expect(wrapper.find(".linkedin").text()).toContain("LINKEDIN");
  });

  test("Linkedin link has link to Linkedin", () => {
    expect(wrapper.find(".linkedin").prop("href")).toEqual("https://www.linkedin.com/in/faye-carter-74882bab/");
  });
})