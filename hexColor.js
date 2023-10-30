
const arrayHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const button = document.getElementById("button")
const colorName = document.getElementById("colorName")


button.addEventListener("click" , hexColor)

function hexColor() {
    let num = "#"
    for(let i = 0  ; i < 6 ; i++){
      
      num += arrayHex[randomNumber()] 
    }
     

     document.body.style.backgroundColor =  num
     colorName.style.color = num
     colorName.textContent = num
}

function randomNumber(){
    return Math.floor(Math.random()*(arrayHex.length))
}



