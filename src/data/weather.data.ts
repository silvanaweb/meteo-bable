// This file provide the weather info. It fetches them from an API call.
import axios from "axios";

let API_KEY: unknown = process.env.REACT_APP_API_KEY;
let REACT_APP_API_URL: unknown = process.env.REACT_APP_API_URL;

const formatIcon = (iconName: string) =>
  iconName.toUpperCase().replace(/-/gi, "_");

export type WeatherInfo = {
  location: string;
  summary: string;
  temperature: number;
  icon: string;
};

export async function getWeatherFromLocation(
  latitude: number,
  longitude: number
): Promise<WeatherInfo> {
  const response = await axios.get(
    `https://cors-anywhere.herokuapp.com/${REACT_APP_API_URL}/${API_KEY}/${latitude},${longitude}?units=si`
  );

  if (response["status"] === 200) {
    const { temperature, summary, icon } = response.data.currently;
    return {
      location: response.data.timezone,
      summary,
      temperature: Math.round(temperature),
      icon: formatIcon(icon)
    };
  } else {
    throw new Error(`[Fetch weather] ${response["statusText"]}`);
  }
}
