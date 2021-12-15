const target = {
    foo: 'Hello, foo'
}

const proxy = new Proxy(target, {
    get (receiver, name) {
        return name in receiver ? receiver[name] : `Welcome, ${name}`
    }
})

console.log(proxy.foo)
console.log(proxy.bar)
console.log(target)


const proxySet = new Proxy(target, {
    set: (t, prop, value) => {
        target[prop] = value
        console.log(`property set: ${prop} = ${value}`)
        return true
    }
})

console.log(target)
proxySet.a = 100
console.log(target.a)