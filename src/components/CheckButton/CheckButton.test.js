import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import { CheckButton } from "./CheckButton.component";

let onChange, wrapper;
const name = "Action";
const checked = false;

beforeEach(() => {
  onChange = jest.fn();
  wrapper = shallow(
    <CheckButton
      checked={checked}
      className=""
      name={name}
      onChange={onChange}
      title="Action"
    />
  );
});

test("should render CheckButton correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle onChange when CheckButton is selected", () => {
  wrapper.find("button").simulate("click", {
    stopPropagation: () => {}
  });
  expect(onChange).toHaveBeenLastCalledWith({
    name,
    checked: !checked
  });
});
