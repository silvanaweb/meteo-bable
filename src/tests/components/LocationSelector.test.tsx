import { shallow, ShallowWrapper } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { Selector } from "../../components/Selector/Selector.component";
import { optionsMock } from "../fixtures/location";
import { Location } from "../../data/location.data";
import * as WindowSizeHook from "../../hooks/useWindowSize";

let wrapper: ShallowWrapper;
let onChange: (location: Location) => void;

jest.mock("../../hooks/useWindowSize");

describe("Selector", () => {
  let useEffect: jest.SpyInstance;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");

    onChange = jest.fn();

    // mock the custom hook to have a desktop size
    const mockedWindowSizeHook = WindowSizeHook as jest.Mocked<
      typeof WindowSizeHook
    >;
    mockedWindowSizeHook.useWindowSize.mockImplementation(() => {
      return { width: 700, height: 700 };
    });

    mockUseEffect();
    mockUseEffect();
    mockUseEffect();

    wrapper = shallow(<Selector options={optionsMock} onChange={onChange} />);
  });

  test("should render Selector correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("should handle onChange when location is selected", () => {
    wrapper
      .find("CheckButton")
      .first()
      .dive()
      .find(`button`)
      .simulate("click", {
        stopPropagation: () => {}
      });

    expect(onChange).toHaveBeenLastCalledWith({
      ...optionsMock[0]
    });
  });
});
