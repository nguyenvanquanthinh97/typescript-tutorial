"use strict";
const combine = (input1, input2, resultConversation) => {
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversation === 'as-number') {
        return +input1 + +input2;
    }
    return String(input1) + String(input2);
};
const combineAges = combine(30, 15, "as-number");
console.log(combineAges);
const combineAgeString = combine('23', '25', 'as-number');
console.log(combineAgeString);
const combineNames = combine("Thinh", "Hau", "as-text");
console.log(combineNames);
//# sourceMappingURL=union-aliases.js.map