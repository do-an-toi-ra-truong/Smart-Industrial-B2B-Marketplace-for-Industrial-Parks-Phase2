
import { Link, useLocation } from 'react-router-dom';
const SidebarSA = () => {

    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-shell">
                    <button className="sidebar-close" type="button" aria-label="Close sidebar">
                        <i className="bi bi-x-lg" />
                    </button>
                    <nav className="sidebar-nav">
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <Link className={`nav-link${isActive('/saadmin/sa-dashboard') ? ' active' : ''}`} to="/saadmin/sa-dashboard">
                                    <span className="nav-icon">
                                        <i className="ph-light ph-squares-four" />
                                    </span>
                                    <span className="nav-text">
                                        Dashboard
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link${isActive('/saadmin/sa-accounts') ? ' active' : ''}`} to="/saadmin/sa-accounts">
                                    <span className="nav-icon">
                                        <i className="ph-light ph-squares-four" />
                                    </span>
                                    <span className="nav-text">
                                        Account Management
                                    </span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link${isActive('/saadmin/sa-catalog') ? ' active' : ''}`} to="/saadmin/sa-catalog">
                                    <span className="nav-icon">
                                        <i className="ph-light ph-squares-four" />
                                    </span>
                                    <span className="nav-text">
                                        System Catalog
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="sidebar-footer">
                        <div className="sidebar-account">
                            <a href="profile.html" className="sidebar-account-main">
                                <img src="./assets/images/profile-img.webp" alt="Super Admin" className="sidebar-account-avatar" />
                                <div className="sidebar-account-meta">
                                    <div className="sidebar-account-name">
                                        Nguyen Thanh Tung
                                    </div>
                                    <div className="sidebar-account-role">
                                        SIBMIP System Manager
                                    </div>
                                    <span className="sa-role-chip">
                                        <i className="bi bi-shield-fill-check" />
                                        Super Admin
                                    </span>
                                </div>
                            </a>
                            <div className="sidebar-account-actions">
                                <a href="#" className="sidebar-account-action" title="Settings">
                                    <i className="bi bi-gear" />
                                </a>
                                <a href="super-admin-login.html" className="sidebar-account-action sidebar-account-logout" title="Logout">
                                    <i className="bi bi-box-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="sidebar-footer-links">
                            <a href="#" className="sidebar-footer-link">
                                <i className="ph-light ph-headset" />
                                <span>
                                    Support Desk
                                </span>
                            </a>
                            <a href="#" className="sidebar-footer-link">
                                <i className="ph-light ph-bell" />
                                <span>
                                    Alerts
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
            <div className="sidebar-overlay" />
        </>
    )
}
export default SidebarSA