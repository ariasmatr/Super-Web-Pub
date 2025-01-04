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

document.addEventListener('DOMContentLoaded', function () {
    const decreaseBtn = document.getElementById('decreaseQuantity');
    const increaseBtn = document.getElementById('increaseQuantity');
    const ticketQuantity = document.getElementById('ticketQuantity');
    const ticketTotal = document.getElementById('ticketTotal');
    const totalAmount = document.getElementById('totalAmount');

    const ticketPrice = 20;
    const bookingFee = 0.75;

    let quantity = 1;

    function updateTotals() {
        const totalTicketPrice = quantity * ticketPrice;
        ticketTotal.textContent = `${totalTicketPrice}€`;
        totalAmount.textContent = `${(totalTicketPrice + bookingFee).toFixed(2)}€`;
    }

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            ticketQuantity.textContent = quantity;
            updateTotals();
        }
    });

    increaseBtn.addEventListener('click', () => {
        quantity++;
        ticketQuantity.textContent = quantity;
        updateTotals();
    });
});
