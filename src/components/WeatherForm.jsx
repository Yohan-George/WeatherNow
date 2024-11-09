import React, { useState } from 'react';

function WeatherForm({ setWeatherData, setError }) {
  const [city, setCity] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!city) {
      setError('Please enter a city name');
      return;
    }

    setError(null); // Clear previous errors
    try {
      // Step 1: Fetch latitude and longitude based on city name using Open-Meteo's Geocoding API
      const geocodeResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en`);
      const geocodeData = await geocodeResponse.json();

      if (!geocodeData.results || geocodeData.results.length === 0) {
        setError('City not found');
        return;
      }

      const { latitude, longitude } = geocodeData.results[0];

      // Step 2: Fetch weather data using latitude and longitude from Open-Meteo
      const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      const weatherData = await weatherResponse.json();

      if (weatherData.error) {
        setError('Unable to fetch weather data');
        return;
      }

      setWeatherData({
        city: city,
        temperature: weatherData.current_weather.temperature,
        conditionCode: weatherData.current_weather.weathercode,
      });
    } catch (error) {
      setError('An error occurred while fetching weather data');
    }
  };

  return (
    <form className="weather-form" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
