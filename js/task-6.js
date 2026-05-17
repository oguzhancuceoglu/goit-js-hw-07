function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsDiv = document.querySelector('#controls');
const inputNum = controlsDiv.querySelector('input');
const createBtn = controlsDiv.querySelector('[data-create]');
const destroyBtn = controlsDiv.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
createBtn.addEventListener('click', onCreateBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
function onCreateBoxes() {
  const amount = Number(inputNum.value);
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    return;
  }
  destroyBoxes();
  createBoxes(amount);
  inputNum.value = '';
}
function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let initialSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const currentSize = initialSize + i * 10;
    box.style.width = `${currentSize}px`;
    box.style.height = `${currentSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  boxesContainer.appendChild(fragment);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}