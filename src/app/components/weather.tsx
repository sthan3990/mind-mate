import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=1`;
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data. Please try again later.');
      }
    };

    const getLocationAndFetchWeather = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            console.error('Error getting geolocation:', error);
            setError('Error getting geolocation. Using default location.');
            // Fallback to a default location (e.g., Berlin, Germany)
            fetchWeatherData(52.52, 13.41);
          }
        );
      } else {
        setError('Geolocation is not supported in your browser. Using default location.');
        // Fallback to a default location (e.g., Berlin, Germany)
        fetchWeatherData(52.52, 13.41);
      }
    };

    getLocationAndFetchWeather();

  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <p>Current Weather: {weatherData.hourly.temperature_2m[0]}°C</p>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
