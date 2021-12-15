const person1 = {
    set name(newName) {
        console.log(newName);
    }
}

const person2 = {}
Object.assign(person1, person2)

const person3 = {}
Object.defineProperties(person3, Object.getOwnPropertyDescriptors(person1))

person1.name = '1'
person2.name = '2'
person3.name = '3'