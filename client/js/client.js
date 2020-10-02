// Adds text in form of li element
const writeEvent = (text) => {
  const parent = document.querySelector('#events')

  const el = document.createElement('li')
  el.innerHTML = text;

  parent.appendChild(el)
}

// Sets input form text to blank (nothing) when you submit data
const formSubmitted = (event) => {
  event.preventDefault()

  const input = document.querySelector('#chat')
  const text = input.value
  input.value = ''

  socket.emit('message', text)
}

const addButtonListeners = () => {
  ['rock', 'paper', 'scissors'].forEach(id => {
    const button = document.getElementById(id)
    button.addEventListener('click', () => {
      socket.emit('turn', id)
    })
  })
}

// Default chat text
writeEvent('Welcome to RPS!')

// Initializes socket + chat function for socket
const socket = io()
socket.on('message', writeEvent)

document.querySelector("#chat-form").addEventListener('submit', formSubmitted)
addButtonListeners()