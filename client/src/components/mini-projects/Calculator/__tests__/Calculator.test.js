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
    expect(wrapper.find(".result").exists());
  });

  test("results field initially renders with 0", () => {
    expect(wrapper.find(".result").text()).toBe("");
  });

  test("renders with maths input field", () => {
    expect(wrapper.find(".calculation").exists());
  });

  test("calculation field initially renders empty", () => {
    expect(wrapper.find(".calculation").text()).toBe("");
  });

  describe("Clear Buttons", () => {
    test("removes calculation when pressed", () => {
      wrapper.find(".number-button").at(5).simulate("click", event)
      expect(wrapper.find(".calculation").text()).toBe("6");
      wrapper.find(".clear-button").simulate("click", event)

      expect(wrapper.find(".calculation").text()).toBe("");
    });

    test("removes result field", () => {
      wrapper.find(".number-button").at(5).simulate("click", event)
      wrapper.find(".equals-button").simulate("click", event)
      expect(wrapper.find(".result").text()).toBe("6");
      wrapper.find(".clear-button").simulate("click", event)

      expect(wrapper.find(".result").text()).toBe("");
    });
  });

  describe("Number Buttons", () => {
    test("10 buttons are rendered", () => {
      expect(wrapper.children().find(".number-button").length).toEqual(10);
    });

    test("when clicked value is added to calculation", () => {
      const numberButton = wrapper.children().find(".number-button").first()
      numberButton.simulate("click", event)
      expect(wrapper.find(".calculation").text()).toBe(numberButton.prop("value"));
    });

    test("when clicked value is added to calculations", () => {
      const firstNumberButton = wrapper.children().find(".number-button").first()

      wrapper.children().find(".number-button").first().simulate("click", event)
      wrapper.children().find(".number-button").first().simulate("click", event)

      const expectedValue = firstNumberButton.prop("value") + firstNumberButton.prop("value")
      expect(wrapper.find(".calculation").text()).toBe(expectedValue);
    });
  })

  describe("Equals", () => {
    test("equals button is rendered ", () => {
      expect(wrapper.find(".equals-button").exists());
    });
    
    test("pressing button renders result", () => {
      wrapper.children().find(".number-button").first().simulate("click", event)
      wrapper.find(".equals-button").simulate("click", event)
      expect(wrapper.find(".result").text()).toBe("1");
    });
  });
  
  describe("Operations", () => {
    test("4 buttons are rendered", () => {
      expect(wrapper.children().find(".operator-button").length).toEqual(4);
    });

    test("addition renders correctly", () => {
      wrapper.children().find(".number-button").first().simulate("click", event)
      wrapper.children().find(".operator-button").first().simulate("click", event)
      wrapper.children().find(".number-button").first().simulate("click", event)
      wrapper.find(".equals-button").simulate("click", event)
      expect(wrapper.find(".result").text()).toBe("2");
    })

    test("subtraction renders correctly", () => {
      wrapper.find(".number-button").at(2).simulate("click", event)
      wrapper.find(".operator-button").at(1).simulate("click", event)
      wrapper.children().find(".number-button").first().simulate("click", event)
      wrapper.find(".equals-button").simulate("click", event)
      expect(wrapper.find(".result").text()).toBe("2");
    })

    test("division renders correctly", () => {
      wrapper.find(".number-button").at(5).simulate("click", event)
      wrapper.find(".operator-button").at(3).simulate("click", event)
      wrapper.find(".number-button").at(1).simulate("click", event)
      wrapper.find(".equals-button").simulate("click", event)
      expect(wrapper.find(".result").text()).toBe("3");
    })

    test("multiplication renders correctly", () => {
      wrapper.find(".number-button").at(5).simulate("click", event)
      wrapper.find(".operator-button").at(2).simulate("click", event)
      wrapper.find(".number-button").at(1).simulate("click", event)
      wrapper.find(".equals-button").simulate("click", event)
      expect(wrapper.find(".result").text()).toBe("12");
    })

  });
});