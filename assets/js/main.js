/**
 * Abbas Gandhi — Sales & Business Development Portfolio
 * Main Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle & Accessibility
  const menuBtn = document.getElementById('menu');
  const navLinks = document.getElementById('navlinks');

  if (menuBtn && navLinks) {
    const toggleMenu = (shouldOpen) => {
      const isOpen = typeof shouldOpen === 'boolean' 
        ? shouldOpen 
        : !navLinks.classList.contains('open');

      navLinks.classList.toggle('open', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.innerHTML = isOpen ? '✕' : '☰';
    };

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking any navigation link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Close menu when clicking outside the navigation bar
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        if (navLinks.classList.contains('open')) {
          toggleMenu(false);
        }
      }
    });

    // Close menu with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        toggleMenu(false);
        menuBtn.focus();
      }
    });
  }

  // 3. Navbar scroll effect
  const navbar = document.querySelector('.nav');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 4. Active Section Highlighting via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navAnchorLinks = document.querySelectorAll('.links a[href^="#"]');

  if ('IntersectionObserver' in window && sections.length && navAnchorLinks.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navAnchorLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // 5. Image Fallback Handler for Profile Portrait
  const portraitImg = document.querySelector('.portrait');
  if (portraitImg) {
    portraitImg.addEventListener('error', function onImageError() {
      // Fallback sequence if relative path varies in deployment
      const fallbackPaths = [
        'assets/images/abbas-gandhi.jpg',
        'assets/abbas-gandhi.jpg',
        'abbas-gandhi.jpg'
      ];
      
      const currentSrc = this.getAttribute('src');
      const nextFallback = fallbackPaths.find(p => !currentSrc.endsWith(p));

      if (nextFallback) {
        this.removeEventListener('error', onImageError);
        this.src = nextFallback;
      }
    });
  }
});
