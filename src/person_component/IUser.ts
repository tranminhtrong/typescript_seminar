/// <reference path="IPerson.ts" />

namespace typescript_seminar {
    export interface IUser extends IPerson {
        email: string;
        mobile: string;
        dob: Date;
          
    }
}