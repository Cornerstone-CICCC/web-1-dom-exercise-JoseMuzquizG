const text1 = document.querySelector('#output1')
const text2 = document.querySelector('#output2')
const smallText = document.querySelector('.small-text')
const text4 = document.querySelector('#output4')
const text5 = document.querySelector('#message')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const newText = document.createElement('span')

newText.textContent = 'Hello World'

btn1.addEventListener('click', () => {
    text1.style.color = "red"
})

btn2.addEventListener('click', () => {
    text2.append(newText)
})

btn3.addEventListener('click', () => {
    smallText.classList.remove('small-text')
})

btn4.addEventListener('click', () => {
    text4.style.color = "red"
})

btn5.addEventListener('click', (event) => {
    console.log(event.target)
})
