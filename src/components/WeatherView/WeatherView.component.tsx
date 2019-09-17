import React from "react";
import Skycons from "react-skycons";

import { WeatherInfo } from "../../data/weather.data";
import { colors } from "../../theme/colors";
import "./WeatherView.css";
import { Places } from "../../data/location.data";
import { getLocalImage } from "../../utils/image";
import { useWindowSize, WinSize } from "../../hooks/useWindowSize";

export type WeatherViewType = WeatherInfo & { id: Places };

type Props = {
  weatherInfo: WeatherViewType | null;
  loading?: boolean;
};
const WeatherView: React.FC<Props> = ({ loading, weatherInfo }) => {
  const winSize: WinSize = useWindowSize();

  return (
    weatherInfo && (
      <div className="content-container">
        <div className="WeatherView__summary">
          {weatherInfo.summary} <span>in</span> {weatherInfo.location}
        </div>
        <div className={`WeatherView ${loading ? "WeatherView--hide" : ""}`}>
          <img
            src={getLocalImage(
              weatherInfo.id,
              winSize.width < 600 ? "mobile" : "desktop"
            )}
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
          </div>
        </div>
      </div>
    )
  );
};

export { WeatherView };
