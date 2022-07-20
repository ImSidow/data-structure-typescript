
class Queue<T> {
    protected items: T[] = []
    protected len: number = 0

    enqueue(value: T) {
        this.items[this.len] = value
        this.len++
    }

    dequeue() {
        this.items = this.items.slice(1)
        this.len--
    }

    peek(): T {
        return this.items[0]
    }

    isEmpty(): boolean {
        return this.len === 0
    }

    toString(): string {
        return `[${this.items.join(', ')}]`
    }
}
export default Queue