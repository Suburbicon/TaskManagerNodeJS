const Task = require('../models/Task')

const getAllTasks = (req, res) => {
	res.send('get all tasks')
}

const createTask = async (req, res) => {
	const { name, completed } = req.body
	try {
		const task = await Task.create({ name: name, completed: completed })
		res.status(201).json({ task })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

const getTask = (req, res) => {
	res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
	res.send('update task')
}

const deleteTask = (req, res) => {
	res.send('delete task')
}

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask
}