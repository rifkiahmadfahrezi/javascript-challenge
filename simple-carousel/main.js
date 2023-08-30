const imageData = {
  name: ["1","2","3"], // image file name
}
// get images
const image = document.querySelector("img[data-image]")


// function for actionBtn
function actionBtn(){
  // select btns
  const buttons = document.querySelectorAll("button[data-action]")
  //if btn clicked
  buttons.forEach(btn => {
    btn.addEventListener("click", function() {
          const currentImage = image.getAttribute("src").split(".")[0] // current image filename
          const index = imageData.name.indexOf(currentImage)
          slideImage(this.dataset.action, index)
        
    })
  })
}
function loadAnimationImage(element,time,src){
  element.classList.add("load")
   setTimeout(() =>{ 
      element.setAttribute("src", `${src}.webp`)
      element.classList.remove("load")
   },time)
}
function slideImage(action,i){
    if (action == "next"){
      if (i == imageData.name.length-1){
        loadAnimationImage(image,500,imageData.name[0])
      }else{
        loadAnimationImage(image,500,imageData.name[i + 1])
      }
    }else{
      if (i == 0){
        loadAnimationImage(image,500,imageData.name.length)
      }else{
        loadAnimationImage(image,500,imageData.name[i - 1])
      }
    }
}
// run function if website loaded
window.onload = () => {
  actionBtn()
}