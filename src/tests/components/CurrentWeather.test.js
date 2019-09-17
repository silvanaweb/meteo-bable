import { shallow, ShallowWrapper } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { CurrentWeather } from "../../components/CurrentWeather/CurrentWeather.component";
import { optionsMock } from "../fixtures/location";
import * as WeatherData from "../../data/weather.data";

let wrapper;
jest.mock("../../data/weather.data");

describe("CurrentWeather", () => {
  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />);
    wrapper.instance();
  });

  test("should render CurrentWeather correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("should call handleLocationChange and update WeatherInfo state correctly", async () => {
    // mock the custom hook to have a desktop size
    const resp = {
      location: "london",
      temperature: 20,
      summary: "rainy days",
      icon: "rain"
    };
    const location = optionsMock[0];
    WeatherData.getWeatherFromLocation.mockResolvedValue(resp);
    await wrapper.instance().handleLocationChange(location);
    wrapper.update();
    expect(wrapper.state("weatherInfo")).toEqual({
      ...resp,
      location: location.label,
      id: location.value
    });
  });
});
