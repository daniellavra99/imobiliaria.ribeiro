/***********************
 * DADOS DOS PRODUTOS
 * Use `imgs` (array) para múltiplas fotos
 ***********************/
const products = [
  {
    id: 1, title: "Apartamento no Centro", price: "225.000,00", cat: "Apartamentos",
    imgs: [
      "imagens/apartamento/apartamento1.jpg",
      "imagens/apartamento/apartamento2.jpg",
      "imagens/apartamento/apartamento3.jpg",
      "imagens/apartamento/apartamento4.jpg"
    ],
    desc: "Apartamento bem localizado no centro com 2 quartos e garagem ,Rua Olegário Maciel nº157.\n\n Celular: (32) 99283-8169.",
    whatsappMsg: "Olá! Gostaria de visitar esse Apartamento. Pode confirmar?"
  },
  {
    id: 2, title: "Apartamento na Santa Helena", price: "375.000,00", cat: "Apartamentos",
    imgs: [
      "imagens/apartament/apartament1.jpg",
      "imagens/apartament/apartament2.jpg",
      "imagens/apartament/apartament3.jpg",
      "imagens/apartament/apartament4.jpg",
      "imagens/apartament/apartament5.jpg",
      "imagens/apartament/apartament6.jpg",
      "imagens/apartament/apartament7.jpg",
      "imagens/apartament/apartament8.jpg",
      "imagens/apartament/apartament9.jpg",
      "imagens/apartament/apartament10.jpg"
    ],
    desc: "Apartamento com 3 quartos, 2 banheiros e varanda, Rua Luis Sansão nº30.\n\n Celular: (32) 99292-8873.",
    whatsappMsg: "Olá! Gostaria de conhecer esse apartamento. Pode confirmar?"
  },
  {
    id: 3, title: "Casa no AlphaVille", price: "875.000,00", cat: "Casas",
    imgs: [
      "imagens/casa/casa1.jpg",
      "imagens/casa/casa2.jpg",
      "imagens/casa/casa3.jpg  ",
      "imagens/casa/casa4.jpg",
      "imagens/casa/casa5.jpg",
      "imagens/casa/casa6.jpg",
      "imagens/casa/casa7.jpg",
      "imagens/casa/casa8.jpg",
      "imagens/casa/casa9.jpg",
      "imagens/casa/casa10.jpg",
      "imagens/casa/casa11.jpg",
      "imagens/casa/casa12.jpg",
      "imagens/casa/casa13.jpg",
      "imagens/casa/casa14.jpg",
      "imagens/casa/casa15.jpg",
      "imagens/casa/casa16.jpg"

    ],
    desc: "Casa nova com piscina e churrasqueira , Rua Oscar Vidal nº27.\n\n Celular: (32) 99292-8173.",
    whatsappMsg: "Olá! Gostaria de visitar esta casa. Pode confirmar?"
  },
  {
    id: 4, title: "Terreno plano em Bairu", price: "185.000,00", cat: "Terrenos",
    imgs: [
      "imagens/terreno/terreno1.jpg",
      "imagens/terreno/terreno2.jpg",
      "imagens/terreno/terreno3.jpg",
      "imagens/terreno/terreno4.jpg",
    ],
    desc: "Terreno com excelente frente e profundidade, viabilidade para projetos diversos, Rua Luiz Xavier nº12.\n\n Celular: (32) 99292-8873.",
    whatsappMsg: "Olá! Gostaria de visitar este terreno. Pode confirmar?"
  },
  {
    id: 5, title: "Terreno grande e bem localizado em Santa Luzia", price: "155.000,00", cat: "Terrenos",
   imgs: [
      "imagens/terren/terren1.jpg",
      "imagens/terren/terren2.jpg",
      "imagens/terren/terren3.jpg"
    ],
    desc: "Terreno grande e bem localizado com preço acessível com 175m², Rua São Sebastião nº13.\n\n Celular: (32) 97400-1088.",
    whatsappMsg: "Olá! Gostaria de visitar o terreno. Pode confirmar?"
  },
  {
    id: 6, title: "Casa grande no São Pedro", price: "740.000,00", cat: "Casas",
    imgs: [
      "imagens/cas/cas1.jpg",
      "imagens/cas/cas2.jpg",
      "imagens/cas/cas3.jpg",
      "imagens/cas/cas4.jpg",
      "imagens/cas/cas4.jpg",
      "imagens/cas/cas5.jpg",
      "imagens/cas/cas6.jpg",
      "imagens/cas/cas7.jpg",
      "imagens/cas/cas8.jpg"
    ],
    desc: "Charmosa casa térrea com 2 quartos, jardim privativo e área de lazer,Rua Itamar Franco  nº109.\n\n Celular: (32) 99803-9570.",
    whatsappMsg: "Olá! Gostaria de conhecer essa casa. Pode confirmar?"
  },
  {id: 7, title: "Terreno à venda", price: "275.000,00", cat: "Terrenos",
   imgs: [
      "imagens/terrenos/terrenos1.jpg",
      "imagens/terrenos/terrenos2.jpg",
      "imagens/terrenos/terrenos3.jpg"
    ],
    desc: "300 m², topografia plana, ideal para construir sua casa dos sonhos; localização valorizada, Rua São Sebastião nº13.\n\n Celular: (32) 97400-1088.",
    whatsappMsg: "Olá! Gostaria de visitar o terreno. Pode confirmar?"
  },
  {
    id: 8, title: "Residência moderna", price: "725.000,00", cat: "Casas",
    imgs: [
      "imagens/casas/casas1.jpg",
      "imagens/casas/casas2.jpg",
      "imagens/casas/casas3.jpg",
      "imagens/casas/casas4.jpg",
      "imagens/casas/casas4.jpg",
      "imagens/casas/casas5.jpg"
    ],
    desc: "Residência moderna: suíte, varanda gourmet e acabamento de qualidade,Rua Oscar Niemeyer nº270.\n\n Celular: (32) 99803-9570.",
    whatsappMsg: "Olá! Gostaria de conhecer essa residência. Pode confirmar?"
  },
  {id: 9, title: "Apartamento com suíte", price: "155.000,00", cat: "Apartamentos",
   imgs: [
      "imagens/apartamen/apartamen1.jpg",
      "imagens/apartamen/apartamen2.jpg",
      "imagens/apartamen/apartamen3.jpg",
      "imagens/apartamen/apartamen4.jpg",
      "imagens/apartamen/apartamen5.jpg",
      "imagens/apartamen/apartamen6.jpg"
    ],
    desc: "Apartamento com suíte: acabamento moderno, boa iluminação e área de lazer completa, Rua São Sebastião nº13.\n\n Celular: (32) 97400-1088.",
    whatsappMsg: "Olá! Gostaria de visitar este apartamento. Pode confirmar?"
  }

];

/***********************
 * CONFIGURAÇÕES RÁPIDAS
 ***********************/
const whatsappPhone = "5524992928873"; // número em formato internacional sem sinais
const brandName = "Ribeiro Imóveis";

/***********************
 * ELEMENTOS
 ***********************/
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

/***********************
 * Monta lista de categorias
 ***********************/
const categories = ["Todos", ...Array.from(new Set(products.map(p => p.cat)))];
let activeCat = "Todos";
categories.forEach(cat => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn ' + (cat === "Todos" ? "active" : "");
  btn.innerText = cat;
  btn.onclick = () => { document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); activeCat = cat; render(); }
  filtersEl.appendChild(btn);
});

/***********************
 * Renderiza produtos (cards)
 ***********************/
function render(){
  const q = (searchInput.value || "").toLowerCase().trim();
  grid.innerHTML = "";
  const filtered = products.filter(p => {
    const inCat = activeCat === "Todos" ? true : p.cat === activeCat;
    const matches = [p.title, p.desc, p.price, p.cat].join(" ").toLowerCase().includes(q);
    return inCat && matches;
  });
  if(filtered.length === 0){
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

function escapeHtml(str){ return (str||"").replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

/***********************
 * WhatsApp -> abre com mensagem predefinida
 ***********************/
function openWhatsApp(productId){
  const p = products.find(x=>x.id===productId);
  const msg = encodeURIComponent(`${p.whatsappMsg} (${brandName} / catálogo)`);
  const link = `https://wa.me/${whatsappPhone}?text=${msg}`;
  window.open(link, '_blank');
}

/***********************
 * Modal de detalhes + Carrossel
 ***********************/
let currentImages = [];
let currentIndex = 0;
let currentProductId = null;

function showDetails(productId){
  const p = products.find(x => x.id === productId);
  currentImages = (p.imgs && p.imgs.length) ? p.imgs.slice() : [''];
  currentIndex = 0;
  currentProductId = productId;

  carouselImg.src = currentImages[currentIndex] || '';
  detailTitle.innerText = p.title;
  detailDesc.innerText = p.desc;
  detailPrice.innerHTML = `<span class="currency">R$</span> ${escapeHtml(p.price)}`;
  detailCat.innerText = p.cat;

  // montar thumbs
  thumbsContainer.innerHTML = '';
  currentImages.forEach((src, idx) => {
    const t = document.createElement('img');
    t.src = src;
    t.alt = p.title + ' - ' + (idx+1);
    t.className = idx === 0 ? 'active' : '';
    t.onclick = () => { currentIndex = idx; updateCarousel(); }
    thumbsContainer.appendChild(t);
  });

  detailsModal.style.display = "flex";

  detailWhats.onclick = () => openWhatsApp(productId);
  detailClose.onclick = closeDetails;
  closeDetailsBtn.onclick = closeDetails;
}

function closeDetails(){
  detailsModal.style.display = "none";
}

function updateCarousel(){
  carouselImg.src = currentImages[currentIndex] || '';
  // atualizar classe nas thumbs
  Array.from(thumbsContainer.children).forEach((el, idx) => {
    if(idx === currentIndex) el.classList.add('active'); else el.classList.remove('active');
  });
}

function nextImg(){
  if(!currentImages.length) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateCarousel();
}

function prevImg(){
  if(!currentImages.length) return;
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateCarousel();
}

prevBtn.addEventListener('click', prevImg);
nextBtn.addEventListener('click', nextImg);

// fechar modal clicando fora do conteúdo
detailsModal.addEventListener('click', (e) => {
  if(e.target === detailsModal) closeDetails();
});

/***********************
 * Busca em tempo real
 ***********************/
searchInput.addEventListener('input', ()=>render());

/***********************
 * QR Code do catálogo
 ***********************/
qrBtn.addEventListener('click', ()=> {
  const url = location.href; // link atual (cada cliente terá seu link único)
  catalogLink.value = url;
  qrcodeEl.innerHTML = "";
  new QRCode(qrcodeEl, { text: url, width: 180, height: 180 });
  qrModal.style.display = 'flex';
});
qrClose.addEventListener('click', ()=>qrModal.style.display='none');
copyBtn.addEventListener('click', ()=> {
  catalogLink.select(); catalogLink.setSelectionRange(0,99999);
  document.execCommand('copy');
  copyBtn.innerText = "Copiado ✓";
  setTimeout(()=> copyBtn.innerText = "Copiar link", 1500);
});
// fechar QR clicando fora
qrModal.addEventListener('click', (e) => { if(e.target === qrModal) qrModal.style.display = 'none'; });

/***********************
 * Inicializa
 ***********************/

render();





