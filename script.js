// ===============================
// Portfolio Website Script
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // Footer Year
  // ===============================
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ===============================
  // Scroll-triggered reveal for elements
  // ===============================
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target); // reveal once
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => revealObserver.observe(el));

  // ===============================
  // Navbar Slide Behavior (when scrolling to Portfolio)
  // ===============================
  const navbar = document.querySelector(".navbar");
  const portfolio = document.querySelector("#portfolio");

  const handleNavbarScroll = () => {
    const portfolioTop = portfolio.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (portfolioTop < windowHeight * 0.5) {
      navbar.classList.add("slide-left");
    } else {
      navbar.classList.remove("slide-left");
    }
  };

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll(); // Run once on load

 // ===============================
// Navbar Active Link Highlight
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

const highlightActiveSection = () => {
  const scrollY = window.scrollY;

  let foundActive = false;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
          foundActive = true;
        }
      });
    }
  });

  //  keep Home active
  if (!foundActive) {
    navLinks.forEach((link) => link.classList.remove("active"));
    const homeLink = document.querySelector('.navbar ul li a[href="#home"]');
    if (homeLink) homeLink.classList.add("active");
  }
};

window.addEventListener("scroll", highlightActiveSection);
highlightActiveSection(); // Run once on load

  window.addEventListener("scroll", highlightActiveSection);
  highlightActiveSection();

  // ===============================
  // Smooth Scroll for Nav Links
  // ===============================
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===============================
  // Smooth Scroll for Skill Cards
  // ===============================
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach(card => {
    card.addEventListener("click", () => {
      const target = document.querySelector(card.dataset.scroll);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===============================
  // Smooth Scroll for Portfolio Button
  // ===============================
  const portfolioBtn = document.querySelector(".portfolio-btn");
  if (portfolioBtn) {
    portfolioBtn.addEventListener("click", () => {
      const target = document.querySelector(portfolioBtn.dataset.scroll);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // ===============================
  // Contact Form Demo (no backend)
  // ===============================
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = document.getElementById("formStatus");
      if (status) {
        status.textContent = "Thanks! Your message is noted (demo).";
        status.style.display = "block";
      }
      form.reset();
    });
  }

  // ===============================
  // Section Reveal on Scroll
  // ===============================
  const allSections = document.querySelectorAll(".section");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    allSections.forEach((section) => {
      const boxTop = section.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };
document.addEventListener("DOMContentLoaded", () => {
  const typedTagline = document.querySelector(".typed-tagline");
  const taglines = [
    "Transforming ideas into real, functional projects with code",
    "Exploring endless possibilities through programming",
    "Building my journey as a Computer Engineering student"
  ];

  let i = 0; // tagline index
  let j = 0; // character index
  let currentTagline = "";
  let isDeleting = false;

  function typeEffect() {
    currentTagline = taglines[i];
    if (!isDeleting && j <= currentTagline.length) {
      typedTagline.textContent = currentTagline.substring(0, j);
      j++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && j >= 0) {
      typedTagline.textContent = currentTagline.substring(0, j);
      j--;
      setTimeout(typeEffect, 50);
    } else if (!isDeleting && j > currentTagline.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
    } else if (isDeleting && j < 0) {
      isDeleting = false;
      i = (i + 1) % taglines.length;
      setTimeout(typeEffect, 200);
    }
  }
  

  typeEffect();
});
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once on load
});


