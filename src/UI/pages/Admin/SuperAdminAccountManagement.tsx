import { useState } from "react";

const SuperAdminAccountManagement = () => {
    const [activeTab, setActiveTab] = useState("tab-all");
    const [checked, setChecked] = useState(false);

    function filterTable(value: string): void {
        console.log("filterTable:", value);
    }

    function toggleWarning(currentTarget: EventTarget & HTMLButtonElement): void {
        console.log("toggleWarning:", currentTarget);
    }

    function openEditModal(name: string, role: string, park: string, status: string): void {
        console.log("openEditModal:", name, role, park, status);
    }

    function showToast(type: string, message: string): void {
        console.log("showToast:", type, message);
    }

    return (
        <>
            <div className="main-content">
                {/* Page Header */}
                <div className="page-header">
                    <div className="page-header-left">
                        <h1 className="page-title">Account Management</h1>
                        <div className="page-breadcrumb">
                            <a href="super-admin-catalog.html">Dashboard</a>
                            <i className="bi bi-chevron-right" />
                            <span>Account Management</span>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                        <button className="btn-sa-primary" id="btn-add-account">
                            <i className="bi bi-person-plus-fill" />
                            Add Account
                        </button>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="stat-grid">
                    <div className="stat-card primary">
                        <div className="stat-icon primary"><i className="bi bi-people-fill" /></div>
                        <div className="stat-info">
                            <div className="stat-value">36</div>
                            <div className="stat-label">IP Admins</div>
                        </div>
                    </div>
                    <div className="stat-card success">
                        <div className="stat-icon success"><i className="bi bi-check-circle" /></div>
                        <div className="stat-info">
                            <div className="stat-value">34</div>
                            <div className="stat-label">Active</div>
                        </div>
                    </div>
                    <div className="stat-card warning">
                        <div className="stat-icon warning"><i className="bi bi-exclamation-triangle" /></div>
                        <div className="stat-info">
                            <div className="stat-value">2</div>
                            <div className="stat-label">With Warnings</div>
                        </div>
                    </div>
                </div>

                {/* Main content grid */}
                <div className="row g-3">
                    <div className="col-lg-12">
                        {/* Tabs */}
                        <div className="sa-tabs" role="tablist">
                            <button
                                className={`sa-tab ${activeTab === "tab-all" ? "active" : ""}`}
                                onClick={() => setActiveTab("tab-all")}
                            >
                                All
                            </button>
                            <button
                                className={`sa-tab ${activeTab === "tab-ip-admin" ? "active" : ""}`}
                                onClick={() => setActiveTab("tab-ip-admin")}
                            >
                                IP Admins
                            </button>
                        </div>

                        <div className="table-card">
                            <div className="table-card-header">
                                <h3 className="table-card-title">
                                    <i className="bi bi-people-fill" />
                                    User Accounts
                                </h3>
                                <div className="table-actions">
                                    <div className="search-wrap">
                                        <i className="bi bi-search" />
                                        <input
                                            type="search"
                                            className="search-input-sm"
                                            placeholder="Search accounts..."
                                            id="account-search"
                                            onChange={(e) => filterTable(e.currentTarget.value)}
                                        />
                                    </div>
                                    <button
                                        className="btn-sa-outline"
                                        onClick={() => document.getElementById("export-modal")?.classList.add("show")}
                                    >
                                        <i className="bi bi-funnel" />
                                        Filter
                                    </button>
                                </div>
                            </div>

                            {/* Tab panels */}
                            <div className="tab-panel active" id="tab-all">
                                <table className="sa-table" id="accounts-table">
                                    <thead>
                                        <tr>
                                            <th className="check-col">
                                                <input
                                                    type="checkbox"
                                                    className="sa-checkbox"
                                                    id="check-all"
                                                    onChange={(e) => setChecked(e.target.checked)}
                                                />
                                            </th>
                                            <th>Account</th>
                                            <th>Role</th>
                                            <th>Park / Cluster</th>
                                            <th>Status</th>
                                            <th>Warning Flag</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="accounts-tbody">
                                        {/* Row: System Admin */}
                                        <tr data-role="Super Admin" data-name="System Admin">
                                            <td className="check-col">
                                                <input type="checkbox" className="sa-checkbox row-check" />
                                            </td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}>SA</div>
                                                    <div>
                                                        <div className="user-name-sm">System Admin</div>
                                                        <div className="user-email-sm">superadmin@sibmip.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role super-admin"><i className="bi bi-star-fill" />Super Admin</span></td>
                                            <td><span style={{ color: "var(--text-muted)", fontSize: "12px" }}>— All clusters —</span></td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-flag" />None
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit"><i className="bi bi-pencil" /></button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row: Tran Minh Khoa */}
                                        <tr data-role="IP Admin" data-name="Tran Minh Khoa">
                                            <td className="check-col"><input type="checkbox" className="sa-checkbox row-check" /></td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#2563eb,#60a5fa)" }}>TK</div>
                                                    <div>
                                                        <div className="user-name-sm">Tran Minh Khoa</div>
                                                        <div className="user-email-sm">minh.khoa@vsip.com.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role ip-admin"><i className="bi bi-building" />IP Admin</span></td>
                                            <td>VSIP · Binh Duong</td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-flag" />None
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit" onClick={() => openEditModal("Tran Minh Khoa", "IP Admin", "VSIP · Binh Duong", "active")}>
                                                        <i className="bi bi-pencil" />
                                                    </button>
                                                    <button className="row-action-btn reject" title="Ban" onClick={() => showToast("danger", "Account banned.")}>
                                                        <i className="bi bi-slash-circle" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row: Hoang Thi Mai */}
                                        <tr data-role="IP Admin" data-name="Hoang Thi Mai">
                                            <td className="check-col"><input type="checkbox" className="sa-checkbox row-check" /></td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#059669,#34d399)" }}>HM</div>
                                                    <div>
                                                        <div className="user-name-sm">Hoang Thi Mai</div>
                                                        <div className="user-email-sm">thi.mai@myphuoc.com.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role ip-admin"><i className="bi bi-building" />IP Admin</span></td>
                                            <td>My Phuoc · Binh Duong</td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag warning" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-exclamation-triangle-fill" />Warning
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit" onClick={() => openEditModal("Hoang Thi Mai", "IP Admin", "My Phuoc · Binh Duong", "active")}>
                                                        <i className="bi bi-pencil" />
                                                    </button>
                                                    <button className="row-action-btn reject" title="Ban" onClick={() => showToast("danger", "Account banned.")}>
                                                        <i className="bi bi-slash-circle" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row: Vo Minh Duc */}
                                        <tr data-role="IP Admin" data-name="Vo Minh Duc">
                                            <td className="check-col"><input type="checkbox" className="sa-checkbox row-check" /></td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#f59e0b,#fbbf24)" }}>VD</div>
                                                    <div>
                                                        <div className="user-name-sm">Vo Minh Duc</div>
                                                        <div className="user-email-sm">minh.duc@amata.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role ip-admin"><i className="bi bi-building" />IP Admin</span></td>
                                            <td>Amata · Dong Nai</td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-flag" />None
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit" onClick={() => openEditModal("Vo Minh Duc", "IP Admin", "Amata · Dong Nai", "active")}>
                                                        <i className="bi bi-pencil" />
                                                    </button>
                                                    <button className="row-action-btn reject" title="Ban" onClick={() => showToast("danger", "Account banned.")}>
                                                        <i className="bi bi-slash-circle" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row: Nguyen Thanh Long */}
                                        <tr data-role="IP Admin" data-name="Nguyen Thanh Long">
                                            <td className="check-col"><input type="checkbox" className="sa-checkbox row-check" /></td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#3b82f6,#60a5fa)" }}>NL</div>
                                                    <div>
                                                        <div className="user-name-sm">Nguyen Thanh Long</div>
                                                        <div className="user-email-sm">thanh.long@vsip.com.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role ip-admin"><i className="bi bi-building" />IP Admin</span></td>
                                            <td>VSIP · Hai Phong</td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-flag" />None
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit" onClick={() => openEditModal("Nguyen Thanh Long", "IP Admin", "VSIP · Hai Phong", "active")}>
                                                        <i className="bi bi-pencil" />
                                                    </button>
                                                    <button className="row-action-btn reject" title="Ban" onClick={() => showToast("danger", "Account banned.")}>
                                                        <i className="bi bi-slash-circle" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row: Tran Van Thao */}
                                        <tr data-role="IP Admin" data-name="Tran Van Thao">
                                            <td className="check-col"><input type="checkbox" className="sa-checkbox row-check" /></td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#ec4899,#f472b6)" }}>TV</div>
                                                    <div>
                                                        <div className="user-name-sm">Tran Van Thao</div>
                                                        <div className="user-email-sm">van.thao@myphuoc.com.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role ip-admin"><i className="bi bi-building" />IP Admin</span></td>
                                            <td>My Phuoc · Binh Duong</td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-flag" />None
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit" onClick={() => openEditModal("Tran Van Thao", "IP Admin", "My Phuoc · Binh Duong", "active")}>
                                                        <i className="bi bi-pencil" />
                                                    </button>
                                                    <button className="row-action-btn reject" title="Ban" onClick={() => showToast("danger", "Account banned.")}>
                                                        <i className="bi bi-slash-circle" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row: Phan Thi Huong */}
                                        <tr data-role="IP Admin" data-name="Phan Thi Huong">
                                            <td className="check-col"><input type="checkbox" className="sa-checkbox row-check" /></td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#8b5cf6,#a78bfa)" }}>PH</div>
                                                    <div>
                                                        <div className="user-name-sm">Phan Thi Huong</div>
                                                        <div className="user-email-sm">thi.huong@vsip.com.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role ip-admin"><i className="bi bi-building" />IP Admin</span></td>
                                            <td>VSIP · Quang Ngai</td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-flag" />None
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit" onClick={() => openEditModal("Phan Thi Huong", "IP Admin", "VSIP · Quang Ngai", "active")}>
                                                        <i className="bi bi-pencil" />
                                                    </button>
                                                    <button className="row-action-btn reject" title="Ban" onClick={() => showToast("danger", "Account banned.")}>
                                                        <i className="bi bi-slash-circle" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row: Le Van Son */}
                                        <tr data-role="IP Admin" data-name="Le Van Son">
                                            <td className="check-col"><input type="checkbox" className="sa-checkbox row-check" /></td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#06b6d4,#22d3ee)" }}>LS</div>
                                                    <div>
                                                        <div className="user-name-sm">Le Van Son</div>
                                                        <div className="user-email-sm">van.son@amata.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role ip-admin"><i className="bi bi-building" />IP Admin</span></td>
                                            <td>Amata · Bien Hoa</td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-flag" />None
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit" onClick={() => openEditModal("Le Van Son", "IP Admin", "Amata · Bien Hoa", "active")}>
                                                        <i className="bi bi-pencil" />
                                                    </button>
                                                    <button className="row-action-btn reject" title="Ban" onClick={() => showToast("danger", "Account banned.")}>
                                                        <i className="bi bi-slash-circle" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row: Dang Thi Linh */}
                                        <tr data-role="IP Admin" data-name="Dang Thi Linh">
                                            <td className="check-col"><input type="checkbox" className="sa-checkbox row-check" /></td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#ef4444,#f87171)" }}>DL</div>
                                                    <div>
                                                        <div className="user-name-sm">Dang Thi Linh</div>
                                                        <div className="user-email-sm">thi.linh@myphuoc.com.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role ip-admin"><i className="bi bi-building" />IP Admin</span></td>
                                            <td>My Phuoc 1</td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-flag" />None
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit" onClick={() => openEditModal("Dang Thi Linh", "IP Admin", "My Phuoc 1", "active")}>
                                                        <i className="bi bi-pencil" />
                                                    </button>
                                                    <button className="row-action-btn reject" title="Ban" onClick={() => showToast("danger", "Account banned.")}>
                                                        <i className="bi bi-slash-circle" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row: Chu Huu Thanh */}
                                        <tr data-role="IP Admin" data-name="Chu Huu Thanh">
                                            <td className="check-col"><input type="checkbox" className="sa-checkbox row-check" /></td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#14b8a6,#2dd4bf)" }}>CT</div>
                                                    <div>
                                                        <div className="user-name-sm">Chu Huu Thanh</div>
                                                        <div className="user-email-sm">huu.thanh@vsip.com.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role ip-admin"><i className="bi bi-building" />IP Admin</span></td>
                                            <td>VSIP · Binh Duong</td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-flag" />None
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit" onClick={() => openEditModal("Chu Huu Thanh", "IP Admin", "VSIP · Binh Duong", "active")}>
                                                        <i className="bi bi-pencil" />
                                                    </button>
                                                    <button className="row-action-btn reject" title="Ban" onClick={() => showToast("danger", "Account banned.")}>
                                                        <i className="bi bi-slash-circle" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row: Ngo Khanh Linh */}
                                        <tr data-role="IP Admin" data-name="Ngo Khanh Linh">
                                            <td className="check-col"><input type="checkbox" className="sa-checkbox row-check" /></td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#f97316,#fb923c)" }}>NK</div>
                                                    <div>
                                                        <div className="user-name-sm">Ngo Khanh Linh</div>
                                                        <div className="user-email-sm">khanh.linh@amata.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role ip-admin"><i className="bi bi-building" />IP Admin</span></td>
                                            <td>Amata · Dong Nai</td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-flag" />None
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit" onClick={() => openEditModal("Ngo Khanh Linh", "IP Admin", "Amata · Dong Nai", "active")}>
                                                        <i className="bi bi-pencil" />
                                                    </button>
                                                    <button className="row-action-btn reject" title="Ban" onClick={() => showToast("danger", "Account banned.")}>
                                                        <i className="bi bi-slash-circle" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row: Bui Thi Ngoc */}
                                        <tr data-role="IP Admin" data-name="Bui Thi Ngoc">
                                            <td className="check-col"><input type="checkbox" className="sa-checkbox row-check" /></td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-initials" style={{ background: "linear-gradient(135deg,#6366f1,#818cf8)" }}>BN</div>
                                                    <div>
                                                        <div className="user-name-sm">Bui Thi Ngoc</div>
                                                        <div className="user-email-sm">thi.ngoc@myphuoc.com.vn</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge-role ip-admin"><i className="bi bi-building" />IP Admin</span></td>
                                            <td>My Phuoc 2 &amp; 3</td>
                                            <td><span className="badge-status active">Active</span></td>
                                            <td>
                                                <button className="btn-warning-flag" title="Toggle warning" onClick={(e) => toggleWarning(e.currentTarget)}>
                                                    <i className="bi bi-flag" />None
                                                </button>
                                            </td>
                                            <td>
                                                <div className="row-actions">
                                                    <button className="row-action-btn edit" title="Edit" onClick={() => openEditModal("Bui Thi Ngoc", "IP Admin", "My Phuoc 2 & 3", "active")}>
                                                        <i className="bi bi-pencil" />
                                                    </button>
                                                    <button className="row-action-btn reject" title="Ban" onClick={() => showToast("danger", "Account banned.")}>
                                                        <i className="bi bi-slash-circle" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* IP Admins tab */}
                            <div className="tab-panel" id="tab-ip-admin">
                                <div style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}>
                                    <i className="bi bi-building" style={{ fontSize: "40px", opacity: 0.3 }} />
                                    <p style={{ marginTop: "12px", fontSize: "14px" }}>
                                        Showing 36 IP Admin accounts — filter active here.
                                    </p>
                                </div>
                            </div>

                            <div className="table-footer">
                                <span>Showing <strong>3</strong> of <strong>36</strong> IP Admin accounts</span>
                                <div className="pagination-btns">
                                    <button className="pg-btn" disabled><i className="bi bi-chevron-left" /></button>
                                    <button className="pg-btn active">1</button>
                                    <button className="pg-btn">2</button>
                                    <button className="pg-btn">3</button>
                                    <button className="pg-btn">…</button>
                                    <button className="pg-btn">42</button>
                                    <button className="pg-btn"><i className="bi bi-chevron-right" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuperAdminAccountManagement;