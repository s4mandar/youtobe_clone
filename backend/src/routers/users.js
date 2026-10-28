import express from "express"
import userController from "../controllers/users.js"
import userMiddleware from "../middlewares/validation.js"
import tokenControl from "../middlewares/auth.guard.js"

const {Router} = express

const router = Router()

router
    .post("/api/v1/auth/register",userMiddleware.register , userController.register)
    .post("/api/v1/auth/login",userMiddleware.login, userController.login)
    .post("/api/v1/upload/video", tokenControl.checkToken, userController.admin)
    .get("/api/v1/upload/myVideos", tokenControl.checkToken, userController.showAdminVideos)
    .get("/api/v1/upload/allVideos", userController.showAllVideos)
    .delete("/api/v1/delete", userController.deleteVideo)
    .get("/api/v1/allUsers", userController.getAllUsers)


export default router