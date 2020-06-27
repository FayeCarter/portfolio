import React from "react";
import Calculator from "../Calculator";

import { shallow } from 'enzyme';

describe("Navigation component testing", () => {
  let wrapper;
  let event

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
    event = Object.assign(jest.fn(), {preventDefault: () => {}})
    jest.spyOn(event, 'preventDefault')
  })

  test("renders with results field", () => {
    expect(wrapper.find(".calc-result").exists());
  });

  test("results field initially renders with 0", () => {
    expect(wrapper.find(".calc-result").text()).toBe("");
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
      const numberButton = wrapper.children().find(".number-buttons").first()
      numberButton.simulate("click", event)
      expect(wrapper.find(".calc-input").text()).toBe(numberButton.prop("value"));
    });

    test("When clicked value is added to cal-input div", () => {
      const firstNumberButton = wrapper.children().find(".number-buttons").first()

      wrapper.children().find(".number-buttons").first().simulate("click", event)
      wrapper.children().find(".number-buttons").first().simulate("click", event)

      const expectedValue = firstNumberButton.prop("value") + firstNumberButton.prop("value")
      expect(wrapper.find(".calc-input").text()).toBe(expectedValue);
    });
  })

  describe("Equals", () => {
    test("equals button is rendered ", () => {
      expect(wrapper.find(".equals-button").exists());
    });
    
    test("pressing button renders result", () => {
      wrapper.children().find(".number-buttons").first().simulate("click", event)
      wrapper.find(".equals-button").simulate("click", event)
      expect(wrapper.find(".calc-result").text()).toBe("1");
    });
  });
  
  describe("Action Buttons", () => {
    test("4 buttons are rendered", () => {
      expect(wrapper.children().find(".action-buttons").length).toEqual(4);
    });

    test("1 + 1 = 2", () => {
      wrapper.children().find(".number-buttons").first().simulate("click", event)
      wrapper.children().find(".action-buttons").first().simulate("click", event)
      wrapper.children().find(".number-buttons").first().simulate("click", event)
      wrapper.find(".equals-button").simulate("click", event)
      expect(wrapper.find(".calc-result").text()).toBe("2");
    })

    test("3 - 1 = 2", () => {
      wrapper.find(".number-buttons").at(2).simulate("click", event)
      wrapper.find(".action-buttons").at(1).simulate("click", event)
      wrapper.children().find(".number-buttons").first().simulate("click", event)
      wrapper.find(".equals-button").simulate("click", event)
      expect(wrapper.find(".calc-result").text()).toBe("2");
    })

    test("6 / 2 = 3", () => {
      wrapper.find(".number-buttons").at(5).simulate("click", event)
      wrapper.find(".action-buttons").at(3).simulate("click", event)
      wrapper.find(".number-buttons").at(1).simulate("click", event)
      wrapper.find(".equals-button").simulate("click", event)
      expect(wrapper.find(".calc-result").text()).toBe("3");
    })

  });
});