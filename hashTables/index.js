var str = 'A Green Apple';
var obj = {};
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var char = str_1[_i];
    if (!obj[char])
        obj[char] = 1;
    else
        obj[char] += 1;
}
var nonRepeatingChar = '';
for (var char in obj) {
    if (obj[char] === 1) {
        nonRepeatingChar = char;
        break;
    }
}
console.log(nonRepeatingChar);
