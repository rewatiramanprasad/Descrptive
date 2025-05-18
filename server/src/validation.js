const Joi = require('joi')
const { ValidationError } = require('../utility/errorHandler')
const validInput = async (req, res, next) => {
  const data = req.body
  console.log("validation",data)
  const schema = Joi.object({
    url: Joi.string().required(),
  })
  const valid = await schema.validate(data)

  if (valid.error) {
    console.log(valid.error)
    next(new ValidationError(valid.error))
  } else {
    next()
  }
}
module.exports = { validInput }
