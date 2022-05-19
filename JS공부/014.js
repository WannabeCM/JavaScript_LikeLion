// 모듈 패턴이라고 합니다.
function Person() {
  let age = 15;

  return {
    getAge: function () {
      return age;
    },
    setAge: function (data) {
      age = data;
    },
  };
}

const person = Person();
console.log(person.getAge());
console.log(person.age);
person.setAge(40);
console.log(person.getAge());
