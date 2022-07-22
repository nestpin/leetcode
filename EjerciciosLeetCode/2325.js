let key = "the quick brown fox jumps over the lazy dog";
let message = "vkbs bs t suepuv";
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let codeAlphabet = {};
let j = 0;
let messageUncode = '';

for (let i = 0; i < key.length; i++) {
    if (key[i] === ' ' || key[i] in codeAlphabet) {
        continue;
    } else if (!(key[i] in codeAlphabet)) {
        codeAlphabet[key[i]] = alphabet[j];
        j++;

    }
}
for (let j = 0; j < message.length; j++) {
    if (message[j] in codeAlphabet) {
        //console.log('La palabra', message[j], 'es igual a: ', codeAlphabet[message[j]])
        //messageUncode = messageUncode.concat(codeAlphabet[message[j]]);
        messageUncode += codeAlphabet[message[j]];
    } else if (message[j] === ' ') {
        //messageUncode = messageUncode.concat(' ');
        messageUncode += ' '
    }
}
console.log(messageUncode);