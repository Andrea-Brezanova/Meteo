
function refreshWeather(response) {
    // inject temperature and city etc into the interface from the response
    let temperatureElement = document.querySelector("#temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let timeElement = document.querySelector("#time");
    let dateElement = new Date(response.data.time * 1000); // convert to milliseconds
    let iconElement = document.querySelector("#icon")
    let iconResponse = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;


    //console.log(response.data.condition.description);

    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(dateElement);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    iconElement.innerHTML = iconResponse;
    temperatureElement.innerHTML = temperature;
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
    // make api call and update the interface
    // separation of concerns (functions do only 1 thing and do it well)
    let apiKey = "007360a0b0aabc68f2a54boff1b97tfc";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    
    searchCity(cityInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);



function displayForecast() {
    
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let forecastHtml = "";

    days.forEach(function(day) {
        forecastHtml = forecastHtml + 
        `
            <div class="weather-forecast-day">
                <div class="weather-forecast-date">${day}</div> 
                <div class="weather-forecast-icon">⛅️</div>
                <div class="weather-forecast-temperatures">
                    <div class="weather-forecast-temperature"><strong>16°</strong></div>
                    <div class="weather-forecast-temperature"><strong>9°</strong></div> 
                </div>
            </div>
        `;
    });

    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
    console.log(forecastElement);
}


searchCity("Paris");
displayForecast();
