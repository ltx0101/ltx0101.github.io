document.addEventListener("DOMContentLoaded", () => {
  const animateCards = () => {
    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
          }, 150 * index);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach((card) => {
      card.style.opacity = 0;
      observer.observe(card);
    });
  };

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!motionQuery || !motionQuery.matches) {
    animateCards();
  } else {
    document.querySelectorAll(".project-card").forEach(card => {
      card.style.opacity = 1;
    });
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('ServiceWorker registration successful');
      }).catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
});