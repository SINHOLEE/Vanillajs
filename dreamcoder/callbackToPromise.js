"use strict";

class UserStorage {
    _getUsers = () => 
        new Promise((resolve, reject)=>{
        setTimeout(()=>{
            try{
                const fs = require("fs");
                const contents = fs.readFileSync("dummy.json");
                const dummy = JSON.parse(contents);
                resolve(dummy);
            } catch {
                reject(new Error("no users list"));
            }
        }, 1000);
    });

    loginUser = (name, password) => 
        new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // user 객체
            this._getUsers()
                .then(users=>{
                    const isloginedUser = users.reduce((prev, user)=>
                    (user.name===name && user.password === password) ? user: prev, null);
                    isloginedUser ? resolve(isloginedUser) : reject(new Error("not found"))
                })
        }, 1000);
    });

    getRoles = user => 
        new Promise((resolve, reject)=>{
        try{
            resolve(user.role);
        } catch{
            reject(new Error("it has someThing wrong"));
        }
    });
}

const userStorage = new UserStorage();

userStorage.loginUser("sinho", "asd21")
    .then(userStorage.getRoles)
    .then(console.log)
    .catch(console.error);

