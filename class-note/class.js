// ES2015 (ES6)
class person1 {
  // 클래스의 역활: 인스턴스 생성
  // 클래스 로직
  constructor(name, age) {
    // 초기화 매서드
    console.log("생성 되었습니다.");
  }
}

new person1(); // 생성 되었습니다.

class person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var seho = new person1("세호", 30);
console.log(seho);
