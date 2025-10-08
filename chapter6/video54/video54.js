console.log('video 54')

const username = document.getElementById('username');
const password = document.getElementById('password');
const buttonS = document.getElementById('buttonS');
const buttonH = document.getElementById('buttonH');
const btnCheckTb = document.getElementById('thongbao')

buttonS.addEventListener('click', () => {
    password.innerText = 'password: 231205'
});

buttonH.addEventListener("click", () => {
    password.innerText = 'password: ******'
});

btnCheckTb.addEventListener("click", () => {
    alert('Day la thong bao ^^')
})