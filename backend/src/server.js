import express from "express"
import fileUpload from "express-fileupload"
import userRouter from "./routers/users.js"
import cors from "cors"
import path from "path"

import { configDotenv } from "dotenv"
configDotenv()

const app = express()
app.use(express.json())
app.use(fileUpload())
app.use(cors())
app.use(express.static(path.join(process.cwd(), "uploads")))
app.use(userRouter)


app.listen(process.env.PORT, () => console.log("Server is running..."))