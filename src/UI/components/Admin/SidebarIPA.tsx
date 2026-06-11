import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
const SideBarIPA = () => {
    const { logout } = useAuth();
    const location = useLocation();
    const currentPath = location.pathname;

    // Helper to check if a path is active
    const isActive = (path: string) => currentPath === path;
    // Helper to check if any child path is active (for parent menu highlighting)
    const isParentActive = (paths: string[]) => paths.some(p => currentPath === p);

    // Submenu open/close state
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
        companies: true,
        accounts: false,
    });

    const toggleMenu = (key: string) => {
        setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-shell">
                    <button className="sidebar-close" type="button" aria-label="Close sidebar">
                        <i className="bi bi-x-lg" />
                    </button>
                    <nav className="sidebar-nav">
                        <ul className="nav-menu">
                            {/* Dashboard */}
                            <li className="nav-item">
                                <Link
                                    className={`nav-link${isActive('/ipadmin/dashboard') ? ' active' : ''}`}
                                    to="/ipadmin/dashboard"
                                >
                                    <span className="nav-icon">
                                        <i className="ph-light ph-squares-four" />
                                    </span>
                                    <span className="nav-text">
                                        Dashboard
                                    </span>
                                </Link>
                            </li>

                            {/* Company Management */}
                            <li className={`nav-item has-submenu${openMenus.companies ? ' open' : ''}`}>
                                <a
                                    className={`nav-link${isParentActive(['/ipadmin/companies', '/ipadmin/verification']) ? ' active' : ''}`}
                                    href="#"
                                    aria-expanded={openMenus.companies}
                                    onClick={(e) => { e.preventDefault(); toggleMenu('companies'); }}
                                >
                                    <span className="nav-icon">
                                        <i className="bi bi-building-fill-gear" />
                                    </span>
                                    <span className="nav-text">
                                        Company Management
                                    </span>
                                    <span className="nav-arrow">
                                        <i className="bi bi-chevron-right" />
                                    </span>
                                </a>
                                <ul className={`nav-submenu${openMenus.companies ? ' show' : ''}`}>
                                    <li>
                                        <Link
                                            className={`nav-link${isActive('/ipadmin/companies') ? ' active' : ''}`}
                                            to="/ipadmin/companies"
                                        >
                                            <span className="nav-dot" />
                                            All Companies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`nav-link${isActive('/ipadmin/verification') ? ' active' : ''}`}
                                            to="/ipadmin/verification"
                                        >
                                            <span className="nav-dot" />
                                            Business Verification
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Account Manager */}
                            <li className={`nav-item has-submenu${openMenus.accounts ? ' open' : ''}`}>
                                <a
                                    className={`nav-link${isParentActive(['/ipadmin/accounts']) ? ' active' : ''}`}
                                    href="#"
                                    aria-expanded={openMenus.accounts}
                                    onClick={(e) => { e.preventDefault(); toggleMenu('accounts'); }}
                                >
                                    <span className="nav-icon">
                                        <i className="bi bi-person-fill-gear" />
                                    </span>
                                    <span className="nav-text">
                                        Account Manager
                                    </span>
                                    <span className="nav-arrow">
                                        <i className="bi bi-chevron-right" />
                                    </span>
                                </a>
                                <ul className={`nav-submenu${openMenus.accounts ? ' show' : ''}`}>
                                    <li>
                                        <Link
                                            className={`nav-link${isActive('/ipadmin/accounts') ? ' active' : ''}`}
                                            to="/ipadmin/accounts"
                                        >
                                            <span className="nav-dot" />
                                            Company Admins
                                        </Link>
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="sidebar-footer">
                        <div className="sidebar-account">
                            <a href="#" className="sidebar-account-main">
                                <img src="./assets/images/profile-img.webp" alt="IP Admin" className="sidebar-account-avatar" />
                                <div className="sidebar-account-meta">
                                    <div className="sidebar-account-name">
                                        Tran Minh Khoa
                                    </div>
                                    <div className="sidebar-account-role">
                                        IP Management Board
                                    </div>
                                </div>
                            </a>
                            <div className="sidebar-account-actions">
                                <a href="#" className="sidebar-account-action" title="Settings">
                                    <i className="bi bi-gear" />
                                </a>
                                <button 
                                    onClick={() => { logout(); window.location.href = '/ipadmin/ip-login'; }} 
                                    className="sidebar-account-action sidebar-account-logout" 
                                    title="Logout"
                                >
                                    <i className="bi bi-box-arrow-right" />
                                </button>
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
        </>
    );
}
export default SideBarIPA;