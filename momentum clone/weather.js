const tempContainer = document.querySelector(".js-temp");
const COORDS = "coords";
const WEATHER_API_KEY = "5f0e15db5c10f58024bcfbc5b3f82072";
const DEGREE_BY_C = 0;


function getWeatherInfo(lat, lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`)
    .then(response =>{
        return response.json();
    })
    .then(json =>{
        const temperature = json.main.temp;
        const palce = json.name;

        tempContainer.innerText = ` ${temperature} C° @ ${palce}` ;
    });
}   


function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}


function handleGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeatherInfo(latitude, longitude);
}


function handleGeoError(){
    console.log("cant bring location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    } else{
        const parsedCoords = JSON.parse(loadedCoords);
        const latitude = parsedCoords.latitude;
        const longitude = parsedCoords.longitude;
        console.log(latitude, longitude);
        getWeatherInfo(latitude, longitude);
    }
}

function init(){
    loadCoords();
}

init();