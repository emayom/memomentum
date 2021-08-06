const city = document.querySelector("#weather span:nth-child(2)");
const weather = document.querySelector("#weather span:last-child");
const API_KEY = "922ec826031fd6627368551e9479edab";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json())
              .then((data) => {

                const country = (data.name).replaceAll('ŏ', 'o');

                city.innerHTML = `${country},  ${data.sys.country}`;
                weather.innerHTML = `${Math.floor(data.main.temp)}°C`;
              });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
    city.innerHTML = "No sign.";
    weather.innerHTML = "?";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
