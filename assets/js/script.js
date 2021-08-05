// current date via moment
var today = moment().format("dddd, MMMM Do, YYYY");

// search variables
var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input").value;
var searchBtn = document.querySelector("#search-btn");

// weather variables
var weatherForecast = document.querySelector("#weather-forecast");
var currentWeather = document.querySelector("#current-weather");
var fiveDay = document.querySelector("#five-day");
const weatherArray = [];

// API variables
const baseURL = "https://api.openweathermap.org/data/2.5/onecall?lat=";
const APIkey = "&exclude=hourly,minutely,alerts&appid=a15495c549d268a19702fa1fab37f8f8&units=imperial";

// fetch request for lat & lon
function fetchCoordinates(searchInput) {
    var URL = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + APIkey;

    fetch(URL)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        // lat & lon variables
        var lat = data[0].lat;
        var lon = "&lon=" + data[0].lon;
        search(lat, lon);
    })
};

function search(lat, lon) {
    var URL = baseURL + lat + lon + APIkey;

    fetch(URL)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        var weather = {
            city: data.name,
            icon: data.current.weather[0].icon,
            temp: data.current.temp,
            wind: data.current.wind_speed,
            humidity: data.current.humidity,
            uvi: data.current.uvi
        }
        weatherArray.push(weather);
        // call to display current weather
        // call to display fiveDay
    })
}


function displayCurrentWeather() {
    // make section appear
    currentWeather.style.display = "block";

    // create "current weather" header div
    var currentHeader = document.createElement("div");
    currentHeader.className = "current-header";

    // create "current weather" header city name
    var currentCity = document.createElement("h1");
    currentCity.className = "current-city display-6";
    currentCity.textContent = "Example City Name";

    // create "current weather" header date
    var currentDate = document.createElement("h5");
    currentDate.className = "current-date mt-2";
    currentDate.textContent = today;

    // create "current weather" header icon
    var currentIcon = document.createElement("img");
    currentIcon.className = "current-icon";
    currentIcon.src = "./assets/favicon/weather-app-favicon.png";
    currentIcon.style.width = "50px";

    // add elements to current header div
    currentHeader.appendChild(currentCity);
    currentHeader.appendChild(currentDate);
    currentHeader.appendChild(currentIcon);

    // create "current weather" info div
    var currentInfo = document.createElement("div");
    currentInfo.className = "current-info mt-4";

    // create "current weather" info: temp
    var currentTemp = document.createElement("p");
    currentTemp.className = "temp"; 
    currentTemp.textContent = "Temp:  " + "XX" + "°F";

    // create "current weather" info: wind
    var currentWind = document.createElement("p");
    currentWind.className = "wind";
    currentWind.textContent = "Wind:  " + "XX.X" + " MPH";


    var currentHumid = document.createElement("p");
    currentHumid.className = "humid";
    currentHumid.textContent = "Humidity:  " + "XX" + "%";

    var currentUV = document.createElement("p");
    currentUV.className = "uv";
    currentUV.textContent = "UV Index:  " + "X.XX";


    // add elements to current info div
    currentInfo.appendChild(currentTemp);
    currentInfo.appendChild(currentWind);
    currentInfo.appendChild(currentHumid);
    currentInfo.appendChild(currentUV);

    // add header and info to current weather div
    currentWeather.appendChild(currentHeader);
    currentWeather.appendChild(currentInfo);

    // run five day forecast
    displayFiveDay();
};


function displayFiveDay() {
    // make section appear
    fiveDay.style.display = "block";

    // *-------  BLOCK 1 -------*
    // new date
    var blockOneDate = document.querySelector(".b1-date");
    blockOneDate.textContent = moment().add(1, "d").format("ddd M/DD");
    // weather icon
    var blockOneIcon = document.querySelector(".b1-icon");
    blockOneIcon.src = "/assets/favicon/weather-app-favicon.png"
    // temperature
    var blockOneTemp = document.querySelector(".b1-temp");
    blockOneTemp.textContent = "Temp:  " + "XX" + "°F";
    // wind
    var blockOneWind = document.querySelector(".b1-wind");
    blockOneWind.textContent = "Wind:  " + "XX.X" + " MPH";
    // humidity
    var blockOneHumid = document.querySelector(".b1-humid");
    blockOneHumid.textContent = "Humidity:  " + "XX" + "%";


    // *-------  BLOCK 2 -------*
    // new date
    var blockTwoDate = document.querySelector(".b2-date");
    blockTwoDate.textContent = moment().add(2, "d").format("ddd M/DD");
    // weather icon
    var blockTwoIcon = document.querySelector(".b2-icon");
    blockTwoIcon.src = "./assets/favicon/weather-app-favicon.png"
    // temperature
    var blockTwoTemp = document.querySelector(".b2-temp");
    blockTwoTemp.textContent = "Temp:  " + "XX" + "°F";
    // wind
    var blockTwoWind = document.querySelector(".b2-wind");
    blockTwoWind.textContent = "Wind:  " + "XX.X" + " MPH";
    // humidity
    var blockTwoHumid = document.querySelector(".b2-humid");
    blockTwoHumid.textContent = "Humidity:  " + "XX" + "%";


    // *-------  BLOCK 3 -------*
    // new date
    var blockThreeDate = document.querySelector(".b3-date");
    blockThreeDate.textContent = moment().add(3, "d").format("ddd M/DD");
    // weather icon
    var blockThreeIcon = document.querySelector(".b3-icon");
    blockThreeIcon.src = "./assets/favicon/weather-app-favicon.png"
    // temperature
    var blockThreeTemp = document.querySelector(".b3-temp");
    blockThreeTemp.textContent = "Temp:  " + "XX" + "°F";
    // wind
    var blockThreeWind = document.querySelector(".b3-wind");
    blockThreeWind.textContent = "Wind:  " + "XX.X" + " MPH";
    // humidity
    var blockThreeHumid = document.querySelector(".b3-humid");
    blockThreeHumid.textContent = "Humidity:  " + "XX" + "%";


    // *-------  BLOCK 4 -------*
    // new date
    var blockFourDate = document.querySelector(".b4-date");
    blockFourDate.textContent = moment().add(4, "d").format("ddd M/DD");
    // weather icon
    var blockFourIcon = document.querySelector(".b4-icon");
    blockFourIcon.src = "./assets/favicon/weather-app-favicon.png"
    // temperature
    var blockFourTemp = document.querySelector(".b4-temp");
    blockFourTemp.textContent = "Temp:  " + "XX" + "°F";
    // wind
    var blockFourWind = document.querySelector(".b4-wind");
    blockFourWind.textContent = "Wind:  " + "XX.X" + " MPH";
    // humidity
    var blockFourHumid = document.querySelector(".b4-humid");
    blockFourHumid.textContent = "Humidity:  " + "XX" + "%";


    // *-------  BLOCK 5 -------*
    // new date
    var blockFiveDate = document.querySelector(".b5-date");
    blockFiveDate.textContent = moment().add(5, "d").format("ddd M/DD");
    // weather icon
    var blockFiveIcon = document.querySelector(".b5-icon");
    blockFiveIcon.src = "./assets/favicon/weather-app-favicon.png"
    // temperature
    var blockFiveTemp = document.querySelector(".b5-temp");
    blockFiveTemp.textContent = "Temp:  " + "XX" + "°F";
    // wind
    var blockFiveWind = document.querySelector(".b5-wind");
    blockFiveWind.textContent = "Wind:  " + "XX.X" + " MPH";
    // humidity
    var blockFiveHumid = document.querySelector(".b5-humid");
    blockFiveHumid.textContent = "Humidity:  " + "XX" + "%";

};


searchBtn.addEventListener("click", displayCurrentWeather);


