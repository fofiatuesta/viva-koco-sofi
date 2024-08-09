document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.photo-slider');
    const images = Array.from(slider.children);
    const totalImages = images.length;
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.arrow.left').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        updateSlider();
    });

    document.querySelector('.arrow.right').addEventListener('click', () => {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });
});



document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    autoSlide();

    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        sideMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open'); // 스크롤 잠금
    });
});

let slideIndex = 1;
let slideInterval;

// 다음/이전 컨트롤
function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    autoSlide();
}

// 현재 슬라이드 컨트롤
function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    autoSlide();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function autoSlide() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 5000); // 5초마다 슬라이드 변경
}