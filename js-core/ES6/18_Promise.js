const delay = () =>
	new Promise((resolve) => {
		setTimeout(resolve, 1000)
	})

delay()
	.then(() => {
		console.log('run after 1s')
		return delay()
	})
	.then(() => {
		console.log('run after 1s + 1s')
	}) // etc
	.catch((err) => {
		// перехват ошибок
		console.log(`error: ${err}`)
	})

const fetchData = (url, timeout) =>
	new Promise((resolve) => {
		setTimeout(resolve(url), timeout)
	})

Promise.all([
	fetchData('http://backend/foo.txt', 500),
	fetchData('http://backend/bar.txt', 600),
	fetchData('http://backend/baz.txt', 700)
]).then(
	(data) => {
		const [foo, bar, baz] = data
		console.log(`success: foo=${foo}, bar=${bar}, baz=${baz}`)
	},
	(err) => {
		console.log(`error: ${err}`)
	}
)

Promise.race([
	fetchData('http://backend/foo.txt', 500),
	fetchData('http://backend/bar.txt', 600),
	fetchData('http://backend/baz.txt', 700)
]).then(
	(data) => {
		console.log(`success, first url: ${data}`)
	},
	(err) => {
		console.log(`error: ${err}`)
	}
)

const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) =>
	setTimeout(reject, 100, 'foo')
)
const promises = [promise1, promise2]

Promise.allSettled(promises).then((results) =>
	results.forEach((result) => console.log(result.status))
)
//  fulfilled
//  rejected
