"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
        this.len = 0;
    }
    Stack.prototype.push = function (item) {
        this.items[this.len++] = item;
    };
    Stack.prototype.pop = function () {
        if (this.len === 0)
            throw new Error('IllegalStateException');
        var lastItem = this.items[--this.len];
        this.items.length--;
        return lastItem;
    };
    Stack.prototype.peek = function () {
        if (this.len === 0)
            throw new Error('IllegalStateException');
        return this.items[this.len - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.len === 0;
    };
    Stack.prototype.toString = function () {
        return "[".concat(this.items.join(', '), "]");
    };
    return Stack;
}());
exports["default"] = Stack;
