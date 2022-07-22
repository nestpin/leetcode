let string = "l|*e*et|c**o|*de|";

let pairs = 0;
let ast = 0;
/*
// Same but longer
for (let i = 0; i < string.length; i++) {
    if (string[i] === '|') {
        pairs++;
    } else if (string[i] === '*') {
        if (pairs % 2 === 0) {
            ast++;
        } else {
            continue;
        }
    }
}
*/
for (let i = 0; i < string.length; i++)
    if (string[i] === '|') pairs++;
    else if (string[i] === '*' && pairs % 2 === 0) ast++;
console.log(ast);