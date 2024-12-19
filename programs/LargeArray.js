function Large(arr) {
    let large = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i];
        }
    }
    return large
}

console.log(Large([20, 50, 40, 90]));