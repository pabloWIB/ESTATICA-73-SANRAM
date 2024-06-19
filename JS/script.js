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
    let currentIndex = 0;
    const slides = $('.slide');
    const dots = $('.dot');
    const slideCount = slides.length;

    function showSlide(index) {
        slides.each(function (i) {
            $(this).css('transform', 'translateX(' + (-100 * index) + '%)');
        });
        dots.removeClass('active');
        dots.eq(index).addClass('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }

    dots.each(function (index) {
        $(this).click(function () {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    setInterval(nextSlide, 3500);

    showSlide(currentIndex);
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



// VIEWPORT ANIMATIONS 2

function toggleAnimationN2() {
    var targetSection = document.getElementById("mainID2");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

window.addEventListener("scroll", toggleAnimationN2);
window.addEventListener("resize", toggleAnimationN2);

toggleAnimationN2();

// VIEWPORT ANIMATIONS 2 ---

// VIEWPORT ANIMATIONS 3

function toggleAnimationN3() {
    var targetSection = document.getElementById("mainID3");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
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
        mainID1.classList.remove('animationN1');
        mainID3.classList.remove('animationN1');

        sectionAnim1.classList.remove('cardAnimationAfter');
        sectionAnim2.classList.remove('cardAnimationAfter');
        sectionAnim3.classList.remove('cardAnimationAfter');
        sectionAnim4.classList.remove('cardAnimationAfter');
    } 
}

window.addEventListener('scroll', scrollValue3);

// RESET VIEWPORT ANIMATIONS ---