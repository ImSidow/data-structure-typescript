"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Queue_1 = require("./Queue");
var PriorityQueue = /** @class */ (function (_super) {
    __extends(PriorityQueue, _super);
    function PriorityQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PriorityQueue.prototype.enqueue = function (value) {
        var _a;
        for (var i = 0; i < this.len + 1; i++) {
            var currentElement = (_a = this.items[i]) !== null && _a !== void 0 ? _a : value;
            var nextElement = this.items[i + 1];
            if (value < this.items[i]) {
                this.items[i] = value;
                value = currentElement;
                currentElement = nextElement;
            }
            else {
                this.items[i] = currentElement;
                currentElement = nextElement;
            }
        }
        this.len++;
    };
    return PriorityQueue;
}(Queue_1["default"]));
exports["default"] = PriorityQueue;
