const btn = document.querySelector("#btn")
const modal = document.querySelector(".modal-box")
const closeBtn = document.querySelector("#close")

window.addEventListener("click",(e) => {
if (e.target == btn){
  if (!modal.classList.contains('show')){
    modal.classList.add('show')
  }else{
    modal.classList.remove('show')
  }
}else if(e.target == closeBtn){
  modal.classList.remove('show')
}
})