let avatarImg = document.querySelector(".avatar-img")
let list = document.querySelector("#list")
let headerRight = document.querySelector(".header-right")
let list1 = document.querySelector("#list1")
let inputSearch = document.querySelector("#inputSearch")
let submit = document.querySelector("#submit")
let navbarList = document.querySelector(".navbar-list")


let token = window.localStorage.getItem("token")


let profileImg = window.localStorage.getItem("profileImg")

if(profileImg) {
    headerRight.innerHTML = `
     <button type="button" class="voice-btn hover-after">
                    <svg viewbox="0 0 24 24" focusable="false"
                        style="pointer-events: none; display: block; width: 30px; height: 30px;">
                        <g>
                            <path
                                d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
                            </path>
                        </g>
                    </svg>
                </button>
                <button type="submit" class="search-btn hover-after">
                    <svg viewbox="0 0 24 24" focusable="false"
                        style="pointer-events: none; display: block; width: 20px; height: 20px;">
                        <g>
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                            </path>
                        </g>
                    </svg>
                </button>
                <button class="hover-after">
                    <svg viewbox="0 0 24 24" focusable="false"
                        style="pointer-events: none; display: block; width: 30px; height: 30px;">
                        <g>
                            <path
                                d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z">
                            </path>
                        </g>
                    </svg>
                </button>
                <button class="hover-after">
                    <svg viewbox="0 0 24 24" focusable="false"
                        style="pointer-events: none; display: block; width: 30px; height: 30px;">
                        <g>
                            <path
                                d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z">
                            </path>
                        </g>
                    </svg>
                </button>
                <button class="hover-after">
                    <svg viewbox="0 0 24 24" focusable="false"
                        style="pointer-events: none; display: block; width: 30px; height: 24px;">
                        <g>
                            <path
                                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z">
                            </path>
                        </g>
                    </svg>
                </button>
                <a id="list" href="./admin">
        <img class="avatar-img" src=http://localhost:9090/${profileImg} alt="avatar-img" width="32px" height="32px">
    </a>`
} else {
    headerRight.innerHTML = `
     <button type="button" class="voice-btn hover-after">
                    <svg viewbox="0 0 24 24" focusable="false"
                        style="pointer-events: none; display: block; width: 30px; height: 30px;">
                        <g>
                            <path
                                d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
                            </path>
                        </g>
                    </svg>
                </button>
                <button type="submit" class="search-btn hover-after">
                    <svg viewbox="0 0 24 24" focusable="false"
                        style="pointer-events: none; display: block; width: 20px; height: 20px;">
                        <g>
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                            </path>
                        </g>
                    </svg>
                </button>
                <button class="hover-after">
                    <svg viewbox="0 0 24 24" focusable="false"
                        style="pointer-events: none; display: block; width: 30px; height: 30px;">
                        <g>
                            <path
                                d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z">
                            </path>
                        </g>
                    </svg>
                </button>
                <button class="hover-after">
                    <svg viewbox="0 0 24 24" focusable="false"
                        style="pointer-events: none; display: block; width: 30px; height: 30px;">
                        <g>
                            <path
                                d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z">
                            </path>
                        </g>
                    </svg>
                </button>
                <button class="hover-after">
                    <svg viewbox="0 0 24 24" focusable="false"
                        style="pointer-events: none; display: block; width: 30px; height: 24px;">
                        <g>
                            <path
                                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z">
                            </path>
                        </g>
                    </svg>
                </button>
                <a id="list" href="/admin">
                    <img class="avatar-img" src="./img/avatar.jpg" alt="avatar-img" width="32px" height="32px">
                </a>`
}

async function getAllVideos(searchValue, channelName) {
    let res = await axios.get("http://localhost:9090/api/v1/upload/allVideos")
    res = res.data.data
    list1.innerHTML = null
    res = searchValue ? res.filter(resOne => resOne.title.toLowerCase().includes(searchValue.toLowerCase())) : res

    if (channelName) {
        res = res.filter(resOne =>
            resOne.username.toLowerCase() === channelName.toLowerCase()
        )
    }


for (const vid of res) {
    list1.innerHTML += `
        <li class="iframe">
            <video controls src="http://localhost:9090/${vid.file}"></video>
            <div class="iframe-footer">
                <img src="http://localhost:9090/${vid.avatar}" alt="channel-icon">
                <div class="iframe-footer-text">
                    <h2 class="channel-name">${vid.username}</h2>
                    <h3 class="iframe-title">${vid.title}</h3>
                    <time class="uploaded-time">${vid.createdat}</time>
                    <a class="download" href="http://localhost:9090/${vid.file}" download>
                        <span>${vid.size} MB</span>
                        <img src="./img/download.png">
                    </a>
                </div>
            </div>
        </li>`
}}

let searchValue
inputSearch.addEventListener("input", (ev)=> {
    searchValue = ev.target.value
    getAllVideos(searchValue)
})

async function getAllUsers() {
    let res = await axios.get("http://localhost:9090/api/v1/allUsers")
    for (const user of res.data.data) {
        navbarList.innerHTML += `
        <li class="channel" data-id="1">
            <a href="#">
                <img src="http://localhost:9090/${user.file}" alt="channel-icon"
                    width="30px" height="30px">
                <span>${user.username}</span>
            </a>
        </li>
        `
    }
    let channels = document.querySelectorAll(".channel")

    channels.forEach(channel => {
        channel.addEventListener("click", () => {
            let channelName = channel.textContent.trim()
            getAllVideos(searchValue, channelName)
        })
    })
}

function voice() {
    let recognition = new webkitSpeechRecognition()

    recognition.lang = "en-US"

    recognition.start()

    recognition.onresult = (event) => {
        let text = event.results[0][0].transcript

        console.log(text)
        inputSearch.value = text
        getAllVideos(text)
    }
}

getAllUsers()
getAllVideos()