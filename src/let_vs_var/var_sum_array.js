function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        console.log("For L1 => i = "+i);
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
        console.log("For L2 => i = "+i);
    }
    return sum;
}

var my_matrix = [
    [1,2],
    [3,4]
];

// With var declarations, we mentioned that it didn’t matter how many times you declared your variables; you just got one.
function f(x) {
    var x;
    var x;

    if (true) {
        var x=5;
    }
    return x;
}

console.log(sumMatrix(my_matrix));
console.log(f(10));
