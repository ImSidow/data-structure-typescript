let str = 'A Green Apple';

let obj: Record<string, any> = {};

for (let char of str) {
    if (!obj[char]) obj[char] = 1;
    else obj[char] += 1;
}

let nonRepeatingChar = '';
for (let char in obj) {
    if (obj[char] === 1) {
        nonRepeatingChar = char;
        break;
    }
}

console.log(nonRepeatingChar);
