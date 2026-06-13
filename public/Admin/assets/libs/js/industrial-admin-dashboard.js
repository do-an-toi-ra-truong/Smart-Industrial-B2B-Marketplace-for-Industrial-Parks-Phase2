(() => {
    // ── Open modals ──
    const btnAddCompany = document.getElementById('btn-add-company');
    if (btnAddCompany) {
      btnAddCompany.onclick = () => {
        const modal = document.getElementById('add-company-modal');
        if (modal) modal.classList.add('show');
      };
    }

    const btnExport = document.getElementById('btn-export');
    if (btnExport) {
      btnExport.onclick = () => showToast('success', 'Export report generated.');
    }

    // ── Close modals ──
    function closeModal(id) { 
      const modal = document.getElementById(id);
      if (modal) modal.classList.remove('show'); 
    }
    document.querySelectorAll('.ia-modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', function (e) {
        if (e.target === this) this.classList.remove('show');
      });
    });

    // ── Main tab switching ──
    function switchMainTab(btn, panelId) {
      document.querySelectorAll('.main-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.main-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(panelId);
      if (panel) panel.classList.add('active');
      // Re-render charts when statistics panel is shown
      if (panelId === 'panel-statistics') {
        setTimeout(() => {
          renderTxnChart(txnMonthly);
        }, 100);
      }
    }

    // ── Toggle all checkboxes ──
    function toggleAllChecks(master) {
      document.querySelectorAll('.row-check').forEach(cb => cb.checked = master.checked);
    }

    // ── Company table filter ──
    function filterCompanyTable(query) {
      const filterStatus = document.getElementById('filter-status');
      const status = filterStatus ? filterStatus.value.toLowerCase() : '';
      const q = query.toLowerCase();
      document.querySelectorAll('#company-tbody tr').forEach(row => {
        const name = (row.dataset.name || '').toLowerCase();
        const s = (row.dataset.status || '').toLowerCase();
        const show = name.includes(q) && (status === '' || s === status);
        row.style.display = show ? '' : 'none';
      });
    }

    // ── Approval actions ──
    function approveItem(id, name) {
      const el = document.getElementById(id);
      if (el) {
        el.style.opacity = '0'; el.style.transform = 'scale(0.9)';
        el.style.transition = 'all 0.3s ease';
        setTimeout(() => el.remove(), 300);
      }
      showToast('success', `✓ ${name} has been approved & granted operating permission.`);
    }
    function rejectItem(id, name) {
      const el = document.getElementById(id);
      if (el) {
        el.style.opacity = '0'; el.style.transform = 'scale(0.9)';
        el.style.transition = 'all 0.3s ease';
        setTimeout(() => el.remove(), 300);
      }
      showToast('danger', `✗ ${name} has been rejected.`);
    }

    // ── Verify modal ──
    function openVerifyModal(company, taxId, licenseId, admin, email) {
      const vc = document.getElementById('v-company');
      const vt = document.getElementById('v-taxid');
      const vl = document.getElementById('v-license-id');
      const va = document.getElementById('v-admin');
      const ve = document.getElementById('v-email');
      const vm = document.getElementById('verify-modal');
      if (vc) vc.textContent = company;
      if (vt) vt.textContent = taxId;
      if (vl) vl.textContent = licenseId;
      if (va) va.textContent = admin;
      if (ve) ve.textContent = email;
      if (vm) vm.classList.add('show');
    }

    // ── Permission modal ──
    function openPermModal(companyName) {
      const input = document.getElementById('perm-company-name');
      const modal = document.getElementById('perm-modal');
      if (input) input.value = companyName;
      if (modal) modal.classList.add('show');
    }

    // ── Edit Admin modal ──
    function openEditAdminModal(name, email, company, role) {
      const ean = document.getElementById('edit-admin-name');
      const eae = document.getElementById('edit-admin-email');
      const eac = document.getElementById('edit-admin-company');
      const ear = document.getElementById('edit-admin-role');
      const eam = document.getElementById('edit-admin-modal');
      if (ean) ean.value = name;
      if (eae) eae.value = email;
      if (eac) eac.value = company;
      if (ear) ear.value = role;
      if (eam) eam.classList.add('show');
    }

    // ── Admin approval actions ──
    function approveAdminReq(id, name) {
      const el = document.getElementById(id);
      if (el) {
        el.style.opacity = '0'; el.style.transform = 'scale(0.9)';
        el.style.transition = 'all 0.3s ease';
        setTimeout(() => el.remove(), 300);
      }
      showToast('success', `✓ ${name} approved as Company Admin & permissions granted.`);
    }
    function rejectAdminReq(id, name) {
      const el = document.getElementById(id);
      if (el) {
        el.style.opacity = '0'; el.style.transform = 'scale(0.9)';
        el.style.transition = 'all 0.3s ease';
        setTimeout(() => el.remove(), 300);
      }
      showToast('danger', `✗ ${name} admin request rejected.`);
    }

    // ── Admin table filter ──
    function filterAdminTable(query) {
      const filterStatus = document.getElementById('filter-admin-status');
      const status = filterStatus ? filterStatus.value.toLowerCase() : '';
      const q = query.toLowerCase();
      document.querySelectorAll('#admin-tbody tr').forEach(row => {
        const name = (row.dataset.name || '').toLowerCase();
        const s = (row.dataset.status || '').toLowerCase();
        const show = name.includes(q) && (status === '' || s === status);
        row.style.display = show ? '' : 'none';
      });
    }

    // ── Toast ──
    let toastTimer;
    function showToast(type, text) {
      const toast = document.getElementById('ia-toast');
      if (!toast) return;
      const icon = toast.querySelector('.ia-toast-icon');
      toast.className = `ia-toast ${type}`;
      const toastText = document.getElementById('ia-toast-text');
      if (toastText) toastText.textContent = text;
      if (icon) {
        icon.className = type === 'success'
          ? 'bi bi-check-circle-fill ia-toast-icon'
          : 'bi bi-x-circle-fill ia-toast-icon';
      }
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
    }

    // ── Detect dark mode ──
    function isDark() {
      return document.documentElement.getAttribute('data-bs-theme') === 'dark'
        || document.body.classList.contains('dark-theme')
        || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    const gridColor = () => isDark() ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
    const textColor = () => isDark() ? '#a0aec0' : '#718096';

    // ── Transaction Chart (ApexCharts) ──
    const txnMonthly = {
      categories: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      inbound: [4.2, 4.8, 3.9, 5.1, 4.6, 5.8],
      outbound: [3.8, 4.4, 3.6, 4.7, 4.2, 5.3],
      internal: [1.2, 1.4, 1.1, 1.5, 1.3, 1.7]
    };
    const txnQuarterly = {
      categories: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026'],
      inbound: [12.8, 14.2, 15.6, 13.8, 16.4, 17.8],
      outbound: [11.4, 12.8, 14.1, 12.3, 14.9, 16.2],
      internal: [3.4, 3.8, 4.2, 3.7, 4.4, 4.8]
    };

    let txnChartInstance;
    function renderTxnChart(data) {
      const chartEl = document.getElementById('txn-chart');
      if (!chartEl || typeof ApexCharts === 'undefined') return;
      const opts = {
        series: [
          { name: 'Inbound', data: data.inbound },
          { name: 'Outbound', data: data.outbound },
          { name: 'Internal', data: data.internal }
        ],
        chart: {
          type: 'bar', height: 300,
          stacked: false,
          toolbar: { show: false },
          background: 'transparent',
          fontFamily: 'Nunito Sans, sans-serif',
        },
        theme: { mode: isDark() ? 'dark' : 'light' },
        colors: ['#0d9488', '#06b6d4', '#f59e0b'],
        plotOptions: {
          bar: { columnWidth: '55%', borderRadius: 5, borderRadiusApplication: 'end' }
        },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ['transparent'] },
        xaxis: {
          categories: data.categories,
          labels: { style: { colors: textColor(), fontSize: '12px' } },
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        yaxis: {
          labels: {
            style: { colors: textColor(), fontSize: '12px' },
            formatter: v => '₫' + v.toFixed(1) + 'B'
          }
        },
        grid: { borderColor: gridColor(), strokeDashArray: 4 },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          labels: { colors: textColor() }
        },
        tooltip: { y: { formatter: v => '₫' + v.toFixed(2) + 'B' } }
      };
      if (txnChartInstance) txnChartInstance.destroy();
      txnChartInstance = new ApexCharts(chartEl, opts);
      txnChartInstance.render();
    }

    function updateTxnChart(mode) {
      renderTxnChart(mode === 'quarterly' ? txnQuarterly : txnMonthly);
    }

    // ── Industry Pie (Chart.js) ──
    const pieData = [
      { label: 'Electronics', value: 31.2, color: '#0d9488' },
      { label: 'Mechanical', value: 24.5, color: '#06b6d4' },
      { label: 'Chemicals', value: 18.4, color: '#f59e0b' },
      { label: 'Consumer Goods', value: 14.8, color: '#3b82f6' },
      { label: 'Logistics', value: 7.5, color: '#7c3aed' },
      { label: 'Other', value: 3.6, color: '#9ca3af' }
    ];

    function initPieChart() {
      const pieEl = document.getElementById('industry-pie');
      if (!pieEl || typeof Chart === 'undefined') return;
      const pieCtx = pieEl.getContext('2d');
      new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: pieData.map(d => d.label),
          datasets: [{
            data: pieData.map(d => d.value),
            backgroundColor: pieData.map(d => d.color),
            borderWidth: 3,
            borderColor: isDark() ? '#1e2433' : '#ffffff',
            hoverOffset: 8
          }]
        },
        options: {
          cutout: '70%',
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.toFixed(1)}%` } } }
        }
      });

      const legend = document.getElementById('pie-legend');
      if (legend) {
        legend.innerHTML = '';
        pieData.forEach(d => {
          const row = document.createElement('div');
          row.style.cssText = 'display:flex;align-items:center;gap:8px;';
          row.innerHTML = `
            <span class="legend-dot" style="background:${d.color}"></span>
            <span style="flex:1;font-size:12.5px;font-weight:600;color:var(--heading-color);">${d.label}</span>
            <span style="font-size:13px;font-weight:700;color:var(--heading-color);">${d.value}%</span>
          `;
          legend.appendChild(row);
        });
      }
    }

    // ── Goods Flow Bar (Chart.js) ──
    function initGoodsChart() {
      const goodsEl = document.getElementById('goods-bar');
      if (!goodsEl || typeof Chart === 'undefined') return;
      const goodsCtx = goodsEl.getContext('2d');
      new Chart(goodsCtx, {
        type: 'bar',
        data: {
          labels: ['Electronics', 'Mechanical', 'Chemicals', 'Consumer', 'Logistics', 'Other'],
          datasets: [
            {
              label: 'Inbound',
              data: [680, 540, 380, 290, 180, 120],
              backgroundColor: 'rgba(13,148,136,0.75)',
              borderRadius: 5
            },
            {
              label: 'Outbound',
              data: [620, 490, 350, 270, 170, 110],
              backgroundColor: 'rgba(6,182,212,0.75)',
              borderRadius: 5
            }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          plugins: {
            legend: { position: 'top', labels: { color: textColor(), font: { size: 12 } } }
          },
          scales: {
            x: {
              grid: { color: gridColor() },
              ticks: { color: textColor(), callback: v => v.toLocaleString() }
            },
            y: {
              grid: { display: false },
              ticks: { color: textColor(), font: { size: 12 } }
            }
          }
        }
      });
    }

    // ── Revenue Trend Line (ApexCharts Area) ──
    function initRevenueTrend() {
      const trendEl = document.getElementById('revenue-trend-chart');
      if (!trendEl || typeof ApexCharts === 'undefined') return;
      const opts = {
        series: [{
          name: 'Revenue',
          data: [18.2, 19.4, 20.1, 22.3, 21.8, 23.4, 24.9, 22.7, 25.6, 26.8, 27.1, 28.4]
        }, {
          name: 'Expenses',
          data: [14.1, 14.8, 15.2, 16.8, 16.4, 17.2, 18.6, 17.1, 19.2, 20.1, 20.4, 21.2]
        }],
        chart: { type: 'area', height: 260, toolbar: { show: false }, background: 'transparent', fontFamily: 'Nunito Sans' },
        theme: { mode: isDark() ? 'dark' : 'light' },
        colors: ['#0d9488', '#f59e0b'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 100] } },
        stroke: { curve: 'smooth', width: 2.5 },
        dataLabels: { enabled: false },
        xaxis: {
          categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
          labels: { style: { colors: textColor(), fontSize: '11px' } },
          axisBorder: { show: false }, axisTicks: { show: false }
        },
        yaxis: { labels: { style: { colors: textColor(), fontSize: '11px' }, formatter: v => '₫' + v.toFixed(0) + 'B' } },
        grid: { borderColor: gridColor(), strokeDashArray: 4 },
        legend: { position: 'top', horizontalAlign: 'right', labels: { colors: textColor() } },
        tooltip: { y: { formatter: v => '₫' + v.toFixed(1) + 'B' } }
      };
      new ApexCharts(trendEl, opts).render();
    }
    let chartsInitialized = false;

    // Observer to detect when statistics panel becomes visible
    const statsPanel = document.getElementById('panel-statistics');
    if (statsPanel) {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.target.classList.contains('active') && !chartsInitialized) {
            chartsInitialized = true;
            setTimeout(() => {
              renderTxnChart(txnMonthly);
              initPieChart();
              initGoodsChart();
              initRevenueTrend();
            }, 50);
          }
        });
      });
      observer.observe(statsPanel, { attributes: true, attributeFilter: ['class'] });
    }

    // Expose functions to window
    window.closeModal = closeModal;
    window.switchMainTab = switchMainTab;
    window.toggleAllChecks = toggleAllChecks;
    window.filterCompanyTable = filterCompanyTable;
    window.approveItem = approveItem;
    window.rejectItem = rejectItem;
    window.openVerifyModal = openVerifyModal;
    window.openPermModal = openPermModal;
    window.openEditAdminModal = openEditAdminModal;
    window.approveAdminReq = approveAdminReq;
    window.rejectAdminReq = rejectAdminReq;
    window.filterAdminTable = filterAdminTable;
    window.showToast = showToast;
    window.updateTxnChart = updateTxnChart;
})();
