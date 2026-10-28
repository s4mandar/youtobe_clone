import express from "express"
import path from "path"

const PORT = 4545

const app = express()

app.use(express.static(path.join(process.cwd(), "public")))
app.use("/js", express.static(path.join(process.cwd(), "js")))

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "html", "index.html"))
})

app.get("/register" ,(req, res) => {
    res.sendFile(path.join(process.cwd(), "html", "register.html"))
})

app.get("/login" ,(req, res) => {
    res.sendFile(path.join(process.cwd(), "html", "login.html"))
})

app.get("/admin", (req, res) => {
    res.sendFile(path.join(process.cwd(),"html", "admin.html"))
})

app.listen(PORT,() => console.log("Front server is running..."))