/* eslint-disable no-unused-vars */
const getMyName = async () => {

    const response = await fetch('https://api.github.com/users/roman-bianko')
    const user = await response.json()

    console.log(user.name)
}

getMyName() // Roman


const someAction = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve('some data'), 1000)
    })

const makeChainActions = async () => {
    const data1 = await someAction()
    const data2 = await someAction()
    const data3 = await someAction()
}