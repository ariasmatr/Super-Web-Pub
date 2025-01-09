console.log("me mato, cosorro");

  console.log("necesito ayuda");

  /* document.querySelectorAll('.img-gallery-1').forEach((img) => {
    img.addEventListener('click', function () {
      const slideTo = this.getAttribute('data-slide-to');
      const carousel = document.querySelector('#carouselExampleIndicators1');
      const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
      carouselInstance.to(slideTo);
    });
  }); 

document.querySelectorAll('.img-gallery-2').forEach((img) => {
  img.addEventListener('click', function () {
    const slideTo = this.getAttribute('data-slide-to');
    const carousel = document.querySelector('#carouselExampleIndicators2');
    const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
    carouselInstance.to(slideTo);
  });
});
  
document.querySelectorAll('.img-gallery-3').forEach((img) => {
    img.addEventListener('click', function () {
      const slideTo = this.getAttribute('data-slide-to');
      const carousel = document.querySelector('#carouselExampleIndicators3');
      const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
      carouselInstance.to(slideTo);
    });
  }); 
 */

  $('.img-gallery-1').on('click', function () {
    const slideTo = $(this).data('slide-to'); 
    const carousel = $('#carouselExampleIndicators1');
    const carouselInstance = bootstrap.Carousel.getInstance(carousel[0]) || new bootstrap.Carousel(carousel[0]);
    carouselInstance.to(slideTo);
  });
  
  $('.img-gallery-2').on('click', function () {
    const slideTo = $(this).data('slide-to'); 
    const carousel = $('#carouselExampleIndicators2');
    const carouselInstance = bootstrap.Carousel.getInstance(carousel[0]) || new bootstrap.Carousel(carousel[0]);
    carouselInstance.to(slideTo);
  });
  
  $('.img-gallery-3').on('click', function () {
    const slideTo = $(this).data('slide-to'); 
    const carousel = $('#carouselExampleIndicators3'); 
    const carouselInstance = bootstrap.Carousel.getInstance(carousel[0]) || new bootstrap.Carousel(carousel[0]);
    carouselInstance.to(slideTo);
  });
  