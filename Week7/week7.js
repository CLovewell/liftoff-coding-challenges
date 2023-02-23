class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(aPerson) {
    let name = aPerson.name;
    if (aPerson.age - this.age > 0) {
      return name + " is older than me.";
    }
    if (aPerson.age - this.age < 0) {
      return name + " is younger than me.";
    }
    if (aPerson.age - this.age == 0) {
      return name + " is the same age as me.";
    }
  }
}

module.exports = {
  Person: Person
};