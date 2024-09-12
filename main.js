let img = document.querySelector(".main-img");
let smallImgs = document.querySelectorAll("img.small-img");
let container = document.querySelector(".container")

function changePhone(phone){
    img.src = phone
    console.log(this)
}


smallImgs.forEach(phone => {
    phone.addEventListener("click", function(){
        changePhone(this.src)
    });
});

function changeBackground(color){
    container.style.backgroundColor = color;
}