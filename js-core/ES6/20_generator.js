/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
function* stringGenereator() {
	yield 'My'
	yield 'name'
	yield 'is'
}
const strings = stringGenereator()
console.log(strings.next())
console.log(strings.next())
console.log(strings.next())
console.log(strings.next())

function* nameGenerator() {
	yield 'Adam'
	yield 'Alice'
	yield 'Fin'
}

function* namesGenerator() {
	yield* nameGenerator()
}
const names = namesGenerator()
console.log(names.next().value)
console.log(names.next().value)
console.log(names.next().value)
console.log(names.next().done)

function* range(start, end, step) {
	while (start < end) {
		yield start
		start += step
	}
}

const path = range(0, 13, 2)
console.log(path.next())
console.log(path.next())
console.log(path.next())
console.log(path.next())
console.log(path.next())
console.log(path.next())
console.log(path.next())
console.log(path.next())
