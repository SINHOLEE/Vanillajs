const form = document.querySelector(".js-form"),
    nameInput = form.querySelector(".form-name"),
    stockInput = form.querySelector(".form-stock"),
    summitBtn = form.querySelector(".form-btn"),
    table = document.querySelector(".js-table")


const stockHashTable = new Map();

function isDelete(a, b){
    return a + b <= 0
}

function createNewRow(name, stock){
    const tr = document.createElement("tr");
        tr.id = name;
        const tdName = document.createElement("td");
        tdName.innerText = name;
        const tdStock = document.createElement("td");
        tdStock.innerText = stock;
        tr.appendChild(tdName);
        tr.appendChild(tdStock);
        table.appendChild(tr);
}

function manageExistedTr(existedTr, stock){
    const existStock = parseInt(existedTr.childNodes[1].innerText);
        
    if (isDelete(existStock, stock)){
        table.removeChild(existedTr);
    } else{
        const stockDom = existedTr.childNodes[1];
        stockDom.innerText = existStock + stock;
    }
}

function submitBtnClickHandle(event){
    event.preventDefault();
    const name = nameInput.value;
    const stock = parseInt(stockInput.value);
    if (name === ""){
        return
    }
    
    const existedTr = document.getElementById(name);    
    if (existedTr === null){
        if (stock <= 0) return
        createNewRow(name, stock);
    }else{
        manageExistedTr(existedTr, stock);
    }
    nameInput.value = "";
    stockInput.value = "";
}

function init(){
    // summitBtn.addEventListener("click", submitBtnClickHandle);
    form.addEventListener("submit", submitBtnClickHandle);
}

init();