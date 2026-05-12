
    // ── Open Add Account modal via button ──
    document.getElementById('btn-add-account').onclick = () => document.getElementById('add-account-modal').classList.add('show');
    document.getElementById('btn-export').onclick = () => document.getElementById('export-modal').classList.add('show');

    // ── Close modals ──
    function closeModal(id) { document.getElementById(id).classList.remove('show'); }
    document.querySelectorAll('.sa-modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', function (e) {
        if (e.target === this) this.classList.remove('show');
      });
    });

    // ── Tab switching ──
    function switchTab(btn, tabId) {
      document.querySelectorAll('.sa-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    }

    // ── Toggle all checkboxes ──
    function toggleAll(master) {
      document.querySelectorAll('.row-check').forEach(cb => cb.checked = master.checked);
    }

    // ── Table filter ──
    function filterTable(query) {
      const role = document.getElementById('filter-role').value.toLowerCase();
      const q = query.toLowerCase();
      document.querySelectorAll('#accounts-tbody tr').forEach(row => {
        const name = (row.dataset.name || '').toLowerCase();
        const r = (row.dataset.role || '').toLowerCase();
        const show = name.includes(q) && (role === '' || r.includes(role));
        row.style.display = show ? '' : 'none';
      });
    }

    // ── Approval actions ──
    function approveItem(id, name) {
      const el = document.getElementById(id);
      el.style.opacity = '0'; el.style.transform = 'scale(0.9)';
      el.style.transition = 'all 0.3s ease';
      setTimeout(() => el.remove(), 300);
      showToast('success', `✓ ${name} has been approved.`);
    }
    function rejectItem(id, name) {
      const el = document.getElementById(id);
      el.style.opacity = '0'; el.style.transform = 'scale(0.9)';
      el.style.transition = 'all 0.3s ease';
      setTimeout(() => el.remove(), 300);
      showToast('danger', `✗ ${name} has been rejected.`);
    }

    // ── Edit modal ──
    function openEditModal(name, role, cluster, status) {
      document.getElementById('edit-name').value = name;
      document.getElementById('edit-cluster').value = cluster;
      document.getElementById('edit-role-select').value = role;
      document.getElementById('edit-status-select').value = status;
      document.getElementById('edit-account-modal').classList.add('show');
    }
    function saveEdit() {
      closeModal('edit-account-modal');
      showToast('success', 'Account updated successfully.');
    }

    // ── Save new account ──
    function saveNewAccount() {
      closeModal('add-account-modal');
      showToast('success', 'New account created & invitation sent.');
    }

    // ── Toast ──
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
