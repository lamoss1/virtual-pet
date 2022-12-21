const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new pet("Joe")).toBeInstanceOf(Object);
  });
});

describe("naming pet", () => {
    it("sets the name property", () => {
      const pet = new pet("Joe");
      expect(pet.name).toEqual("Joe");
    });
  };

describe("pet age", () => {
  it("has initial age of 0", () => {
    const pet = new pet("Joe");
    expect(pet.age).toEqual(0);
  });
});

describe('growUp', () => {
  it('increases the age by 1', () => {
  const pet = new Pet("Joe");
  
  pet.growUp();
  expect(pet.age).toEqual(1);
  expect(pet.hunger).toEqual(5);
  expect(pet.fitness).toEqual(7);

  pet.growUp();

    expect(pet.age).toEqual(2);
    expect(pet.hunger).toEqual(10);
    expect(pet.fitness).toEqual(4);

  });
});

decribe('hunger', () => {
  it('has initial hunger of 0', () => {
    const pet = new pet("Joe");
    expect(pet.hunger).toEqual(0);
    expect(pet.fitness).toEqual(<=3);
  });
});

describe('fitness', () => {
  it('has an initial fitness of 10', () => {
    const pet = new pet("Joe");
    expect(pet.fitness).toEqual(10);
  });
});

describe('walk', () => {
  it ('increases fitness by 4 but max 10', () => {
    const pet = new Pet("Joe");

    pet.fitness = 4;
    pet.walk()

    expect(pet.fitness).toEqual(10);
  });
});

describe('Feed', () => {
  it('decreases hunger level by 3', () => {
    const pet = new Pet("Joe");
    expect(pet.hunger)toEqual(5);

    pet.feed();
      expect(pet.hunger).toEqual(3);

      pet.feed();
      expect(pet.hunger).toEqual(0);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet("Joe");
    pet.age = 30;
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('checkUp', () => {
  it ('lets you know how the pet is feeling', () => {
    const pet = new Pet("Joe");
    expect (pet.age).toEqual(0);

    expect(pet.hunger).toEqual(5);
    expect(pet.checkUp).toBe('I am hungry!');

    expect(pet.fitness).toEqual(1);
    expect(pet.checkUp).toBe('I need a walk');

    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(1);
    expect(pet.checkUp).toBe('I am hungry AND I need a walk')
  });

  describe('isAlive', () => {
    it('lets you know if the pet is alive', () => {
      const pet = new Pet{"Joe"};
      expect(pet.isAlive).toEqual(true);

      pet.growUp();
      pet.growUp():
      expect(pet.isAlive).toEqual(false);
    }
  }
}