/// <reference path="IUser.ts" />

namespace typescript_seminar {
    export class User implements IUser {
        email: string;
        mobile: string;
        dob: Date;
        firstName: string;
        lastName: string;

        private token: string;

        constructor(input_email: string){
            this.email=input_email;
        }
 
        private sayYeah(): string {
            return "Say Yeah!";
        }

        sayHi(): string {
            return this.sayYeah();
        }
    }
    let user: User = <User>{};
    user.sayHi();

    let u1 = new User("ttran229@csc.com");
    console.log(u1.email);
}