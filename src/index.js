import "./styles.css";
//import image from "./"

const API_KEY = 'ee892c26f0034d78d2c3832d2e9367af';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

async function getWeatherData(location) {
  try {
    const response = await fetch(API_URL + `&appid=${API_KEY}` + `&q=${location}`);
    const data = await response.json();
    const weather = processWeatherData(data);
    console.log(weather);
  }
  catch(error) {
    console.log(error);
  }
}

function processWeatherData(data) {
  const weather = {
    location: data.name,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed
  };
  return weather;
}

getWeatherData('dhaka');