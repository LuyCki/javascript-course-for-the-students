//// Classes 

// function Animal(name, age, speed) {
// 	this.name = name;
// 	this.age = age;
// 	this.speed = speed;
// }

class Animal {
	race;

	constructor(name, age, speed) {
		this.name = name;
		this.age = age;
		this.speed = speed;
	}

	eat() {
		return `${this.name} is eating.`
	}

	run() {
		return `${this.name} is running.`
	}

	static doSometing() {};
}

class Duck extends Animal {
	legs = 2;

	constructor(name, age, speed, flySpeed) {
		super(name, age, speed);

		this.flySpeed = flySpeed;
	}

	fly() {
		return `${this.name} is flying with ${this.flySpeed} speed!`
	}

	run() {
		return `${this.name} is running like a duck!`
	}

	eat() {
		return `${super.eat()} like a duck!`
	}
}

// const duck = new Duck('Wili', 30, 5, 300);
// console.log(duck);
// console.log(duck.eat());
// console.log(duck.run());

// const duck = new Animal('Wili', 30, 5);
// duck.race = 'Wild White';
// console.log(duck);

// const dog = new Animal('Luci', 25, 10);
// dog.race = 'BBC';
// console.log(dog);

class Car {
	#age;
	#color;
	
	constructor(age, color) {
		this.setAge(age);
		this.setColor(color);
	};

	setAge(age) {
		if (age) {
			this.#age = age;
		} else {
			throw 'Must not be empty';
		}
	}

	getAge() {
		return this.#age;
	}

	setColor(color) {
		this.#color = color;
	}

	getColor() {
		return this.#color;
	}
}

// const bmw = new Car();
// bmw.setAge('10');
// bmw.setColor('red');
// console.log(bmw.getAge());
// console.log(bmw.getColor());

// const bmw = new Car('', 'blue');
// console.log(bmw.getAge());
// console.log(bmw.getColor());



// //// I. The Boy Scout Rule
// // 1. Leave the campground cleaner than you found it.

// //// II. Meaningful Names

// // 1. Use Intention-Revealing Names

var t; // time in days
var timeInDays;

function getThem() {
	// Fetching from a server
  const all = []; // loans
	const s = [];
	const a = [];

	for (let i = 0; i < all.length; i++) {
		const element = all[i];
		
		if (element.active) {
			a.push(element);
		} 
		
		if (!element.active) {
			s.push(element)
		}
	}
	
	return { s, a };
}

function getLoansByStatus() {
	// Fetching from a server
  const loans = [];
	const [active, settled] = [[], []];

	loans.forEach(loan => {
		loan.active ? active.push(loan) : settled.push(loan);
	})

	return { active, settled };
}

getLoansByStatus();

// // 2. What to avoid

// class Customer {}
// class CustomerObject {}
// class CustomerClass {}

// getActiveLoan();
// getActiveLoanInfo();
// getActiveLoanData();

// let name;
// let nameString;

// let phoneString; // type string but later changed in type number

// let p_number; // prefixes

// // Methods should, usually, have verb phrase names like modifyPayment, deleteLoan, or save.
// // Accessors, mutators, and predicates should, be prefixed with "get", "set", or "is" 

// function name() {} // ??

// // 3. Side effects

class UserValidator {
	checkPasswordAndInitializeSession(userName, password) {
		const user = UserService.getByName(userName);

		if (user) {
			const isPasswordValid = CryptographerService.decrypt(user, password);

			if (isPasswordValid) {
				UserSession.initialize();

 				return true;
			}
		}
		return false;
	}
}

// //// III. Comments Do Not Make Up for Bad Code

// //// IV. Classes

// // 1. Classes Should Be Small!

// // 2. The Single Responsibility Principle

// // 3. Cohesion

class UserSession {
	session;

	setSession(session) {
		this.session = session;
	}
}

const dog = new Animal('Wili', 30, 1);
const cat = new Animal('Luci', 25, 2);

console.log(dog);
console.log(cat);

dog.name = 'Paul';

class Singleton {
	static #instance;

	constructor() { };

	static getInstance() {
		if (!this.#instance) {
			Singleton.#instance = new Singleton();
		}

		return Singleton.#instance;
	}

	setHost(url) {
		this.url = url;
	}
}

const modul1 = Singleton.getInstance();
const modul2 = Singleton.getInstance();

console.log(modul1);
console.log(modul2);

modul1.setHost('https://google.com');

console.log(modul1);
console.log(modul2);

modul2.setHost('https://fb.com');

console.log(modul1);
console.log(modul2);