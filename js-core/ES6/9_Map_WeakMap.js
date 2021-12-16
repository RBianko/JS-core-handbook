const myMap = new Map();

const keyString = 'string';
    const keyObj = {};
    const keyFunc = () => {}

myMap.set(keyString, 'value for key string')
myMap.set(keyObj, 'value for key object')
myMap.set(keyFunc, 'value for key function')

console.log(myMap.size) // ->

console.log(myMap.get(keyString)) // ->
console.log(myMap.get(keyObj)) // ->
console.log(myMap.get(keyFunc)) // ->

const weakMap = new WeakMap();

weakMap.set(keyObj, 'value for key object')
// weakMap.set(keyString, 'value for key string') // Error
// weakMap.set(keykeyFunc, 'value for key function') // Error

console.log(weakMap.has(keyObj)) // ->
weakMap.delete(keyObj) //
console.log(weakMap.has(keyObj)) // ->