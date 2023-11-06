import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fonts } from '@/theme/fonts';

interface WeatherData {
  hourly: {
    temperature_2m: number[];
    // other properties...
  };
  // other properties...
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const weatherTextStyle = {
    fontFamily: fonts.alternative,
    fontSize: "20",
    color: '#FE8F5580',
  };

  useEffect(() => {
    const fetchWeatherData = async (latitude: number, longitude: number) => {
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
            fetchWeatherData(52.52, 13.41);
          }
        );
      } else {
        setError('Geolocation is not supported in your browser. Using default location.');
        fetchWeatherData(52.52, 13.41);
      }
    };

    getLocationAndFetchWeather();
  }, []);

  // use a fragment instead of div 
  return (
    <div> 
      {error ? (
        <p style={weatherTextStyle}>{error}</p>
      ) : weatherData ? (
        <p style={weatherTextStyle}>Current Weather: {weatherData.hourly.temperature_2m[0]}°C</p>
      ) : (
        <p style={weatherTextStyle}>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
