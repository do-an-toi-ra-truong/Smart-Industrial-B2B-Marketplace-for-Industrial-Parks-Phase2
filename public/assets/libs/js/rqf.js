
// ======= Init =======
AOS.init({ duration: 600, once: true });

let currentStep = 1;
const totalSteps = 4;
let uploadedFiles = [];

// Set min date for date picker (today + 3 days)
const minDate = new Date();
minDate.setDate(minDate.getDate() + 3);
document.getElementById('dateNeeded').min = minDate.toISOString().split('T')[0];

// ======= Step Navigation =======
function updateStepUI(step) {
    for (let i = 1; i <= totalSteps; i++) {
    const section = document.getElementById('section' + i);
    const stepEl = document.querySelector('.rfq-step[data-step="' + i + '"]');
    const snum = document.getElementById('snum' + i);
    section.classList.remove('active');
    stepEl.classList.remove('active', 'done');
    if (i < step) {
        stepEl.classList.add('done');
        snum.innerHTML = '<i class="bi bi-check-lg"></i>';
    } else if (i === step) {
        stepEl.classList.add('active');
        snum.textContent = i;
        section.classList.add('active');
    } else {
        snum.textContent = i;
    }
    }
    window.scrollTo({ top: document.querySelector('.rfq-steps').offsetTop - 100, behavior: 'smooth' });
}

function goToStep(step) {
    if (step < currentStep) {
    currentStep = step;
    updateStepUI(step);
    }
}

function nextStep(from) {
    if (!validateStep(from)) return;
    if (from === 3) buildReview();
    currentStep = from + 1;
    updateStepUI(currentStep);
}

function prevStep(from) {
    currentStep = from - 1;
    updateStepUI(currentStep);
}

// ======= Validation =======
function showError(id, show) {
    document.getElementById(id).classList.toggle('show', show);
}
function setError(inputId, errId, hasError) {
    const el = document.getElementById(inputId);
    if (el) { el.classList.toggle('error', hasError); }
    showError(errId, hasError);
    return !hasError;
}

function validateStep(step) {
    let valid = true;
    if (step === 1) {
    const cat = document.getElementById('selectedCategory').value;
    showError('cat-error', !cat); if (!cat) valid = false;

    const name = document.getElementById('materialName').value.trim();
    valid = setError('materialName', 'name-error', !name) && valid;

    const qty = document.getElementById('quantity').value;
    valid = setError('quantity', 'qty-error', !qty || qty <= 0) && valid;

    const unit = document.getElementById('unit').value;
    valid = setError('unit', 'unit-error', !unit) && valid;

    const company = document.getElementById('companyName').value.trim();
    valid = setError('companyName', 'company-error', !company) && valid;

    const email = document.getElementById('contactEmail').value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    valid = setError('contactEmail', 'email-error', !emailOk) && valid;

    const phone = document.getElementById('contactPhone').value.trim();
    valid = setError('contactPhone', 'phone-error', !phone) && valid;
    }
    if (step === 2) {
    const spec = document.getElementById('specifications').value.trim();
    valid = setError('specifications', 'spec-error', !spec) && valid;
    }
    if (step === 3) {
    const date = document.getElementById('dateNeeded').value;
    valid = setError('dateNeeded', 'date-error', !date) && valid;

    const priority = document.getElementById('selectedPriority').value;
    showError('priority-error', !priority); if (!priority) valid = false;

    const addr = document.getElementById('deliveryAddress').value.trim();
    valid = setError('deliveryAddress', 'addr-error', !addr) && valid;
    }
    return valid;
}

// ======= Category Select =======
function selectCategory(btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    document.getElementById('selectedCategory').value = btn.dataset.cat;
    showError('cat-error', false);
}

// ======= Priority Select =======
function selectPriority(btn) {
    document.querySelectorAll('.priority-opt').forEach(b => b.classList.remove('sel'));
    btn.classList.add('sel');
    document.getElementById('selectedPriority').value = btn.dataset.p;
    showError('priority-error', false);
}

// ======= Character Count =======
function updateCharCount(el, spanId) {
    document.getElementById(spanId).textContent = el.value.length;
}

// ======= File Handling =======
function handleDragOver(e) {
    e.preventDefault();
    document.getElementById('uploadZone').classList.add('dragover');
}
function handleDragLeave(e) {
    document.getElementById('uploadZone').classList.remove('dragover');
}
function handleDrop(e) {
    e.preventDefault();
    document.getElementById('uploadZone').classList.remove('dragover');
    processFiles(e.dataTransfer.files);
}
function handleFileSelect(e) { processFiles(e.target.files); }

function processFiles(files) {
    const maxFiles = 5, maxSize = 10 * 1024 * 1024;
    for (let f of files) {
    if (uploadedFiles.length >= maxFiles) { alert('Tối đa 5 files.'); break; }
    if (f.size > maxSize) { alert(f.name + ' vượt quá 10MB.'); continue; }
    uploadedFiles.push(f);
    }
    renderFileList();
}

function renderFileList() {
    const list = document.getElementById('fileList');
    if (uploadedFiles.length === 0) { list.innerHTML = ''; return; }
    list.innerHTML = uploadedFiles.map((f, i) => `
    <div class="rfq-file-item">
        <i class="bi bi-file-earmark-fill"></i>
        <span class="file-name">${f.name}</span>
        <span class="file-size">${(f.size / 1024).toFixed(1)} KB</span>
        <button class="file-remove" onclick="removeFile(${i})" title="Xóa file">
        <i class="bi bi-x-lg"></i>
        </button>
    </div>`).join('');
}

function removeFile(idx) {
    uploadedFiles.splice(idx, 1);
    renderFileList();
}

// ======= Build Review =======
const catNames = {
    'electronics': 'Điện tử & Linh kiện',
    'raw-materials': 'Nguyên liệu thô',
    'chemicals': 'Hóa chất công nghiệp',
    'machinery': 'Máy móc & Thiết bị',
    'automotive': 'Phụ tùng Ô tô',
    'textiles': 'Dệt may & Vải sợi',
    'food-agri': 'Thực phẩm & Nông nghiệp',
    'packaging': 'Bao bì & Đóng gói'
};
const priorityNames = { 'low': '🟢 Thấp', 'medium': '🟡 Trung bình', 'high': '🔴 Cao', 'urgent': '⚡ Khẩn cấp' };

function buildReview() {
    const g = id => document.getElementById(id).value.trim();
    document.getElementById('rv-cat').textContent = catNames[g('selectedCategory')] || '—';
    document.getElementById('rv-name').textContent = g('materialName') || '—';
    document.getElementById('rv-qty').textContent = (g('quantity') && g('unit')) ? g('quantity') + ' ' + g('unit') : '—';
    document.getElementById('rv-company').textContent = g('companyName') || '—';
    document.getElementById('rv-email').textContent = g('contactEmail') || '—';
    document.getElementById('rv-phone').textContent = g('contactPhone') || '—';
    document.getElementById('rv-spec').textContent = g('specifications') || '—';
    document.getElementById('rv-std').textContent = g('standards') || '—';
    document.getElementById('rv-brand').textContent = g('preferredBrand') || '—';
    document.getElementById('rv-files').textContent = uploadedFiles.length > 0 ? uploadedFiles.map(f => f.name).join(', ') : 'Không có file';
    const dateVal = g('dateNeeded');
    document.getElementById('rv-date').textContent = dateVal ? new Date(dateVal).toLocaleDateString('vi-VN') : '—';
    document.getElementById('rv-priority').textContent = priorityNames[g('selectedPriority')] || '—';
    document.getElementById('rv-addr').textContent = g('deliveryAddress') || '—';
    document.getElementById('rv-payment').textContent = document.getElementById('paymentTerms').options[document.getElementById('paymentTerms').selectedIndex].text || '—';
    const bMin = g('budgetMin'), bMax = g('budgetMax'), cur = g('budgetCurrency');
    document.getElementById('rv-budget').textContent = (bMin || bMax) ? ((bMin || '?') + ' – ' + (bMax || '?') + ' ' + cur) : 'Không xác định';
}

// ======= Submit =======
function submitRFQ() {
    if (!document.getElementById('agreeTerms').checked) {
    showError('terms-error', true); return;
    }
    showError('terms-error', false);
    // Generate RFQ ID
    const now = new Date();
    const rfqId = now.getFullYear().toString() +
    String(now.getMonth() + 1).padStart(2, '0') +
    String(now.getDate()).padStart(2, '0') +
    String(Math.floor(Math.random() * 99999)).padStart(5, '0');
    document.getElementById('rfqIdDisplay').textContent = rfqId;

    // Hide form sections, show success
    document.querySelector('.rfq-steps').style.display = 'none';
    document.getElementById('section4').style.display = 'none';
    document.getElementById('rfqSuccess').style.display = 'block';

    // Scroll to top of card
    document.querySelector('.rfq-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
