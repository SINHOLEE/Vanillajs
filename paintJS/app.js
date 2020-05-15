const jsColorsContainer = document.querySelector("#jsColors");

const colors = ['black', 'white', 'red', 'orange', 'yellow', 'green', 'skyblue', 'blue', 'purple']


function makePaint(){
    colors.map(function(color){
        const div = document.createElement("div");
        div.classList.add("controls__color");
        div.id = color;
        div.style.backgroundColor = color;
        jsColorsContainer.appendChild(div);
        return color;
    })
}

function init(){
    makePaint();
    console.log("init");
}

init();