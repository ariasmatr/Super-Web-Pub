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

        window.addEventListener('scroll', function() {
            const image = document.querySelector('.project-image-hero img');
            const scrollPosition = window.scrollY;
            
            // Modificar la escala de la imagen en función del scroll
            const scale = 1 - scrollPosition / 1000; // Ajusta el divisor según lo necesario
            
            if (image) {
                image.style.transform = `scale(${scale})`;
            }
        });

        
        
