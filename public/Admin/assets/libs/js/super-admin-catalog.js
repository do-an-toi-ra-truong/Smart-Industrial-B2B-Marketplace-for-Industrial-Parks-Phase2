
    // ── Helpers ──
    function closeModal(id) { document.getElementById(id).classList.remove('show'); }
    document.querySelectorAll('.sa-modal-overlay').forEach(o => {
      o.addEventListener('click', e => { if (e.target === o) o.classList.remove('show'); });
    });

    function switchCatTab(btn, tabId) {
      document.querySelectorAll('.sa-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    }

    function setRange(btn, range) {
      document.querySelectorAll('.chart-range .range-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // In a real app, re-fetch chart data
    }

    let toastTimer;
    function showToast(type, text) {
      const toast = document.getElementById('sa-toast');
      const icon = toast.querySelector('.sa-toast-icon');
      toast.className = `sa-toast ${type}`;
      document.getElementById('sa-toast-text').textContent = text;
      icon.className = type === 'success'
        ? 'bi bi-check-circle-fill sa-toast-icon'
        : 'bi bi-x-circle-fill sa-toast-icon';
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
    }

    // ── Detect dark mode ──
    function isDark() {
      return document.documentElement.getAttribute('data-bs-theme') === 'dark'
        || document.body.classList.contains('dark-theme')
        || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    const gridColor = () => isDark() ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
    const textColor = () => isDark() ? '#a0aec0' : '#718096';
    const headColor = () => isDark() ? '#e2e8f0' : '#1a202c';

    // ── Transaction Chart (ApexCharts bar) ──
    const txnMonthly = {
      categories: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      vsip: [12.4, 14.1, 11.8, 15.3, 13.9, 17.2],
      myPhuoc: [8.2, 9.4, 7.6, 10.1, 9.8, 11.4],
      amata: [5.1, 6.2, 5.8, 6.9, 6.4, 7.8]
    };
    const txnQuarterly = {
      categories: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026'],
      vsip: [38.2, 41.5, 44.8, 40.1, 47.3, 50.1],
      myPhuoc: [24.1, 26.8, 28.4, 25.9, 30.2, 32.7],
      amata: [15.2, 17.4, 18.9, 16.8, 20.1, 21.3]
    };

    let txnChartInstance;
    function renderTxnChart(data) {
      const opts = {
        series: [
          { name: 'VSIP Group', data: data.vsip },
          { name: 'My Phuoc Group', data: data.myPhuoc },
          { name: 'Amata Group', data: data.amata }
        ],
        chart: {
          type: 'bar', height: 300,
          stacked: false,
          toolbar: { show: false },
          background: 'transparent',
          fontFamily: 'Nunito Sans, sans-serif',
        },
        theme: { mode: isDark() ? 'dark' : 'light' },
        colors: ['#4f46e5', '#10b981', '#f59e0b'],
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
      txnChartInstance = new ApexCharts(document.getElementById('txn-chart'), opts);
      txnChartInstance.render();
    }

    function updateTxnChart(mode) {
      document.querySelectorAll('.section-card-header .range-btn').forEach(b => b.classList.remove('active'));
      renderTxnChart(mode === 'quarterly' ? txnQuarterly : txnMonthly);
    }

    renderTxnChart(txnMonthly);

    // ── Industry Pie (Chart.js) ──
    const pieData = [
      { label: 'Electronics', value: 28.4, color: '#4f46e5' },
      { label: 'Mechanical', value: 22.1, color: '#10b981' },
      { label: 'Chemicals', value: 16.8, color: '#f59e0b' },
      { label: 'Consumer Goods', value: 14.2, color: '#3b82f6' },
      { label: 'Logistics', value: 10.5, color: '#7c3aed' },
      { label: 'Other', value: 8.0, color: '#9ca3af' }
    ];

    const pieCtx = document.getElementById('industry-pie').getContext('2d');
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

    // Pie legend
    const legend = document.getElementById('pie-legend');
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

    // ── Goods Flow Bar chart ──
    const goodsCtx = document.getElementById('goods-bar').getContext('2d');
    new Chart(goodsCtx, {
      type: 'bar',
      data: {
        labels: ['Electronics', 'Mechanical', 'Chemicals', 'Consumer', 'Logistics', 'Other'],
        datasets: [
          {
            label: 'Inbound',
            data: [1820, 1440, 980, 760, 520, 340],
            backgroundColor: 'rgba(79,70,229,0.75)',
            borderRadius: 5
          },
          {
            label: 'Outbound',
            data: [1650, 1320, 890, 710, 480, 310],
            backgroundColor: 'rgba(16,185,129,0.75)',
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
