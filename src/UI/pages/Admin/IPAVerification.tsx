import { Link } from 'react-router-dom';

const IPAVerification = () => {
    return (
        <div className="main-content">
            {/* Page Header */}
            <div className="page-header">
                <div>
                    <h1 className="page-title">
                        Business Verification
                    </h1>
                    <div className="page-breadcrumb">
                        <Link to="/admin/ip-dashboard">
                            Dashboard
                        </Link>
                        <i className="bi bi-chevron-right" />
                        <span>
                            Business Verification Queue & Summary
                        </span>
                    </div>
                </div>
                <div style={{ 'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap', 'alignItems': 'center' }}>
                    <button className="btn-ia-outline" id="btn-export">
                        <i className="bi bi-download" />
                        Export Report
                    </button>
                </div>
            </div>

            <div className="row g-3">
                <div className="col-lg-8">
                    <div className="section-card" id="business-verify">
                        <div className="section-card-header">
                            <h2 className="section-title">
                                <i className="bi bi-file-earmark-check-fill" />
                                Business Records Verification Queue
                            </h2>
                            <div className="chart-range">
                                <button className="range-btn active">
                                    All
                                </button>
                                <button className="range-btn">
                                    Tax ID
                                </button>
                                <button className="range-btn">
                                    License
                                </button>
                                <button className="range-btn">
                                    Certificate
                                </button>
                            </div>
                        </div>
                        <div className="section-body" style={{ 'padding': '0' }}>
                            <table className="ia-table">
                                <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th>Document Type</th>
                                        <th>Document ID</th>
                                        <th>Submitted</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>ABC Manufacturing Corp</strong>
                                        </td>
                                        <td>
                                            <span className="doc-tag pending" style={{ 'padding': '4px 10px', 'fontSize': '11px' }}>
                                                <i className="bi bi-file-text-fill" />
                                                Env. Certificate
                                            </span>
                                        </td>
                                        <td>
                                            <span style={{ 'fontFamily': 'JetBrains Mono', 'fontSize': '12px' }}>
                                                ENV-2026-4582
                                            </span>
                                        </td>
                                        <td style={{ 'fontSize': '12px' }}>
                                            Apr 14, 2026
                                        </td>
                                        <td>
                                            <span className="badge-status pending">
                                                Under Review
                                            </span>
                                        </td>
                                        <td>
                                            <div className="row-actions">
                                                <button className="row-action-btn approve" title="Approve doc" onClick={() => {}}>
                                                    <i className="bi bi-check-lg" />
                                                </button>
                                                <button className="row-action-btn reject" title="Reject doc" onClick={() => {}}>
                                                    <i className="bi bi-x-lg" />
                                                </button>
                                                <button className="row-action-btn view" title="View doc">
                                                    <i className="bi bi-eye" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Delta Tech Solutions</strong>
                                        </td>
                                        <td>
                                            <span className="doc-tag missing" style={{ 'padding': '4px 10px', 'fontSize': '11px' }}>
                                                <i className="bi bi-file-earmark-x" />
                                                Business License
                                            </span>
                                        </td>
                                        <td>
                                            <span style={{ 'fontSize': '12px', 'color': 'var(--text-muted)' }}>
                                                Not submitted
                                            </span>
                                        </td>
                                        <td style={{ 'fontSize': '12px', 'color': 'var(--text-muted)' }}>
                                            —
                                        </td>
                                        <td>
                                            <span className="badge-status rejected">
                                                Missing
                                            </span>
                                        </td>
                                        <td>
                                            <div className="row-actions">
                                                <button className="row-action-btn" title="Request upload" onClick={() => {}}>
                                                    <i className="bi bi-envelope-arrow-up" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Pacific Star Chemicals</strong>
                                        </td>
                                        <td>
                                            <span className="doc-tag pending" style={{ 'padding': '4px 10px', 'fontSize': '11px' }}>
                                                <i className="bi bi-file-text-fill" />
                                                Tax ID Certificate
                                            </span>
                                        </td>
                                        <td>
                                            <span style={{ 'fontFamily': 'JetBrains Mono', 'fontSize': '12px' }}>
                                                0321234567
                                            </span>
                                        </td>
                                        <td style={{ 'fontSize': '12px' }}>
                                            Apr 15, 2026
                                        </td>
                                        <td>
                                            <span className="badge-status pending">
                                                Verifying
                                            </span>
                                        </td>
                                        <td>
                                            <div className="row-actions">
                                                <button className="row-action-btn approve" title="Approve" onClick={() => {}}>
                                                    <i className="bi bi-check-lg" />
                                                </button>
                                                <button className="row-action-btn reject" title="Reject" onClick={() => {}}>
                                                    <i className="bi bi-x-lg" />
                                                </button>
                                                <button className="row-action-btn view" title="View">
                                                    <i className="bi bi-eye" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Pacific Star Chemicals</strong>
                                        </td>
                                        <td>
                                            <span className="doc-tag pending" style={{ 'padding': '4px 10px', 'fontSize': '11px' }}>
                                                <i className="bi bi-file-text-fill" />
                                                Business License
                                            </span>
                                        </td>
                                        <td>
                                            <span style={{ 'fontFamily': 'JetBrains Mono', 'fontSize': '12px' }}>
                                                GP-2026-0215
                                            </span>
                                        </td>
                                        <td style={{ 'fontSize': '12px' }}>
                                            Apr 15, 2026
                                        </td>
                                        <td>
                                            <span className="badge-status pending">
                                                Verifying
                                            </span>
                                        </td>
                                        <td>
                                            <div className="row-actions">
                                                <button className="row-action-btn approve" title="Approve" onClick={() => {}}>
                                                    <i className="bi bi-check-lg" />
                                                </button>
                                                <button className="row-action-btn reject" title="Reject" onClick={() => {}}>
                                                    <i className="bi bi-x-lg" />
                                                </button>
                                                <button className="row-action-btn view" title="View">
                                                    <i className="bi bi-eye" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Hung Thinh Metals</strong>
                                        </td>
                                        <td>
                                            <span className="doc-tag missing" style={{ 'padding': '4px 10px', 'fontSize': '11px' }}>
                                                <i className="bi bi-file-earmark-x" />
                                                Business License
                                            </span>
                                        </td>
                                        <td>
                                            <span style={{ 'fontFamily': 'JetBrains Mono', 'fontSize': '12px' }}>
                                                GP-2018-0033
                                            </span>
                                        </td>
                                        <td style={{ 'fontSize': '12px' }}>
                                            Expired: Jan 2026
                                        </td>
                                        <td>
                                            <span className="badge-status rejected">
                                                Expired
                                            </span>
                                        </td>
                                        <td>
                                            <div className="row-actions">
                                                <button className="row-action-btn" title="Request renewal" onClick={() => {}}>
                                                    <i className="bi bi-arrow-repeat" />
                                                </button>
                                                <button className="row-action-btn view" title="View">
                                                    <i className="bi bi-eye" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    {/* Verification summary */}
                    <div className="health-card">
                        <div className="health-title">
                            <i className="bi bi-shield-fill-check" style={{ 'color': 'var(--ia-primary)' }} />
                            Verification Summary
                        </div>
                        <div className="health-item">
                            <div className="health-item-header">
                                <span className="health-item-name">
                                    Tax ID Verified
                                </span>
                                <span className="health-item-val">
                                    62/68
                                </span>
                            </div>
                            <div className="health-bar">
                                <div className="health-fill" style={{ 'width': '91%', 'background': 'linear-gradient(90deg,#0d9488,#06b6d4)' }} />
                            </div>
                        </div>
                        <div className="health-item">
                            <div className="health-item-header">
                                <span className="health-item-name">
                                    Business License Valid
                                </span>
                                <span className="health-item-val">
                                    58/68
                                </span>
                            </div>
                            <div className="health-bar">
                                <div className="health-fill" style={{ 'width': '85%', 'background': 'linear-gradient(90deg,#10b981,#34d399)' }} />
                            </div>
                        </div>
                        <div className="health-item">
                            <div className="health-item-header">
                                <span className="health-item-name">
                                    Env. Certificate
                                </span>
                                <span className="health-item-val">
                                    54/68
                                </span>
                            </div>
                            <div className="health-bar">
                                <div className="health-fill" style={{ 'width': '79%', 'background': 'linear-gradient(90deg,#3b82f6,#60a5fa)' }} />
                            </div>
                        </div>
                        <div className="health-item">
                            <div className="health-item-header">
                                <span className="health-item-name">
                                    Fire Safety
                                </span>
                                <span className="health-item-val">
                                    65/68
                                </span>
                            </div>
                            <div className="health-bar">
                                <div className="health-fill" style={{ 'width': '96%', 'background': 'linear-gradient(90deg,#7c3aed,#a78bfa)' }} />
                            </div>
                        </div>
                    </div>
                    {/* Permissions quick panel */}
                    <div className="health-card" id="permissions">
                        <div className="health-title">
                            <i className="bi bi-shield-fill-gear" style={{ 'color': 'var(--ia-primary)' }} />
                            Permission Matrix
                        </div>
                        <div style={{ 'display': 'grid', 'gridTemplateColumns': 'auto 1fr', 'gap': '10px 14px', 'fontSize': '13px' }}>
                            <span style={{ 'fontWeight': '700', 'color': 'var(--heading-color)' }}>
                                Full Operations
                            </span>
                            <div className="perm-tags">
                                <span className="perm-tag">Trading</span>
                                <span className="perm-tag">Shipping</span>
                                <span className="perm-tag">Reports</span>
                            </div>
                            <span style={{ 'fontWeight': '700', 'color': 'var(--heading-color)' }}>
                                Trading Only
                            </span>
                            <div className="perm-tags">
                                <span className="perm-tag">Buy/Sell</span>
                                <span className="perm-tag">View Reports</span>
                            </div>
                            <span style={{ 'fontWeight': '700', 'color': 'var(--heading-color)' }}>
                                View Only
                            </span>
                            <div className="perm-tags">
                                <span className="perm-tag">Dashboard</span>
                                <span className="perm-tag">Reports</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IPAVerification;
