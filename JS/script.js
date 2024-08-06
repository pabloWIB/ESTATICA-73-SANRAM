// LOAD ANIMATION 

$(function(){
    setTimeout(function(){
        $("#navAnimation").addClass("navAfter");
        $("#headerAnimation").addClass("headerAfter");
    }, 500);
});

// LOAD ANIMATION ---

// CAROUSEL 

$(document).ready(function () {
    // Initialize the first carousel
    function setupCarousel1() {
        let currentIndex = 0;
        const $carousel = $('#mainID1');
        const $slides = $carousel.find('.slide');
        const $dots = $carousel.find('.dot');
        const slideCount = $slides.length;

        function showSlide(index) {
            $slides.each(function (i) {
                $(this).css('transform', 'translateX(' + (-100 * index) + '%)');
            });
            $dots.removeClass('active');
            $dots.eq(index).addClass('active');
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            showSlide(currentIndex);
        }

        $dots.each(function (index) {
            $(this).click(function () {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });

        setInterval(nextSlide, 3500);

        showSlide(currentIndex);
    }

    // Initialize the second carousel with different behavior
    function setupCarousel2() {
        let currentIndex = 0;
        const $carousel = $('#mainID2');
        const $slides = $carousel.find('.slide');
        const $dots = $carousel.find('.dot');
        const slideCount = $slides.length;

        function showSlide(index) {
            $slides.each(function (i) {
                $(this).css('opacity', i === index ? 1 : 0);
            });
            $dots.removeClass('active');
            $dots.eq(index).addClass('active');
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            showSlide(currentIndex);
        }

        $dots.each(function (index) {
            $(this).click(function () {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });

        setInterval(nextSlide, 5000); // Different interval for the second carousel

        showSlide(currentIndex);
    }

    // Initialize both carousels
    setupCarousel1();
    setupCarousel2();
});

// CAROUSEL ---

// VIEWPORT FUNCTION

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// VIEWPORT FUNCTION ---

// VIEWPORT ANIMATIONS 1

function toggleAnimationN1() {
    var targetSection = document.getElementById("mainID1");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

window.addEventListener("scroll", toggleAnimationN1);
window.addEventListener("resize", toggleAnimationN1);

toggleAnimationN1();

// VIEWPORT ANIMATIONS 1 ---

// VIEWPORT ANIMATIONS 3

function toggleAnimationN3() {
    var targetSection = document.getElementById("mainID3");
    var mainID3Get = document.getElementById('mainID3Get');
    if (isElementInViewport(targetSection)) {
        mainID3Get.classList.add('animationN1');
    } 
}

window.addEventListener("scroll", toggleAnimationN3);
window.addEventListener("resize", toggleAnimationN3);

toggleAnimationN3();

// VIEWPORT ANIMATIONS 3 ---

// VIEWPORT ANIMATIONS 4

function toggleAnimationN4() {
    var targetSection = document.getElementById("sectionAnim1");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('cardAnimationAfter');
    } 
}

window.addEventListener("scroll", toggleAnimationN4);
window.addEventListener("resize", toggleAnimationN4);

toggleAnimationN4();

// VIEWPORT ANIMATIONS 4 ---

// VIEWPORT ANIMATIONS 5

function toggleAnimationN5() {
    var targetSection = document.getElementById("sectionAnim2");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('cardAnimationAfter');
    } 
}

window.addEventListener("scroll", toggleAnimationN5);
window.addEventListener("resize", toggleAnimationN5);

toggleAnimationN5();

// VIEWPORT ANIMATIONS 5 ---

// VIEWPORT ANIMATIONS 6

function toggleAnimationN6() {
    var targetSection = document.getElementById("sectionAnim3");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('cardAnimationAfter');
    } 
}

window.addEventListener("scroll", toggleAnimationN6);
window.addEventListener("resize", toggleAnimationN6);

toggleAnimationN6();

// VIEWPORT ANIMATIONS 6 ---

// VIEWPORT ANIMATIONS 7

function toggleAnimationN7() {
    var targetSection = document.getElementById("sectionAnim4");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('cardAnimationAfter');
    } 
}

window.addEventListener("scroll", toggleAnimationN7);
window.addEventListener("resize", toggleAnimationN7);

toggleAnimationN7();

// VIEWPORT ANIMATIONS 7 ---

// RESET VIEWPORT ANIMATIONS

function scrollValue3() {
    var scroll = window.scrollY;
    if (scroll < 10) {
        mainID3Get.classList.remove('animationN1');

        sectionAnim1.classList.remove('cardAnimationAfter');
        sectionAnim2.classList.remove('cardAnimationAfter');
        sectionAnim3.classList.remove('cardAnimationAfter');
        sectionAnim4.classList.remove('cardAnimationAfter');
    } 
}

window.addEventListener('scroll', scrollValue3);

// RESET VIEWPORT ANIMATIONS ---

var date = new Date();
var dateCopyrightY = date.getFullYear();

var dateCopyright = document.getElementById('dateCopyright').textContent = dateCopyrightY;


document.addEventListener("DOMContentLoaded", function() {
    let productosVendidos = 11820;

    function actualizarProductosVendidos() {
        productosVendidos += 100;
        document.getElementById('productosVendidos').textContent = '+' + productosVendidos;
    }
    actualizarProductosVendidos();

    setInterval(actualizarProductosVendidos, 900000);
});

const productosVendidos = document.getElementById('productosVendidos').textContent = 11182;



const fechaInicio = new Date(2019, 0, 1); // 1 de enero de 2019



function calcularAñosDeExperiencia() {
    const fechaActual = new Date();
    const diferenciaAños = fechaActual.getFullYear() - fechaInicio.getFullYear();
    return diferenciaAños;
}

function actualizarExperiencia() {
    const añosDeExperiencia = calcularAñosDeExperiencia();
    const añosDeExperienciaElemento = document.getElementById('añosDeExperiencia');
    añosDeExperienciaElemento.textContent = '+' + añosDeExperiencia;
}

actualizarExperiencia();

var clienteSatisfechos = document.getElementById('clienteSatisfechos').textContent = '+' + 75;
var presenciaEnPaises = document.getElementById('presenciaEnPaises').textContent = '+' + 2;