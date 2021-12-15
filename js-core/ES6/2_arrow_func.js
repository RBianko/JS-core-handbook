// стрелочная функция
const sum = (a, b) => a + b
console.log(sum(2, 2)) // ->

const students = [
	{ name: 'roman', age: '27' },
	{ name: 'july', age: '26' }
]
// пример в .map методе
const studentsNames = students.map((item) => item.name)

console.log(`studentsNames`, studentsNames) // ->

// пример с контекстом this
function Person() {
	// Конструктор Person() определяет `this` как экземпляр самого себя.
	this.age = 0

	setTimeout(function growUp() {
		// Без использования `use strict`, функция growUp() определяет `this`
		// как глобальный объект, который отличается от `this`,
		// определённого конструктором Person().
		console.log(this) // `this` относится к объекту Timeout
	}, 0)
}
const adam = new Person()
console.log(adam)

function NewPerson() {
	this.age = 0

	setTimeout(() => {
		// Без использования `use strict`, функция growUp() определяет `this`
		// как глобальный объект, который отличается от `this`,
		// определённого конструктором Person().
		console.log(this) // `this` относится к объекту Timeout
	}, 0)
}
const ann = new NewPerson()
console.log(ann)
