
// ===== TAB SWITCHING SYSTEM =====
function activateTab(tabId) {
    // Update tab link states
    document.querySelectorAll('.company-tab-link').forEach(function(link) {
    link.classList.remove('active');
    if (link.dataset.tab === tabId) link.classList.add('active');
    });

    // Show/hide panels
    document.querySelectorAll('.tab-panel').forEach(function(panel) {
    panel.classList.remove('active');
    });
    var target = document.getElementById('tab-' + tabId);
    if (target) target.classList.add('active');

    // Smooth scroll to tabs bar
    document.getElementById('company-tabs-bar').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function activateTabLink(event, tabId) {
    event.preventDefault();
    activateTab(tabId);
    return false;
}

// ===== PRODUCT CATEGORY SWITCHER =====
function switchProdCat(btn) {
    document.querySelectorAll('.cat-tab-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');

    document.querySelectorAll('.prod-grid').forEach(function(g) { g.classList.remove('active'); });
    var gridId = 'grid-' + btn.dataset.grid;
    var grid = document.getElementById(gridId);
    if (grid) grid.classList.add('active');
}

// ===== RFQ PRIORITY SELECTOR =====
function selectPriority(el) {
    document.querySelectorAll('.rfq-prio-btn').forEach(function(b) { b.classList.remove('sel'); });
    el.classList.add('sel');
}

// ===== RFQ FORM SUBMIT =====
document.getElementById('estec-rfq-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = this;
    var btn = document.getElementById('rfq-submit-btn');

    // Basic validation
    var cat = document.getElementById('rfq-category').value;
    var product = document.getElementById('rfq-product').value.trim();
    var qty = document.getElementById('rfq-qty').value;
    var specs = document.getElementById('rfq-specs').value.trim();
    var name = document.getElementById('rfq-name').value.trim();
    var company = document.getElementById('rfq-company').value.trim();
    var email = document.getElementById('rfq-email').value.trim();
    var agree = document.getElementById('rfq-agree').checked;

    if (!cat || !product || !qty || !specs || !name || !company || !email || !agree) {
    // Shake effect
    btn.style.animation = 'none';
    btn.style.background = 'linear-gradient(135deg,#ef4444,#dc2626)';
    btn.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Please fill all required fields';
    setTimeout(function() {
        btn.style.background = 'linear-gradient(135deg,#4f46e5,#8b5cf6)';
        btn.innerHTML = '<i class="bi bi-send-fill"></i> Send RFQ to Estec Vina <i class="bi bi-arrow-right"></i>';
    }, 2500);
    return;
    }

    // Loading state
    btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> Submitting...';
    btn.disabled = true;

    // Simulate submission
    setTimeout(function() {
    form.style.display = 'none';
    document.getElementById('rfq-success-msg').style.display = 'block';
    }, 1800);
});

// ===== AOS Init =====
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true });
}

// ===== Handle URL params to open specific tab =====
(function() {
    var params = new URLSearchParams(window.location.search);
    var tab = params.get('tab');
    if (tab && ['info', 'products', 'news', 'rfq'].indexOf(tab) !== -1) {
    activateTab(tab);
    }
})();
