const slider = () => {
    const carousel = document.querySelector('.reviews__slider'),
          slides = document.querySelectorAll('.reviews__slider-item'),
          field = document.querySelector('.reviews__slider-wrapper'),
          left = document.querySelector('.reviews__slider-arrow-left'),
          right = document.querySelector('.reviews__slider-arrow-right'),
          width = window.getComputedStyle(carousel).width;
          let index = 1,
              offset = 0;

    field.style.display = 'flex';
    field.style.width = 100 * slides.length + '%';
    field.style.transition = '0.5s all';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    right.addEventListener('click', moveRight);
    left.addEventListener('click', moveLeft);

    (function() {
        if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        field.style.transform = `translateX(-${offset}px)`;
        active(index);
    }());

    function moveRight() {
        if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        field.style.transform = `translateX(-${offset}px)`;
        if(index == slides.length - 1){
            index = 0;
        } else{
            index++;
        }
        active(index);
    }

    function moveLeft() {
        if(offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1)
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
        field.style.transform = `translateX(-${offset}px)`;

        if(index == 0){
            index = slides.length - 1;
        } else{
            index--;
        }
        active(index);
    }

    function active(a){
        slides.forEach((item, i) => {
            if(i === a) {
                slides[i].classList.add('reviews__slider-item_active');
            } else{
                item.classList.remove('reviews__slider-item_active');
            }
        });
    }   
}


export default slider;