// current date via moment
var today = moment().format("dddd, MMMM Do, YYYY");
console.log(today);

// elements from HTML
var weatherForecast = document.querySelector("#weather-forecast");
var currentWeather = document.querySelector("#current-weather");
var fiveDay = document.querySelector("#five-day");

function displayCurrentWeather() {
    // create "current weather" header div
    var currentHeader = document.createElement("div");
    currentHeader.className = "current-header";

    // create "current weather" header city name
    var currentCity = document.createElement("h1");
    currentCity.className = "current-city display-5";

    // create "current weather" header date
    var currentDate = document.createElement("h5");
    currentDate.className = "current-date mt-2";
    currentDate.textContent = today;

    // create "current weather" header icon
    var currentIcon = document.createElement("img");
    currentIcon.className = "current-icon";

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

};

displayCurrentWeather()

function displayFiveDay() {
    // add content to block 1
    // new date
    var blockOneDate = document.querySelector(".b1-date");
    blockOneDate.textContent = moment().add(1, "d").format("ddd M/DD");

    // add content to block 2
    // new date
    var blockTwoDate = document.querySelector(".b2-date");
    blockTwoDate.textContent = moment().add(2, "d").format("ddd M/DD");

    // add content to block 3
    // new date
    var blockThreeDate = document.querySelector(".b3-date");
    blockThreeDate.textContent = moment().add(3, "d").format("ddd M/DD");

    // add content to block 4
    // new date
    var blockFourDate = document.querySelector(".b4-date");
    blockFourDate.textContent = moment().add(4, "d").format("ddd M/DD");

    // add content to block 5
    // new date
    var blockFiveDate = document.querySelector(".b5-date");
    blockFiveDate.textContent = moment().add(5, "d").format("ddd M/DD");

};

displayFiveDay();
