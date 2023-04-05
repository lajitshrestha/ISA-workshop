let weather = {
    "apikey": "2097af604fc77becea4b3b932cd3baac",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid=" + this.apikey)

        .then((response) => {
            if(!response.ok){
                alert('sorry we cannot find this city')
                throw new Error("no weather found");
            }
            return response.json();
        })
        
        .then((data) => this.displayWeather(data));

    },
    displayWeather: function (data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Speed: " + speed + "km/hr";
        
    },
search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
}

};


document.querySelector(".search-bar"),addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})
weather.fetchWeather("South Ayrshire")