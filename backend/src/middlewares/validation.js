import { registerSchema } from "../utils/validation.js"

export default {
    register : (req, res, next) => {
        const { error } = registerSchema.validate(req.body)

        if(error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            })
        }

        return next()
    },

    login : (req, res, next) => {
        const { error } = registerSchema.validate(req.body)

        if(error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            })
        }

        return next()
    }
}