import React from "react";
import Wave from "../../Wave";
import Person from "../components/Person";

import { shallow } from 'enzyme';

describe("Wave component testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Wave />)
  })

  test("renders with a Person", () => {
    expect(wrapper.containsMatchingElement(<Person />)).toEqual(true);
  });

})