namespace ns1 {
    export abstract class Department {
        
            constructor(public name: string) {
            }
        
            printName(): void {
                console.log("Department name: " + this.name);
            }
        
            abstract printMeeting(): void; // must be implemented in derived classes
    }
}
