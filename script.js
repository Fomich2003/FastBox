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

// Add func send to telegram

let token = '7783405621:AAFUBel-SW9hh_LEt7jamAepPafQj_yZp5A'
let chatId = '-1002380830440'
let tgUrl = `https://api.telegram.org/bot${token}/sendMessage`

let form = document.querySelector('#send-form')
let formError = document.querySelector('.form-ok')
let formOk = document.querySelector('.form-error')
let inpName = document.querySelector('#inp-name')
let inpPhone = document.querySelector('#inp-tel')
let inpProduct = document.querySelector('#inp-url')
let inpAddress = document.querySelector('#inp-address')


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

//  sendData("Привіт Дмитро").then(Response => {
//     if (Response.ok) {
//         alert("Ваше повідомлення відправлено")
//     } else {
//         alert("Помилка")
//     }
// })
 