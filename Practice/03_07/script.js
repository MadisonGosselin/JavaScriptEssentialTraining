/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const farm = {
  acres: 100,
  inhabited: true,
  familyName: "Smith",

  crop: "beans",
  // functions sitting inside objects are called "methods"
  replant: function (crop) {
    this.crop = crop;
  },

  animals: {
    pigs: true,
    horses: false,
    chickens: true,
    roosters: true,
  },
};

console.log("Farm land:", farm);

const car = {
  stats: {
    make: "Mazda",
    model: "Miata",
    year: "1990",
    colour: "red",
  },
  repaint: function (colour) {
    this.colour = colour;
  },

  gasLvl: 0.5,
  tireAge: "2 years",
  tireType: "Winter",
};

console.log("Car:", car);

const keyboard = {
  numpad: false,
  color: "red",
  lights: "none",
  price: 50,
};

console.log("Keyboard:", keyboard);
