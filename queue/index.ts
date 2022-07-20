
// import Queue from "./Queue";

// const queue = new Queue<number>()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.dequeue()

// console.log(`${queue}`)


import PriorityQueue from "./PriorityQueue";

const priorityQueue = new PriorityQueue()

priorityQueue.enqueue(1)
priorityQueue.enqueue(3)
priorityQueue.enqueue(5)
priorityQueue.enqueue(2)

console.log(`${priorityQueue}`)
