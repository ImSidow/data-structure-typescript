"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Array {
    constructor(...args) {
        this.items = [];
        this.items = args;
    }
    insert(item) {
        this.items[this.getArrayLen()] = item;
    }
    removeAt(index) {
        let arrLen = this.getArrayLen();
        if (index >= arrLen || index < 0)
            throw new TypeError('IllegalArgumentException');
        for (let i = index; i < arrLen; i++)
            this.items[i] = this.items[i + 1];
        this.items.length--;
    }
    indexOf(item) {
        for (let i = 0; i < this.getArrayLen(); i++) {
            if (this.items[i] === item)
                return i;
        }
        return -1;
    }
    toString() {
        return `[${this.items.join(', ')}]`;
    }
    getArrayLen() {
        return this.items.length;
    }
}
exports.default = Array;
