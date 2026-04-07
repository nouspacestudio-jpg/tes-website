// ---------- DATA ----------
const projects = [
  { id: "brewco", title: "Brewco", category: "brand", year: "2024", heroImg: "projek images/heroprojekbrewco.jpg", overview: "Brewco is a specialty coffee branding project focused on creating a modern, minimal, and premium identity.", problem: "The challenge was to stand out in a saturated market while staying warm and approachable.", strategy: "A minimalist approach with strong typography and a consistent visual system.", process: "Research, concept, identity design, and brand application.Research, concept, identity design, and brand application.", result: "A cohesive and modern brand with a clear, premium presence.", images: ["projek images/brewco1.jpg", "projek images/brewco2.jpg"] },
  { id: "field-fallow", title: "Field & Fallow", category: "packaging", year: "2024", heroImg: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&auto=format", overview: "An artisanal goods brand needed packaging that reflected their craft and sustainability.", problem: "Existing packaging felt generic and didn't communicate values.", strategy: "We created a flexible packaging system using natural textures and earthy tones.", process: "Material exploration, structural design, visual identity, production specs.", result: "A distinctive packaging system that lifted shelf appeal by 35%.", images: ["https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format", "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&auto=format"] },
  { id: "aurelia", title: "Aurelia", category: "digital", year: "2024", heroImg: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&auto=format", overview: "A meditation app needed a calming yet structured digital identity.", problem: "The interface felt cluttered and inconsistent across platforms.", strategy: "We designed a serene design system with fluid motion and clear hierarchy.", process: "UX audit, visual language, component library, motion guidelines.", result: "User retention increased by 38% post-launch.", images: ["https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format"] },
  { id: "manifest", title: "Manifest", category: "brand", year: "2023", heroImg: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&auto=format", overview: "A creative collective needed a bold, modular identity.", problem: "Their visual language was outdated and didn't attract premium clients.", strategy: "We developed a flexible identity that adapts to different contexts.", process: "Workshops, identity design, brand guidelines, rollout.", result: "Won 5 major accounts in the first quarter after launch.", images: ["https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&auto=format", "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format"] },
  { id: "solara", title: "Solara", category: "digital", year: "2024", heroImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format", overview: "A clean energy startup needed a digital-first brand system.", problem: "Lack of cohesive presence across web and social media.", strategy: "We built a system focused on clarity and sustainability cues.", process: "Research, visual identity, responsive web components, social templates.", result: "Launched with 200% increase in qualified leads.", images: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format", "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format"] },
  { id: "terra", title: "Terra", category: "packaging", year: "2025", heroImg: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&auto=format", overview: "Organic skincare brand requiring a premium, eco-conscious packaging system.", problem: "Previous packaging felt cheap and inconsistent.", strategy: "We designed a modular system using recycled materials and minimalist graphics.", process: "Material testing, structural design, graphic identity.", result: "Packaging won a sustainable design award and boosted sales by 28%.", images: ["https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format", "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format"] }
];

const servicesList = [

  { id: "brand-identity", name: "Brand Identity", description: "A complete brand system designed for clarity, consistency, and long-term growth.", for: "Companies seeking a complete visual system.", deliverables: "Logo, palette, typography, guidelines, assets.", timeline: "6–10 weeks", detail: "From strategy to execution, we build systems that scale." },
  { id: "logo-design", name: "Logo Design", description: "Distinctive marks designed with meaning and structure — not decoration.", for: "Startups and established brands.", deliverables: "Primary logo, variations, usage guidelines.", timeline: "4–6 weeks", detail: "We create timeless marks that anchor your brand." },
  { id: "packaging-design", name: "Packaging Design", description: "Strategic packaging systems that connect product, brand, and customer experience.", for: "Product companies launching or refreshing packaging.", deliverables: "Structural concepts, mockups, specifications.", timeline: "8–12 weeks", detail: "From shelf to unboxing, every detail matters." },
  { id: "social-media-design", name: "Social Media Design", description: "Cohesive visual systems for consistent digital communication.", for: "Brands needing consistent digital presence.", deliverables: "Template systems, asset packs, motion graphics.", timeline: "4–8 weeks", detail: "Maintain brand integrity across all platforms." }
];

const newsList = [
    { 
        id: "news-1", 
        title: "Crafting Brewco: Building a Modern Coffee Brand from the Ground Up", 
        date: "April 2026", 
        excerpt: "Brewco is a branding project by Nouspace Studio focused on creating a modern, minimal, and premium coffee brand with a warm and consistent identity across all touchpoints.",
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*zhCNiz_UHpw9SH_yW_uJGA.jpeg",
		url: "https://medium.com/@nouspacestudio/crafting-brewco-building-a-modern-coffee-brand-from-the-ground-up-46529b08957b"
    },
    { 
        id: "news-2", 
        title: "Studio Update: New Workspace", 
        date: "March 2026", 
        excerpt: "Nouspace Studios kini hadir dengan ruang kolaborasi baru yang lebih kreatif.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
		url: "https://medium.com/@nouspacestudio/crafting-brewco-building-a-modern-coffee-brand-from-the-ground-up-46529b08957b"
    },
	    { 
        id: "news-3", 
        title: "Studio Update: New Workspace", 
        date: "March 2026", 
        excerpt: "Nouspace Studios kini hadir dengan ruang kolaborasi baru yang lebih kreatif.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
		url: "https://medium.com/@nouspacestudio/crafting-brewco-building-a-modern-coffee-brand-from-the-ground-up-46529b08957b"
    },
	    { 
        id: "news-4", 
        title: "Studio Update: New Workspace", 
        date: "March 2026", 
        excerpt: "Nouspace Studios kini hadir dengan ruang kolaborasi baru yang lebih kreatif.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
		url: "https://medium.com/@nouspacestudio/crafting-brewco-building-a-modern-coffee-brand-from-the-ground-up-46529b08957b"
    }
];

let currentProjectIndex = 0;

// Render functions
function renderWorkGrid() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `
    <div class="project-card" data-category="${p.category}" data-id="${p.id}">
      <div class="card-image"><img src="${p.heroImg}" alt="${p.title}"></div>
      <div class="card-content"><h3>${p.title}</h3><p class="small-text uppercase">${p.category === 'brand' ? 'Brand Identity' : p.category === 'packaging' ? 'Packaging' : 'Digital'}, ${p.year}</p></div>
    </div>
  `).join('');
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openCaseStudy(card.dataset.id));
  });
  applyFilter();
}

function applyFilter() {
  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  document.querySelectorAll('.project-card').forEach(card => {
    const cat = card.dataset.category;
    card.style.display = (activeFilter === 'all' || cat === activeFilter) ? 'block' : 'none';
  });
}

function openCaseStudy(projectId) {
  const idx = projects.findIndex(p => p.id === projectId);
  if (idx !== -1) currentProjectIndex = idx;
  renderCaseStudy(currentProjectIndex);
  showPage('case-study');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCaseStudy(index) {
  const p = projects[index];
  if (!p) return;
  const container = document.getElementById('case-study-content');
  container.innerHTML = `
    <span class="small-text uppercase" style="color:#145FCC;">Case study</span>
    <h1 style="margin: 20px 0 8px;">${p.title} · ${p.category === 'brand' ? 'Brand Identity' : p.category === 'packaging' ? 'Packaging' : 'Digital'}</h1>
    <p class="uppercase small-text">${p.year}</p>
    <div class="case-image"><img src="${p.heroImg}" alt="${p.title}"></div>
    <div class="case-grid">
      <div><h3>Overview</h3><p class="body-text">${p.overview}</p></div>
      <div><h3>Problem</h3><p class="body-text">${p.problem}</p></div>
      <div><h3>Strategy</h3><p class="body-text">${p.strategy}</p></div>
    </div>
    ${p.images.map(img => `<div class="case-image"><img src="${img}" alt=""></div>`).join('')}
    <div class="case-process">
      <div><h3>Process</h3><p class="body-text">${p.process}</p></div>
      <div><h3>Result</h3><p class="body-text">${p.result}</p></div>
    </div>
  `;
}

function renderServicesGrid() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = servicesList.map(s => `
    <div class="service-card" data-service="${s.id}">
      <h3>${s.name}</h3>
      <p class="small-text">${s.description}</p>
    </div>
  `).join('');
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      renderServiceDetail(card.dataset.service);
      showPage('service-detail');
    });
  });
}

function renderServiceDetail(serviceId) {
  const service = servicesList.find(s => s.id === serviceId) || servicesList[0];
  const container = document.getElementById('service-detail-content');
  container.innerHTML = `
    <h1>${service.name}</h1>
    <div class="service-detail-grid">
      <div><p class="small-text uppercase">Who it's for</p><p class="body-text">${service.for}</p></div>
      <div><p class="small-text uppercase">Deliverables</p><p class="body-text">${service.deliverables}</p></div>
      <div><p class="small-text uppercase">Timeline</p><p class="body-text">${service.timeline}</p></div>
    </div>
    <p class="body-text" style="max-width: 700px;">${service.detail}</p>
    <a class="btn nav-link" data-page="contact" style="margin-top: 48px; display: inline-block;">Start project →</a>
  `;
}

function renderNewsGrid() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  grid.innerHTML = newsList.map(n => `
    <a href="${n.url}" target="_blank" class="news-card" style="text-decoration: none; color: inherit;">
      <div class="card-image"><img src="${n.image}" alt="${n.title}"></div>
      <div class="card-content">
        <p class="small-text uppercase" style="color:#145FCC; margin-bottom:10px;">${n.date}</p>
        <h3>${n.title}</h3>
        <p class="small-text">${n.excerpt}</p>
      </div>
    </a>
  `).join('');
}

// Page navigation
const pages = {
  home: document.getElementById('home-page'),
  work: document.getElementById('work-page'),
  'case-study': document.getElementById('case-study-page'),
  services: document.getElementById('services-page'),
  news: document.getElementById('news-page'),
  'service-detail': document.getElementById('service-detail-page'),
  about: document.getElementById('about-page'),
  contact: document.getElementById('contact-page')
};

function showPage(pageId) {
  Object.values(pages).forEach(p => p?.classList.remove('active'));
  if (pages[pageId]) pages[pageId].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState(null, null, `#${pageId}`);
  if (pageId === 'work') renderWorkGrid();
  if (pageId === 'services') renderServicesGrid();
  if (pageId === 'news') renderNewsGrid();
  document.getElementById('navLinks')?.classList.remove('show');
}

// Event listeners
document.body.addEventListener('click', (e) => {
  const link = e.target.closest('.nav-link');
  if (link && link.dataset.page) {
    e.preventDefault();
    showPage(link.dataset.page);
  }
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter();
  });
});

document.getElementById('prev-case')?.addEventListener('click', () => {
  currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
  renderCaseStudy(currentProjectIndex);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState(null, null, '#case-study');
});

document.getElementById('next-case')?.addEventListener('click', () => {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  renderCaseStudy(currentProjectIndex);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState(null, null, '#case-study');
});

document.getElementById('backToWorkBtn')?.addEventListener('click', () => showPage('work'));

// Contact form with EmailJS
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    const company = document.getElementById('company')?.value;
    const budget = document.getElementById('budget')?.value;
    const projectType = document.getElementById('projectType')?.value;
    const timeline = document.getElementById('timeline')?.value;
    
    if (!name || !email || !message) {
      alert('Please fill in required fields: Name, Email, and Message');
      return;
    }
    
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMsg');
    const errorMsg = document.getElementById('errorMsg');
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    const templateParams = {
      from_name: name,
      from_email: email,
      company: company || 'Not provided',
      budget: budget || 'Not specified',
      project_type: projectType || 'Not specified',
      timeline: timeline || 'Not specified',
      message: message,
      to_email: 'nouspacestudio@gmail.com'
    };
    
    emailjs.send('service_xa9sikb', 'template_x71n9pl', templateParams)
      .then(() => {
        successMsg.classList.add('show');
        errorMsg.classList.remove('show');
        contactForm.reset();
        setTimeout(() => successMsg.classList.remove('show'), 5000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        errorMsg.classList.add('show');
        setTimeout(() => errorMsg.classList.remove('show'), 5000);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Start your project';
      });
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('h1, h2, h3, .project-card, .service-card, .feature-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Number animation for trust section
function animateNumbers() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;
  const numObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        let current = 0;
        const increment = target / 50;
        const updateNumber = () => {
          current += increment;
          if (current < target) {
            el.innerText = Math.floor(current);
            requestAnimationFrame(updateNumber);
          } else {
            el.innerText = target;
          }
        };
        updateNumber();
        numObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => numObserver.observe(el));
}

// Handle hash on load and popstate
function handleHash() {
  const hash = window.location.hash.substring(1);
  if (hash && pages[hash]) {
    showPage(hash);
  } else {
    showPage('home');
  }
}

window.addEventListener('popstate', handleHash);
handleHash();

// Initial renders
renderWorkGrid();
renderServicesGrid();
animateNumbers();