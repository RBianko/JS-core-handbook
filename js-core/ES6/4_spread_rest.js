const arr = [1, 2, 3, 5, 8, 13]

const newArr = [...arr] // Spread

console.log(newArr)

const myFunc = (a, b, ...rest) => {
	// Rest
	console.log(rest)
}
myFunc(1, 2, 3, 4, 5, 6, 7)
