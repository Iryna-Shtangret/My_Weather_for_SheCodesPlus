function changeCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#city");
  let searchingCity = document.querySelector("#foundedCity");
  searchingCity.innerHTML = newCity.value;
}

let searchFormCity = document.querySelector("#search-form");
searchFormCity.addEventListener("submit", changeCity);
