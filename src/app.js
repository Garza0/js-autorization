import { Question } from './question'
import './style.css'
import { isValid, createModal } from './utils'

const form = document.getElementById('form')
const modalBtn = document.getElementById('modal-btn')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')


form.addEventListener('submit', submitFormHandler)
modalBtn.addEventListener('click', openModal)
window.addEventListener('load', Question.renderList)
input.addEventListener('input', () => {
  submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
  event.preventDefault()

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    }
    submitBtn.disabled = true
    //Async request
    Question.create(question).then(() => {
      input.value = ''
      input.className = ''
      submitBtn.disabled = false
    })

  }
}

function openModal() {
  createModal('Авторизация', '<h1>Test</h1>')
}