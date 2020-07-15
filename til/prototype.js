
var a = { attr1:1 }

var b = { attr2:2 }
console.log(a, " a출력")
console.log(a.attr1, " a.attr1 출력")
console.log(a.attr2, " a.attr2 출력")
console.log(a.hasOwnProperty('attr1'), " a가 attr1이라는 프로퍼티를 가지고 있는가?")
console.log(a.hasOwnProperty('attr2'), " a가 attr2이라는 프로퍼티를 가지고 있는가?")
console.log("----------------")
console.log(b, " b출력")
console.log(b.attr1, " b.attr1 출력")
console.log(b.attr2, " b.attr2 출력")
console.log(b.hasOwnProperty('attr1'), " b가 attr1이라는 프로퍼티를 가지고 있는가?")
console.log(b.hasOwnProperty('attr2'), " b가 attr2이라는 프로퍼티를 가지고 있는가?")

//위의 콘솔을 보면 서로 교차하는 어트리뷰트 혹은 프로퍼티 이름을 접근할 수 없다.

// 각각의 객체 a와b가 있다. b가 a를 상속하는 모양으로 사용하고 싶다면
// b.__proto__ = a 로 설정하면 된다?

b.__proto__ = a;
console.log("----------------")
console.log(b, " b출력")
console.log(b.attr1, " b.attr1 출력")
console.log(b.attr2, " b.attr2 출력")
console.log(b.hasOwnProperty('attr1'), " b가 attr1이라는 프로퍼티를 가지고 있는가?")
console.log(b.hasOwnProperty('attr2'), " b가 attr2이라는 프로퍼티를 가지고 있는가?")
console.log(Object.getPrototypeOf(b), " b가 누구를 상속(과 비슷한 성격을)받았는가? 라는 질문으로 답할 수 있다.")


function func1 (){
  this.prop1 = 123;
}

function func2 (){
  this.prop2 = "글자!";
}

// func1.prototype = new func2();

const f1 = new func1();

console.log("=======")
console.log(f1)
console.log(f1.prop1)
console.log(f1.prop2)
console.log(f1.hasOwnProperty("prop1"))
console.log(f1.hasOwnProperty("prop2"))
console.log(f1.__proto__);
// f1.__proto__ = new func2();
console.log(`
이제 func1.prototype = new func2();
nf1 = new func1();
작업을 한 뒤에 호출해보았다.
`)
func1.prototype = new func2();
const nf1 = new func1();
console.log("아래는 nf1 인스턴스에 대한 상태")
console.log(nf1)
console.log(nf1.prop1)
console.log(nf1.prop2)
console.log(nf1.hasOwnProperty("prop1"))
console.log(nf1.hasOwnProperty("prop2"))
console.log("아래는 f1에 대한 상태")
console.log(f1)
console.log(f1.prop1)
console.log(f1.prop2)
console.log(f1.hasOwnProperty("prop1"))
console.log(f1.hasOwnProperty("prop2"))


// 정리
// 일단 __proto__는 과거 [[prototype]]의 잔재로 레거시처럼 남아있는것.
// 직접 __proto__를 다루는 것은 좋지 못하다.
// __proto__를 알고 싶을때는 Object.getPrototypeOf()메소드를 사용하자!

// prototype은 함수형 객체에 쓰는 것
// 만약 일반객체에 var a = {attr1:1}; a.prototype = new func2() 이런식으로 하면
// a = {attr1:1, prototype: {prop2:"글자!"}}처럼 a 객체 안에
// 어트리뷰트의 키값이 prototype인 속성이 하나 추가될 뿐이다. 
