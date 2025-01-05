console.log("me mato, cosorro");

/* LIGHT/DARK MODE */
document.getElementById('switchMode').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light');
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark');
    }
  });
  console.log("necesito ayuda");

  // Escuchamos el evento de clic en las imágenes
document.querySelectorAll('.img-gallery-1').forEach((img, index) => {
    img.addEventListener('click', function () {
      const slideTo = this.getAttribute('data-slide-to'); // Obtenemos el índice de la imagen clicada
      console.log("necesito ayuda"); // Verificamos el índice correcto
  
      const modal = document.querySelector('#exampleModal'); // Referencia al modal
      console.log("Modal seleccionado:", modal ? "Sí" : "No"); // Verificamos si el modal existe
  
      // Antes de mostrar el modal, configuramos el carrusel
      modal.addEventListener('show.bs.modal', function () {
        const carousel = document.querySelector('#carouselExampleIndicators'); // Referencia al carrusel
        console.log("Carrusel encontrado:", carousel ? "Sí" : "No"); // Verificamos si el carrusel existe
  
        const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
        console.log("Instancia del carrusel creada o existente:", carouselInstance); // Confirmamos que la instancia es válida
  
        // Movemos el carrusel a la diapositiva correspondiente
        carouselInstance.to(slideTo);
        console.log(`Moviendo el carrusel a la diapositiva: ${slideTo}`); // Confirmamos el movimiento
      }, { once: true }); // Aseguramos que el evento solo se ejecute una vez por apertura de modal
    });
  });
  