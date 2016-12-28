# Homework w05-d04
## Jonathan Ahrens

### Part 0
``` Javascript
const numbersArray = [2,5,76,45,86,456,34,23,76,98,67,56];

// in shorter terms

const isEven = num => Number.isInteger(num) && (num % 2 === 0);
const sum = (a,b) => a+b;
const getEvens = (arr) => arr.filter(num => isEven);
const sumEvens = getEvens(arr).reduce(sum);

```

### Part 1
```
use monsters
db.createCollection('vampires')
mongoimport --db monsters --collection vampires --drop --file ~/code/wdi/homework/hw-w05-d04/populateVampires.json --jsonArray
use monsters
db.vampires.find()
db.vampires.find({"victims": {$gt: 500}})
db.vampires.find({'victims': {$lte: 150}})
db.vampires.find({'victims': {$ne: 210234}})
db.vampires.find({$and:[{'victims': {$gte: 150}},{'victims': {$lt: 500}}]})
db.vampires.find({'title': {$exists: true}})
db.vampires.find({'victims': {$exists: false}})
db.vampires.find({$and:[{'title': {$exists: true}},{'victims': {$exists: false}}]})
db.vampires.find({$and: [{'victims': {$exists: true}},{'victims': {$gt: 1000}}]})

db.vampires.find({'loves': 'brooding'})

```
