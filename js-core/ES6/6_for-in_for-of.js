/* eslint-disable guard-for-in */
let iterable = [1, 123, 132, 1091, 0, 272723]

for (const value of iterable) {
	console.log(value) // ->
}

for (const value in iterable) {
	console.log(value) // ->
}

iterable = 'hello world'

for (const value of iterable) {
	console.log(value) // ->
}

for (const value in iterable) {
	console.log(value) // ->
}
