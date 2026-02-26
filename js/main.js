// ═══════════════════════════════════════════════════════
// g-digital — Enhanced JS
// ═══════════════════════════════════════════════════════

// ── Navbar scroll effect ──
const nav = document.querySelector('.nav-main');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('shadow-lg', 'shadow-gray-200/50');
      nav.classList.remove('border-transparent');
      nav.classList.add('border-gray-100');
    } else {
      nav.classList.remove('shadow-lg', 'shadow-gray-200/50');
      nav.classList.remove('border-gray-100');
      nav.classList.add('border-transparent');
    }
  });
}

// ── Mobile menu toggle ──
const mobileToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    mobileOverlay?.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
    
    // Animate hamburger to X
    const bars = mobileToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
      bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      bars[0].style.transform = '';
      bars[1].style.opacity = '1';
      bars[2].style.transform = '';
    }
  });
  
  mobileOverlay?.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    const bars = mobileToggle.querySelectorAll('span');
    bars[0].style.transform = '';
    bars[1].style.opacity = '1';
    bars[2].style.transform = '';
  });

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileOverlay?.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      const bars = mobileToggle.querySelectorAll('span');
      bars[0].style.transform = '';
      bars[1].style.opacity = '1';
      bars[2].style.transform = '';
    });
  });
}

// ── Intersection Observer for animations ──
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in').forEach(el => {
  observer.observe(el);
});

// ── Active nav link ──
const path = window.location.pathname;
document.querySelectorAll('[data-nav-link]').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path || 
      (href === '/' && (path === '/' || path === '/index.html')) ||
      (path.includes('soluciones') && a.textContent.trim().includes('Soluciones')) ||
      path.endsWith(href)) {
    a.classList.add('text-primary', 'font-semibold');
    a.classList.add('active');
  }
});

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Counter animation for stats ──
function animateCounter(el) {
  const target = el.dataset.count;
  if (!target) return;
  
  const isNumeric = !isNaN(parseInt(target));
  if (!isNumeric) {
    el.textContent = target;
    return;
  }
  
  const num = parseInt(target);
  const suffix = target.replace(/\d/g, '');
  let current = 0;
  const step = Math.ceil(num / 40);
  const timer = setInterval(() => {
    current += step;
    if (current >= num) {
      current = num;
      clearInterval(timer);
    }
    el.textContent = current.toLocaleString('es-ES') + suffix;
  }, 30);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => {
  counterObserver.observe(el);
});

// ── Resource filters ──
document.querySelectorAll('[data-filter-btn]').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('[data-filter-btn]').forEach(b => {
      b.classList.remove('bg-primary', 'text-white', 'border-primary');
      b.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
    });
    this.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
    this.classList.add('bg-primary', 'text-white', 'border-primary');
    
    const filter = this.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        card.style.opacity = '0';
        card.style.transform = 'translateY(16px)';
        setTimeout(() => {
          card.style.transition = 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ── Contact form ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="ph ph-check-circle mr-2"></i>Enviado correctamente';
    btn.classList.remove('bg-accent');
    btn.classList.add('bg-green-600');
    btn.disabled = true;
    
    setTimeout(() => {
      this.reset();
      btn.innerHTML = originalText;
      btn.classList.add('bg-accent');
      btn.classList.remove('bg-green-600');
      btn.disabled = false;
    }, 3000);
  });
}
