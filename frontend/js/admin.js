let videoInput = document.querySelector("#videoInput")
let videoForm = document.querySelector("#videoForm")
let uploadInput = document.querySelector("#uploadInput")
let adminWrapper = document.querySelector(".admin-wrapper")
let videosList = document.querySelector("#videosList")
let logoutBtn = document.querySelector("#logoutBtn")

let token = window.localStorage.getItem("token")

if(!token) {
    window.location.href = "/login"
}


videoForm.addEventListener("submit", async (ev) => {
    ev.preventDefault()

    let formdata = new FormData()

    formdata.append("video_title", videoInput.value)
    formdata.append("video", uploadInput.files[0])

    try {
        let res = await axios.post(
            "http://localhost:9090/api/v1/upload/video",
            formdata,
            {
                headers: {
                    token: token
                }
            }
        )

        if(res.data.status == 201) {
            videoInput.value = ""
            uploadInput.value = ""

            showMyVideos()
        }

    } catch (error) {
        console.log("Status:", error.response?.status)
        console.log("Server message:", error.response?.data)
    }
})

async function showMyVideos() { 
    try {
        let res = await axios.get(
            "http://localhost:9090/api/v1/upload/myVideos",
            {
                headers: {
                    token: token
                }
            }
        )

        videosList.innerHTML = ""

        for (const video of res.data.data) {
            videosList.innerHTML += `
                <div class="video-item">
                    <video controls width="300"
                        src="http://localhost:9090/${video.file}">
                    </video>

                    <p class="content">${video.title}</p>

                    <img
                        onclick="deleteVideo(${video.id})"
                        class="delete-icon"
                        src="./img/delete.png"
                        width="25"
                        alt="Delete"
                    >
                </div>
            `
        }
    } catch (error) {
        console.log(error)
    }
}

logoutBtn.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "/login"
})


async function deleteVideo(id) {
    console.log(id)
    let res = await axios.delete("http://localhost:9090/api/v1/delete", {
        headers: {
            token: token
        },
        data: {
            fileId: id
        }
    })
    
    if(res.data.status == 201) {
        showMyVideos()
    }
}

showMyVideos()