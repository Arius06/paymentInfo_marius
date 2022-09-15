const card = document.querySelector('.card')
const cardNumber = document.querySelector('.cardNumber')
const cardHolderName = document.querySelector('.cardHolderName')
const expirationDate = document.querySelector('.expirationDate')
const securityCode = document.querySelector('.securityCode')
const frontInputs = document.querySelectorAll('.frontInputs')
const cardHolderNameInput = document.getElementById("cardHolderNameInput")
const cardNumberInput = document.getElementById('cardNumberInput')
const cardExpMonthInput = document.getElementById('cardExpMonthInput')
const cardSecurityCodeInput = document.getElementById('cardSecurityCodeInput')

cardHolderNameInput.addEventListener('input', () => {
    cardHolderName.innerText = cardHolderNameInput.value.toUpperCase()
})

cardNumberInput.addEventListener('input', () => {
    let spaced = cardNumberInput.value.match(/.{1,4}/g)
    cardNumber.innerText = spaced.join('  ')
})

cardExpMonthInput.addEventListener('input', () => {
    expirationDate.innerText = cardExpMonthInput.value
})

cardExpMonthInput.addEventListener('focusout', () => {
    if (expirationDate.innerText.length < 5 || expirationDate.innerText[2] !== "/") alert("Please enter a valid expiration date.")
})

cardSecurityCodeInput.addEventListener('input', () => {
    securityCode.innerText = cardSecurityCodeInput.value
})

cardSecurityCodeInput.addEventListener('focusin', () => {
    card.classList.add('isFlipped')
})

frontInputs.forEach(item => {
    item.addEventListener('focusin', () => {
        card.classList.remove('isFlipped')
    })
})