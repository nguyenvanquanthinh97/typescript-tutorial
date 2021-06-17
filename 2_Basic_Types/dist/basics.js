"use strict";
function add(num1, num2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + (num1 + num2));
    }
    else {
        return phrase + (num1 + num2);
    }
}
const num1 = 15;
const num2 = 5.7;
const showResult = true;
const phrase = 'The result is';
console.log(add(num1, num2, showResult, phrase));
//# sourceMappingURL=basics.js.map