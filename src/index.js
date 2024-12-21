
function refreshWeather(response) {
    // inject temperature and city into the interface from the response
    let temperatureElement = document.querySelector("#temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
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

searchCity("Paris");