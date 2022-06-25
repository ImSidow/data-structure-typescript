
class Node<T> {
    value: T;
    next: (Node<T> | null) = null;

    constructor(value: T) {
        this.value = value
    }
}

export default class LinkedList<T> {

    private head: Node<T> | null = null
    private tail: Node<T> | null = null

    addLast(value: T) {
        let node = new Node(value)
        if (this.head === null) this.head = this.tail = node
        else if (this.tail) {
            this.tail.next = node
            this.tail = node
        }
    }

    toArray(): T[] {
        let items: T[] = [];

        let node = this.head
        while (node?.next) {
            items.push(node.value)
            node = node.next
        }

        if (node) items.push(node.value)

        return items
    }

    toString(): string {
        return `[${this.toArray().join(', ')}]`
    }

}