/* Capital Pavement Services — Main JavaScript */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Mobile nav toggle ── */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (navToggle && mobileNav) {
    const spans = navToggle.querySelectorAll('span');

    function openMenu() {
      mobileNav.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    }

    function closeMenu() {
      mobileNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }

    navToggle.addEventListener('click', function () {
      if (mobileNav.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    /* Close on link click */
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (
        mobileNav.classList.contains('open') &&
        !mobileNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /* ── Active nav link ── */
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  if (currentFile === '') currentFile = 'index.html';

  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (
      href === currentFile ||
      (currentFile === 'index.html' && (href === 'index.html' || href === './'))
    ) {
      link.classList.add('active');
    }
  });

  /* ── Subtle nav background on scroll ── */
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener(
      'scroll',
      function () {
        if (window.scrollY > 10) {
          nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
        } else {
          nav.style.boxShadow = '';
        }
      },
      { passive: true }
    );
  }

  /* ── Netlify contact form UX ── */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      var btn = contactForm.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Sending…';
        btn.disabled = true;
      }
    });
  }
});
