// 함수의 파라미터에 타입을 정의하는 방식
function isSum(a: number, b: number) {
  return a + b;
}
isSum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function isSum1(): number {
  return 10;
}

// 함수의 타입을 정의하는 방식
function isSum2(a: number, b: number): number {
  return a + b;
}
// isSum2(10, 20, 30, 40); 에러를 반환

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}
