import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
    id: string;
    name: string;
    image: string;
    category: string;
    industry: string;
    price: string;
    priceSort: number;
    stock: number;
    status: 'Active' | 'Pending' | 'Draft' | 'Out of Stock';
    sku: string;
    createdAt: string;
}

const mockProducts: Product[] = [
    {
        id: 'PRD-001',
        name: 'Industrial Steel Pipe DN200',
        image: '/Admin/assets/images/product-placeholder.webp',
        category: 'Steel Products',
        industry: 'Manufacturing',
        price: '4.500.000 VNĐ',
        priceSort: 4500000,
        stock: 250,
        status: 'Active',
        sku: 'SP-STL-200',
        createdAt: '2026-01-15',
    },
    {
        id: 'PRD-002',
        name: 'Precision CNC Bearing Assembly',
        image: '/Admin/assets/images/product-placeholder.webp',
        category: 'Mechanical Parts',
        industry: 'Manufacturing',
        price: '12.800.000 VNĐ',
        priceSort: 12800000,
        stock: 45,
        status: 'Active',
        sku: 'MP-BRG-001',
        createdAt: '2026-01-20',
    },
    {
        id: 'PRD-003',
        name: 'Electronic Control Panel 380V',
        image: '/Admin/assets/images/product-placeholder.webp',
        category: 'Electronics',
        industry: 'Technology',
        price: '35.000.000 VNĐ',
        priceSort: 35000000,
        stock: 12,
        status: 'Pending',
        sku: 'EL-CP-380',
        createdAt: '2026-02-03',
    },
    {
        id: 'PRD-004',
        name: 'Heavy-Duty Conveyor Belt 5m',
        image: '/Admin/assets/images/product-placeholder.webp',
        category: 'Industrial Equipment',
        industry: 'Logistics',
        price: '28.000.000 VNĐ',
        priceSort: 28000000,
        stock: 8,
        status: 'Active',
        sku: 'IE-CB-005',
        createdAt: '2026-02-10',
    },
    {
        id: 'PRD-005',
        name: 'Chemical Resistant Rubber Gasket Set',
        image: '/Admin/assets/images/product-placeholder.webp',
        category: 'Rubber Products',
        industry: 'Manufacturing',
        price: '850.000 VNĐ',
        priceSort: 850000,
        stock: 0,
        status: 'Out of Stock',
        sku: 'RP-GS-100',
        createdAt: '2026-02-18',
    },
    {
        id: 'PRD-006',
        name: 'Stainless Steel Valve DN150',
        image: '/Admin/assets/images/product-placeholder.webp',
        category: 'Steel Products',
        industry: 'Manufacturing',
        price: '6.200.000 VNĐ',
        priceSort: 6200000,
        stock: 120,
        status: 'Active',
        sku: 'SP-VLV-150',
        createdAt: '2026-03-01',
    },
    {
        id: 'PRD-007',
        name: 'IoT Sensor Module Temperature',
        image: '/Admin/assets/images/product-placeholder.webp',
        category: 'Electronics',
        industry: 'Technology',
        price: '2.400.000 VNĐ',
        priceSort: 2400000,
        stock: 300,
        status: 'Draft',
        sku: 'EL-IOT-TMP',
        createdAt: '2026-03-10',
    },
    {
        id: 'PRD-008',
        name: 'Hydraulic Press Machine 50T',
        image: '/Admin/assets/images/product-placeholder.webp',
        category: 'Industrial Equipment',
        industry: 'Manufacturing',
        price: '180.000.000 VNĐ',
        priceSort: 180000000,
        stock: 3,
        status: 'Active',
        sku: 'IE-HP-050',
        createdAt: '2026-03-22',
    },
];

const statusBadgeClass: Record<string, string> = {
    Active: 'badge-soft-success',
    Pending: 'badge-soft-warning',
    Draft: 'badge-soft-secondary',
    'Out of Stock': 'badge-soft-danger',
};

const SellerStaffProducts = () => {
    const [activeTab, setActiveTab] = useState<string>('All');
    const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);

    const tabs = [
        { key: 'All', count: mockProducts.length },
        { key: 'Active', count: mockProducts.filter(p => p.status === 'Active').length },
        { key: 'Pending', count: mockProducts.filter(p => p.status === 'Pending').length },
        { key: 'Draft', count: mockProducts.filter(p => p.status === 'Draft').length },
        { key: 'Out of Stock', count: mockProducts.filter(p => p.status === 'Out of Stock').length },
    ];

    const filteredProducts = activeTab === 'All'
        ? mockProducts
        : mockProducts.filter(p => p.status === activeTab);

    const totalProducts = mockProducts.length;
    const activeProducts = mockProducts.filter(p => p.status === 'Active').length;
    const pendingProducts = mockProducts.filter(p => p.status === 'Pending').length;
    const outOfStockProducts = mockProducts.filter(p => p.status === 'Out of Stock').length;

    return (
        <>
            <div className="main-content page-tables-datatables">
                {/* Page Header */}
                <h1 className="page-title">
                    Seller Staff - Product Management
                </h1>
                <div className="page-header">
                    <nav className="breadcrumb">
                        <Link to="/admin/dashboard" className="breadcrumb-item">
                            Home
                        </Link>
                        <span className="breadcrumb-item active">
                            Products
                        </span>
                    </nav>
                </div>

                {/* KPI Cards */}
                <div className="row g-3 mb-3">
                    <div className="col-xl-3 col-md-6">
                        <article className="nd-kpi-card nd-kpi-revenue">
                            <span className="nd-kpi-icon">
                                <i className="bi bi-box-seam" />
                            </span>
                            <span className="nd-kpi-label">
                                Total Products
                            </span>
                            <strong className="nd-kpi-value">
                                {totalProducts}
                            </strong>
                            <span className="nd-kpi-trend up">
                                All listed products
                            </span>
                        </article>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <article className="nd-kpi-card nd-kpi-leads">
                            <span className="nd-kpi-icon">
                                <i className="bi bi-check-circle" />
                            </span>
                            <span className="nd-kpi-label">
                                Active
                            </span>
                            <strong className="nd-kpi-value">
                                {activeProducts}
                            </strong>
                            <span className="nd-kpi-trend up">
                                Published and visible
                            </span>
                        </article>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <article className="nd-kpi-card nd-kpi-retention">
                            <span className="nd-kpi-icon">
                                <i className="bi bi-hourglass-split" />
                            </span>
                            <span className="nd-kpi-label">
                                Pending Approval
                            </span>
                            <strong className="nd-kpi-value">
                                {pendingProducts}
                            </strong>
                            <span className="nd-kpi-trend up">
                                Waiting for review
                            </span>
                        </article>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <article className="nd-kpi-card nd-kpi-cycle">
                            <span className="nd-kpi-icon">
                                <i className="bi bi-exclamation-triangle" />
                            </span>
                            <span className="nd-kpi-label">
                                Out of Stock
                            </span>
                            <strong className="nd-kpi-value">
                                {outOfStockProducts}
                            </strong>
                            <span className="nd-kpi-trend down">
                                Needs restocking
                            </span>
                        </article>
                    </div>
                </div>

                {/* Product DataTable */}
                <section className="section">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="card-title">
                                            Product Catalog
                                        </h5>
                                        <p className="card-subtitle">
                                            Manage your company's product listings
                                        </p>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-outline-secondary btn-sm">
                                            <i className="bi bi-download me-1" />
                                            Export
                                        </button>
                                        <Link to="/admin/seller-product-upload" className="btn btn-primary btn-sm">
                                            <i className="bi bi-plus-lg me-1" />
                                            Add Product
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    {/* Filter Tabs */}
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        {tabs.map(tab => (
                                            <button
                                                key={tab.key}
                                                className={`btn btn-sm ${activeTab === tab.key ? 'btn-primary' : 'btn-outline-secondary'}`}
                                                onClick={() => setActiveTab(tab.key)}
                                            >
                                                {tab.key}
                                                <span className={`ms-1 badge ${activeTab === tab.key ? 'bg-white text-primary' : 'bg-secondary'}`}>
                                                    {tab.count}
                                                </span>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Table */}
                                    <table id="productDataTable" className="table">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '50px' }}>
                                                    #
                                                </th>
                                                <th>
                                                    Product
                                                </th>
                                                <th>
                                                    SKU
                                                </th>
                                                <th>
                                                    Category
                                                </th>
                                                <th>
                                                    Price
                                                </th>
                                                <th>
                                                    Stock
                                                </th>
                                                <th>
                                                    Status
                                                </th>
                                                <th data-sortable="false">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredProducts.map((product, index) => (
                                                <tr key={product.id}>
                                                    <td>
                                                        {index + 1}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div style={{
                                                                width: '40px',
                                                                height: '40px',
                                                                borderRadius: '8px',
                                                                background: 'rgba(79,70,229,0.08)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                flexShrink: 0,
                                                                color: '#4f46e5',
                                                                fontSize: '16px'
                                                            }}>
                                                                <i className="bi bi-box-seam" />
                                                            </div>
                                                            <div>
                                                                <div className="fw-medium">{product.name}</div>
                                                                <small className="text-muted">{product.id}</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <code style={{ fontSize: '12px' }}>{product.sku}</code>
                                                    </td>
                                                    <td>
                                                        {product.category}
                                                    </td>
                                                    <td data-sort={product.priceSort}>
                                                        {product.price}
                                                    </td>
                                                    <td>
                                                        <span className={product.stock === 0 ? 'text-danger fw-bold' : product.stock < 10 ? 'text-warning fw-bold' : ''}>
                                                            {product.stock}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className={`badge ${statusBadgeClass[product.status]}`}>
                                                            {product.status}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="table-actions">
                                                            <Link to={`/admin/seller-product-detail/${product.id}`}>
                                                                <button className="btn btn-icon btn-sm btn-light" title="View">
                                                                    <i className="bi bi-eye" />
                                                                </button>
                                                            </Link>
                                                            <Link to={`/admin/seller-product-upload?edit=${product.id}`}>
                                                                <button className="btn btn-icon btn-sm btn-light" title="Edit">
                                                                    <i className="bi bi-pencil" />
                                                                </button>
                                                            </Link>
                                                            <button
                                                                className="btn btn-icon btn-sm btn-light"
                                                                title="Delete"
                                                                onClick={() => setDeleteTarget(product)}
                                                            >
                                                                <i className="bi bi-trash text-danger" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            {filteredProducts.length === 0 && (
                                                <tr>
                                                    <td colSpan={8} style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
                                                        <i className="bi bi-inbox" style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }} />
                                                        No products found in this category.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Delete Confirmation Modal */}
            {deleteTarget && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9000,
                        backdropFilter: 'blur(4px)',
                    }}
                    onClick={() => setDeleteTarget(null)}
                >
                    <div
                        style={{
                            background: 'var(--card-bg, #fff)',
                            borderRadius: '16px',
                            padding: '28px',
                            width: '420px',
                            maxWidth: '90vw',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
                            textAlign: 'center',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: 'rgba(239,68,68,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 16px',
                        }}>
                            <i className="bi bi-exclamation-triangle-fill" style={{ fontSize: '24px', color: '#dc2626' }} />
                        </div>
                        <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 700, color: 'var(--heading-color)' }}>
                            Delete Product
                        </h3>
                        <p style={{ margin: '0 0 4px', fontSize: '14px', color: 'var(--text-muted)' }}>
                            Are you sure you want to delete <strong style={{ color: 'var(--heading-color)' }}>{deleteTarget.name}</strong>?
                        </p>
                        <p style={{ margin: '0 0 24px', fontSize: '13px', color: '#dc2626' }}>
                            This action cannot be undone.
                        </p>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                            <button
                                onClick={() => setDeleteTarget(null)}
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '10px',
                                    border: '1.5px solid var(--border-color)',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: 'var(--text-color)',
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setDeleteTarget(null)}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '10px',
                                    border: 'none',
                                    background: '#dc2626',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                }}
                            >
                                <i className="bi bi-trash" />
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SellerStaffProducts;
