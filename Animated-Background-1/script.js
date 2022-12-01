const bubbles = document.querySelector('.bubbles')

for (let index = 0; index < 20; index++) {
  bubbles.innerHTML += `<span style="--i:${getRandomArbitrary()}"></span>`
}

function getRandomArbitrary() {
  return Math.random() * (10 - 3) + 3;
}