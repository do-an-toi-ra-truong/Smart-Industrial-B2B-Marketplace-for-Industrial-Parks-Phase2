import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarCA = () => {
    const location = useLocation();
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
        users: location.pathname.startsWith('/admin/users'),
        orders: location.pathname.startsWith('/admin/approval') || location.pathname.startsWith('/admin/buyer') || location.pathname.startsWith('/admin/seller') || location.pathname.startsWith('/admin/return'),
    });

    const toggleMenu = (menu: string) => {
        setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

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
                                <Link className={`nav-link${isActive('/admin/dashboard') ? ' active' : ''}`} to="/admin/dashboard">
                                    <span className="nav-icon">
                                        <i className="ph-light ph-squares-four" />
                                    </span>
                                    <span className="nav-text">
                                        Dashboard
                                    </span>
                                </Link>
                            </li>
                            <li className={`nav-item has-submenu${openMenus.users ? ' open' : ''}`}>
                                <a className="nav-link" href="#" aria-expanded={openMenus.users} onClick={(e) => { e.preventDefault(); toggleMenu('users'); }}>
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
                                <ul className={`nav-submenu${openMenus.users ? ' show' : ''}`} style={openMenus.users ? { maxHeight: '500px', overflow: 'visible' } : {}}>
                                    <li>
                                        <Link className={`nav-link${isActive('/admin/users-list') ? ' active' : ''}`} to="/admin/users-list">
                                            <span className="nav-dot" />
                                            Users List
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={`nav-link${isActive('/admin/users-profile') ? ' active' : ''}`} to="/admin/users-profile">
                                            <span className="nav-dot" />
                                            Profile
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={`nav-item has-submenu${openMenus.orders ? ' open' : ''}`}>
                                <a className="nav-link" href="#" aria-expanded={openMenus.orders} onClick={(e) => { e.preventDefault(); toggleMenu('orders'); }}>
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
                                <ul className={`nav-submenu${openMenus.orders ? ' show' : ''}`} style={openMenus.orders ? { maxHeight: '500px', overflow: 'visible' } : {}}>
                                    <li>
                                        <Link className={`nav-link${isActive('/admin/buyer-staff-orders') ? ' active' : ''}`} to="/admin/buyer-staff-orders">
                                            <span className="nav-dot" />
                                            Buyer Staff's Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={`nav-link${isActive('/admin/seller-staff-orders') ? ' active' : ''}`} to="/admin/seller-staff-orders">
                                            <span className="nav-dot" />
                                            Seller Staff's Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={`nav-link${isActive('/admin/approval-orders') ? ' active' : ''}`} to="/admin/approval-orders">
                                            <span className="nav-dot" />
                                            Approval Queue
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={`nav-link${isActive('/admin/return-orders') ? ' active' : ''}`} to="/admin/return-orders">
                                            <span className="nav-dot" />
                                            Return Orders
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* Sidebar Footer */}
                    <div className="sidebar-footer">
                        <div className="sidebar-account">
                            <Link to="/admin/users-profile" className="sidebar-account-main">
                                <img src="/Admin/assets/images/profile-img.webp" alt="User" className="sidebar-account-avatar" />
                                <div className="sidebar-account-meta">
                                    <div className="sidebar-account-name">
                                        John Doe
                                    </div>
                                    <div className="sidebar-account-role">
                                        Company Admin
                                    </div>
                                </div>
                            </Link>
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