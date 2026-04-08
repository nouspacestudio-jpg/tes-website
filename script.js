// ---------- DATA ----------
const projects = [
  { id: "Brewco", title: "Brewco", category: "Brand Identity", year: "2024", heroImg: "projek images/heroprojekbrewco.jpg", overview: "Brewco is a specialty coffee branding project focused on creating a modern, minimal, and premium identity.", problem: "The challenge was to stand out in a saturated market while staying warm and approachable.", strategy: "A minimalist approach with strong typography and a consistent visual system.", process: "Research, concept, identity design, and brand application. Research, concept, identity design, and brand application.", result: "A cohesive and modern brand with a clear, premium presence.", images: ["projek images/brewco1.jpg", "projek images/brewco2.jpg"] },
  { id: "Khai", title: "Khai", category: "Brandbook", year: "2025", heroImg: "projek images/khai.jpg", overview: "Khai Home Decoration required a structured brand system to ensure consistency across all visual touchpoints.", problem: "The brand lacked a unified system, resulting in inconsistent visuals and unclear brand perception.", strategy: "We developed a comprehensive brand system focused on clarity, consistency, and a refined modern aesthetic.", process: "Research → Brand Direction → Visual System → Brand Guidelines", result: "A cohesive brand system that ensures consistency, strengthens perception, and supports long-term growth.", images: ["projek images/khai1.jpg", "projek images/khai2.jpg"] },
  { id: "Alanjo", title: "Alanjo", category: "Brand Applications", year: "2025", heroImg: "projek images/alanjo.jpg", overview: "A set of brand applications designed to bring the identity into a consistent and functional visual system.", problem: "The focus was to maintain clarity and consistency across various brand touchpoints.", strategy: "We applied the visual identity with a structured approach, ensuring balance, clarity, and adaptability.", process: "Research → Marketing Materials → Brand Assets", result: "A consistent visual presence that strengthens recognition and overall brand coherence.", images: ["projek images/alanjo1.jpg", "projek images/alanjo2.jpg"] },
  { id: "Barbershop 26", title: "Barbershop 26", category: "Brand Identity", year: "2025", heroImg: "projek images/barber26.jpg", overview: "Barbershop 26 needed a clear and distinctive identity to stand out in a competitive market.", problem: "The brand lacked consistency and recognition, making it difficult to build trust.", strategy: "We created a bold, structured logo system inspired by classic barbershop heritage with a modern approach.", process: "Research → Exploration → Construction → Refinement", result: "A stronger identity that improves recognition, consistency, and overall brand perception.", images: ["projek images/barber1.jpg", "projek images/barber2.jpg"] },
  { id: "Queen City Wealth", title: "Queen City Wealth", category: "Brand Applications", year: "2025", heroImg: "projek images/qcw.jpg", overview: "A series of brand applications designed to translate the identity into a refined and professional visual presence.", problem: "The challenge was to maintain consistency while applying the brand across multiple corporate touchpoints.", strategy: "We applied the brand system with a focus on clarity, structure, and a premium financial aesthetic.", process: "Stationery → Presentation → Social Media → Corporate Materials", result: "A cohesive and professional brand presence that enhances credibility and trust.", images: ["projek images/qcw2.jpg", "projek images/qcw1.jpg"] },
  { id: "Enchelonone", title: "Enchelonone", category: "Brandbook", year: "2025", heroImg: "projek images/ecelonone.jpg", overview: "EchelonOne required a structured brand system to define a clear and future-ready identity.", problem: "The brand lacked a strong conceptual direction, making its positioning unclear.", strategy: "We developed “The Architect of Motion”. a concept combining precision, movement, and structure.", process: "Research → Concept → System → Guidelines", result: "A clear brand system that strengthens positioning, consistency, and long-term scalability.", images: ["projek images/ecelonone1.jpg", "projek images/ecelonone2.jpg"] }
];

const servicesList = [
  {
    id: "brand-identity",
    name: "Brand Identity",
    description: "A structured brand system built for clarity, consistency, and long-term scalability.",
    for: "Brands seeking clarity, consistency, and a scalable identity foundation.",
    deliverables: "Logo system, typography, color system, brand guidelines, and asset library.",
    timeline: "6–10 weeks",
    detail: "We don’t just design how your brand looks — we define how it works across every touchpoint."
  },

  {
    id: "logo-design",
    name: "Logo",
    description: "Distinctive marks built with structure, meaning, and long-term relevance.",
    for: "Brands needing a strong and timeless visual anchor.",
    deliverables: "Primary logo, variations, construction logic, and usage guidelines.",
    timeline: "4–6 weeks",
    detail: "We create logos that are not just seen — but understood and remembered."
  },

  {
    id: "packaging-design",
    name: "Packaging",
    description: "Strategic packaging designed to connect product, brand, and experience.",
    for: "Product brands launching or elevating their market presence.",
    deliverables: "Structural concepts, visual system, mockups, and production-ready specifications.",
    timeline: "8–12 weeks",
    detail: "From shelf impact to unboxing experience, every detail is designed with intention."
  },

  {
    id: "social-media-design",
    name: "Digital Brand",
    description: "Cohesive visual systems for consistent and scalable digital communication.",
    for: "Brands building a strong and consistent digital presence.",
    deliverables: "Template systems, content structure, asset library, and motion direction.",
    timeline: "4–8 weeks",
    detail: "We ensure your brand communicates consistently across every digital touchpoint."
  }
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
        title: "Why Most Brands Fail Without a System", 
        date: "April 2026", 
        excerpt: "Most brands don’t fail because of bad design — they fail because they lack structure. Without a clear system, visual inconsistency builds, messaging becomes fragmented, and growth turns chaotic. A strong brand isn’t just about how it looks, but how it works.",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*f1b-lj_pqAj_9EHwwqQY0g.png",
		url: "https://medium.com/p/abfe84f53b94?postPublishedType=initial"
    },
	   
];

let currentProjectIndex = 0;

// Render functions
function renderWorkGrid() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `
    <div class="project-card" data-category="${p.category}" data-id="${p.id}">
      <div class="card-image"><img src="${p.heroImg}" alt="${p.title}"></div>
      <div class="card-content"><h3>${p.title}</h3><p class="small-text uppercase">${p.category === 'Brand Identity' ? 'Brand Identity' : p.category === 'Brandbook' ? 'Brandbook' : 'Brand Applications'}, ${p.year}</p></div>
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
    <h1 style="margin: 20px 0 8px;">${p.title} · ${p.category === 'Brand Identity' ? 'Brand Identity' : p.category === 'Brandbook' ? 'Brandbook' : 'Brand Applications'}</h1>
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
