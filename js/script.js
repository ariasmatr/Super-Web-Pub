$(document).ready(function () {
    "use strict";
    let indice = 1;
    
    function setImagen() {
        console.log("set. indice=" + indice);
        $(".carousel-item").css("display", "none");
        $("#circles > div").attr("class", "");

        $(".carousel-item").eq(indice - 1).css("display", "block");
        $("#circles > div").eq(indice - 1).attr("class", "active");

        if (indice === $(".carousel-item").length) {
            indice = 1;
        } else {
            indice += 1;
        }
        // Se añade el temporizador de 2s (2000ms)
        setTimeout(setImagen, 3000); // Cambiado a 3 segundos
    }

    setImagen();
});





// RESERVATIONS: Botón cantidad de entradas

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


