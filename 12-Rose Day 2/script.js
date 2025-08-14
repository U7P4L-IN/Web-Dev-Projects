// press the button to take a photo.

let light = document.getElementById('circle');

document.getElementById('button').addEventListener('click', () => {
  light.classList.remove('flash-animation');
  setTimeout(function(){
  light.classList.add('flash-animation');
  },500);
});

let eject = document.getElementById('photo');

document.getElementById('button').addEventListener('click', () => {
  eject.classList.remove('eject-photo');
  setTimeout(function(){
  eject.classList.add('eject-photo');
  },500);
});

$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

