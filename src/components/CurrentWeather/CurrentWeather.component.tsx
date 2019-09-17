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
import { ErrorView } from "../ErrorView/ErrorView.component";
import { colors } from "../../theme/colors";

const SelectorWithMemory = withRememberOption(Selector);

type State = {
  locationOptions: Array<SelectorOption>;
  weatherInfo: WeatherViewType | null;
  loading: boolean;
  error: string | null;
};
type Props = {};

class CurrentWeather extends React.Component<Props, State> {
  private locationsMap = getLocations();

  constructor(props: Props) {
    super(props);
    this.state = {
      locationOptions: [],
      weatherInfo: null,
      loading: false,
      error: null
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  componentDidMount() {
    const locationOptions = getOptionsFromMap(this.locationsMap);
    this.setState({ locationOptions });
  }

  render() {
    const { error, loading, locationOptions, weatherInfo } = this.state;
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
        <ErrorView message={error}>
          <div style={WeatherContainerStyle}>
            <div style={spinnerStyle}>
              <PushSpinner size={50} color={colors.primary} loading={loading} />
            </div>
            <WeatherView weatherInfo={weatherInfo} loading={loading} />
          </div>
        </ErrorView>
      </>
    );
  }

  async handleLocationChange(locationOption: SelectorOption) {
    if (locationOption.value) {
      const locationKey: Places = locationOption.value as Places;
      const location: Location = this.locationsMap[locationKey];

      this.setState({ loading: true, error: null });
      try {
        // fetch and set weather info
        const info = await getWeatherFromLocation(
          location.latitude,
          location.longitude
        );
        this.setState({
          loading: false,
          weatherInfo: { ...info, location: location.name, id: locationKey }
        });
      } catch (error) {
        console.log(error);
        this.setState({
          error: "Weather forecast is not available now. Please, try later!",
          loading: false
        });
      }
    }
  }
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
