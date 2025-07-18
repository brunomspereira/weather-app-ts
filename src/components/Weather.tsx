import React, { FC } from "react";
import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 173.15).toFixed(2);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered" style={{ marginBottom: 50 }}>
          {data.name} - {data.sys.country}
        </h1>
        <div className="level" style={{ alignItems: "flex-start" }}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading"> {data.weather[0].description}</p>
              <p className="title">
                <img
                  src={`http://openweatherapp.org/img/wn/${data.weather[0].icon}.png`}
                />
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">temp</p>
              <div className="title">
                <p className="mb-2">
                  {celsius}
                  <sup>&#8451;</sup>
                </p>
                <p className="mb-2">
                  {fahrenheit}
                  <sup>&#8457;</sup>
                </p>
                <p className="mb-2">{data.main.temp}K</p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Humidity</p>
              <p className="title">{data.main.humidity}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Pressure</p>
              <p className="title">{data.main.presusure}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Wind</p>
              <p className="title">{data.wind.speed}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
