import React from "react";
import Skycons from "react-skycons";

import { WeatherInfo } from "../../data/weather.data";
import { colors } from "../../theme/colors";
import "./WeatherView.css";

type Props = {
  weatherInfo: WeatherInfo | null;
};
const WeatherView: React.FC<Props> = ({ weatherInfo }) => {
  return (
    weatherInfo && (
      <div className="content-container">
        <div className="WeatherView">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/london-desktop.jpg`}
            alt={weatherInfo.location}
            className="WeatherView__image"
          />
          <div className="WeatherView__content">
            <div className="WeatherView__info">
              <div className="WeatherView__temperature">
                {weatherInfo.temperature}&deg;
              </div>
              <div className="WeatherView__icon">
                <Skycons
                  color={colors.primary}
                  icon={weatherInfo.icon}
                  autoplay={true}
                />
              </div>
            </div>
            <div className="WeatherView__summary">
              {weatherInfo.summary} <span>in</span> {weatherInfo.location}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export { WeatherView };
