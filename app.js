const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()


// middleware

app.use(express.json())

app.get('/hello', (req, res) => {
	res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
			.then(() => console.log('CONNECTED TO THE DB 💥💥💥'))
		app.listen(port, () => console.log(`Server is listening on ${port} 🥑🥑🥑`))
	} catch (error) {
		console.log(error + ' ❗️❗️❗️')
	}
}

start()