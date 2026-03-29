// ── Sample product catalogue ────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: "LG 43\" 4K Smart TV",
    brand: "LG", model: "43UQ7500",
    category: "Television",
    price: 85000, sale_price: 72000, on_sale: true, show_on_home: true,
    image_url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
    description: "43-inch 4K UHD Smart TV with HDR10 Pro, webOS, and built-in Google Assistant. Perfect for living rooms with vibrant colours and crisp detail."
  },
  {
    id: 2,
    name: "Samsung 1.5 Ton Inverter AC",
    brand: "Samsung", model: "AR18TYHYBWKNFA",
    category: "Air Conditioner",
    price: 72000, sale_price: null, on_sale: false, show_on_home: true,
    image_url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
    description: "5-star inverter split AC with fast cooling, auto clean, and Wi-Fi connectivity. Ideal for rooms up to 180 sq ft."
  },
  {
    id: 3,
    name: "Haier 320L Double Door Refrigerator",
    brand: "Haier", model: "HRF-3674PMG",
    category: "Refrigerator",
    price: 55000, sale_price: 49000, on_sale: true, show_on_home: true,
    image_url: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80",
    description: "320-litre frost-free double-door refrigerator with twin inverter compressor and 10-year warranty."
  },
  {
    id: 4,
    name: "LG 8 Kg Front Load Washing Machine",
    brand: "LG", model: "FHM1408BDL",
    category: "Washing Machine",
    price: 68000, sale_price: null, on_sale: false, show_on_home: false,
    image_url: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80",
    description: "8 kg front-load washer with AI Direct Drive, Steam+ technology, and TurboWash 360° for a powerful clean."
  },
  {
    id: 5,
    name: "Godrej 23L Microwave Oven",
    brand: "Godrej", model: "GME 523 CF1",
    category: "Microwave",
    price: 14500, sale_price: 12500, on_sale: true, show_on_home: true,
    image_url: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&q=80",
    description: "23-litre convection microwave with 25 auto-cook menus, crisp function, and multi-stage cooking."
  },
  {
    id: 6,
    name: "Midea 55\" QLED Smart TV",
    brand: "Midea", model: "MI-55UHDQ",
    category: "Television",
    price: 115000, sale_price: 98000, on_sale: true, show_on_home: true,
    image_url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
    description: "55-inch QLED with Dolby Vision, 120 Hz refresh rate, and Android 11 smart platform."
  },
  {
    id: 7,
    name: "CG 2 Ton Window AC",
    brand: "CG", model: "CG-W24TF",
    category: "Air Conditioner",
    price: 48000, sale_price: null, on_sale: false, show_on_home: false,
    image_url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
    description: "2-ton window AC with turbo cool, sleep mode, and dust filter — great for offices and large rooms."
  },
  {
    id: 8,
    name: "TCL 32\" HD Smart TV",
    brand: "TCL", model: "32S5400A",
    category: "Television",
    price: 32000, sale_price: 27500, on_sale: true, show_on_home: false,
    image_url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
    description: "32-inch HD Smart TV with Google TV, Dolby Audio, and built-in Chromecast."
  },
  {
    id: 9,
    name: "Hitachi 260L Single Door Refrigerator",
    brand: "Hitachi", model: "R-H230PND",
    category: "Refrigerator",
    price: 38000, sale_price: null, on_sale: false, show_on_home: false,
    image_url: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80",
    description: "260-litre single-door refrigerator with deodorizer filter and eco inverter for energy savings."
  },
  {
    id: 10,
    name: "Yasuda 7 Kg Top Load Washer",
    brand: "Yasuda", model: "YS-700TLAS",
    category: "Washing Machine",
    price: 22000, sale_price: 19500, on_sale: true, show_on_home: false,
    image_url: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80",
    description: "7 kg fully automatic top-load washing machine with 8 wash programs and child lock safety."
  },
  {
    id: 11,
    name: "Mi 43\" 4K Android TV",
    brand: "MI", model: "L43M6-ESG",
    category: "Television",
    price: 42000, sale_price: null, on_sale: false, show_on_home: true,
    image_url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
    description: "43-inch 4K Android TV with PatchWall UI, 20 W Dolby Audio, and 2 GB RAM."
  },
  {
    id: 12,
    name: "DHI 1.5 Ton Split AC",
    brand: "DHI", model: "DHI-18K5A",
    category: "Air Conditioner",
    price: 44000, sale_price: 39000, on_sale: true, show_on_home: false,
    image_url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
    description: "5-star split AC with fast cooling, dehumidifier mode, and auto restart after power cut."
  }
];

const CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))].sort();

// ── Utility helpers ─────────────────────────────────────────────────────────
function formatNPR(n) {
  return 'रु. ' + Math.round(n).toLocaleString('en-IN');
}

function discountPct(price, sale) {
  return Math.round((price - sale) / price * 100);
}

function productCard(p, size = 'col-6 col-lg-4') {
  const priceHTML = p.on_sale
    ? `<p class="mb-1"><span class="text-decoration-line-through text-muted fs-6">${formatNPR(p.price)}</span></p>
       <p class="fs-5 fw-bold text-danger mb-3">${formatNPR(p.sale_price)}</p>`
    : `<p class="fs-5 fw-bold mb-3" style="color:var(--brand-green)">${formatNPR(p.price)}</p>`;

  return `
  <div class="${size}">
    <div class="card h-100 border-0 shadow-sm product-card overflow-hidden" style="border-radius:15px">
      <div class="p-3 bg-white text-center position-relative">
        ${p.on_sale ? `<span class="badge bg-danger position-absolute top-0 start-0 m-2">${discountPct(p.price, p.sale_price)}% OFF</span>` : ''}
        <img src="${p.image_url}" class="card-img-top" alt="${p.name}"
             style="height:160px;object-fit:contain" onerror="this.src='https://via.placeholder.com/300'">
      </div>
      <div class="card-body d-flex flex-column text-center">
        <h6 class="fw-bold mb-1">${p.name}</h6>
        <p class="text-muted small mb-2">${p.brand}</p>
        ${priceHTML}
        <div class="mt-auto">
          <a href="product.html?id=${p.id}" class="btn btn-outline-primary btn-sm w-100 rounded-pill mb-2">Details</a>
          <a href="https://wa.me/9779803971968?text=I%20am%20interested%20in%20${encodeURIComponent(p.name)}"
             class="btn btn-primary btn-sm w-100 rounded-pill">
            <i class="bi bi-whatsapp"></i> Enquire Us
          </a>
        </div>
      </div>
    </div>
  </div>`;
}

// Shared navbar & footer injected by each page
function getNavbar() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const active = (href) => page === href ? 'active fw-bold' : '';
  return `
  <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
        <span style="color:var(--brand-green);font-size:1.6rem;font-weight:800">✔</span>
        <span style="font-weight:700">Tick Mark</span>
        <span class="text-muted fw-normal small d-none d-md-inline">Home Appliances</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMain">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link ${active('products.html')}" href="products.html" style="color:#333">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${active('contact.html')}" href="contact.html" style="color:#333">Contact</a>
          </li>
        </ul>
        <form class="d-flex mx-auto my-2 my-lg-0" id="searchForm" style="max-width:400px;width:100%">
          <input class="form-control me-2 rounded-pill" type="search" id="searchInput"
                 placeholder="Search TVs, ACs, Fridges..." aria-label="Search">
          <button class="btn btn-success rounded-pill px-4" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center"></ul>
      </div>
    </div>
  </nav>`;
}

function getFooter() {
  return `
  <footer class="bg-light text-center py-4 mt-auto border-top">
    <p class="mb-0 text-muted">© 2025 Tick Mark Home Appliances • Kathmandu, Nepal</p>
    <small class="text-muted">All rights reserved</small>
  </footer>
  <a href="https://wa.me/9779803971968?text=Hello%20from%20Tick%20Mark%20website!%20I%20need%20help%20with..."
     class="whatsapp-float" target="_blank" rel="noopener noreferrer" title="Chat with us on WhatsApp">
    <i class="bi bi-whatsapp"></i>
    <span class="speech-bubble">Chat with us</span>
  </a>`;
}

function initSearch() {
  const form = document.getElementById('searchForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = document.getElementById('searchInput').value.trim();
      if (q) location.href = `search.html?q=${encodeURIComponent(q)}`;
    });
  }
}
