const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const currentWeather = document.getElementById("currentWeather");
const forecastContainer = document.getElementById("forecast");
const currentLocationBtn = document.getElementById("currentLocationBtn");

// fetch weather by place (via backend)
async function fetchWeather(placeName) {
  try {
    const response = await fetch(`http://localhost:5000/weather?place=${placeName}`);
    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    displayCurrentWeather(data.current);
    displayForecast(data.forecast);
  } catch (error) {
    console.error("Error:", error);
    alert("Could not fetch weather.");
  }
}

// fetch weather by coordinates (via backend)
async function fetchWeatherByCoords(lat, lon) {
  try {
    const response = await fetch(`http://localhost:5000/weather/coords?lat=${lat}&lon=${lon}`);
    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    displayCurrentWeather(data.current);
    displayForecast(data.forecast);
  } catch (error) {
    console.error("Error:", error);
    alert("Could not fetch weather.");
  }
}

// Display current weather (show °C & °F)
function displayCurrentWeather(data) {
  const tempC = data.main.temp;
  const tempF = (tempC * 9/5 + 32).toFixed(1);

  currentWeather.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">
    <p>Temperature: ${tempC} °C / ${tempF} °F</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    <p>Condition: ${data.weather[0].description}</p>
  `;
}

// Display 5-day forecast (show °C & °F)
function displayForecast(list) {
  forecastContainer.innerHTML = "";
  for (let i = 0; i < list.length; i += 8) {
    const day = list[i];
    const date = new Date(day.dt_txt).toDateString();
    const tempC = day.main.temp;
    const tempF = (tempC * 9/5 + 32).toFixed(1);

    forecastContainer.innerHTML += `
      <div class="forecast-day">
        <h4>${date}</h4>
        <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="icon">
        <p>${tempC} °C / ${tempF} °F</p>
        <p>${day.weather[0].description}</p>
      </div>
    `;
  }
}

// Current location weather
function getCurrentLocationWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchWeatherByCoords(lat, lon);
      },
      error => {
        alert("Unable to retrieve location");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Event Listeners
searchBtn.addEventListener("click", () => {
  const place = cityInput.value.trim();
  if (place) {
    fetchWeather(place);
  }
});

currentLocationBtn.addEventListener("click", getCurrentLocationWeather);
