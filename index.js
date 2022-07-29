const handleClickLess = () => {
  const total = document.getElementById('total');
  total.textContent = (parseInt(total.textContent) - 1).toString();
}

const handleClickReset = () => {
  const total = document.getElementById('total');
  total.textContent = '0';
}

const handleClickAdd = () => {
  const total = document.getElementById('total');
  total.textContent = (parseInt(total.textContent) + 1).toString();
}

const init = () => {
  const lessButton = document.getElementById('less-button');
  lessButton.addEventListener('click', handleClickLess);

  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', handleClickReset);

  const addButton = document.getElementById('add-button');
  addButton.addEventListener('click', handleClickAdd);
}

window.onload = init;
