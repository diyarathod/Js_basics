function count(str) {
    let count = 0;
    const vowels = 'aieouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(count("i like you"))

const str = "hello world";
const c = str.split("o").length - 1;
console.log(c); // 2