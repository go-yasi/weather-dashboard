// current date 
var momentDate = moment().format("MMMM Do, YYYY");
console.log(momentDate);

var weatherForecast = document.querySelector('#weather-forecast');

function displayCurrentWeather(data){
    // create current weather display header div
    var currentHeader = document.createElement('div');
    currentHeader.className = 'current-header';

    // create current weather city name
    var currentCity = document.createElement('h1');
    currentCity.className = 'current-city display-5';

    // create current weather date
    var currentDate = document.createElement('h5');
    currentDate.className = 'current-date mt-2';

    // create current weather icon
    var currentIcon = document.createElement('img');
    currentIcon.className = 'current-icon';

    currentHeader.appendChild(currentCity);
    currentHeader.appendChild(currentDate);
    currentHeader.appendChild(currentIcon);
}