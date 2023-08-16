const sections = document.querySelectorAll("section,header")
const menuItems = document.querySelectorAll(".menu-item")
const navbar = document.querySelector("nav#navbar")

// smooth scroll and scroll to selected section
menuItems.forEach((menuItem,index) => {
  menuItem.addEventListener("click", e => {
    e.preventDefault()
      sections.forEach(section => {
        window.scrollTo({
          top: sections[index].offsetTop - 60,
          behavior: "smooth"
        })
      })
  })
})

//fixed navbar
window.addEventListener("scroll", e => {
  if (window.scrollY > 1){
   navbar.classList.add("active")
  }else{
    navbar.classList.remove("active")
  }
  
  const topBtn = document.querySelector(".top")
  // back to top btn
  if (window.scrollY > 300){
    topBtn.classList.add("show")
    topBtn.addEventListener("click", () => {scrollTo({top:0})})
  }else{
    topBtn.classList.remove("show")
  }
})

//burger menu menu toggler
const menuWrapper = document.querySelector('.menu-wrapper')
window.addEventListener("click", e => {
  if (e.target.classList.contains('menu-toggler')){
    
    menuWrapper.classList.toggle('active')
  }else{
    menuWrapper.classList.remove('active')
  }
})
