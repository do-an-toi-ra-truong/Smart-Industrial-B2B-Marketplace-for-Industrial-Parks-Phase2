import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  fetchIndustryById,
  addIndustryProduct,
  removeIndustryProduct,
  updateIndustryProduct,
  type IndustryCatalogResponse,
  type IndustryProductResponse,
} from '../../../api/industryCatalogApi';

const SuperAdminIndustryProducts = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [industry, setIndustry] = useState<IndustryCatalogResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [newProductName, setNewProductName] = useState('');
  const [newProductDesc, setNewProductDesc] = useState('');
  const [newProductQuantity, setNewProductQuantity] = useState<number>(0);
  const [productLoading, setProductLoading] = useState(false);

  // Edit Product Modal
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProductForm, setEditProductForm] = useState<IndustryProductResponse | null>(null);
  const [editLoading, setEditLoading] = useState(false);

  // Toast
  const [toast, setToast] = useState<{ type: string; message: string } | null>(null);

  const showToast = (type: string, message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const loadIndustry = useCallback(async () => {
    if (!id) return;
    try {
      setLoading(true);
      setError(null);
      const data = await fetchIndustryById(Number(id));
      setIndustry(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to load industry';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadIndustry();
  }, [loadIndustry]);

  const handleAddProduct = async () => {
    if (!industry || !newProductName.trim()) {
      showToast('error', 'Product name is required.');
      return;
    }
    try {
      setProductLoading(true);
      await addIndustryProduct(industry.id, {
        name: newProductName,
        description: newProductDesc,
        quantity: newProductQuantity,
      });
      showToast('success', 'Product added successfully!');
      setNewProductName('');
      setNewProductDesc('');
      setNewProductQuantity(0);
      await loadIndustry();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to add product';
      showToast('error', msg);
    } finally {
      setProductLoading(false);
    }
  };

  const handleEditProduct = async () => {
    if (!industry || !editProductForm || !editProductForm.name.trim()) {
      showToast('error', 'Product name is required.');
      return;
    }
    try {
      setEditLoading(true);
      await updateIndustryProduct(industry.id, editProductForm.id, {
        name: editProductForm.name,
        description: editProductForm.description,
        quantity: editProductForm.quantity,
        status: editProductForm.status,
      });
      showToast('success', 'Product updated successfully!');
      setShowEditModal(false);
      setEditProductForm(null);
      await loadIndustry();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to update product';
      showToast('error', msg);
    } finally {
      setEditLoading(false);
    }
  };

  const handleRemoveProduct = async (productId: number) => {
    if (!industry) return;
    try {
      await removeIndustryProduct(industry.id, productId);
      showToast('success', 'Product removed successfully!');
      await loadIndustry();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to remove product';
      showToast('error', msg);
    }
  };

  if (loading) {
    return (
      <div className="main-content">
        <div style={{ textAlign: "center", padding: "48px", color: "var(--text-muted)" }}>
          <i className="bi bi-arrow-repeat" style={{ fontSize: "24px", animation: "spin 1s linear infinite" }} />
          <p style={{ marginTop: "8px" }}>Loading products...</p>
        </div>
      </div>
    );
  }

  if (error || !industry) {
    return (
      <div className="main-content">
        <div style={{ textAlign: "center", padding: "48px", color: "#dc2626" }}>
          <i className="bi bi-exclamation-triangle" style={{ fontSize: "24px" }} />
          <p style={{ marginTop: "8px" }}>{error || 'Industry not found'}</p>
          <button
            className="btn-sa-primary"
            style={{ marginTop: "12px" }}
            onClick={() => navigate('/saadmin/sa-catalog')}
          >
            <i className="bi bi-arrow-left" /> Back to Catalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
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
          <h1 className="page-title">Manage Products: {industry.name}</h1>
          <div className="page-breadcrumb">
            <a href="/saadmin/sa-dashboard">Dashboard</a>
            <i className="bi bi-chevron-right" />
            <a href="/saadmin/sa-catalog">System Catalog</a>
            <i className="bi bi-chevron-right" />
            <span>Products</span>
          </div>
        </div>
        <button
          className="btn-sa-primary"
          style={{ background: "transparent", color: "var(--heading-color)", border: "1.5px solid var(--border-color)" }}
          onClick={() => navigate('/saadmin/sa-catalog')}
        >
          <i className="bi bi-arrow-left" /> Back
        </button>
      </div>

      <div className="section-card">
        <div className="section-card-header">
          <h2 className="section-title">
            <i className="bi bi-box-seam" />
            Add New Product
          </h2>
        </div>
        <div className="section-body">
          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <input
                type="text"
                placeholder="Product Name *"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
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
            <div style={{ flex: "1 1 100px", maxWidth: "150px" }}>
              <input
                type="number"
                placeholder="Quantity"
                min="0"
                value={newProductQuantity || ''}
                onChange={(e) => setNewProductQuantity(parseInt(e.target.value) || 0)}
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
            <div style={{ flex: "2 1 300px" }}>
              <input
                type="text"
                placeholder="Description (optional)"
                value={newProductDesc}
                onChange={(e) => setNewProductDesc(e.target.value)}
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
            <button
              onClick={handleAddProduct}
              disabled={productLoading || !newProductName.trim()}
              className="btn-sa-primary"
              style={{ padding: "10px 24px", opacity: (productLoading || !newProductName.trim()) ? 0.7 : 1 }}
            >
              {productLoading ? (
                <><i className="bi bi-arrow-repeat" style={{ animation: "spin 1s linear infinite" }} /> Adding...</>
              ) : (
                <><i className="bi bi-plus-lg" /> Add Product</>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="section-card" style={{ marginTop: "24px" }}>
        <div className="section-card-header">
          <h2 className="section-title">
            <i className="bi bi-list-ul" />
            Current Products ({industry.products.length})
          </h2>
        </div>
        <div className="section-body" style={{ padding: 0 }}>
          {industry.products.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px", color: "var(--text-muted)" }}>
              No products added to this industry yet.
            </div>
          ) : (
            <table className="sa-table">
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>Product Name</th>
                  <th style={{ width: "10%" }}>Quantity</th>
                  <th style={{ width: "40%" }}>Description</th>
                  <th style={{ width: "10%" }}>Status</th>
                  <th style={{ width: "10%" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {industry.products.map(prod => (
                  <tr key={prod.id}>
                    <td><strong>{prod.name}</strong></td>
                    <td>{prod.quantity || 0}</td>
                    <td style={{ color: "var(--text-muted)" }}>{prod.description || '-'}</td>
                    <td>
                      <span className={`badge-status ${prod.status === 'ACTIVE' ? 'active' : 'inactive'}`}>
                        {prod.status}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: "4px" }}>
                        <button
                          className="catalog-action-btn"
                          title="Edit Product"
                          onClick={() => {
                            setEditProductForm(prod);
                            setShowEditModal(true);
                          }}
                        >
                          <i className="bi bi-pencil" />
                        </button>
                        <button
                          className="catalog-action-btn del"
                          title="Remove Product"
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to remove "${prod.name}"?`)) {
                              handleRemoveProduct(prod.id);
                            }
                          }}
                        >
                          <i className="bi bi-trash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          Edit Product Modal
         ══════════════════════════════════════════ */}
      {showEditModal && editProductForm && (
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
                Edit Product
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

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Product Name *</label>
                <input
                  type="text"
                  value={editProductForm.name}
                  onChange={(e) => setEditProductForm({ ...editProductForm, name: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid var(--border-color)", borderRadius: "10px" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Quantity</label>
                <input
                  type="number"
                  min="0"
                  value={editProductForm.quantity}
                  onChange={(e) => setEditProductForm({ ...editProductForm, quantity: parseInt(e.target.value) || 0 })}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid var(--border-color)", borderRadius: "10px" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Description</label>
                <textarea
                  value={editProductForm.description || ''}
                  onChange={(e) => setEditProductForm({ ...editProductForm, description: e.target.value })}
                  rows={3}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid var(--border-color)", borderRadius: "10px", resize: "vertical" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>Status</label>
                <select
                  value={editProductForm.status}
                  onChange={(e) => setEditProductForm({ ...editProductForm, status: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid var(--border-color)", borderRadius: "10px" }}
                >
                  <option value="ACTIVE">Active</option>
                  <option value="INACTIVE">Inactive</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "24px" }}>
              <button
                onClick={() => setShowEditModal(false)}
                style={{ padding: "10px 20px", borderRadius: "10px", border: "1.5px solid var(--border-color)", background: "transparent", cursor: "pointer" }}
              >
                Cancel
              </button>
              <button
                onClick={handleEditProduct}
                disabled={editLoading}
                className="btn-sa-primary"
                style={{ padding: "10px 24px", opacity: editLoading ? 0.7 : 1 }}
              >
                {editLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SuperAdminIndustryProducts;
