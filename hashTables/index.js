"use strict";
exports.__esModule = true;
var HashTable_1 = require("./HashTable");
var hashTable = new HashTable_1["default"]();
hashTable.put('name', 'Sidow');
hashTable.put('age', 25);
hashTable.put('isMarried', false);
hashTable.put('name', 'Asad');
// console.log(hashTable.items)
console.log("".concat(hashTable));
