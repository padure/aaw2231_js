let slideIndex = 1;
const TIME = 5000;

const changeSlide = (number) => {
    showSlide(slideIndex += number);
}

const currentSlide = (number) => {
    showSlide(slideIndex = number);
}  

const showSlide = (number) => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if(number > slides.length) slideIndex = 1;
    if( number < 1 ) slideIndex = slides.length;

    slides.forEach( slide => slide.style.display = "none" );
    dots.forEach( dot => dot.classList.remove('active') );

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');
}

setInterval( () => showSlide(slideIndex += 1), TIME);