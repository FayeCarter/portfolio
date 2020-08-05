import React from "react";
import Info from "./Info";

import { shallow } from 'enzyme';

describe("Info component testing", () => {
  let wrapper;

  test("renders with INFO text", () => {
    wrapper = shallow(<Info />)
    expect(wrapper.text()).toContain("INFO");
  });

  test("on mouseOver pass info renders", async () => {
    let projectDescription = "Mini project description"
    wrapper = shallow(<Info description={ projectDescription } />)

    wrapper.simulate("mouseenter")

    expect(wrapper.text()).toContain(projectDescription);
  });

  test("on mouseLeave pass info is removed", async () => {
    let projectDescription = "Mini project description"
    wrapper = shallow(<Info description={ projectDescription } />)

    wrapper.simulate("mouseenter")
    wrapper.simulate("mouseleave")

    expect(wrapper.text()).not.toContain(projectDescription);
  });
})