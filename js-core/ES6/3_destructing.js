const arr = [1, 3, 5, 8, 13]
const [a, b, c] = arr
console.log(a, b, c) // ->

const user = ['Roman', 'Bianko']
const [firstName, lastName] = user
console.log(`Hello, ${firstName} ${lastName}!`) // ->

const person = {
	name: 'John',
	age: 21
}
const { age, name: myName } = person
console.log(age) // ->
console.log(myName) // ->

const options = {
	title: 'menu__list',
	width: 100,
	heigth: 200
}
const { title, ...size } = options
console.log(title)
console.log(size)
