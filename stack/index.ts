import Stack from './Stack';

const stack = new Stack<string>();

// stack.push(10)
// stack.push(20)
// stack.push(30)

// stack.pop()

// console.log(stack.peek())
// console.log(stack.isEmpty())

// console.log(`${stack}`)

// exercise

let str = '(1 + 2)[{]]<a></a>';

let openBrackets = ['(', '{', '[', '<'];
let closeBrackets = [')', '}', ']', '>'];

function isStringBalance(str: string) {
    for (let char of str) {
        if (openBrackets.includes(char)) stack.push(char);
        if (closeBrackets.includes(char)) {
            if (stack.isEmpty()) return false;
            let item = stack.pop();

            let charIndex = closeBrackets.indexOf(char)
            if (item !== openBrackets[charIndex]) return false
        }
    }
    return stack.isEmpty();
}

console.log(isStringBalance(str));
