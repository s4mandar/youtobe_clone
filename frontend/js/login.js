let usernameInput = document.querySelector("#usernameInput")
let loginForm = document.querySelector("#loginForm")
let passwordInput = document.querySelector("#passwordInput")
let submitButton = document.querySelector("#submitButton")
let errorMessageLogin = document.querySelector("#errorMessage")

loginForm.addEventListener("submit", async (ev)=> {
    ev.preventDefault()

    errorMessageLogin.textContent = ""

    try {
        let res = await axios.post("http://localhost:9090/api/v1/auth/login", {
            "username": usernameInput.value,
            "password": passwordInput.value
    })
        if(res.data.status == 201) {
            window.localStorage.setItem("token", res.data.accessToken)
            window.localStorage.setItem("profileImg", res.data.data.file)
            window.location.href = "/admin"
    } else {
        errorMessageLogin.textContent = "Login failed!"
    }
    } catch (error) {
        errorMessageLogin.textContent = "Login failed!"
    }
})