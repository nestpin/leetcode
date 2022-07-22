let text = "ballllllllllllooooooooooooon";
let targetWord = 'balloon';
let word = '';
let finishWord = '';
let wordCount = 0;
let textLength = text.length;

for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < targetWord.length; j++) {
        if (text[i] === targetWord[j]) {
            word += text[i];
            break;
        }
    }
}
console.log('La palabra creada es: ' + word);
console.log('La longitud es : ' + word.length);

for (let i = 0; i < targetWord.length; i++) {
    for (let j = 0; j < word.length; j++) {
        if (targetWord[i] === word[j]) {
            finishWord += targetWord[i];
            break;
        }
    }
}
console.log('La palabra terminada es: ' + finishWord);
console.log('La longitud es: ' + finishWord.length);

while(textLength >= targetWord.length && finishWord === targetWord){
    textLength = textLength - targetWord.length;
    wordCount++;
}




console.log(wordCount);