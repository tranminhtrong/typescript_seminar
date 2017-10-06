function add(number1: number, number2: number): number;
function add(number1: string, number2: number): number;
function add(number1: number, number2: string): number;
function add(number1: string, number2: string): number; 

function add(number1: any, number2: any) {
    return number1 + number2;
}