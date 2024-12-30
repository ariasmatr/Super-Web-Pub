$(document).ready(function () {
    const $grid = $('.grid');

    // Initialize Masonry
    $grid.masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true,
        gutter: 20,
    });

    // Ensure layout after all images are loaded
    $grid.imagesLoaded().progress(() => {
        $grid.masonry('layout');
    });

    // Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('show');
                observer.unobserve(entry.target);
            }
        });
    });

    // Attach observer to each grid item
    $('.grid-item').each(function () {
        observer.observe(this);
    });
});
