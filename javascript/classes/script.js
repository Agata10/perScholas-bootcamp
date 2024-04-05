class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
    // return is not needed because the new object is returned by default
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = "Animal") {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? "is" : "is not"
    } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
  }
}

class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Meow...");
  }
  toString() {
    return super.toString("Cat");
  }
}

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    return super.toString("Dog");
  }
}

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo.");
  }
  toString() {
    return super.toString("Cow");
  }
}

const person = {
  name: {
    first: "Elyan",
    last: "Kemble",
  },
  age: 32,
  location: {
    city: "Garland",
    state: "Texas",
    zip: 75040,
  },
  occupation: "Front-End Developer",
};

function introduce() {
  console.log(
    `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
  );
}

///EXERCIse 1
class Human extends Animal {
  constructor(first, last, age, city, state, zip, occupation) {
    super(2, 2, false, false); //eyes, legs, isAwake, isMowing
    this.name = {
      first: first,
      last: last,
    };
    this.age = age; //can move to the Animal class
    this.location = {
      city: city,
      state: state,
      zip: zip,
    };
    this.occupation = occupation;
  }
  introduce() {
    return `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`;
  }
}

const human1 = new Human(
  "Agata",
  "D",
  "x",
  "Westminster",
  "CO",
  "xxxxx",
  "software engineer"
);

//console.log(human1.introduce());

//ENCAPSULATION
class Learner {
  #grades = [];
  #name = {
    first: "",
    last: "",
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }
  get name() {
    return this.#name.first + " " + this.#name.last;
  }
  get age() {
    return this.#age;
  }
  // set grades(grade) {
  //   // change the grade to a Number, in case it was provided as a String
  //   grade = Number(grade);
  //   // Only accept values between 0 and 100
  //   if (grade >= 0 && grade <= 100) {
  //     this.#grades.push(grade);
  //   }
  // }
  addGrades(...grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }

  get grades() {
    return this.#grades;
  }
}

const learner1 = new Learner("Leeroy", "Jenkins", 18);
console.log(learner1.name);

//we can use only assign for setting
//learner1.grades = 2;
learner1.addGrades(2, 3, 4);
console.log(learner1.grades);
