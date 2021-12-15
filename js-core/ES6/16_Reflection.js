const someOtherValue = Symbol('symbol')
const obj = { 
    value: 10,
    [someOtherValue]: 20
}

console.log(Reflect.ownKeys(obj))