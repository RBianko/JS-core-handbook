/* eslint-disable no-plusplus */
const makeIterator = (array) => {
	let nextIndex = 0

	return {
		next() {
			return nextIndex < array.length
				? { value: array[nextIndex++], done: false }
				: { done: true }
		}
	}
}

const it = makeIterator(['hello', 'array'])
console.log(it.next())
console.log(it.next())
console.log(it.next())

const myIteratableObject = {}
myIteratableObject[Symbol.iterator] = () => ({
		next: () => ({
			done: true,
			value: 'hello'
		})
	})

const iteratorObj = myIteratableObject[Symbol.iterator]()

console.log(iteratorObj.next().value)
