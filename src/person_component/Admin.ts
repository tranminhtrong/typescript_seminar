/// <reference path="User.ts" />

namespace typescript_seminar {
    export class Admin extends User {

        public get isSupperAdmin(): boolean {
            return this._isSupperAdmin;
        }

        public set isSupperAdmin(value: boolean) {
            this._isSupperAdmin = value;
        }
        private _isSupperAdmin: boolean;
        
        constructor(){
            super("email@csc.com");
        }

        private sayAhihi(){
            super.sayHi();
        }
    }
}