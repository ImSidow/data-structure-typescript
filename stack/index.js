"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1["default"]();
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.pop()
// console.log(stack.peek())
// console.log(stack.isEmpty())
// console.log(`${stack}`)
// exercise
var str = '(1 + 2)[{]]<a></a>';
var openBrackets = ['(', '{', '[', '<'];
var closeBrackets = [')', '}', ']', '>'];
function isStringBalance(str) {
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (openBrackets.includes(char))
            stack.push(char);
        if (closeBrackets.includes(char)) {
            if (stack.isEmpty())
                return false;
            var item = stack.pop();
            var charIndex = closeBrackets.indexOf(char);
            if (item !== openBrackets[charIndex])
                return false;
        }
    }
    return stack.isEmpty();
}
console.log(isStringBalance(str));
