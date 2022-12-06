const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')

setTimeout( () => {
  a.classList.add('active')
}, 0)

setTimeout( () => {
  b.classList.add('active')
}, 100)

setTimeout( () => {
  c.classList.add('active')
}, 200)