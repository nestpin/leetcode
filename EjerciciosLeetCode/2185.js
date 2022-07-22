let words = ["pay", "attention", "practice", "attend"];
let pref = "at";

let currentWord = [];

let prefCount = 0;

let wrongCount = 0;

for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.substring(0, pref.length) === pref) {
        prefCount++;
    } else {
        wrongCount++;
    }
}

console.log(prefCount);
