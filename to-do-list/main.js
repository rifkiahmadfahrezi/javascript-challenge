const form = document.querySelector("form[name=list-data-form]")
//create initial data 
let listData = []
// get list wrapper 
const itemsWrapper = document.querySelector("#items-wrapper")
// create display list function
function displayList(data = listData){
  // dispay all list items from listData array
  data.forEach(d => {
      itemsWrapper.innerHTML += `<li>
         <div class="item">
           <span >${d}</span>
           <div class="action-btns">
             <button type="button" data-action="delete">delete</button>
             <button type="button" data-action="done">done</button>
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
  // clear input value
  inputList.value = ""
  // display submited data to webpage
  displayList(listData)
})