document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelector("form").addEventListener('submit',(e)=>{
    e.preventDefault()
    createTodo(e.target.children[1].value)    

    
  })


});
function createTodo(todo){
  //if(todo != ""){
    let x = document.createElement('button')
    let lis = document.createElement("li")
    lis.textContent = `${todo} `
    lis.appendChild(x)
    x.innerHTML = ' x'
    x.addEventListener(
      'click', () => {
        lis.remove()
      }) 

    document.querySelector("#tasks").appendChild(lis);

  //}else alert("value not found")

  
}