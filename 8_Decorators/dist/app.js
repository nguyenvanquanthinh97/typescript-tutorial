"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
var Person_1;
const Logging = (loggingString) => {
    console.log('Logging Factory');
    return (constructor) => {
        console.log('Class Decorator');
        console.log(loggingString);
        console.log(constructor);
    };
};
const WithTemplate = (template, hookId) => {
    console.log('Template Factory');
    return (constructor) => {
        console.log('Apply Template to hookId');
        const hook = document.getElementById(hookId);
        if (hook) {
            const person = new constructor();
            hook.innerHTML = template;
            hook.querySelector('h1').textContent = person.name;
        }
    };
};
const Log = (target, propertyName) => {
    console.log('Property Decorator');
    console.log(target, propertyName);
};
const Log2 = (target, name, descriptor) => {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
const Log3 = (target, name, descriptor) => {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
const Log4 = (constructor, name, descriptor) => {
    console.log('Static Method Decorator');
    console.log(constructor);
    console.log(name);
    console.log(descriptor);
};
const Log5 = (constructor, name, index) => {
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
let Person = Person_1 = class Person {
    constructor(name, age) {
        // target = prototype of Person
        // propertyName: = 'name'
        this.name = 'Max';
        console.log('Creating person object...');
        this.name = name;
        this._age = age;
    }
    // target: prototype of Person
    // name: 'age'
    // descriptor: property descriptor
    set age(a) {
        if (a > 0) {
            this._age = a;
        }
        else {
            throw new Error('Invalid age - should be positive!');
        }
    }
    get age() {
        return this._age;
    }
    // target: prototype of Person
    // name: 'getName'
    // descriptor: method descriptor
    getName() {
        return this.name;
    }
    // index: position of parameter
    createPerson(name, age) {
        return new Person_1(name, age);
    }
};
__decorate([
    Log
], Person.prototype, "name", void 0);
__decorate([
    Log2
], Person.prototype, "age", null);
__decorate([
    Log3
], Person.prototype, "getName", null);
__decorate([
    Log4 // target: contructor of class Person
], Person.prototype, "static", void 0);
__decorate([
    __param(0, Log5)
], Person.prototype, "createPerson", null);
Person = Person_1 = __decorate([
    Logging('LOGGING-PERSON'),
    WithTemplate('<h1>My Person Object</h1>', 'app')
], Person);
const withTemplate = (template, hookId) => {
    return (originalConstructor) => {
        return class extends originalConstructor {
            constructor(...props) {
                var _a;
                super(...props);
                console.log('Override construction');
                const hook = document.getElementById(hookId);
                if (hook) {
                    hook.innerHTML = template;
                    hook.querySelector('h1').textContent = this.name + ' ' + ((_a = this.price) !== null && _a !== void 0 ? _a : 'Not evaluated yet');
                }
            }
        };
    };
};
let Product = class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        if (this.price)
            return this.price;
        return 0;
    }
};
Product = __decorate([
    withTemplate('<h1>This is a test</h1>', 'app')
], Product);
const product = new Product('LCD Screen');
console.log(product);
/// Autobind instance method
const autobind = (target, name, descriptor) => {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            return originalMethod.bind(this);
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
};
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    printMessage() {
        console.log(this.message);
    }
}
__decorate([
    autobind
], Printer.prototype, "printMessage", null);
(_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (new Printer()).printMessage);
const registeredValidators = {};
const Required = (target, key) => {
    var _a;
    let validationFieldSettings = [];
    if (registeredValidators[target.constructor.name]) {
        validationFieldSettings = (_a = registeredValidators[target.constructor.name][key]) !== null && _a !== void 0 ? _a : [];
    }
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [key]: [...validationFieldSettings, 'required'] });
};
const PositiveNumber = (target, key) => {
    var _a;
    let validationFieldSettings = [];
    if (registeredValidators[target.constructor.name]) {
        validationFieldSettings = (_a = registeredValidators[target.constructor.name][key]) !== null && _a !== void 0 ? _a : [];
    }
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [key]: [...validationFieldSettings, 'positive'] });
};
const validate = (obj) => {
    const objectValidatorSettings = registeredValidators[obj.constructor.name];
    if (!objectValidatorSettings) {
        return true;
    }
    let isValid = true;
    for (let key in objectValidatorSettings) {
        for (let validator of objectValidatorSettings[key]) {
            switch (validator) {
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
};
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title');
    const price = document.getElementById('price');
    const course = new Course(title.value, +price.value);
    if (!validate(course)) {
        alert('Invalid input, please try again');
    }
    else {
        console.log(course);
    }
});
//# sourceMappingURL=app.js.map