import { getObjectKeys } from "../utils/object";

// This file provide the location DataCue, that means city and position.
// If the cities were a user input, we would have used an api call to a coordinate locator.
// Because we know the cities, we can hardcode their coordinates in a dictionary.
// We also use union types as helpers

export type Places = "london" | "paris" | "newyork" | "singapore" | "sydney";
export type Location = {
  name: string;
  latitude: number;
  longitude: number;
};
export type LocationsMap = Record<Places, Location>;

const locations: LocationsMap = {
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

export function getLocations() {
  return { ...locations };
}

export const getOptionsFromMap = (locationsMap: LocationsMap) =>
  getObjectKeys(locationsMap).map((key: Places) => ({
    value: key,
    label: locationsMap[key].name
  }));
