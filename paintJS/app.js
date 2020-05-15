const jsColorsContainer = document.querySelector("#jsColors"), 
    canvas= document.getElementById("jsCanvas"),
    colors = ['#2c2c2c', 'white', 'red', 'orange', 'yellow', 'green', 'skyblue', 'blue', 'purple'],
    ctx = canvas.getContext("2d"),
    inputRange = document.getElementById("jsRange"),
    modeBtn = document.getElementById("jsMode"),
    saveBtn = document.getElementById("jsSave");

const INIT_COLOR = "#2c2c2c";
const CANVAS_SIZE = 600;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.strokeStyle = INIT_COLOR;
ctx.fillStyle = INIT_COLOR;
ctx.lineWidth = 1;
let painting = false;
let filling = true;

function makepallet(){
    colors.map(function(color){
        const div = document.createElement("div");
        div.classList.add("controls__color");
        div.addEventListener("click", handleColor);
        div.id = color;
        div.style.backgroundColor = color;
        jsColorsContainer.appendChild(div);
        return color;
    })
}

function startPainting(event){
    painting = true;
}

function stopPainting(event){
    painting = false;
}

function onMouseMove(event){
    // console.log(event);
    const y = event.offsetY
    const x = event.offsetX
    console.log(painting);
    if (!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{
        ctx.lineTo(x,y);
        ctx.stroke();
        
    }
    // console.log(x, y);
}

function handleColor(event){
    const clickedColor = event.target.style.backgroundColor
    ctx.strokeStyle = clickedColor;
    ctx.fillStyle = clickedColor;
}

function handleInputRange(event){
    const settedValue =  event.target.value
    console.log(settedValue);
    ctx.lineWidth = settedValue;
}


function handleModeBtnClick(event){
    console.log("qkRn")
    if (filling){
        modeBtn.innerText = "PAINT";
        filling = false;
    } else{
        modeBtn.innerText = "FILL";
        filling = true;
    }

}  

function fillCanvas(event){
    if (filling){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }    
}

function handleRightClick(event){
    event.preventDefault();
    console.log(event);
}

function handleSaveBtnClick(event){
    const img = canvas.toDataURL("");
    const link = document.createElement("a");
    link.href = img;
    link.download = "images_name";
    link.click();

    console.log(link);
}

function init(){
    makepallet();
    console.log("init");
    console.log(canvas);
    if (canvas){
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
        canvas.addEventListener("click", fillCanvas);
        canvas.addEventListener("contextmenu", handleRightClick);
        
        if (inputRange){
            inputRange.addEventListener("input", handleInputRange);
        }
        if (modeBtn){
            
            modeBtn.addEventListener("click", handleModeBtnClick);
        }
        if (saveBtn){
            saveBtn.addEventListener("click", handleSaveBtnClick);
        }
    }
}

init();