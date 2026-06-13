import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMetadata, updateMetadata, uploadMetadataImage, deleteMetadataImage } from '../../../api/metadataApi';
import type { MetadataResponse } from '../../../api/metadataApi';

const CompanyProfile = () => {
  const [metadata, setMetadata] = useState<MetadataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Form State
  const [form, setForm] = useState({
    name: '',
    description: '',
    address: '',
    phone: '',
    zone: 'vsip',
    rating: 5.0,
    reviewCount: 0
  });

  const loadMetadata = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchMetadata({ type: 'COMPANY_CARD' });
      if (data && data.length > 0) {
        const item = data[0];
        setMetadata(item);
        setForm({
          name: item.name || '',
          description: item.description || '',
          address: item.address || '',
          phone: item.phone || '',
          zone: item.zone || 'vsip',
          rating: item.rating || 5.0,
          reviewCount: item.reviewCount || 0
        });
      } else {
        setError('No company profile card found for your account.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load company profile.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMetadata();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!metadata) return;

    setSaving(true);
    try {
      const updated = await updateMetadata(metadata.id, form);
      setMetadata(updated);
      showToast('Profile updated successfully!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Failed to save profile changes.', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0] && metadata) {
      const file = e.dataTransfer.files[0];
      await uploadImageFile(file);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && metadata) {
      const file = e.target.files[0];
      await uploadImageFile(file);
    }
  };

  const uploadImageFile = async (file: File) => {
    if (!metadata) return;
    try {
      const updated = await uploadMetadataImage(metadata.id, file);
      setMetadata(updated);
      showToast('Profile image uploaded!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Failed to upload image.', 'error');
    }
  };

  const handleRemoveImage = async () => {
    if (!metadata || !window.confirm('Are you sure you want to remove this profile image?')) return;
    try {
      await deleteMetadataImage(metadata.id);
      setMetadata({ ...metadata, imagePath: undefined });
      showToast('Image removed.', 'success');
    } catch (err) {
      console.error(err);
      showToast('Failed to remove image.', 'error');
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  if (loading) {
    return (
      <div className="main-content d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="text-center text-muted">
          <i className="bi bi-arrow-repeat spin" style={{ fontSize: '2.5rem', display: 'inline-block' }} />
          <p className="mt-2">Loading profile details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main-content d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="text-center text-danger">
          <i className="bi bi-exclamation-triangle-fill" style={{ fontSize: '2.5rem' }} />
          <p className="mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {toast && (
        <div style={{
          position: 'fixed', top: 20, right: 20, zIndex: 9999, padding: '12px 24px',
          borderRadius: 8, color: '#fff', fontSize: 14, fontWeight: 500,
          backgroundColor: toast.type === 'success' ? '#10b981' : '#ef4444',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)', animation: 'fadeIn 0.3s ease'
        }}>
          <i className={`bi ${toast.type === 'success' ? 'bi-check-circle' : 'bi-x-circle'} me-2`} />
          {toast.message}
        </div>
      )}

      <div className="main-content">
        <div className="page-header mb-4">
          <div>
            <h1 className="page-title">Company Profile</h1>
            <div className="page-breadcrumb">
              <Link to="/admin/dashboard">Dashboard</Link>
              <i className="bi bi-chevron-right" />
              <span>Card Profile</span>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Form Editor */}
          <div className="col-lg-7">
            <div className="card shadow-sm" style={{ borderRadius: 12, border: '1px solid #e5e7eb' }}>
              <div className="card-body p-4">
                <h5 className="mb-4 fw-bold text-dark">
                  <i className="bi bi-pencil-square me-2 text-primary" />
                  Edit Profile Card Information
                </h5>
                <form onSubmit={handleSave} className="row g-3">
                  <div className="col-12">
                    <label className="form-label fw-semibold">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Location / Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. VSIP I, Binh Duong"
                      value={form.address}
                      onChange={e => setForm({ ...form, address: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone Contact</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Industrial Zone Cluster</label>
                    <select
                      className="form-select"
                      value={form.zone}
                      onChange={e => setForm({ ...form, zone: e.target.value })}
                    >
                      <option value="vsip">VSIP (Binh Duong)</option>
                      <option value="myphuoc">My Phuoc (Ben Cat)</option>
                      <option value="amata">Amata (Dong Nai)</option>
                      <option value="hp">VSIP Hai Phong (Hai Phong)</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Rating (0.0-5.0)</label>
                    <input
                      type="number"
                      className="form-control"
                      step="0.1"
                      min="0"
                      max="5"
                      value={form.rating}
                      onChange={e => setForm({ ...form, rating: Number(e.target.value) })}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Review Count</label>
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      value={form.reviewCount}
                      onChange={e => setForm({ ...form, reviewCount: Number(e.target.value) })}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Tagline / Short description</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={form.description}
                      onChange={e => setForm({ ...form, description: e.target.value })}
                      required
                    />
                  </div>

                  {/* Drag-and-drop Image Upload */}
                  <div className="col-12 mt-4">
                    <label className="form-label fw-semibold">Profile Banner Image</label>
                    <div
                      className={`upload-zone text-center p-4 border border-2 border-dashed rounded-3 ${dragActive ? 'border-primary bg-light' : 'border-muted'}`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                    >
                      {metadata?.imagePath ? (
                        <div className="image-preview">
                          <img
                            src={metadata.imagePath.startsWith('http') ? metadata.imagePath : `/${metadata.imagePath}`}
                            alt="Preview"
                            className="img-thumbnail mb-2"
                            style={{ maxHeight: '150px', objectFit: 'cover' }}
                          />
                          <div>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger me-2"
                              onClick={handleRemoveImage}
                            >
                              <i className="bi bi-trash" /> Remove
                            </button>
                            <label className="btn btn-sm btn-primary mb-0">
                              <i className="bi bi-arrow-repeat" /> Change Image
                              <input
                                type="file"
                                className="d-none"
                                accept="image/*"
                                onChange={handleFileChange}
                              />
                            </label>
                          </div>
                        </div>
                      ) : (
                        <label className="mb-0 w-100 py-3" style={{ cursor: 'pointer' }}>
                          <i className="bi bi-cloud-arrow-up text-primary" style={{ fontSize: '2.5rem' }} />
                          <p className="mt-2 mb-1 fw-medium">Drag & Drop image file here or click to browse</p>
                          <small className="text-muted">Supports WEBP, PNG, JPG files</small>
                          <input
                            type="file"
                            className="d-none"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="col-12 mt-4 border-top pt-3 d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-2 fw-semibold"
                      disabled={saving}
                    >
                      {saving ? (
                        <>
                          <i className="bi bi-arrow-repeat spin me-2" /> Saving...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-save me-2" /> Save Changes
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div className="col-lg-5">
            <div className="card shadow-sm h-100" style={{ borderRadius: 12, border: '1px solid #e5e7eb' }}>
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="mb-4 fw-bold text-dark">
                  <i className="bi bi-eye me-2 text-primary" />
                  Profile Card Live Preview
                </h5>
                <div className="d-flex align-items-center justify-content-center flex-grow-1 bg-light rounded-3 p-4">
                  {/* Render exact HomePage Company Card layout */}
                  <div className="card shadow-sm" style={{ width: '280px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                    <div className="position-relative overflow-hidden" style={{ height: '180px' }}>
                      <img
                        src={metadata?.imagePath ? (metadata.imagePath.startsWith('http') ? metadata.imagePath : `/${metadata.imagePath}`) : 'https://images.unsplash.com/photo-1655876726270-2caec425d0cd?auto=format&fit=crop&q=80&w=400'}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                        alt={form.name || 'Preview'}
                      />
                      <div className="position-absolute top-0 end-0 m-2 px-2 py-1 bg-success text-white rounded small fw-bold" style={{ fontSize: '0.75rem' }}>
                        <i className="bi bi-check-circle-fill" /> Verified
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <h6 className="card-title fw-bold text-dark mb-1">{form.name || 'Company Name'}</h6>
                      <div className="text-muted small mb-2">
                        <i className="bi bi-geo-alt" /> {form.address || 'Address'}
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="small text-warning fw-bold">
                          <i className="bi bi-star-fill" /> {form.rating || 5.0} ({form.reviewCount || 0})
                        </div>
                        <span className="text-primary small fw-bold text-decoration-none" style={{ cursor: 'default' }}>
                          Details <i className="bi bi-arrow-right" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
