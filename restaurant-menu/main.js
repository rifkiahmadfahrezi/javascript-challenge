const menuBtns = document.querySelectorAll(".menu-btn")
const wrapper = document.querySelector("main")

const menuItems = [
  {
    type: "food",
    name: "Takoyaki",
    description: "Takoyaki is japanese food"
  },{
    type: "food",
    name: "Martabak",
    description: "Martabak is Indonesian food"
  },{
    type: "drink",
    name: "Apple juice",
    description: "Apple juice made from apple with best quality"
  },,{
    type: "drink",
    name: "Orange juice",
    description: "Orange juice made from real high quality florida orange"
  },
  
  ]
  
function displayMenu(menuItem = menuItems){
  if (Array.isArray(menuItem)){
    menuItem.forEach(menu => {
      wrapper.innerHTML += 
        `<div class="card menu-item" data-menu="${menu.name}">
           <figure class="card-img">
             <img src="https://source.unsplash.com/random/200x200/?${menu.name}" alt="${menu.name}">
           </figure>
           <figcaption>
             <h3 class="card-title">
               ${menu.name}.
             </h3>
             <p>${menu.description}</p>
           </figcaption>
         </div>`
    })
  }else{
    wrapper.innerHTML += 
        `<div class="card menu-item" data-menu="${menuItem.name}">
           <figure class="card-img">
             <img src="https://source.unsplash.com/random/200x200/?${menuItem.name}" alt="${menuItem.name}">
           </figure>
           <figcaption>
             <h3 class="card-title">
               ${menuItem.name}.
             </h3>
             <p>${menuItem.description}</p>
           </figcaption>
         </div>`
  }
}

function sortMenu(type = "all"){
  return type === "all" ? menuItems : menuItems.filter(menu => menu.type == type)
}

// console.log(sortMenu("food"))

displayMenu(menuItems)

menuBtns.forEach((el,i) => {
  el.addEventListener("click", function() {
      if(!this.classList.contains("active")){
        el.classList.add("active")
       for (let x =　0; x < menuBtns.length; x++){
        if (x != i){
          menuBtns[x].classList.remove("active")
        }
       }
      }else{
       el.classList.remove("active")
      }
         wrapper.innerHTML = ""
         displayMenu(sortMenu(el.id))
     
  })
})
