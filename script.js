// ===== DATA =====
const departments = [
  { id: 'cardio', name: 'Cardiology', icon: '❤️', color: '#ffe4e4', desc: '18 Doctors', emoji: '🫀' },
  { id: 'derm', name: 'Dermatology', icon: '🧴', color: '#fff4e4', desc: '12 Doctors', emoji: '🌿' },
  { id: 'neuro', name: 'Neurology', icon: '🧠', color: '#f0e4ff', desc: '9 Doctors', emoji: '⚡' },
  { id: 'ortho', name: 'Orthopedics', icon: '🦴', color: '#e4f4ff', desc: '14 Doctors', emoji: '💪' },
  { id: 'peds', name: 'Pediatrics', icon: '👶', color: '#e4ffe9', desc: '16 Doctors', emoji: '🌸' },
  { id: 'gyn', name: 'Gynecology', icon: '🌺', color: '#ffe4f4', desc: '11 Doctors', emoji: '🌺' },
  { id: 'eye', name: 'Ophthalmology', icon: '👁️', color: '#e4f0ff', desc: '8 Doctors', emoji: '👁️' },
  { id: 'dental', name: 'Dental', icon: '🦷', color: '#f4ffe4', desc: '10 Doctors', emoji: '🦷' },
  { id: 'ent', name: 'ENT', icon: '👂', color: '#fff0e4', desc: '7 Doctors', emoji: '🎵' },
  { id: 'psych', name: 'Psychiatry', icon: '🧘', color: '#e4fffd', desc: '9 Doctors', emoji: '🌊' },
];

const doctorsByDept = {
  cardio: [
    { name: 'Dr. Chukwuemeka Obi', spec: 'Interventional Cardiologist', exp: '18 yrs', rating: '4.9', reviews: 312, img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80', fee: '₦25,000', available: true },
    { name: 'Dr. Aisha Garba', spec: 'Cardiac Electrophysiologist', exp: '14 yrs', rating: '4.8', reviews: 248, img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80', fee: '₦22,000', available: true },
    { name: 'Dr. Funmi Adeleke', spec: 'Heart Failure Specialist', exp: '11 yrs', rating: '4.9', reviews: 189, img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80', fee: '₦20,000', available: false },
    { name: 'Dr. Yusuf Ibrahim', spec: 'Pediatric Cardiologist', exp: '15 yrs', rating: '5.0', reviews: 401, img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80', fee: '₦28,000', available: true },
  ],
  derm: [
    { name: 'Dr. Ngozi Eze', spec: 'Cosmetic Dermatologist', exp: '10 yrs', rating: '4.9', reviews: 522, img: 'https://images.unsplash.com/photo-1614890094520-9b11e5e6f8d4?w=400&q=80', fee: '₦18,000', available: true },
    { name: 'Dr. Emeka Afolabi', spec: 'Clinical Dermatologist', exp: '12 yrs', rating: '4.7', reviews: 291, img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80', fee: '₦16,000', available: true },
    { name: 'Dr. Zainab Lawal', spec: 'Pediatric Dermatologist', exp: '8 yrs', rating: '4.8', reviews: 178, img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&q=80', fee: '₦17,000', available: true },
  ],
  neuro: [
    { name: 'Dr. Segun Adeyemi', spec: 'Neuro-Oncologist', exp: '20 yrs', rating: '4.9', reviews: 188, img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80', fee: '₦30,000', available: true },
    { name: 'Dr. Chioma Okafor', spec: 'Epilepsy Specialist', exp: '13 yrs', rating: '4.8', reviews: 214, img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80', fee: '₦27,000', available: false },
  ],
  ortho: [
    { name: 'Dr. Bola Osundele', spec: 'Joint Replacement Surgeon', exp: '16 yrs', rating: '4.9', reviews: 342, img: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?w=400&q=80', fee: '₦32,000', available: true },
    { name: 'Dr. Uche Nwachukwu', spec: 'Sports Medicine', exp: '11 yrs', rating: '4.7', reviews: 267, img: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80', fee: '₦22,000', available: true },
    { name: 'Dr. Amina Danladi', spec: 'Spine Surgeon', exp: '18 yrs', rating: '5.0', reviews: 155, img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80', fee: '₦35,000', available: true },
  ],
  peds: [
    { name: 'Dr. Tunde Fashola', spec: 'Pediatric Hospitalist', exp: '14 yrs', rating: '5.0', reviews: 671, img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80', fee: '₦15,000', available: true },
    { name: 'Dr. Kemi Oduya', spec: 'Neonatologist', exp: '9 yrs', rating: '4.9', reviews: 384, img: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=400&q=80', fee: '₦18,000', available: true },
  ],
  gyn: [
    { name: 'Dr. Adaeze Okonkwo', spec: 'Obstetrician-Gynecologist', exp: '15 yrs', rating: '4.9', reviews: 503, img: 'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?w=400&q=80', fee: '₦22,000', available: true },
    { name: 'Dr. Yetunde Alabi', spec: 'Reproductive Endocrinologist', exp: '12 yrs', rating: '4.8', reviews: 276, img: 'https://images.unsplash.com/photo-1614235999428-c97e819c07d1?w=400&q=80', fee: '₦25,000', available: false },
  ],
  eye: [
    { name: 'Dr. Olumide Coker', spec: 'Cataract & LASIK Surgeon', exp: '17 yrs', rating: '4.9', reviews: 398, img: 'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=400&q=80', fee: '₦20,000', available: true },
  ],
  dental: [
    { name: 'Dr. Ifunanya Nwosu', spec: 'Cosmetic Dentist', exp: '9 yrs', rating: '4.8', reviews: 437, img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80', fee: '₦12,000', available: true },
    { name: 'Dr. Sule Musa', spec: 'Orthodontist', exp: '13 yrs', rating: '4.7', reviews: 298, img: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=400&q=80', fee: '₦14,000', available: true },
  ],
  ent: [
    { name: 'Dr. Lanre Badejo', spec: 'Rhinologist', exp: '11 yrs', rating: '4.8', reviews: 201, img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80', fee: '₦16,000', available: true },
  ],
  psych: [
    { name: 'Dr. Nkechi Obi', spec: 'Child Psychiatrist', exp: '12 yrs', rating: '4.9', reviews: 188, img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&q=80', fee: '₦20,000', available: true },
    { name: 'Dr. Femi Oshodi', spec: 'Addiction Psychiatrist', exp: '16 yrs', rating: '4.8', reviews: 132, img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80', fee: '₦22,000', available: true },
  ],
};

const shopCategories = ['All', 'Diagnostic', 'Monitoring', 'Mobility', 'Supplies', 'Therapy'];

const products = [
  { id: 1, name: 'Digital Blood Pressure Monitor', desc: 'Arm-type oscillometric monitor. WHO validated.', price: 18500, tag: 'Best Seller', cat: 'Monitoring', img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&q=80' },
  { id: 2, name: 'Pulse Oximeter Pro', desc: 'SpO2 & heart rate. Medical grade accuracy ±2%.', price: 9500, tag: 'Popular', cat: 'Monitoring', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80' },
  { id: 3, name: 'Lightweight Foldable Wheelchair', desc: 'Aluminium frame, cushioned seat, self-propelled.', price: 85000, tag: 'Premium', cat: 'Mobility', img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80' },
  { id: 4, name: 'Digital Thermometer Set', desc: 'Fast 10-sec reading. Fever alert. Waterproof.', price: 4800, tag: 'Essential', cat: 'Diagnostic', img: 'https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=400&q=80' },
  { id: 5, name: 'Stethoscope — Cardiology III', desc: 'Dual-head acoustic. Used by top cardiologists.', price: 32000, tag: 'Professional', cat: 'Diagnostic', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&q=80' },
  { id: 6, name: 'TENS Therapy Unit', desc: 'Drug-free pain relief. 16 programmable modes.', price: 27500, tag: 'Therapy', cat: 'Therapy', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80' },
  { id: 7, name: 'Surgical Gloves (100 pcs)', desc: 'Latex-free nitrile. Sterile, powder-free.', price: 6500, tag: 'Supplies', cat: 'Supplies', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&q=80' },
  { id: 8, name: 'Glucometer Kit', desc: 'Includes 50 strips. Fast 5-sec glucose reading.', price: 14500, tag: 'Diabetic Care', cat: 'Monitoring', img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&q=80' },
];

// ===== STATE =====
let cart = [];
let activeDept = null;
let activeCategory = 'All';
let selectedDoctor = '';

// ===== INIT =====
function init() {
  renderDepartments();
  renderShopTabs();
  renderProducts('All');
}

// ===== DEPARTMENTS =====
function renderDepartments() {
  const grid = document.getElementById('deptGrid');
  grid.innerHTML = departments.map(d => `
    <div class="dept-card" id="dept-${d.id}" onclick="selectDept('${d.id}')">
      <div class="dept-icon" style="background:${d.color}">${d.icon}</div>
      <h3>${d.name}</h3>
      <p>${d.desc}</p>
    </div>
  `).join('');
}

function selectDept(id) {
  document.querySelectorAll('.dept-card').forEach(c => c.classList.remove('active'));
  document.getElementById('dept-' + id).classList.add('active');
  activeDept = id;
  renderDoctors(id);
}

function renderDoctors(id) {
  const docs = doctorsByDept[id] || [];
  const dept = departments.find(d => d.id === id);
  document.getElementById('deptTitle').textContent = dept.name + ' Specialists';
  document.getElementById('deptCount').textContent = docs.length + ' doctors available';
  document.getElementById('doctorsGrid').innerHTML = docs.map(d => `
    <div class="doctor-card">
      <div class="doctor-img-wrap">
        <img src="${d.img}" alt="${d.name}" class="doctor-img" loading="lazy">
        <div class="doctor-badge">
          ${d.available ? '<i class="fas fa-circle" style="color:#00c853;font-size:8px"></i> Available' : '<i class="fas fa-circle" style="color:#e63946;font-size:8px"></i> Busy'}
        </div>
      </div>
      <div class="doctor-info">
        <h3>${d.name}</h3>
        <p class="spec">${d.spec}</p>
        <div class="doctor-meta">
          <span><i class="fas fa-briefcase-medical"></i>${d.exp} exp.</span>
          <span><i class="fas fa-star" style="color:#f4a261"></i>${d.rating} (${d.reviews})</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
          <span style="font-size:0.8rem;color:var(--gray)">Consultation fee</span>
          <span style="font-weight:700;color:var(--navy)">${d.fee}</span>
        </div>
        <button class="btn-book" onclick="openModal('${d.name}', '${d.spec}')" ${!d.available ? 'disabled style="opacity:0.5;cursor:not-allowed"' : ''}>
          ${d.available ? '<i class="fas fa-calendar-plus"></i> Book Appointment' : '<i class="fas fa-clock"></i> Currently Unavailable'}
        </button>
      </div>
    </div>
  `).join('');
  const sec = document.getElementById('doctorsSection');
  sec.classList.add('visible');
  sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== SHOP =====
function renderShopTabs() {
  document.getElementById('shopTabs').innerHTML = shopCategories.map(c => `
    <button class="tab-btn ${c === 'All' ? 'active' : ''}" onclick="filterProducts('${c}', this)">${c}</button>
  `).join('');
}

function filterProducts(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = cat;
  renderProducts(cat);
}

function renderProducts(cat) {
  const filtered = cat === 'All' ? products : products.filter(p => p.cat === cat);
  document.getElementById('productsGrid').innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="product-tag">${p.tag}</div>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="product-bottom">
          <div class="price">₦${p.price.toLocaleString()}<br><span>Incl. VAT</span></div>
          <button class="btn-cart" onclick="addToCart(${p.id})">
            <i class="fas fa-cart-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== CART =====
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast(`<strong>${product.name}</strong> added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const count = cart.reduce((s, c) => s + (c.qty || 1), 0);
  badge.textContent = count;
  badge.classList.toggle('show', count > 0);

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-basket"></i><p>Your cart is empty</p></div>';
    footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map(c => `
    <div class="cart-item">
      <img src="${c.img}" alt="${c.name}">
      <div class="cart-item-info">
        <h4>${c.name}</h4>
        <p>₦${(c.price * (c.qty || 1)).toLocaleString()} ${c.qty > 1 ? `(×${c.qty})` : ''}</p>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${c.id})"><i class="fas fa-trash"></i></button>
    </div>
  `).join('');

  const total = cart.reduce((s, c) => s + c.price * (c.qty || 1), 0);
  document.getElementById('cartTotal').textContent = '₦' + total.toLocaleString();
  footerEl.style.display = 'block';
}

function toggleCart() {
  document.getElementById('cartPanel').classList.toggle('open');
}

function checkout() {
  cart = [];
  updateCartUI();
  document.getElementById('cartPanel').classList.remove('open');
  showToast('Order placed successfully! You will receive a confirmation shortly.');
}

// ===== MODAL =====
function openModal(name, spec) {
  selectedDoctor = name;
  document.getElementById('modalSub').textContent = `Booking with ${name} — ${spec}`;
  document.getElementById('bookingModal').classList.add('open');
  document.getElementById('modalForm').classList.remove('hidden');
  document.getElementById('modalSuccess').classList.remove('show');
  // Set min date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('bookDate').min = today;
  document.getElementById('bookDate').value = today;
}

function closeModal() {
  document.getElementById('bookingModal').classList.remove('open');
}

function submitBooking() {
  const first = document.getElementById('bookFirst').value.trim();
  const email = document.getElementById('bookEmail').value.trim();
  if (!first || !email) { showToast('Please fill in required fields.'); return; }
  document.getElementById('modalForm').classList.add('hidden');
  document.getElementById('modalSuccess').classList.add('show');
}

// ===== CONTACT =====
function submitContact() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  if (!name || !email) { showToast('Please fill in your name and email.'); return; }
  showToast('Message sent! We\'ll get back to you within 24 hours.');
  ['contactName','contactEmail','contactPhone','contactSubject','contactMsg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value.trim();
  if (!email) { showToast('Please enter a valid email.'); return; }
  showToast('Successfully subscribed to our health newsletter!');
  document.getElementById('newsletterEmail').value = '';
}

// ===== MENU =====
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const ham = document.getElementById('hamburger');
  menu.classList.toggle('open');
  ham.classList.toggle('open');
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').innerHTML = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3400);
}

// ===== SCROLL NAV =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ===== CLOSE ON OUTSIDE CLICK =====
document.getElementById('bookingModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('click', function(e) {
  const panel = document.getElementById('cartPanel');
  if (panel.classList.contains('open') && !panel.contains(e.target) && !e.target.closest('.cart-wrap')) {
    panel.classList.remove('open');
  }
});

init();

// ===== SMART MONITOR =====
const historyData = [
  { time: '08:32 AM', sys: 128, dia: 82, hr: 74, spo2: 98, status: 'n', label: 'Normal' },
  { time: '06:15 AM', sys: 131, dia: 85, hr: 78, spo2: 97, status: 'n', label: 'Normal' },
  { time: '11:50 PM', sys: 148, dia: 94, hr: 88, spo2: 96, status: 'w', label: 'Elevated' },
  { time: '07:30 PM', sys: 135, dia: 87, hr: 80, spo2: 97, status: 'n', label: 'Normal' },
  { time: '02:00 PM', sys: 122, dia: 78, hr: 70, spo2: 99, status: 'n', label: 'Normal' },
];

const docMessages = {
  n: [
    "All readings look great today! Keep up with your water intake and light walks. See you tomorrow! 💪",
    "Your blood pressure is within the ideal range. Well done Emeka, keep it up! 👍",
    "Excellent progress! Maintaining this consistency will greatly benefit your cardiovascular health. ✅"
  ],
  w: [
    "Your reading is slightly elevated. Please rest, avoid salty food for now, and re-check in 30 minutes. 🧘",
    "I noticed a higher reading. Please hydrate well and avoid caffeine. If it stays high, call me. 📞",
    "Slightly above normal range. Try relaxation techniques and we'll monitor the next hour. ⏱️"
  ],
  d: [
    "⚠️ ALERT: Your blood pressure is dangerously high! Please sit down immediately. I'm calling you now!",
    "🚨 Critical reading detected! If you feel dizzy or have chest pain, go to A&E immediately. Calling now.",
    "HIGH BP ALERT: Stop all activity. Take your medication if prescribed and await my call immediately."
  ]
};

function renderHistory() {
  const icons = { n:'fa-check-circle', w:'fa-exclamation-triangle', d:'fa-times-circle' };
  document.getElementById('histBody').innerHTML = historyData.map(r => `
    <div class="hist-row">
      <span>${r.time}</span>
      <span>${r.sys}/${r.dia}</span>
      <span>${r.hr} bpm</span>
      <span>${r.spo2}%</span>
      <span class="hist-status ${r.status}">${r.label}</span>
    </div>
  `).join('');
}

function getStatus(sys) {
  if (sys < 130) return 'n';
  if (sys < 145) return 'w';
  return 'd';
}

function simulateReading() {
  const icon = document.getElementById('simIcon');
  icon.style.animation = 'spin 0.6s linear infinite';
  setTimeout(() => { icon.style.animation = ''; }, 700);

  const sys  = Math.floor(Math.random() * 65) + 108;
  const dia  = Math.floor(sys * 0.58) + Math.floor(Math.random() * 8);
  const hr   = Math.floor(Math.random() * 42) + 60;
  const spo2 = Math.floor(Math.random() * 5) + 95;
  const st   = getStatus(sys);
  const labels = { n: 'Normal', w: 'Elevated', d: 'Critical' };
  const chipIcons = { n:'fa-check-circle', w:'fa-exclamation-triangle', d:'fa-times-circle' };

  // Update hero device card
  const heroSysEl = document.getElementById('heroSys');
  if (heroSysEl) { heroSysEl.childNodes[0].textContent = sys; }
  const heroDiaEl = document.getElementById('heroDia');
  if (heroDiaEl) heroDiaEl.textContent = dia;
  const heroHREl = document.getElementById('heroHR');
  if (heroHREl) heroHREl.innerHTML = `<i class="fas fa-heartbeat" style="color:#e63946;font-size:1rem;"></i> ${hr}`;
  const heroSpo2El = document.getElementById('heroSpo2');
  if (heroSpo2El) heroSpo2El.innerHTML = `${spo2}<span style="font-size:0.9rem;color:var(--teal)">%</span>`;
  const heroStatusEl = document.getElementById('heroStatus');
  if (heroStatusEl) {
    heroStatusEl.className = `bp-status-chip ${st}`;
    heroStatusEl.innerHTML = `<i class="fas ${chipIcons[st]}"></i> ${st==='n'?'Normal Range':st==='w'?'Slightly Elevated':'⚠️ Critical!'}`;
  }

  // Update KPIs
  const kpiSysEl = document.getElementById('kpiSys');
  if (kpiSysEl) kpiSysEl.textContent = `${sys}/${dia}`;
  const kpiHREl = document.getElementById('kpiHR');
  if (kpiHREl) kpiHREl.innerHTML = `${hr} <span style="font-size:0.9rem">bpm</span>`;
  const kpiSpo2El = document.getElementById('kpiSpo2');
  if (kpiSpo2El) kpiSpo2El.innerHTML = `${spo2}<span style="font-size:0.9rem">%</span>`;
  const kpiReadEl = document.getElementById('kpiReadings');
  if (kpiReadEl) kpiReadEl.textContent = parseInt(kpiReadEl.textContent) + 1;

  const bpChange = document.getElementById('kpiBPChange');
  if (bpChange) {
    const diff = sys - historyData[0].sys;
    bpChange.textContent = diff > 0 ? `↑ ${diff} mmHg higher` : diff < 0 ? `↓ ${Math.abs(diff)} mmHg lower` : '→ Same as last';
    bpChange.className = `kpi-change ${st === 'n' ? 'good' : 'warn'}`;
  }

  // Status chip
  const chip = document.getElementById('dashStatusChip');
  if (chip) {
    chip.className = `dash-chip ${st === 'd' ? 'danger-chip' : ''}`;
    chip.innerHTML = `<i class="fas ${chipIcons[st]}"></i> ${labels[st]}`;
  }

  // Doctor message
  const msgs = docMessages[st];
  const docMsgEl = document.getElementById('docMessage');
  if (docMsgEl) {
    docMsgEl.textContent = msgs[Math.floor(Math.random()*msgs.length)];
    docMsgEl.className = `doc-message-bubble ${st === 'd' ? 'alert-msg' : ''}`;
  }

  // Add to history
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-NG', { hour:'2-digit', minute:'2-digit' });
  historyData.unshift({ time: timeStr, sys, dia, hr, spo2, status: st, label: labels[st] });
  if (historyData.length > 6) historyData.pop();
  renderHistory();

  // Notification
  const notifList = document.getElementById('notifList');
  if (notifList) {
    const newNotif = document.createElement('div');
    newNotif.className = `notif-item ${st}`;
    const notifMsgs = {
      n: `BP ${sys}/${dia} synced — reading looks normal`,
      w: `⚠️ Elevated BP ${sys}/${dia} — Dr. Obi reviewing`,
      d: `🚨 Critical BP ${sys}/${dia}! Doctor alerted immediately`
    };
    newNotif.innerHTML = `<i class="fas ${chipIcons[st]} notif-icon"></i><div><p>${notifMsgs[st]}</p><span>Just now</span></div>`;
    notifList.prepend(newNotif);
    if (notifList.children.length > 4) notifList.removeChild(notifList.lastChild);
  }

  // Toast
  const toastMsgs = { n:'✅ New reading synced — BP is Normal!', w:'⚠️ Elevated reading detected — Doctor notified!', d:'🚨 Critical reading! Dr. Obi has been alerted immediately!' };
  showToast(toastMsgs[st]);

  drawHeroChart(sys);
  drawDashChart();
}

let heroPoints = [128,131,122,135,148,131,128];
function drawHeroChart(newVal) {
  if (newVal) { heroPoints.push(newVal); heroPoints.shift(); }
  const path = document.getElementById('heroPath');
  if (!path) return;
  const max=170, min=100, w=300, h=52;
  const pts = heroPoints.map((v,i) => {
    const x = (i/(heroPoints.length-1))*w;
    const y = h - ((v-min)/(max-min))*h;
    return `${x},${y}`;
  });
  path.setAttribute('d', `M${pts.join(' L')}`);
}

function drawDashChart() {
  const canvas = document.getElementById('dashChart');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth || 600;
  canvas.height = 160;
  ctx.clearRect(0,0,canvas.width,canvas.height);

  const sysD  = [118,122,131,128,132,125,135,148,historyData[0]?.sys||128];
  const diaD  = [75,78,85,82,84,80,87,94,historyData[0]?.dia||82];
  const hrD   = [68,70,78,74,76,72,80,88,historyData[0]?.hr||74];
  const xlbls = ['12am','3am','6am','9am','12pm','3pm','6pm','9pm','Now'];
  const W=canvas.width, H=canvas.height;
  const pL=44, pR=20, pT=16, pB=30;
  const cW=W-pL-pR, cH=H-pT-pB;

  ctx.strokeStyle='rgba(255,255,255,0.06)'; ctx.lineWidth=1;
  for(let i=0;i<=4;i++){
    const y=pT+cH-(i/4)*cH;
    ctx.beginPath(); ctx.moveTo(pL,y); ctx.lineTo(W-pR,y); ctx.stroke();
  }
  ctx.fillStyle='rgba(255,255,255,0.25)'; ctx.font='10px DM Sans'; ctx.textAlign='right';
  [80,100,120,140,160].forEach((v,i)=>{ ctx.fillText(v, pL-6, pT+cH-(i/4)*cH+4); });

  function drawLine(data, c1, c2, maxV=170, minV=60) {
    const grd=ctx.createLinearGradient(0,0,W,0);
    grd.addColorStop(0,c1); grd.addColorStop(1,c2);
    ctx.beginPath(); ctx.strokeStyle=grd; ctx.lineWidth=2.5; ctx.lineJoin='round'; ctx.lineCap='round';
    data.forEach((v,i)=>{
      const x=pL+(i/(data.length-1))*cW;
      const y=pT+cH-((v-minV)/(maxV-minV))*cH;
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }); ctx.stroke();
    ctx.fillStyle=c1;
    data.forEach((v,i)=>{
      ctx.beginPath();
      ctx.arc(pL+(i/(data.length-1))*cW, pT+cH-((v-minV)/(maxV-minV))*cH, 3,0,Math.PI*2);
      ctx.fill();
    });
  }
  drawLine(sysD,'#e63946','#ff6b74');
  drawLine(diaD,'#00a99d','#00d9cc');
  drawLine(hrD,'#f4a261','#f4c261');

  ctx.fillStyle='rgba(255,255,255,0.25)'; ctx.font='10px DM Sans'; ctx.textAlign='center';
  xlbls.forEach((l,i)=>{ ctx.fillText(l, pL+(i/(xlbls.length-1))*cW, H-6); });
}

function simulateCall() { showToast('📞 Connecting you to Dr. Chukwuemeka Obi...'); }
function simulateMessage() { showToast('💬 Opening secure chat with Dr. Obi...'); }

const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }';
document.head.appendChild(spinStyle);

renderHistory();
setTimeout(() => { drawHeroChart(); drawDashChart(); }, 400);
window.addEventListener('resize', drawDashChart);