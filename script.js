// Control Body

let body = document.body

function fixBody() {
    body.classList.add("fixed")
}

function unFixBody() {
    isOpenMenu = false
    body.classList.remove("fixed")
}

// Menu
let burgerBtn = document.querySelector('.burger')
let headernav = document.querySelector('header nav')
let isOpenMenu = false

burgerBtn.addEventListener('click', () => {
    isOpenMenu = !isOpenMenu
    burgerBtn.classList.toggle('active')
    headernav.classList.toggle('active')
    if (isOpenMenu) {
        fixBody()
    } else {
        unFixBody()
    }
})

headernav.addEventListener('click',  (event) => {
   if(event.target.closest('a')){
    burgerBtn.classList.remove('active')
    headernav.classList.remove('active')
    unFixBody()
   }
})

// Add func send to telegram

let token = '7783405621:AAFUBel-SW9hh_LEt7jamAepPafQj_yZp5A'
let chatId = '-1002380830440'
let tgUrl = `https://api.telegram.org/bot${token}/sendMessage`

let form = document.querySelectorAll('#send-form')
let formError = document.querySelectorAll('.form-error')
let formOk = document.querySelectorAll('.form-ok')
let formBtn = document.querySelectorAll('#send-form button')

let inpName = document.querySelectorAll('#inp-name')
let inpPhone = document.querySelectorAll('#inp-tel')
let inpProduct = document.querySelectorAll('#inp-url')
let inpAddress = document.querySelectorAll('#inp-address')

form.forEach((singleForm, index) => {
    singleForm.addEventListener("submit", (event) => {
        event.preventDefault()

        formBtn[index].disabled = true

        let message = `Заявка з сайту FastBox\n\nІмя та Прізвище:\n${inpName[index].value}\n\nНомер телефону:\n${inpPhone[index].value}\n\nПосилання на товар:\n${inpProduct[index].value}\n\nАдреса доставки:\n${inpAddress[index].value}\n\n`
    
        sendData(message).then(response => {
            if (response.ok) {
                formOk[index].style.display = "block"
            } else {
                formError[index].style.display = "block"
            }

            setTimeout(() => {
                inpName[index].value = ""
                inpPhone[index].value = ""
                inpProduct[index].value = ""
                inpAddress[index].value = ""
                formError[index].style.display = "none"
                formOk[index].style.display = "none" 
                formBtn[index].disabled = false
            }, 2500)
        })
    })
})

async function sendData(message) {

    return await fetch(tgUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "html"
        })
    })
}

// Add modal

let modal = document.querySelector(".modal")
let closeModal = document.querySelector(".modal__close-btn")
let openModalBtns = document.querySelectorAll("#open-modal")

openModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("active")
        fixBody()
    })
})


closeModal.addEventListener("click", () => {
    modal.classList.remove("active")
    unFixBody()
})

