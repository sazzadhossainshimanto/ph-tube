

// category:"Music"
// category_id:"1001"
function loadCatagoried(){
        fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
                .then(data => displayCatagory(data.categories))
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