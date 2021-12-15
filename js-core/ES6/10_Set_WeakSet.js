const arr = [1, 2, 1, 3, 4, 3, 1, 2, 5];

const mySet = new Set(arr);

console.log(mySet.size) // ->

for (const value of mySet) {
    console.log(value) // ->
}