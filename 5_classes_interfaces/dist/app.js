"use strict";
// interface Person {
// 	readonly name: string;
//   age: number;
// }
// let user1: Person;
// user1 = {
// 	name: 'Thinh',
// 	age: 25,
// 	greeting: function(phrase: string) {
// 		console.log(phrase + ' ' + this.name);
// 	}
// };
// user1.greeting('Hello, Mr.');
var Greetable = /** @class */ (function () {
    function Greetable(name, age) {
        this.name = name;
        this.age = age;
    }
    Greetable.prototype.greeting = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Greetable;
}());
var greetable_1 = new Greetable('Dat', 24);
greetable_1.greeting("What's up");
var addFn;
addFn = function (num1, num2) { return num1 + num2; };
console.log(addFn(100, 99));
var greetable_2 = new Greetable('Thinh');
console.log(greetable_2);
//# sourceMappingURL=app.js.map