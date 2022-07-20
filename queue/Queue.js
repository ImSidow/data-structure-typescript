"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
        this.len = 0;
    }
    Queue.prototype.enqueue = function (value) {
        this.items[this.len] = value;
        this.len++;
    };
    Queue.prototype.dequeue = function () {
        this.items = this.items.slice(1);
        this.len--;
    };
    Queue.prototype.peek = function () {
        return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.len === 0;
    };
    Queue.prototype.toString = function () {
        return "[".concat(this.items.join(', '), "]");
    };
    return Queue;
}());
exports["default"] = Queue;
