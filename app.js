
let inputFeild = document.querySelector(".inputfeild")
let button = document.querySelector(".submitButton")
let list= document.querySelector(".list")
let parentlist= document.querySelector(".unorderedlist")

button.addEventListener("click", ()=>{
    getvalue();
    resetinput();
    
})



let getvalue=()=>{
    let value = document.querySelector(".inputfeild").value;
    let seperatelist = document.createElement("li")
    let closebutton = document.createElement("span")
    let editbutton = document.createElement("span")
    let clodeimg= document.createElement("img")
    let editimg= document.createElement("img")
    seperatelist.classList.add("list")
    seperatelist.innerText=value
    parentlist.appendChild(seperatelist)

    // Close button
    seperatelist.appendChild(closebutton)
    closebutton.classList.add("close")

    // Close Button img
    closebutton.appendChild(clodeimg)
    clodeimg.src="./img/Close.svg"

    seperatelist.appendChild(editbutton)
    editbutton.classList.add("edit")
    editbutton.append(editimg)
    editimg.src="./img/edit.svg"

    closebutton.addEventListener("click", ()=>{
        closebutton.parentElement.remove()
    })

    editbutton.addEventListener("click", ()=>{
        inputFeild.value=editbutton.parentElement.textContent;
        editbutton.parentElement.remove()
    })
    
}

let resetinput=()=>{
    inputFeild.value="";
}