document.addEventListener("DOMContentLoaded", () => {

  /* ==================== PORTFOLIO FILTER ==================== */
const categoryBtns = document.querySelectorAll('.category-btn');
const projectCards = document.querySelectorAll('.project-card');

if (categoryBtns.length > 0) {

  function applyFilter(category) {

    categoryBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });

    projectCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {

      const category = btn.dataset.category;

      // Guardar el filtro elegido
      sessionStorage.setItem('portfolioFilter', category);

      // Aplicar filtro
      applyFilter(category);
    });
  });

  // Recuperar el último filtro elegido
  const savedFilter = sessionStorage.getItem('portfolioFilter') || 'all';

  applyFilter(savedFilter);
}

  /* ==================== CONTACT FORM ==================== */
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message!');
      contactForm.reset();
    });
  }

  /* ==================== MOBILE MENU ==================== */
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  document.addEventListener("click", (e) => {

  const isClickInsideNav = e.target.closest(".nav");
  const isMenuOpen = navLinks.classList.contains("show");

  if (!isClickInsideNav && isMenuOpen) {
    navLinks.classList.remove("show");
  }

});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

  /* ==================== LIGHTBOX ==================== */
  const images = document.querySelectorAll(".project-gallery img");
  const lightbox = document.getElementById("lightbox");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const closeBtn = document.getElementById("lightbox-close");

  if (images.length > 0 && lightbox && prevBtn && nextBtn) {

    let currentIndex = 0;

     closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        lightbox.classList.remove("show");
    });


    function showImage(index) {
      const img = images[index];
      const caption = img.parentElement.querySelector("figcaption").innerText;
      document.getElementById("lightbox-img").src = img.src;
      document.getElementById("lightbox-caption").textContent = caption;
    }

    images.forEach((img, index) => {
      img.addEventListener("click", () => {
        currentIndex = index;
        lightbox.classList.add("show");
        showImage(currentIndex);
      });
    });

    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("show");
    });
  }

  /* ==================== HERO SLIDER ==================== */
  const slides = document.querySelectorAll('.hero-slide');

  if (slides.length > 0) {
    let current = 0;

    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 3000);
  }

});