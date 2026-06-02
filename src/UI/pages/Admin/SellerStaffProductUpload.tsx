import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface SpecRow {
    key: string;
    value: string;
}

const SellerStaffProductUpload = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);

    // ── Toast ──
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    // ── Form State ──
    const [form, setForm] = useState({
        productName: '',
        sku: '',
        category: '',
        industry: '',
        price: '',
        compareAtPrice: '',
        stockQuantity: '',
        minOrderQty: '1',
        shortDescription: '',
        fullDescription: '',
        weight: '',
        length: '',
        width: '',
        height: '',
        shippingClass: 'standard',
        unit: 'piece',
    });

    // ── Image Upload State ──
    const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
    const [dragActive, setDragActive] = useState(false);

    // ── Specification Rows ──
    const [specs, setSpecs] = useState<SpecRow[]>([
        { key: '', value: '' },
    ]);

    const [saving, setSaving] = useState(false);

    // ── Handlers ──
    const handleChange = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleImageDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragActive(false);
        const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
        addImages(files);
    };

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files).filter(f => f.type.startsWith('image/'));
            addImages(files);
        }
    };

    const addImages = (files: File[]) => {
        const newImages = files.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));
        setImages(prev => [...prev, ...newImages].slice(0, 6)); // Max 6 images
    };

    const removeImage = (index: number) => {
        setImages(prev => {
            const updated = [...prev];
            URL.revokeObjectURL(updated[index].preview);
            updated.splice(index, 1);
            return updated;
        });
    };

    const addSpecRow = () => {
        setSpecs(prev => [...prev, { key: '', value: '' }]);
    };

    const removeSpecRow = (index: number) => {
        setSpecs(prev => prev.filter((_, i) => i !== index));
    };

    const updateSpec = (index: number, field: 'key' | 'value', val: string) => {
        setSpecs(prev => {
            const updated = [...prev];
            updated[index] = { ...updated[index], [field]: val };
            return updated;
        });
    };

    const handleSubmit = async (status: 'Draft' | 'Pending') => {
        if (!form.productName.trim()) {
            showToast('Product name is required.', 'error');
            return;
        }
        if (!form.category) {
            showToast('Please select a category.', 'error');
            return;
        }
        if (!form.price) {
            showToast('Price is required.', 'error');
            return;
        }

        setSaving(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSaving(false);

        if (status === 'Draft') {
            showToast('Product saved as draft successfully!', 'success');
        } else {
            showToast('Product submitted for approval!', 'success');
        }

        setTimeout(() => {
            navigate('/admin/seller-products');
        }, 1500);
    };

    return (
        <>
            {/* Toast */}
            {toast && (
                <div style={{
                    position: 'fixed', top: 20, right: 20, zIndex: 9999, padding: '12px 24px',
                    borderRadius: 8, color: '#fff', fontSize: 14, fontWeight: 500,
                    backgroundColor: toast.type === 'success' ? '#10b981' : '#ef4444',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}>
                    <i className={`bi ${toast.type === 'success' ? 'bi-check-circle' : 'bi-x-circle'} me-2`} />
                    {toast.message}
                </div>
            )}

            <div className="main-content page-users-edit">
                <div className="page-users-edit">
                    <h1>Upload Product</h1>
                    <nav className="breadcrumb">
                        <Link to="/admin/dashboard" className="breadcrumb-item">Home</Link>
                        <Link to="/admin/seller-products" className="breadcrumb-item">Products</Link>
                        <span className="breadcrumb-item active">Upload Product</span>
                    </nav>
                    <div className="ue-shell-head mb-3">
                        <div>
                            <h1 className="page-title mb-1">Product Upload</h1>
                            <p className="ue-shell-subtitle">
                                Fill in the product details to list your product on the marketplace.
                            </p>
                        </div>
                        <div className="page-header-actions">
                            <Link to="/admin/seller-products" className="btn btn-outline-secondary btn-sm">
                                <i className="bi bi-arrow-left me-1" />Back to Products
                            </Link>
                        </div>
                    </div>

                    <div className="row g-3">
                        {/* ═══ LEFT COLUMN ═══ */}
                        <div className="col-xl-8">
                            {/* Basic Information */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-info-circle me-2" />
                                        Basic Information
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <label className="form-label required">Product Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g. Industrial Steel Pipe DN200"
                                                value={form.productName}
                                                onChange={e => handleChange('productName', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">SKU</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g. SP-STL-200"
                                                value={form.sku}
                                                onChange={e => handleChange('sku', e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label required">Category</label>
                                            <select
                                                className="form-select"
                                                value={form.category}
                                                onChange={e => handleChange('category', e.target.value)}
                                                required
                                            >
                                                <option value="">Select category...</option>
                                                <option value="steel-products">Steel Products</option>
                                                <option value="mechanical-parts">Mechanical Parts</option>
                                                <option value="electronics">Electronics</option>
                                                <option value="industrial-equipment">Industrial Equipment</option>
                                                <option value="rubber-products">Rubber Products</option>
                                                <option value="chemicals">Chemicals</option>
                                                <option value="packaging">Packaging Materials</option>
                                                <option value="raw-materials">Raw Materials</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Industry</label>
                                            <select
                                                className="form-select"
                                                value={form.industry}
                                                onChange={e => handleChange('industry', e.target.value)}
                                            >
                                                <option value="">Select industry...</option>
                                                <option value="manufacturing">Manufacturing</option>
                                                <option value="technology">Technology</option>
                                                <option value="logistics">Logistics</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-text-paragraph me-2" />
                                        Description
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label">Short Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Brief product summary (max 200 chars)"
                                                maxLength={200}
                                                value={form.shortDescription}
                                                onChange={e => handleChange('shortDescription', e.target.value)}
                                            />
                                            <div className="form-text">{form.shortDescription.length}/200 characters</div>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Full Description</label>
                                            <textarea
                                                className="form-control"
                                                rows={6}
                                                placeholder="Detailed product description including features, materials, usage guidelines..."
                                                value={form.fullDescription}
                                                onChange={e => handleChange('fullDescription', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Images */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-images me-2" />
                                        Product Images
                                    </h5>
                                </div>
                                <div className="card-body">
                                    {/* Drag & Drop Zone */}
                                    <div
                                        style={{
                                            border: `2px dashed ${dragActive ? '#4f46e5' : 'var(--border-color)'}`,
                                            borderRadius: '12px',
                                            padding: '40px',
                                            textAlign: 'center',
                                            background: dragActive ? 'rgba(79,70,229,0.04)' : 'transparent',
                                            transition: 'all 0.2s ease',
                                            cursor: 'pointer',
                                        }}
                                        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                                        onDragLeave={() => setDragActive(false)}
                                        onDrop={handleImageDrop}
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <i className="bi bi-cloud-arrow-up" style={{ fontSize: '40px', color: '#4f46e5', display: 'block', marginBottom: '12px' }} />
                                        <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--heading-color)', marginBottom: '4px' }}>
                                            Drag & drop images here
                                        </div>
                                        <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                                            or click to browse · JPG, PNG, WEBP · Max 5MB each · Up to 6 images
                                        </div>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            onChange={handleImageSelect}
                                        />
                                    </div>

                                    {/* Image Previews */}
                                    {images.length > 0 && (
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                                            gap: '12px',
                                            marginTop: '16px',
                                        }}>
                                            {images.map((img, idx) => (
                                                <div key={idx} style={{
                                                    position: 'relative',
                                                    borderRadius: '10px',
                                                    overflow: 'hidden',
                                                    border: '1.5px solid var(--border-color)',
                                                    aspectRatio: '1',
                                                }}>
                                                    <img
                                                        src={img.preview}
                                                        alt={`Product ${idx + 1}`}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                        }}
                                                    />
                                                    {idx === 0 && (
                                                        <span style={{
                                                            position: 'absolute',
                                                            top: '6px',
                                                            left: '6px',
                                                            background: '#4f46e5',
                                                            color: '#fff',
                                                            fontSize: '10px',
                                                            fontWeight: 700,
                                                            padding: '2px 6px',
                                                            borderRadius: '4px',
                                                        }}>
                                                            Main
                                                        </span>
                                                    )}
                                                    <button
                                                        onClick={() => removeImage(idx)}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '6px',
                                                            right: '6px',
                                                            width: '24px',
                                                            height: '24px',
                                                            borderRadius: '50%',
                                                            background: 'rgba(239,68,68,0.9)',
                                                            border: 'none',
                                                            color: '#fff',
                                                            fontSize: '12px',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <i className="bi bi-x" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Specifications */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-list-check me-2" />
                                        Specifications
                                    </h5>
                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={addSpecRow}>
                                        <i className="bi bi-plus-lg me-1" />
                                        Add Row
                                    </button>
                                </div>
                                <div className="card-body">
                                    {specs.map((spec, idx) => (
                                        <div key={idx} className="row g-2 mb-2 align-items-center">
                                            <div className="col-md-5">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Attribute (e.g. Material)"
                                                    value={spec.key}
                                                    onChange={e => updateSpec(idx, 'key', e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-5">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Value (e.g. Stainless Steel 304)"
                                                    value={spec.value}
                                                    onChange={e => updateSpec(idx, 'value', e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-2">
                                                {specs.length > 1 && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger btn-sm w-100"
                                                        onClick={() => removeSpecRow(idx)}
                                                    >
                                                        <i className="bi bi-trash" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="form-text mt-2">
                                        <i className="bi bi-info-circle me-1" />
                                        Add key-value pairs for technical specifications.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ═══ RIGHT COLUMN ═══ */}
                        <div className="col-xl-4">
                            {/* Pricing & Inventory */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-currency-exchange me-2" />
                                        Pricing & Inventory
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label required">Price (VNĐ)</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="0"
                                                value={form.price}
                                                onChange={e => handleChange('price', e.target.value)}
                                                required
                                            />
                                            <span className="input-group-text">VNĐ</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Compare-at Price</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Original price (optional)"
                                                value={form.compareAtPrice}
                                                onChange={e => handleChange('compareAtPrice', e.target.value)}
                                            />
                                            <span className="input-group-text">VNĐ</span>
                                        </div>
                                        <div className="form-text">Displayed as a strikethrough price.</div>
                                    </div>
                                    <hr />
                                    <div className="mb-3">
                                        <label className="form-label required">Stock Quantity</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="0"
                                            min={0}
                                            value={form.stockQuantity}
                                            onChange={e => handleChange('stockQuantity', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Min. Order Quantity</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="1"
                                            min={1}
                                            value={form.minOrderQty}
                                            onChange={e => handleChange('minOrderQty', e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-0">
                                        <label className="form-label">Unit</label>
                                        <select
                                            className="form-select"
                                            value={form.unit}
                                            onChange={e => handleChange('unit', e.target.value)}
                                        >
                                            <option value="piece">Piece</option>
                                            <option value="set">Set</option>
                                            <option value="kg">Kilogram (kg)</option>
                                            <option value="ton">Ton</option>
                                            <option value="meter">Meter</option>
                                            <option value="roll">Roll</option>
                                            <option value="box">Box</option>
                                            <option value="pallet">Pallet</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Shipping */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-truck me-2" />
                                        Shipping
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label">Weight (kg)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="0.00"
                                            value={form.weight}
                                            onChange={e => handleChange('weight', e.target.value)}
                                        />
                                    </div>
                                    <label className="form-label">Dimensions (cm)</label>
                                    <div className="row g-2 mb-3">
                                        <div className="col-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="L"
                                                value={form.length}
                                                onChange={e => handleChange('length', e.target.value)}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="W"
                                                value={form.width}
                                                onChange={e => handleChange('width', e.target.value)}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="H"
                                                value={form.height}
                                                onChange={e => handleChange('height', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-0">
                                        <label className="form-label">Shipping Class</label>
                                        <select
                                            className="form-select"
                                            value={form.shippingClass}
                                            onChange={e => handleChange('shippingClass', e.target.value)}
                                        >
                                            <option value="standard">Standard Shipping</option>
                                            <option value="express">Express Shipping</option>
                                            <option value="heavy">Heavy Freight</option>
                                            <option value="special">Special Handling</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-send me-2" />
                                        Publish
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="d-grid gap-2">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            disabled={saving}
                                            onClick={() => handleSubmit('Pending')}
                                        >
                                            <i className="bi bi-send-check me-1" />
                                            {saving ? 'Submitting...' : 'Submit for Approval'}
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            disabled={saving}
                                            onClick={() => handleSubmit('Draft')}
                                        >
                                            <i className="bi bi-file-earmark me-1" />
                                            {saving ? 'Saving...' : 'Save as Draft'}
                                        </button>
                                        <Link to="/admin/seller-products" className="btn btn-light">
                                            Cancel
                                        </Link>
                                    </div>
                                    <div className="form-text mt-2">
                                        <i className="bi bi-info-circle me-1" />
                                        Products submitted for approval will be reviewed by the Company Admin before going live.
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

export default SellerStaffProductUpload;
