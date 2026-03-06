document.addEventListener('DOMContentLoaded', () => {

    /* ==================== PORTFOLIO FILTER ==================== */

    const categoryBtns = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (categoryBtns.length > 0) {

        categoryBtns.forEach(btn => {

            btn.addEventListener('click', () => {

                const category = btn.dataset.category;

                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                projectCards.forEach(card => {

                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }

                });

            });

        });

    }


    /* ==================== CONTACT FORM ==================== */

    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {

        contactForm.addEventListener('submit', (e) => {

            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
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


    /* ==================== GALLERY LIGHTBOX ==================== */

    const images = document.querySelectorAll(".project-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

images.forEach(img => {

    img.addEventListener("click", () => {

        const caption = img.parentElement.querySelector("figcaption").innerText;

        lightbox.classList.add("show");
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption;

    });

});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

});
