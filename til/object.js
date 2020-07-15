// // object를 생성하는 방법은 크게 3가지가 있다.
// // 1. 객체 리터럴, 2. object 생성자 함수, 3. 생성자 함수

// // 1. 객체 리터럴
// // {}를 사용해서 생성하는 방식, 아마도. 바로 메모리에 올라가며
// // {}내에 한개 이상의 프로퍼티를 만든다면 그 프로퍼티가 추가된 객체를 생성할 수 있다.

// var emptyObject = {};
// var a = {a:1, b:2, c:3};
// var b = {a:1};

// var personByObjLiteral = {
//     name: 'Lee',
//     gender: 'male',
//     sayHello: function () {
//       console.log('Hi! My name is ' + this.name);
//     }
// }

// console.log(typeof personByObjLiteral);
// console.log(personByObjLiteral);
// personByObjLiteral.sayHello();


const arr = [1, 2];
arr[Math.pow(2, 32)-2] = 3;
console.log(arr.length);


function Animal(name, age){
    this.name = name;
    this.age = age;
    this.addAge = function(){
        this.age++;
    }
}
console.log("=========person")


function Dog(size, name, age){
    this.size = size;
    this.prototype = new Animal(name, age);
    this.playWithHuman = function(){
        console.log("사람이랑 놀아욜 멍멍!");
    }
}
// 틀린것!!

function myNew(){

}

const myDog = new Dog(10, "happy", 2);

console.log(myDog)
console.log(myDog.prototype)
console.log(myDog.__proto__.__proto__)
// 위와같이 하면 틀린 생성이다.


// 즉 어떤 객체가 바라보고 있는 __proto__는 그 생성자 함수의 constructor를 바라본다
// 

console.log("===============")
function Vehicle(name){
    this.name = name;
}

Vehicle.prototype.ride = function(){
    console.log( `탈것으로  ${this.name}는 달립니다.`);
}



const v1 = new Vehicle("x");
console.log(v1.name);
v1.ride();

// new 의 내부동작

const v2 = {}
Vehicle.call(v2, "y"); // Vehicle 함수를 부르는데, v2를 this로 선언하여, "y"를 arg로 받는다.
v2.__proto__ = Vehicle.prototype // v2 객체의 프로토를 vehicle의 prototype으로 선언하여 연결한다.
v2.ride()


console.log("========")

var first = {attr1:1};
// Object.create(object)는 인자로 들어가는 오브젝트를 __proto__에 참조하는 빈 객체를 생성하는 것
const second = Object.create(first);
second.attr2 = 2
console.log(typeof first)
console.log(typeof second)
console.log(first)
console.log(second)
second.__proto__ = first;
console.log(second.attr2)
console.log(second.attr1)


function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function() {
    return this.name;
};
// low하게 상속하는 방법
function Child(name) { 
    // Parent 생성자 함수의 this를 child의 this로 바인딩 하는 작업 --> prototype chain
    Parent.call(this, name);
    
    this.age = 0;
}

// Child.prototype.__proto__ = Parent.prototype //  과 같은 꼴인듯 아니다 다르다...
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child;

const c1 = new Child("singo");
console.log(c1)
console.log(c1.getName())
console.log(c1.prototype)
console.log(c1.__proto__.__proto__)