import React from "react";
import { Selector, SelectorOption } from "../Selector/Selector.component";
import { WeatherView } from "../WeatherView/WeatherView.component";
import {
  Location,
  getLocations,
  Places,
  getOptionsFromMap
} from "../../data/location.data";
import { getWeatherFromLocation, WeatherInfo } from "../../data/weather.data";

type State = {
  locationOptions: Array<SelectorOption>;
  weatherInfo: WeatherInfo | null;
};
type Props = {};

class CurrentWeather extends React.Component<Props, State> {
  private locationsMap = getLocations();

  constructor(props: Props) {
    super(props);
    this.state = {
      locationOptions: [],
      weatherInfo: null
    };
  }

  componentDidMount() {
    const locationOptions = getOptionsFromMap(this.locationsMap);
    this.setState({ locationOptions });
  }

  render() {
    const { locationOptions, weatherInfo } = this.state;
    return (
      <>
        <div className="pb--xl">
          <Selector
            onChange={this.handleLocationChange}
            options={locationOptions}
          />
        </div>

        <WeatherView weatherInfo={weatherInfo} />
      </>
    );
  }

  handleLocationChange = async (locationOption: SelectorOption) => {
    if (locationOption.value) {
      const locationKey: Places = locationOption.value as Places;
      const location: Location = this.locationsMap[locationKey];
      console.log(JSON.stringify(location));
      // fetch and set weather info
      const info = await getWeatherFromLocation(
        location.latitude,
        location.longitude
      );
      this.setState({
        weatherInfo: { ...info, location: location.name }
      });
    }
  };
}

export { CurrentWeather };
