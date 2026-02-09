const navToggle = document.querySelector(".navbar__toggle");
const navLinks = document.querySelector(".navbar__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const faqItems = document.querySelectorAll(".faq__item");
faqItems.forEach((item) => {
  const button = item.querySelector("button");
  if (button) {
    button.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

const fadeIns = document.querySelectorAll(".fade-in");
fadeIns.forEach((section) => observer.observe(section));
