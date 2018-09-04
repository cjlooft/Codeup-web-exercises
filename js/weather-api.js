


$.getJSON("http://api.openweathermap.org/data/2.5/weather", {
    APPID: "29a78bdd314f87e8cfe1faa62ca1cf45",
    lat: 29.4230,
    lon: -98.48527,
    units: "imperial"

}).done(function (data) {
    console.log(data);


    var html = "<div>";
    html += "<h2>" + data.name + "</h2>";
    html += "<h2>" + data.main.temp_max.toFixed(0) + "° / " + data.main.temp_min.toFixed(0) + "°</h2>";
    html += "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'/>";
    html += "<h4>" + data.weather[0].main + ":  " + data.weather[0].description + "</h4>";
    html += "<h4> Humidity: " + data.main.humidity + "% </h4>";
    html += "<h4> Wind: " + data.wind.deg + "°  at " + data.wind.speed.toFixed(0) + " mph" + "</h4>";
    html += "<h4>  Pressure: " + data.main.pressure + "</h4>";
    $("#cityName").append(html);


});


$.getJSON("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: "29a78bdd314f87e8cfe1faa62ca1cf45",
    lat: 29.4230,
    lon: -98.48527,
    units: "imperial"

}).done(function (data) {
    console.log(data);


    var html2 = "<div>";
    html2 += "<h2> Day 2" + "</h2>";
    html2 += "<h2>" + data.list[7].main.temp_max.toFixed(0) + "° / " + data.list[7].main.temp_min.toFixed(0) + "°</h2>";
    html2 += "<img src='http://openweathermap.org/img/w/" + data.list[7].weather[0].icon + ".png'/>";
    html2 += "<h4>" + data.list[7].weather[0].main + ":  " + data.list[7].weather[0].description + "</h4>";
    html2 += "<h4> Humidity: " + data.list[7].main.humidity + "% </h4>";
    html2 += "<h4> Wind: " + data.list[7].wind.deg + "°  at " + data.list[7].wind.speed.toFixed(0) + " mph" + "</h4>";
    html2 += "<h4>  Pressure: " + data.list[7].main.pressure + "</h4>";2

    $("#day2").append(html2);


    var html3 = "<div>";
    html3 += "<h2> Day 3" + "</h2>";
    html3 += "<h2>" + data.list[15].main.temp_max.toFixed(0) + "° / " + data.list[15].main.temp_min.toFixed(0) + "°</h2>";
    html3 += "<img src='http://openweathermap.org/img/w/" + data.list[15].weather[0].icon + ".png'/>";
    html3 += "<h4>" + data.list[15].weather[0].main + ":  " + data.list[15].weather[0].description + "</h4>";
    html3 += "<h4> Humidity: " + data.list[15].main.humidity + "% </h4>";
    html3 += "<h4> Wind: " + data.list[15].wind.deg + "°  at " + data.list[15].wind.speed.toFixed(0) + " mph" + "</h4>";
    html3 += "<h4>  Pressure: " + data.list[15].main.pressure + "</h4>";2

    $("#day3").append(html3);3



});


// $.getJSON(https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={"29a78bdd314f87e8cfe1faa62ca1cf45"});
//
//     lat: 29.4230,
//     lon: -98.48527,
//
//
// }).done(function (data) {
//     console.log(data);
