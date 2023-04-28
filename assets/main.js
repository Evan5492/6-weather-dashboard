var userInput = document.querySelector('#search');
var city = document.querySelector('#city');
var temp = document.querySelector('temperature');
var wind = document.querySelector('wind-speed');
var humid= document.querySelector('humidity');
var searchBtn= document.querySelector('btn');
var weatherApiKey = "19b0605102e64d7f66260055ed18961b";
var currentUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=" + weatherApiKey;

var currentWeather = async (city) => {
    var endpoint = currentUrl + '&q=' + city;
    var response = await fetch(endpoint);
    var weather = await response.json();

    console.log(weather)

}

userInput.addEventListener('click') {
    console.log()
}


