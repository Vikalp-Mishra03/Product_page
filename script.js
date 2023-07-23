let productImg = document.getElementById("productImg")
let btn = document.getElementsByClassName('btn')

btn[0].onclick = function () {
    productImg.src = "img/image1.png"
    for (btn of btn) {
        btn.classList.remove("active")
    }
    this.classList.add("active")
}
btn[1].onclick = function () {
    productImg.src = "img/image2.png"
    for (btn of btn) {
        btn.classList.remove("active")
    }
    this.classList.add("active")
}
btn[2].onclick = function () {
    productImg.src = "img/image3.png"
    for (btn of btn) {
        btn.classList.remove("active")
    }
    this.classList.add("active")
}