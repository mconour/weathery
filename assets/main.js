titleCase = () => {
    return str
        .split(" ")
        .map(function (word) {
            return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
        console.log(str)
}

fullDay = (str) => {
    switch (str) {
        case "Tue":
            return "Tuesday";
        case "Wed":
            return "Wednesday";
        case "Thu":
            return "Thursday";
        case "Sat":
            return "Saturday";
        default:
            return str + "day";
    }
}

$(function() {
    let $wrapper = $(".wrapper"),
    $panel = $wrapper.find(".panel"),
    $city = $panel.find("#city"),
    $weather = $panel.find(".weather"),
    $group = $panel.find(".group"),
    $dt = $group.find("#dt"),
    $description = $group.find("#description"),
    $wind = $group.find("#wind"),
    $humidity = $group.find("#humidity"),
    $temperature = $weather.find("#temperature"),
    $temp = $temperature.find("#temp"),
    $icon = $temp.find("#condition"),
    $tempNumber = $temp.find("#num"),
    $celsius = $temp.find("#celsius"),
    $fahrenheit = $temp.find("#fahrenheit"),
    $forecast = $weather.find("#forecast"),
    $search = $wrapper.find("search"),
    $form = $search.find("form"),
    $button = $form.find("#button");


    $.ajax({
        dataType: "json",
        url: "https://ipapi.co/json"
    }).then(function(data) {
        let myLocation = `${data.city}, ${data.postal}, ${data.country}`;
        console.log(myLocation);
        getWeather(myLocation);
    });



})