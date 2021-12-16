/* eslint-disable no-self-compare */
/* eslint-disable no-compare-neg-zero */
/* eslint-disable use-isnan */
const template = {
    fontSize: '3rem',
    padding: '100px',
    color: '#000'
}

const someStyle = {
    width: '100%',
    heigth: '100%'
}

const someOtherStyle = {
    margin: '2em'
}

Object.assign(template, someStyle, someOtherStyle)

console.log(template)

//  template =
//  {   fontSize: '3rem',
//      padding: '100px',
//      color: '#000',
//      width: '100%',
//      heigth: '100%',
//      margin: '2em' 
//  }

const animal = {
    eats: true
}

const cat = Object.create(animal)
console.log(cat.eats)

Object.setPrototypeOf(cat, {});
console.log(cat.eats)

console.log(NaN === NaN)
console.log(Object.is(NaN, NaN))

console.log(+0 === -0)
console.log(Object.is('', false))