import React from "react";
import Calculator from "../Calculator";

import { shallow } from 'enzyme';

describe("Navigation component testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  })

  test("renders with results field", () => {
    expect(wrapper.find(".calc-result").exists());
  });

  test("input field initially renders with 0", () => {
    expect(wrapper.find(".calc-result").text()).toBe("0");
  });

  test("renders with math input field", () => {
    expect(wrapper.find(".calc-input").exists());
  });

  test("math input field initially renders empty", () => {
    expect(wrapper.find(".calc-input").text()).toBe("");
  });

  describe("Number Buttons", () => {
    test("10 buttons are rendered", () => {
      expect(wrapper.children().find(".number-buttons").length).toEqual(10);
    });

    test("When clicked value is added to cal-input div", () => {
      const e = { preventDefault: () => {} }
      jest.spyOn(e, 'preventDefault')
      const numberButton = wrapper.children().find(".number-buttons").first()
      numberButton.simulate("click", e)
      expect(wrapper.find(".calc-input").text()).toBe(numberButton.prop("value"));
    });
  })

  describe("Action Buttons", () => {
    test("4 buttons are rendered", () => {
      expect(wrapper.children().find(".action-buttons").length).toEqual(4);
    });
  });

});