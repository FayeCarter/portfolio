import React from "react";
import App from "../App";

import { mount } from 'enzyme';

describe("App testing", () => {
  test("renders with `Faye Carter` title", () => {
    const wrapper = mount(<App />)
    expect(wrapper.find("h1").text()).toContain("Faye Carter");
  });
})
