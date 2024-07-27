$(document).ready(function () {
    function setupCarousel(carouselId) {
        let currentIndex = 0;
        const $carousel = $('#' + carouselId);
        const $slides = $carousel.find('.slide2');
        const $dots = $carousel.find('.dot2');
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

        setInterval(nextSlide, 3500); // Adjust interval as needed

        showSlide(currentIndex);
    }

    // Initialize the new carousel
    setupCarousel('mainID2');
});