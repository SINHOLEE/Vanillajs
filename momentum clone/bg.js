const body = document.querySelector("body");

function handleImageLoad(){
    console.log("finash func");
}


function paintBody(number){
    const img = new Image();
    img.src = `images/${number}.png`;
    body.appendChild(img);
}


function genRandomNumber(){
    const rdNumber = Math.random() * 4;
    return parseInt(rdNumber) + 1;
}

function init(){
    console.log(body);
    const rdNumber = genRandomNumber();
    console.log(rdNumber);
    paintBody(rdNumber);
}

init();