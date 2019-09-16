import React from "react";
import { Header } from "../components/Header/Header.component";
import { CurrentWeather } from "../components/CurrentWeather/CurrentWeather.component";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />

      <div className="pt--xl pb--xl">
        <CurrentWeather />
      </div>
    </>
  );
};

export { HomePage };
