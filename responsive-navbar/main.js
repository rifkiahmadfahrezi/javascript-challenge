const menuToggler = document.querySelector(".link-wrapper")

let num = 1
window.addEventListener("click", e => {
  if (e.target.className == "toggler"){
   
   if (num % 2 == 0){
     menuToggler.classList.remove("show")
   }else{
      menuToggler.classList.add("show")
   }
   num++
   
  }else{
    menuToggler.classList.remove("show")
  }
})
