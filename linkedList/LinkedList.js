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
    }
    LinkedList.prototype.addLast = function (value) {
        var node = new Node(value);
        if (this.head === null)
            this.head = this.tail = node;
        else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }
    };
    LinkedList.prototype.toArray = function () {
        var items = [];
        var node = this.head;
        while (node === null || node === void 0 ? void 0 : node.next) {
            items.push(node.value);
            node = node.next;
        }
        if (node)
            items.push(node.value);
        return items;
    };
    LinkedList.prototype.toString = function () {
        return "[".concat(this.toArray().join(', '), "]");
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
