// 따로 타입을 지정하지 않아 any로 어떤 인자든 넘겨줄 수 있다.
// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText("hi");
// logText(10);

// 직접 타입을 지정
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

logText<string>("hi");

// 인터페이스에 제네릭을 선언하는 방법
interface DropDown<T> {
  value: T;
  selected: boolean;
}
const obj: DropDown<string> = { value: "abc", selected: false };

// 제네릭의 타입 제한 1
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}

// 제네릭으 타입 제한 2. 정의된 타입 이용하기
interface lengthType {
  length: number;
}
function logTextLengthType<T extends lengthType>(text: T): T {
  text.length;
  return text;
}

logTextLengthType("hellow");

// 제네릭 타입 제한 3. keyof
interface ShoppingOption {
  name: string;
  price: number;
  stock: number;
}
function GetShoppingItemOption<T extends keyof ShoppingOption>(
  itemOption: T
): T {
  return itemOption;
}
GetShoppingItemOption("name");
