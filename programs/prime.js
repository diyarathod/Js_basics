function primeOrNot(p) {
    if (p <= 1) return false

    for (let i = 2; i <= Math.sqrt(p); i++) {
        if (p % i === 0) return false;
    }
    return true;
}
console.log(primeOrNot(20));