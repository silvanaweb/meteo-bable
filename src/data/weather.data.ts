// This file provide the weather info. It fetches them from an API call.

let API_KEY: unknown = process.env.REACT_APP_API_KEY;
let REACT_APP_API_URL: unknown = process.env.REACT_APP_API_URL;

console.log(API_KEY);
console.log(REACT_APP_API_URL);

export type WeatherInfo = {
  location: string;
  summary: string;
  temperature: number;
  icon: string;
};

export function getWeatherFromLocation(
  latitude: number,
  longitude: number
): Promise<WeatherInfo> {
  // simulate API call
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        location: "London",
        summary: "Rainy days",
        temperature: 20,
        icon: "RAIN"
      });
    }, 2000);
  });
}
