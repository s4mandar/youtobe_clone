import JWT from "jsonwebtoken"

const checkToken = (req, res, next) => {
    try {
        let { token } = req.headers

        if(!token) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized!"
            })
        }

        let user = JWT.verify(token, process.env.JWT_SECRET)

        if(user.role != "USER") {
            return res.status(403).json({
                status: 403,
                message: "Invalid role!"
            })
        }
        next()
    } catch (error) {
        if(error.name == "JsonWebTokenError") {
            return res.status(401).json({
                status: 401,
                message: "Invalid token!"
            })
        }
    }
}

export default {
    checkToken
}