interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho3: User = {
  // seho는 User라는 인터페이스를 갖는다.
  age: 33,
  name: "세호",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  age: 28,
  name: "캡틴",
};
getUser(capt);

// 함수 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}
var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}
var arr3: StringArray = ["a", "b"];

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp; // RegExp: 정규표현식 생성자
}
var obj3: StringRegexDictionary = {
  //   sth: /abcc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}
interface Deverloper extends Person {
  language: string;
}
var captain: Deverloper = {
  name: "캡틴",
  age: 10,
  language: "ts",
};
