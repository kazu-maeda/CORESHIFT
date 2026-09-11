document.addEventListener("DOMContentLoaded", () => {
  initFaqAccordion();
  initScrollReveal();
  initCountUp();
  initMobileNav();
});

function initMobileNav() {
  const toggle = document.querySelector(".header__menu-toggle");
  const nav = document.getElementById("mobile-nav");
  if (!toggle || !nav) return;

  const closeNav = () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("no-scroll", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

function initFaqAccordion() {
  const questions = document.querySelectorAll(".faq__question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = document.getElementById(question.getAttribute("aria-controls"));
      const isOpen = question.getAttribute("aria-expanded") === "true";

      question.setAttribute("aria-expanded", String(!isOpen));
      answer.classList.toggle("is-open", !isOpen);
    });
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (targets.length === 0) return;

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

function initCountUp() {
  const targets = document.querySelectorAll("[data-count-to]");
  if (targets.length === 0) return;

  const animate = (el) => {
    const end = parseFloat(el.getAttribute("data-count-to"));
    const decimals = parseInt(el.getAttribute("data-count-decimals") || "0", 10);
    const suffix = el.getAttribute("data-count-suffix") || "";
    const duration = 1200;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = end * eased;
      el.textContent = value.toFixed(decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = end.toFixed(decimals) + suffix;
      }
    };

    requestAnimationFrame(step);
  };

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  targets.forEach((el) => observer.observe(el));
}
