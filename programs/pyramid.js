function printPyramid(row) {
    for (let i = 1; i <= row; i++) {
        let str = " ".repeat(row - i) + '*'.repeat(2 * i - 1);
        console.log(str);
    }
}
printPyramid(3);
// increase

//decrease
function printOpp(n) {
    for (let i = n; i >= 1; i--) {
        let str = ' '.repeat((n + 1) - i) + '*'.repeat(2 * i - 1);
        console.log(str);
    }
}

printOpp(2);

