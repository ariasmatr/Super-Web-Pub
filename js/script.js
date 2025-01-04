const decreaseBtn = document.getElementById('decrease-btn');
        const increaseBtn = document.getElementById('increase-btn');
        const quantityElement = document.getElementById('quantity');

        decreaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = quantity - 1;
            }
        });

        increaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1;
        });
