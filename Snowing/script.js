const cloud = document.querySelector('.cloud')

for (let index = 0; index < 10; index++) {
  cloud.innerHTML += `<div class="snow" style="--t:${getRandomInt(10, 20)};--h:${index};"></div>`
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
