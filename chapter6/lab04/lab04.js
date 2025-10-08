const userNameInput = document.getElementById('userName');
const passWordInput = document.getElementById('passWord');
const loginBtn = document.getElementById('login');
const redirect = document.getElementById('chuyenHuong')


// userNameInput.value = 'hoidanit@gmail.com'
// passWordInput.value = '123456'

loginBtn.addEventListener("click", () => {
    if (userNameInput.value !== 'hoidanit@gmail.com' && passWordInput.value !== '123456') {
        alert('Tai khoan hoac mat khau sai!')
        userNameInput.style.borderColor = "red"
        passWordInput.style.borderColor = "red"
    } else {
        alert('Dang nhap thanh cong')
        userNameInput.style.borderColor = "black"
        passWordInput.style.borderColor = "black"
        window.location.href = "success.html"
    }
})