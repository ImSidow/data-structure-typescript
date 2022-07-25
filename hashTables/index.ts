import HashTable from './HashTable';

const hashTable = new HashTable<string, string | number | boolean>();

hashTable.put('name', 'Sidow');
hashTable.put('age', 25);
hashTable.put('isMarried', false);
hashTable.put('name', 'Asad');

// console.log(hashTable.items)

console.log(`${hashTable}`);
