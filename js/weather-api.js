

console.log("ok");


$.getJSON("http://api.openweathermap.org/data/2.5/weather", {
    APPID: "29a78bdd314f87e8cfe1faa62ca1cf45",
    lat: 29.4230,
    lon: -98.48527,
    units: "imperial"

}).done(function(data) {
    console.log(data);


        var html = "<div>";
        html += "<h2>" + data.name + "</h2>";
        html += "<h2>" + data.main.temp_max.toFixed(0) +  "° / " + data.main.temp_min.toFixed(0) + "°</h2>";
        html += "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'/>";
    // html += "<h4>" + data..weather[0].description + "</h4>";


    html += `<h4>${data.weather[0].description}</h4>`;
        html += "<h4> Humidity: " + data.main.humidity + "% </h4>";
        html += "<h4> Wind: "+ data.wind.deg + " deg. " + data.wind.speed.toFixed(0) + "mph" + "</h4>";
    html += "<h4> Pressure: "  + data.main.pressure + " millibars</h4>";
    $("#cityName").append(html);

//
});
