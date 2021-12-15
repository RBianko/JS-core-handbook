const promises = [
	new Promise((resolve) => resolve(1)),
	new Promise((resolve) => resolve(2)),
	new Promise((resolve) => resolve(3)),
	new Promise((reject) => reject('error')),
	new Promise((resolve) => resolve(5))
]

const resolveIterations = async () => {
	for await (const obj of promises) {
		console.log(obj)
	}
}

resolveIterations()
