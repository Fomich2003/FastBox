let burgerBtn = document.querySelector('.burger')
let headernav = document.querySelector('header nav')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    headernav.classList.toggle('active')
})

headernav.addEventListener('click',  (event) => {
   if(event.target.closest('a')){
    burgerBtn.classList.remove('active')
    headernav.classList.remove('active')
   }
})