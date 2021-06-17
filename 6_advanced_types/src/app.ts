type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

/// Intersection
// intersection between 2 objects will combine both
type ElavatedEmployee = Admin & Employee;

const elavatedEmployee: ElavatedEmployee = {
	name: 'Thinh',
	privileges: [ 'eat', 'sleep', 'code' ],
	startDate: new Date()
};

console.log(elavatedEmployee);

type CombinationTypes = string | number;
type Numberic = number | boolean;

// intersection between 2 union types will return the same one
type Universal = CombinationTypes & Numberic;

const universal: Universal = 123;

const add = (input1: CombinationTypes, input2: CombinationTypes) => {
	if(typeof input1 === 'number' && typeof input2 === 'number') {
		return +input1 + +input2;
	}
	else {
		return String(input1) + String(input2);
	}
}

type UnknowEmployee = Admin | Employee;
const printEmployeeInformation = (emp: UnknowEmployee) => {
	console.log('Name: ' + emp.name);
	// typeguard
	// we can not use instance of here, because we are checking on interfaces, not classes
	if ('privileges' in emp)  {
		console.log('Privileges: ' + emp.privileges);
	}

	if('startDate' in emp) {
		console.log('startDate: ' + emp.startDate);
	}
}

class Teacher {
	name: string;
	salary: number;
	constructor(name: string, salary: number) {
		this.name = name;
		this.salary = salary;
	}
}

class Student {
	name: string;
	score: number;
	constructor(name: string, score: number) {
		this.name = name;
		this.score = score;
	}
}

type UnknowSchooler = Teacher | Student;

const printSchoolerInformation = (schooler: UnknowSchooler) => {
	console.log('Name: ' + schooler.name);
	// typeguard
	// we can use instanceof to check only class type
	if(schooler instanceof Teacher) {
		console.log('salary: ' + schooler.salary);
	}
	if(schooler instanceof Student) {
		console.log('score: ' + schooler.score);
	}
}

// typeguard using type literal common field (Discriminated Uninons)
interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

const printAnimalInformation = (animal: Animal) => {
	switch(animal.type) {
		case 'bird':
			console.log('Flying at the speed: ' + animal.flyingSpeed);
			break;
		case 'horse':
			console.log('Running at the speed: ' + animal.runningSpeed);
	}
}

const bird: Bird = {flyingSpeed: 23, type: 'bird'};
printAnimalInformation(bird);

// const input = <HTMLInputElement>document.getElementById('user-input');
// (*) !: tell that this will never return null
// const input = document.getElementById('user-input')! as HTMLInputElement;
const input = document.getElementById('user-input');

if (input) {
	(input as HTMLInputElement).value = 'Hi there'
}

// Index Properties
interface ErrorContainer { // {email: 'Not a valid email', username: 'Not a valid username'}
	[prop: string]: string
}

const error: ErrorContainer = {
	email: 'Not a valid email',
	username: 'Not a valid username'
}

/// Function overloading
function combine(input1: number, input2: number): number;
function combine(input1: string, input2: string): string;
function combine(input1: string, input2: number): string;
function combine(input1: number, input2: string): string;
function combine(input1: CombinationTypes, input2: CombinationTypes) {
	if(typeof input1 === 'number' && typeof input2 === 'number') {
		return +input1 + +input2;
	}
	else {
		return String(input1) + String(input2);
	}
}

const result = combine('Thinh', ' Nguyen');
result.split(' ');
/////////////////////////

/// optional chaining
const fetchedUserData = {
	id: 'u1',
	name: 'Thinh',
	job: {title: 'CEO', description: 'My own company'}
}

// Only access fetchedUserData.job if fetchedUserData is not null
// Only access fetchedUserData.job.title if fetchedUserData.job is not null
console.log(fetchedUserData?.job?.title);

class Test {
	name: string;
	age?: number
	constructor(name: string, age?: number) {
		this.name = name;
		this.age = age;
		if (!age) {
			console.log('wrong happening here');
		}
	}
	/// Thanks for that we know '?' will check only if not null or undefined.
}

const test = new Test('Thinh', 0);
console.log(test);

/// Nullish Coalescing
const userInput = '';
/// ?? will only check if not null or undefined. (won't cast a value to boolean to check like || or &&)
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);
