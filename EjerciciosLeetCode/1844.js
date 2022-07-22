let phrase = "a1c1e1";
//Output: "abcdef";
let letters = 'abcdefghijklmnopqrstuvwxyz';
let newPhrase = '';
let lastJ = 0;
let newLetter = '';

for (let i = 0; i < phrase.length; i++) {
    for (let j = 0; j < letters.length; j++) {
        if (phrase[i] === letters[j]) {
            lastJ = j;
            newPhrase += phrase[i];
            break;
        } else if (!isNaN(phrase[i])) {
            newLetter = letters[lastJ + parseInt(phrase[i])];
            newPhrase += newLetter;
            break;
        }
    }
}

console.log(newPhrase);
