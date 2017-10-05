"use strict";
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
