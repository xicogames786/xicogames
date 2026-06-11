/* =========================================
   XICO GAMES — main.js
   ========================================= */

(function () {
  "use strict";

  /* ── Mobile navigation ── */
  const hamburger = document.querySelector(".hamburger");
  const navDrawer  = document.querySelector(".nav-drawer");

  if (hamburger && navDrawer) {
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.toggle("open");
      navDrawer.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen);
    });

    // Close drawer when a link is tapped
    navDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navDrawer.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navDrawer.contains(e.target)) {
        hamburger.classList.remove("open");
        navDrawer.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ── Active nav link (based on current page) ── */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .nav-drawer a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  /* ── Contact form – mailto fallback ── */
  const contactForm = document.getElementById("contact-form");
  const formSuccess  = document.getElementById("form-success");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name    = contactForm.querySelector('[name="name"]').value.trim();
      const email   = contactForm.querySelector('[name="email"]').value.trim();
      const subject = contactForm.querySelector('[name="subject"]').value;
      const message = contactForm.querySelector('[name="message"]').value.trim();

      const mailtoSubject = encodeURIComponent(`[Xico Games] ${subject} — from ${name}`);
      const mailtoBody    = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:contact@xicogames.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Show success state after a short delay
      setTimeout(() => {
        contactForm.style.display = "none";
        if (formSuccess) {
          formSuccess.style.display = "block";
        }
      }, 800);
    });
  }

  /* ── Scroll-reveal (lightweight IntersectionObserver) ── */
  const revealEls = document.querySelectorAll(
    ".game-card, .about-card, .contact-link, .value-item"
  );

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(el);
    });
  }

  /* ── Counter animation on stats ── */
  const counters = document.querySelectorAll(".stat-number[data-target]");

  if ("IntersectionObserver" in window && counters.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => counterObserver.observe(c));
  }

  function animateCounter(el) {
    const target  = parseFloat(el.dataset.target);
    const suffix  = el.dataset.suffix || "";
    const decimal = el.dataset.decimal === "true";
    const duration = 1800;
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      const value    = eased * target;

      el.textContent = (decimal ? value.toFixed(1) : Math.floor(value)) + suffix;

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  /* ── Nav background on scroll ── */
  const siteNav = document.querySelector(".site-nav");
  if (siteNav) {
    const updateNav = () => {
      siteNav.style.borderBottomColor =
        window.scrollY > 20
          ? "rgba(255,255,255,0.1)"
          : "rgba(255,255,255,0.07)";
    };
    window.addEventListener("scroll", updateNav, { passive: true });
  }

  /* ── Current year in footer ── */
  const yearEls = document.querySelectorAll(".current-year");
  yearEls.forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
