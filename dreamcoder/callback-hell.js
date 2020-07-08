"use strict";
const fs = require("fs");
const contents = fs.readFileSync("dummy.json");
const dummy = JSON.parse(contents);

class UserStorage {
    getUsers(onSuccess, onError){
        setTimeout(()=>{
            try{
                const contents = fs.readFileSync("dummy.json");
                const dummy = JSON.parse(contents);
                onSuccess(dummy);
            } catch {
                onError(new Error("no users list"));
            }
        }, 1000);
    }

    loginUser (name, password, onSuccess, onError){
        setTimeout(()=>{
            // user 객체
            this.getUsers(
                (users)=>{
                    const islogined = users.reduce((prev, user)=>
                    (user.name===name && user.password === password) ? user: prev
                    , null);
                    if(islogined){ 
                        // console.log("ggg");
                        onSuccess(islogined);
                    } else{
                        onError(new Error("not found"));
                    }  
                },
                (error)=>{console.error(error)})
        }, 1000);
    }

    getRoles(user, onSuccess, onError){
       try{
           onSuccess(user.role);
       } catch{
           onError(new Error("it has someThing wrong"));
       }
    }
}


const userStorage = new UserStorage();

userStorage.loginUser(
    "sinho", 
    "asd1",
    (user)=>{console.log(this);
        userStorage.getRoles(
            user, (userWithRole)=>console.log(userWithRole),
            (error)=>console.error(error)
            )},
    (error)=>{console.error(error)});

    


// 콜백에 대한 정리
// 1. 비동기적인 로직을 순차적으로 작업 수행하기 위해, 해당 데이터를 조작하는 방법?
// 2. 콜백지옥이 무서운이유 
// 2-1. 가독성이 떨어진다.
// 2-2. 에러 추적이 힘들다? 잘 모르겠는데
// 일단 왜 콜백지옥이 생기는가? js는 비동기 방식의 싱글 스레드 동작방식을 채용
// 즉 이벤트 루프가 이벤트를 기다리고 있다가, 이벤트가 발생하면 함수가 실행되는 방식