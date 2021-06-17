class Deparment {
  static fiscalYear = 2021;
	// private readonly id: string;
	// private name: string;
	// private employees: string[] = [];

	// constructor(id: string, name: string) {
	//   this.id = id;
	//   this.name = name
	// }

	// In typescript: private, protected and public worked the same as C#
	constructor(private readonly id: string, private name: string, protected employees: string[] = []) {}

  static createEmployee(name: string) {
    return {name};
  }

	describe(this: Deparment) {
		console.log(`Department id: ${this.id}, name: ${this.name}`);
	}

	addEmployee(name: string) {
		this.employees.push(name);
	}
}

class ITDepartment extends Deparment {
	private readonly admins: string[];
	constructor(id: string, admins: string[] = []) {
		super(id, 'IT');
		this.admins = admins;
	}

	addEmployee(name: string) {
		if (name === 'Thinh') {
			return;
		}

		this.employees.push(name);
	}
	addAdmin(name: string) {
		this.admins.push(name);
	}
}

class ReportDepartment extends Deparment {
  private lastReport: string;
  // * Singleton pattern
  private static reportDepartment: ReportDepartment;

	get mostRecentReport() {
		return this.lastReport;
	}

	set mostRecentReport(name: string) {
		this.addReport(name);
	}

	private constructor(id: string, private readonly reports: string[] = []) {
		super(id, 'report');
		this.lastReport = reports[0];
  }
  
  // * Singleton pattern
  static getInstance() {
    if (!this.reportDepartment) {
      this.reportDepartment = new ReportDepartment('id3');
    }
    return this.reportDepartment;
  }

	addReport(report: string) {
		this.reports.push(report);
		this.lastReport = report;
	}
}

// const deparment = new Deparment('d1', 'Accounting');
// deparment.describe();
// deparment.addEmployee("Thinh");
// deparment.addEmployee("Dat");

// console.log(deparment);

const itDepartment = new ITDepartment('id1');
itDepartment.addEmployee('Thinh');
itDepartment.addEmployee('Dat');
itDepartment.addAdmin('Thai');

console.log(itDepartment);

// const reportDepartment = new ReportDepartment('id2');
// reportDepartment.addEmployee('Thinh');
// reportDepartment.addEmployee('Dat');
// reportDepartment.addReport('Thinh is lazy again!');
// reportDepartment.mostRecentReport = 'Thinh is tired again !!';

// console.log(reportDepartment);
console.log(Deparment.createEmployee('Thinh'));
console.log(Deparment.fiscalYear);

// * Singleton pattern
const reportDepartment_1 = ReportDepartment.getInstance();
reportDepartment_1.addEmployee('Thinh');
reportDepartment_1.addEmployee('Dat');
reportDepartment_1.addReport('Thinh is lazy again!');
reportDepartment_1.mostRecentReport = 'Thinh is tired again !!';

const reportDepartment_2 = ReportDepartment.getInstance();

console.log('reportDepartment_1', reportDepartment_1);
console.log('reportDepartment_2', reportDepartment_2);
// * End of Singleton pattern

// const deparmentCopy = {name: 'IT', describe: deparment.describe}

// deparmentCopy.describe();
