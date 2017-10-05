"use strict";
/// <reference path="IPerson.ts" />
var typescript_seminar;
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
