function logMessage(value: string | number) {
  // 유니온 타입(Union Type): 하나의 타입 이상을 쓸 수 있도록 만드는 것.
  console.log(value);
}

logMessage("hello");
logMessage(10);
