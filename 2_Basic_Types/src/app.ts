// Unlike 'any', 'unknow' can hold whatever type of value is, but it cannot be assigned to
// different variable with different type. (The logic inside every types checks that)
// This will be safer than type 'any', because it force us to check its value type before executing asigning
let userInput: unknown;
let username: string;

userInput = 'Thinh';
userInput = 5;

if (typeof userInput === 'string') {
  username = userInput;
}

// const add = (input1: number, input2: number): number
const add = (input1: number, input2: number) => {
	return input1 + input2;
};

const printResult = (result: number): void => {
	console.log(result);
};


// callback: (a: number) => void
// Just to said that we are not interest what does callback return here
// It does not force us to return void
const addAndHandler = (input1: number, input2: number, callback: (a: number) => void) => {
  const result = input1 + input2;
  callback(result);
	// const test = callback(result);
	// console.log(test);
};

// let combinedValue: Function;

// Declare function type reference, worked as Delegate in C#
let combinedValue: (a: number, b: number) => number;

combinedValue = add;

printResult(combinedValue(3, 6));

addAndHandler(2, 5, (number) => console.log(number));

// addAndHandler(3, 4, (number) => number * 2);

const generateError = (message: string, code: number): never => {
  throw {message, errorCode: code};
}

generateError('An error occured!', 500);
