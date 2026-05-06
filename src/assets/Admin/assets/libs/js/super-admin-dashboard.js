
    function setRange(el) { document.querySelectorAll('.chart-range .range-btn, .section-card-header .range-btn').forEach(b => b.classList.remove('active')); el.classList.add('active'); }

    // Transaction volume chart
    const txCtx = document.getElementById('transaction-chart');
    if (txCtx) {
      new Chart(txCtx, {
        type: 'line',
        data: {
          labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            { label: 'Total Volume (₫T)', data: [10.2, 11.4, 12.8, 14.1, 15.8, 18.8, 21.4, null, null], borderColor: '#4f46e5', backgroundColor: 'rgba(79,70,229,0.08)', fill: true, tension: 0.4, borderWidth: 2.5, pointRadius: 4, pointBackgroundColor: '#4f46e5' },
            { label: 'Mechanical (₫T)', data: [4.1, 4.8, 5.4, 6.0, 7.2, 8.4, 9.8, null, null], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.05)', fill: false, tension: 0.4, borderWidth: 2, borderDash: [5, 5], pointRadius: 3, pointBackgroundColor: '#10b981' },
            { label: 'Electronics (₫T)', data: [2.8, 3.1, 3.6, 4.0, 4.8, 5.6, 6.2, null, null], borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,0.05)', fill: false, tension: 0.4, borderWidth: 2, borderDash: [5, 5], pointRadius: 3, pointBackgroundColor: '#f59e0b' }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: 'top' } },
          scales: { x: { grid: { display: false } }, y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { callback: v => '₫' + v + 'T' } } }
        }
      });
    }

    // Industry pie
    const pieCtx = document.getElementById('industry-pie');
    const pieColors = ['#4f46e5', '#10b981', '#f59e0b', '#3b82f6', '#ef4444', '#6b7280'];
    const pieLabels = ['Mechanical', 'Electronics', 'Chemicals', 'Logistics', 'Construction', 'Other'];
    const pieData = [38, 29, 16, 11, 4, 2];
    if (pieCtx) {
      new Chart(pieCtx, {
        type: 'doughnut',
        data: { labels: pieLabels, datasets: [{ data: pieData, backgroundColor: pieColors, borderWidth: 2, borderColor: 'var(--card-bg)' }] },
        options: { responsive: false, cutout: '68%', plugins: { legend: { display: false } } }
      });
      const legend = document.getElementById('pie-legend');
      pieLabels.forEach((l, i) => {
        legend.innerHTML += `<div style="display:flex;align-items:center;justify-content:space-between;font-size:12.5px;">
          <div style="display:flex;align-items:center;gap:7px;"><span style="width:10px;height:10px;border-radius:50%;background:${pieColors[i]};display:inline-block;flex-shrink:0;"></span>${l}</div>
          <strong style="color:var(--heading-color);">${pieData[i]}%</strong>
        </div>`;
      });
    }
