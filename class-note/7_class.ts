class person7 {
  private name: string; // 클래스 안에서만 사용 가능
  public age: number;
  readonly log: string; // 수정할 수 없고 읽기만 가능

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
