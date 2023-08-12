const qBox = document.querySelectorAll(".question")
const aBox = document.querySelectorAll(".answer")
let x = document.querySelectorAll("#plus")

qBox.forEach((el,i) => {
  el.addEventListener("click", function(){
      if (!qBox[i].classList.contains("display")){
        x[i].innerText = "-"
      　qBox[i].classList.add("display")
      　aBox[i].classList.add("show")
    }else{
        x[i].innerText = "+"
     　 qBox[i].classList.remove("display")
        aBox[i].classList.remove("show") 
    }
  })
})