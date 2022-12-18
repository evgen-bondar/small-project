let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 600;
    if (offset > 5400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 600;
    if (offset < 0) {
        offset = 5400;
    }
    sliderLine.style.left = -offset + 'px';
});