var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ns1;
(function (ns1) {
    var Department = /** @class */ (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log("Department name: " + this.name);
        };
        return Department;
    }());
    ns1.Department = Department;
})(ns1 || (ns1 = {}));
/// <reference path="Department.ts" />
var typescript_seminar;
/// <reference path="Department.ts" />
(function (typescript_seminar) {
    var AccountingDepartment = /** @class */ (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            return _super.call(this, "Accounting and Auditing") || this;
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log("The Accounting Department meets each Monday at 10am.");
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log("Generating accounting reports...");
        };
        return AccountingDepartment;
    }(ns1.Department));
})(typescript_seminar || (typescript_seminar = {}));
function add(number1, number2) {
    return number1 + number2;
}
function sumMatrix(matrix) {
    var global_scope = "Hello Trong Tran!";
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        console.log("For L1 => i = " + i);
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
            console.log("For L2 => i = " + i_1);
        }
    }
    return sum;
}
var my_matrix = [
    [1, 2],
    [3, 4]
];
// With let declarations, we mentioned that it check how many times you declared your variables; you just got one.
var x;
// let x: number;
// function f(x: number) {
//     let x;
//     let x: number;
//     if (true) {
//         let x: number = 5;
//     }
//     return x;
// }
console.log("Sum result: ", sumMatrix(my_matrix));
// console.log(f(10));
// export * from "./StringValidator"; 
// export * from "./ZipCodeValidator";
// export * from "./ParseIntBasedZipCodeValidator"; 
System.register("module/StringValidator", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("module/ParseIntBasedZipCodeValidator", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var ParseIntBasedZipCodeValidator;
    return {
        setters: [],
        execute: function () {
            ParseIntBasedZipCodeValidator = /** @class */ (function () {
                function ParseIntBasedZipCodeValidator() {
                }
                ParseIntBasedZipCodeValidator.prototype.isAcceptable = function (s) {
                    return s.length === 5 && parseInt(s).toString() === s;
                };
                return ParseIntBasedZipCodeValidator;
            }());
            exports_2("ParseIntBasedZipCodeValidator", ParseIntBasedZipCodeValidator);
        }
    };
});
System.register("module/ZipCodeValidator", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var numberRegexp, ZipCodeValidator;
    return {
        setters: [],
        execute: function () {
            exports_3("numberRegexp", numberRegexp = /^[0-9]+$/);
            ZipCodeValidator = /** @class */ (function () {
                function ZipCodeValidator() {
                }
                ZipCodeValidator.prototype.isAcceptable = function (s) {
                    return s.length === 5 && numberRegexp.test(s);
                };
                return ZipCodeValidator;
            }());
            exports_3("ZipCodeValidator", ZipCodeValidator);
        }
    };
});
/// <reference path="IPerson.ts" />
/// <reference path="IUser.ts" />
var typescript_seminar;
/// <reference path="IUser.ts" />
(function (typescript_seminar) {
    var User = /** @class */ (function () {
        function User(input_email) {
            this.email = input_email;
        }
        User.prototype.sayYeah = function () {
            return "Say Yeah!";
        };
        User.prototype.sayHi = function () {
            return this.sayYeah();
        };
        return User;
    }());
    typescript_seminar.User = User;
    var user = {};
    user.sayHi();
    var u1 = new User("ttran229@csc.com");
    console.log(u1.email);
})(typescript_seminar || (typescript_seminar = {}));
/// <reference path="User.ts" />
var typescript_seminar;
/// <reference path="User.ts" />
(function (typescript_seminar) {
    var Admin = /** @class */ (function (_super) {
        __extends(Admin, _super);
        function Admin() {
            return _super.call(this, "email@csc.com") || this;
        }
        Object.defineProperty(Admin.prototype, "isSupperAdmin", {
            get: function () {
                return this._isSupperAdmin;
            },
            set: function (value) {
                this._isSupperAdmin = value;
            },
            enumerable: true,
            configurable: true
        });
        Admin.prototype.sayAhihi = function () {
            _super.prototype.sayHi.call(this);
        };
        return Admin;
    }(typescript_seminar.User));
    typescript_seminar.Admin = Admin;
})(typescript_seminar || (typescript_seminar = {}));
/// <reference path="IPerson.ts" />
var typescript_seminar;
/// <reference path="IPerson.ts" />
(function (typescript_seminar) {
    var Person = /** @class */ (function () {
        function Person() {
            //Ojbect properties contrains datatype which is define from Interface
            this.customer = {
                firstName: "Trong",
                lastName: "Tran",
                //function types
                sayHi: function () {
                    return "Hi there!";
                }
            };
        }
        Person.prototype.sayHi = function () {
            return "Hello World!";
        };
        return Person;
    }());
    var p = new Person;
    console.log(p.sayHi());
    console.log(p.customer.sayHi());
})(typescript_seminar || (typescript_seminar = {}));
