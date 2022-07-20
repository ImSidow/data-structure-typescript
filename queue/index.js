"use strict";
// import Queue from "./Queue";
exports.__esModule = true;
// const queue = new Queue<number>()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.dequeue()
// console.log(`${queue}`)
var PriorityQueue_1 = require("./PriorityQueue");
var priorityQueue = new PriorityQueue_1["default"]();
priorityQueue.enqueue(1);
priorityQueue.enqueue(3);
priorityQueue.enqueue(5);
priorityQueue.enqueue(2);
console.log("".concat(priorityQueue));
