/**
 * g-digital — Components & Utilities
 * Handles: component loading, active nav, scroll-to-top, animations, analytics tracking, and URL prefilling.
 */

document.addEventListener('DOMContentLoaded', () => {
  loadComponents();
  initScrollToTop();
  initAnimations();
  prefillContactForm();
  captureUTMParams();
  initAnalyticsTracking();
});

/* ── Component Loading ── */
async function loadComponents() {
  try {
    const headerEl = document.getElementById('gd-header');
    const footerEl = document.getElementById('gd-footer');

    if (headerEl) {
      const headerRes = await fetch('/components/header.html');
      if (headerRes.ok) {
        headerEl.innerHTML = await headerRes.text();
        setActiveNav();
      }
    }

    if (footerEl) {
      const footerRes = await fetch('/components/footer.html');
      if (footerRes.ok) {
        footerEl.innerHTML = await footerRes.text();
      }
    }
  } catch (e) {
    console.error('Error loading components:', e);
  }
}

/* ── Active Navigation ── */
function setActiveNav() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('.gd-navbar .nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');

    if (!href) return;

    // Exact match for home
    if (href === '/index.html' && (path === '/' || path === '/index.html')) {
      link.classList.add('active');
    }
    // Soluciones: highlight for hub and sub-pages
    else if (href === '/soluciones.html' && (path.includes('/soluciones') || path === '/soluciones.html')) {
      link.classList.add('active');
    }
    // Other pages
    else if (href !== '/index.html' && href !== '/soluciones.html' && path === href) {
      link.classList.add('active');
    }
  });
}

/* ── Scroll to Top ── */
function initScrollToTop() {
  const btn = document.getElementById('scrollToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.pageYOffset > 300);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Scroll Animations ── */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
}

/* ── Contact Form URL Prefill ── */
function prefillContactForm() {
  const params = new URLSearchParams(window.location.search);

  const lineaParam = params.get('linea');
  const intencionParam = params.get('intencion');

  if (lineaParam) {
    const lineaSelect = document.getElementById('linea');
    if (lineaSelect) {
      const option = lineaSelect.querySelector(`option[value="${lineaParam}"]`);
      if (option) {
        lineaSelect.value = lineaParam;
      }
    }
  }

  if (intencionParam) {
    const intencionSelect = document.getElementById('intencion');
    if (intencionSelect) {
      const option = intencionSelect.querySelector(`option[value="${intencionParam}"]`);
      if (option) {
        intencionSelect.value = intencionParam;
      }
    }
  }
}

/* ── UTM Parameter Capture ── */
function captureUTMParams() {
  const params = new URLSearchParams(window.location.search);

  const utmFields = ['utm_source', 'utm_medium', 'utm_campaign'];
  utmFields.forEach(field => {
    const value = params.get(field);
    const input = document.getElementById(field);
    if (value && input) {
      input.value = value;
    }
  });

  // Capture referrer
  const referrerInput = document.getElementById('referrer');
  if (referrerInput && document.referrer) {
    referrerInput.value = document.referrer;
  }
}

/* ── Analytics Tracking ── */
function initAnalyticsTracking() {
  // Track clicks on elements with data-track attribute
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-track]');
    if (!target) return;

    const event = target.getAttribute('data-track');
    const label = target.getAttribute('data-track-label') || '';
    const page = window.location.pathname;

    // Send to analytics (console.log as placeholder)
    trackEvent(event, label, page);
  });

  // Track form submissions
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      trackEvent('form_submit', 'contacto', JSON.stringify({
        linea: data.linea,
        intencion: data.intencion
      }));

      // TODO: Replace with actual API endpoint
      console.log('📧 Form submission data:', data);

      // Show success feedback
      form.innerHTML = `
                <div class="text-center" style="padding:3rem 1rem;">
                    <div style="font-size:3rem; margin-bottom:1rem;">✅</div>
                    <h3>¡Gracias por contactarnos!</h3>
                    <p style="color:var(--gd-text-muted);">Hemos recibido tu solicitud. Te responderemos lo antes posible.</p>
                    <a href="/index.html" class="btn-gd-primary" style="margin-top:1.5rem; display:inline-block;">Volver al inicio</a>
                </div>
            `;
    });
  }
}

/**
 * Track an analytics event.
 * Replace this with your real analytics integration (GA4, GTM, etc.)
 */
function trackEvent(event, label, extra) {
  console.log(`📊 [Analytics] ${event} | ${label} | ${extra || ''}`);

  // Example GA4 integration (uncomment when ready):
  // if (typeof gtag === 'function') {
  //     gtag('event', event, {
  //         event_label: label,
  //         event_category: 'engagement',
  //         page_path: window.location.pathname
  //     });
  // }
}
