/* eslint-disable guard-for-in */
const mySymbol = Symbol('someData')
const myOwnSymbol = Symbol('someData')

console.log(mySymbol === myOwnSymbol) // ->

const someData = { 
    [mySymbol]: '1',
    [myOwnSymbol]: '2',
    simpleName: '3'
}
console.log(someData[mySymbol]) // ->

console.log(Object.keys(someData)); // ->
console.log(Object.getOwnPropertyNames(someData)); // ->

for (const key in someData) {
    console.log(key) // ->
} 