// const person: {
//   name: string,
//   age: number
// }
const person = {
	name: 'Thinh',
	age: 25
};

// ADMIN = 0;
// AUTHOR = 1;
// USER = 2;
enum ROLE {ADMIN, AUTHOR, USER};

enum SALARY {FRESHMAN = 100, SECONDARY = 200, JUNIOR = 350, SENIOR = 500}

const student: {
  name: string,
  age: number,
  school: {
    name: string,
    isGraduated: boolean
  },
  hobbies: string[],
  role: (string | number) [], // This is an array which only contain type string or number
  falcuty: [string, number], // This is a tuple
  userRole: ROLE,
  salary: SALARY,
  noobs: any[]
} = {
// const student = {
	name: 'Thinh',
	age: 25,
	school: {
		name: 'hcmus',
		isGraduated: true
	},
  hobbies: [ 'swimming', 'learning' ],
  role: [2, 'author'],
  falcuty: ['IT', 4],
  userRole: ROLE.USER,
  salary: SALARY.JUNIOR,
  noobs: ['singing', 123, {name: 'Ey yo'}]
};

console.log(student);
