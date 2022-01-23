const API_key = "861fac13a49c0c217480148a03618c35";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather div:first-child");
      const city = document.querySelector("#weather div:last-child");
      city.innerText = `${data.main.temp}ºC @ ${data.name}`;
      weather.innerText = `${data.weather[0].main}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
