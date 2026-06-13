import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts, createProduct, deleteProduct } from '../../../api/productApi'
import { fetchPublicIndustries } from '../../../api/publicCatalogApi'
import type { ProductResponse, CreateProductRequest } from '../../../api/productApi'
import type { IndustryCatalogResponse } from '../../../api/publicCatalogApi'

const ProductList = () => {
    // ── State ──
    const [products, setProducts] = useState<ProductResponse[]>([])
    const [industries, setIndustries] = useState<IndustryCatalogResponse[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    // ── Filters ──
    const [statusFilter, setStatusFilter] = useState<string | null>(null)
    const [searchInput, setSearchInput] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [industryFilter, setIndustryFilter] = useState<number | null>(null)

    // ── Add Product Modal ──
    const [showAddModal, setShowAddModal] = useState(false)
    const [addForm, setAddForm] = useState<CreateProductRequest>({
        name: '', description: '', quantity: 0, status: 'ACTIVE', industryId: 0,
    })
    const [addError, setAddError] = useState('')
    const [addLoading, setAddLoading] = useState(false)

    // ── Select All ──
    const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())

    // ── Toast ──
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

    // ── Load products ──
    const loadProducts = async () => {
        setLoading(true)
        setError('')
        try {
            const result = await fetchProducts({
                status: statusFilter || undefined,
                search: searchQuery || undefined,
                industryId: industryFilter || undefined,
            })
            setProducts(result)
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Failed to load products')
        } finally {
            setLoading(false)
        }
    }

    // ── Load industries for dropdown ──
    useEffect(() => {
        fetchPublicIndustries().then(setIndustries).catch(() => { })
    }, [])

    useEffect(() => {
        loadProducts()
    }, [statusFilter, searchQuery, industryFilter])

    // ── Search handler ──
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setSearchQuery(searchInput)
        }
    }

    // ── Filter tab click ──
    const handleFilterTab = (status: string | null) => {
        setStatusFilter(status)
        setSelectedIds(new Set())
    }

    // ── Select All toggle ──
    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedIds(new Set(products.map(p => p.id)))
        } else {
            setSelectedIds(new Set())
        }
    }

    const handleSelectOne = (id: number, checked: boolean) => {
        const next = new Set(selectedIds)
        if (checked) next.add(id)
        else next.delete(id)
        setSelectedIds(next)
    }

    // ── Add Product ──
    const handleAddProduct = async () => {
        setAddError('')
        if (!addForm.name) {
            setAddError('Product name is required')
            return
        }
        if (!addForm.industryId) {
            setAddError('Please select an industry')
            return
        }
        setAddLoading(true)
        try {
            await createProduct(addForm)
            setShowAddModal(false)
            setAddForm({ name: '', description: '', quantity: 0, status: 'ACTIVE', industryId: 0 })
            showToast('Product created successfully', 'success')
            loadProducts()
        } catch (err: unknown) {
            setAddError(err instanceof Error ? err.message : 'Failed to create product')
        } finally {
            setAddLoading(false)
        }
    }

    // ── Delete Product ──
    const handleDeleteProduct = async (product: ProductResponse) => {
        if (!window.confirm(`Are you sure you want to delete "${product.name}"?`)) return
        try {
            await deleteProduct(product.id)
            showToast('Product deleted successfully', 'success')
            loadProducts()
        } catch (err: unknown) {
            showToast(err instanceof Error ? err.message : 'Failed to delete product', 'error')
        }
    }

    // ── Toast helper ──
    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ message, type })
        setTimeout(() => setToast(null), 3000)
    }

    // ── Formatting helpers ──
    const formatDate = (dateStr?: string) => {
        if (!dateStr) return '—'
        return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }

    const activeCount = products.filter(p => p.status === 'ACTIVE').length
    const inactiveCount = products.filter(p => p.status === 'INACTIVE').length

    return (
        <>
            {/* Toast Notification */}
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

            <div className="main-content page-users">
                <div className="page-users users-lab">
                    <h1 className="page-title mb-1">Products</h1>
                    <nav className="breadcrumb">
                        <Link to="/admin/dashboard" className="breadcrumb-item">Home</Link>
                        <span className="breadcrumb-item active">Products</span>
                    </nav>
                    <div className="users-lab-hero mb-3">
                        <div>
                            <p className="users-page-subtitle">
                                Manage your product catalog — add, edit, and organize products by industry.
                            </p>
                        </div>
                        <div className="page-header-actions">
                            <button className="btn btn-outline-secondary btn-sm">
                                <i className="bi bi-download me-1" />
                                Export
                            </button>
                            <button className="btn btn-primary btn-sm" onClick={() => setShowAddModal(true)}>
                                <i className="bi bi-plus-lg me-1" />
                                Add Product
                            </button>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-12">
                            <div className="card users-list-card">
                                <div className="users-toolbar">
                                    <div className="users-toolbar-left">
                                        <div className="users-filter-tabs">
                                            <button
                                                className={`users-filter-tab ${!statusFilter ? 'active' : ''}`}
                                                onClick={() => handleFilterTab(null)}
                                            >
                                                All
                                                <span className="users-filter-count">{products.length}</span>
                                            </button>
                                            <button
                                                className={`users-filter-tab ${statusFilter === 'ACTIVE' ? 'active' : ''}`}
                                                onClick={() => handleFilterTab('ACTIVE')}
                                            >
                                                Active
                                                <span className="users-filter-count">{activeCount}</span>
                                            </button>
                                            <button
                                                className={`users-filter-tab ${statusFilter === 'INACTIVE' ? 'active' : ''}`}
                                                onClick={() => handleFilterTab('INACTIVE')}
                                            >
                                                Inactive
                                                <span className="users-filter-count">{inactiveCount}</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="users-toolbar-right">
                                        <div className="users-search">
                                            <i className="bi bi-search" />
                                            <input
                                                type="text"
                                                placeholder="Search products..."
                                                autoComplete="off"
                                                value={searchInput}
                                                onChange={e => setSearchInput(e.target.value)}
                                                onKeyDown={handleSearch}
                                            />
                                        </div>
                                        <div className="dropdown">
                                            <button className="users-toolbar-btn dropdown-toggle" data-bs-toggle="dropdown">
                                                <i className="bi bi-funnel" />
                                                {industryFilter ? industries.find(i => i.id === industryFilter)?.name || 'Industry' : 'Industry'}
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#" onClick={e => { e.preventDefault(); setIndustryFilter(null) }}>All Industries</a></li>
                                                {industries.map(ind => (
                                                    <li key={ind.id}>
                                                        <a className="dropdown-item" href="#" onClick={e => { e.preventDefault(); setIndustryFilter(ind.id) }}>
                                                            {ind.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Loading / Error / Table */}
                                {loading ? (
                                    <div style={{ textAlign: 'center', padding: '40px 0', color: '#6b7280' }}>
                                        <i className="bi bi-arrow-repeat" style={{ fontSize: 24, animation: 'spin 1s linear infinite' }} />
                                        <p style={{ marginTop: 8 }}>Loading products...</p>
                                    </div>
                                ) : error ? (
                                    <div style={{ textAlign: 'center', padding: '40px 0', color: '#ef4444' }}>
                                        <i className="bi bi-exclamation-triangle" style={{ fontSize: 24 }} />
                                        <p style={{ marginTop: 8 }}>{error}</p>
                                        <button className="btn btn-sm btn-outline-primary mt-2" onClick={loadProducts}>Retry</button>
                                    </div>
                                ) : (
                                    <div className="table-responsive users-table-wrap">
                                        <table className="table table-hover align-middle mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="users-th-check">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={selectedIds.size === products.length && products.length > 0}
                                                                onChange={e => handleSelectAll(e.target.checked)}
                                                            />
                                                        </div>
                                                    </th>
                                                    <th>Product</th>
                                                    <th>Industry</th>
                                                    <th>Quantity</th>
                                                    <th>Status</th>
                                                    <th>Created</th>
                                                    <th className="users-th-actions">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.length > 0 ? products.map(product => (
                                                    <tr key={product.id}>
                                                        <td>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    checked={selectedIds.has(product.id)}
                                                                    onChange={e => handleSelectOne(product.id, e.target.checked)}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="users-user">
                                                                <div className="users-avatar-wrap">
                                                                    <div className="users-avatar" style={{
                                                                        width: 36, height: 36, borderRadius: 8,
                                                                        background: '#dbeafe', display: 'flex',
                                                                        alignItems: 'center', justifyContent: 'center',
                                                                        fontWeight: 600, fontSize: 14, color: '#2563eb'
                                                                    }}>
                                                                        <i className="bi bi-box-seam" />
                                                                    </div>
                                                                </div>
                                                                <div className="users-user-info">
                                                                    <Link to={`/admin/products-edit/${product.id}`} className="users-user-name">
                                                                        {product.name}
                                                                    </Link>
                                                                    <span className="users-user-email">
                                                                        {product.description ? product.description.substring(0, 50) + (product.description.length > 50 ? '...' : '') : 'No description'}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="users-role manager">
                                                                <i className="bi bi-building" />
                                                                {product.industryName || '—'}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span style={{ fontWeight: 500 }}>
                                                                {product.quantity}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className={`users-status ${product.status.toLowerCase()}`}>
                                                                <span className="users-status-dot" />
                                                                {product.status.charAt(0) + product.status.slice(1).toLowerCase()}
                                                            </span>
                                                        </td>
                                                        <td className="users-meta">{formatDate(product.createdAt)}</td>
                                                        <td>
                                                            <div className="users-actions">
                                                                <Link to={`/admin/products-edit/${product.id}`} className="users-action-btn" title="Edit">
                                                                    <i className="bi bi-pencil" />
                                                                </Link>
                                                                <div className="dropdown">
                                                                    <button className="users-action-btn dropdown-toggle" data-bs-toggle="dropdown">
                                                                        <i className="bi bi-three-dots" />
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item text-danger" href="#"
                                                                                onClick={e => { e.preventDefault(); handleDeleteProduct(product) }}>
                                                                                <i className="bi bi-trash me-2" />Delete
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )) : (
                                                    <tr>
                                                        <td colSpan={7} style={{ textAlign: 'center', padding: '40px 0', color: '#9ca3af' }}>
                                                            <i className="bi bi-box-seam" style={{ fontSize: 32, display: 'block', marginBottom: 8 }} />
                                                            No products found
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ═══ Add Product Modal ═══ */}
                    {showAddModal && (
                        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex={-1}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add New Product</h5>
                                        <button type="button" className="btn-close" onClick={() => { setShowAddModal(false); setAddError('') }} />
                                    </div>
                                    <div className="modal-body">
                                        {addError && (
                                            <div className="alert alert-danger py-2" style={{ fontSize: 13 }}>
                                                <i className="bi bi-exclamation-circle me-1" />{addError}
                                            </div>
                                        )}
                                        <form onSubmit={e => e.preventDefault()}>
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Product Name *</label>
                                                    <input type="text" className="form-control" placeholder="Enter product name"
                                                        value={addForm.name}
                                                        onChange={e => setAddForm({ ...addForm, name: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Industry *</label>
                                                    <select className="form-select"
                                                        value={addForm.industryId}
                                                        onChange={e => setAddForm({ ...addForm, industryId: Number(e.target.value) })}
                                                    >
                                                        <option value={0}>Select industry...</option>
                                                        {industries.map(ind => (
                                                            <option key={ind.id} value={ind.id}>{ind.name} ({ind.sector})</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Description</label>
                                                    <textarea className="form-control" rows={3} placeholder="Enter product description"
                                                        value={addForm.description || ''}
                                                        onChange={e => setAddForm({ ...addForm, description: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="form-label">Quantity</label>
                                                    <input type="number" className="form-control" min={0}
                                                        value={addForm.quantity || 0}
                                                        onChange={e => setAddForm({ ...addForm, quantity: Number(e.target.value) })}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="form-label">Status</label>
                                                    <select className="form-select"
                                                        value={addForm.status || 'ACTIVE'}
                                                        onChange={e => setAddForm({ ...addForm, status: e.target.value })}
                                                    >
                                                        <option value="ACTIVE">Active</option>
                                                        <option value="INACTIVE">Inactive</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={() => { setShowAddModal(false); setAddError('') }}>
                                            Cancel
                                        </button>
                                        <button type="button" className="btn btn-primary" onClick={handleAddProduct} disabled={addLoading}>
                                            {addLoading ? 'Adding...' : 'Add Product'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-links"></div>
                    <div className="footer-credits">
                        <div className="footer-copyright">
                            2026
                            <a href="#">EIU</a>
                        </div>
                        <div className="footer-copyright">
                            <div className="credits">
                                Designed by
                                <a href="https://bootstrapmade.com/">ProjectAdin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default ProductList
