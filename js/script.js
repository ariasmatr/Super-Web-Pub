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

  $(document).ready(function () {
    // Al hacer clic en una imagen
    $(".img-gallery").on("click", function (e) {
      e.preventDefault();
  
      // Limpiar carrusel anterior
      const carouselInner = $("#galleryCarousel .carousel-inner");
      carouselInner.empty();
  
      // Obtener todas las imágenes de la sección actual
      const gallerySection = $(this).closest(".row").find(".img-gallery img");
  
      // Crear los slides del carrusel
      gallerySection.each(function (index) {
        const src = $(this).attr("src");
        const alt = $(this).attr("alt");
        const isActive = index === 0 ? "active" : "";
  
        const carouselItem = `
          <div class="carousel-item ${isActive}">
            <img src="${src}" class="d-block w-100" alt="${alt}">
          </div>
        `;
  
        carouselInner.append(carouselItem);
      });
  
      // Abrir el modal
      $("#galleryModal").modal("show");
    });
  });
  
  
  