// interface Person {
// 	readonly name: string;
//   age: number;
// }

interface AddFn{
  (num1: number, num2: number): number;
}

interface Name {
  readonly name: string;
  age?: number
}

interface Greeting extends Name {
  greeting(phrase: string): void;
  goodbye?(phrase:string): void;
}

// let user1: Person;
// user1 = {
// 	name: 'Thinh',
// 	age: 25,
// 	greeting: function(phrase: string) {
// 		console.log(phrase + ' ' + this.name);
// 	}
// };

// user1.greeting('Hello, Mr.');

class Greetable implements Greeting {
	name: string;
	age?: number;
	constructor(name: string, age?: number) {
		this.name = name;
		this.age = age;
	}

	greeting(phrase: string) {
		console.log(phrase + ' ' + this.name);
	}
}

const greetable_1 = new Greetable('Dat', 24);
greetable_1.greeting("What's up");

let addFn: AddFn;
addFn = (num1: number, num2: number) => num1 + num2;
console.log(addFn(100, 99));

const greetable_2 = new Greetable('Thinh');
console.log(greetable_2);
