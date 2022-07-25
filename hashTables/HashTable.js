"use strict";
exports.__esModule = true;
var LinkedList_1 = require("../linkedList/LinkedList");
var Entry = /** @class */ (function () {
    function Entry(key, value) {
        this.key = key;
        this.value = value;
    }
    return Entry;
}());
var HashTable = /** @class */ (function () {
    function HashTable() {
        this.items = [];
        this.size = 1;
        this.items.length = this.size;
    }
    HashTable.prototype.put = function (key, value) {
        var index = this.hash(key);
        if (index !== undefined) {
            if (this.items[index]) {
                var node = this.items[index];
                for (var _i = 0, _a = node.toArray(); _i < _a.length; _i++) {
                    var entry = _a[_i];
                    if (entry.key === key) {
                        entry.value = value;
                        return '';
                    }
                }
                node.addLast(new Entry(key, value));
                this.items[index] = node;
            }
            else {
                var node = new LinkedList_1["default"]();
                node.addLast(new Entry(key, value));
                this.items[index] = node;
            }
        }
    };
    HashTable.prototype.toString = function () {
        var table = '{\n';
        this.items.forEach(function (element) {
            element.toArray().forEach(function (entry) {
                table += "  ".concat(entry.key, ": ").concat(entry.value, ",\n");
            });
        });
        table += '\n}';
        return table;
    };
    HashTable.prototype.isKeyExit = function (linkedList, key) {
        linkedList.toArray().forEach(function (entry) {
            if (entry.key === key)
                return true;
        });
        return false;
    };
    HashTable.prototype.hash = function (key) {
        if (typeof key === 'number') {
            return key % this.size;
        }
        else if (typeof key === 'string') {
            var hashCode = 0;
            for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                var char = key_1[_i];
                hashCode += char.charCodeAt(0);
            }
            return hashCode % this.size;
        }
    };
    return HashTable;
}());
exports["default"] = HashTable;
