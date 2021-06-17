"use strict";
const person = {
    name: 'Thinh',
    age: 25
};
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["AUTHOR"] = 1] = "AUTHOR";
    ROLE[ROLE["USER"] = 2] = "USER";
})(ROLE || (ROLE = {}));
;
var SALARY;
(function (SALARY) {
    SALARY[SALARY["FRESHMAN"] = 100] = "FRESHMAN";
    SALARY[SALARY["SECONDARY"] = 200] = "SECONDARY";
    SALARY[SALARY["JUNIOR"] = 350] = "JUNIOR";
    SALARY[SALARY["SENIOR"] = 500] = "SENIOR";
})(SALARY || (SALARY = {}));
const student = {
    name: 'Thinh',
    age: 25,
    school: {
        name: 'hcmus',
        isGraduated: true
    },
    hobbies: ['swimming', 'learning'],
    role: [2, 'author'],
    falcuty: ['IT', 4],
    userRole: ROLE.USER,
    salary: SALARY.JUNIOR,
    noobs: ['singing', 123, { name: 'Ey yo' }]
};
console.log(student);
//# sourceMappingURL=objs-arrays-enums.js.map