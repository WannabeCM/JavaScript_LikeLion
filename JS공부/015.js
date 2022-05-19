// 사용자 정의 타입 패턴
function PersonType() {
  this.age = 35;
}

PersonType.prototype.getAge = function () {
  return this.age;
};

const person2 = new PersonType();
console.log(person2.getAge());
