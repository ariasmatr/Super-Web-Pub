// RESERVATIONS: Botón antidad de entradas

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


// Initialize ScrollMagic controller
const controller = new ScrollMagic.Controller();

// Get elements
const image = document.querySelector(".motorcycle__image");
const button = document.querySelector(".motorcycle__button");
const textContainer = document.querySelector(".motorcycle__text");
const textLines = document.querySelectorAll(".motorcycle__text-line");

// Create a scene for pinning and animation
new ScrollMagic.Scene({
  triggerElement: ".motorcycle",
  triggerHook: 0,
  duration: "200%" // Allows scrolling for twice the height of the viewport
})
  .setPin(".motorcycle__section")
  .on("progress", function (event) {
    const progress = event.progress;

    // Image scaling effect
    const scale = 1 + progress * 0.3; // Scale from 1 to 1.3
    image.style.transform = `scale(${scale})`;

    // Text fade-in effect
    textContainer.style.opacity = Math.min(progress * 2, 1);

    // Text lines appear one by one
    textLines.forEach((line, index) => {
      const lineProgress = (progress - index * 0.2) * 5;
      line.style.opacity = Math.min(Math.max(lineProgress, 0), 1);
      line.style.transform = `translateY(${
        20 * (1 - Math.min(lineProgress, 1))
      }px)`;
    });

    // Button fade-in effect
    if (progress > 0.5) {
      button.style.opacity = (progress - 0.5) * 2; // Fade in from 50% to 100% scroll
    } else {
      button.style.opacity = 0;
    }
  })
  .addTo(controller);

/**
 * Triggers a vibration effect to simulate an engine starting
 * @param {number} duration - The duration of the vibration in milliseconds
 */
function triggerEngineVibration(duration = 10000) {
  if (navigator.vibrate) {
    // Create a vibration pattern that alternates between 200ms on and 100ms off
    const patternStep = [200, 100];
    const patternRepeat = Math.floor(duration / 300);
    const vibrationPattern = Array(patternRepeat).fill(patternStep).flat();

    navigator.vibrate(vibrationPattern);
  } else {
    console.log("Vibration API not supported on this device.");
  }
}

// Add click event listener to the start engine button
document.getElementById("startEngine").addEventListener("click", function () {
  triggerEngineVibration(10000);
});



  
        
        
