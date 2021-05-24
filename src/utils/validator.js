import { commonError } from "./common-error"

export default (schema) => (
  req,
  res,
  next,
) => {
  try {
    const { error } = schema.validate(req.body)

    if (!error) return next()

    console.log("ERROR",error);

    const { details } = error
    const message = details.map(i => i.message.replace(/['"]+/g, '')).join(',')
    let object = { ...commonError.badRequest }
    object.message = message
    next(res.status(400).send(object));
  } catch (error) {
    next(error)
  }
}
