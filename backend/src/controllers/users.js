import pool from "../config/db.js"
import argon2 from "argon2"
import path from "path"
import JWT from "jsonwebtoken"

const register = async (req, res) => {
    const { username, password } = req.body
    const { file } = req.files

    let existUser = await pool.query(`select * from users where username = $1`, [username])

    if(existUser.rows.length > 0) {
        return res.status(400).json({
            status: 400,
            message: "Username already exists!"
        })
    }

    let hashedPassword = await argon2.hash(password)
    let fileName = new Date().getTime() + path.extname(file.name)
    let rightNow = new Date().toLocaleString()

    await file.mv(path.join(process.cwd(), "uploads", fileName))

    let result = await pool.query(`insert into users(username, password, file, createdAt)
    values($1, $2, $3, $4) returning *`, [username, hashedPassword, fileName, rightNow])

    let newUser = result.rows[0]

    res.status(201).json({
        status: 201,
        message: "User successfully registered!",
        accessToken: JWT.sign({ id: newUser.id, role: "USER" }, process.env.JWT_SECRET),
        refreshToken: JWT.sign({ id: newUser.id, role: "USER" },process.env.JWT_SECRET),
        data: {
            file: newUser.file,
        }
    })}

const login = async (req, res) => {
    const { username, password } = req.body

    let existUser = await pool.query(`select * from users where username = $1`, [username])

    if (existUser.rows.length === 0) {
    return res.status(401).json({
        status: 401,
        message: "Login or password is wrong!"
    })
}

    let user = existUser.rows[0]

    if (!await argon2.verify(user.password, password)) {
        return res.status(401).json({
            status: 401,
            message: "Login or password is wrong!"
        })
    }

    return res.status(201).json({
        status: 201,
        message: "User logged in!",
        accessToken: JWT.sign({ id: user.id, role: "USER" }, process.env.JWT_SECRET),
        refreshToken: JWT.sign({ id: user.id, role: "USER" },process.env.JWT_SECRET),
        data: {
            file: user.file
        }
    })
}

const admin = async (req, res) => {
    let { token } = req.headers
    let { video_title } = req.body
    let { video } = req.files
    let users = JWT.verify(token, process.env.JWT_SECRET)

    let fileName = new Date().getTime() + path.extname(video.name)
    let rightNow = new Date().toLocaleString()
    let videoSize = (video.size / (1024 * 1024)).toFixed(2)

    video.mv(
    path.join(process.cwd(), "uploads", fileName),
    (err) => {
        if (err) {
            return res.status(400).json({
                status: 400,
                message: "Video yuklanmadi!",
                error: err.message
            })
        }
    }
)
    pool.query(`insert into files(userId, title, file, size, createdAt) 
        values($1, $2, $3, $4, $5)`, [users.id, video_title, fileName, videoSize, rightNow])

    return res.status(201).json({
        status: 201,
        message: "Video successfully uploaded!"
    })
}

const showAdminVideos = async (req, res) => {
    let { token } = req.headers
    let users = JWT.verify(token, process.env.JWT_SECRET)

    let userVideos = await pool.query(`select * from files where userid = $1`, [users.id])
    userVideos = userVideos.rows
    
    res.status(200).json({
        status: 200,
        message: "User videos",
        data: userVideos
    })
}

const showAllVideos = async (req, res) => {
    let allData = await pool.query(`SELECT
    f.id,
    f.userId,
    f.title,
    f.file,
    f.size,
    f.createdAt,
    u.username,
    u.file AS avatar
FROM files f
JOIN users u ON f.userId = u.id;`)
    allData = allData.rows

    return res.status(200).json({
        status: 200,
        message: "All videos",
        data: allData
    })
}

const deleteVideo = async (req, res) => {
    const { fileId } = req.body
    await pool.query(`delete from files where id = $1`, [fileId])

    res.status(201).json({
        status: 201,
        message: "File removed!"
    })
}

const getAllUsers = async (req, res) => {
    let users = await pool.query(`select id, username, file from users`)
    users = users.rows

    res.status(200).json({
        status: 200,
        message: "All users",
        data: users
    })
}

export default {
    register,
    login,
    admin,
    showAdminVideos,
    showAllVideos,
    deleteVideo,
    getAllUsers
}