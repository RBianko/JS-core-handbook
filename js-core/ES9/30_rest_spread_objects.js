const { first, second, ...others } = {
	first: 1,
	second: 1,
	third: 3,
	firth: 4,
	fifth: 5
}
console.log(first)
console.log(second)
console.log(others)

const items = { first, second, ...others }
console.log(items)
