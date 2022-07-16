import Stack from './Stack';

const stack = new Stack();

// stack.push(10)
// stack.push(20)
// stack.push(30)

// stack.pop()

// console.log(stack.peek())
// console.log(stack.isEmpty())

// console.log(`${stack}`)

// exercise

let str = '(1 + 2)[{}]<a>>';

let openBrackets = ['(', '{', '[', '<'];
let closeBrackets = [')', '}', ']', '>'];

function isStringBalance(str: string) {
    for (let char of str) {
        if (openBrackets.includes(char)) stack.push(char);
        if (closeBrackets.includes(char)) {
            try {
                stack.pop();
            } catch (IllegalStateException) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log(isStringBalance(str));
