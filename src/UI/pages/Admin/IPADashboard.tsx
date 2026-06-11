import { Link } from 'react-router-dom';

const IPADashboard = () => {
    return (
        <div className="main-content">
            {/* Page Header */}
            <div className="page-header" style={{ marginBottom: '18px' }}>
                <div>
                    <h1 className="page-title">
                        Industrial Park Management
                    </h1>
                    <div className="page-breadcrumb">
                        <Link to="/admin/ip-dashboard">
                            Dashboard
                        </Link>
                        <i className="bi bi-chevron-right" />
                        <span>
                            Overview
                        </span>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button className="btn-ia-outline" id="btn-export">
                        <i className="bi bi-download" />
                        Export Report
                    </button>
                    <button className="btn-ia-primary" id="btn-add-company">
                        <i className="bi bi-building-add" />
                        Add Company
                    </button>
                </div>
            </div>

            {/* Park Info Banner */}
            <div className="park-banner" style={{ padding: '12px 18px', marginBottom: '16px' }}>
                <div className="park-banner-icon" style={{ width: '44px', height: '44px', borderRadius: '12px', fontSize: '20px' }}>
                    <i className="bi bi-building-fill" />
                </div>
                <div className="park-banner-info">
                    <div className="park-banner-name" style={{ fontSize: '15px' }}>
                        VSIP Binh Duong Industrial Park
                    </div>
                    <div className="park-banner-detail">
                        Vietnam Singapore Industrial Park · Binh Duong Province · Area: 499 ha
                    </div>
                </div>
                <div className="park-banner-stats">
                    <div className="park-banner-stat">
                        <div className="park-banner-stat-val" style={{ fontSize: '18px' }}>
                            68
                        </div>
                        <div className="park-banner-stat-label">
                            Companies
                        </div>
                    </div>
                    <div className="park-banner-stat">
                        <div className="park-banner-stat-val" style={{ fontSize: '18px' }}>
                            96%
                        </div>
                        <div className="park-banner-stat-label">
                            Occupancy
                        </div>
                    </div>
                    <div className="park-banner-stat">
                        <div className="park-banner-stat-val" style={{ fontSize: '18px' }}>
                            ₫28.4B
                        </div>
                        <div className="park-banner-stat-label">
                            Monthly Txn
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="stat-grid" style={{ marginBottom: '16px' }}>
                <Link to="/admin/ip-companies" style={{ textDecoration: 'none' }}>
                    <div className="stat-card teal" style={{ padding: '14px 18px' }}>
                        <div className="stat-icon teal" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
                            <i className="bi bi-building-fill" />
                        </div>
                        <div>
                            <div className="stat-value" style={{ fontSize: '22px' }}>
                                68
                            </div>
                            <div className="stat-label">
                                Total Companies
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/admin/ip-companies" style={{ textDecoration: 'none' }}>
                    <div className="stat-card success" style={{ padding: '14px 18px' }}>
                        <div className="stat-icon success" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
                            <i className="bi bi-check-circle-fill" />
                        </div>
                        <div>
                            <div className="stat-value" style={{ fontSize: '22px' }}>
                                54
                            </div>
                            <div className="stat-label">
                                Verified &amp; Active
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/admin/ip-verification" style={{ textDecoration: 'none' }}>
                    <div className="stat-card warning" style={{ padding: '14px 18px' }}>
                        <div className="stat-icon warning" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
                            <i className="bi bi-hourglass-split" />
                        </div>
                        <div>
                            <div className="stat-value" style={{ fontSize: '22px' }}>
                                4
                            </div>
                            <div className="stat-label">
                                Pending Verification
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/admin/ip-accounts" style={{ textDecoration: 'none' }}>
                    <div className="stat-card info" style={{ padding: '14px 18px' }}>
                        <div className="stat-icon info" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
                            <i className="bi bi-person-fill-gear" />
                        </div>
                        <div>
                            <div className="stat-value" style={{ fontSize: '22px' }}>
                                12
                            </div>
                            <div className="stat-label">
                                Company Admins
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/admin/ip-verification" style={{ textDecoration: 'none' }}>
                    <div className="stat-card danger" style={{ padding: '14px 18px' }}>
                        <div className="stat-icon danger" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
                            <i className="bi bi-shield-exclamation" />
                        </div>
                        <div>
                            <div className="stat-value" style={{ fontSize: '22px' }}>
                                2
                            </div>
                            <div className="stat-label">
                                License Expired
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Quick Access — Table Format */}
            <div className="table-card" style={{ marginBottom: '16px' }}>
                <div className="table-card-header" style={{ padding: '14px 18px' }}>
                    <h3 className="table-card-title">
                        <i className="bi bi-grid-fill" />
                        Quick Access
                    </h3>
                </div>
                <table className="ia-table">
                    <thead>
                        <tr>
                            <th>Module</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th style={{ width: '100px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg, #0d9488, #06b6d4)', width: '34px', height: '34px', borderRadius: '10px', fontSize: '14px' }}>
                                        <i className="bi bi-building-fill-gear" />
                                    </div>
                                    <div className="user-name-sm">Company Management</div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>Manage companies, approve registrations, and control permissions</span></td>
                            <td><span className="badge-status pending">4 pending</span></td>
                            <td>
                                <Link to="/admin/ip-companies" className="btn-ia-primary" style={{ fontSize: '12px', padding: '5px 12px' }}>
                                    <i className="bi bi-arrow-right" /> Open
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg, #f59e0b, #fbbf24)', width: '34px', height: '34px', borderRadius: '10px', fontSize: '14px' }}>
                                        <i className="bi bi-file-earmark-check-fill" />
                                    </div>
                                    <div className="user-name-sm">Business Verification</div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>Verify Tax IDs, business licenses, and environmental certificates</span></td>
                            <td><span className="badge-status pending">5 documents</span></td>
                            <td>
                                <Link to="/admin/ip-verification" className="btn-ia-primary" style={{ fontSize: '12px', padding: '5px 12px' }}>
                                    <i className="bi bi-arrow-right" /> Open
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', width: '34px', height: '34px', borderRadius: '10px', fontSize: '14px' }}>
                                        <i className="bi bi-person-fill-gear" />
                                    </div>
                                    <div className="user-name-sm">Account Manager</div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>Manage company admin accounts, permissions, and access control</span></td>
                            <td><span className="badge-status active">12 admins</span></td>
                            <td>
                                <Link to="/admin/ip-accounts" className="btn-ia-primary" style={{ fontSize: '12px', padding: '5px 12px' }}>
                                    <i className="bi bi-arrow-right" /> Open
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Recent Activity — Table Format */}
            <div className="row g-3">
                <div className="col-lg-8">
                    <div className="table-card">
                        <div className="table-card-header" style={{ padding: '14px 18px' }}>
                            <h3 className="table-card-title">
                                <i className="bi bi-clock-history" />
                                Recent Activity
                            </h3>
                        </div>
                        <table className="ia-table">
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Details</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="user-cell">
                                            <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '13px', flexShrink: 0 }}>
                                                <i className="bi bi-check-circle-fill" />
                                            </div>
                                            <div className="user-name-sm" style={{ fontSize: '13px' }}>Company Approved</div>
                                        </div>
                                    </td>
                                    <td><span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>Green Horizon Logistics — All documents verified, company activated</span></td>
                                    <td><span style={{ fontSize: '12px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>2h ago</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="user-cell">
                                            <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(245,158,11,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', fontSize: '13px', flexShrink: 0 }}>
                                                <i className="bi bi-file-earmark-check" />
                                            </div>
                                            <div className="user-name-sm" style={{ fontSize: '13px' }}>Document Submitted</div>
                                        </div>
                                    </td>
                                    <td><span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>ABC Manufacturing Corp — Env. Certificate under review</span></td>
                                    <td><span style={{ fontSize: '12px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>4h ago</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="user-cell">
                                            <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(239,68,68,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', fontSize: '13px', flexShrink: 0 }}>
                                                <i className="bi bi-shield-exclamation" />
                                            </div>
                                            <div className="user-name-sm" style={{ fontSize: '13px' }}>License Expired</div>
                                        </div>
                                    </td>
                                    <td><span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>Hung Thinh Metals — Company suspended, renewal requested</span></td>
                                    <td><span style={{ fontSize: '12px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>1d ago</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="user-cell">
                                            <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(59,130,246,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontSize: '13px', flexShrink: 0 }}>
                                                <i className="bi bi-person-fill-add" />
                                            </div>
                                            <div className="user-name-sm" style={{ fontSize: '13px' }}>Admin Request</div>
                                        </div>
                                    </td>
                                    <td><span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>Le Thanh Hai (ABC Manufacturing) — Pending approval</span></td>
                                    <td><span style={{ fontSize: '12px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>1d ago</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="health-card">
                        <div className="health-title">
                            <i className="bi bi-heart-pulse-fill" style={{ color: 'var(--ia-primary)' }} />
                            Economic Health Index
                        </div>
                        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                            <div style={{ fontFamily: 'Poppins', fontSize: '42px', fontWeight: '700', color: 'var(--ia-primary)', lineHeight: '1' }}>
                                92
                            </div>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' as const, letterSpacing: '0.3px' }}>
                                out of 100
                            </div>
                            <div style={{ fontSize: '12px', color: '#10b981', fontWeight: '700', marginTop: '4px' }}>
                                <i className="bi bi-arrow-up" />
                                +3.2 from last month
                            </div>
                        </div>
                        <div className="health-item">
                            <div className="health-item-header">
                                <span className="health-item-name">Revenue Growth</span>
                                <span className="health-item-val">94/100</span>
                            </div>
                            <div className="health-bar">
                                <div className="health-fill" style={{ width: '94%', background: 'linear-gradient(90deg,#0d9488,#06b6d4)' }} />
                            </div>
                        </div>
                        <div className="health-item">
                            <div className="health-item-header">
                                <span className="health-item-name">Trade Volume</span>
                                <span className="health-item-val">89/100</span>
                            </div>
                            <div className="health-bar">
                                <div className="health-fill" style={{ width: '89%', background: 'linear-gradient(90deg,#3b82f6,#60a5fa)' }} />
                            </div>
                        </div>
                        <div className="health-item">
                            <div className="health-item-header">
                                <span className="health-item-name">Occupancy</span>
                                <span className="health-item-val">96/100</span>
                            </div>
                            <div className="health-bar">
                                <div className="health-fill" style={{ width: '96%', background: 'linear-gradient(90deg,#f59e0b,#fbbf24)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IPADashboard;
