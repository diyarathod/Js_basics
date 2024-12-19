function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
// or
function palin(str) {
    const reverse = str.split("").reverse().join("");
    return str === reverse;
}
console.log(palin("radar"));
console.log(isPalindrome("radar"));