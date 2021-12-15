/* eslint-disable no-useless-concat */
const name = 'Roman'
const man = { 
    name // короткая запись от name: name
} 
console.log(man.name) // ->

const variableName = 'number'
const something = { 
    ['foo' + '_' + 'bar' ]: 'done', 
    [variableName]: '1'
}
console.log(something) // ->



const oValue = 0o3147
console.log(oValue)

const bValue = 0b11111111001
setTimeout (() => {
    console.log(bValue) // ->
}, bValue)