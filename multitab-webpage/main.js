const data = [
    {
      name:"sunset",
      img:"1.webp",
      text: " SUNSET Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quisquam quia adipisci dolores expedita illum consequatur dolor explicabo eius, similique tenetur delectus velit a enim animi ipsum ipsam, et? Nihil?"
    },{
      name:"laptop",
      img:"2.webp",
      text: " LAPTOP Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quisquam quia adipisci dolores expedita illum consequatur dolor explicabo eius, similique tenetur delectus velit a enim animi ipsum ipsam, et? Nihil?"
    },
    ]
  const img = document.querySelector("img")
  const txt = document.querySelector("figcaption")
  const tabBtn = document.querySelectorAll(".tab-wrapper button")
  
  img.setAttribute("src",`${data[0].img}`)
  txt.innerText = data[0].text
  
  tabBtn.forEach((tab,i) =>{
    tab.addEventListener("click", () => {
      if (!tab.classList.contains("active")){
        tab.classList.add("active")
          data.forEach(content => {
            if (tab.dataset.content === content.name){
             img.setAttribute("src",`${content.img}`)
              txt.innerText = content.text           
            }
         })
         
         for (let x = 0; x < tabBtn.length; x++){
            if(tab.dataset.content !== tabBtn[x].dataset.content){
              tabBtn[x].classList.remove("active")
              }
         }
         
  
      }
  
    })
  })