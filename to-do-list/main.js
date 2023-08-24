const form = document.querySelector("form[name=list-data-form]")
//create initial data 
let listData = ["test","test2"]
// get list wrapper 
const itemsWrapper = document.querySelector("#items-wrapper")
// create display list function
function displayList(data = listData){
  // dispay all list items from listData array
  data.forEach((d,i) => {
      itemsWrapper.innerHTML += `<li>
         <div class="item">
           <span data-index="${i}">${d}</span>
           <div class="action-btns">
             <button type="button" data-action="delete" data-index="${i}">delete</button>
             <button type="button" data-action="done" data-index="${i}">done</button>
           </div>
         </div>`
  })
}
displayList()
// form on submit
form.addEventListener("submit", e => {
  // prevent reloading
  e.preventDefault()
 // get input element value
  const inputList = document.querySelector("input[name=item-name]")
  // add submited value to listData array
  listData.push(inputList.value)
   // display submited data to webpage
  let i = listData.length - 1
  itemsWrapper.innerHTML += `<li>
         <div class="item">
           <span data-index="${i}">${inputList.value}</span>
           <div class="action-btns">
              <button type="button" data-action="delete" 
              data-index="${i}">delete</button>
             <button type="button" data-action="done" data-index="${i}">done</button>
           </div>
         </div>`
  // clear input value
  inputList.value = ""
})

window.addEventListener("DOMContentLoaded", () => {

// select items
const item = document.querySelectorAll
  window.addEventListener("click", e => {
    // check that clicked button is a action btn
    if(e.target.hasAttribute("data-action")){
      const btn = e.target
      //get id
      const id = btn.dataset.index
      // checking action btn that clicked
      if (btn.dataset.action == "done"){
        // get text list element
        const items = document.querySelectorAll("span[data-index]")
        items.forEach(item => {
          if (id == item.dataset.index){
            btn.innerText = "ok"
          }
        })
      }else{
        // if delete btn clicked remove item from the array
        listData.splice(id,1)
      }
      itemsWrapper.innerHTML = ""
      displayList()
    }
    
  })
})
