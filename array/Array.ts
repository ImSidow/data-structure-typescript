
export default class Array<T> {

    private items: T[] = []

    constructor(...args: T[]) {
        this.items = args
    }

    insert(item: T): void {
        this.items[this.getArrayLen()] = item
    }

    removeAt(index: number): void {
        let arrLen = this.getArrayLen()
        if (index >= arrLen || index < 0) throw new TypeError('IllegalArgumentException')

        for (let i = index; i < arrLen; i++) this.items[i] = this.items[i + 1]

        this.items.length--
    }

    indexOf(item: T): number {
        for (let i = 0; i < this.getArrayLen(); i++) {
            if (this.items[i] === item) return i
        }
        return -1
    }

    toString(): string {
        return `[${this.items.join(', ') }]`
    }

    private getArrayLen(): number {
        return this.items.length
    }
}