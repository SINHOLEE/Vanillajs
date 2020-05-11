const clockContainer = document.querySelector(".js-clock"),
    ClickTitle = document.querySelector(".js-title");


function addFrontZero(number){
    if (number < 10){
        return '0'+ number.toString();
    }
    return number.toString();
}

function getTime(){ 
    const date = new Date();
    const hours = addFrontZero(date.getHours());
    const minutes = addFrontZero(date.getMinutes());
    const seconds = addFrontZero(date.getSeconds());
    ClickTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
    
}

function init(){
    console.log('hi');
    console.log(ClickTitle);
    getTime();
    setInterval(getTime, 1000);
}

init();