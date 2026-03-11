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

const prevBtn = document.getElementById("lightbox-prev");
const nextBtn = document.getElementById("lightbox-next");

let currentIndex = 0;

function showImage(index) {

    const img = images[index];
    const caption = img.parentElement.querySelector("figcaption").innerText;

    lightboxImg.src = img.src;
    lightboxCaption.textContent = caption;
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

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage(currentIndex);

});


nextBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage(currentIndex);

});


lightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


document.addEventListener("keydown", (e) => {

    if(!lightbox.classList.contains("show")) return;

    if(e.key === "ArrowRight"){
        nextBtn.click();
    }

    if(e.key === "ArrowLeft"){
        prevBtn.click();
    }

    if(e.key === "Escape"){
        lightbox.classList.remove("show");
    }

});

});
