//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log("Animal sound");
	}
}

class Dog extends Animal {
	bark(){
		console.log('woof');
	}
}

class Cat extends Animal {
	purr(){
		console.log('purr');
	}
}

const myCat = new Cat("Siamese");
const myDog = new Dog("Golder Retriever");

console.log(`The ${myCat.species} makes a sound`);
myCat.purr();

console.log(`The ${myDog.species} makes a sound`);
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
