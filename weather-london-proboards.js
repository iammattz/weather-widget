(function () {
  const apiKey = '8d2fc67992a11b20e32a6015518d13be';
  const city = 'London';
  const units = 'metric';

  const emojiMap = {
    Thunderstorm: '⛈️',
    Drizzle: '🌦️',
    Rain: '🌧️',
    Snow: '❄️',
    Mist: '🌫️',
    Smoke: '🌫️',
    Haze: '🌫️',
    Dust: '🌫️',
    Fog: '🌫️',
    Sand: '🌫️',
    Ash: '🌫️',
    Squall: '🌬️',
    Tornado: '🌪️',
    Clear: '☀️',
    Clouds: '☁️'
  };

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units
