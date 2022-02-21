// [인터페이스]
interface Developer12 {
  name: string;
  skill: string;
}

// interface Person12 {
//   name: string;
// }

class Person12 {
  name: string;
}

var developer: Developer12;
var person: Person12;

// interface interface
// developer = person; // 에러
// person = developer; // 에러X

// class interface 호환
// developer = new Person12() //에러
//  person = developer //에러X

// [함수]
// 함수 표현식 방식으로 비교 (함수자체를 변수에 담아서 비교하기 위해)
var add = function (a: number) {
  return a;
};

var sum = function (a: number, b: number) {
  return a + b;
};

// sum = add; // 에러X
// add = sum; // 에러

// [제네릭]
// (1) 내부 구조 비어있는 경우
interface Empty<T> {
  // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
// 내부 구조가 비어있을 경우 empty1과 empty2 동일한 값으로 간주.
// empty1 = empty2 // 에러X
// empty2 = empty1 // 에러X

// (2) 내부 구조 비어있지 않은 경우
interface NotEmpty<T> {
  date: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

// notempty1 = notempty2 // 에러
// notempty2 = notempty1 // 에러
