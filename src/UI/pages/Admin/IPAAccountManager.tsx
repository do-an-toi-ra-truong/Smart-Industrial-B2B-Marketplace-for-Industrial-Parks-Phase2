import { Link } from 'react-router-dom';

const IPAAccountManager = () => {
    return (
        <div className="main-content">
            {/* Page Header */}
            <div className="page-header" style={{ marginBottom: '18px' }}>
                <div>
                    <h1 className="page-title">Account Manager</h1>
                    <div className="page-breadcrumb">
                        <Link to="/admin/ip-dashboard">Dashboard</Link>
                        <i className="bi bi-chevron-right" />
                        <span>Account Manager</span>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button className="btn-ia-primary" onClick={() => {}}>
                        <i className="bi bi-person-plus-fill" />
                        Add Admin
                    </button>
                </div>
            </div>

            {/* Pending Admin Requests — Table Format */}
            <div className="table-card" id="pending-admins" style={{ marginBottom: '16px' }}>
                <div className="table-card-header" style={{ padding: '14px 18px' }}>
                    <h3 className="table-card-title">
                        <i className="bi bi-person-fill-add" style={{ color: 'var(--ia-warning)' }} />
                        Pending Company Admin Requests
                        <span style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', color: '#d97706', fontWeight: '700' }}>
                            3 new
                        </span>
                    </h3>
                </div>
                <table className="ia-table">
                    <thead>
                        <tr>
                            <th>Admin</th>
                            <th>Company</th>
                            <th>Verification</th>
                            <th>Requested</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="admin-req-1">
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#0d9488,#06b6d4)' }}>LH</div>
                                    <div>
                                        <div className="user-name-sm">Le Thanh Hai</div>
                                        <div className="user-email-sm">abc.corp@vsip.com.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '13px', fontWeight: '600' }}>ABC Manufacturing Corp</span></td>
                            <td>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    <span className="badge-role company-admin"><i className="bi bi-person-fill-gear" /> Company Admin</span>
                                    <span className="doc-tag valid"><i className="bi bi-building-check" /> Verified</span>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Apr 14, 2026</span></td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="Review" onClick={() => {}}><i className="bi bi-pencil-square" /></button>
                                    <button className="row-action-btn approve" title="Approve" onClick={() => {}}><i className="bi bi-check-lg" /></button>
                                    <button className="row-action-btn reject" title="Reject" onClick={() => {}}><i className="bi bi-x-lg" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr id="admin-req-2">
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#2563eb,#60a5fa)' }}>NM</div>
                                    <div>
                                        <div className="user-name-sm">Nguyen Minh Tu</div>
                                        <div className="user-email-sm">delta@enterprise.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '13px', fontWeight: '600' }}>Delta Tech Solutions</span></td>
                            <td>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    <span className="badge-role company-admin"><i className="bi bi-person-fill-gear" /> Company Admin</span>
                                    <span className="doc-tag missing"><i className="bi bi-exclamation-triangle-fill" /> License Missing</span>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Apr 15, 2026</span></td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="Review" onClick={() => {}}><i className="bi bi-pencil-square" /></button>
                                    <button className="row-action-btn" title="Approve (disabled)" style={{ opacity: '0.4', cursor: 'not-allowed' }}><i className="bi bi-check-lg" /></button>
                                    <button className="row-action-btn reject" title="Reject" onClick={() => {}}><i className="bi bi-x-lg" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr id="admin-req-3">
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#f59e0b,#fbbf24)' }}>VS</div>
                                    <div>
                                        <div className="user-name-sm">Vo Thanh Son</div>
                                        <div className="user-email-sm">gh.logistics@mail.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '13px', fontWeight: '600' }}>Green Horizon Logistics</span></td>
                            <td>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    <span className="badge-role company-admin"><i className="bi bi-person-fill-gear" /> Company Admin</span>
                                    <span className="doc-tag valid"><i className="bi bi-building-check" /> Verified</span>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Apr 15, 2026</span></td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="Review" onClick={() => {}}><i className="bi bi-pencil-square" /></button>
                                    <button className="row-action-btn approve" title="Approve" onClick={() => {}}><i className="bi bi-check-lg" /></button>
                                    <button className="row-action-btn reject" title="Reject" onClick={() => {}}><i className="bi bi-x-lg" /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Company Admin Accounts Table */}
            <div className="table-card" id="admin-accounts" style={{ marginBottom: '16px' }}>
                <div className="table-card-header" style={{ padding: '14px 18px' }}>
                    <h3 className="table-card-title">
                        <i className="bi bi-people-fill" />
                        Company Admin Accounts
                    </h3>
                    <div className="table-actions">
                        <div className="search-wrap">
                            <i className="bi bi-search" />
                            <input type="search" className="search-input-sm" placeholder="Search admins..." id="admin-search" onInput={() => {}} />
                        </div>
                        <select className="search-input-sm" style={{ width: 'auto', paddingLeft: '12px' }} id="filter-admin-status" onChange={() => {}}>
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="pending">Pending</option>
                            <option value="suspended">Suspended</option>
                        </select>
                    </div>
                </div>
                <table className="ia-table" id="admin-table">
                    <thead>
                        <tr>
                            <th style={{ width: '40px', paddingRight: '0' }}>
                                <input type="checkbox" className="ia-checkbox" onChange={() => {}} />
                            </th>
                            <th>Admin Account</th>
                            <th>Company</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Permissions</th>
                            <th>Last Login</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="admin-tbody">
                        <tr data-status="active" data-name="Pham Duc Long">
                            <td style={{ paddingRight: '0' }}><input type="checkbox" className="ia-checkbox admin-row-check" /></td>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#0d9488,#06b6d4)' }}>PD</div>
                                    <div>
                                        <div className="user-name-sm">Pham Duc Long</div>
                                        <div className="user-email-sm">duc.long@spe.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '13px', fontWeight: '600' }}>Saigon Precision Engineering</span></td>
                            <td><span className="badge-role company-admin"><i className="bi bi-person-fill-gear" /> Company Admin</span></td>
                            <td><span className="badge-status active">Active</span></td>
                            <td>
                                <div className="perm-tags">
                                    <span className="perm-tag">Full Ops</span>
                                    <span className="perm-tag">Trading</span>
                                    <span className="perm-tag">Reports</span>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Today, 09:14</span></td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="Edit account" onClick={() => {}}><i className="bi bi-pencil" /></button>
                                    <button className="row-action-btn" title="Manage permissions" onClick={() => {}}><i className="bi bi-shield-check" /></button>
                                    <button className="row-action-btn reject" title="Suspend account" onClick={() => {}}><i className="bi bi-slash-circle" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr data-status="active" data-name="Nguyen Hoang Anh">
                            <td style={{ paddingRight: '0' }}><input type="checkbox" className="ia-checkbox admin-row-check" /></td>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#2563eb,#60a5fa)' }}>NH</div>
                                    <div>
                                        <div className="user-name-sm">Nguyen Hoang Anh</div>
                                        <div className="user-email-sm">hoang.anh@vietchip.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '13px', fontWeight: '600' }}>VietChip Semiconductor</span></td>
                            <td><span className="badge-role company-admin"><i className="bi bi-person-fill-gear" /> Company Admin</span></td>
                            <td><span className="badge-status active">Active</span></td>
                            <td>
                                <div className="perm-tags">
                                    <span className="perm-tag">Full Ops</span>
                                    <span className="perm-tag">Reports</span>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Today, 08:42</span></td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="Edit" onClick={() => {}}><i className="bi bi-pencil" /></button>
                                    <button className="row-action-btn" title="Permissions" onClick={() => {}}><i className="bi bi-shield-check" /></button>
                                    <button className="row-action-btn reject" title="Suspend" onClick={() => {}}><i className="bi bi-slash-circle" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr data-status="active" data-name="Le Thi Minh">
                            <td style={{ paddingRight: '0' }}><input type="checkbox" className="ia-checkbox admin-row-check" /></td>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#10b981,#34d399)' }}>LM</div>
                                    <div>
                                        <div className="user-name-sm">Le Thi Minh</div>
                                        <div className="user-email-sm">minh.le@ecoplastics.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '13px', fontWeight: '600' }}>Eco Plastics Vietnam</span></td>
                            <td><span className="badge-role company-admin"><i className="bi bi-person-fill-gear" /> Company Admin</span></td>
                            <td><span className="badge-status active">Active</span></td>
                            <td>
                                <div className="perm-tags">
                                    <span className="perm-tag">Operations</span>
                                    <span className="perm-tag">Shipping</span>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Yesterday</span></td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="Edit" onClick={() => {}}><i className="bi bi-pencil" /></button>
                                    <button className="row-action-btn" title="Permissions" onClick={() => {}}><i className="bi bi-shield-check" /></button>
                                    <button className="row-action-btn reject" title="Suspend" onClick={() => {}}><i className="bi bi-slash-circle" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr className="pending-row" data-status="pending" data-name="Le Thanh Hai">
                            <td style={{ paddingRight: '0' }}><input type="checkbox" className="ia-checkbox admin-row-check" /></td>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#f59e0b,#fbbf24)' }}>LH</div>
                                    <div>
                                        <div className="user-name-sm">Le Thanh Hai</div>
                                        <div className="user-email-sm">abc.corp@vsip.com.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '13px', fontWeight: '600' }}>ABC Manufacturing Corp</span></td>
                            <td><span className="badge-role company-admin"><i className="bi bi-person-fill-gear" /> Company Admin</span></td>
                            <td><span className="badge-status pending">Pending Approval</span></td>
                            <td>
                                <div className="perm-tags">
                                    <span className="perm-tag" style={{ opacity: '0.5' }}>Not Granted</span>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Never</span></td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn approve" title="Approve" onClick={() => {}}><i className="bi bi-check-lg" /></button>
                                    <button className="row-action-btn reject" title="Reject" onClick={() => {}}><i className="bi bi-x-lg" /></button>
                                    <button className="row-action-btn view" title="Review" onClick={() => {}}><i className="bi bi-eye" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr data-status="active" data-name="Tran Van Bao">
                            <td style={{ paddingRight: '0' }}><input type="checkbox" className="ia-checkbox admin-row-check" /></td>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#7c3aed,#a78bfa)' }}>TB</div>
                                    <div>
                                        <div className="user-name-sm">Tran Van Bao</div>
                                        <div className="user-email-sm">bao.tran@sunwell.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '13px', fontWeight: '600' }}>Sun Well Industries</span></td>
                            <td><span className="badge-role company-admin"><i className="bi bi-person-fill-gear" /> Company Admin</span></td>
                            <td><span className="badge-status active">Active</span></td>
                            <td>
                                <div className="perm-tags">
                                    <span className="perm-tag">Trading</span>
                                    <span className="perm-tag">Reports</span>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Apr 14</span></td>
                            <td>
                                <div className="row-actions">
                                    <button className="row-action-btn view" title="Edit" onClick={() => {}}><i className="bi bi-pencil" /></button>
                                    <button className="row-action-btn" title="Permissions" onClick={() => {}}><i className="bi bi-shield-check" /></button>
                                    <button className="row-action-btn reject" title="Suspend" onClick={() => {}}><i className="bi bi-slash-circle" /></button>
                                </div>
                            </td>
                        </tr>
                        <tr data-status="suspended" data-name="Do Van Cuong">
                            <td style={{ paddingRight: '0' }}><input type="checkbox" className="ia-checkbox admin-row-check" /></td>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar-initials" style={{ background: 'linear-gradient(135deg,#ef4444,#f87171)' }}>DC</div>
                                    <div>
                                        <div className="user-name-sm">Do Van Cuong</div>
                                        <div className="user-email-sm">cuong@hungthinhmetals.vn</div>
                                    </div>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '13px', fontWeight: '600' }}>Hung Thinh Metals</span></td>
                            <td><span className="badge-role company-admin"><i className="bi bi-person-fill-gear" /> Company Admin</span></td>
                            <td><span className="badge-status suspended">Suspended</span></td>
                            <td>
                                <div className="perm-tags">
                                    <span className="perm-tag" style={{ opacity: '0.5' }}>Revoked</span>
                                </div>
                            </td>
                            <td><span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Jan 2026</span></td>
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
                    <span>Showing <strong>6</strong> of <strong>12</strong> company admin accounts</span>
                    <div className="pagination-btns">
                        <button className="pg-btn" disabled={true}><i className="bi bi-chevron-left" /></button>
                        <button className="pg-btn active">1</button>
                        <button className="pg-btn">2</button>
                        <button className="pg-btn"><i className="bi bi-chevron-right" /></button>
                    </div>
                </div>
            </div>

            {/* Permission Levels — Table Format */}
        </div>
    );
};

export default IPAAccountManager;
