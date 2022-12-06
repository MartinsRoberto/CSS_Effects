const s = document.querySelector('.s')
const m = document.querySelector('.m')
const h = document.querySelector('.h')

setInterval( () => {
  const sec = new Date().getSeconds();
  const min = new Date().getMinutes()
  const hour = new Date().getHours()

  s.style.transform = `rotate(${sec*6}deg)`
  m.style.transform = `rotate(${min*6}deg)`
  h.style.transform = `rotate(${hour*15}deg)`

  const $s = document.querySelector('.number-sec')
  const $m = document.querySelector('.number-min')
  const $h = document.querySelector('.number-hour')

  if( sec < 10){
    $s.innerText = "0"+sec  
  }
  else{
    $s.innerText = sec 
  }

  if( min < 10){
    $m.innerText = " : 0"+min+" :"
  }
  else{
    $m.innerText = ": "+min+" :"
  }

  if( hour < 10){
    $h.innerText = "0"+hour  
  }
  else{
    $h.innerText = hour  
  }
}, 1000)
