const wait = (string = 'start') =>
     new Promise((resolve) => {
        setTimeout(resolve(string), 1000)
     })

wait()
    .then((string) => {
        const str = `${string} first`
        console.log(str)
        return wait(str)
    })
    .then((string) => {
        const str = `${string} second`
        console.log(str)
        return str
    })    // etc 
    .catch((err) => { // перехват ошибок
        console.log(`error at ${err}`)
    })
    .finally(() => {
        console.log('final')
    })