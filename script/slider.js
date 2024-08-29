let slideIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex + 1) % slides.length;
    const offset = -slideIndex * 100;
    document.querySelector('.slider-slides').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 5000);