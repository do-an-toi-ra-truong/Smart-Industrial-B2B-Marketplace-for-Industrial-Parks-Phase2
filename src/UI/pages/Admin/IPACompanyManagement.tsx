import { Link } from 'react-router-dom';

const IPACompanyManagement = () => {
    return (
        <div className="main-content">
            {/* Page Header */}
            <div className="page-header" style={{ marginBottom: '18px' }}>
                <div>
                    <h1 className="page-title">
                        Company Management
                    </h1>
                    <div className="page-breadcrumb">
                        <Link to="/ipadmin/dashboard">
                            Dashboard
                        </Link>
                        <i className="bi bi-chevron-right" />
                        <span>
                            Company Management
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

            {/* Stats Row */}
            <div className="stat-grid" style={{ marginBottom: '16px' }}>
                <div className="stat-card teal" style={{ padding: '14px 18px' }}>
                    <div className="stat-icon teal" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
                        <i className="bi bi-building-fill" />
                    </div>
                    <div>
                        <div className="stat-value" style={{ fontSize: '22px' }}>68</div>
                        <div className="stat-label">Total Companies</div>
                    </div>
                </div>
                <div className="stat-card success" style={{ padding: '14px 18px' }}>
                    <div className="stat-icon success" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
                        <i className="bi bi-check-circle-fill" />
                    </div>
                    <div>
                        <div className="stat-value" style={{ fontSize: '22px' }}>54</div>
                        <div className="stat-label">Verified &amp; Active</div>
                    </div>
                </div>
                <div className="stat-card warning" style={{ padding: '14px 18px' }}>
                    <div className="stat-icon warning" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
                        <i className="bi bi-hourglass-split" />
                    </div>
                    <div>
                        <div className="stat-value" style={{ fontSize: '22px' }}>4</div>
                        <div className="stat-label">Pending Verification</div>
                    </div>
                </div>
                <div className="stat-card danger" style={{ padding: '14px 18px' }}>
                    <div className="stat-icon danger" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
                        <i className="bi bi-shield-exclamation" />
                    </div>
                    <div>
                        <div className="stat-value" style={{ fontSize: '22px' }}>2</div>
                        <div className="stat-label">License Expired</div>
                    </div>
                </div>
            </div>

            {/* Pending Company Approvals — Table Format */}
            <div className="table-card" id="pending-approval" style={{ marginBottom: '16px' }}>
                <div className="table-card-header" style={{ padding: '14px 18px' }}>
                    <h3 className="table-card-title">
                        <i className="bi bi-hourglass-split" style={{ color: 'var(--ia-warning)' }} />
                        Pending Company Approvals
                        <span style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', color: '#d97706', fontWeight: '700' }}>
                            4 awaiting
                        </span>
                    </h3>
                    <a href="#company-accounts" style={{ fontSize: '13px', color: 'var(--ia-primary)', fontWeight: '600', textDecoration: 'none' }}>
                        View all
                    </a>
                </div>
                <table className="ia-table" id="pending-approval-table">
                    <thead>
                        <tr>
                            <th>Company / Admin</th>
                            <th>Documents</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="approval-1">
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#0d9488,#06b6d4)' }}>AC</div>
                                    <div>
                                        <div className="user-name-sm">ABC Manufacturing Corp</div>
                                        <div className="user-email-sm">Le Thanh Hai · abc.corp@vsip.com.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    <span className="doc-tag valid"><i className="bi bi-check-circle-fill" /> Tax ID</span>
                                    <span className="doc-tag valid"><i className="bi bi-check-circle-fill" /> License</span>
                                    <span className="doc-tag pending"><i className="bi bi-clock-fill" /> Env. Cert</span>
                                </div>
                            </td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="Verify" onClick={() => {}}><i className="bi bi-file-earmark-check" /></button>
                                    <button className="row-action-btn approve" title="Approve" onClick={() => {}}><i className="bi bi-check-lg" /></button>
                                    <button className="row-action-btn reject" title="Reject" onClick={() => {}}><i className="bi bi-x-lg" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr id="approval-2">
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#2563eb,#60a5fa)' }}>DT</div>
                                    <div>
                                        <div className="user-name-sm">Delta Tech Solutions</div>
                                        <div className="user-email-sm">Nguyen Minh Tu · delta@enterprise.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    <span className="doc-tag valid"><i className="bi bi-check-circle-fill" /> Tax ID</span>
                                    <span className="doc-tag missing"><i className="bi bi-x-circle-fill" /> License</span>
                                </div>
                            </td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="Verify" onClick={() => {}}><i className="bi bi-file-earmark-check" /></button>
                                    <button className="row-action-btn" title="Approve (disabled)" style={{ opacity: '0.4', cursor: 'not-allowed' }}><i className="bi bi-check-lg" /></button>
                                    <button className="row-action-btn reject" title="Reject" onClick={() => {}}><i className="bi bi-x-lg" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr id="approval-3">
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#f59e0b,#fbbf24)' }}>GH</div>
                                    <div>
                                        <div className="user-name-sm">Green Horizon Logistics</div>
                                        <div className="user-email-sm">Vo Thanh Son · gh.logistics@mail.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    <span className="doc-tag valid"><i className="bi bi-check-circle-fill" /> Tax ID</span>
                                    <span className="doc-tag valid"><i className="bi bi-check-circle-fill" /> License</span>
                                    <span className="doc-tag valid"><i className="bi bi-check-circle-fill" /> Env. Cert</span>
                                </div>
                            </td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="Verify" onClick={() => {}}><i className="bi bi-file-earmark-check" /></button>
                                    <button className="row-action-btn approve" title="Approve" onClick={() => {}}><i className="bi bi-check-lg" /></button>
                                    <button className="row-action-btn reject" title="Reject" onClick={() => {}}><i className="bi bi-x-lg" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr id="approval-4">
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#7c3aed,#a78bfa)' }}>PS</div>
                                    <div>
                                        <div className="user-name-sm">Pacific Star Chemicals</div>
                                        <div className="user-email-sm">Tran Anh Duc · ps.chem@mail.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    <span className="doc-tag pending"><i className="bi bi-clock-fill" /> Tax ID</span>
                                    <span className="doc-tag pending"><i className="bi bi-clock-fill" /> License</span>
                                </div>
                            </td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="Verify" onClick={() => {}}><i className="bi bi-file-earmark-check" /></button>
                                    <button className="row-action-btn" title="Approve (disabled)" style={{ opacity: '0.4', cursor: 'not-allowed' }}><i className="bi bi-check-lg" /></button>
                                    <button className="row-action-btn reject" title="Reject" onClick={() => {}}><i className="bi bi-x-lg" /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Company Accounts Table */}
            <div className="table-card" id="company-accounts">
                <div className="table-card-header" style={{ padding: '14px 18px' }}>
                    <h3 className="table-card-title">
                        <i className="bi bi-building-fill" />
                        Company Accounts
                    </h3>
                    <div className="table-actions">
                        <div className="search-wrap">
                            <i className="bi bi-search" />
                            <input type="search" className="search-input-sm" placeholder="Search companies..." id="company-search" onInput={() => {}} />
                        </div>
                        <select className="search-input-sm" style={{ width: 'auto', paddingLeft: '12px' }} id="filter-status" onChange={() => {}}>
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="pending">Pending</option>
                            <option value="suspended">Suspended</option>
                        </select>
                    </div>
                </div>
                <table className="ia-table" id="company-table">
                    <thead>
                        <tr>
                            <th style={{ width: '40px', paddingRight: '0' }}>
                                <input type="checkbox" className="ia-checkbox" id="check-all" onChange={() => {}} />
                            </th>
                            <th>Company</th>
                            <th>Company Admin</th>
                            <th>Tax ID</th>
                            <th>License</th>
                            <th>Status</th>
                            <th>Permissions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="company-tbody">
                        <tr data-status="active" data-name="Saigon Precision Engineering">
                            <td style={{ paddingRight: '0' }}><input type="checkbox" className="ia-checkbox row-check" /></td>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#0d9488,#06b6d4)' }}>SP</div>
                                    <div>
                                        <div className="user-name-sm">Saigon Precision Engineering</div>
                                        <div className="user-email-sm">Mechanical Engineering · Since 2019</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="user-name-sm" style={{ fontSize: '12px' }}>Pham Duc Long</div>
                                <div className="user-email-sm">duc.long@spe.vn</div>
                            </td>
                            <td><span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px' }}>0301234501</span></td>
                            <td><span className="doc-tag valid"><i className="bi bi-check-circle-fill" /> Valid</span></td>
                            <td><span className="badge-status active">Active</span></td>
                            <td>
                                <div className="perm-tags">
                                    <span className="perm-tag">Full Ops</span>
                                    <span className="perm-tag">Transactions</span>
                                </div>
                            </td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="View details" onClick={() => {}}><i className="bi bi-eye" /></button>
                                    <button className="row-action-btn" title="Edit permissions" onClick={() => {}}><i className="bi bi-shield-check" /></button>
                                    <button className="row-action-btn reject" title="Suspend" onClick={() => {}}><i className="bi bi-slash-circle" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr data-status="active" data-name="VietChip Semiconductor">
                            <td style={{ paddingRight: '0' }}><input type="checkbox" className="ia-checkbox row-check" /></td>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#2563eb,#60a5fa)' }}>VC</div>
                                    <div>
                                        <div className="user-name-sm">VietChip Semiconductor</div>
                                        <div className="user-email-sm">Electronics · Since 2021</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="user-name-sm" style={{ fontSize: '12px' }}>Nguyen Hoang Anh</div>
                                <div className="user-email-sm">hoang.anh@vietchip.vn</div>
                            </td>
                            <td><span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px' }}>0307654321</span></td>
                            <td><span className="doc-tag valid"><i className="bi bi-check-circle-fill" /> Valid</span></td>
                            <td><span className="badge-status active">Active</span></td>
                            <td>
                                <div className="perm-tags">
                                    <span className="perm-tag">Full Ops</span>
                                    <span className="perm-tag">Reports</span>
                                </div>
                            </td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="View" onClick={() => {}}><i className="bi bi-eye" /></button>
                                    <button className="row-action-btn" title="Permissions" onClick={() => {}}><i className="bi bi-shield-check" /></button>
                                    <button className="row-action-btn reject" title="Suspend" onClick={() => {}}><i className="bi bi-slash-circle" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr data-status="active" data-name="Eco Plastics Vietnam">
                            <td style={{ paddingRight: '0' }}><input type="checkbox" className="ia-checkbox row-check" /></td>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#10b981,#34d399)' }}>EP</div>
                                    <div>
                                        <div className="user-name-sm">Eco Plastics Vietnam</div>
                                        <div className="user-email-sm">Consumer Goods · Since 2020</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="user-name-sm" style={{ fontSize: '12px' }}>Le Thi Minh</div>
                                <div className="user-email-sm">minh.le@ecoplastics.vn</div>
                            </td>
                            <td><span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px' }}>0315678901</span></td>
                            <td><span className="doc-tag valid"><i className="bi bi-check-circle-fill" /> Valid</span></td>
                            <td><span className="badge-status active">Active</span></td>
                            <td>
                                <div className="perm-tags">
                                    <span className="perm-tag">Operations</span>
                                    <span className="perm-tag">Shipping</span>
                                </div>
                            </td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="View" onClick={() => {}}><i className="bi bi-eye" /></button>
                                    <button className="row-action-btn" title="Permissions" onClick={() => {}}><i className="bi bi-shield-check" /></button>
                                    <button className="row-action-btn reject" title="Suspend" onClick={() => {}}><i className="bi bi-slash-circle" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr className="pending-row" data-status="pending" data-name="ABC Manufacturing Corp">
                            <td style={{ paddingRight: '0' }}><input type="checkbox" className="ia-checkbox row-check" /></td>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#f59e0b,#fbbf24)' }}>AB</div>
                                    <div>
                                        <div className="user-name-sm">ABC Manufacturing Corp</div>
                                        <div className="user-email-sm">Chemicals · Applying</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="user-name-sm" style={{ fontSize: '12px' }}>Le Thanh Hai</div>
                                <div className="user-email-sm">abc.corp@vsip.com.vn</div>
                            </td>
                            <td><span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px' }}>0301234567</span></td>
                            <td><span className="doc-tag pending"><i className="bi bi-clock-fill" /> Reviewing</span></td>
                            <td><span className="badge-status pending">Pending</span></td>
                            <td>
                                <div className="perm-tags">
                                    <span className="perm-tag" style={{ opacity: '0.5' }}>Not Granted</span>
                                </div>
                            </td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn approve" title="Approve" onClick={() => {}}><i className="bi bi-check-lg" /></button>
                                    <button className="row-action-btn reject" title="Reject" onClick={() => {}}><i className="bi bi-x-lg" /></button>
                                    <button className="row-action-btn view" title="Verify" onClick={() => {}}><i className="bi bi-file-earmark-check" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr data-status="suspended" data-name="Hung Thinh Metals">
                            <td style={{ paddingRight: '0' }}><input type="checkbox" className="ia-checkbox row-check" /></td>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#ef4444,#f87171)' }}>HT</div>
                                    <div>
                                        <div className="user-name-sm">Hung Thinh Metals</div>
                                        <div className="user-email-sm">Mechanical · License Expired</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="user-name-sm" style={{ fontSize: '12px' }}>Do Van Cuong</div>
                                <div className="user-email-sm">cuong@hungthinhmetals.vn</div>
                            </td>
                            <td><span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px' }}>0322345678</span></td>
                            <td><span className="doc-tag missing"><i className="bi bi-x-circle-fill" /> Expired</span></td>
                            <td><span className="badge-status suspended">Suspended</span></td>
                            <td>
                                <div className="perm-tags">
                                    <span className="perm-tag" style={{ opacity: '0.5' }}>Revoked</span>
                                </div>
                            </td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn approve" title="Reinstate" onClick={() => {}}><i className="bi bi-arrow-counterclockwise" /></button>
                                    <button className="row-action-btn view" title="View" onClick={() => {}}><i className="bi bi-eye" /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="table-footer">
                    <span>Showing <strong>5</strong> of <strong>68</strong> companies</span>
                    <div className="pagination-btns">
                        <button className="pg-btn" disabled={true}><i className="bi bi-chevron-left" /></button>
                        <button className="pg-btn active">1</button>
                        <button className="pg-btn">2</button>
                        <button className="pg-btn">3</button>
                        <button className="pg-btn">…</button>
                        <button className="pg-btn">14</button>
                        <button className="pg-btn"><i className="bi bi-chevron-right" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IPACompanyManagement;
