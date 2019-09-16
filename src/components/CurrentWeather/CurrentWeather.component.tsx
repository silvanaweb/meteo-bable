import React from "react";
import { PushSpinner } from "react-spinners-kit";

import { Selector, SelectorOption } from "../Selector/Selector.component";
import {
  WeatherView,
  WeatherViewType
} from "../WeatherView/WeatherView.component";
import {
  Location,
  getLocations,
  Places,
  getOptionsFromMap
} from "../../data/location.data";
import { getWeatherFromLocation } from "../../data/weather.data";
import { withRememberOption } from "../Helpers/RememberOption";
import { colors } from "../../theme/colors";

const SelectorWithMemory = withRememberOption(Selector);

type State = {
  locationOptions: Array<SelectorOption>;
  weatherInfo: WeatherViewType | null;
  loading: boolean;
};
type Props = {};

class CurrentWeather extends React.Component<Props, State> {
  private locationsMap = getLocations();

  constructor(props: Props) {
    super(props);
    this.state = {
      locationOptions: [],
      weatherInfo: null,
      loading: false
    };
  }

  componentDidMount() {
    const locationOptions = getOptionsFromMap(this.locationsMap);
    this.setState({ locationOptions });
  }

  render() {
    const { loading, locationOptions, weatherInfo } = this.state;
    return (
      <>
        <div className="pb--xl">
          <SelectorWithMemory
            loading={loading}
            onChange={this.handleLocationChange}
            options={locationOptions}
            title="Select a city"
          />
        </div>

        <div style={WeatherContainerStyle}>
          <div style={spinnerStyle}>
            <PushSpinner size={50} color={colors.primary} loading={loading} />
          </div>
          <WeatherView weatherInfo={weatherInfo} loading={loading} />
        </div>
      </>
    );
  }

  handleLocationChange = async (locationOption: SelectorOption) => {
    if (locationOption.value) {
      const locationKey: Places = locationOption.value as Places;
      const location: Location = this.locationsMap[locationKey];
      console.log(JSON.stringify(location));

      this.setState({ loading: true });
      // fetch and set weather info
      const info = await getWeatherFromLocation(
        location.latitude,
        location.longitude
      );
      this.setState({
        loading: false,
        weatherInfo: { ...info, location: location.name, id: locationKey }
      });
    }
  };
}
const spinnerStyle: React.CSSProperties = {
  alignSelf: "center",
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1
};
const WeatherContainerStyle: React.CSSProperties = {
  position: "relative",
  minHeight: 300,
  backgroundColor: "white",
  padding: "3rem 0"
};
export { CurrentWeather };
