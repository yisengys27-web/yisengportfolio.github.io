document.addEventListener('DOMContentLoaded', () => {

  // Navbar Sticky Effect on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Navigation Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile nav when link clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

  // Number Counter Animation for Statistics
  const counters = document.querySelectorAll('.stat-num');
  let animated = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1500; // 1.5 seconds
      const increment = target / (duration / 16);

      let current = 0;
      const updateCount = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          setTimeout(updateCount, 16);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Trigger counter animation when hero section is in view
  const heroCard = document.querySelector('.hero-card');
  if (heroCard) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animateCounters();
          animated = true;
        }
      });
    }, { threshold: 0.5 });

    observer.observe(heroCard);
  }

  // One-Click Email Copy functionality
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const emailText = 'Sw.support03@t-ogroup.com';
      navigator.clipboard.writeText(emailText).then(() => {
        copyBtn.innerHTML = '<i class="fas fa-check" style="color: #10b981;"></i>';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="far fa-copy"></i>';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }

});
