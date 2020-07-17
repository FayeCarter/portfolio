import React from "react";
import waitUntil from 'async-wait-until';
import { shallow } from 'enzyme';
import Block from "../Block";

describe("Block component testing", () => {
  let wrapper;

  test("has passed value of red", () => {
    wrapper = shallow(<Block value="red" />);
    expect(wrapper.prop("value")).toEqual("red");
  });

  test("if passed an active block that matches it's value, class changes", async () => {
    wrapper = shallow(<Block value="red" activeNumber="red" />);
    await waitUntil(() => wrapper.find("block active"))
    expect(wrapper.find("block active")).toBeTruthy();
  });

  test("active class is removed after 1 second", async () => {
    wrapper = shallow(<Block value="red" activeNumber="red" />);
    await waitUntil(() => wrapper.find("block active"))
    await waitUntil(() => wrapper.find("block inactive"))
    expect(wrapper.find("block inactive")).toBeTruthy();
  });
});
