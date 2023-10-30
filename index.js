
const array = ["yellow", "pink", "lightgreen", "skyblue", "cadetblue", "purple","slateblue"]
const button = document.getElementById("button")
const colorName = document.getElementById("colorName")


button.addEventListener("click", changeColor)

function changeColor() {
     let num = randomNumber()
     document.body.style.backgroundColor = array[num]
     colorName.style.color = array[num]
     colorName.textContent = array[num]
}

function randomNumber(){
   return Math.floor(Math.random()*array.length)
}

