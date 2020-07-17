import React from "react";
import waitUntil from 'async-wait-until';
import { shallow, mount } from 'enzyme';
import Block from "../Block";

describe("Block component testing", () => {
  let wrapper;

  test("has passed value of 1", () => {
    wrapper = shallow(<Block value="1" />);
    expect(wrapper.prop("value")).toEqual("1");
  });

  test("has passed value of 1", () => {
    wrapper = shallow(<Block value="1" />);
    expect(wrapper.prop("value")).toEqual("1");
  });
  
  test("if passed an active number that matches it's value, class changes", async () => {
    wrapper = shallow(<Block value="1" activeNumber="1" />);
    await waitUntil(() => wrapper.find("block active"))
    expect(wrapper.find("block active")).toBeTruthy();
  });

  test("active class is removed after 1 second", async () => {
    wrapper = shallow(<Block value="1" activeNumber="1" />);
    await waitUntil(() => wrapper.find("block active"))
    await waitUntil(() => wrapper.find("block inactive"))
    expect(wrapper.find("block inactive")).toBeTruthy();
  });
});
