//PART 1
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

for (let inventory of adventurer.inventory) {
  console.log(inventory);
}

adventurer.roll();
adventurer.roll();
adventurer.roll();

//PART 2
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  static MAX_HEALTH = 100;
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];
//console.log(robin);

//PART 3
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
  constructor(name, role, power) {
    super(name);
    const found = Adventurer.ROLES.find((r) => {
      if (role === r) {
        return true;
      }
    });
    if (found) {
      this.role = role;
    } else {
      throw new Error("Ups, not such role.");
    }
    this.role = role;
    this.power = power;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }

  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  duel(Adventurer) {
    const adventurer = Adventurer.roll();
    const opposite = this.roll();
    if (opposite < adventurer) {
      opposite--;
    }
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  talk() {
    console.log(`${this.name} of ${this.type} keep talking`);
  }
}

const robin1 = new Adventurer("Robin", "Fighter", 500);
const companion1 = new Companion("Leo", "Cat");
companion1.inventory = ["sword", "potion", "artifact"];
const companion2 = new Companion("Frank", "Flea");
companion2.inventory = ["small hat", "sunglasses"];
// console.log(Adventurer.ROLES);
// console.log(companion2);

// PART 5
class AdventurerFactory {
  constructor(role, power) {
    this.role = role;
    this.power = power;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role, this.power);
    this.adventurers.push(newAdventurer);
    return newAdventurer;
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");
console.log(robin);
