import { shallow, ShallowWrapper } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { Header } from "../../components/Header/Header.component";

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

test("should render Header correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});
