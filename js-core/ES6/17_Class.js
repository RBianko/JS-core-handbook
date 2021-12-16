/* eslint-disable max-classes-per-file */
class Genius {
    constructor(name) {
        this.greatName = name
        this.hello = 'Hello '
    }

    speak() {
        return this.hello
    }
}

class Developer extends Genius {
    speak() {
        return (`${super.speak()  }World! `).repeat(parseInt(10, 2))
    }
}

const intern = new Developer('Roman')
console.log(intern.speak())


class Person {
    set setFirstName(first) {
        if (first) {
            this.firstName = first
        }
    }

    set setLastName(last) {
        if (last) {
            this.lastName = last
        }
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    } 
}


const stranger = new Person()
stranger.firstName = 'John'
stranger.lastName = 'Smith'

console.log(stranger.fullName)


class Article {
    constructor(title, date) {
        this.title = title
        this.date = date
    }

    static createTodays() {
        return new this("Todays: ", new Date())
    }
}

const article = Article.createTodays()

console.log(article.title + article.date)