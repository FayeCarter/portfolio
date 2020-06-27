import React from "react";
import MiniProjects from "../components/MiniProjects";
import Navigation from "../components/Navigation";

import { shallow } from 'enzyme';

describe("MiniProjects page testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<MiniProjects />)
  })

  test("renders with Navigation", () => {
    expect(wrapper.containsMatchingElement(<Navigation />)).toEqual(true);
  });

})