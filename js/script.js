ScrollReveal().reveal('.featured-info', {
  origin: 'left',
  distance: '80px',
  duration: 1000,
  delay: 100,
  easing: 'ease-in-out',
  reset: true  // <--- here, this makes animation repeat on scroll
});

ScrollReveal().reveal('.featured-img', {
  origin: 'right',
  distance: '80px',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  reset: true
});

ScrollReveal().reveal('.project-card', {
  interval: 200,
  origin: 'bottom',
  distance: '60px',
  duration: 900,
  easing: 'ease-in-out',
  reset: true
});

ScrollReveal().reveal('.media-gallery', {
  origin: 'bottom',
  distance: '70px',
  duration: 1000,
  delay: 200,
  reset: true
});

ScrollReveal().reveal('.about p', {
  origin: 'bottom',
  distance: '60px',
  duration: 900,
  delay: 200,
  reset: true
});
const mediaSwiper = new Swiper('.media-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

 const slider = document.getElementById("mediaSlider");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let index = 0;
const cardWidth = 310; // 300px + 10px gap
const maxIndex = slider.children.length - 3;

// Manual scroll buttons
leftBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = maxIndex;
  updateSlider();
});

rightBtn.addEventListener("click", () => {
  index++;
  if (index > maxIndex) index = 0;
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Auto-slide every 4 seconds
setInterval(() => {
  index++;
  if (index > maxIndex) index = 0;
  updateSlider();
}, 4000);


  function scrollMedia(direction) {
    const container = document.getElementById('mediaScroll');
    const scrollAmount = 320; // how much to scroll (1 card + gap)
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  function toggleFAQ(element) {
  const answer = element.querySelector(".faq-answer");
  const isVisible = answer.style.display === "block";
  
  // Close all others
  document.querySelectorAll(".faq-answer").forEach((el) => el.style.display = "none");

  // Toggle current
  answer.style.display = isVisible ? "none" : "block";
}

function animateCounters() {
  const counters = document.querySelectorAll(".count");
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 200;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

let animated = false;
window.addEventListener("scroll", () => {
  const statsSection = document.querySelector("#stats");
  const rect = statsSection.getBoundingClientRect();
  if (!animated && rect.top < window.innerHeight) {
    animateCounters();
    animated = true;
  }
});
window.addEventListener("DOMContentLoaded", () => {
  let animated = false;

  function animateCounters() {
    const counters = document.querySelectorAll(".count");
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }

  window.addEventListener("scroll", () => {
    const statsSection = document.querySelector("#stats");
    const rect = statsSection.getBoundingClientRect();
    if (!animated && rect.top < window.innerHeight) {
      animateCounters();
      animated = true;
    }
  });
});
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
