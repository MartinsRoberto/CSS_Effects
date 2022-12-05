const container = document.querySelector('.container')
const delay = 5

for (let i = 0; i < 809; i++) {
  const box = document.createElement('div')
  box.setAttribute('class','box')  
  
  container.appendChild(box)
}

const boxes = document.querySelectorAll('.box')

function animate(){
  boxes.forEach((element, index) => {

    setTimeout( () => {
      element.classList.add('foi')
    }, delay*index)
  });
  
  setTimeout( () => {
    boxes.forEach((element, index) => {
      setTimeout( () => {
        element.classList.remove('foi')
      }, delay*index)
    });
  }, 2000)
}

animate()

setInterval( () => {
  animate()
}, 809*delay)