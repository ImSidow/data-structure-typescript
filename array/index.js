"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Array_1 = __importDefault(require("./Array"));
// const arr = new Array(1, 2, 3, 4)
// arr.insert(5)
// arr.insert(10)
// arr.insert(15)
// arr.removeAt(15)
const arr = new Array_1.default('A', 'B', 'C');
arr.insert('D');
arr.insert('E');
arr.insert('F');
arr.removeAt(2);
console.log(arr.indexOf('B'));
console.log(arr.indexOf('C'));
console.log(`${arr}`);
