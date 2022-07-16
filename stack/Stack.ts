class Stack<T> {
    private items: T[] = [];
    private len: number = 0;

    push(item: T) {
        this.items[this.len++] = item;
    }

    pop(): T {
        if (this.len === 0) throw new Error('IllegalStateException');

        let lastItem = this.items[--this.len];
        this.items.length--;
        return lastItem;
    }

    peek(): T {
        if (this.len === 0) throw new Error('IllegalStateException');

        return this.items[this.len - 1];
    }

    isEmpty(): boolean {
        return this.len === 0
    }

    toString(): string {
        return `[${this.items.join(', ')}]`;
    }
}

export default Stack;
