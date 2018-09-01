

console.log("Reading js file");




$.getJSON("http://api.openweathermap.org/data/2.5/weather", {
    APPID: "var apiKey = localStorage.getItem(\"owmApiKey\");",
    lat: 29.4230,
    lon: -98.48527

}).done(function(data) {
    $("#cityName").html("");
   // data.forEach(function(data) {//here foreach is not being called right


        var html = "<div>";
        html += "<h2>" + data.name + "</h2>";
        html += "<h2>" + data.main.temp_max +  "/" + data.main.temp_min+"</h2>";
        html += "<h2>" + data.weather.icon + "</h2>";
        html += "<h4> Wind Speed " + data.wind.speed + "</h4>";
        html += "<h4>" + data.rain + "</h4>";
        html += "<h4>" + data.clouds.all + "</h4>";
        html += "<h4> Humidity " + data.main.humidity + "</h4>";
        $("#cityName").append(html);
    });
