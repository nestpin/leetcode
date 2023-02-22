let words = ["a", "b", "c", "ab", "a", "bc", "abc"];
let s = "abc";

let count = 0;

for (let j = 0; j < s.length; j++) {

    let sub = s.substring(0, j+1)

    for (let i = 0; i < words.length; i++) {

        if (sub === words[i]) count++;

    }
}
console.log(count)


// let sLength = s.length

//
// for (let i = 0; i < words.length; i++) {
//     if (words[i] === s) {
//         count++;
//         sLength--;
//     }
// }
//
// console.log(count);
console.log("Damn");