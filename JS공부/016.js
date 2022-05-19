// 모듈 + 사용자 정의 타입 혼합 패턴. 비공개 변수를 포함한 타입을 생성할때 사용
function PersonType2() {
  let age = 25;

  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
}

const Person3 = PersonType2();

const person3 = new Person3();
console.log(person3.getAge());
