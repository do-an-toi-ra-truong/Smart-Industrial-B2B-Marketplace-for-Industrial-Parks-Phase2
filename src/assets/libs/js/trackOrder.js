/**
 * trackOrder.js
 * IndusLink B2B – Track Order Page Logic
 */

'use strict';

/* ============================================================
   Mock Database – simulates 3 demo orders
   ============================================================ */
const MOCK_ORDERS = {
  'IL-2024-001234': {
    orderId:   'IL-2024-001234',
    date:      'Jan 15, 2024',
    carrier:   'Viettel Post',
    eta:       'Apr 25, 2024',
    status:    'in-transit',   // pending | processing | shipped | in-transit | delivered | cancelled
    tracking:  'VTPOST-7842691',
    recipient: 'Nguyen Van Huy',
    address:   'Lot A2-15, VSIP I Industrial Zone, Thuan An City, Binh Duong Province, Vietnam',
    phone:     '+84 384 235 007',
    total:     '$12,850.00',
    items: [
      { name: 'Siemens S7-1200 PLC Module (×5)', qty: 5, price: '$1,250.00' },
      { name: 'ABB ACS580 Variable Frequency Drive (×2)', qty: 2, price: '$6,400.00' },
      { name: 'Omron Proximity Sensor E2E (×20)', qty: 20, price: '$1,200.00' },
      { name: 'Schneider iC60 MCB Breaker (×30)', qty: 30, price: '$4,000.00' },
    ],
    timeline: [
      { icon: 'bi-check-circle-fill', label: 'Order Placed',      time: 'Jan 15, 2024 – 09:14',     desc: 'Your order has been received and confirmed.',                          done: true,    active: false },
      { icon: 'bi-gear-fill',         label: 'Processing',        time: 'Jan 16, 2024 – 11:02',     desc: 'Supplier is preparing and packing your industrial components.',        done: true,    active: false },
      { icon: 'bi-box-seam-fill',     label: 'Shipped',           time: 'Jan 18, 2024 – 14:30',     desc: 'Shipment handed over to Viettel Post. Tracking: VTPOST-7842691.',     done: true,    active: false },
      { icon: 'bi-truck',             label: 'In Transit',        time: 'Jan 20, 2024 – 08:17',     desc: 'Package is currently in transit to your delivery address.',            done: false,   active: true  },
      { icon: 'bi-house-check-fill',  label: 'Out for Delivery',  time: 'Estimated Apr 24, 2024',   desc: 'Carrier will be dispatching your package to the final address soon.',  done: false,   active: false },
      { icon: 'bi-patch-check-fill',  label: 'Delivered',         time: 'Estimated Apr 25, 2024',   desc: 'Package delivered. Please inspect goods upon receipt.',               done: false,   active: false },
    ],
  },

  'IL-2024-005678': {
    orderId:   'IL-2024-005678',
    date:      'Mar 02, 2024',
    carrier:   'GHN Express',
    eta:       'Apr 21, 2024',
    status:    'delivered',
    tracking:  'GHN-84XP9934',
    recipient: 'Tran Thi Lan',
    address:   'Building 3, Amata City Industrial Zone, Bien Hoa, Dong Nai Province, Vietnam',
    phone:     '+84 909 123 456',
    total:     '$3,420.00',
    items: [
      { name: 'Grundfos CM5-5 Industrial Pump (×1)', qty: 1, price: '$1,620.00' },
      { name: '304 Stainless Steel Pipe 3" – 6m (×10)', qty: 10, price: '$1,800.00' },
    ],
    timeline: [
      { icon: 'bi-check-circle-fill', label: 'Order Placed',      time: 'Mar 02, 2024 – 10:00', desc: 'Order confirmed by supplier.',                                           done: true, active: false },
      { icon: 'bi-gear-fill',         label: 'Processing',        time: 'Mar 03, 2024 – 13:30', desc: 'Items packed and quality-checked.',                                      done: true, active: false },
      { icon: 'bi-box-seam-fill',     label: 'Shipped',           time: 'Mar 05, 2024 – 09:15', desc: 'Handed over to GHN Express. Tracking: GHN-84XP9934.',                   done: true, active: false },
      { icon: 'bi-truck',             label: 'In Transit',        time: 'Mar 07, 2024 – 16:40', desc: 'Package transited through Ho Chi Minh City hub.',                        done: true, active: false },
      { icon: 'bi-house-check-fill',  label: 'Out for Delivery',  time: 'Apr 20, 2024 – 07:55', desc: 'Driver dispatched to delivery address.',                                 done: true, active: false },
      { icon: 'bi-patch-check-fill',  label: 'Delivered',         time: 'Apr 21, 2024 – 11:22', desc: '✅ Package delivered successfully. Signed by Tran Thi Lan.',             done: true, active: true  },
    ],
  },

  'IL-2024-009999': {
    orderId:   'IL-2024-009999',
    date:      'Apr 18, 2024',
    carrier:   'DHL Express',
    eta:       'May 05, 2024',
    status:    'processing',
    tracking:  'DHL-3489221VN',
    recipient: 'Le Minh Duc (Procurement Dept.)',
    address:   'KCN My Phuoc 3, Ben Cat District, Binh Duong Province, Vietnam',
    phone:     '+84 765 000 123',
    total:     '$28,500.00',
    items: [
      { name: 'KUKA KR 6 R900-2 Industrial Robot Arm (×1)', qty: 1, price: '$22,000.00' },
      { name: 'Safety Light Curtain SICK C4000 (×2)', qty: 2, price: '$3,200.00' },
      { name: 'Fanuc Servo Motor α8/3000 (×3)', qty: 3, price: '$3,300.00' },
    ],
    timeline: [
      { icon: 'bi-check-circle-fill', label: 'Order Placed',     time: 'Apr 18, 2024 – 08:45', desc: 'Large-volume order confirmed. Awaiting supplier confirmation.',    done: true,  active: false },
      { icon: 'bi-gear-fill',         label: 'Processing',       time: 'Apr 19, 2024 – 14:10', desc: 'Supplier assembling your custom bulk order. ETA 5–7 business days.', done: false, active: true  },
      { icon: 'bi-box-seam-fill',     label: 'Shipped',          time: 'Estimated Apr 26, 2024', desc: 'Will ship via DHL Express once packaging is complete.',           done: false, active: false },
      { icon: 'bi-truck',             label: 'In Transit',       time: 'Estimated Apr 28, 2024', desc: '—',                                                               done: false, active: false },
      { icon: 'bi-house-check-fill',  label: 'Out for Delivery', time: 'Estimated May 04, 2024', desc: '—',                                                               done: false, active: false },
      { icon: 'bi-patch-check-fill',  label: 'Delivered',        time: 'Estimated May 05, 2024', desc: '—',                                                               done: false, active: false },
    ],
  },
};

/* ============================================================
   Status Configuration
   ============================================================ */
const STATUS_CONFIG = {
  pending:    { label: 'Pending',     icon: 'bi-hourglass-split',  cls: 'to-status--pending'    },
  processing: { label: 'Processing',  icon: 'bi-gear-wide-connected', cls: 'to-status--processing' },
  shipped:    { label: 'Shipped',     icon: 'bi-box-seam',         cls: 'to-status--shipped'    },
  'in-transit': { label: 'In Transit', icon: 'bi-truck',           cls: 'to-status--transit'    },
  delivered:  { label: 'Delivered',   icon: 'bi-patch-check-fill', cls: 'to-status--delivered'  },
  cancelled:  { label: 'Cancelled',   icon: 'bi-x-circle-fill',    cls: 'to-status--cancelled'  },
};

/* ============================================================
   DOM References
   ============================================================ */
const form          = document.getElementById('trackOrderForm');
const inputEl       = document.getElementById('trackInput');
const emailEl       = document.getElementById('trackEmail');
const inputError    = document.getElementById('trackInputError');
const btnTrack      = document.getElementById('btnTrackOrder');
const btnText       = btnTrack.querySelector('.to-btn-text');
const btnLoading    = btnTrack.querySelector('.to-btn-loading');
const resultWrapper = document.getElementById('toResult');
const notFound      = document.getElementById('toNotFound');
const nfOrderId     = document.getElementById('nfOrderId');
const chips         = document.querySelectorAll('.to-chip');

/* ============================================================
   Utility Helpers
   ============================================================ */
function setLoading(state) {
  btnTrack.disabled = state;
  btnText.classList.toggle('d-none', state);
  btnLoading.classList.toggle('d-none', !state);
}

function hideAll() {
  resultWrapper.classList.add('d-none');
  notFound.classList.add('d-none');
  inputError.style.display = 'none';
  inputEl.classList.remove('to-input--error');
}

function showError(msg) {
  inputError.textContent = msg;
  inputError.style.display = 'block';
  inputEl.classList.add('to-input--error');
}

function fakeDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* ============================================================
   Render Functions
   ============================================================ */
function renderTimeline(steps) {
  const container = document.getElementById('toTimeline');
  container.innerHTML = steps.map((step, i) => {
    let cls = '';
    if (step.done) cls = 'to-tl-done';
    else if (step.active) cls = 'to-tl-active';
    const isLast = i === steps.length - 1;
    return `
      <div class="to-tl-item ${cls}">
        <div class="to-tl-connector ${isLast ? 'to-tl-connector--last' : ''}"></div>
        <div class="to-tl-dot">
          <i class="bi ${step.icon}"></i>
        </div>
        <div class="to-tl-content">
          <div class="to-tl-label">${step.label}</div>
          <div class="to-tl-time">${step.time}</div>
          ${step.desc ? `<div class="to-tl-desc">${step.desc}</div>` : ''}
        </div>
      </div>`;
  }).join('');
}

function renderItems(items) {
  const container = document.getElementById('toOrderItems');
  container.innerHTML = items.map(item => `
    <div class="to-item-row">
      <div class="to-item-name">
        <i class="bi bi-box2 me-2"></i>${item.name}
      </div>
      <div class="to-item-price">${item.price}</div>
    </div>
  `).join('');
}

function renderStatus(statusKey) {
  const cfg = STATUS_CONFIG[statusKey] || STATUS_CONFIG['in-transit'];
  const badge = document.getElementById('resStatusBadge');
  const icon  = document.getElementById('resStatusIcon');
  const text  = document.getElementById('resStatusText');
  // Remove previous status classes
  Object.values(STATUS_CONFIG).forEach(c => badge.classList.remove(c.cls));
  badge.classList.add(cfg.cls);
  icon.className = `bi ${cfg.icon} me-1`;
  text.textContent = cfg.label;
}

function renderOrder(order) {
  document.getElementById('resOrderId').textContent  = order.orderId;
  document.getElementById('resOrderDate').textContent = order.date;
  document.getElementById('resCarrier').textContent   = order.carrier;
  document.getElementById('resEta').textContent       = order.eta;
  document.getElementById('resRecipient').textContent = order.recipient;
  document.getElementById('resAddress').textContent   = order.address;
  document.getElementById('resPhone').textContent     = order.phone;
  document.getElementById('resTracking').textContent  = order.tracking;
  document.getElementById('resTotalPrice').textContent = order.total;

  renderStatus(order.status);
  renderTimeline(order.timeline);
  renderItems(order.items);

  notFound.classList.add('d-none');
  resultWrapper.classList.remove('d-none');

  // Smooth scroll to result
  setTimeout(() => {
    resultWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 200);
}

/* ============================================================
   Track Logic
   ============================================================ */
async function doTrack(rawInput) {
  const query = rawInput.trim().toUpperCase();

  if (!query) {
    showError('Please enter your order ID or tracking number.');
    return;
  }

  hideAll();
  setLoading(true);

  await fakeDelay(1400);   // simulate network request

  setLoading(false);

  // Exact match on orderId key
  const order = MOCK_ORDERS[query] || Object.values(MOCK_ORDERS).find(o =>
    o.tracking.toUpperCase() === query
  );

  if (order) {
    renderOrder(order);
  } else {
    nfOrderId.textContent = rawInput.trim();
    notFound.classList.remove('d-none');
    notFound.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/* ============================================================
   Event Listeners
   ============================================================ */
form.addEventListener('submit', async e => {
  e.preventDefault();
  await doTrack(inputEl.value);
});

// Clear error on input
inputEl.addEventListener('input', () => {
  inputError.style.display = 'none';
  inputEl.classList.remove('to-input--error');
});

// Demo chips
chips.forEach(chip => {
  chip.addEventListener('click', async () => {
    const val = chip.dataset.demo;
    inputEl.value = val;
    inputEl.focus();
    await doTrack(val);
  });
});

// Allow Enter key in email field
emailEl.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    form.dispatchEvent(new Event('submit'));
  }
});
