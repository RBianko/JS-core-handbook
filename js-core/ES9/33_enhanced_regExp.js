// ?=
console.log(/Java(?=Script)/.test('Java Script is cool'))
console.log(/Java(?=Script)/.test('JavaScript is cool'))


console.log(/Java(?!Script)/.test('Java Script is cool'))
console.log(/Java(?!Script)/.test('JavaScript is cool'))


console.log(/(?<=Java)Script/.test('Java Script is cool'))
console.log(/(?<=Java)Script/.test('JavaScript is cool'))


console.log(/(?<!Java)Script/.test('Java Script is cool'))
console.log(/(?<!Java)Script/.test('JavaScript is cool'))

console.log(/^\p{ASCII}+$/u.test('abc'))
console.log(/^\p{ASCII}+$/u.test('ABC@'))
console.log(/^\p{ASCII}+$/u.test('ABC🙃'))

console.log(/^\p{Lowercase}$/u.test('h'))
console.log(/^\p{Uppercase}$/u.test('A'))

console.log(/^\p{Emoji}+$/u.test('🙃🙃'))