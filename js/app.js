// Front Vision — site logic (intro splash, nav/routing, capability detail
// rendering, process accordion, animated counters, quote wizard).
(() => {
  'use strict';

  const CAPS = [
    { slug:'surveillance', url:'capabilities/surveillance-security.html', num:'01', name:'Surveillance & Security', short:'CCTV, ANPR, access control, firewalls & UTM',
      headline:'Surveillance and security, end to end.',
      blurb:'From camera placement surveys to phase-wise rollout, with network security and access control built into the same scope — 3,000+ camera deployments delivered across border security, PSU campuses and manufacturing plants. Every brand in our surveillance line-up — RoyalShield (our exclusive line), CP Plus, Honeywell, PRAMA and UNV — is STQC certified, so compliance is settled before the tender is written, not chased down after.',
      brands:['CP PLUS','Honeywell','PRAMA','UNV','RoyalShield'],
      items:[
        {n:'1',t:'End-to-End Design',d:'Camera placement surveys, coverage planning and NVR/VMS sizing.'},
        {n:'2',t:'IP Camera Networks',d:'Fixed, PTZ and thermal cameras integrated with recording and monitoring.'},
        {n:'3',t:'ANPR / GateGuard',d:'Vehicle recognition for gates, parking and porte-cochere areas.'},
        {n:'4',t:'Firewalls, UTM & Secure Access',d:'Threat-protection appliances, VPN and multi-factor access safeguarding the network the cameras run on.'},
        {n:'5',t:'Access Control & Attendance',d:'Card, biometric and facial-recognition access control integrated with attendance systems.'},
        {n:'6',t:'BOQ-Driven Execution',d:'Clear quantity schedules and phase-wise rollout across large sites.'}]},
    { slug:'networking', url:'capabilities/networking-equipment.html', num:'02', name:'Networking Equipment', short:'Routers, switches, wireless & network security',
      headline:'Networks built for uptime.',
      blurb:'Connectivity that keeps offices, campuses and remote sites online — from single-office LANs to multi-site enterprise networks.',
      brands:['Cisco','D Link','NETGEAR','DIGISOL','Grandstream'],
      items:[
        {n:'1',t:'Routers & Switches',d:'Basic models for small offices through advanced configurations for large enterprises — reliable connectivity, improved network performance.'},
        {n:'2',t:'Wireless Access Points',d:'Enterprise Wi-Fi and mesh networking for strong, stable wireless coverage across every floor and site.'},
        {n:'3',t:'Network Security Devices',d:'Firewalls, VPN solutions and other security appliances protecting data and network integrity.'}]},
    { slug:'servers', url:'capabilities/servers-storage.html', num:'03', name:'Servers & Storage', short:'Rack, tower & blade servers, NAS/SAN',
      headline:'Compute & storage that scales.',
      blurb:'Reliable infrastructure for data storage, processing and enterprise applications — sized to your workload today and your growth tomorrow.',
      brands:['Dell','HP','Lenovo','Samsung'],
      items:[
        {n:'1',t:'Servers',d:'Tower, rack and blade servers from leading OEMs — essential for data storage, processing and enterprise applications.'},
        {n:'2',t:'Storage Arrays',d:'NAS, SAN and hybrid cloud-ready storage solutions ensuring data integrity and easy access.'},
        {n:'3',t:'Configured to Workload',d:'Pre-configured or fully customisable systems matched to capacity and performance requirements.'}]},
    { slug:'endpoints', url:'capabilities/desktops-laptops-workstations.html', num:'04', name:'Desktops, Laptops & Workstations', short:'OEM fleets plus custom gaming & design builds',
      headline:'Every desk, specified right.',
      blurb:'OEM desktops and laptops for the workforce, and purpose-built machines where off-the-shelf will not do — gaming rigs and design workstations assembled, tested and warranted in-house.',
      brands:['Dell','HP','Lenovo','ASUS','Acer','Lapcare','Portronics','Intex'],
      items:[
        {n:'1',t:'OEM Desktops & Laptops',d:'Business-grade machines from the OEMs we already supply — quoted, imaged and delivered to site with GST billing.'},
        {n:'2',t:'Custom Gaming Systems',d:'Built to a target frame rate and budget — GPU, cooling and PSU headroom sized to the games, not the marketing.'},
        {n:'3',t:'Design & Content Workstations',d:'CAD, 3D, editing and rendering builds — colour-accurate displays, ECC or high-capacity memory, calibrated for the software in use.'},
        {n:'4',t:'Fleet Rollout & Support',d:'Standard-image deployment, asset tagging, warranty handling and AMC across the installed base.'}]},
    { slug:'cabling', url:'capabilities/structured-cabling-elv.html', num:'05', name:'Structured Cabling & ELV', short:'CAT6/6A, Fiber, ELV & IoT pathways',
      headline:'Cabling done right, the first time.',
      blurb:'Cabling infrastructure planned to avoid rework once finishes, ceilings and joinery are in place — coordinated directly with MEP and interior contractors on-site.',
      brands:['Polycab','Usha Martin','ERD','Uniway Infocom','D Link'],
      items:[
        {n:'1',t:'Data & Network Cabling',d:'Structured CAT6 / CAT6A / Fiber cabling, patch panels and connectors for guest, corporate and back-of-house networks.'},
        {n:'2',t:'ELV Systems',d:'Extra-low-voltage infrastructure — PA/GDA, BMS wiring and access-control backbones.'},
        {n:'3',t:'IoT & Sensor Integration',d:'Cabling pathways designed for current and future IoT deployments — sensors, controllers, gateways.'}]},
    { slug:'datacenter', url:'capabilities/data-center-power.html', num:'06', name:'Data Center & Power', short:'Racks, cooling, UPS & PDU',
      headline:'The backbone behind every deployment.',
      blurb:'A well-equipped data center ensures smooth, uninterrupted operations for the enterprise it supports.',
      brands:['BPE','Microtek','Okaya','Dynamic Rack','Soltrix','LG'],
      items:[
        {n:'1',t:'Rack Solutions',d:'Sturdy, customisable racks and enclosures supporting hardware management and organisation.'},
        {n:'2',t:'Cooling Solutions',d:'Precision cooling systems, cooling racks and air conditioning for peak data center efficiency.'},
        {n:'3',t:'Power Backup Systems',d:'UPS systems and PDUs safeguarding against power failures and downtime, with environment monitoring.'}]}
  ];

  const STEPS = [
    ['01','Requirement Discovery','01_Requirement_Discovery.png',[
      'We understand your needs, infrastructure and business goals.',
      'Site audit covering device counts, budget and timelines.',
      'Stakeholder consultation to scope the right solution.']],
    ['02','Solution Design & BOQ','02_Solution_Design_BOQ.png',[
      'Tailored solution design mapped to your environment.',
      'Detailed bill of quantities with technical specifications.',
      'Sized for performance, scalability and cost-efficiency.']],
    ['03','Procurement & Staging','03_Procurement_Staging.png',[
      'Certified OEM sourcing across 50+ trusted brands.',
      'Pre-configuration and quality validation in-lab.',
      'Inventory verification before dispatch to site.']],
    ['04','Installation & Integration','04_Installation_Integration.png',[
      'On-site mounting for CCTV, networking and IT systems.',
      'Cabling, power integration and system configuration.',
      'Coordinated phase-wise rollout across sites.']],
    ['05','Testing & Handover','05_Testing_Handover.png',[
      'Thorough testing of every system and device.',
      'Acceptance tests for performance, security and reliability.',
      'Handover with full documentation and user training.']],
    ['06','AMC & Lifecycle Support','06_AMC_Lifecycle_Support.png',[
      'Preventive maintenance and rapid issue resolution.',
      'Defined SLAs and responsive support coverage.',
      'Ongoing monitoring for uptime and longer system life.']]
  ];

  // Full list lives in js/cases-data.js (shared with case-studies.html);
  // the homepage only teases a diverse subset in a single row.
  const CASES = (window.FV_CASES_FEATURED || []).map((i) => window.FV_CASES[i]);

  const OEMS = ['CP PLUS','UNV','PRAMA','Honeywell','RoyalShield','Cisco','D Link','NETGEAR','DIGISOL','Grandstream',
    'Dell','HP','Lenovo','Samsung','ASUS','Acer','Lapcare','Portronics','Intex','Polycab',
    'Usha Martin','ERD','Uniway Infocom','BPE','Microtek','Okaya','Dynamic Rack','Soltrix','LG'];

  // Maps a brand's display name to its real logo file under images/logos/oem/.
  const OEM_LOGO_FILE = {
    'CP PLUS':'oem-cp-plus.png', 'UNV':'oem-unv.png', 'PRAMA':'oem-prama.png', 'Honeywell':'oem-honeywell.png', 'RoyalShield':'oem-royalshield.png',
    'Cisco':'oem-cisco.jpg', 'D Link':'oem-d-link.png', 'NETGEAR':'oem-netgear.png', 'DIGISOL':'oem-digisol.png', 'Grandstream':'oem-grandstream.jpg',
    'Dell':'oem-dell.png', 'HP':'oem-hp.png', 'Lenovo':'oem-lenovo.png', 'Samsung':'oem-samsung.png', 'ASUS':'oem-asus.png', 'Acer':'oem-acer.png', 'LG':'oem-lg.png',
    'Lapcare':'oem-lapcare.png', 'Portronics':'oem-portronics.png', 'Intex':'oem-intex.png',
    'Polycab':'oem-polycab.png', 'Usha Martin':'oem-usha-martin.png', 'ERD':'oem-erd.png', 'BPE':'oem-bpe.png', 'Microtek':'oem-microtek.png', 'Okaya':'oem-okaya.png',
    'Dynamic Rack':'oem-dynamic-rack.png', 'Soltrix':'oem-soltrix.png', 'Uniway Infocom':'oem-uniway-infocom.png'
  };

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  // ---------------- Accessibility helpers ----------------
  // Many interactive elements in this design are <div>s (matching the source
  // template), not native <button>/<a> — enhance them with keyboard support
  // (tabindex, role, Enter/Space activation) so they're WCAG 2.1.1 compliant.
  function enhanceClickable(el, role) {
    // Real <a>/<button> elements are already keyboard-operable with correct
    // semantics — only synthetic click targets (plain <div>/<span>) need this.
    if (el.tagName === 'A' || el.tagName === 'BUTTON') return;
    if (el.__a11y) return;
    el.__a11y = true;
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
    if (!el.hasAttribute('role')) el.setAttribute('role', role || 'button');
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        el.click();
      }
    });
  }
  function enhanceAll(root) {
    (root || document).querySelectorAll('.nav-go, .chip, #logo-home, #quote-back, #quote-next, #quote-reset').forEach((el) => enhanceClickable(el));
  }

  // ---------------- Intro splash ----------------
  const introStage = document.getElementById('intro-stage');
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // The intro is a "monitor sitting on a desk" metaphor that zooms up to
  // full-bleed — it only reads correctly at desktop-monitor proportions.
  // On a phone-width viewport the small scaled mockup has no monitor to
  // reference, so it just looks like a random signage board floating on
  // screen. Skip the choreography there the same way reduced-motion does.
  const isMobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  // It's a "welcome" moment for a first landing, not something that should
  // replay every time — sessionStorage so it plays once per browser
  // session (fresh visit later still gets it), not once ever. Other pages
  // link back to index.html with a real navigation (full page load), so
  // without this the whole zoom choreography would fire again on every
  // "Home" click. Guarded in case storage is unavailable (privacy mode).
  const INTRO_SEEN_KEY = 'fv-intro-seen';
  let alreadySeenIntro = false;
  try { alreadySeenIntro = sessionStorage.getItem(INTRO_SEEN_KEY) === '1'; } catch (e) {}
  function markIntroSeen() {
    try { sessionStorage.setItem(INTRO_SEEN_KEY, '1'); } catch (e) {}
  }
  let introTimers = [];
  function setIntro(state) {
    introStage.setAttribute('data-intro', state);
    if (state === 'done') {
      // No longer an active overlay — drop the dialog semantics so
      // screen readers don't announce inert, off-screen content.
      introStage.removeAttribute('role');
      introStage.removeAttribute('aria-label');
    }
  }
  function skipIntro() {
    if (introStage.getAttribute('data-intro') === 'done') return;
    introTimers.forEach(clearTimeout);
    setIntro('zoom');
    introTimers = [setTimeout(() => setIntro('done'), 2900)];
  }
  if (reducedMotion || isMobile || alreadySeenIntro) {
    // Respect the OS-level motion preference, skip the desktop-monitor zoom
    // metaphor on phone-width screens where it doesn't read correctly, and
    // skip it entirely once it's already played this session.
    setIntro('done');
  } else {
    markIntroSeen();
    introStage.addEventListener('click', (e) => { if (e.target.id !== 'skip-intro-btn') skipIntro(); });
    document.getElementById('skip-intro-btn').addEventListener('click', (e) => { e.stopPropagation(); skipIntro(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') skipIntro(); });
    introTimers.push(setTimeout(() => setIntro('zoom'), 2200));
    introTimers.push(setTimeout(() => setIntro('done'), 5100));
  }

  // ---------------- Header / nav ----------------
  const navCapsToggle = document.getElementById('nav-caps-toggle');
  const navCapsPanel = document.getElementById('nav-caps-panel');
  const navCapsList = document.getElementById('nav-caps-list');
  const footerCapsList = document.getElementById('footer-caps-list');
  navCapsList.innerHTML = CAPS.map(c => `
    <a class="dropdown-item" href="${c.url}" style="cursor:pointer;padding:14px 16px;border-radius:4px;border:1px solid transparent;display:block;text-decoration:none">
      <div style="display:flex;gap:10px;align-items:baseline">
        <span style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#EC4453">${c.num}</span>
        <span style="font-family:'Space Grotesk',sans-serif;font-weight:500;font-size:16px;color:#F7F7F8">${esc(c.name)}</span>
      </div>
      <div style="font-size:13.5px;color:#8C8C94;margin-top:4px;padding-left:26px">${esc(c.short)}</div>
    </a>`).join('');

  footerCapsList.innerHTML = CAPS.map(c =>
    `<a href="${c.url}" class="hv-lighten" style="cursor:pointer;color:#B3B6BC;text-decoration:none">${esc(c.name)}</a>`).join('');

  const mobileBtn = document.getElementById('mobile-menu-btn');
  function setMenuOpen(open) {
    navCapsPanel.hidden = !open;
    navCapsToggle.setAttribute('aria-expanded', String(open));
    mobileBtn.setAttribute('aria-expanded', String(open));
  }
  function closeMenu() { setMenuOpen(false); }
  navCapsToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    setMenuOpen(navCapsPanel.hidden);
  });
  document.addEventListener('click', (e) => {
    if (!navCapsPanel.hidden && !navCapsPanel.contains(e.target) && e.target !== navCapsToggle && !navCapsToggle.contains(e.target)) closeMenu();
  });

  mobileBtn.addEventListener('click', (e) => { e.stopPropagation(); setMenuOpen(navCapsPanel.hidden); });

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // Capability detail is now real pages under capabilities/*.html (for
  // indexable, distinct URLs per capability — see the cap-open <a> tags in
  // the markup) rather than a client-side view swap, so navigation here is
  // just scrolling within the current page.
  function go(targetId) {
    closeMenu();
    if (targetId) scrollToId(targetId);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-go').forEach(el => {
    el.addEventListener('click', () => go(el.getAttribute('data-go')));
  });
  document.getElementById('logo-home').addEventListener('click', () => go(''));
  enhanceAll();

  function logoTile(name) {
    const file = OEM_LOGO_FILE[name];
    if (file) {
      return `<div class="logo-tile" style="height:62px"><img src="images/logos/oem/${file}" alt="${esc(name)}" loading="lazy" style="max-width:100%;max-height:100%;object-fit:contain;display:block"></div>`;
    }
    return `<div class="logo-tile" style="height:62px" title="${esc(name)}"><span>${esc(name)}</span></div>`;
  }

  // ---------------- Case studies grid ----------------
  document.getElementById('cases-grid').innerHTML = CASES.map(([title, body, tag, img]) => `
    <div class="lift-hover" style="border:1px solid #232327;border-radius:5px;overflow:hidden;background:#121214;display:flex;flex-direction:column">
      <div style="height:150px;overflow:hidden;background:#0B0B0D"><img src="images/case-studies/${img}" alt="${esc(title)}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;filter:saturate(0.9) contrast(1.03)"></div>
      <div style="padding:16px 18px 18px;flex:1;display:flex;flex-direction:column">
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:500;font-size:16px;color:#F7F7F8;line-height:1.25;min-height:40px">${esc(title)}</div>
        <div style="font-size:14px;color:#B3B6BC;margin-top:6px;flex:1">${esc(body)}</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:#8C8C94;letter-spacing:0.08em;margin-top:14px;padding-top:10px;border-top:1px solid #232327">${esc(tag)}</div>
      </div>
    </div>`).join('');

  // ---------------- Blog teaser row ----------------
  // Full list lives in js/blog-data.js (shared with blog.html); the
  // homepage only teases the 3 most recent posts.
  const BLOG_POSTS = (window.FV_BLOG || []).slice(0, 3);
  document.getElementById('blog-grid').innerHTML = BLOG_POSTS.map((p) => `
    <article class="lift-hover" style="border:1px solid #232327;border-radius:5px;overflow:hidden;background:#121214;display:flex;flex-direction:column">
      <div style="height:170px;overflow:hidden;background:#0B0B0D"><img src="images/blog/${p.img}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block"></div>
      <div style="padding:20px 22px 22px;flex:1;display:flex;flex-direction:column">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <span style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;color:#EC4453;background:rgba(230,46,62,0.12);border:1px solid rgba(230,46,62,0.30);padding:3px 9px;border-radius:20px">${esc(p.tag)}</span>
          <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:#8C8C94">${esc(p.date)}</span>
        </div>
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:500;font-size:19px;color:#F7F7F8;line-height:1.3;margin-bottom:10px;flex:1">${esc(p.title)}</div>
        <div style="font-size:14.5px;color:#B3B6BC;line-height:1.55;margin-bottom:16px">${esc(p.excerpt)}</div>
        <a href="blog/${p.slug}.html" class="hv-accent" style="cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.06em;color:#F7F7F8">READ MORE →</a>
      </div>
    </article>`).join('');

  // ---------------- Process steps ----------------
  // The step images already have the number, title and checklist baked in
  // (see images/product/*.png), so this only renders the images themselves
  // — a parallel HTML title/bullet block would just repeat the same text.
  const processList = document.getElementById('process-list');
  function renderProcess() {
    processList.innerHTML = STEPS.map(([num, title, img]) => `
      <div class="card-hover" style="border:1px solid #232327;border-radius:6px;overflow:hidden;background:#0B0B0D;height:230px">
        <img src="images/product/${img}" alt="${esc(title)}" loading="lazy" style="width:100%;height:100%;object-fit:contain;display:block">
      </div>`).join('');
  }
  renderProcess();

  // ---------------- OEM logo grid ----------------
  document.getElementById('oem-grid').innerHTML = OEMS.map((name) => logoTile(name).replace('height:62px', 'height:52px')).join('');

  // ---------------- Animated stat counters ----------------
  function animateCounters() {
    const targets = { c1: 30, c2: 3000, c3: 18 };
    const els = { c1: document.getElementById('stat-c1'), c2: document.getElementById('stat-c2'), c3: document.getElementById('stat-c3') };
    const t0 = Date.now(), dur = 1200;
    function tick() {
      const p = Math.min(1, (Date.now() - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      els.c1.textContent = Math.round(targets.c1 * e) + '+';
      els.c2.textContent = Math.round(targets.c2 * e).toLocaleString('en-IN') + '+';
      els.c3.textContent = Math.round(targets.c3 * e) + '+';
      if (p < 1) setTimeout(tick, 32);
    }
    setTimeout(tick, 120);
  }
  animateCounters();

  // ---------------- Quote wizard ----------------
  const quoteState = {
    step: 1, needs: [], submitted: false, ref: '', error: '',
    form: { boq: 'Not yet — need help scoping', site: 'Corporate office', scale: 'Whole building', timeline: 'This quarter', location: '', notes: '', name: '', company: '', phone: '', email: '' }
  };
  const titles = { 1: 'What do you need?', 2: 'Project details', 3: 'Where do we send it?' };
  const labels = { 1: 'Continue', 2: 'Continue', 3: 'Send enquiry' };

  const qProgress = document.getElementById('quote-progress');
  const qStepTitle = document.getElementById('quote-step-title');
  const qStepNum = document.getElementById('quote-step-num');
  const qChips = document.getElementById('quote-chips');
  const qStep1 = document.getElementById('quote-step-1');
  const qStep2 = document.getElementById('quote-step-2');
  const qStep3 = document.getElementById('quote-step-3');
  const qError = document.getElementById('quote-error');
  const qBack = document.getElementById('quote-back');
  const qNext = document.getElementById('quote-next');
  const qNoCost = document.getElementById('quote-nocost');
  const qFormWrap = document.getElementById('quote-form-wrap');
  const qDone = document.getElementById('quote-done');
  const qSummary = document.getElementById('quote-summary');

  const fields = ['boq', 'site', 'scale', 'timeline', 'location', 'notes', 'name', 'company', 'phone', 'email'];
  fields.forEach(k => {
    const el = document.getElementById('f-' + k);
    el.value = quoteState.form[k];
    el.addEventListener('input', () => { quoteState.form[k] = el.value; quoteState.error = ''; renderQuote(); });
    el.addEventListener('change', () => { quoteState.form[k] = el.value; quoteState.error = ''; renderQuote(); });
  });

  function renderChips() {
    qChips.innerHTML = CAPS.map(c => {
      const on = quoteState.needs.indexOf(c.name) > -1;
      return on
        ? `<div class="chip" data-name="${esc(c.name)}" role="checkbox" aria-checked="true" tabindex="0" style="cursor:pointer;border:1.5px solid #E62E3E;background:rgba(230,46,62,0.16);color:#F7F7F8;border-radius:22px;padding:9px 17px;font-size:14.5px;font-weight:500;display:flex;gap:8px;align-items:center"><span aria-hidden="true" style="color:#EC4453">✓</span>${esc(c.name)}</div>`
        : `<div class="chip chip-off" data-name="${esc(c.name)}" role="checkbox" aria-checked="false" tabindex="0" style="cursor:pointer;border:1.5px solid #232327;background:#121214;color:#B3B6BC;border-radius:22px;padding:9px 17px;font-size:14.5px">${esc(c.name)}</div>`;
    }).join('');
    qChips.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const name = chip.getAttribute('data-name');
        const i = quoteState.needs.indexOf(name);
        if (i > -1) quoteState.needs.splice(i, 1); else quoteState.needs.push(name);
        quoteState.error = '';
        renderQuote();
      });
      chip.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); chip.click(); }
      });
    });
  }

  function needsList() { return quoteState.needs.length ? quoteState.needs.join(', ') : 'Not selected'; }

  function renderQuote() {
    if (quoteState.submitted) {
      qFormWrap.style.display = 'none';
      qDone.style.display = '';
      qProgress.style.width = '100%';
      document.getElementById('quote-ref').textContent = quoteState.ref;
      document.getElementById('quote-done-scope').textContent = needsList();
      document.getElementById('quote-done-site').textContent = quoteState.form.site;
      document.getElementById('quote-done-timeline').textContent = quoteState.form.timeline;
      return;
    }
    qFormWrap.style.display = '';
    qDone.style.display = 'none';
    qProgress.style.width = (quoteState.step * 33.3) + '%';
    qStepTitle.textContent = titles[quoteState.step];
    qStepNum.textContent = quoteState.step;
    qNext.textContent = labels[quoteState.step];
    qStep1.style.display = quoteState.step === 1 ? '' : 'none';
    qStep2.style.display = quoteState.step === 2 ? 'grid' : 'none';
    qStep3.style.display = quoteState.step === 3 ? 'grid' : 'none';
    qBack.style.display = quoteState.step > 1 ? '' : 'none';
    qNoCost.style.display = quoteState.step === 1 ? '' : 'none';
    if (quoteState.step === 1) renderChips();
    if (quoteState.step === 3) qSummary.textContent = needsList() + ' · ' + quoteState.form.site + ' · ' + quoteState.form.scale + ' · ' + quoteState.form.timeline;
    if (quoteState.error) { qError.style.display = ''; qError.textContent = quoteState.error; }
    else { qError.style.display = 'none'; }
  }

  qBack.addEventListener('click', () => { quoteState.step -= 1; quoteState.error = ''; renderQuote(); });

  qNext.addEventListener('click', () => {
    const s = quoteState, f = s.form;
    if (s.step === 1) {
      if (!s.needs.length) { s.error = 'Select at least one area of scope so we can route your enquiry.'; return renderQuote(); }
      s.step = 2; s.error = ''; return renderQuote();
    }
    if (s.step === 2) {
      if (!f.location.trim()) { s.error = 'Add a city or site location.'; return renderQuote(); }
      s.step = 3; s.error = ''; return renderQuote();
    }
    if (!f.name.trim() || !f.company.trim()) { s.error = 'Name and company are both required.'; return renderQuote(); }
    if (!/^[0-9+\-\s]{10,15}$/.test(f.phone.trim())) { s.error = 'Enter a valid phone number (10 digits).'; return renderQuote(); }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.trim())) { s.error = 'Enter a valid work email address.'; return renderQuote(); }
    s.submitted = true; s.error = ''; s.ref = 'FV-2026-' + Math.floor(1000 + Math.random() * 9000);
    renderQuote();
  });

  document.getElementById('quote-reset').addEventListener('click', () => {
    quoteState.submitted = false; quoteState.step = 1; quoteState.needs = []; quoteState.error = '';
    ['name', 'company', 'phone', 'email', 'notes'].forEach(k => { quoteState.form[k] = ''; document.getElementById('f-' + k).value = ''; });
    renderQuote();
  });

  renderQuote();
})();
