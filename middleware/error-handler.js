const { CustomAPIError } = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
	if (err instanceof CustomAPIError) {
		return res.status(404).json({ msg: err.message })
	}
	return res.status(500).json({ msg: err })
}

module.exports = errorHandlerMiddleware