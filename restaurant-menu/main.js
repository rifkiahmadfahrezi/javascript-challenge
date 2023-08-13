const menuBtns = document.querySelectorAll(".menu-btn")

menuBtns.forEach((el,i) => {
  el.addEventListener("click", function() {
   
      if(!this.classList.contains("active")){
        menuBtns[i].classList.add("active")
       for (let x =　0; x < menuBtns.length; x++){
        if (x != i){
          menuBtns[x].classList.remove("active")
        }
       }
      }else{
        menuBtns[i].classList.remove("active")
      }
  })
})