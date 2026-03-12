/* =============================================
   121212 LAW — script.js
   Scroll progress, nav shadow, hamburger, form
   ============================================= */

(function () {
  'use strict';

  /* ---------- Scroll Progress Bar ---------- */
  const progressBar = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  }

  /* ---------- Nav Shadow on Scroll ---------- */
  const navbar = document.getElementById('navbar');
  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', function () {
    updateScrollProgress();
    updateNavbar();
  }, { passive: true });

  updateScrollProgress();
  updateNavbar();

  /* ---------- Hamburger / Mobile Menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Legal Help Form Submit ---------- */
  const helpForm = document.getElementById('help-form');
  const formSuccess = document.getElementById('form-success');

  if (helpForm) {
    helpForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Disclaimer reminder
      const confirmed = window.confirm(
        'IMPORTANT REMINDER\n\n' +
        'This form does not create an attorney-client relationship. ' +
        '121212 Law is an educational platform only. The information you submit ' +
        'will not constitute legal advice.\n\n' +
        'Click OK to continue submitting your request.'
      );

      if (!confirmed) return;

      // Gather values (in a real build, these would POST to a backend/service)
      const name = document.getElementById('help-name')?.value.trim();
      const email = document.getElementById('help-email')?.value.trim();
      const state = document.getElementById('help-state')?.value;
      const issueType = document.getElementById('help-issue')?.value;

      if (!name || !email || !state || !issueType) {
        alert('Please fill in all required fields.');
        return;
      }

      // Show success state
      helpForm.style.display = 'none';
      if (formSuccess) formSuccess.style.display = 'block';

      console.log('[121212 Law] Help request submitted:', { name, email, state, issueType });
    });
  }

  /* ---------- Smooth anchor scroll offset ---------- */
  // Account for fixed nav height (68px + 3px progress bar)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ---------- Card entrance animation (Intersection Observer) ---------- */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply initial state and observe
  const animateEls = document.querySelectorAll(
    '.rights-card, .policy-card, .resource-card, .contrib-card, .article-card-sm'
  );
  animateEls.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease ' + (i * 0.06) + 's, transform 0.5s ease ' + (i * 0.06) + 's, border-color 0.25s ease, box-shadow 0.25s ease';
    observer.observe(el);
  });

})();
