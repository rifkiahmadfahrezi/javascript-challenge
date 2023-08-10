const sidebar = document.querySelector(".sidebar")
const menuToggler = document.querySelector(".menu-toggler")
const logo = document.querySelector("nav .logo")


menuToggler.addEventListener("click", () => {
  if (!sidebar.classList.contains("show")){
    logo.style.color = "white"
    sidebar.classList.add("show")
    sidebar.style.left = "0"
  }else{
    sidebar.classList.remove("show")
     sidebar.style.left = "-250px"
     logo.style.color = "black"
  }
  
})
