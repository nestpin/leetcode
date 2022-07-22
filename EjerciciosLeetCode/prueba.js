let text = "leetcode";
let targetWord = 'balloon';

let targetGroup = {};
let targetPhrase = {};
let error = 0;
let correctCount = 0;

for (let i = 0; i < targetWord.length; i++) {
    if (!(targetWord[i] in targetGroup)) {
        targetGroup[targetWord[i]] = 1;
    } else {
        targetGroup[targetWord[i]]++;
    }
}
console.log('targetGroup:', targetGroup);

for (let i = 0; i < text.length; i++) {
    if (!(text[i] in targetGroup)) {
        error++;
    } else if (text[i] in targetGroup && (!(text[i] in targetPhrase))) {
        targetPhrase[text[i]] = 1;
    } else if (text[i] in targetGroup) {
        targetPhrase[text[i]]++;
    }
}

console.log('targetPhrase:', targetPhrase);
console.log('Error:', error);

// if (error > 0) {
//     correctCount = 0;
// }

while (targetPhrase['b'] >= targetGroup['b'] && targetPhrase['a'] >= targetGroup['a'] && targetPhrase['l'] >= targetGroup['l'] && targetPhrase['o'] >= targetGroup['o'] && targetPhrase['n'] >= targetGroup['n']) {
    correctCount++;
    targetGroup['b']++;
    targetGroup['a']++;
    targetGroup['l'] += 2;
    targetGroup['o'] += 2;
    targetGroup['n']++;
}

console.log('Correct Count:', correctCount);