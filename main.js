const api= {
    key:"2535557e12384eee94331dc5c4501e0b",
    baseurl: "https://home.openweathermap.org/api_keys"
}

const searchbox =document.querySelector('.search-box');
searchbox.addEventListener('keypress, setQuery');

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log (searchbox.value);
    }
}

function getResults (query) {
    fetch ('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
      .then (weather => {
          return weather.json ()
        }).then (displayResults);
}

function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location.city');
    city.innerText = '${weather.name}, ${weather.sys.country}';

}