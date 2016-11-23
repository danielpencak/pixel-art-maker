(function() {
  'use strict';
  const $grid = $('#grid');
  let usrColor;

  for (let i = 0; i <= 2575; i++) {
    const $div = $('<div>').addClass('grid');

    $grid.append($div);
  }
  $('.color').click((event) => {
    usrColor = event.target.classList[0];
    $('.color').attr('style', 'border: hidden');
    $(event.target).attr('style', 'border: 2px solid white');
  });
  $('.grid').click((event) => {
    $(event.target).attr('style', `background-color: ${usrColor}`);
  });
  let isPainting = false;

  $grid.mousedown(() => {
    isPainting = true;
  });
  $('.grid').mouseenter((event) => {
    if (isPainting) {
      $(event.target).attr('style', `background-color: ${usrColor}`);
    }
  });
  $(document).mouseup(() => {
    isPainting = false;
  });
})();
