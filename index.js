for (let i = 0; i <= 2575; i++) {
  const divsGrid = document.querySelector('#grid');
  const div = document.createElement('div');
  divsGrid.appendChild(div);
}

for (let i = 0; i <= 20; i++) {
  const divsPalette = document.querySelector('#palette');
  const div = document.createElement('div');
  divsPalette.appendChild(div);
}

(function() {
  'use strict';
  const divsGrid = document.querySelector('#grid');
  const divs1 = divsGrid.children;
  const divsPalette = document.querySelector('#palette');
  const divs2 = divsPalette.children;
  const cursor = document.querySelector('#cursor');
  const container = document.querySelector('#container');
  const body = document.querySelector('body');
  // body.addEventListener('mousemove', (event) => {
  //   cursor.setAttribute('style', `top: ${event.y}px; left: ${event.x}px; display: block`);
  //   // body.setAttribute('style', 'cursor: none');
  // });
  // for (const div of divs2) {
  //   div.setAttribute('style', 'border: hidden');
  // }
  divsPalette.addEventListener('click', (event) => {
    if (event.target === divsPalette) {
      return;
    }
    let usrColor = event.target.classList[0];
    for (const div of divs2) {
      div.setAttribute('style', 'border: hidden');
    }
    event.target.setAttribute('style', 'border: 2px solid white');
    // body.addEventListener('mousemove', (event) => {
    //   cursor.setAttribute('style', `top: ${event.y}px; left: ${event.x}px; display: block`);
    //   // body.setAttribute('style', 'cursor: none');
    // });
    divsGrid.addEventListener('click', (event) => {
      if (event.target === divsGrid) {
        return;
      }
      for (const div of divs1) {
        if (event.target === div) {
          div.classList.add(usrColor);
          div.setAttribute('style', `background-color: ${usrColor}`);
        }
      }
    });
  });
})();
