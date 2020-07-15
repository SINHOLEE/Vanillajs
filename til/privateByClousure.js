{
    // 
    class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
    
        getAge(){
            return this.age;
        }
    
        setAge(age){
            this.age = age;
        }
    
        getName(){
            return this.name;
        }
    
    }
    
    const p1 = new Person("sinho", 29);
    
    console.log(p1)
    p1.setAge(12);
    console.log(p1)
    p1.age = 21; // 이런식으로 접근해서 변경이 가능하면 oop의 은닉성을 위반하게 된다.
    console.log(p1)
    
    // 클래스 사용하지 않고 은닉성을 만족한 객체 만들기
    const Person2 = (function(){
        let _name;
        let _age;
        function Person2(name, age) {
            _name = name;
            _age = age;
        }
        Person2.prototype.getAge = function(){
            return _age;
        }
        Person2.prototype.getName = function(){
            return _name;
        }
        Person2.prototype.setAge = function(age){
            _age = age;
        }
        return Person2
    })();
    
    const p2 = new Person2("mini", 28);
    //
    // p2 = {}
    // Person2.call(p2, 'sinho', 28)
    
    // p2.age = 2;
    console.log(p2.getAge());
    console.log(p2._age);
    console.log(p2._name);
    console.log(p2.getName());
    console.log(p2.setAge(12));
    console.log(p2.getAge());
    
    // 결론 
}
{
    // 상속을 클로저 있는 상태로 시도해보기
    const Person = (function(){
        let _name;
        let _age;
        return class {
            constructor(name, age){
                _name = name;
                _age = age;
            }
            getAge(){
                return _age;
            }
        
            setAge(age){
                _age = age;
            }
        
            getName(){
                return _name;
            }
        }
    })();
    
    class Korean extends Person{
        sayHello(){
            return `하이! ${this.getName()}`;
        }
    }

    const k1 = new Korean("신호", 21);
    console.log(k1.getName());
    console.log(k1.sayHello());
}

{
    // class 안쓰고 person 생성자 객체 + 클로저로 private만들기는 실패
    const Person = (function(){
        let _name;
        let _age;
        function Person(name, age) {
            _name = name;
            _age = age;
        }
        Person.prototype.getAge = function(){
            return _age;
        }
        Person.prototype.getName = function(){
            return _name;
        }
        Person.prototype.setAge = function(age){
            _age = age;
        }
        return Person
    })();

    function Korean(name, age){
        Person.call(this, [name, age]);
    }
    Korean.prototype = Object.create(Person.prototype)
    Korean.prototype.constructor = Korean;

    const k1 = new Korean("민희", 12);
    console.log(k1);

}