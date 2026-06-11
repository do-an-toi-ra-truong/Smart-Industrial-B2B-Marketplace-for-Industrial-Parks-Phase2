import { Link, useParams } from 'react-router-dom';

// Mock product data (in real app this would come from API)
const mockProductData: Record<string, {
    id: string;
    name: string;
    sku: string;
    category: string;
    industry: string;
    price: string;
    compareAtPrice: string;
    stock: number;
    minOrderQty: number;
    unit: string;
    status: string;
    shortDescription: string;
    fullDescription: string;
    weight: string;
    dimensions: string;
    shippingClass: string;
    specs: { key: string; value: string }[];
    createdAt: string;
    updatedAt: string;
    createdBy: string;
}> = {
    'PRD-001': {
        id: 'PRD-001',
        name: 'Industrial Steel Pipe DN200',
        sku: 'SP-STL-200',
        category: 'Steel Products',
        industry: 'Manufacturing',
        price: '4.500.000 VNĐ',
        compareAtPrice: '5.200.000 VNĐ',
        stock: 250,
        minOrderQty: 5,
        unit: 'Piece',
        status: 'Active',
        shortDescription: 'High-grade industrial steel pipe suitable for heavy-duty applications in manufacturing plants.',
        fullDescription: 'Our Industrial Steel Pipe DN200 is manufactured from premium-quality carbon steel, meeting ASTM A106 Grade B standards. Designed for high-temperature and high-pressure service, this pipe is ideal for power plants, refineries, and heavy industrial applications.\n\nFeatures:\n- Seamless construction for maximum strength\n- Heat-resistant up to 400°C\n- Anti-corrosion coating\n- Available in various lengths (3m, 6m, 12m)\n- Certified by ISO 9001:2015',
        weight: '45.5 kg',
        dimensions: '200 × 200 × 600 cm',
        shippingClass: 'Heavy Freight',
        specs: [
            { key: 'Material', value: 'Carbon Steel ASTM A106 Grade B' },
            { key: 'Outer Diameter', value: '219.1 mm' },
            { key: 'Wall Thickness', value: '8.18 mm' },
            { key: 'Standard', value: 'ASTM A106 / ASME SA106' },
            { key: 'Surface Treatment', value: 'Black Painted / Varnished' },
            { key: 'End Type', value: 'Plain / Beveled' },
            { key: 'Operating Temperature', value: 'Up to 400°C' },
            { key: 'Certification', value: 'ISO 9001:2015, EN 10204 3.1' },
        ],
        createdAt: 'Jan 15, 2026 · 09:30 AM',
        updatedAt: 'Mar 05, 2026 · 02:15 PM',
        createdBy: 'Nguyễn Văn Toản',
    },
};

const SellerStaffProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = mockProductData[id || 'PRD-001'] || mockProductData['PRD-001'];

    const statusBadgeClass: Record<string, string> = {
        Active: 'badge-soft-success',
        Pending: 'badge-soft-warning',
        Draft: 'badge-soft-secondary',
        'Out of Stock': 'badge-soft-danger',
    };

    return (
        <>
            <div className="main-content page-users-edit">
                <div className="page-users-edit">
                    <h1>Product Detail</h1>
                    <nav className="breadcrumb">
                        <Link to="/admin/dashboard" className="breadcrumb-item">Home</Link>
                        <Link to="/admin/seller-products" className="breadcrumb-item">Products</Link>
                        <span className="breadcrumb-item active">{product.name}</span>
                    </nav>
                    <div className="ue-shell-head mb-3">
                        <div>
                            <h1 className="page-title mb-1">{product.name}</h1>
                            <p className="ue-shell-subtitle">
                                <span className={`badge ${statusBadgeClass[product.status]} me-2`}>{product.status}</span>
                                SKU: <code>{product.sku}</code> · ID: <code>{product.id}</code>
                            </p>
                        </div>
                        <div className="page-header-actions">
                            <Link to="/admin/seller-products" className="btn btn-outline-secondary btn-sm">
                                <i className="bi bi-arrow-left me-1" />Back
                            </Link>
                            <Link to={`/admin/seller-product-upload?edit=${product.id}`} className="btn btn-primary btn-sm">
                                <i className="bi bi-pencil me-1" />Edit Product
                            </Link>
                        </div>
                    </div>

                    <div className="row g-3">
                        {/* ═══ LEFT COLUMN ═══ */}
                        <div className="col-xl-8">
                            {/* Product Images */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-images me-2" />
                                        Product Images
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                                        gap: '12px',
                                    }}>
                                        {[1, 2, 3].map((_, idx) => (
                                            <div key={idx} style={{
                                                borderRadius: '10px',
                                                overflow: 'hidden',
                                                border: '1.5px solid var(--border-color)',
                                                aspectRatio: '1',
                                                background: 'rgba(79,70,229,0.04)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'relative',
                                            }}>
                                                <i className="bi bi-box-seam" style={{ fontSize: '48px', color: 'rgba(79,70,229,0.3)' }} />
                                                {idx === 0 && (
                                                    <span style={{
                                                        position: 'absolute',
                                                        top: '8px',
                                                        left: '8px',
                                                        background: '#4f46e5',
                                                        color: '#fff',
                                                        fontSize: '10px',
                                                        fontWeight: 700,
                                                        padding: '2px 8px',
                                                        borderRadius: '4px',
                                                    }}>
                                                        Main
                                                    </span>
                                                )}
                                            </div>
                                        ))}
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
                                    <div className="mb-3">
                                        <label className="form-label fw-bold" style={{ color: 'var(--heading-color)' }}>Short Description</label>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7' }}>
                                            {product.shortDescription}
                                        </p>
                                    </div>
                                    <hr />
                                    <div>
                                        <label className="form-label fw-bold" style={{ color: 'var(--heading-color)' }}>Full Description</label>
                                        <div style={{ color: 'var(--text-color)', fontSize: '14px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                                            {product.fullDescription}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Specifications */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-list-check me-2" />
                                        Specifications
                                    </h5>
                                </div>
                                <div className="card-body p-0">
                                    <table className="table mb-0">
                                        <tbody>
                                            {product.specs.map((spec, idx) => (
                                                <tr key={idx}>
                                                    <td style={{ width: '40%', fontWeight: 600, color: 'var(--heading-color)', background: 'rgba(0,0,0,0.02)' }}>
                                                        {spec.key}
                                                    </td>
                                                    <td>
                                                        {spec.value}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
                                    <div className="device-list">
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Price</div>
                                            </div>
                                            <div className="device-stats">
                                                <strong style={{ color: '#059669', fontSize: '16px' }}>{product.price}</strong>
                                            </div>
                                        </div>
                                        {product.compareAtPrice && (
                                            <div className="device-item">
                                                <div className="device-info">
                                                    <div className="device-name">Compare-at Price</div>
                                                </div>
                                                <div className="device-stats">
                                                    <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>{product.compareAtPrice}</span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Stock Quantity</div>
                                            </div>
                                            <div className="device-stats">
                                                <span className={`fw-bold ${product.stock === 0 ? 'text-danger' : product.stock < 10 ? 'text-warning' : 'text-success'}`}>
                                                    {product.stock}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Min. Order Qty</div>
                                            </div>
                                            <div className="device-stats">
                                                <span>{product.minOrderQty}</span>
                                            </div>
                                        </div>
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Unit</div>
                                            </div>
                                            <div className="device-stats">
                                                <span>{product.unit}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Shipping */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-truck me-2" />
                                        Shipping Details
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="device-list">
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Weight</div>
                                            </div>
                                            <div className="device-stats">
                                                <span>{product.weight}</span>
                                            </div>
                                        </div>
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Dimensions</div>
                                            </div>
                                            <div className="device-stats">
                                                <span>{product.dimensions}</span>
                                            </div>
                                        </div>
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Shipping Class</div>
                                            </div>
                                            <div className="device-stats">
                                                <span className="badge badge-soft-info">{product.shippingClass}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Category & Industry */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-tag me-2" />
                                        Classification
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="device-list">
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Category</div>
                                            </div>
                                            <div className="device-stats">
                                                <span className="badge badge-soft-primary">{product.category}</span>
                                            </div>
                                        </div>
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Industry</div>
                                            </div>
                                            <div className="device-stats">
                                                <span className="badge badge-soft-success">{product.industry}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Activity */}
                            <div className="card ue-shell-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="bi bi-clock-history me-2" />
                                        Activity
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="device-list">
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Created</div>
                                                <span className="device-count" style={{ fontSize: '12px' }}>{product.createdAt}</span>
                                            </div>
                                        </div>
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Last Updated</div>
                                                <span className="device-count" style={{ fontSize: '12px' }}>{product.updatedAt}</span>
                                            </div>
                                        </div>
                                        <div className="device-item">
                                            <div className="device-info">
                                                <div className="device-name">Created By</div>
                                                <span className="device-count" style={{ fontSize: '12px' }}>{product.createdBy}</span>
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

export default SellerStaffProductDetail;
