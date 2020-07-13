import React from "react";
import Info from "./Info";
import waitUntil from 'async-wait-until';

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
    await waitUntil(() => wrapper.find("info-box"));

    expect(wrapper.text()).toContain(projectDescription);
  });
})