import React from "react";
import MiniProject from "../components/MiniProject";
import Navigation from "../components/Navigation";
import Links from "../components/Links";
import Info from "../components/mini-projects/Info";
import Calculator from "../components/mini-projects/Calculator/Calculator";

import { shallow } from 'enzyme';

describe("MiniProject page", () => {
  let wrapper;
  
  beforeEach( () => {

    const mockMatch = {
      params: {
        name: "Calculator"
      }
    }
    wrapper = shallow( <MiniProject match={mockMatch} /> )
  })

  test("renders with Navigation", () => {
    expect(wrapper.containsMatchingElement(<Navigation />)).toEqual(true);
  });

  test("renders with Links", () => {
    expect(wrapper.containsMatchingElement(<Links />)).toEqual(true);
  });

  test("renders with Calculator", () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });

  test("renders with an Info component", () => {
    expect(wrapper.containsMatchingElement(<Info />)).toEqual(true);
  });

})