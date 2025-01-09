console.log("me mato, cosorro");

  console.log("necesito ayuda");

  AOS.init();

  /* LOADER SCREEN */
function loadingScreen() {
  function startLoader() {
      let counterElement = document.querySelector(".count p");
      let currentValue = 0;

      function updateCounter() {
          if (currentValue < 100) {
              let increment = Math.floor(Math.random() * 10) + 1;
              currentValue = Math.min(currentValue + increment, 100);
              counterElement.textContent = currentValue;

              let delay = Math.floor(Math.random() * 200) + 25;
              setTimeout(updateCounter, delay);
          }
      }
      updateCounter();
  }

  gsap.set(".count", { opacity: 1 });
  gsap.set(".pre-loader", { scale: 1, display: "block" });
  gsap.set(".loader", { height: "100%" });
  gsap.set(".loader-bg", { height: "100%" });

  startLoader();

  gsap.to(".count", { opacity: 0, delay: 3.5, duration: 0.25 });

  let textWrapper = document.querySelector('.ml16');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: false })
      .add({
          targets: '.ml16 .letter',
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: 1500,
          delay: (el, i) => 30 * i
      })
      .add({
          targets: '.ml16 .letter',
          translateY: [0, 100],
          easing: "easeOutExpo",
          duration: 3000,
          delay: (el, i) => 2000 + 30 * i
      });

  gsap.to(".count", {
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.5,
      delay: 3.75,
  });

  gsap.to(".pre-loader", {
      scale: 0.5,
      ease: "power4.inOut",
      duration: 2,
      delay: 3,
  });

  gsap.to(".loader", {
      height: "0",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3.75,
  });

  gsap.to(".loader-bg", {
      height: "0",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 4,
  });

  gsap.to(".pre-loader", {
      display: "none",
      delay: 4.5, 
  });
}

/* LIGHT/DARK MODE SEGÚN NAVEGADOR Y SE GUARDA */
function getInitialTheme() {
  const savedTheme = localStorage.getItem('data-bs-theme');
  if (savedTheme) {
      return savedTheme;
  }
  if (window.matchMedia) {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDarkScheme ? 'dark' : 'light';
  }
  return 'light';
}
function updateIcon(theme) {
  const switchModeIcon = document.getElementById('switchMode');
  if (theme === 'dark') {
      switchModeIcon.classList.remove('bi-brightness-low-fill','fs-3');
      switchModeIcon.classList.add('bi-moon-fill','fs-4');
  } else {
      switchModeIcon.classList.remove('bi-moon-fill','fs-4');
      switchModeIcon.classList.add('bi-brightness-low-fill','fs-3');
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const initialTheme = getInitialTheme();
  document.documentElement.setAttribute('data-bs-theme', initialTheme);
  updateIcon(initialTheme);
  loadingScreen()
});
document.getElementById('switchMode').addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('data-bs-theme', newTheme);
  updateIcon(newTheme);
  loadingScreen()
});


/* NAV BUTTON */
let menuOpener = document.getElementById('navButton');
let menuWin = document.getElementById('menuWindow');
let toggle = document.querySelector('.toggle input')
let clickCount = 0;
const menuItems = document.querySelectorAll("li.menuItem");
menuOpener.addEventListener('click',()=>{
  console.log('asdaddfsadf')
  clickCount++;
  if (clickCount % 2 === 0) {
  if (menuWin.classList.contains('menuHidden')) {
      menuWin.classList.remove('menuHidden');
      menuWin.classList.add('menuShown');
      setTimeout(() => {
          for (let i = menuItems.length - 1; i >= 0; i--) {
              setTimeout(() => {
                  menuItems[i].classList.remove("menuItem");
                  menuItems[i].classList.add("animate");
              }, (menuItems.length - 1 - i) * 100); 
          }
      }, 500);
  } else {
      menuWin.classList.remove('menuShown');
      menuWin.classList.add('menuHidden');
      const animate = document.querySelectorAll("li.animate");
      setTimeout(() => {
          animate.forEach((item) => {
                  item.classList.remove("animate");
                  item.classList.add("menuItem");
          });
      }, 400);
  }
  }
});

  
  document.querySelectorAll('.img-gallery-1').forEach((img) => {
    img.addEventListener('click', function () {
      const slideTo = this.getAttribute('data-slide-to');
      const carousel = document.querySelector('#carouselExampleIndicators');
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
