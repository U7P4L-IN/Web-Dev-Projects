const api = {
    url: "https://api.openweathermap.org/data/2.5/weather?units=metric&q=",
    key: "9fd3e42f107014b62cb7b2bbfcbea1bd"
};

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        checkWeather(searchBox.value);
    }
});
async function checkWeather(city) {
    const response = await fetch(api.url + city + `&appid=${api.key}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name + ", " + data.sys.country;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".tempMaxMin").innerHTML = Math.round(data.main.temp_min) + "°c/" + Math.round(data.main.temp_max) + "°c";
    document.querySelector(".description").innerHTML = data.weather[0].main;

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    const icon = data.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".weatherIcon").src = imageURL;

};
