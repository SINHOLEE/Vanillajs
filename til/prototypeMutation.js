// 'use strict';

// const assert = require('assert');
const p = (...a)=> console.log(...a);


// // var __proto__ = "variable";

// var obj1 = {a:1};
// assert(Object.getPrototypeOf(obj1) === Object.prototype);
// // 같은 객체를 가리킨다....는 뜻


// var obj2 = { };
// obj2["__proto__"] = obj1

// p(Object.getPrototypeOf(obj2))
// // assert(Object.getPrototypeOf(obj2) === 1);

// // var protoObj = {};
// // var obj3 = { "__proto__": protoObj };
// // assert(Object.getPrototypeOf(obj3) === protoObj);

// // var obj4 = { __proto__: "not an object or null" };
// // assert(Object.getPrototypeOf(obj4) === Object.prototype);
// // assert(!obj4.hasOwnProperty("__proto__"));

// 클로저
// for( let i =0; i<4;i++){
//     const a = ()=>{
//         setTimeout(()=>{console.log(i)},1000)
//     }
//     a();
// }


// (function(){
//     setTimeout(()=>{console.log(i)},0)
// })();

var arr = []
// {
//     for(let i = 0; i < 5; i++){
//         arr[i] = function() {
//             return function(id){
//                 return id;
//             }(i)
//         };
//     }

// }

{
    
    for(var i = 0; i < 5; i++){
        arr.push((function(id) {
            return function(){
                return id;
            }
        })(i))
    }

}

p(arr)
p(arr.map(closure=>closure())
.map(item=>item * item)
.filter(item=>item>3))