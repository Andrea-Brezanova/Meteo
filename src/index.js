function handleSearchSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    let cityElement = document.querySelector("#city");  
    cityElement.innerHTML = cityInput.value;
    //call the Api
    //search city
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

