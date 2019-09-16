import React from "react";
import { Selector, SelectorOption } from "../Selector/Selector.component";
import { WeatherView } from "../WeatherView/WeatherView.component";
import {
  Location,
  getLocations,
  Places,
  getOptionsFromMap
} from "../../data/location.data";

type State = {
  locationOptions: Array<SelectorOption>;
};
type Props = {};

class CurrentWeather extends React.Component<Props, State> {
  private locationsMap = getLocations();

  constructor(props: Props) {
    super(props);
    this.state = {
      locationOptions: []
    };
  }

  componentDidMount() {
    const locationOptions = getOptionsFromMap(this.locationsMap);
    this.setState({ locationOptions });
  }

  render() {
    const { locationOptions } = this.state;
    return (
      <>
        <div className="pb--xl">
          <Selector
            onChange={this.handleLocationChange}
            options={locationOptions}
          />
        </div>

        <WeatherView />
      </>
    );
  }

  handleLocationChange = (locationOption: SelectorOption) => {
    if (locationOption.value) {
      const locationKey: Places = locationOption.value as Places;
      const location: Location = this.locationsMap[locationKey];
      console.log(JSON.stringify(location));
    }
  };
}

export { CurrentWeather };
