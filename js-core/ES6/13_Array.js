const array = 's12345 6e7'
const arrayFrom = Array.from(array)
console.log(arrayFrom)

const arrayOf = Array.of(array)
console.log(arrayOf)

console.log(arrayFrom.find((elem) => elem === 'e'))
console.log(arrayFrom.findIndex((elem) => elem === ' '))

console.log([1, 2, 3].fill('number'))