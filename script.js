const eventKey = document.getElementById('eventKey');
const eventKeyCode = document.getElementById('eventKeyCode');
const eventCode = document.getElementById('eventCode');

document.addEventListener('keydown', (event) => {
  console.log(event);
  
  eventKey.innerHTML = event.key;
  eventKeyCode.innerHTML = event.keyCode;
  eventCode.innerHTML = event.code;
});