// current date via moment
var today = moment().format("dddd, MMMM Do, YYYY");

// search variables
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input").value;
const searchBtn = document.querySelector("#search-btn");
var searchHistory = document.querySelector("#search-history");
var searchArray = [];

// weather variables
var weatherForecast = document.querySelector("#weather-forecast");
var currentWeather = document.querySelector("#current-weather");
var fiveDay = document.querySelector("#five-day");
const weatherArray = [];

// API variables
const baseURL = "https://api.openweathermap.org/data/2.5/onecall?lat=";
const APIkey = "&exclude=hourly,minutely,alerts&appid=a15495c549d268a19702fa1fab37f8f8&units=imperial";

// fetch request for lat & lon of user input
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

// fetch request to gather weather data
function search(lat, lon) {
    var URL = baseURL + lat + lon + APIkey;

    fetch(URL)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        var weather = {
            // city: data.name,
            icon: data.current.weather[0].icon,
            temp: data.current.temp,
            wind: data.current.wind_speed,
            humidity: data.current.humidity,
            uvi: data.current.uvi
        }
        weatherArray.push(weather);
        // display current weather
        displayCurrentWeather(data);
    })
};

// display current weather data
function displayCurrentWeather(data) {
    let searchInput = document.querySelector("#search-input").value;

    // make section appear
    currentWeather.style.display = "block";

    // create "current weather" header div
    var currentHeader = document.createElement("div");
    currentHeader.className = "current-header";

    // create "current weather" header city name
    var currentCity = document.createElement("h1");
    currentCity.className = "current-city display-6";
    if (!searchInput) {
        currentCity.textContent = "Current Weather";
    } else {
        currentCity.textContent = searchInput;
    }
    

    // create "current weather" header zone
    var currentZone = document.createElement("h6");
    currentZone.className = "current-zone";
    currentZone.textContent = data.timezone;

    // create "current weather" header date
    var currentDate = document.createElement("h5");
    currentDate.className = "current-date mt-2";
    currentDate.textContent = today;

    // create "current weather" header icon
    var currentIcon = document.createElement("img");
    currentIcon.className = "current-icon";
    currentIcon.src = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
    currentIcon.style.width = "50px";

    // add elements to current header div
    currentHeader.appendChild(currentCity);
    currentHeader.appendChild(currentZone);
    currentHeader.appendChild(currentDate);
    currentHeader.appendChild(currentIcon);

    // create "current weather" info div
    var currentInfo = document.createElement("div");
    currentInfo.className = "current-info mt-4";

    // create "current weather" info: temp
    var currentTemp = document.createElement("p");
    currentTemp.className = "temp"; 
    currentTemp.textContent = "Temp:  " + data.current.temp + "°F";

    // create "current weather" info: wind
    var currentWind = document.createElement("p");
    currentWind.className = "wind";
    currentWind.textContent = "Wind:  " + data.current.wind_speed + " MPH";


    var currentHumid = document.createElement("p");
    currentHumid.className = "humid";
    currentHumid.textContent = "Humidity:  " + data.current.humidity + "%";

    var currentUV = document.createElement("p");
    currentUV.className = "uv";
    currentUV.textContent = "UV Index: ";
    var valueUV = document.createElement("p");
    valueUV.className = "uv-value";
    valueUV.textContent = data.current.uvi;

    // UV index color that indicates favorable, moderate, or severe
    if (data.current.uvi < 5) {
        valueUV.classList.add("favorable");
    } else  if (data.current.uvi > 5 && data.current.uvi <=7) {
        valueUV.classList.add("moderate");
    } else {
        valueUV.classList.add("severe");
    };

    // add elements to current info div
    currentInfo.appendChild(currentTemp);
    currentInfo.appendChild(currentWind);
    currentInfo.appendChild(currentHumid);
    currentInfo.appendChild(currentUV);
    currentUV.appendChild(valueUV);

    // add header and info to current weather div
    currentWeather.appendChild(currentHeader);
    currentWeather.appendChild(currentInfo);

    // run five day forecast
    displayFiveDay(data);
};

// display five-day forecast
function displayFiveDay(data) {
    // make section appear
    fiveDay.style.display = "block";

    // *-------  BLOCK 1 -------*
    // new date
    var blockOneDate = document.querySelector(".b1-date");
    blockOneDate.textContent = moment().add(1, "d").format("ddd M/DD");
    // weather icon
    var blockOneIcon = document.querySelector(".b1-icon");
    blockOneIcon.src = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png";
    blockOneIcon.style.width = "50px";
    blockOneIcon.style.height = "50px";
    // temperature
    var blockOneTemp = document.querySelector(".b1-temp");
    blockOneTemp.textContent = "Temp:  " + data.daily[0].temp.day + "°F";
    // wind
    var blockOneWind = document.querySelector(".b1-wind");
    blockOneWind.textContent = "Wind:  " + data.daily[0].wind_speed + " MPH";
    // humidity
    var blockOneHumid = document.querySelector(".b1-humid");
    blockOneHumid.textContent = "Humidity:  " + data.daily[0].humidity + "%";


    // *-------  BLOCK 2 -------*
    // new date
    var blockTwoDate = document.querySelector(".b2-date");
    blockTwoDate.textContent = moment().add(2, "d").format("ddd M/DD");
    // weather icon
    var blockTwoIcon = document.querySelector(".b2-icon");
    blockTwoIcon.src = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png";
    blockTwoIcon.style.width = "50px";
    blockTwoIcon.style.height = "50px";
    // temperature
    var blockTwoTemp = document.querySelector(".b2-temp");
    blockTwoTemp.textContent = "Temp:  " + data.daily[1].temp.day + "°F";
    // wind
    var blockTwoWind = document.querySelector(".b2-wind");
    blockTwoWind.textContent = "Wind:  " + data.daily[1].wind_speed + " MPH";
    // humidity
    var blockTwoHumid = document.querySelector(".b2-humid");
    blockTwoHumid.textContent = "Humidity:  " + data.daily[1].humidity + "%";


    // *-------  BLOCK 3 -------*
    // new date
    var blockThreeDate = document.querySelector(".b3-date");
    blockThreeDate.textContent = moment().add(3, "d").format("ddd M/DD");
    // weather icon
    var blockThreeIcon = document.querySelector(".b3-icon");
    blockThreeIcon.src = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png";
    blockThreeIcon.style.width = "50px";
    blockThreeIcon.style.height = "50px";
    // temperature
    var blockThreeTemp = document.querySelector(".b3-temp");
    blockThreeTemp.textContent = "Temp:  " + data.daily[2].temp.day + "°F";
    // wind
    var blockThreeWind = document.querySelector(".b3-wind");
    blockThreeWind.textContent = "Wind:  " + data.daily[2].wind_speed + " MPH";
    // humidity
    var blockThreeHumid = document.querySelector(".b3-humid");
    blockThreeHumid.textContent = "Humidity:  " + data.daily[2].humidity + "%";


    // *-------  BLOCK 4 -------*
    // new date
    var blockFourDate = document.querySelector(".b4-date");
    blockFourDate.textContent = moment().add(4, "d").format("ddd M/DD");
    // weather icon
    var blockFourIcon = document.querySelector(".b4-icon");
    blockFourIcon.src = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png";
    blockFourIcon.style.width = "50px";
    blockFourIcon.style.height = "50px";
    // temperature
    var blockFourTemp = document.querySelector(".b4-temp");
    blockFourTemp.textContent = "Temp:  " + data.daily[3].temp.day + "°F";
    // wind
    var blockFourWind = document.querySelector(".b4-wind");
    blockFourWind.textContent = "Wind:  " + data.daily[3].wind_speed + " MPH";
    // humidity
    var blockFourHumid = document.querySelector(".b4-humid");
    blockFourHumid.textContent = "Humidity:  " + data.daily[3].humidity + "%";


    // *-------  BLOCK 5 -------*
    // new date
    var blockFiveDate = document.querySelector(".b5-date");
    blockFiveDate.textContent = moment().add(5, "d").format("ddd M/DD");
    // weather icon
    var blockFiveIcon = document.querySelector(".b5-icon");
    blockFiveIcon.src = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png";
    blockFiveIcon.style.width = "50px";
    blockFiveIcon.style.height = "50px";
    // temperature
    var blockFiveTemp = document.querySelector(".b5-temp");
    blockFiveTemp.textContent = "Temp:  " + data.daily[4].temp.day + "°F";
    // wind
    var blockFiveWind = document.querySelector(".b5-wind");
    blockFiveWind.textContent = "Wind:  " + data.daily[4].wind_speed + " MPH";
    // humidity
    var blockFiveHumid = document.querySelector(".b5-humid");
    blockFiveHumid.textContent = "Humidity:  " + data.daily[4].humidity + "%";

};

// search form handler
function handleFormSubmit(event) {
    event.preventDefault();

    let searchInput = document.querySelector("#search-input").value;

    if (!searchInput) {
        alert("City not found. Please try again!");
    } else {
        // save user input to search array
        searchArray.push(searchInput);
        // save to local storage
        localStorage.setItem("searchArray", JSON.stringify(searchArray));
    }

    fetchCoordinates(searchInput);
    searchButtons();
    clearSearch();
};

// create buttons for items in search history array
function searchButtons() {
    var searches = document.createElement("button");
    searches.classList.add("btn");
    searches.textContent = searchInput;
    searches.addEventListener("click", handleFormSubmit);
    searchHistory.appendChild(searches);
};

// access info saved in local storage
function getLocalStorage() {
    if (localStorage.getItem("searchArray") === null || localStorage.getItem("searchArray") === "") {
        searchArray = [];
    } else {
        searchArray = JSON.parse(localStorage.getItem("searchArray"));
    }
    console.log(searchArray);
};

// load search history
function loadHistory() {
    for (let i = 0; i < searchArray.length; i++) {
        const displaySearches = searchArray[i];
        var historyList = document.createElement("div");
        searchHistory.appendChild(historyList);
        historyList.textContent = displaySearches;
        historyList.classList.add("btn", "history");
        historyList.addEventListener("click", function() {
            fetchCoordinates(displaySearches);
            
        })
    }
};

// clear past searches
function clearSearch() {
    weatherForecast.remove();
}


// on click for search form
searchBtn.addEventListener("click", handleFormSubmit);

getLocalStorage();
loadHistory();