import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm.jsx';
import WeatherDisplay from './components/WeatherDisplay.jsx';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="app-container">
      <h1>Weather Now</h1>
      <WeatherForm setWeatherData={setWeatherData} setError={setError} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
