let nums = [[31, 40, 1, 2, 3, 5], [31, 1, 2, 3, 40], [31, 3, 40, 5, 6]];

let numsFound = [];

let listCount = {};

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
        if (nums[i][j] in listCount) {
            listCount[nums[i][j]]++;
        } else {
            listCount[nums[i][j]] = 1;
        }
        console.log(listCount);
    }
}

for (const [num, count] of Object.entries(listCount)) {
    if (count === nums.length) {
        numsFound.push(num);
        console.log(numsFound);
    }
}