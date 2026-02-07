# Weatherly ☀️

A clean and modern weather application that provides real-time weather information for cities around the world.

## Features

- **Real-time Weather Data** - Get current weather information for any city
- **Detailed Metrics** - View temperature, humidity, wind speed, and "feels like" temperature
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI** - Modern interface with gradient backgrounds and smooth styling
- **Error Handling** - Clear error messages for invalid city names or network issues

## Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling with gradients, flexbox, and grid layouts
- **JavaScript (ES6+)** - Async/await for API calls and DOM manipulation
- **OpenWeatherMap API** - Weather data provider

## Project Structure

```
weatherly/
│
├── index.html          # Main HTML file
├── template.html       # HTML template structure
├── index.js            # JavaScript logic and API integration
├── styles.css          # CSS styling
└── images/
    └── search.png      # Search icon
```

## Setup Instructions

1. **Clone or download** this repository

2. **Get an API Key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Get a free API key
   - Replace the API key in `index.js`:
     ```javascript
     const API_KEY = 'your_api_key_here';
     ```

3. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local development server (recommended)

4. **Using a local server** (optional but recommended)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

## How to Use

1. Enter a city name in the search box
2. Click the search button or press Enter
3. View the weather information displayed:
   - City name and country
   - Current temperature in Celsius
   - Weather description
   - Humidity percentage
   - Wind speed in m/s
   - "Feels like" temperature

## Code Overview

### JavaScript Functions

**`getWeatherData(location)`**
- Fetches weather data from the OpenWeatherMap API
- Handles empty input validation
- Manages error responses

**`processWeatherData(data)`**
- Extracts relevant weather information from API response
- Formats data for display

**`displayWeatherData(weather)`**
- Updates the DOM with weather information
- Shows the weather info section

**`showError(message)`**
- Displays error messages to the user
- Hides the weather info section

### CSS Highlights

- **Gradient Background** - Purple gradient backdrop
- **Glassmorphic Card** - Semi-transparent card with blur effect
- **Grid Layout** - Three-column grid for weather details
- **Responsive Design** - Mobile-first approach with media queries
- **Modern Styling** - Rounded corners, shadows, and smooth transitions

## API Information

This project uses the OpenWeatherMap API:
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Units**: Metric (Celsius, m/s)
- **Free Tier**: 60 calls/minute, 1,000,000 calls/month

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Issues

- Requires active internet connection
- API key must be valid and active
- City names must match OpenWeatherMap database

## Future Enhancements

- [ ] 5-day weather forecast
- [ ] Weather icons for different conditions
- [ ] Geolocation support (auto-detect user's city)
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Search history
- [ ] Dark mode toggle
- [ ] Multiple city comparison

## License

This project is open source and available for personal and educational use.

## Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Design inspiration from modern weather apps

## Contact

For questions or suggestions, feel free to reach out or open an issue.

---

**Enjoy checking the weather!** 🌤️