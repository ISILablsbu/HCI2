document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".hero-carousel");
  if (!root) return;

  const slides = root.querySelectorAll(".slide");
  const nextBtn = root.querySelector(".next");
  const prevBtn = root.querySelector(".prev");

  let current = 0;
  let timer = null;
  const DELAY = 6000;

  function showSlide(i) {
    slides.forEach((s) => s.classList.remove("active"));
    slides[i].classList.add("active");
    current = i;
  }

  function next() {
    showSlide((current + 1) % slides.length);
  }
  function prev() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function start() {
    timer = setInterval(next, DELAY);
  }
  function reset() {
    clearInterval(timer);
    start();
  }

  nextBtn?.addEventListener("click", () => {
    next();
    reset();
  });
  prevBtn?.addEventListener("click", () => {
    prev();
    reset();
  });

  start();
});
