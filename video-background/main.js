const video = document.querySelector("#video")
const actBtn = document.querySelector("#action")


actBtn.addEventListener("click", () => {
  // if pause button clicked
  if (actBtn.dataset.action === "pause"){
    // pause video
    video.pause()
    // change button text to "play"
    actBtn.innerText = "play"
    // change data-action attribute to "play"
    actBtn.dataset.action = "play"
  }else{
    // play video
    video.play()
    // change button text to "pause"
    actBtn.innerText = "pause"
    // change data-action attribute to "pause"
    actBtn.dataset.action = "pause"
  }
})