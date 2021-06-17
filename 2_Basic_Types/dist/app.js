"use strict";
let userInput;
let username;
userInput = 'Thinh';
userInput = 5;
if (typeof userInput === 'string') {
    username = userInput;
}
const add = (input1, input2) => {
    return input1 + input2;
};
const printResult = (result) => {
    console.log(result);
};
const addAndHandler = (input1, input2, callback) => {
    const result = input1 + input2;
    callback(result);
};
let combinedValue;
combinedValue = add;
printResult(combinedValue(3, 6));
addAndHandler(2, 5, (number) => console.log(number));
const generateError = (message, code) => {
    throw { message, errorCode: code };
};
generateError('An error occured!', 500);
//# sourceMappingURL=app.js.map