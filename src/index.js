import "./styles.css";
//import image from "./"

const API_KEY = 'ee892c26f0034d78d2c3832d2e9367af';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const weatherInfo = document.querySelector('.weather-info');
const errorMsg = document.querySelector('.error');

const cityName = document.querySelector('.city-name');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const feelsLike = document.querySelector('.feels-like');

async function getWeatherData(location) {
  try {
    // Check if location is empty after removing whitespace
    if (!location.trim()) {
      showError('Please enter a city name');
      return;
    }
    const response = await fetch(API_URL + `&appid=${API_KEY}` + `&q=${location}`);
    // Check if the HTTP response was not successful (status code outside 200-299 range)
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    console.log(data);
    const weather = processWeatherData(data);
    displayWeatherData(weather);
  }
  catch(error) {
    showError(error.message);
    console.log(error);
  }
}

function processWeatherData(data) {
  const weather = {
    location: data.name + ', ' + data.sys.country,
    temperature: Math.round(data.main.temp),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    feelsLike: Math.round(data.main.feels_like),
    description: data.weather[0].main,
    icon: data.weather[0].icon
  };
  return weather;
}

function displayWeatherData(weather) {
  cityName.textContent = weather.location;
  temperature.textContent = weather.temperature + '°C';
  description.textContent = weather.description;
  humidity.textContent = weather.humidity + '%';
  windSpeed.textContent = weather.windSpeed + ' m/s';
  feelsLike.textContent = weather.feelsLike + '°C';
  
  weatherInfo.style.display = 'block';
  errorMsg.style.display = 'none';
}

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.style.display = 'block';
  weatherInfo.style.display = 'none';
}

searchBtn.addEventListener('click', () => {
  getWeatherData(searchBox.value);
});

searchBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getWeatherData(searchBox.value);
  }
});