import Joi from "joi"

export const registerSchema = Joi.object({
        username: Joi.string().alphanum().min(6).max(20).required(),
        password: Joi.string().min(6).max(20).required()
})