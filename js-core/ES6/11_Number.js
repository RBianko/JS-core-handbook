const stringNumber = '123'
console.log(Number.isNaN(stringNumber))

const notANumber = NaN
console.log(Number.isNaN(notANumber))

const number = 12391283920
console.log(Number.isFinite(number))
console.log(Number.isInteger(number))
const pNumber = 3.14
console.log(Number.isInteger(pNumber))

const infinityNumber = 1e500 // Infinity
console.log(Number.isFinite(infinityNumber))

const iNeedANumber = '100px'
console.log(+iNeedANumber)
console.log(parseInt(iNeedANumber, 10))

const iNeedAFloatNumber = '1.3rem'
console.log(parseInt(iNeedAFloatNumber, 10))
console.log(parseFloat(iNeedAFloatNumber))

const bunaryNumber = 101001101
console.log(parseInt(bunaryNumber, 2))

console.log(Number.EPSILON)
