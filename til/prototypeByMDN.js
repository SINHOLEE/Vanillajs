// const assert = require('assert');

p = (...a)=> console.log(...a);

let f = function(){
    this.a = 1;
    this.b = 2;
}

let obj = new f();

p(f.hasOwnProperty("__proto__"))
f.prototype.b = 3
f.prototype.c = 4

p(f)
p(f.__proto__)
p(f.__proto__.__proto__)
p(f.__proto__.__proto__.__proto__)

p("-------f.prototype")
p(f.prototype)
p(f.prototype.__proto__)
p(f.prototype.__proto__.__proto__)



p("----------obj")
p(obj, " new 객체에 할당된 값이 그대로 남아있습니다.")
p(obj.__proto__," f함수 객체에 prototype을 이용해서 b,c를 삽입했을뿐인데 a어트리뷰트가 사라졌습니다.") 
p(`
이렇게 되기 때문에 
f.prototype.b = 3
f.prototype.c = 4
이런식으로 프로토타입을 이용해 직접 할당하는것은 프로토타입 체인을 망가트리는 방법입니다.
`)
p(obj.__proto__.__proto__)
p(obj.__proto__.__proto__.__proto__)

var obj4 = { __proto__: "not an object or null" };
p(obj4.__proto__)
p(Object.prototype) // 
p(obj4.hasOwnProperty("__proto__"));
p(Object.getPrototypeOf(obj4)) // undefined
// assert(Object.getPrototypeOf(obj4) === Object.prototype);
// assert(!obj4.hasOwnProperty("__proto__"));