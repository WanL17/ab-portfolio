function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function toggleInfo() {
  const info = document.getElementById('moreInfo');
  const btn  = event.target;

  info.classList.toggle('visible');

  if (info.classList.contains('visible')) {
    btn.textContent = 'Réduire';
  } else {
    btn.textContent = 'En savoir plus';
  }
}

function copyEmail() {
  const email = 'alexisberlet17@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const toast = document.getElementById('toast');
    toast.textContent = `✓ "${email}" is copied.`;
    clearTimeout(copyEmail._t);
    copyEmail._t = setTimeout(() => { toast.textContent = ''; }, 4000);
  }).catch(() => {
    const toast = document.getElementById('toast');
    toast.textContent = 'Adresse : alexisberlet17@gmail.com';
  });
}

const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(16px)';
  card.style.transition = 'opacity 0.45s ease, transform 0.45s ease, border-color 0.22s ease';
  observer.observe(card);
});
