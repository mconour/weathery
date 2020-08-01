titleCase = () => {
    return str
        .split(" ")
        .map(function (word) {
            return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
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