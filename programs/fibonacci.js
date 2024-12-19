function fibonacci(num) {
    let a = 0;
    let b = 1;
    console.log(a, b);
    for (let i = 2; i <= num; i++) {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}

fibonacci(20);