console.log('video53')

const textE = document.getElementById("myText")
const btnE = document.getElementById("myBtn")
const backBtnE = document.getElementById("myBackBtn")

//use .style to change css
btnE.addEventListener("click", () => {
    console.log('click work!')
    textE.style.color = "blue";
    textE.style.backgroundColor = "brown"
    //even add class beside .style work.
    textE.classList.add("Day", "la", "Text")
})

backBtnE.addEventListener("click", () => {
    console.log('undo work!')
    textE.style.color = "black";
    textE.style.backgroundColor = "unset"
    //aslo remove class
    textE.classList.remove("Day", "la", "Text")
})