const fs = require("fs");
const contents = fs.readFileSync("dummy.json");
const dummy = JSON.parse(contents);


function getUsers(){
    setTimeout(()=>{
        const contents = fs.readFileSync("dummy.json");
        const dummy = JSON.parse(contents);
        console.log(dummy);
        return dummy;
    }, 1000);
}

function login(name, password){
    const islogined = dummy.reduce((prev, user)=>
    (user.name===name && user.password === password) ? user: prev
    , null);
    if(islogined){
        getAccess(islogined);
    }   
}

function getAccess(user){
    console.log(user);
    return user.access;
}
// getUsers();
login("sinho", "asd1");


