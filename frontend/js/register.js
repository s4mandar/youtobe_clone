let usernameInput = document.querySelector("#usernameInput")
let passwordInput = document.querySelector("#passwordInput")
let uploadInput = document.querySelector("#uploadInput")
let registerForm = document.querySelector("#registerForm")
let errorMessage = document.querySelector("#errorMessage")



registerForm.addEventListener("submit", async (ev)=> {
    ev.preventDefault()

    let formdata = new FormData()

    formdata.append("username", usernameInput.value)
    formdata.append("password", passwordInput.value)
    formdata.append("file", uploadInput.files[0])

    try {
        let res = await axios.post("http://localhost:9090/api/v1/auth/register", formdata)

        if(res.data.status == 201) {
            window.localStorage.setItem("token", res.data.accessToken)
            window.localStorage.setItem("profileImg", res.data.data.file)

            window.location.href = "/admin"
    } else {
        errorMessage.textContent = "Registrarion failed!"
    }
    } catch (error) {
        errorMessage.textContent = "Registration failed!"
    }
})