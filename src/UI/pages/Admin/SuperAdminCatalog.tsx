import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  fetchIndustries,
  createIndustry,
  updateIndustry,
  deleteIndustry,
  type IndustryCatalogResponse,
  type CreateIndustryRequest,
} from '../../../api/industryCatalogApi';

const sectorColorMap: Record<string, { bg: string; color: string }> = {
  Manufacturing: { bg: "rgba(16,185,129,0.1)", color: "#059669" },
  Technology: { bg: "rgba(124,58,237,0.1)", color: "#7c3aed" },
  Logistics: { bg: "rgba(79,70,229,0.1)", color: "#4f46e5" },
};

const defaultIcons = [
  { value: "bi bi-cpu-fill", label: "CPU" },
  { value: "bi bi-gear-wide-connected", label: "Gear" },
  { value: "bi bi-droplet-fill", label: "Droplet" },
  { value: "bi bi-basket-fill", label: "Basket" },
  { value: "bi bi-truck", label: "Truck" },
  { value: "bi bi-robot", label: "Robot" },
  { value: "bi bi-lightning-charge-fill", label: "Lightning" },
  { value: "bi bi-bricks", label: "Bricks" },
  { value: "bi bi-building", label: "Building" },
  { value: "bi bi-box-seam", label: "Box" },
];

const defaultColors = [
  { bg: "rgba(59,130,246,0.1)", color: "#2563eb", label: "Blue" },
  { bg: "rgba(16,185,129,0.1)", color: "#059669", label: "Green" },
  { bg: "rgba(245,158,11,0.1)", color: "#d97706", label: "Amber" },
  { bg: "rgba(239,68,68,0.1)", color: "#dc2626", label: "Red" },
  { bg: "rgba(79,70,229,0.1)", color: "#4f46e5", label: "Indigo" },
  { bg: "rgba(124,58,237,0.1)", color: "#7c3aed", label: "Purple" },
  { bg: "rgba(20,184,166,0.1)", color: "#0d9488", label: "Teal" },
  { bg: "rgba(249,115,22,0.1)", color: "#ea580c", label: "Orange" },
];

const SuperAdminCatalog = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [industries, setIndustries] = useState<IndustryCatalogResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ── Add Industry Modal State ──
  const [showAddModal, setShowAddModal] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [addForm, setAddForm] = useState<CreateIndustryRequest>({
    name: '',
    sector: 'Manufacturing',
    icon: 'bi bi-cpu-fill',
    iconBg: 'rgba(59,130,246,0.1)',
    iconColor: '#2563eb',
    description: '',
    enterprises: 0,
  });

  // ── Delete Confirm State ──
  const [deleteTarget, setDeleteTarget] = useState<IndustryCatalogResponse | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // ── Edit Industry Modal State ──
  const [showEditModal, setShowEditModal] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [editForm, setEditForm] = useState<IndustryCatalogResponse | null>(null);

  // ── Toast ──
  const [toast, setToast] = useState<{ type: string; message: string } | null>(null);

  const showToast = (type: string, message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  // ── Fetch industries from API ──
  const loadIndustries = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchIndustries();
      setIndustries(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to load industries';
      setError(msg);
      console.error('Failed to load industries:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadIndustries();
  }, [loadIndustries]);

  // ── Sort State ──
  const [sortField, setSortField] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // ── Filter & Sort ──
  const filteredIndustries = activeTab === "all"
    ? [...industries]
    : industries.filter(ind => ind.sector.toLowerCase() === activeTab);

  filteredIndustries.sort((a, b) => {
    const aVal = (a as unknown as Record<string, unknown>)[sortField] || "";
    const bVal = (b as unknown as Record<string, unknown>)[sortField] || "";
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
    return 0;
  });

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // ── Compute sector counts from live data ──
  const sectorCounts = industries.reduce<Record<string, number>>((acc, ind) => {
    const key = ind.sector.toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const tabs = [
    { key: "all", label: "All Sectors", count: industries.length },
    { key: "manufacturing", label: "Manufacturing", count: sectorCounts["manufacturing"] || 0 },
    { key: "technology", label: "Technology", count: sectorCounts["technology"] || 0 },
    { key: "logistics", label: "Logistics", count: sectorCounts["logistics"] || 0 },
  ];

  // ── Handle Add Industry ──
  const handleAddIndustry = async () => {
    if (!addForm.name.trim()) {
      showToast('error', 'Industry name is required.');
      return;
    }
    try {
      setAddLoading(true);
      await createIndustry(addForm);
      showToast('success', `Industry "${addForm.name}" created successfully!`);
      setShowAddModal(false);
      setAddForm({
        name: '',
        sector: 'Manufacturing',
        icon: 'bi bi-cpu-fill',
        iconBg: 'rgba(59,130,246,0.1)',
        iconColor: '#2563eb',
        description: '',
        enterprises: 0,
      });
      await loadIndustries();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to create industry';
      showToast('error', msg);
    } finally {
      setAddLoading(false);
    }
  };

  // ── Handle Delete Industry ──
  const handleDeleteIndustry = async () => {
    if (!deleteTarget) return;
    try {
      setDeleteLoading(true);
      await deleteIndustry(deleteTarget.id);
      showToast('success', `Industry "${deleteTarget.name}" deleted successfully.`);
      setDeleteTarget(null);
      await loadIndustries();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to delete industry';
      showToast('error', msg);
    } finally {
      setDeleteLoading(false);
    }
  };

  // ── Handle color selection ──
  const handleColorSelect = (bg: string, color: string) => {
    setAddForm(prev => ({ ...prev, iconBg: bg, iconColor: color }));
  };

  // ── Handle Edit Industry ──
  const handleEditIndustry = async () => {
    if (!editForm || !editForm.name.trim()) {
      showToast('error', 'Industry name is required.');
      return;
    }
    try {
      setEditLoading(true);
      await updateIndustry(editForm.id, {
        name: editForm.name,
        sector: editForm.sector,
        icon: editForm.icon,
        iconBg: editForm.iconBg,
        iconColor: editForm.iconColor,
        description: editForm.description,
        enterprises: editForm.enterprises,
      });
      showToast('success', `Industry "${editForm.name}" updated successfully!`);
      setShowEditModal(false);
      setEditForm(null);
      await loadIndustries();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to update industry';
      showToast('error', msg);
    } finally {
      setEditLoading(false);
    }
  };

  const handleEditColorSelect = (bg: string, color: string) => {
    if (editForm) {
      setEditForm({ ...editForm, iconBg: bg, iconColor: color });
    }
  };

  // ── Product functions moved to SuperAdminIndustryProducts.tsx ──

  return (
    <div className="main-content">
      {/* Toast Notification */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 9999,
            padding: "12px 20px",
            borderRadius: "10px",
            background: toast.type === "success" ? "#059669" : "#dc2626",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 500,
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            animation: "slideIn 0.3s ease",
          }}
        >
          <i className={`bi ${toast.type === "success" ? "bi-check-circle-fill" : "bi-exclamation-triangle-fill"}`} />
          {toast.message}
        </div>
      )}

      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">System Catalog & Statistics</h1>
          <div className="page-breadcrumb">
            <a href="/saadmin/sa-dashboard">Dashboard</a>
            <i className="bi bi-chevron-right" />
            <span>System Catalog</span>
          </div>
        </div>
      </div>

      {/* ── Catalog: Industries ── */}
      <div className="section-card" id="catalog-industries">
        <div className="section-card-header">
          <h2 className="section-title">
            <i className="bi bi-gear-wide-connected" />
            Industry Structure Catalog
          </h2>
          <button
            className="btn-sa-primary"
            onClick={() => setShowAddModal(true)}
          >
            <i className="bi bi-plus-lg" />
            Add Industry
          </button>
        </div>

        <div className="section-body">
          <div className="sa-tabs" role="tablist">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`sa-tab${activeTab === tab.key ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
                <span
                  style={{
                    background: "rgba(0,0,0,0.07)",
                    borderRadius: "10px",
                    padding: "1px 7px",
                    fontSize: "11px",
                  }}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div style={{ padding: 0 }}>
            {loading ? (
              <div style={{ textAlign: "center", padding: "48px", color: "var(--text-muted)" }}>
                <i className="bi bi-arrow-repeat" style={{ fontSize: "24px", animation: "spin 1s linear infinite" }} />
                <p style={{ marginTop: "8px" }}>Loading industries...</p>
              </div>
            ) : error ? (
              <div style={{ textAlign: "center", padding: "48px", color: "#dc2626" }}>
                <i className="bi bi-exclamation-triangle" style={{ fontSize: "24px" }} />
                <p style={{ marginTop: "8px" }}>{error}</p>
                <button
                  className="btn-sa-primary"
                  style={{ marginTop: "12px" }}
                  onClick={loadIndustries}
                >
                  <i className="bi bi-arrow-clockwise" /> Retry
                </button>
              </div>
            ) : (
              <table className="sa-table">
                <thead>
                  <tr>
                    <th style={{ width: "40px" }}></th>
                    <th onClick={() => handleSort('name')} style={{ cursor: "pointer" }}>
                      Industry Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                    </th>
                    <th onClick={() => handleSort('sector')} style={{ cursor: "pointer" }}>
                      Sector {sortField === 'sector' && (sortDirection === 'asc' ? '↑' : '↓')}
                    </th>
                    <th>Sub-categories</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredIndustries.map((ind) => {
                    const sectorStyle = sectorColorMap[ind.sector] || { bg: "rgba(0,0,0,0.05)", color: "#666" };
                    return (
                      <tr key={ind.id}>
                        <td>
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: ind.iconBg || "rgba(0,0,0,0.05)",
                              color: ind.iconColor || "#666",
                              fontSize: "15px",
                            }}
                          >
                            <i className={ind.icon || "bi bi-building"} />
                          </div>
                        </td>
                        <td><strong>{ind.name}</strong></td>
                        <td>
                          <span
                            className="ind-tag"
                            style={{
                              background: sectorStyle.bg,
                              color: sectorStyle.color,
                            }}
                          >
                            {ind.sector}
                          </span>
                        </td>
                        <td>{ind.subCategories}</td>
                        <td>
                          <div style={{ display: "flex", gap: "4px" }}>
                            <button
                              className="catalog-action-btn"
                              title="Edit"
                              onClick={() => {
                                setEditForm(ind);
                                setShowEditModal(true);
                              }}
                            >
                              <i className="bi bi-pencil" />
                            </button>
                            <button
                              className="catalog-action-btn"
                              title="Manage Products"
                              onClick={() => navigate(`/saadmin/sa-catalog/${ind.id}/products`)}
                            >
                              <i className="bi bi-box-seam" />
                            </button>
                            <button
                              className="catalog-action-btn del"
                              title="Delete"
                              onClick={() => setDeleteTarget(ind)}
                            >
                              <i className="bi bi-trash" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {filteredIndustries.length === 0 && (
                    <tr>
                      <td colSpan={6} style={{ textAlign: "center", padding: "32px", color: "var(--text-muted)" }}>
                        No industries found in this sector.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>



      {/* ══════════════════════════════════════════
          Add Industry Modal
         ══════════════════════════════════════════ */}
      {showAddModal && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9000,
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="modal-content"
            style={{
              background: "var(--card-bg, #fff)",
              borderRadius: "16px",
              padding: "28px",
              width: "480px",
              maxWidth: "90vw",
              maxHeight: "85vh",
              overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "var(--heading-color)" }}>
                <i className="bi bi-plus-circle" style={{ marginRight: "8px", color: "#4f46e5" }} />
                Add New Industry
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                  padding: "4px",
                }}
              >
                <i className="bi bi-x-lg" />
              </button>
            </div>

            {/* Form */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Name */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--heading-color)" }}>
                  Industry Name <span style={{ color: "#dc2626" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Electronics, Automotive..."
                  value={addForm.name}
                  onChange={(e) => setAddForm(prev => ({ ...prev, name: e.target.value }))}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: "10px",
                    fontSize: "14px",
                    background: "var(--input-bg, #fff)",
                    color: "var(--text-color)",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Sector */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--heading-color)" }}>
                  Sector <span style={{ color: "#dc2626" }}>*</span>
                </label>
                <select
                  value={addForm.sector}
                  onChange={(e) => setAddForm(prev => ({ ...prev, sector: e.target.value }))}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: "10px",
                    fontSize: "14px",
                    background: "var(--input-bg, #fff)",
                    color: "var(--text-color)",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Technology">Technology</option>
                  <option value="Logistics">Logistics</option>
                </select>
              </div>

              {/* Icon */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--heading-color)" }}>
                  Icon
                </label>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {defaultIcons.map((ic) => (
                    <button
                      key={ic.value}
                      type="button"
                      title={ic.label}
                      onClick={() => setAddForm(prev => ({ ...prev, icon: ic.value }))}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        border: addForm.icon === ic.value ? "2px solid #4f46e5" : "1.5px solid var(--border-color)",
                        background: addForm.icon === ic.value ? "rgba(79,70,229,0.08)" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontSize: "16px",
                        color: addForm.icon === ic.value ? "#4f46e5" : "var(--text-muted)",
                      }}
                    >
                      <i className={ic.value} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--heading-color)" }}>
                  Color Theme
                </label>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {defaultColors.map((c) => (
                    <button
                      key={c.color}
                      type="button"
                      title={c.label}
                      onClick={() => handleColorSelect(c.bg, c.color)}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: addForm.iconColor === c.color ? "3px solid " + c.color : "2px solid var(--border-color)",
                        background: c.color,
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {addForm.iconColor === c.color && (
                        <i
                          className="bi bi-check"
                          style={{
                            color: "#fff",
                            fontSize: "16px",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--heading-color)" }}>
                  Description
                </label>
                <textarea
                  placeholder="Brief description of this industry..."
                  value={addForm.description}
                  onChange={(e) => setAddForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: "10px",
                    fontSize: "14px",
                    background: "var(--input-bg, #fff)",
                    color: "var(--text-color)",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>

            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "24px" }}>
              <button
                onClick={() => setShowAddModal(false)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--border-color)",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--text-color)",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleAddIndustry}
                disabled={addLoading}
                className="btn-sa-primary"
                style={{ padding: "10px 24px", opacity: addLoading ? 0.7 : 1 }}
              >
                {addLoading ? (
                  <>
                    <i className="bi bi-arrow-repeat" style={{ animation: "spin 1s linear infinite" }} />
                    Creating...
                  </>
                ) : (
                  <>
                    <i className="bi bi-plus-lg" />
                    Add Industry
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          Delete Confirmation Modal
         ══════════════════════════════════════════ */}
      {deleteTarget && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9000,
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setDeleteTarget(null)}
        >
          <div
            className="modal-content"
            style={{
              background: "var(--card-bg, #fff)",
              borderRadius: "16px",
              padding: "28px",
              width: "400px",
              maxWidth: "90vw",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "rgba(239,68,68,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}>
              <i className="bi bi-exclamation-triangle-fill" style={{ fontSize: "24px", color: "#dc2626" }} />
            </div>
            <h3 style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: 700, color: "var(--heading-color)" }}>
              Delete Industry
            </h3>
            <p style={{ margin: "0 0 4px", fontSize: "14px", color: "var(--text-muted)" }}>
              Are you sure you want to delete <strong style={{ color: "var(--heading-color)" }}>{deleteTarget.name}</strong>?
            </p>
            <p style={{ margin: "0 0 24px", fontSize: "13px", color: "#dc2626" }}>
              This will also remove all {deleteTarget.subCategories} product(s) in this industry.
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button
                onClick={() => setDeleteTarget(null)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--border-color)",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--text-color)",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteIndustry}
                disabled={deleteLoading}
                style={{
                  padding: "10px 24px",
                  borderRadius: "10px",
                  border: "none",
                  background: "#dc2626",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  opacity: deleteLoading ? 0.7 : 1,
                }}
              >
                {deleteLoading ? (
                  <>
                    <i className="bi bi-arrow-repeat" style={{ animation: "spin 1s linear infinite" }} />
                    Deleting...
                  </>
                ) : (
                  <>
                    <i className="bi bi-trash" />
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ══════════════════════════════════════════
          Edit Industry Modal
         ══════════════════════════════════════════ */}
      {showEditModal && editForm && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9000,
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setShowEditModal(false)}
        >
          <div
            className="modal-content"
            style={{
              background: "var(--card-bg, #fff)",
              borderRadius: "16px",
              padding: "28px",
              width: "480px",
              maxWidth: "90vw",
              maxHeight: "85vh",
              overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "var(--heading-color)" }}>
                <i className="bi bi-pencil" style={{ marginRight: "8px", color: "#4f46e5" }} />
                Edit Industry
              </h3>
              <button
                onClick={() => setShowEditModal(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                  padding: "4px",
                }}
              >
                <i className="bi bi-x-lg" />
              </button>
            </div>

            {/* Form */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Name */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--heading-color)" }}>
                  Industry Name <span style={{ color: "#dc2626" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Electronics, Automotive..."
                  value={editForm.name}
                  onChange={(e) => setEditForm(prev => prev ? ({ ...prev, name: e.target.value }) : prev)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: "10px",
                    fontSize: "14px",
                    background: "var(--input-bg, #fff)",
                    color: "var(--text-color)",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Sector */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--heading-color)" }}>
                  Sector <span style={{ color: "#dc2626" }}>*</span>
                </label>
                <select
                  value={editForm.sector}
                  onChange={(e) => setEditForm(prev => prev ? ({ ...prev, sector: e.target.value }) : prev)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: "10px",
                    fontSize: "14px",
                    background: "var(--input-bg, #fff)",
                    color: "var(--text-color)",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Technology">Technology</option>
                  <option value="Logistics">Logistics</option>
                </select>
              </div>

              {/* Icon */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--heading-color)" }}>
                  Icon
                </label>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {defaultIcons.map((ic) => (
                    <button
                      key={ic.value}
                      type="button"
                      title={ic.label}
                      onClick={() => setEditForm(prev => prev ? ({ ...prev, icon: ic.value }) : prev)}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        border: editForm.icon === ic.value ? "2px solid #4f46e5" : "1.5px solid var(--border-color)",
                        background: editForm.icon === ic.value ? "rgba(79,70,229,0.08)" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontSize: "16px",
                        color: editForm.icon === ic.value ? "#4f46e5" : "var(--text-muted)",
                      }}
                    >
                      <i className={ic.value} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--heading-color)" }}>
                  Color Theme
                </label>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {defaultColors.map((c) => (
                    <button
                      key={c.color}
                      type="button"
                      title={c.label}
                      onClick={() => handleEditColorSelect(c.bg, c.color)}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: editForm.iconColor === c.color ? "3px solid " + c.color : "2px solid var(--border-color)",
                        background: c.color,
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {editForm.iconColor === c.color && (
                        <i
                          className="bi bi-check"
                          style={{
                            color: "#fff",
                            fontSize: "16px",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--heading-color)" }}>
                  Description
                </label>
                <textarea
                  placeholder="Brief description of this industry..."
                  value={editForm.description || ''}
                  onChange={(e) => setEditForm(prev => prev ? ({ ...prev, description: e.target.value }) : prev)}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: "10px",
                    fontSize: "14px",
                    background: "var(--input-bg, #fff)",
                    color: "var(--text-color)",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              
              {/* Enterprises */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", color: "var(--heading-color)" }}>
                  Enterprises Count
                </label>
                <input
                  type="number"
                  min="0"
                  value={editForm.enterprises}
                  onChange={(e) => setEditForm(prev => prev ? ({ ...prev, enterprises: parseInt(e.target.value) || 0 }) : prev)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: "10px",
                    fontSize: "14px",
                    background: "var(--input-bg, #fff)",
                    color: "var(--text-color)",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "24px" }}>
              <button
                onClick={() => setShowEditModal(false)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--border-color)",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--text-color)",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleEditIndustry}
                disabled={editLoading}
                className="btn-sa-primary"
                style={{ padding: "10px 24px", opacity: editLoading ? 0.7 : 1 }}
              >
                {editLoading ? (
                  <>
                    <i className="bi bi-arrow-repeat" style={{ animation: "spin 1s linear infinite" }} />
                    Saving...
                  </>
                ) : (
                  <>
                    <i className="bi bi-check2" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal removed as it is now a separate page */}
    </div>
  );
};

export default SuperAdminCatalog;