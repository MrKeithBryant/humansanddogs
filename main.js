//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype // happy, color, hungry, not hungry, owner properties, coolness
function Dog (name, status, color, hungry, owner, cool) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
  this.cool = cool;
}

Dog.prototype.status = function (status) {
  console.log(`${this.name} is ${this.status} when ${this.owner} pets them.`);
};

Dog.prototype.color = function (color) {
  console.log(`${this.name} is ${this.color}.`);
};

Dog.prototype.hungry = function (hungry) {
  console.log(`This ${this.hungry} makes ${this.name} hungry and ${this.name} not hungry.`);
};

Dog.prototype.hungry = function (hungry) {
  console.log(`The dog ${this.name} is no longer hungry when they have ${this.hungry}.`);
};

Dog.prototype.owner = function (owner) {
  console.log(`It should not affect ${this.name} and ${this.name} when setting Mason as Sadies owner.`);
};

Dog.prototype.cool = function (cool) {
  console.log(`It should make ${this.name} cool and ${this.name} not cool.`);
};

const sadie = new Dog('sadie', 'normal', 'black', undefined);

const moonshine = new Dog('moonshine', null, null, true, true, false);

const atticus = new Dog('atticus', null, null, null, undefined, false);




// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, pet, feed, cool) {
  this.name = 'julia';
  this.pet = function (dog) {
    dog.status = 'happy';
  };
  this.feed = function (dog) {
    dog.hungry = false;
  };
  this.cool = true;
}

const mason = new Human('mason', 'happy', null, null, false);

const julia = new Human('julia', null, false, false);

// Instances of Human
// Needed: mason, julia





/*
it("should make Sadie happy when Mason pets her", function(){
  expect(sadie.status).toBe('normal');
  mason.pet(sadie);
  expect(sadie.status).toBe('happy');
});

it("should make Sadie black", function(){
  expect(sadie.color).toBe('black');
});

it("should be make Moonshine hungry and Sadie not hungry", function(){
  expect(moonshine.hungry).toBe(true);
  expect(sadie.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function(){
  julia.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});

it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function(){
  sadie.owner = mason;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Julia cool and Mason not cool", function(){
  sadie.owner = mason;
  expect(julia.cool).toBe(true);
  expect(mason.cool).toBe(false);
});
*/
