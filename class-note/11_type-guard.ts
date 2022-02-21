interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {
    name: "Tony",
    age: 33,
    skill: "Iron Making",
  };
}

var tony = introduce();
// Developer 와 Person 의 공통된 속성만 접급가능 (name)
// console.log(tony.skill);

// [타입 단언을 이용한 skill 보장]
// 타입 단언을 이용한 타입 정의 방식: 타입의 범위를 구체화 시키는 것.

// 타입 단언만을 이용했을 때의 문제: 코드가 복잡해짐.
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// [타입 가드 소개와 적용]
// is: 타입가드에서 사용하는 키워드
// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  // 넘겨 받는 target 이 Developer 타입인지 확인
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
