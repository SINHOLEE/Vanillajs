// function a(){
//     this.number = 23;
//     return 1;
// }

// const b = {g:1};

// console.log(a.prototype) // 함수의 프로토타입
// console.log(b.prototype) // 객체의 프로토타입

// function Person(name){
//     this.name = name; // 여기서 this는 Person 객체
//     this.introduce = function(){ 
//         return `my name is ${this.name}`;
//     }
// }

// console.log(Person.prototype) // 생성자함수의 프로토 타입
// // 중간정리
// // 함수의 프로토 타입은 자기 자신 그렇지만 빈것을 나타내는것같다.
// // 일반객체의 프로토타입은 존재하지 않는다.
// console.log(Object.prototype) // 객체조상의 프로토 타입은 {}
// console.log(Function.prototype) // Function의 프로토타입은 native code

// const sinho = new Person("sinho");

// console.log(sinho);
// console.log(sinho.name);
// console.log(
//     sinho.introduce()
// )
    

// function Person2(name){
//     this.name = name;
// }

// Person2.prototype.name = null;
// Person2.prototype.introduce = function(){
//     return `my name is ${this.name}`; // 여기서 this는 persion2를 가기킨다.
// }

// const mini = new Person2('mini');

// console.log(mini);
// console.log(mini.introduce());
// console.log(Person2.prototype);

// // low하게 상속을 해보자.

// function Programmer(name){
//     this.name = name;
// }

// Programmer.prototype = new Person2();
// Programmer.prototype.introduce = function(){ // 이게 오버라이드 인가?
//     return `나는 프로그래머 ${this.name}이닷!`
// }

// const sungmin = new Programmer("sungmin");

// console.log(sungmin);
// console.log(sungmin.introduce());

arr = ["a", "b", "c"];

Array.prototype.getRandom = function(){
    const targetIdx = Math.floor(this.length * Math.random());
    
    return this.find((item, idx)=>idx===targetIdx);
}
Math.random()
console.log(arr.getRandom())

