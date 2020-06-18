import React from "react";
import App from "../App";

import { shallow } from 'enzyme';

describe("App testing", () => {
  test("renders with `Faye Carter` title", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find("h1").text()).toContain("Faye Carter");
  });
})
