console.log("me mato, cosorro");

  console.log("necesito ayuda");

  document.querySelectorAll('.img-gallery-1').forEach((img) => {
    img.addEventListener('click', function () {
      const slideTo = this.getAttribute('data-slide-to');
      const carousel = document.querySelector('#carouselExampleIndicators');
      const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
      carouselInstance.to(slideTo);
    });
  });
  

