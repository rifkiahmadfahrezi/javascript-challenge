// function for actionBtn
function actionBtn(){
    // select btns
    const buttons = document.querySelectorAll("button[data-action]")
    // get images
    const imagesEl = document.querySelectorAll("img")
    //if btn clicked
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
          scrollImg(imagesEl[0])
      })
    })
  }
  // scroll image
  function scrollImg(img){
    img.scrollIntoView()
  }
  // run every function if website loaded
  window.onload = () => {
    actionBtn()
    
  }