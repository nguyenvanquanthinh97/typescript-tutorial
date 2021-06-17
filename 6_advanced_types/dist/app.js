"use strict";
var _a;
var elavatedEmployee = {
    name: 'Thinh',
    privileges: ['eat', 'sleep', 'code'],
    startDate: new Date()
};
console.log(elavatedEmployee);
var universal = 123;
var add = function (input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return +input1 + +input2;
    }
    else {
        return String(input1) + String(input2);
    }
};
var printEmployeeInformation = function (emp) {
    console.log('Name: ' + emp.name);
    // typeguard
    // we can not use instance of here, because we are checking on interfaces, not classes
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate: ' + emp.startDate);
    }
};
var Teacher = /** @class */ (function () {
    function Teacher(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    return Teacher;
}());
var Student = /** @class */ (function () {
    function Student(name, score) {
        this.name = name;
        this.score = score;
    }
    return Student;
}());
var printSchoolerInformation = function (schooler) {
    console.log('Name: ' + schooler.name);
    // typeguard
    // we can use instanceof to check only class type
    if (schooler instanceof Teacher) {
        console.log('salary: ' + schooler.salary);
    }
    if (schooler instanceof Student) {
        console.log('score: ' + schooler.score);
    }
};
var printAnimalInformation = function (animal) {
    switch (animal.type) {
        case 'bird':
            console.log('Flying at the speed: ' + animal.flyingSpeed);
            break;
        case 'horse':
            console.log('Running at the speed: ' + animal.runningSpeed);
    }
};
var bird = { flyingSpeed: 23, type: 'bird' };
printAnimalInformation(bird);
// const input = <HTMLInputElement>document.getElementById('user-input');
// (*) !: tell that this will never return null
// const input = document.getElementById('user-input')! as HTMLInputElement;
var input = document.getElementById('user-input');
if (input) {
    input.value = 'Hi there';
}
var error = {
    email: 'Not a valid email',
    username: 'Not a valid username'
};
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return +input1 + +input2;
    }
    else {
        return String(input1) + String(input2);
    }
}
var result = combine('Thinh', ' Nguyen');
result.split(' ');
/////////////////////////
/// optional chaining
var fetchedUserData = {
    id: 'u1',
    name: 'Thinh',
    job: { title: 'CEO', description: 'My own company' }
};
// Only access fetchedUserData.job if fetchedUserData is not null
// Only access fetchedUserData.job.title if fetchedUserData.job is not null
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var Test = /** @class */ (function () {
    function Test(name, age) {
        this.name = name;
        this.age = age;
        if (!age) {
            console.log('wrong happening here');
        }
    }
    return Test;
}());
var test = new Test('Thinh', 0);
console.log(test);
/// Nullish Coalescing
var userInput = '';
/// ?? will only check if not null or undefined. (won't cast a value to boolean to check like || or &&)
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=app.js.map