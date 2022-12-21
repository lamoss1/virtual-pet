function Pet(name) {
  this.name = name;
  this.age = 0;
  this.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };
  this.hunger = 0;
}

walk = function () {
  const MAX_FITNESS = 10;
  if (this.fitness + 4 <= 10) {
    this.fitness += 4;
  } else {
    this.fitness = 10;
  }
};

checkUp = function () {
  const FITNESS_LIMIT = 3;
  const HUNGER_LIMIT = 5;
  const isHungry = this.hunger >= HUNGER_LIMIT;
  const isNotFit = this.fitness <= FITNESS_LIMIT;
  if (isHungry && isNotFit) {
    return "I am hungry AND I need a walk";
  } else if (isNotFit) {
    return "I need a walk!";
  } else if (isHungry) {
    return "I am hungry!";
  } else {
    return "I feel great!";
  }
};

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
};

module.exports = Pet;
