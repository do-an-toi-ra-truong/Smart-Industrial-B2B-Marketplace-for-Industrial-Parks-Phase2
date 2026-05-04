
    // General Info Save
    function saveGeneralInfo(e) {
    e.preventDefault();
    var s = document.getElementById('gi-success');
    s.style.display = 'block';
    setTimeout(function(){ s.style.display = 'none'; }, 3000);
    }

    // Password Strength
    function checkStrength(val) {
    var bar = document.getElementById('pw-strength-bar');
    var lbl = document.getElementById('pw-strength-label');
    var score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    var map = [
        { w:'0%',   c:'#ef4444', t:'' },
        { w:'25%',  c:'#ef4444', t:'Weak' },
        { w:'50%',  c:'#f59e0b', t:'Fair' },
        { w:'75%',  c:'#3b82f6', t:'Good' },
        { w:'100%', c:'#10b981', t:'Strong' }
    ];
    bar.style.width  = map[score].w;
    bar.style.background = map[score].c;
    lbl.textContent  = map[score].t;
    lbl.style.color  = map[score].c;
    }

    // Change Password
    function changePassword(e) {
    e.preventDefault();
    var np = document.getElementById('pw-new').value;
    var cp = document.getElementById('pw-confirm').value;
    var ok = document.getElementById('pw-success');
    var er = document.getElementById('pw-error');
    ok.style.display = 'none'; er.style.display = 'none';
    if (np !== cp) { er.style.display = 'block'; return; }
    ok.style.display = 'block';
    document.getElementById('pw-current').value = '';
    document.getElementById('pw-new').value = '';
    document.getElementById('pw-confirm').value = '';
    checkStrength('');
    setTimeout(function(){ ok.style.display = 'none'; }, 3000);
    }

    // Export to CSV/Excel helper
    function downloadCSV(filename, rows) {
    var csv = rows.map(function(r){ return r.map(function(c){ return '"'+String(c).replace(/"/g,'""')+'"'; }).join(','); }).join('\r\n');
    var blob = new Blob(['\uFEFF'+csv], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
    }

    function exportPurchasesToExcel() {
    var rows = [
        ['Order #','Product / Description','Supplier','Date','Status','Amount (USD)'],
        ['PO-2026-001','SMT PCB Boards x500','SaigonTech Electronics','12/04/2026','Completed','12500'],
        ['PO-2026-002','Industrial Hydraulic Pumps x10','VN Machinery Group','25/03/2026','In Progress','8200'],
        ['PO-2026-003','Steel Coils 50 ton','Hoa Phat Steel Distribution','10/03/2026','Completed','31750'],
        ['PO-2025-089','Polypropylene Resin 20 ton','Binh Son Refining','18/11/2025','Completed','19400'],
        ['PO-2025-071','Cable Harness Assembly x2000','Delta Wire Vietnam','02/09/2025','Cancelled','6600'],
        ['PO-2025-044','CNC Milling Machine x2','Makino Vietnam','14/06/2025','Completed','88000']
    ];
    downloadCSV('Purchase_History.csv', rows);
    }

    // Logistics Request Submit
    function submitLogistics(e) {
    e.preventDefault();
    var ref = 'TRQ-' + new Date().getFullYear() + '-' + Math.floor(10000 + Math.random() * 90000);
    document.getElementById('lg-ref').textContent = ref;
    var s = document.getElementById('lg-success');
    s.style.display = 'block';
    e.target.reset();
    setTimeout(function(){ s.style.display = 'none'; }, 6000);
    }

    function exportQuotationsToExcel() {
    var rows = [
        ['RFQ #','Product / Description','Category','Submitted','Deadline','Quotes Received','Status'],
        ['RFQ-2026-041','Copper Wire Rod 10 ton','Metals & Raw Materials','05/04/2026','20/04/2026','3','Open'],
        ['RFQ-2026-033','Injection Mold Tooling x4','Machinery & Tooling','21/03/2026','10/04/2026','5','Accepted'],
        ['RFQ-2026-019','Industrial Lubricants 500L','Chemicals & Fluids','08/02/2026','25/02/2026','2','Closed'],
        ['RFQ-2025-098','Safety Helmets & PPE x1000','Safety & Protective Equipment','15/11/2025','30/11/2025','7','Cancelled']
    ];
    downloadCSV('RFQ_Quotation_History.csv', rows);
    }
