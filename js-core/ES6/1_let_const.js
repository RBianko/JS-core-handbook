/* eslint-disable no-constant-condition */
if (true) {
	// блочная видимость
	const x = 1
	console.log(x) // ->
}
// console.log(x) // нет доступа к переменной ->

const P_CONSTANT = 3.14
console.log(P_CONSTANT)
// P_CONSTANT = 3.16; // Error нельзя переопределять
// const R_CONSTANT; // Error необходимо задать начальное значение

// но можно изменять значение свойст объекта
const obj = { someVal: 3 }
obj.someVal = 5
