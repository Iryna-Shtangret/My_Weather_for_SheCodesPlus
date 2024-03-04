function functionTime(time) {
  let day = time.getDay();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
  ];

  return `${days[day]} ${hours}:${minutes}`;
}

function changeCity(response) {
  let searchingCity = document.querySelector("#foundedCity");
  let descriptionWeather = document.querySelector("#description");
  let humidityWeather = document.querySelector("#humidity");
  let windWeather = document.querySelector("#wind");
  let tempWeather = document.querySelector("#temp");
  let iconWeather = document.querySelector("#icon");
  let dayWeather = document.querySelector("#day");
  let timeWeather = document.querySelector("#time");
  let dateWeather = new Date(response.data.time * 1000);
  searchingCity.innerHTML = response.data.city;
  descriptionWeather.innerHTML = response.data.condition.description;
  humidityWeather.innerHTML = response.data.temperature.humidity;
  windWeather.innerHTML = response.data.wind.speed;
  iconWeather.innerHTML = `<img src="${response.data.condition.icon_url}" alt="icon" class="icon-temp" />`;
  tempWeather.innerHTML = Math.round(response.data.temperature.current);
  timeWeather.innerHTML = functionTime(dateWeather);
}

function callDataWeather(city) {
  let apiKey = "dboef2d023e8b54bffat4b762d81356c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeCity);
}

function reedCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#city");

  callDataWeather(newCity.value);
}

let searchFormCity = document.querySelector("#search-form");
searchFormCity.addEventListener("submit", reedCity);
callDataWeather("Київ");
