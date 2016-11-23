(function() {
  'use strict';
  const divsGrid = document.querySelector('#grid');
  const divs1 = divsGrid.children;
  const divsPalette = document.querySelector('#palette');
  const divs2 = divsPalette.children;
  let usrColor;
  for (let i = 0; i <= 2575; i++) {
    const div = document.createElement('div');
    divsGrid.appendChild(div);
  }
  divsPalette.addEventListener('click', (event) => {
    if (event.target === divsPalette) {
      return;
    }
    usrColor = event.target.classList[0];
    for (const div of divs2) {
      div.setAttribute('style', 'border: hidden');
    }
    event.target.setAttribute('style', 'border: 2px solid white');
  });
  divsGrid.addEventListener('click', (event) => {
    if (event.target === divsGrid) {
      return;
    }
    for (const div of divs1) {
      if (event.target === div) {
        div.setAttribute('style', `background-color: ${usrColor}`);
      }
    }
  });
  let isPainting = false;
  divsGrid.addEventListener('mousedown', (event) => {
    isPainting = true;
  });
  for (const div of divs1) {
    div.addEventListener('mouseenter', (event) => {
    if (isPainting) {
      div.setAttribute('style', `background-color: ${usrColor}`);
    }
      });
  }
  divsGrid.addEventListener('mouseup', () => {
    isPainting = false;
  });
})();
