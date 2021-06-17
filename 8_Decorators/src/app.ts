const Logging = (loggingString: string) => {
	console.log('Logging Factory');
	return (constructor: Function) => {
    console.log('Class Decorator');
		console.log(loggingString);
    console.log(constructor);
	};
};

const WithTemplate = (template: string, hookId: string) => {
	console.log('Template Factory');
	return (constructor: any) => {
		console.log('Apply Template to hookId');
		const hook = document.getElementById(hookId);
		if (hook) {
			const person = new constructor();
			hook.innerHTML = template;
			hook.querySelector('h1')!.textContent = person.name;
		}
	};
};

const Log = (target: any, propertyName: string) => {
	console.log('Property Decorator');
	console.log(target, propertyName);
};

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
	console.log('Accessor Decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
};

const Log3 = (target: any, name: string, descriptor: PropertyDecorator) => {
	console.log('Method Decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
};

const Log4 = (constructor: any, name: string, descriptor: PropertyDecorator) => {
	console.log('Static Method Decorator');
	console.log(constructor);
	console.log(name);
	console.log(descriptor);
};

const Log5 = (constructor: any, name: string, index: PropertyDecorator) => {
	console.log('Parameter Decorator');
	console.log(constructor);
	console.log(name);
	console.log(index);
};

/// Decorator will be executed if code found the class Decorator, evenif the class don't get initiated
// will execute 2nd
// will execute 1st
// (constructor: Function)
// (constructor: Function)
@Logging('LOGGING-PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
	// target = prototype of Person
	// propertyName: = 'name'
	@Log name = 'Max';
	private _age: number;

	// target: prototype of Person
	// name: 'age'
	// descriptor: property descriptor
	@Log2
	set age(a: number) {
		if (a > 0) {
			this._age = a;
		} else {
			throw new Error('Invalid age - should be positive!');
		}
	}

	get age() {
		return this._age;
	}

	constructor(name: string, age: number) {
		console.log('Creating person object...');
		this.name = name;
		this._age = age;
	}

	// target: prototype of Person
	// name: 'getName'
	// descriptor: method descriptor
	@Log3
	getName() {
		return this.name;
	}

	// contructor: constructor of class Person
	// name: createPerson
	// descriptor: static method descriptor
	@Log4 // target: contructor of class Person
	static // name: 'createPerson'
	// index: position of parameter
	createPerson(@Log5 name: string, age: number) {
		return new Person(name, age);
	}
}

const withTemplate = (template: string, hookId: string) => {
	return <T extends { new (...args: any[]): { name: string, price?: number } }>(originalConstructor: T) => {
		return class extends originalConstructor {
			constructor(...props: any[]) {
        super(...props)
				console.log('Override construction');
        const hook = document.getElementById(hookId);
				if (hook) {
					hook.innerHTML = template;
					hook.querySelector('h1')!.textContent = this.name + ' ' + (this.price ?? 'Not evaluated yet');
				}
			}
		};
	};
};

@withTemplate('<h1>This is a test</h1>', 'app')
class Product {
	name: string;
	price?: number;
	constructor(name: string, price?: number) {
		this.name = name;
		this.price = price;
  }
  
  getPrice() {
    if (this.price) return this.price
    return 0;
  }
}

const product = new Product('LCD Screen');
console.log(product);


/// Autobind instance method
const autobind = (target: any, name: string, descriptor: PropertyDescriptor) => {
	const originalMethod = descriptor.value;
	const adjustedDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get: function() {
			return originalMethod.bind(this)
		}
	};

	// const adjustedDescriptor: PropertyDescriptor = {
	// 	...descriptor,
	// 	get: function() {
	// 		return originalMethod.bind(this)
	// 	}
	// }

	// delete adjustedDescriptor.writable
	// delete adjustedDescriptor.value

	return adjustedDescriptor;
}

class Printer {
	message = 'This works!';

	@autobind
	printMessage() {
		console.log(this.message);
	}
}

document.querySelector('button')?.addEventListener('click', (new Printer()).printMessage)

/// Validation with Decorators
interface ValidatorConfig {
	[key: string]: {
		[key: string]: string[]
	}
}

const registeredValidators: ValidatorConfig = {};

const Required = (target: any, key: string) => {
	let validationFieldSettings: string[] = [];
	if (registeredValidators[target.constructor.name]) {
		validationFieldSettings = registeredValidators[target.constructor.name][key] ?? []
	}
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[key]: [...validationFieldSettings, 'required']
	}
}

const PositiveNumber = (target: any, key: string) => {
	let validationFieldSettings: string[] = [];
	if (registeredValidators[target.constructor.name]) {
		validationFieldSettings = registeredValidators[target.constructor.name][key] ?? []
	}
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[key]: [...validationFieldSettings, 'positive']
	}
}

const validate = (obj: any) => {
	const objectValidatorSettings = registeredValidators[obj.constructor.name];
	if (!objectValidatorSettings) {
		return true;
	}
	let isValid = true;

	for(let key in objectValidatorSettings) {
		for (let validator of objectValidatorSettings[key]) {
			switch(validator) {
				case 'required': {
					isValid = isValid && !!obj[key];
					break;
				}
				case 'positive': {
					isValid = isValid && obj[key] > 0;
					break;
				}
			}
		}
	}
	return isValid;
}

class Course {
	@Required
	title: string;
	@PositiveNumber
	price: number;
	constructor(title: string, price: number) {
		this.title = title;
		this.price = price;
	}
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const title = document.getElementById('title')! as HTMLInputElement;
	const price = document.getElementById('price')! as HTMLInputElement;

	const course = new Course(title.value, +price.value);
	if(!validate(course)) {
		alert('Invalid input, please try again');
	}
	else {
		console.log(course)
	}
})
