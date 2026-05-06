const SidebarCA = () => {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-shell">
                    <button className="sidebar-close" type="button" aria-label="Close sidebar">
                    <i className="bi bi-x-lg" />
                    </button>
                    {/* Sidebar Navigation */}
                    <nav className="sidebar-nav">
                    <ul className="nav-menu">
                        <li className="nav-item">
                        <a className="nav-link active" href="index.html">
                            <span className="nav-icon">
                            <i className="ph-light ph-squares-four" />
                            </span>
                            <span className="nav-text">
                            Dashboard
                            </span>
                        </a>
                        </li>
                        <li className="nav-item has-submenu open">
                        <a className="nav-link" href="#" aria-expanded="true">
                            <span className="nav-icon">
                            <i className="ph-light ph-users-three" />
                            </span>
                            <span className="nav-text">
                            Users
                            </span>
                            <span className="nav-arrow">
                            <i className="bi bi-chevron-right" />
                            </span>
                        </a>
                        <ul className="nav-submenu show">
                            <li>
                            <a className="nav-link " href="users-list.html">
                                <span className="nav-dot" />
                                Users List
                            </a>
                            </li>
                            <li>
                            <a className="nav-link active" href="users-view.html">
                                <span className="nav-dot" />
                                User View
                            </a>
                            </li>
                            <li>
                            <a className="nav-link " href="users-edit.html">
                                <span className="nav-dot" />
                                User Edit
                            </a>
                            </li>
                            <li>
                            <a className="nav-link " href="profile.html">
                                <span className="nav-dot" />
                                Profile
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item has-submenu ">
                        <a className="nav-link" href="#" aria-expanded="false">
                            <span className="nav-icon">
                            <i className="bi bi-box-seam-fill" />
                            </span>
                            <span className="nav-text">
                            Order Management
                            </span>
                            <span className="nav-badge">
                            4
                            </span>
                            <span className="nav-arrow">
                            <i className="bi bi-chevron-right" />
                            </span>
                        </a>
                        <ul className="nav-submenu ">
                            <li>
                            <a className="nav-link " href="buyerStaffOrder.html">
                                <span className="nav-dot" />
                                Buyer Staff's Orders
                            </a>
                            </li>
                            <li>
                            <a className="nav-link " href="sellerStaffOrder.html">
                                <span className="nav-dot" />
                                Seller Staff's Orders
                            </a>
                            </li>
                            <li>
                            <a className="nav-link " href="approvalOrders.html">
                                <span className="nav-dot" />
                                Approval Queue
                            </a>
                            </li>
                            <li>
                            <a className="nav-link " href="returnOrder.html">
                                <span className="nav-dot" />
                                Disputes & Returns
                            </a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </nav>
                    {/* Sidebar Footer */}
                    <div className="sidebar-footer">
                    <div className="sidebar-account">
                        <a href="profile.html" className="sidebar-account-main">
                        <img src="/Admin/assets/images/profile-img.webp" alt="User" className="sidebar-account-avatar" />
                        <div className="sidebar-account-meta">
                            <div className="sidebar-account-name">
                            John Doe
                            </div>
                            <div className="sidebar-account-role">
                            Company Admin
                            </div>
                        </div>
                        </a>
                        <div className="sidebar-account-actions">
                        <a href="settings.html" className="sidebar-account-action" title="Settings">
                            <i className="bi bi-gear" />
                        </a>
                        <a href="auth-login.html" className="sidebar-account-action sidebar-account-logout" title="Logout">
                            <i className="bi bi-box-arrow-right" />
                        </a>
                        </div>
                    </div>
                    <div className="sidebar-footer-links">
                        <a href="apps-support.html" className="sidebar-footer-link">
                        <i className="ph-light ph-headset" />
                        <span>
                            Support Desk
                        </span>
                        </a>
                        <a href="notifications.html" className="sidebar-footer-link">
                        <i className="ph-light ph-bell" />
                        <span>
                            Alerts
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
            </aside>
        </>
    )

}
export default SidebarCA