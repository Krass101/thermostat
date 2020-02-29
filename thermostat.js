
function increaseTemp() {
    var currentTemp = document.getElementById("temperature").innerHTML;
    var newTemp = parseInt(currentTemp,10) + 1;
    document.getElementById("temperature").innerHTML = newTemp;
    document.getElementById("temperature").style.backgroundColor = "orange";
}

function decreaseTemp() {
    var currentTemp = document.getElementById("temperature").innerHTML;
    var newTemp = parseInt(currentTemp,10) - 1;
    document.getElementById("temperature").innerHTML = newTemp;
    document.getElementById("temperature").style.backgroundColor = "lightblue";
    
}
