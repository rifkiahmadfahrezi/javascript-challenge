const selectImages = document.querySelectorAll("[data-character]")
const charWrapper = document.querySelector(".char-wrapper")

selectImages.forEach((img,i) => {
  let character = img.dataset.character
  img.addEventListener("click", e => {
    document.querySelector(".title").innerText = `Your character is : ${character}`
    
    img.classList.add("selected")
    selectImages.forEach((el,index) => {
      if (!el.classList.contains("selected")){
        el.classList.add("remove")
        setTimeout(() => {
          el.style.display = "none"
          
          charWrapper.innerHTML += `<a href="#" onclick="reSelectChar()" class="cancel-btn">cancel</a>`
          
        },500)
      }
    })
  })
})

function getOpponent(){
  const characters = ["rock","paper","scissors"]
  return character[Math.floor(Math.random() * characters.length)]
}
function reSelectChar(el){
  charWrapper.innerHTML = ""
  selectImages.forEach((el,i) => {
    charWrapper.appendChild(selectImages[i])
    selectImages[i].classList.remove("remove")
  })
}