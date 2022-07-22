let nums = [4, 7, 2, 99, 3, 2, 2, 5, 99, 2, 2, 2, 7, 2, 2, 99, 2]

// nums.length: 17
// parejas:     7 -> 14
// sobrante : 17-14: 3
let couples = 0

// for_i:
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === -1) continue;
        if (nums[i] === nums[j]) {
            couples++;
            console.log(`Couple found: ${nums[i]}`);
            nums[i] = -1;
            nums[j] = -1;
            // continue for_i;
        }
    }
}
console.log(couples)
console.log(nums)
console.log([couples, nums.length - couples * 2])

// nums = [1,3,2,1,3,2,2]
// 1 : 702
// 2 : 503
// 3 : 802
// [2]


// [0,1,2,3,4,5,6,7...]
// [0,2,3,2,0,0,0,0...]
