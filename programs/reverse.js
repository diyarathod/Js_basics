function rev(n) {
    let revString = '';
    for (let i = n.length - 1; i >= 0; i--) {
        revString += n[i];
    }
    return revString;
}
console.log(rev("hello"));