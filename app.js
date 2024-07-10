// write code here
const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
let result = [];
alphabets.forEach((letter, index) => {
    if (letter === 'a') {
        result.push(index);
    }
});
alert(result);