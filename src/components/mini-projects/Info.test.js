import React from "react";
import Info from "./Info";

import { shallow } from 'enzyme';

describe("Info component testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Info />)
  })

  test("renders with INFO text", () => {
    expect(wrapper.text()).toContain("INFO");
  });
})