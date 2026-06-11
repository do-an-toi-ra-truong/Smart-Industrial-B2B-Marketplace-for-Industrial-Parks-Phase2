import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

type Role = 'COMPANY_ADMIN' | 'IP_ADMIN' | 'SUPER_ADMIN' | 'SELLER_STAFF' | 'BUYER_STAFF';

interface MenuItem {
    label: string;
    path: string;
    icon: string;
    allowedRoles: Role[];
    badge?: string;
    children?: {
        label: string;
        path: string;
    }[];
}

const menuConfig: MenuItem[] = [
    // ── Company Admin menus ──
    {
        label: 'Dashboard',
        path: '/admin/dashboard',
        icon: 'ph-light ph-squares-four',
        allowedRoles: ['COMPANY_ADMIN'],
    },
    {
        label: 'Users',
        path: '/admin/users',
        icon: 'ph-light ph-users-three',
        allowedRoles: ['COMPANY_ADMIN', 'SUPER_ADMIN', 'IP_ADMIN'],
        children: [
            { label: 'Users List', path: '/admin/users-list' },
            { label: 'Profile', path: '/admin/users-profile' },
        ],
    },
    {
        label: 'Product Management',
        path: '/admin/products',
        icon: 'bi bi-box-seam',
        allowedRoles: ['COMPANY_ADMIN', 'SELLER_STAFF'],
        children: [
            { label: 'Product List', path: '/admin/products-list' },
            { label: 'Add Product', path: '/admin/products-add' },
        ],
    },
    {
        label: 'Order Management',
        path: '/admin/orders',
        icon: 'bi bi-box-seam-fill',
        allowedRoles: ['COMPANY_ADMIN'],
        badge: '4',
        children: [
            { label: "Buyer Staff's Orders", path: '/admin/buyer-staff-orders' },
            { label: "Seller Staff's Orders", path: '/admin/seller-staff-orders' },
            { label: 'Approval Queue', path: '/admin/approval-orders' },
            { label: 'Return Orders', path: '/admin/return-orders' },
        ],
    },

    // ── IP Admin menus ──
    {
        label: 'Dashboard',
        path: '/admin/ip-dashboard',
        icon: 'ph-light ph-squares-four',
        allowedRoles: ['IP_ADMIN'],
    },
    {
        label: 'Company Management',
        path: '/admin/ip-company-mgmt',
        icon: 'bi bi-building-fill-gear',
        allowedRoles: ['IP_ADMIN'],
        children: [
            { label: 'All Companies', path: '/admin/ip-companies' },
            { label: 'Business Verification', path: '/admin/ip-verification' },
        ],
    },
    {
        label: 'Account Manager',
        path: '/admin/ip-account-mgmt',
        icon: 'bi bi-person-fill-gear',
        allowedRoles: ['IP_ADMIN'],
        children: [
            { label: 'Company Admins', path: '/admin/ip-accounts' },
        ],
    },

    // ── Super Admin menus ──
    {
        label: 'Dashboard',
        path: '/admin/sa-dashboard',
        icon: 'ph-light ph-squares-four',
        allowedRoles: ['SUPER_ADMIN'],
    },
    {
        label: 'Account Management',
        path: '/admin/sa-accounts',
        icon: 'ph-light ph-squares-four',
        allowedRoles: ['SUPER_ADMIN'],
    },
    {
        label: 'System Catalog',
        path: '/admin/sa-catalog',
        icon: 'ph-light ph-squares-four',
        allowedRoles: ['SUPER_ADMIN'],
    },
];

// Role display titles (only the role label, not the name — name comes from DB)
const roleTitles: Record<Role, { title: string; chip?: string }> = {
    COMPANY_ADMIN: { title: 'Company Admin' },
    IP_ADMIN: { title: 'IP Management Board' },
    SUPER_ADMIN: { title: 'SIBMIP System Manager', chip: 'Super Admin' },
    SELLER_STAFF: { title: 'Seller Staff' },
    BUYER_STAFF: { title: 'Buyer Staff' },
};

const UnifiedSidebar = () => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const userRole = (user?.role || 'COMPANY_ADMIN') as Role;

    // Real name from database via AuthContext
    const displayName = user ? `${user.firstName} ${user.lastName}` : 'Admin';
    const roleInfo = roleTitles[userRole];

    // Filter menu items based on the current user's role
    const visibleMenus = menuConfig.filter(item => item.allowedRoles.includes(userRole));

    // Track which parent menus are open
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(() => {
        // Auto-open the parent menu whose child path matches the current location
        const initial: Record<string, boolean> = {};
        visibleMenus.forEach(item => {
            if (item.children) {
                const isChildActive = item.children.some(child =>
                    location.pathname === child.path || location.pathname.startsWith(child.path + '/')
                );
                initial[item.path] = isChildActive;
            }
        });
        return initial;
    });

    const toggleMenu = (key: string) => {
        setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const isActive = (path: string) =>
        location.pathname === path || location.pathname.startsWith(path + '/');

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
                            {visibleMenus.map(item => {
                                // Simple link (no children)
                                if (!item.children) {
                                    return (
                                        <li className="nav-item" key={item.path}>
                                            <Link
                                                className={`nav-link${isActive(item.path) ? ' active' : ''}`}
                                                to={item.path}
                                            >
                                                <span className="nav-icon">
                                                    <i className={item.icon} />
                                                </span>
                                                <span className="nav-text">
                                                    {item.label}
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                }

                                // Parent with submenu
                                const isOpen = !!openMenus[item.path];
                                return (
                                    <li
                                        className={`nav-item has-submenu${isOpen ? ' open' : ''}`}
                                        key={item.path}
                                    >
                                        <a
                                            className="nav-link"
                                            href="#"
                                            aria-expanded={isOpen}
                                            onClick={(e) => { e.preventDefault(); toggleMenu(item.path); }}
                                        >
                                            <span className="nav-icon">
                                                <i className={item.icon} />
                                            </span>
                                            <span className="nav-text">
                                                {item.label}
                                            </span>
                                            {item.badge && (
                                                <span className="nav-badge">
                                                    {item.badge}
                                                </span>
                                            )}
                                            <span className="nav-arrow">
                                                <i className="bi bi-chevron-right" />
                                            </span>
                                        </a>
                                        <ul
                                            className={`nav-submenu${isOpen ? ' show' : ''}`}
                                            style={isOpen ? { maxHeight: '500px', overflow: 'visible' } : {}}
                                        >
                                            {item.children.map(child => (
                                                <li key={child.path}>
                                                    <Link
                                                        className={`nav-link${isActive(child.path) ? ' active' : ''}`}
                                                        to={child.path}
                                                    >
                                                        <span className="nav-dot" />
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="sidebar-footer">
                        <div className="sidebar-account">
                            <Link to="/admin/users-profile" className="sidebar-account-main">
                                <img
                                    src="/Admin/assets/images/profile-img.webp"
                                    alt="User"
                                    className="sidebar-account-avatar"
                                />
                                <div className="sidebar-account-meta">
                                    <div className="sidebar-account-name">
                                        {displayName}
                                    </div>
                                    <div className="sidebar-account-role">
                                        {roleInfo.title}
                                    </div>
                                    {roleInfo.chip && (
                                        <span className="sa-role-chip">
                                            <i className="bi bi-shield-fill-check" />
                                            {roleInfo.chip}
                                        </span>
                                    )}
                                </div>
                            </Link>
                            <div className="sidebar-account-actions">
                                <a href="#" className="sidebar-account-action" title="Settings">
                                    <i className="bi bi-gear" />
                                </a>
                                <button
                                    onClick={() => { logout(); window.location.href = '/admin/login'; }}
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
            <div className="sidebar-overlay" />
        </>
    );
};

export default UnifiedSidebar;
