const subBtn = document.getElementById('sBtn')
const input = document.getElementById('name')

const pre = document.getElementById('oldMessage')
const preName = localStorage.getItem('Name is')
if (preName) {
    pre.innerHTML = `<b>${preName}</b>`
}

subBtn.addEventListener("click", () => {
    localStorage.setItem("Name is", input.value)
    console.log(input.value)
    document.getElementById('message').innerHTML = `<b>${input.value}</b>`
});
