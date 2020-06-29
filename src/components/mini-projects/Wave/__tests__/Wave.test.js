import React from "react";
import Wave from "../Wave";

import { shallow } from 'enzyme';

describe("Wave component testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Wave />)
  })

  test("renders with wave image", () => {
    expect(wrapper.find(".person").prop("className")).toBe("person");
  });

})