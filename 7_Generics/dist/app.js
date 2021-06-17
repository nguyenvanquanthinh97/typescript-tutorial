"use strict";
//// Generic
// const arr: Array<string> = [];
// arr.push('Thinh', 'Dat', 'Tuong');
var _a;
// arr[0].split('');
// const promise: Promise<string> = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('This is a promise');
// 	}, 2000);
// });
// promise.then((result) => console.log(result.split(' ')));
// function merge<T,U>(objA: T, objB: U): T & U
// const merge = <T, U>(objA: T, objB: U): T & U
// * Add constraint
const merge = (objA, objB) => {
    return Object.assign(Object.assign({}, objA), objB);
};
const result = merge({ name: 'Thinh', age: 25 }, { falcuty: 'IT' });
console.log(`${result.name} ${result.age} ${result.falcuty}`);
const countAndDescribe = (element) => {
    let describeText = 'Got no value';
    if (element.length === 1) {
        describeText = 'Got 1 element.';
    }
    if (element.length > 1) {
        describeText = `Got ${element.length} elements.`;
    }
    return [element, describeText];
};
console.log(countAndDescribe('This is a test'));
console.log(countAndDescribe(['John', 'Anderson']));
/// * keyof
// const extractAndConvert = <T extends object>(obj: T, key: typeof T)
const extractAndConvert = (obj, key) => {
    return `Value: ${obj[key]}`;
};
console.log(extractAndConvert({ name: 'Thinh' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        const itemIndex = this.data.indexOf(item);
        if (itemIndex === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const stringStorage = new DataStorage();
stringStorage.addItem('Thinh');
stringStorage.addItem('Dat');
stringStorage.addItem('Tuong');
stringStorage.removeItem('Dat');
console.log(stringStorage.getItems(), (_a = stringStorage.getItems()[0]) === null || _a === void 0 ? void 0 : _a.split(''));
const createCourseGoal = (title, description, date) => {
    // Partial will transform all property of interface in CourseGoal to be optional
    const courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
};
console.log(createCourseGoal('Test', 'aaaaa', new Date()));
//# sourceMappingURL=app.js.map