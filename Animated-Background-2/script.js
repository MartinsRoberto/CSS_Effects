const container = document.querySelector('.container')

for (let i = 0; i < 809; i++) {
  const box = document.createElement('div')
  box.setAttribute('class','box')  
  
  container.appendChild(box)
}

container.addEventListener('mouseover', (e) => {
  if(e.target.classList == 'box'){
    const a = getRndInteger()
    const b = getRndInteger()
    const c = getRndInteger()

    e.target.style.backgroundColor = `rgba(${a},${b},${c})`
    e.target.style.boxShadow = `0px 0px 8px 2px rgba(${a},${b},${c}`

    setTimeout(() => {
      e.target.style.backgroundColor = "#313131"
      e.target.style.boxShadow = "none"
    }, 2000)
  }
})



function getRndInteger() {
  return Math.floor(Math.random() * (255) ) ;
}