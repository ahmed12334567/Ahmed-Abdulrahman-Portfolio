import './style.css';

/* =========================================================
   Data
   ========================================================= */
type TechItem = { name: string; icon: string };
type LearningItem = { name: string; icon: string; progress: number };
type Project = {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  glyph: string;
};
type WhyItem = { title: string; description: string; svg: string };

const techStack: TechItem[] = [
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/000000' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css/1572B6' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
  { name: 'REST API', icon: 'https://cdn.simpleicons.org/openapiinitiative/6BA539' },
];

const learningStack: LearningItem[] = [
  { name: 'Nest.js', icon: 'https://cdn.simpleicons.org/nestjs/E0234E', progress: 55 },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', progress: 40 },
  { name: 'GraphQL', icon: 'https://cdn.simpleicons.org/graphql/E10098', progress: 45 },
  { name: 'System Design', icon: 'https://cdn.simpleicons.org/diagramsdotnet/F08705', progress: 40 },
  { name: 'AWS', icon: 'https://api.iconify.design/logos:aws.svg', progress: 35 },
  { name: 'CI/CD', icon: 'https://cdn.simpleicons.org/githubactions/2088FF', progress: 50 },
  { name: 'OAuth2', icon: 'https://cdn.simpleicons.org/auth0/EB5424', progress: 60 },
];

const projects: Project[] = [
  {
    title: 'Library Management',
    description:
      'Production-grade authentication service with JWT access/refresh tokens, role-based access control, and email verification. Built with Express and PostgreSQL.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    repoUrl: 'https://github.com/ahmed12334567/Library-Management',
    glyph: 'lock',
  },
  {
    title: 'CommerceCore',
    description:
      'REST API for an e-commerce platform: product catalog, cart, orders, and Stripe checkout. Schema designed for inventory and audit trails in PostgreSQL.',
    tags: ['TypeScript', 'MySQL', 'REST'],
    repoUrl: 'https://github.com/ahmed12334567/B2B-Store',
    glyph: 'cart',
  },
  {
    title: 'RealtimeChat',
    description:
      'Real-time messaging backend with Socket.IO — typing indicators, presence, and rooms. Redis pub/sub for horizontal scaling across instances.',
    tags: ['Socket.IO', 'Node.js', 'WebSocket', 'TypeScript'],
    repoUrl: 'https://github.com/ahmed12334567/Real-time-chat',
    glyph: 'chat',
  }
];

const whyItems: WhyItem[] = [
  {
    title: 'Scalable API Architecture',
    description:
      'I design REST APIs that stay clean and fast as traffic and features grow — versioned, documented, and built for change.',
    svg: 'layers',
  },
  {
    title: 'Secure Authentication',
    description:
      'JWT, OAuth, and role-based access control implemented the right way — with refresh flows, verification, and least-privilege defaults.',
    svg: 'shield',
  },
  {
    title: 'Clean Database Design',
    description:
      'Normalized schemas, sensible indexes, and constraints that keep data consistent and queries fast as the product scales.',
    svg: 'database',
  },
  {
    title: 'Fast Learner & Adaptable',
    description:
      'I pick up new stacks quickly and care about doing it right — from cloud deployment to a new framework, I get to working code fast.',
    svg: 'rocket',
  },
];

/* =========================================================
   Inline SVG icon sets
   ========================================================= */
const projectGlyphs: Record<string, string> = {
  lock: '<svg fill="none" stroke="white" stroke-width="1.5" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  cart: '<svg fill="none" stroke="white" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2l2.5 12h11l2-8H6"/></svg>',
  chat: '<svg fill="none" stroke="white" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.5 8.5 0 1 1 21 11.5z"/></svg>',
  queue: '<svg fill="none" stroke="white" stroke-width="1.5" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10"/><circle cx="20" cy="18" r="2"/></svg>',
  chart: '<svg fill="none" stroke="white" stroke-width="1.5" viewBox="0 0 24 24"><path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-7"/></svg>',
  link: '<svg fill="none" stroke="white" stroke-width="1.5" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
};

const whySvgs: Record<string, string> = {
  layers:
    '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2l10 6-10 6L2 8l10-6zM2 16l10 6 10-6M2 12l10 6 10-6"/></svg>',
  shield:
    '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4"/></svg>',
  database:
    '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  rocket:
    '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
};

/* =========================================================
   Renderers
   ========================================================= */
function renderTechStack(): void {
  const grid = document.getElementById('stack-grid');
  if (!grid) return;
  grid.innerHTML = techStack
    .map(
      (t) => `
      <div class="tech-card">
        <img src="${t.icon}" alt="${t.name} logo" loading="lazy" />
        <span class="text-sm font-medium text-slate-700 dark:text-slate-200">${t.name}</span>
      </div>`
    )
    .join('');
}

function renderLearning(): void {
  const grid = document.getElementById('learning-grid');
  if (!grid) return;
  grid.innerHTML = learningStack
    .map(
      (l) => `
      <div class="learning-card">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img src="${l.icon}" alt="${l.name} logo" loading="lazy" class="w-8 h-8" />
            <span class="font-semibold text-slate-800 dark:text-slate-100">${l.name}</span>
          </div>
          <span class="learning-badge">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L9 9l-7 .75L7.5 14 6 21l6-3.5L18 21l-1.5-7L22 9.75 15 9z"/></svg>
            Learning
          </span>
        </div>
        <div>
          <div class="progress-track"><div class="progress-fill" data-progress="${l.progress}"></div></div>
          <p class="mt-1.5 text-xs text-slate-500 dark:text-slate-400">${l.progress}% explored</p>
        </div>
      </div>`
    )
    .join('');
}

function renderProjects(): void {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects
    .map(
      (p) => `
      <article class="project-card">
        <div class="project-thumb">
          ${projectGlyphs[p.glyph] ?? ''}
        </div>
        <div class="p-6 flex flex-col flex-1">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">${p.title}</h3>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">${p.description}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${p.tags.map((t) => `<span class="tech-pill">${t}</span>`).join('')}
          </div>
          <div class="mt-5 flex gap-3">
            <a href="${p.repoUrl}" target="_blank" rel="noopener" aria-label="GitHub repo" class="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-semibold hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z"/></svg>
              Code
            </a>
          </div>
        </div>
      </article>`
    )
    .join('');
}

function renderWhy(): void {
  const grid = document.getElementById('why-grid');
  if (!grid) return;
  grid.innerHTML = whyItems
    .map(
      (w) => `
      <div class="why-card">
        <div class="why-icon-wrap">${whySvgs[w.svg] ?? ''}</div>
        <h3 class="text-base font-bold text-slate-900 dark:text-white">${w.title}</h3>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">${w.description}</p>
      </div>`
    )
    .join('');
}

/* =========================================================
   Theme toggle (dark by default, persisted)
   ========================================================= */
function initTheme(): void {
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored === 'light') {
    document.documentElement.classList.remove('dark');
  }
  toggle?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

/* =========================================================
   Mobile menu
   ========================================================= */
function initMobileMenu(): void {
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  menu.querySelectorAll('.mobile-link').forEach((link) =>
    link.addEventListener('click', () => menu.classList.add('hidden'))
  );
}

/* =========================================================
   Navbar scroll state
   ========================================================= */
function initNavbarScroll(): void {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    if (window.scrollY > 24) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* =========================================================
   Smooth scroll for in-page anchors
   ========================================================= */
function initSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* =========================================================
   Scroll reveal via Intersection Observer
   ========================================================= */
function initReveal(): void {
  const els = document.querySelectorAll('.reveal, .stagger-children');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => observer.observe(el));
}

/* =========================================================
   Animate learning progress bars when visible
   ========================================================= */
function initProgressBars(): void {
  const fills = document.querySelectorAll<HTMLElement>('.progress-fill');
  if (!fills.length || !('IntersectionObserver' in window)) {
    fills.forEach((f) => {
      f.style.width = f.dataset.progress + '%';
      f.classList.add('animated');
    });
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.width = (el.dataset.progress ?? '0') + '%';
          window.setTimeout(() => el.classList.add('animated'), 1200);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );
  fills.forEach((f) => observer.observe(f));
}

/* =========================================================
   Hero entrance animations
   ========================================================= */
function initHeroReveal(): void {
  const heroEls = document.querySelectorAll('.hero-text-reveal, .hero-image-reveal');
  // Trigger after a short delay so the page feels alive
  window.setTimeout(() => {
    heroEls.forEach((el) => el.classList.add('visible'));
  }, 150);
}

/* =========================================================
   Floating particles in hero
   ========================================================= */
function initHeroParticles(): void {
  const container = document.getElementById('hero-particles');
  if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const count = 20;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('hero-particle');
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 15 + 10 + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.opacity = (Math.random() * 0.4 + 0.1).toString();
    container.appendChild(particle);
  }
}

/* =========================================================
   Active nav link tracking on scroll
   ========================================================= */
function initActiveNav(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
  );
  sections.forEach((s) => observer.observe(s));
}

/* =========================================================
   Contact form — EmailJS integration
   ========================================================= */
function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const success = document.getElementById('form-success');
  const errorMsg = document.getElementById('form-error');
  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;
  if (!form || !submitBtn) return;

  let isSending = false;
  const originalBtnText = submitBtn.textContent ?? 'Send Message';

  const showError = (field: string, msg: string): void => {
    const el = form.querySelector<HTMLInputElement>(`#${field}`);
    const err = form.querySelector<HTMLElement>(`[data-error-for="${field}"]`);
    if (el) el.classList.add('invalid');
    if (err) err.textContent = msg;
  };
  const clearError = (field: string): void => {
    const el = form.querySelector<HTMLInputElement>(`#${field}`);
    const err = form.querySelector<HTMLElement>(`[data-error-for="${field}"]`);
    if (el) el.classList.remove('invalid');
    if (err) err.textContent = '';
  };

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isSending) return;

    // Hide previous feedback
    success?.classList.add('hidden');
    errorMsg?.classList.add('hidden');

    let valid = true;
    ['name', 'email', 'message'].forEach(clearError);

    const name = (form.querySelector('#name') as HTMLInputElement).value.trim();
    const email = (form.querySelector('#email') as HTMLInputElement).value.trim();
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value.trim();

    if (name.length < 2) {
      showError('name', 'Please enter your name.');
      valid = false;
    }
    if (!emailRe.test(email)) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }
    if (message.length < 10) {
      showError('message', 'Message should be at least 10 characters.');
      valid = false;
    }

    if (!valid) return;

    // Loading state
    isSending = true;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const emailjs = await import('@emailjs/browser');

      const serviceId = import.meta.env.VITE_service_27e817g;
      const templateId = import.meta.env.VITE_template_9stpdwi;
      const publicKey = import.meta.env.VITE_sFVIWSevJiTAalYxk;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
          reply_to: email,
        },
        { publicKey },
      );

      form.reset();
      success?.classList.remove('hidden');
      window.setTimeout(() => success?.classList.add('hidden'), 5000);
    } catch {
      errorMsg?.classList.remove('hidden');
      window.setTimeout(() => errorMsg?.classList.add('hidden'), 5000);
    } finally {
      isSending = false;
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}


/* =========================================================
   Footer year
   ========================================================= */
function initYear(): void {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
}

/* =========================================================
   Boot
   ========================================================= */
function boot(): void {
  renderTechStack();
  renderLearning();
  renderProjects();
  renderWhy();
  initTheme();
  initMobileMenu();
  initNavbarScroll();
  initSmoothScroll();
  initReveal();
  initHeroReveal();
  initHeroParticles();
  initProgressBars();
  initActiveNav();
  initContactForm();
  initYear();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
