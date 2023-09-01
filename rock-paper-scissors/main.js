const selectImages = document.querySelectorAll("[data-character]")
const charWrapper = document.querySelector(".char-wrapper")
const btnWrapper = document.querySelector(".btn-wrapper")

selectImages.forEach((img,i) => {
  const character = img.dataset.character
  const opponent = getOpponent()
  img.addEventListener("click", e => {
    document.querySelector(".title").innerText = `Your character is : ${character}`
    
    img.classList.add("selected")
    selectImages.forEach((el,index) => {
      if (!el.classList.contains("selected")){
        el.classList.add("remove")
        setTimeout(() => {
          el.style.display = "none"
          btnWrapper.innerHTML = `
          <a href="#" onclick="resetChar()" data-action="cancel" class="action-btn">cancel</a>
          <a href="#" onclick="fight(${character},${opponent})" data-action="fight" class="action-btn">fight!</a>`
        },500)
      }
    })
  })
})

function getOpponent(){
  const characters = ["rock","paper","scissors"]
  return characters[Math.floor(Math.random() * characters.length)]
}
function resetChar(){
  charWrapper.innerHTML = ""
  document.querySelector(".title").innerText = "Select your character"
  selectImages.forEach((el,i) => {
    el.style.display = "inline"
    el.classList.remove("remove")
    el.classList.remove("selected")
    charWrapper.appendChild(el)
    btnWrapper.innerHTML = ""
  })
}
function fight(myChar,opponent){
  charWrapper.innerHTML += `VS
  <img src="${opponent}.jpg" data-character="${opponent}" alt="${opponent} image">
  `
  const title = document.querySelector(".title")
  if (myChar == opponent){
    title.innerText = "DRAW"
  }else if(myChar == "scissors"){
    if (opponent == "rock"){
      title.innerText = "YOU LOSE!" 
    }else{
      title.innerText = "YOU WIN!" 
    }
  }else if(myChar == "rock"){
    if (opponent == "paper"){
      title.innerText = "YOU LOSE!" 
    }else{
      title.innerText = "YOU WIN!" 
    }
  }else if(myChar == "paper"){
    if (opponent == "scissors"){
      title.innerText = "YOU LOSE!" 
    }else{
      title.innerText = "YOU WIN!" 
    }
  }
}