import { shallow, ShallowWrapper } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { HomePage } from "../../pages/HomePage";

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<HomePage />);
});

test("should render HomePage correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});
