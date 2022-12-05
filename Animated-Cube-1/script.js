const body = document.querySelector('body')

for (let i = 0; i < 100; i++) {
  const box = document.createElement('div')
  box.setAttribute('class','box')  

  body.appendChild(box)
}