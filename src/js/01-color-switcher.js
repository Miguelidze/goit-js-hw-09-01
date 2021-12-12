function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-set]');

let timerId = null;

stopBtn.setAttribute('disabled', true);

const changeColor = () => (bodyArea.style.backgroundColor = getRandomHexColor());

const onStartClick = () => {

  changeColor();

  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');

  timerId = setInterval(changeColor, 1000);
};

const onStopClick = () => {

  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);

  clearInterval(timerId);

  bodyArea.style.backgroundColor = '#FFFFFF';
};

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

