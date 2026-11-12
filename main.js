const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  menu.hidden = open;
});
menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }
});
// A restrained landscape motif, drawn once; respects reduced-motion preferences.
const canvas = document.querySelector('.terrain');
const ctx = canvas.getContext('2d');
function drawTerrain() {
  const rect = canvas.getBoundingClientRect();
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(rect.width * scale);
  canvas.height = Math.round(rect.height * scale);
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);
  const w = rect.width, h = rect.height;
  for (let line = 0; line < 16; line++) {
    ctx.beginPath();
    for (let x = 0; x <= w; x += 8) {
      const center = (x / w - .5) * 2;
      const hill = Math.exp(-center * center * 3) * (55 + line * 1.6);
      const y = h * .68 + line * 10 - hill + Math.sin(x / 150 + line * .23) * 10;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(141, 190, 151, ${0.16 - line * .006})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}
drawTerrain();
window.addEventListener('resize', drawTerrain, { passive: true });
const copyEmail = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');
copyEmail.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('gvamshi1017@gmail.com');
    copyStatus.textContent = 'Email copied to clipboard.';
  } catch {
    copyStatus.textContent = 'Could not copy automatically. Select the email address to copy it.';
  }
});

const filterButtons = document.querySelectorAll('.project-filters button');
const projectCards = document.querySelectorAll('.work-card');
const projectCount = document.querySelector('.project-count');
const projectEmpty = document.querySelector('.project-empty');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let visible = 0;
  projectCards.forEach(card => {
    const match = category === 'All' || card.dataset.category === category;
    card.hidden = !match;
    if (match) visible++;
  });
  projectCount.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
  projectEmpty.hidden = visible !== 0;
}));
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  glow.setAttribute('aria-hidden', 'true');
  document.body.appendChild(glow);
  let frame = 0;
  window.addEventListener('pointermove', event => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      glow.style.setProperty('--glow-x', `${event.clientX}px`);
      glow.style.setProperty('--glow-y', `${event.clientY}px`);
      glow.classList.add('visible');
    });
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => glow.classList.remove('visible'));
}

const certifications = {
  '1': ['Salesforce Certified Agentforce Specialist', 'August 2, 2026', 'agentforce', 'Salesforce'],
  '2': ['Salesforce Certified Business Analyst', 'May 5, 2026', 'business-analyst', 'Salesforce'],
  '3': ['Salesforce Certified Platform App Builder', 'August 9, 2025', 'app-builder', 'Salesforce'],
  '4': ['Salesforce Certified Platform Developer', 'September 19, 2020', 'platform-developer', 'Salesforce'],
  '5': ['Salesforce Certified Platform Administrator', 'June 20, 2020', 'administrator', 'Salesforce'],
  '6': ['Copado Certified Copado AI', '03-09-2026', 'copado-ai', 'Copado']
};
const certDialog = document.querySelector('.cert-dialog');
const certTrack = document.querySelector('.cert-track');
document.querySelectorAll('.cert-detail').forEach(button => button.addEventListener('click', () => {
  const id = button.dataset.cert;
  const [name, date, file, issuer] = certifications[id];
  document.querySelector('#cert-dialog-title').textContent = name;
  document.querySelector('.cert-earned').textContent = `Earned ${date}`;
  document.querySelector('.cert-dialog-image').src = `assets/certificates/${file}.jpg`;
  document.querySelector('.cert-open').href = `assets/certificates/${file}.pdf`;
  document.querySelector('.cert-verify').hidden = issuer !== 'Salesforce';
  document.querySelector('.cert-dialog-image').alt = `${name} certificate preview`;
  certDialog.showModal();
}));
document.querySelector('.cert-close').addEventListener('click', () => certDialog.close());
certDialog.addEventListener('click', event => { if (event.target === certDialog) certDialog.close(); });
const certPrev = document.querySelector('.cert-prev');
const certNext = document.querySelector('.cert-next');
const certDots = document.querySelector('.cert-dots');
const certCards = [...certTrack.querySelectorAll('.cert-card')];
function certPositions() {
  const step = certCards.length > 1 ? certCards[1].offsetLeft - certCards[0].offsetLeft : certTrack.clientWidth;
  const max = Math.max(0, certTrack.scrollWidth - certTrack.clientWidth);
  const positions = [];
  for (let n = 0; n * step < max; n++) positions.push(n * step);
  positions.push(max);
  return [...new Set(positions.map(Math.round))];
}
function renderCertNavigation() {
  const positions = certPositions();
  const index = positions.reduce((best, position, i) => Math.abs(position - certTrack.scrollLeft) < Math.abs(positions[best] - certTrack.scrollLeft) ? i : best, 0);
  certPrev.disabled = index === 0;
  certNext.disabled = index === positions.length - 1;
  certDots.replaceChildren(...positions.map((position, i) => {
    const dot = document.createElement('button');
    dot.type = 'button'; dot.setAttribute('aria-label', `Show certificate group ${i + 1}`);
    dot.setAttribute('aria-current', String(i === index));
    dot.addEventListener('click', () => scrollCertificates(position));
    return dot;
  }));
}
function scrollCertificates(left) {
  certTrack.scrollTo({left, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
}
certPrev.addEventListener('click', () => { const positions = certPositions(); scrollCertificates([...positions].reverse().find(p => p < certTrack.scrollLeft - 2) ?? 0); });
certNext.addEventListener('click', () => { const positions = certPositions(); scrollCertificates(positions.find(p => p > certTrack.scrollLeft + 2) ?? positions[positions.length - 1]); });
certTrack.addEventListener('scroll', renderCertNavigation, {passive:true});
window.addEventListener('resize', renderCertNavigation, {passive:true});
renderCertNavigation();
projectCards.forEach((card, i) => { const label = card.querySelector('.work-index'); if (label) label.textContent = String(i + 1).padStart(2, '0'); });

// This assistant uses only the portfolio’s published content; no data leaves the page.
const assistantPanel = document.querySelector('.assistant-panel');
const assistantToggle = document.querySelector('.assistant-toggle');
const assistantClose = document.querySelector('.assistant-close');
const assistantReset = document.querySelector('.assistant-reset');
const assistantForm = document.querySelector('.assistant-form');
const assistantInput = document.querySelector('#assistant-input');
const assistantMessages = document.querySelector('.assistant-messages');
const assistantBody = document.querySelector('.assistant-body');
const assistantSuggestions = document.querySelector('.assistant-suggestions');
const assistantWelcome = 'Hi! I can help you explore Vamshi’s projects, skills, experience, certifications, or contact details.';
function setAssistantOpen(open) {
  assistantPanel.hidden = !open;
  assistantToggle.setAttribute('aria-expanded', String(open));
  assistantToggle.querySelector('span').textContent = open ? 'Close assistant' : 'Ask about my work';
  if (open) assistantInput.focus(); else assistantToggle.focus();
}
function portfolioAnswer(question) {
  const q = question.toLowerCase();
  if (/contact|email|reach|get in touch|hire/.test(q)) return ['You can email Vamshi at gvamshi1017@gmail.com or visit his GitHub profile.', 'Contact details', '#contact'];
  if (/certif|credential|badge|agentforce/.test(q)) return ['Vamshi’s portfolio lists Salesforce credentials in Agentforce, Business Analysis, Platform App Builder, Platform Development, and Platform Administration, along with a Copado credential.', 'View certifications', '#credentials'];
  if (/education|university|degree|college|master|bachelor|b\.tech/.test(q)) return ['Vamshi holds an M.S. in Data Analytics Engineering from George Mason University and a B.Tech in Mechanical Engineering.', 'View education', '#about'];
  if (/onboard/.test(q)) return ['The onboarding tracker demonstrates a staged customer journey with tasks, follow-ups, blockers, and progress. The public demo uses sample data.', 'Explore onboarding', 'projects/onboarding/'];
  if (/case management|case demo|support desk|case workspace/.test(q)) return ['The case-management demo lets an agent review cases, change status and priority, add notes, assign work, and escalate issues using sample data.', 'Explore case management', 'projects/case-management/'];
  if (/field service|field-service|appointment|booking|service studio/.test(q)) return ['Service Studio demonstrates appointment booking: choose a service and available technician, confirm a visit, and cancel it to release the slot.', 'Explore Service Studio', 'demo/'];
  if (/project|work sample|built|portfolio|demo/.test(q)) return ['Featured Work includes Salesforce demos for service booking, case management, and onboarding, alongside public data and AI projects from GitHub.', 'Explore projects', '#projects'];
  if (/experience|career|worked|work history|employer|warner|neighbor|maryland|caterpillar|avant|uber/.test(q)) return ['Vamshi’s experience includes Salesforce work for Warner Bros. Discovery, NeighborWorks America, the State of Maryland, Caterpillar, Avant, and Uber. See the experience section for roles and dates.', 'View experience', '#work'];
  if (/skill|stack|technology|technologies|technical|apex|lwc|salesforce|configuration|flow|code/.test(q)) return ['His listed areas include Salesforce configuration, Flow, Lightning Web Components, Apex, SOQL, integrations, and test automation.', 'View skills', '#expertise'];
  if (/resume|résumé|cv/.test(q)) return ['For information about Vamshi’s experience, please get in touch.', 'Contact Vamshi', '#contact'];
  if (/\b(hi|hello|hey)\b/.test(q)) return ['Hello! Ask me about Vamshi’s projects, Salesforce skills, experience, certifications, education, or contact details.'];
  return ['I can help with information on this portfolio. Try asking about a project, Salesforce skills, work experience, certifications, education, or contact details.'];
}
function appendAssistantMessage(text, role, link) {
  const message = document.createElement('div');
  message.className = `assistant-message assistant-message-${role}`;
  message.textContent = text;
  if (link) {
    const anchor = document.createElement('a');
    anchor.href = link[1]; anchor.textContent = link[0];
    if (link[1].endsWith('.pdf')) anchor.setAttribute('download', '');
    if (link[1].startsWith('#')) anchor.addEventListener('click', () => setAssistantOpen(false));
    message.append(document.createElement('br'), anchor);
  }
  assistantMessages.appendChild(message);
  assistantBody.scrollTop = assistantBody.scrollHeight;
}
function askPortfolio(question) {
  const value = question.trim().slice(0, 300);
  if (!value) return;
  appendAssistantMessage(value, 'user');
  const [answer, label, target] = portfolioAnswer(value);
  appendAssistantMessage(answer, 'bot', label && target ? [label, target] : null);
  assistantInput.value = '';
  assistantSuggestions.hidden = true;
  assistantInput.focus();
}
assistantToggle.addEventListener('click', () => setAssistantOpen(assistantPanel.hidden));
assistantClose.addEventListener('click', () => setAssistantOpen(false));
assistantReset.addEventListener('click', () => {
  assistantMessages.replaceChildren();
  appendAssistantMessage(assistantWelcome, 'bot');
  assistantSuggestions.hidden = false;
  assistantInput.value = '';
  assistantInput.focus();
});
assistantForm.addEventListener('submit', event => { event.preventDefault(); askPortfolio(assistantInput.value); });
assistantSuggestions.querySelectorAll('button').forEach(button => button.addEventListener('click', () => askPortfolio(button.dataset.question)));
assistantPanel.addEventListener('keydown', event => { if (event.key === 'Escape') setAssistantOpen(false); });

const projectDetails = {
  'Service Studio': {
    how: 'The LWC displays services, available dates and technician slots. In the Salesforce package, the Apex controller validates a booking and locks the selected slot; cancellation makes it available again. Try booking a visit, then cancel it.',
    source: 'https://github.com/vamshi4067/salesforce-lwc-apex-portfolio/tree/main/service-studio', demo: 'demo/'
  },
  'Case Management': {
    how: 'The LWC presents a case queue and an editor for status, priority, assignment and escalation. The Salesforce package uses an Apex controller and Case records. Try closing a case without a resolution note, then add one and save.',
    source: 'https://github.com/vamshi4067/salesforce-lwc-apex-portfolio/tree/main/case-management', demo: 'projects/case-management/'
  },
  'Onboarding Tracker': {
    how: 'The LWC shows stages, required tasks and progress. The Salesforce package uses Apex with Account and Task records to validate stage changes and add follow-ups. Customer notes, task editing, blockers and activity history are available in the browser demo only. Try completing the required tasks before advancing.',
    source: 'https://github.com/vamshi4067/salesforce-lwc-apex-portfolio/tree/main/onboarding-tracker', demo: 'projects/onboarding/'
  },
  'Salesforce Job Search Agent': {
    how: 'GitHub Actions runs the discovery workflow; Tavily search and NVIDIA NIM help find and evaluate postings. Salesforce stores the results, and Apex supports the digest and scheduled re-verification.',
    source: 'https://github.com/vamshi4067/salesforce-job-search-agent'
  },
  'Anomaly Detection': { how: 'The repository explores computer-vision anomaly detection and includes YOLO/Darknet configuration and source.' },
  'Malaria Cell Detection': { how: 'The project explores classifying cell images using a dataset with parasitized and uninfected examples.' },
  'Anime Recommendation': { how: 'The project explores recommendations using attributes such as genre, episodes and ratings.' },
  'Predictive Analysis': { how: 'The repository explores predictive modelling with features from the Young People Survey.' },
  'Sentiment Analysis': { how: 'The project applies VADER sentiment analysis to a dataset of Amazon reviews.' },
  'Coronavirus Visualizations': { how: 'The dashboard visualizes historical global case data from Johns Hopkins University.' },
  'IPL Score Prediction': { how: 'The repository contains a Flask web application for first-innings score prediction.' },
  'Automated Machine Learning': { how: 'Explore the repository for the implementation and materials on automated machine-learning workflows.' },
  'Sensor Data with Python': { how: 'This draft repository contains a Python project for working with sensor data.' },
  'Car Prediction': { how: 'Explore the repository for the files associated with the car prediction demo.' },
  'H20.ai': { how: 'Explore the repository for the included H2O.ai-related files.' },
  'CleanYourTV': { how: 'A customized derivative of CleanYourTV with a cricket-inspired theme, favourites, media browsing, and remote-control navigation for Android TV.' },
  'JARVIS Personal Assistant': { how: 'A customized local-first assistant based on OpenJarvis, with voice interaction, reusable routines, and optional integrations. The public repository is a sanitized snapshot and notes that some original source is unavailable.', demo: 'projects/jarvis-demo/' },
  'OpenCV': { how: 'The repository contains OpenCV-related source and files.' },
  'OmniRush Starter': { how: 'This repository contains a starter kit for setting up a software project with OmniRush.' }
};
const projectDialog = document.querySelector('.project-dialog');
const projectDialogTitle = document.querySelector('#project-dialog-title');
const projectDialogImage = document.querySelector('.project-dialog-image');
const projectDialogVisual = document.querySelector('.project-dialog-visual');
const projectSource = document.querySelector('.project-source');
const projectDemo = document.querySelector('.project-demo');
function openProject(card) {
  const heading = card.querySelector('h3 a');
  const title = heading.childNodes[0].textContent.trim();
  const details = projectDetails[title] || {};
  projectDialog.querySelector('.project-gallery').hidden = title !== 'Salesforce Job Search Agent';
  const image = card.querySelector('.work-screenshot');
  projectDialogTitle.textContent = title;
  projectDialog.querySelector('.project-dialog-category').textContent = card.dataset.category.toUpperCase();
  projectDialog.querySelector('.project-dialog-overview').textContent = card.querySelector('.work-card-copy > p').textContent;
  projectDialog.querySelector('.project-dialog-how').textContent = details.how || 'Explore the repository for the implementation and project details.';
  const tags = projectDialog.querySelector('.project-dialog-tags');
  tags.replaceChildren(...[...card.querySelectorAll('.tags span')].map(tag => { const span = document.createElement('span'); span.textContent = tag.textContent; return span; }));
  projectDialogVisual.hidden = !image;
  if (image) { projectDialogImage.src = image.getAttribute('src'); projectDialogImage.alt = image.alt; }
  const originalLink = card.querySelector('.work-link');
  const source = details.source || (originalLink && originalLink.href.startsWith('https://github.com/') ? originalLink.href : '');
  projectSource.hidden = !source;
  if (source) projectSource.href = source;
  projectDemo.hidden = !details.demo;
  if (details.demo) projectDemo.href = details.demo;
  projectDialog.showModal();
}
projectCards.forEach(card => {
  const title = card.querySelector('h3 a');
  const visual = card.querySelector('.work-visual');
  const open = document.createElement('button');
  open.className = 'work-open'; open.type = 'button';
  open.setAttribute('aria-label', `View ${title.textContent.replace('↗', '').trim()} project details`);
  visual.appendChild(open);
  open.addEventListener('click', () => openProject(card));
  title.addEventListener('click', event => { event.preventDefault(); openProject(card); });
  card.addEventListener('click', event => { if (!event.target.closest('a, button')) openProject(card); });
});
document.querySelector('.project-close').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', event => { if (event.target === projectDialog) projectDialog.close(); });

// End the timeline at the center of the final experience marker.
const careerTimeline = document.querySelector('.timeline-list');
if (careerTimeline) {
  const careerItems = [...careerTimeline.querySelectorAll('.timeline-item')];
  const reduceTimelineMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceTimelineMotion) careerTimeline.classList.add('has-progress');
  let timelineFrame = 0;
  const updateCareerTimeline = () => {
    timelineFrame = 0;
    const rect = careerTimeline.getBoundingClientRect();
    const last = careerItems[careerItems.length - 1];
    if (!last) return;
    const marker = getComputedStyle(last, '::before');
    const end = last.getBoundingClientRect().top - rect.top + parseFloat(marker.top) + parseFloat(marker.height) / 2;
    const height = Math.max(0, end - 18);
    careerTimeline.style.setProperty('--timeline-line-height', `${height}px`);
    if (reduceTimelineMotion) return;
    const anchor = window.innerHeight * .65;
    const progress = Math.max(0, Math.min(1, (anchor - rect.top - 18) / Math.max(1, height)));
    careerTimeline.style.setProperty('--timeline-progress', String(progress));
    careerItems.forEach(item => item.classList.toggle('timeline-active', item.getBoundingClientRect().top + 32 <= anchor));
  };
  const scheduleCareerTimeline = () => { if (!timelineFrame) timelineFrame = requestAnimationFrame(updateCareerTimeline); };
  window.addEventListener('scroll', scheduleCareerTimeline, {passive: true});
  window.addEventListener('resize', scheduleCareerTimeline, {passive: true});
  window.addEventListener('load', scheduleCareerTimeline, {once: true});
  updateCareerTimeline();
}
