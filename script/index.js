

// {
//         "category_id": "1001",
//                 "video_id": "aaab",
//                         "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//                                 "title": "Midnight Serenade",
//                                         "authors": [
//                                                 {
//                                                         "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//                                                         "profile_name": "Noah Walker",
//                                                         "verified": false
//                                                 }
//                                         ],
//                                                 "others": {
//                 "views": "543K",
//                         "posted_date": ""
//         },
//         "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }

// {
//         "category_id": "1001",
//                 "category": "Music"
// }


function removeActive() {
        const activeClass = document.getElementsByClassName("active");
        for (const btn of activeClass) {
                btn.classList.remove("active")
        }
}
function loadCatagoried() {
        fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
                .then(res => res.json())
                .then(data => displayCatagory(data.categories))
}
function loadVideo() {
        fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
                .then(res => res.json())
                .then(data => {
                        removeActive();
                        document.getElementById("btn-all").classList.add("active");
                        displayVideo(data.videos)
                })


}
const loadVideoDetail = (videoId) => {

        const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
        fetch(url)
                .then(res => res.json())
                .then(data => displayVideoDetails(data.video))
}
const displayVideoDetails = (video) => {
        console.log(video)
        document.getElementById("video_details").showModal()
        const detailsContainer = document.getElementById('details-container');
        detailsContainer.innerHTML = `
        <h1>${video.title}</H1>`
}
const loadCatagory = (id) => {
        const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`


        fetch(url)
                .then(res => res.json())
                .then(data => {
                        removeActive()
                        const clickedButton = document.getElementById(`btn-${id}`)
                        clickedButton.classList.add("active")


                        displayVideo(data.category)
                })

}
const displayVideo = (videos) => {
        const videoContianer = document.getElementById('videoContaier');
        videoContianer.innerHTML = ""
        if (videos.length === 0) {
                videoContianer.innerHTML = `
                <div class="col-span-full flex flex-col justify-center items-center text-center py-36">
                <img class="w-[120px]" src="./assets/Icon.png" alt="">
                <h2 class="text-3xl text[#171717] font-bold">Oops!! Sorry, There is no <br> content here</h2>
               </div>
               `
                return;
        }
        videos.forEach((video) => {
                const videoCard = document.createElement("div");
                videoCard.innerHTML = ` <div class="card bg-base-100 w-96 shadow-sm">
                        <figure class="relative">
                                <img class="w-96 h-56 "  src="${video.thumbnail}" alt="Shoes" />
                                <span class="absolute bottom-2 right-3 bg-[#171717] text[10px] font-normal text-white p-1 rounded">3hrs 56 min ago</span>
                        </figure>
                        <div class=" flex gap-3 py-5 px-4">
                                <div class="profile ">
                                        <div class="avatar">
                                                <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                                        <img src="${video.authors[0].profile_picture}" />
                                                </div>
                                        </div>
                                </div>
                                <div class="intro">
                                        <div class="intro">
                                                <h2 class="text-black text-lg font-bold">Kid Gorgeous</h2>
                                                <p class="flex gap-1 ">
                                                <span class=" text[#17171770] font-normal">
                                                ${video.authors[0].profile_name}
                                                </span>
                                                 ${video.authors[0].verified == true ?`<img class="w-6" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">` : ``}
                                                 
                                                 </p>
                                                
                                                
                                                 <p class="text-sm text[#17171770] font-normal">${video.others.views}</p>
                                         </div>
                                </div>
                                
                        </div>
                        <button onclick=loadVideoDetail("${video.video_id}") class="btn btn-block">Show details</button>
                </div>
`
                videoContianer.appendChild(videoCard)
        });
}

function displayCatagory(catagory) {
        const catagoryContainer = document.getElementById("catalough-Container");
        for (const cat of catagory) {
                const div = document.createElement("div");
                div.innerHTML = `
                <button id="btn-${cat.category_id}" onclick="loadCatagory(${cat.category_id})" class="btn btn-sm hover:bg-red-600 rounded-lg  hover:text-white">${cat.category}</button>
                `
                catagoryContainer.appendChild(div)

        }

}
loadCatagoried()
