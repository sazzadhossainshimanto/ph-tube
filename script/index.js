

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
function loadCatagoried(){
        fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
                .then(data => displayCatagory(data.categories))
}
function loadVideo (){
        fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
                .then(data =>displayVideo(data.videos)
                
        )
}
const displayVideo = (videos)=>{
        const videoContianer = document.getElementById('videoContaier');
        videos.forEach((video) => {
                const videoCard = document.createElement("div");
                videoCard.innerHTML = `<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p></p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>`
                videoContianer.appendChild(videoCard)
        });
}

function displayCatagory (catagory){
        const catagoryContainer = document.getElementById("catalough-Container");
        for (const cat of catagory) {
                const div = document.createElement("div");
                div.innerHTML = `
                <button class="btn btn-sm hover:bg-red-600 rounded-lg  hover:text-white">${cat.category}</button>
                `
                catagoryContainer.appendChild(div)
                
        }
        
}
loadCatagoried()
loadVideo()  