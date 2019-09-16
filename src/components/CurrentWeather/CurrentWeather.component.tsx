import React from "react";
import { LocationSelector } from "../LocationSelector/LocationSelector.component";
import { WeatherView } from "../WeatherView/WeatherView.component";

type State = {};
type Props = {};

class CurrentWeather extends React.Component<Props, State> {
  render() {
    return (
      <>
        <div className="pb--xl">
          <LocationSelector />
        </div>

        <WeatherView />
      </>
    );
  }
}

export { CurrentWeather };
