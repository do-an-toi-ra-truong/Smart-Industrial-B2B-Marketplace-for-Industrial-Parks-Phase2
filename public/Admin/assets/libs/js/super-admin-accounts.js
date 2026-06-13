(() => {
  // ── Open Add Account modal via button ──
  const btnAdd = document.getElementById('btn-add-account');
  if (btnAdd) {
    btnAdd.onclick = () => {
      const modal = document.getElementById('add-account-modal');
      if (modal) modal.classList.add('show');
    };
  }

  const btnExport = document.getElementById('btn-export');
  if (btnExport) {
    btnExport.onclick = () => {
      const modal = document.getElementById('export-modal');
      if (modal) modal.classList.add('show');
    };
  }

  // ── Close modals ──
  function closeModal(id) { 
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('show'); 
  }
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
    const panel = document.getElementById(tabId);
    if (panel) panel.classList.add('active');
  }

  // ── Toggle all checkboxes ──
  function toggleAll(master) {
    document.querySelectorAll('.row-check').forEach(cb => cb.checked = master.checked);
  }

  // ── Table filter ──
  function filterTable(query) {
    const filterRole = document.getElementById('filter-role');
    const role = filterRole ? filterRole.value.toLowerCase() : '';
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
    if (el) {
      el.style.opacity = '0'; el.style.transform = 'scale(0.9)';
      el.style.transition = 'all 0.3s ease';
      setTimeout(() => el.remove(), 300);
    }
    showToast('success', `✓ ${name} has been approved.`);
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

  // ── Edit modal ──
  function openEditModal(name, role, cluster, status) {
    const editName = document.getElementById('edit-name');
    const editCluster = document.getElementById('edit-cluster');
    const editRoleSelect = document.getElementById('edit-role-select');
    const editStatusSelect = document.getElementById('edit-status-select');
    const editAccountModal = document.getElementById('edit-account-modal');
    if (editName) editName.value = name;
    if (editCluster) editCluster.value = cluster;
    if (editRoleSelect) editRoleSelect.value = role;
    if (editStatusSelect) editStatusSelect.value = status;
    if (editAccountModal) editAccountModal.classList.add('show');
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
    if (!toast) return;
    const icon = toast.querySelector('.sa-toast-icon');
    toast.className = `sa-toast ${type}`;
    const toastText = document.getElementById('sa-toast-text');
    if (toastText) toastText.textContent = text;
    if (icon) {
      icon.className = type === 'success'
        ? 'bi bi-check-circle-fill sa-toast-icon'
        : 'bi bi-x-circle-fill sa-toast-icon';
    }
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
  }

  // Expose functions to window for inline HTML handlers
  window.closeModal = closeModal;
  window.switchTab = switchTab;
  window.toggleAll = toggleAll;
  window.filterTable = filterTable;
  window.approveItem = approveItem;
  window.rejectItem = rejectItem;
  window.openEditModal = openEditModal;
  window.saveEdit = saveEdit;
  window.saveNewAccount = saveNewAccount;
  window.showToast = showToast;
})();
