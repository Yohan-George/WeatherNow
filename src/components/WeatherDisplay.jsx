import React from 'react';

// Mapping Open-Meteo weather codes to readable conditions
const weatherConditions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Drizzle: Light",
  53: "Drizzle: Moderate",
  55: "Drizzle: Dense",
  56: "Freezing Drizzle: Light",
  57: "Freezing Drizzle: Dense",
  61: "Rain: Light",
  63: "Rain: Moderate",
  65: "Rain: Heavy",
  66: "Freezing Rain: Light",
  67: "Freezing Rain: Heavy",
  71: "Snowfall: Light",
  73: "Snowfall: Moderate",
  75: "Snowfall: Heavy",
  77: "Snow grains",
  80: "Showers: Light",
  81: "Showers: Moderate",
  82: "Showers: Heavy",
  85: "Snow Showers: Light",
  86: "Snow Showers: Heavy",
  95: "Thunderstorm: Light",
  96: "Thunderstorm: Moderate",
  99: "Thunderstorm: Severe",
};

function WeatherDisplay({ data }) {
  const { city, temperature, conditionCode } = data;

  return (
    <div className="weather-display">
      <h2>Weather in {city}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Conditions: {weatherConditions[conditionCode]}</p>
    </div>
  );
}

export default WeatherDisplay;
