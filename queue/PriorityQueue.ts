import Queue from "./Queue"

class PriorityQueue<T> extends Queue<T> {

    enqueue(value: T) {
        for (let i = 0; i < this.len + 1; i++) {
            let currentElement = this.items[i] ?? value
            let nextElement = this.items[i + 1]

            if (value < this.items[i]) {
                this.items[i] = value
                value = currentElement
                currentElement = nextElement
            } else {
                this.items[i] = currentElement
                currentElement = nextElement
            }
        }
        this.len++
    }
}
export default PriorityQueue