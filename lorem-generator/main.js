const dataTxt = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, molestiae, facilis quod dolore saepe magnam. Ratione voluptatibus vero quas maiores dicta, maxime ipsum vitae nesciunt similique, asperiores qui, dignissimos laudantium quam. Blanditiis dolore ut repellat, minus nulla architecto perferendis.",
     
     "sed quisquam vel tenetur veritatis nobis voluptate cupiditate repellendus id commodi amet maiores! Omnis ipsa consectetur harum praesentium dolore laboriosam aut reiciendis, fugiat expedita, asperiores magni sint distinctio beatae quod.",
     
     "Voluptates distinctio ipsam nulla quod quis sit inventore nemo totam sequi tempore ullam, mollitia, doloribus ex deserunt nam fugit corporis. Excepturi repellendus, eius blanditiis voluptate tempore repellat accusamus a possimus enim atque necessitatibus laudantium? Dignissimos, libero, impedit! Impedit consequuntur delectus autem debitis perferendis atque reiciendis tenetur ad.",
     
     "id dicta facere voluptate optio rerum earum harum qui maiores voluptas architecto ipsum fugit praesentium dolore sequi minima eum. Enim minima quos rem adipisci molestiae, temporibus quibusdam ut illum dolorum laboriosam illo, corrupti eveniet vero.",
     
     "Eum atque, voluptatum quidem dolorem laudantium ducimus sit ut, laboriosam, ullam nostrum nobis quod vitae eaque molestiae quasi magni reprehenderit! Accusamus incidunt, libero.",
     
     "commodi molestias illo dolor eius veniam minus! Natus ab deleniti obcaecati ipsum nemo deserunt reprehenderit iste veritatis. Quos repellat deleniti aliquam ullam iusto, vero neque eligendi a aperiam architecto consequuntur magni repellendus maiores id nulla sapiente laudantium non autem qui? Alias nihil, obcaecati quibusdam commodi, asperiores error optio! Odit sunt, id, esse similique quasi, amet officiis vitae rem animi ad totam impedit vero quo hic modi numquam minus iste! Aspernatur itaque voluptate ullam.",
     
     "velit ducimus quis expedita suscipit error mollitia modi a deserunt accusamus repellat culpa fuga delectus illum ipsam consectetur voluptatem odit nihil nesciunt hic quasi. Nam modi, autem repudiandae alias, voluptate vel et suscipit fuga hic minima id, similique omnis ratione porro, ex adipisci voluptas corrupti soluta laboriosam tenetur distinctio magni? Totam, eligendi, minima.",
  ]
const resultText = document.querySelector("section#generated-text-wrapper")
const form = document.querySelector("form#form-number")
const numberInput = document.querySelector("input[name=number]")
// const copyBtn = document.querySelector("button#copy")


form.addEventListener("submit", (e)=> {
  e.preventDefault()
  // copyBtn.innerText = "copy"
  resultText.innerHTML = ""
  
  const val = numberInput.value
  
  dataTxt.forEach((data,index) => {
    if (index < parseInt(val)){
      // display result to webpage
      resultText.innerHTML += `<p>${data}</p>`
    }
  })
  
  if (resultText.innerHTML != ""){
    copyBtn.classList.remove("hide")
  }
  
})

// copyBtn.addEventListener("click", () => {
//   copyBtn.innerText = "copied"
//   const copyText = resultText.innerText
//   copyText.select()
//   // copyText.setSelectionRange(0, 99999)
//   navigator.clipboard.writeText(copyText)

// })