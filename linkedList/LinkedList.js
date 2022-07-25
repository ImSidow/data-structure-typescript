"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value) {
        this.next = null;
        this.value = value;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    LinkedList.prototype.addLast = function (value) {
        var node = new Node(value);
        if (this.isEmpty())
            this.head = this.tail = node;
        else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }
        this.count++;
    };
    LinkedList.prototype.addFirst = function (value) {
        var node = new Node(value);
        if (this.isEmpty())
            this.head = this.tail = node;
        else {
            node.next = this.head;
            this.head = node;
        }
        this.count++;
    };
    LinkedList.prototype.indexOf = function (value) {
        var index = 0;
        var currentNode = this.head;
        while (currentNode) {
            if (value === currentNode.value)
                return index;
            currentNode = currentNode.next;
            index++;
        }
        return -1;
    };
    LinkedList.prototype.contains = function (value) {
        return this.indexOf(value) !== -1;
    };
    LinkedList.prototype.removeFirst = function () {
        var _a;
        if (this.isEmpty())
            throw new Error('NoSuchElementException');
        if (this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }
        var next = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
        this.head.next = null;
        this.head = next;
        this.count--;
    };
    LinkedList.prototype.removeLast = function () {
        if (this.isEmpty())
            throw new Error('NoSuchElementException');
        if (this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }
        var previousNode = this.getPreviousNode(this.tail);
        this.tail = previousNode;
        this.tail.next = null;
        this.count--;
    };
    LinkedList.prototype.size = function () {
        return this.count;
    };
    LinkedList.prototype.reverse = function () {
        var _a;
        if (this.isEmpty())
            return;
        var previousNode = this.head;
        var currentNode = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
        while (currentNode) {
            var nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.tail = this.head;
        if (this.head)
            this.head.next = null;
        this.head = previousNode;
    };
    LinkedList.prototype.toArray = function () {
        var items = [];
        var currentNode = this.head;
        while (currentNode) {
            items.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return items;
    };
    LinkedList.prototype.toString = function () {
        return "[".concat(this.toArray().join(', '), "]");
    };
    LinkedList.prototype.isEmpty = function () {
        return this.head === null;
    };
    LinkedList.prototype.getPreviousNode = function (node) {
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.next === node)
                return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
