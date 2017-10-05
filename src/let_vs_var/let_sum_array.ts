function sumMatrix(matrix: number[][]) {
    var global_scope = "Hello Trong Tran!";
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        console.log("For L1 => i = "+i);
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
            console.log("For L2 => i = "+i);
        }     
    }

    return sum;
}

var my_matrix = [
    [1,2],
    [3,4]
];

// With let declarations, we mentioned that it check how many times you declared your variables; you just got one.
let x: number;
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

