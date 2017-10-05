/// <reference path="IPerson.ts" />

namespace typescript_seminar {
    
    class Person implements IPerson{
        firstName:string;
        lastName:string;
        sayHi():string {
            return "Hello World!";
        }

        //Ojbect properties contrains datatype which is define from Interface
        customer:IPerson = { 
            firstName:"Trong",
            lastName:"Tran", 
            //function types
            sayHi():string {
                return "Hi there!";
            }
        };
    }

    let p: Person = new Person;
    console.log(p.sayHi());

    console.log(p.customer.sayHi());
}

