console.log('video52')

const myBEle = document.getElementById("myB")
const myBbackEle = document.getElementById("myBback")

const myTitleEle = document.getElementById("myTitle")


myBEle.addEventListener("click", () => {
    console.log('clicked');
    // myTitleEle.innerText = 'Dit me may';
    myTitleEle.innerHTML = "<strong>Da thay doi</strong>, <em>Roi do nha!</em>"
});

myBbackEle.addEventListener("click", () => {
    console.log('clicked back');
    myTitleEle.innerText = 'Video 52';
});



