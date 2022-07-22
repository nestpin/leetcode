let frase = "is2 sentence4 This1 a3";
//Output: "This is a sentence"

let newFrase = '';
let sort = {};
let word = '';
let completeFrase = '';
let num = 1;

newFrase = frase.split(' ')
//console.log(newFrase);

for (let i = 0; i < newFrase.length; i++) {
    sort[newFrase[i].substr(-1)] = [newFrase[i].substr(0, newFrase[i].length - 1)];
}
console.log(sort);

while (num in sort) {
    if (num > 1) completeFrase += ' ';
    completeFrase += sort[num];
    num++;
} //if(!(num in sort)) {
//     completeFrase.length - 1;
// }
console.log(completeFrase);

