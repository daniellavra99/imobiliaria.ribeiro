const products = [
  {
    id: 1, title: "Necessaire Flores", price: "99,90", cat: "Necessaires",
    imgs: [
      "imagens/necessaire1.jpeg",
      "imagens/necessaire2.jpeg",
      "imagens/necessaire3.jpeg",
      "imagens/necessaire4.jpeg"
    ],
    desc: "Você encontra nossos produtos na feirinha de Itaipava ,Rua 6 Box 210.\n\n Celular: (24) 99292-8873.\n\n Aceitamos encomendas 📦 👝",
    whatsappMsg: "Olá! Gostaria de encomendar essa Necessaire. Pode confirmar?"
  },
  {
    id: 2, title: "Bag forrada", price: "49,99", cat: "Bags",
    imgs: [
      "imagens/bag1.jpeg",
      "imagens/bag2.jpeg",
      "imagens/bag3.jpeg"
    ],
    desc: "Você encontra nossos produtos na feirinha de Itaipava ,Rua 6 Box 210.\n\n Celular: (24) 99292-8873.\n\n Aceitamos encomendas 📦 👝",
    whatsappMsg: "Olá! Gostaria de encomendar essa Bag. Pode confirmar?"
  },
  {
    id: 3, title: "Bolsa White", price: "179,99", cat: "Bolsas",
    imgs: [
      "imagens/bolsa1.jpeg",
      "imagens/bolsa2.jpeg"
    ],
    desc: "Você encontra nossos produtos na feirinha de Itaipava ,Rua 6 Box 210.\n\n Celular: (24) 99292-8873.\n\n Aceitamos encomendas 📦 👝",
    whatsappMsg: "Olá! Gostaria de encomendar essa Bolsa. Pode confirmar?"
  },
  {
    id: 4, title: "Maleta Estampada", price: "89,90", cat: "Maletas",
    imgs: [
      "imagens/maleta1.jpeg",
      "imagens/maleta2.jpeg",
      "imagens/maleta3.jpeg",
      "imagens/maleta4.jpeg",
    ],
    desc: "Você encontra nossos produtos na feirinha de Itaipava ,Rua 6 Box 210.\n\n Celular: (24) 99292-8873.\n\n Aceitamos encomendas 📦 👝",
    whatsappMsg: "Olá! Gostaria de encomendar essa Maleta. Pode confirmar?"
  },
  {
    id: 5, title: "Maletinha irlandesa", price: "35,00", cat: "Maletas",
    imgs: [
      "imagens/maletinha1.jpeg",
      "imagens/maletinha2.jpeg",
      "imagens/maletinha3.jpeg"
    ],
    desc: "Você encontra nossos produtos na feirinha de Itaipava ,Rua 6 Box 210.\n\n Celular: (24) 99292-8873.\n\n Aceitamos encomendas 📦 👝",
    whatsappMsg: "Olá! Gostaria de encomendar essa Maletinha. Pode confirmar?"
  },
  {
    id: 6, title: "Porta-celular", price: "19.99", cat: "Porta-celular",
    imgs: [
      "imagens/portacelular1.jpeg",
    ],
    desc: "Você encontra nossos produtos na feirinha de Itaipava ,Rua 6 Box 210.\n\n Celular: (24) 99292-8873.\n\n Aceitamos encomendas 📦 👝",
    whatsappMsg: "Olá! Gostaria de encomendar esse Porta-celular. Pode confirmar?"
  }
];

const whatsappPhone = "5524992928873";
const brandName = "Deise Matelassê";

const grid = document.getElementById('grid');
const filtersEl = document.getElementById('filters');
const searchInput = document.getElementById('searchInput');
const qrBtn = document.getElementById('qrBtn');
const qrModal = document.getElementById('qrModal');
const qrcodeEl = document.getElementById('qrcode');
const catalogLink = document.getElementById('catalogLink');
const qrClose = document.getElementById('qrClose');
const copyBtn = document.getElementById('copyBtn');

const detailsModal = document.getElementById('detailsModal');
const carouselImg = document.getElementById('carouselImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbsContainer = document.getElementById('thumbsContainer');
const detailTitle = document.getElementById('detailTitle');
const detailDesc = document.getElementById('detailDesc');
const detailPrice = document.getElementById('detailPrice');
const detailCat = document.getElementById('detailCat');
const detailWhats = document.getElementById('detailWhats');
const detailClose = document.getElementById('detailClose');
const closeDetailsBtn = document.getElementById('closeDetailsBtn');

const categories = ["Todos", ...Array.from(new Set(products.map(p => p.cat)))];
let activeCat = "Todos";
categories.forEach(cat => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn ' + (cat === "Todos" ? "active" : "");
  btn.innerText = cat;
  btn.onclick = () => { document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); activeCat = cat; render(); }
  filtersEl.appendChild(btn);
});

function render() {
  const q = (searchInput.value || "").toLowerCase().trim();
  grid.innerHTML = "";
  const filtered = products.filter(p => {
    const inCat = activeCat === "Todos" ? true : p.cat === activeCat;
    const matches = [p.title, p.desc, p.price, p.cat].join(" ").toLowerCase().includes(q);
    return inCat && matches;
  });
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;padding:22px;border-radius:10px;background:#fff;text-align:center;color:${getComputedStyle(document.documentElement).getPropertyValue('--muted')};">Nenhum produto encontrado.</div>`;
    return;
  }
  filtered.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    const thumbSrc = (p.imgs && p.imgs.length) ? p.imgs[0] : '';
    card.innerHTML = `
      <img class="thumb" src="${thumbSrc}" alt="${escapeHtml(p.title)}"onclick="showDetails(${p.id})" style="cursor:pointer;" />
      <div class="meta">
        <div>
          <div class="title">${escapeHtml(p.title)}</div>
          <div class="desc">${escapeHtml(p.desc)}</div>
        </div>
        <div style="text-align:right">
          <div class="price"><span class="currency">R$</span> ${escapeHtml(p.price)}</div>
          <div style="font-size:12px;color:var(--muted);margin-top:6px">${escapeHtml(p.cat)}</div>
        </div>
      </div>
      <div class="actions">
        <button class="btn whatsapp" onclick='openWhatsApp(${p.id})'>🟢 WhatsApp</button>
        <button class="btn details" onclick='showDetails(${p.id})'>🔍 Detalhes</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function escapeHtml(str) { return (str || "").replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'); }

function openWhatsApp(productId) {
  const p = products.find(x => x.id === productId);
  const msg = encodeURIComponent(`${p.whatsappMsg} (${brandName} / catálogo)`);
  const link = `https://wa.me/${whatsappPhone}?text=${msg}`;
  window.open(link, '_blank');
}

let currentImages = [];
let currentIndex = 0;
let currentProductId = null;

function showDetails(productId) {
  const p = products.find(x => x.id === productId);
  currentImages = (p.imgs && p.imgs.length) ? p.imgs.slice() : [''];
  currentIndex = 0;
  currentProductId = productId;

  carouselImg.src = currentImages[currentIndex] || '';
  detailTitle.innerText = p.title;
  detailDesc.innerText = p.desc;
  detailPrice.innerHTML = `<span class="currency">R$</span> ${escapeHtml(p.price)}`;
  detailCat.innerText = p.cat;

  thumbsContainer.innerHTML = '';
  currentImages.forEach((src, idx) => {
    const t = document.createElement('img');
    t.src = src;
    t.alt = p.title + ' - ' + (idx + 1);
    t.className = idx === 0 ? 'active' : '';
    t.onclick = () => { currentIndex = idx; updateCarousel(); }
    thumbsContainer.appendChild(t);
  });

  detailsModal.style.display = "flex";

  detailWhats.onclick = () => openWhatsApp(productId);
  detailClose.onclick = closeDetails;
  closeDetailsBtn.onclick = closeDetails;
}

function closeDetails() {
  detailsModal.style.display = "none";
}

function updateCarousel() {
  carouselImg.src = currentImages[currentIndex] || '';
  Array.from(thumbsContainer.children).forEach((el, idx) => {
    if (idx === currentIndex) el.classList.add('active'); else el.classList.remove('active');
  });
}

function nextImg() {
  if (!currentImages.length) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateCarousel();
}

function prevImg() {
  if (!currentImages.length) return;
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateCarousel();
}

prevBtn.addEventListener('click', prevImg);
nextBtn.addEventListener('click', nextImg);

detailsModal.addEventListener('click', (e) => {
  if (e.target === detailsModal) closeDetails();
});

searchInput.addEventListener('input', () => render());

qrBtn.addEventListener('click', () => {
  const url = location.href;
  catalogLink.value = url;
  qrcodeEl.innerHTML = "";
  new QRCode(qrcodeEl, { text: url, width: 180, height: 180 });
  qrModal.style.display = 'flex';
});
qrClose.addEventListener('click', () => qrModal.style.display = 'none');
copyBtn.addEventListener('click', () => {
  catalogLink.select(); catalogLink.setSelectionRange(0, 99999);
  document.execCommand('copy');
  copyBtn.innerText = "Copiado ✓";
  setTimeout(() => copyBtn.innerText = "Copiar link", 1500);
});
qrModal.addEventListener('click', (e) => { if (e.target === qrModal) qrModal.style.display = 'none'; });

render();
