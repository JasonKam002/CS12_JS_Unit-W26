let pizzaImg = document.querySelector(".pizzaImg")

function changeSize() {
    let size = document.querySelector("input[name='size']:checked")

    if (size.value == 'small') {
        pizzaImg.style.height = '60px'
    } else if (size.value == 'medium') {
        pizzaImg.style.height = '80px'
    } else {
        pizzaImg.style.height = '100px'
    }
}
