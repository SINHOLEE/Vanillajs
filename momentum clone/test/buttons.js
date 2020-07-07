// Add your javascript here
const buttons = document.querySelector(".js-buttons");


function btnClickHandle(event){
    const li = event.target;
    console.log(li.innerText);
    
    alert(li.innerText);
    // console.log(li);
    
}


function paintButtons(){
    for (let i=1; i<21; i++){
        console.log(i);
        const div = document.createElement("div");
        const span = document.createElement("span");
        span.innerText = i;
        const btn = document.createElement("button");
        btn.appendChild(span);
        btn.addEventListener("click", btnClickHandle);
        div.id = i;
        div.appendChild(btn);
        buttons.appendChild(div);
    }
}
function init(){
    paintButtons();
}

init(); 