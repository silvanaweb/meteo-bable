import { LocationsMap } from "../../data/location.data";

export const locationsMock: LocationsMap = {
  london: {
    name: "London",
    latitude: 51.507351,
    longitude: -0.127758
  },
  paris: {
    name: "Paris",
    latitude: 48.856613,
    longitude: 2.352222
  },
  newyork: {
    name: "New York",
    latitude: 40.712776,
    longitude: -74.005974
  },
  singapore: {
    name: "Singapore",
    latitude: 1.28944,
    longitude: 103.849983
  },
  sydney: {
    name: "Sydney",
    latitude: -33.86882,
    longitude: 151.20929
  }
};

export const optionsMock = [
  {
    value: "london",
    label: "London"
  },
  {
    value: "paris",
    label: "Paris"
  },
  {
    value: "newyork",
    label: "New York"
  },
  {
    value: "singapore",
    label: "Singapore"
  },
  {
    value: "sydney",
    label: "Sydney"
  }
];
