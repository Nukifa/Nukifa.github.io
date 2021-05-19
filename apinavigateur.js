let x = document.getElementById("lat");
let y = document.getElementById("long");
let buttonBack = document.getElementById("reculer");
let buttonCopy = document.getElementById("copier");
let buttonPast = document.getElementById("coller");
let bouttonlatitude = document.getElementById("latitude");
let bouttonlongitude = document.getElementById("longitude");

bouttonlatitude.addEventListener('click', getLatitude);
bouttonlongitude.addEventListener('click', getLongitude);

function getLatitude() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            x.innerHTML = "Latitude: " + position.coords.latitude;
        });
    } else {
        x.innerHTML = "Geolocalisation is not supported by this browser.";
    }
}

function getLongitude() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            y.innerHTML = "Longitude: " + position.coords.longitude;
        });
    } else {
        y.innerHTML = "Geolocalisation is not supported by this browser.";
    }
}

buttonBack.addEventListener('click', backHistory);

function backHistory() {
    var input = document.getElementById("nbpages").value;
    window.history.go(-input);
}


buttonCopy.addEventListener('click', copy);

function copy() {
    var input = document.getElementById("textecopie").value;
    navigator.clipboard.writeText(input).then(function() {
        alert('presse-papiers modifié avec succès'); 
    });
}

buttonPast.addEventListener('click', paste);

function paste() {
    navigator.clipboard.readText().then(
        clipText => document.getElementById("textecolle").value = clipText);
}