import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { fetchProductById, updateProduct, deleteProduct, uploadProductImage, deleteProductImage } from '../../../api/productApi'
import { fetchPublicIndustries } from '../../../api/publicCatalogApi'
import type { ProductResponse, UpdateProductRequest } from '../../../api/productApi'
import type { IndustryCatalogResponse } from '../../../api/publicCatalogApi'

const ProductEdit = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    // ── State ──
    const [product, setProduct] = useState<ProductResponse | null>(null)
    const [industries, setIndustries] = useState<IndustryCatalogResponse[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState('')
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
    const [dragActive, setDragActive] = useState(false)

    // ── Form State ──
    const [form, setForm] = useState({
        name: '',
        description: '',
        quantity: 0,
        status: 'ACTIVE',
        industryId: 0,
        category: 'electronics',
        badge: '',
        isFeatured: false
    })

    // ── Load product data ──
    useEffect(() => {
        if (!id) return
        setLoading(true)

        Promise.all([
            fetchProductById(Number(id)),
            fetchPublicIndustries(),
        ]).then(([p, inds]) => {
            setProduct(p)
            setIndustries(inds)
            setForm({
                name: p.name || '',
                description: p.description || '',
                quantity: p.quantity || 0,
                status: p.status || 'ACTIVE',
                industryId: p.industryId || 0,
                category: p.category || 'electronics',
                badge: p.badge || '',
                isFeatured: p.isFeatured || false
            })
        }).catch(err => {
            setError(err instanceof Error ? err.message : 'Failed to load product')
        }).finally(() => setLoading(false))
    }, [id])

    // ── Save ──
    const handleSave = async () => {
        if (!id) return
        setSaving(true)
        try {
            const updates: UpdateProductRequest = {
                name: form.name,
                description: form.description,
                quantity: form.quantity,
                status: form.status,
                industryId: form.industryId,
                category: form.category,
                badge: form.badge || undefined,
                isFeatured: form.isFeatured
            }
            const updated = await updateProduct(Number(id), updates)
            setProduct(updated)
            showToast('Product updated successfully', 'success')
        } catch (err: unknown) {
            showToast(err instanceof Error ? err.message : 'Failed to update product', 'error')
        } finally {
            setSaving(false)
        }
    }

    // ── Drag & Drop Helpers ──
    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = async (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0] && id) {
            const file = e.dataTransfer.files[0]
            await uploadProductImageFile(file)
        }
    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0] && id) {
            const file = e.target.files[0]
            await uploadProductImageFile(file)
        }
    }

    const uploadProductImageFile = async (file: File) => {
        if (!id) return
        try {
            const updated = await uploadProductImage(Number(id), file)
            setProduct(updated)
            showToast('Image uploaded successfully', 'success')
        } catch (err: unknown) {
            showToast(err instanceof Error ? err.message : 'Failed to upload image', 'error')
        }
    }

    const handleRemoveImage = async () => {
        if (!id || !window.confirm('Are you sure you want to remove this image?')) return
        try {
            await deleteProductImage(Number(id))
            setProduct(product ? { ...product, imagePath: undefined } : null)
            showToast('Image removed successfully', 'success')
        } catch (err: unknown) {
            showToast(err instanceof Error ? err.message : 'Failed to remove image', 'error')
        }
    }

    // ── Delete ──
    const handleDelete = async () => {
        if (!id || !window.confirm('Are you sure you want to delete this product?')) return
        try {
            await deleteProduct(Number(id))
            showToast('Product deleted', 'success')
            setTimeout(() => navigate('/admin/products-list'), 500)
        } catch (err: unknown) {
            showToast(err instanceof Error ? err.message : 'Failed to delete product', 'error')
        }
    }

    // ── Toast helper ──
    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ message, type })
        setTimeout(() => setToast(null), 3000)
    }

    // ── Loading ──
    if (loading) {
        return (
            <div className="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
                <div style={{ textAlign: 'center', color: '#6b7280' }}>
                    <i className="bi bi-arrow-repeat" style={{ fontSize: 32, animation: 'spin 1s linear infinite' }} />
                    <p style={{ marginTop: 12 }}>Loading product...</p>
                </div>
            </div>
        )
    }

    if (error || !product) {
        return (
            <div className="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
                <div style={{ textAlign: 'center', color: '#ef4444' }}>
                    <i className="bi bi-exclamation-triangle" style={{ fontSize: 32 }} />
                    <p style={{ marginTop: 12 }}>{error || 'Product not found'}</p>
                    <Link to="/admin/products-list" className="btn btn-sm btn-outline-primary mt-2">Back to Products</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            {/* Toast */}
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

            <div className="main-content page-user-edit">
                <div className="page-user-edit">
                    {/* Header */}
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div>
                            <h1 className="page-title mb-1">Edit Product</h1>
                            <nav className="breadcrumb">
                                <Link to="/admin/dashboard" className="breadcrumb-item">Home</Link>
                                <Link to="/admin/products-list" className="breadcrumb-item">Products</Link>
                                <span className="breadcrumb-item active">{product.name}</span>
                            </nav>
                        </div>
                        <div className="d-flex gap-2">
                            <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>
                                <i className="bi bi-trash me-1" />Delete
                            </button>
                            <button className="btn btn-primary btn-sm" onClick={handleSave} disabled={saving}>
                                <i className="bi bi-check-lg me-1" />
                                {saving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Main form */}
                        <div className="col-lg-8">
                            <div className="card" style={{ borderRadius: 12, border: '1px solid #e5e7eb' }}>
                                <div className="card-body p-4">
                                    <h5 className="mb-3" style={{ fontWeight: 600 }}>
                                        <i className="bi bi-box-seam me-2 text-primary" />
                                        Product Information
                                    </h5>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label fw-medium">Product Name</label>
                                            <input type="text" className="form-control"
                                                value={form.name}
                                                onChange={e => setForm({ ...form, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-medium">Industry</label>
                                            <select className="form-select"
                                                value={form.industryId}
                                                onChange={e => setForm({ ...form, industryId: Number(e.target.value) })}
                                            >
                                                <option value={0}>Select industry...</option>
                                                {industries.map(ind => (
                                                    <option key={ind.id} value={ind.id}>{ind.name} ({ind.sector})</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-medium">Description</label>
                                            <textarea className="form-control" rows={4}
                                                value={form.description}
                                                onChange={e => setForm({ ...form, description: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side panel */}
                        <div className="col-lg-4">
                            {/* Status & Quantity */}
                            <div className="card mb-3" style={{ borderRadius: 12, border: '1px solid #e5e7eb' }}>
                                <div className="card-body p-4">
                                    <h5 className="mb-3" style={{ fontWeight: 600 }}>
                                        <i className="bi bi-gear me-2 text-primary" />
                                        Settings
                                    </h5>
                                    <div className="mb-3">
                                        <label className="form-label fw-medium">Status</label>
                                        <select className="form-select"
                                            value={form.status}
                                            onChange={e => setForm({ ...form, status: e.target.value })}
                                        >
                                            <option value="ACTIVE">Active</option>
                                            <option value="INACTIVE">Inactive</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-medium">Quantity</label>
                                        <input type="number" className="form-control" min={0}
                                            value={form.quantity}
                                            onChange={e => setForm({ ...form, quantity: Number(e.target.value) })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-medium">Category</label>
                                        <select className="form-select"
                                            value={form.category}
                                            onChange={e => setForm({ ...form, category: e.target.value })}
                                        >
                                            <option value="electronics">Electronics</option>
                                            <option value="machinery">Machinery</option>
                                            <option value="raw-materials">Raw Materials</option>
                                            <option value="chemicals">Chemicals</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-medium">Badge</label>
                                        <select className="form-select"
                                            value={form.badge}
                                            onChange={e => setForm({ ...form, badge: e.target.value })}
                                        >
                                            <option value="">None</option>
                                            <option value="hot">Hot</option>
                                            <option value="top">Top</option>
                                            <option value="new">New</option>
                                        </select>
                                    </div>
                                    <div className="form-check form-switch mb-2">
                                        <input className="form-check-input" type="checkbox" role="switch" id="isFeaturedSwitch"
                                            checked={form.isFeatured}
                                            onChange={e => setForm({ ...form, isFeatured: e.target.checked })}
                                        />
                                        <label className="form-check-label fw-medium" htmlFor="isFeaturedSwitch">Featured Product</label>
                                    </div>
                                </div>
                            </div>

                            {/* Product Image Card */}
                            <div className="card mb-3" style={{ borderRadius: 12, border: '1px solid #e5e7eb' }}>
                                <div className="card-body p-4">
                                    <h5 className="mb-3" style={{ fontWeight: 600 }}>
                                        <i className="bi bi-image me-2 text-primary" />
                                        Product Image
                                    </h5>
                                    <div
                                        className={`upload-zone text-center p-3 border border-2 border-dashed rounded-3 ${dragActive ? 'border-primary bg-light' : 'border-muted'}`}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                        style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                                    >
                                        {product?.imagePath ? (
                                            <div className="image-preview">
                                                <img
                                                    src={product.imagePath.startsWith('http') ? product.imagePath : `/${product.imagePath}`}
                                                    alt="Product"
                                                    className="img-thumbnail mb-2"
                                                    style={{ maxHeight: '120px', objectFit: 'cover' }}
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
                                                        <i className="bi bi-arrow-repeat" /> Change
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
                                            <label className="mb-0 w-100 py-2" style={{ cursor: 'pointer' }}>
                                                <i className="bi bi-cloud-arrow-up text-primary" style={{ fontSize: '2rem' }} />
                                                <p className="mt-2 mb-1 fw-medium" style={{ fontSize: 13 }}>Drag & Drop or click to browse</p>
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
                            </div>

                            {/* Product Info Summary */}
                            <div className="card" style={{ borderRadius: 12, border: '1px solid #e5e7eb' }}>
                                <div className="card-body p-4">
                                    <h5 className="mb-3" style={{ fontWeight: 600 }}>
                                        <i className="bi bi-info-circle me-2 text-primary" />
                                        Info
                                    </h5>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Product ID</span>
                                        <span className="fw-medium">#{product.id}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Industry</span>
                                        <span className="fw-medium">{product.industryName || '—'}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Created</span>
                                        <span className="fw-medium">
                                            {product.createdAt ? new Date(product.createdAt).toLocaleDateString() : '—'}
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted">Updated</span>
                                        <span className="fw-medium">
                                            {product.updatedAt ? new Date(product.updatedAt).toLocaleDateString() : '—'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductEdit
