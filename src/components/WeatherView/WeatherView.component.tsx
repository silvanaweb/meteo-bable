import React from "react";
import { WeatherInfo } from "../../data/weather.data";

type Props = {
  weatherInfo: WeatherInfo | null;
};
const WeatherView: React.FC<Props> = ({ weatherInfo }) => {
  return (
    weatherInfo && (
      <div className="content-container">
        <div>location: {weatherInfo.location}</div>
        <div>temperature: {weatherInfo.temperature}</div>
        <div>icon: {weatherInfo.icon}</div>
        <div>summary: {weatherInfo.summary}</div>
      </div>
    )
  );
};

export { WeatherView };
