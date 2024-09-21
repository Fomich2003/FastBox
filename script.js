let burgerBtn = document.querySelector('.burger')
let headernav = document.querySelector('header nav')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    headernav.classList.toggle('active')
})
