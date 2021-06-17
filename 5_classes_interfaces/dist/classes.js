"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Deparment = /** @class */ (function () {
    // private readonly id: string;
    // private name: string;
    // private employees: string[] = [];
    // constructor(id: string, name: string) {
    //   this.id = id;
    //   this.name = name
    // }
    // In typescript: private, protected and public worked the same as C#
    function Deparment(id, name, employees) {
        if (employees === void 0) { employees = []; }
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    Deparment.createEmployee = function (name) {
        return { name: name };
    };
    Deparment.prototype.describe = function () {
        console.log("Department id: " + this.id + ", name: " + this.name);
    };
    Deparment.prototype.addEmployee = function (name) {
        this.employees.push(name);
    };
    Deparment.fiscalYear = 2021;
    return Deparment;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        if (admins === void 0) { admins = []; }
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.addEmployee = function (name) {
        if (name === 'Thinh') {
            return;
        }
        this.employees.push(name);
    };
    ITDepartment.prototype.addAdmin = function (name) {
        this.admins.push(name);
    };
    return ITDepartment;
}(Deparment));
var ReportDepartment = /** @class */ (function (_super) {
    __extends(ReportDepartment, _super);
    function ReportDepartment(id, reports) {
        if (reports === void 0) { reports = []; }
        var _this = _super.call(this, id, 'report') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(ReportDepartment.prototype, "mostRecentReport", {
        get: function () {
            return this.lastReport;
        },
        set: function (name) {
            this.addReport(name);
        },
        enumerable: false,
        configurable: true
    });
    // * Singleton pattern
    ReportDepartment.getInstance = function () {
        if (!this.reportDepartment) {
            this.reportDepartment = new ReportDepartment('id3');
        }
        return this.reportDepartment;
    };
    ReportDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    return ReportDepartment;
}(Deparment));
// const deparment = new Deparment('d1', 'Accounting');
// deparment.describe();
// deparment.addEmployee("Thinh");
// deparment.addEmployee("Dat");
// console.log(deparment);
var itDepartment = new ITDepartment('id1');
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
var reportDepartment_1 = ReportDepartment.getInstance();
reportDepartment_1.addEmployee('Thinh');
reportDepartment_1.addEmployee('Dat');
reportDepartment_1.addReport('Thinh is lazy again!');
reportDepartment_1.mostRecentReport = 'Thinh is tired again !!';
var reportDepartment_2 = ReportDepartment.getInstance();
console.log('reportDepartment_1', reportDepartment_1);
console.log('reportDepartment_2', reportDepartment_2);
// * End of Singleton pattern
// const deparmentCopy = {name: 'IT', describe: deparment.describe}
// deparmentCopy.describe();
//# sourceMappingURL=classes.js.map