/* ============================================================
   FAC DUE s.r.l. — Main JavaScript
   ============================================================ */

/* 1. MOBILE HAMBURGER MENU
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }
});

/* 2. ABRASIVI CATEGORY FILTER
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      const cat = this.dataset.filter;
      cards.forEach(function (card) {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.opacity = '0';
          card.style.display = 'flex';
          setTimeout(function () { card.style.opacity = '1'; }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

/* 3. CONTACT FORM HANDLER
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    btn.textContent = 'INVIO...';
    btn.disabled = true;
    try {
      const res = await fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        this.reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      errorMsg.style.display = 'block';
      successMsg.style.display = 'none';
    }
    btn.textContent = 'INVIA';
    btn.disabled = false;
  });
});

/* 4. SMOOTH SCROLL for anchor links
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
