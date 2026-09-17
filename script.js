document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const signature = document.querySelector(".signature");
if (signature && window.matchMedia("(pointer:fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - .5) * 5;
    const y = (event.clientY / window.innerHeight - .5) * 3;
    signature.style.transform = `rotate(${-3 + x * .12}deg) translate(${x}px, ${y}px) scale(1.03)`;
  }, { passive: true });
}
