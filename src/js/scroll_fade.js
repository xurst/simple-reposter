/* scroll_fade.js */

(function() {
    // Create and insert Scroll-to-Top Button
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.textContent = '↑ top';
    document.body.appendChild(scrollBtn);
  
    // Fade-in on scroll
    const fadeInElems = document.querySelectorAll('.fade-in');
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
    fadeInElems.forEach((el) => fadeInObserver.observe(el));
  
    // Scroll-to-Top button visibility
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });
  
    // Smooth scroll to top
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();
  