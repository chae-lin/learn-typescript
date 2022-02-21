// 타입 추론 기본 1
var a = 10;

function getB(b = 10) {
  var c = "abc";
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// var shoppingItem: Dropdown<string> = {
//   value: "hi",
//   title: "hellow",
// };

// 타입 추론 기본 3: 제네릭 두개를 이용한 타입 추론
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  // 관행적으로는 T를 사용하나 구분하기 위해 K로
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  value: "hi",
  title: "hellow",
  description: "ab",
  tag: "dd",
};

// Best Common Type: 타입스크립트가 타입을 해석하는 방식
var arr = [0, "ff", true];
