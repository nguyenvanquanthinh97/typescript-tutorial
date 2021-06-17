//// Generic
// const arr: Array<string> = [];
// arr.push('Thinh', 'Dat', 'Tuong');

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
const merge = <T extends object, U extends object>(objA: T, objB: U) => {
	return { ...objA, ...objB };
};

const result = merge({ name: 'Thinh', age: 25 }, { falcuty: 'IT' });

console.log(`${result.name} ${result.age} ${result.falcuty}`);

interface Lengthy {
	length: number;
}
const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
	let describeText = 'Got no value';
	if (element.length === 1) {
		describeText = 'Got 1 element.';
	}
	if (element.length > 1) {
		describeText = `Got ${element.length} elements.`;
	}
	return [ element, describeText ];
};

console.log(countAndDescribe('This is a test'));
console.log(countAndDescribe([ 'John', 'Anderson' ]));

/// * keyof
// const extractAndConvert = <T extends object>(obj: T, key: typeof T)
const extractAndConvert = <T extends object, M extends keyof T>(obj: T, key: M) => {
	return `Value: ${obj[key]}`;
};

console.log(extractAndConvert({ name: 'Thinh' }, 'name'));

/// Class Generic
/// * Generic: use if you want to lock in a certain type in the same type throughout the entire class or function.
/// * Union: use when you want to have a different type with every method call with every function call.
type InterfaceTypes = string | number | boolean;
class DataStorage<T extends InterfaceTypes> {
	private data: Array<T> = [];
	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		const itemIndex = this.data.indexOf(item);
		if (itemIndex === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [ ...this.data ];
	}
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem('Thinh');
stringStorage.addItem('Dat');
stringStorage.addItem('Tuong');

stringStorage.removeItem('Dat');

console.log(stringStorage.getItems(), stringStorage.getItems()[0]?.split(''));

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name: 'Thinh'})
// objectStorage.addItem({name: 'Dat'})
// objectStorage.addItem({name: 'Tuong'})

// objectStorage.removeItem({name: 'Dat'})
// console.log(objectStorage.getItems());

interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

const createCourseGoal = (title: string, description: string, date: Date) => {
  // Partial will transform all property of interface in CourseGoal to be optional
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

console.log(createCourseGoal('Test', 'aaaaa', new Date()));
