import { StringValidator } from "./StringValidator";

export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

export {ParseIntBasedZipCodeValidator as newName}