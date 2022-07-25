import LinkedList from '../linkedList/LinkedList';

class Entry<K, V> {
    key: K;
    value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }
}

class HashTable<K, V> {
    items: LinkedList<Entry<K, V>>[] = [];
    size: number = 1;

    constructor() {
        this.items.length = this.size;
    }

    put(key: K, value: V) {
        let index = this.hash(key);
        if (index !== undefined) {
            if (this.items[index]) {
                let node = this.items[index];
                for (let entry of node.toArray()) {
                    if (entry.key === key) {
                        entry.value = value;
                        return '';
                    }
                }

                node.addLast(new Entry(key, value));
                this.items[index] = node;
            } else {
                let node = new LinkedList<Entry<K, V>>();
                node.addLast(new Entry(key, value));
                this.items[index] = node;
            }
        }
    }

    toString(): string {
        let table = '{\n';
        this.items.forEach((element) => {
            element.toArray().forEach((entry) => {
                table += `  ${entry.key}: ${entry.value},\n`;
            });
        });
        table += '\n}';
        return table;
    }

    private isKeyExit(linkedList: LinkedList<Entry<K, V>>, key: K): boolean {
        linkedList.toArray().forEach((entry) => {
            if (entry.key === key) return true;
        });
        return false;
    }

    private hash(key: K): number | undefined {
        if (typeof key === 'number') {
            return key % this.size;
        } else if (typeof key === 'string') {
            let hashCode = 0;
            for (let char of key) {
                hashCode += char.charCodeAt(0);
            }
            return hashCode % this.size;
        }
    }
}

export default HashTable;
