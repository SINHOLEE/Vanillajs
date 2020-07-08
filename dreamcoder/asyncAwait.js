// 목적
// promise보다 조금 더 동기적인 느낌을 주기 위해 사용
// async await는 promise 위에 추가해서 사용할 수 있는 api === syntactic sugar 중 하나임
// syntactic sugar ex) prototype을 이용한 class용법
// 그렇다면 프로미스는 무조건 나쁘고, async await가 좋다? ㄴㄴ

// 일단 function 앞에 async 라는 접두어를 붙이면, new Promise 객체를 반환하지 않고, 우리가 원하는 결과값을
// 바로 반환해도 promise 객체로 반환하게 된다.
"use strict";


// // using promise
// {
//     const fetchUser = () => { 
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 resolve("eliy");
//             })
//         },0);
//     };
    
//     // const user = fetchUser()
//     // .then(console.log);
//     // console.log(user);
// }

// // using async
// {
//     async function fetchUser() {
//         return "elly";
//     }
//     const user = fetchUser()
//     .then(console.log);
//     console.log(user);
// }

"use strict";


// 궁금증 1 async를 사용하려면 arrow function 사용 못하나?
class UserStorage {

    delay = (ms) => {
        return new Promise(resolve=> 
            setTimeout(()=>{
            try{
                resolve();
            } catch{
                reject(new Error("time delay error"));
            }
            }, ms))};


    _getUsers = async ()=>{
        try{
            await this.delay(1000);
            const fs = require("fs");
            const contents = fs.readFileSync("dummy.json");
            const dummy = JSON.parse(contents);
            return dummy;
        } catch {
            throw new Error("no users list");
        }
    };
    
    loginUser = async (name, password) =>{
        // const users = await this._getUsers(); // 이것보다 개선하기
        // await this.delay(1000);
        // const userPormise = this._getUsers(); // 프로미스를 호출하면 바로 생성한다는 특성을 이용하여 web api stack에서 해당 동작을 실행하고,
        // await this.delay(1000); // 이거는 블록하는데, 앞에서 web api에서 동작하고 있는 _getUsers()에서 이득을 보았다.즉 병렬적으로 실행한다.
        // const users = await userPormise;  // 여기서 받아지는 users의 값은, max(delay_ms, getUsers_ms) 시간만큼 걸리게 된다.
        const results = await Promise.all([this._getUsers(), this.delay(1000)]);  // 병렬적으로 promise를 사용할때는 이렇게 줄일 수 있다.
        const users = results[0];
        const isloginedUser = users.reduce((prev, user)=>
            (user.name===name && user.password === password) ? user: prev, null);
        if (isloginedUser === null){
            throw new Error("not found"); 
        }
        return isloginedUser
    }
       
    getRoles = async (user)=>{  
        try{
            return user.role;
        } catch{
            throw new Error("it has someThing wrong");
        }
    } 
}

const userStorage = new UserStorage();

userStorage.loginUser("sinho", "asd1")
    .then(userStorage.getRoles)
    .then(console.log)
    .catch(console.error);

