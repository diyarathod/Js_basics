function ArrRemove(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(ArrRemove([11, 24, 4, 2, 2, 2, 1, 1]))