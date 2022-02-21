// 타입 단언
var a10;
a10 = 20;
var b10 = a10 as string;

// DOM APT(웹페이지에서 태그로 접근하고 조작하는 API) 조작
var div = document.querySelector("div") as HTMLDivElement;
//  div가 있다는 것을 보장할 수 없어서 if('div')사용
if (div) {
  div.innerText;
}
