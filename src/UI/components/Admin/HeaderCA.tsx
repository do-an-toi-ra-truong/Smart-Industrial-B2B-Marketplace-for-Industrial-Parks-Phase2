const HeaderCA = () => {
  return (
    <>
        <header className="header">
            <div className="header-left">
                <button className="sidebar-toggle" title="Toggle Sidebar" aria-label="Toggle sidebar">
                <span className="menu-lines" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </span>
                </button>
                <a href="index.html" className="header-brand" aria-label="NiceAdmin home">
                <span className="header-logo">
                    <img src="/Admin/assets/images/logo.webp" alt="NiceAdmin" />
                </span>
                <span className="header-context">
                    <strong className="header-context-title">
                    NiceAdmin
                    </strong>
                </span>
                </a>
            </div>
            <div className="header-search-wrap">
                <form className="search-form" action="search-results.html" method="GET">
                <i className="bi bi-search search-icon" />
                <input type="search" name="q" placeholder="Search projects, invoices, users..." autoComplete="off" />
                <kbd className="search-shortcut">
                    /
                </kbd>
                </form>
            </div>
            <div className="header-right">
                <div className="header-actions-desktop">
                <div className="header-action-wrap dropdown lang-dropdown">
                    <button className="header-action dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" title="Language">
                    <img src="/Admin/assets/images/us.png" alt="EN" className="lang-flag" />
                    <span className="lang-code">
                        EN
                    </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end lang-menu">
                    <div className="menu-title">
                        Select Language
                    </div>
                    <a className="lang-item active" href="#">
                        <img src="/Admin/assets/images/us.png" alt="EN" className="lang-flag" />
                        <span className="lang-copy">
                        <span className="lang-name">
                            English
                        </span>
                        <span className="lang-meta">
                            United States
                        </span>
                        </span>
                        <i className="bi bi-check2" />
                    </a>
                    <a className="lang-item" href="#">
                        <img src="/Admin/assets/images/fr.png" alt="FR" className="lang-flag" />
                        <span className="lang-copy">
                        <span className="lang-name">
                            Français
                        </span>
                        <span className="lang-meta">
                            France
                        </span>
                        </span>
                    </a>
                    <a className="lang-item" href="#">
                        <img src="/Admin/assets/images/de.png" alt="DE" className="lang-flag" />
                        <span className="lang-copy">
                        <span className="lang-name">
                            Deutsch
                        </span>
                        <span className="lang-meta">
                            Germany
                        </span>
                        </span>
                    </a>
                    <a className="lang-item" href="#">
                        <img src="/Admin/assets/images/es.png" alt="ES" className="lang-flag" />
                        <span className="lang-copy">
                        <span className="lang-name">
                            Español
                        </span>
                        <span className="lang-meta">
                            Spain
                        </span>
                        </span>
                    </a>
                    </div>
                </div>
                <div className="header-action-wrap dropdown quickaccess-dropdown">
                    <button className="header-action dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" title="Quick Access">
                    <i className="ph-light ph-squares-four" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end quickaccess-menu">
                    <div className="menu-title">
                        Quick Access
                    </div>
                    <a href="dashboard-projects.html" className="quickaccess-featured">
                        <span className="quickaccess-featured-icon">
                        <i className="bi bi-lightning-charge" />
                        </span>
                        <span className="quickaccess-featured-copy">
                        <strong>
                            Create New Workspace
                        </strong>
                        <small>
                            Launch projects, assign team, set timeline
                        </small>
                        </span>
                    </a>
                    <div className="quickaccess-grid">
                        <a href="apps-calendar.html" className="quickaccess-item">
                        <i className="bi bi-calendar3" />
                        <span>
                            Calendar
                        </span>
                        <small>
                            Events
                        </small>
                        </a>
                        <a href="apps-kanban.html" className="quickaccess-item">
                        <i className="bi bi-kanban" />
                        <span>
                            Kanban
                        </span>
                        <small>
                            Boards
                        </small>
                        </a>
                        <a href="apps-chat.html" className="quickaccess-item">
                        <i className="bi bi-chat-dots" />
                        <span>
                            Chat
                        </span>
                        <small>
                            Inbox
                        </small>
                        </a>
                        <a href="apps-email.html" className="quickaccess-item">
                        <i className="bi bi-envelope" />
                        <span>
                            Email
                        </span>
                        <small>
                            Campaigns
                        </small>
                        </a>
                        <a href="apps-file-manager.html" className="quickaccess-item">
                        <i className="bi bi-folder2-open" />
                        <span>
                            Files
                        </span>
                        <small>
                            Assets
                        </small>
                        </a>
                        <a href="apps-support.html" className="quickaccess-item">
                        <i className="bi bi-headset" />
                        <span>
                            Support
                        </span>
                        <small>
                            Tickets
                        </small>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="header-action-wrap dropdown notification-dropdown">
                    <button className="header-action dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" title="Notifications">
                    <i className="bi bi-bell" />
                    <span className="header-badge">
                        4
                    </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end notification-menu">
                    <div className="notification-header">
                        <div>
                        <h6>
                            Notifications
                        </h6>
                        <span>
                            4 unread
                        </span>
                        </div>
                        <a href="#" data-notification-action="mark-all-read">
                        Mark all read
                        </a>
                    </div>
                    <div className="notification-summary">
                        <a href="activity.html" className="notification-summary-item">
                        <strong>
                            7
                        </strong>
                        <span>
                            Today
                        </span>
                        </a>
                        <a href="notifications.html" className="notification-summary-item">
                        <strong>
                            23
                        </strong>
                        <span>
                            This week
                        </span>
                        </a>
                        <a href="roles.html" className="notification-summary-item">
                        <strong>
                            3
                        </strong>
                        <span>
                            Approvals
                        </span>
                        </a>
                    </div>
                    <div className="notification-list">
                        <div className="notification-item unread">
                        <span className="notification-dot" />
                        <div className="notification-icon info">
                            <i className="bi bi-rocket-takeoff" />
                        </div>
                        <div className="notification-content">
                            <div className="notification-title">
                            Deploy ready
                            </div>
                            <div className="notification-text">
                            Sprint release passed QA validation.
                            </div>
                            <span className="notification-time">
                            5m ago
                            </span>
                        </div>
                        </div>
                        <div className="notification-item unread">
                        <span className="notification-dot" />
                        <img src="/Admin/assets/images/avatar-2.webp" alt="" className="notification-avatar" />
                        <div className="notification-content">
                            <div className="notification-title">
                            Mia sent feedback
                            </div>
                            <div className="notification-text">
                            Please review updated dashboard spacing.
                            </div>
                            <span className="notification-time">
                            21m ago
                            </span>
                        </div>
                        </div>
                        <div className="notification-item unread">
                        <span className="notification-dot" />
                        <div className="notification-icon warning">
                            <i className="bi bi-exclamation-triangle" />
                        </div>
                        <div className="notification-content">
                            <div className="notification-title">
                            Storage alert
                            </div>
                            <div className="notification-text">
                            Media bucket reached 81% usage.
                            </div>
                            <span className="notification-time">
                            58m ago
                            </span>
                        </div>
                        </div>
                        <div className="notification-item unread">
                        <span className="notification-dot" />
                        <div className="notification-icon success">
                            <i className="bi bi-check2-circle" />
                        </div>
                        <div className="notification-content">
                            <div className="notification-title">
                            Payment received
                            </div>
                            <div className="notification-text">
                            Invoice #INV-3921 settled successfully.
                            </div>
                            <span className="notification-time">
                            2h ago
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="notification-footer">
                        <a href="notifications.html">
                        Open notification center
                        <i className="bi bi-arrow-right" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="header-action-wrap dropdown messages-dropdown">
                    <button className="header-action dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" title="Messages">
                    <i className="bi bi-chat-left-text" />
                    <span className="header-badge">
                        5
                    </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end messages-menu">
                    <div className="notification-header">
                        <div>
                        <h6>
                            Messages
                        </h6>
                        <span>
                            5 unread
                        </span>
                        </div>
                        <a href="apps-chat.html">
                        Open chat
                        </a>
                    </div>
                    <div className="message-channels">
                        <a href="apps-chat.html" className="message-channel active">
                        Direct
                        </a>
                        <a href="apps-chat.html" className="message-channel">
                        Team
                        </a>
                        <a href="apps-chat.html" className="message-channel">
                        Clients
                        </a>
                    </div>
                    <div className="notification-list">
                        <a href="apps-chat.html" className="notification-item unread">
                        <span className="notification-dot" />
                        <img src="/Admin/assets/images/avatar-2.webp" alt="" className="notification-avatar" />
                        <div className="notification-content">
                            <div className="notification-title">
                            Mia Rodriguez
                            </div>
                            <div className="notification-text">
                            Can you review the analytics wireframe today?
                            </div>
                            <span className="notification-time">
                            2m ago
                            </span>
                        </div>
                        </a>
                        <a href="apps-chat.html" className="notification-item unread">
                        <span className="notification-dot" />
                        <img src="/Admin/assets/images/avatar-3.webp" alt="" className="notification-avatar" />
                        <div className="notification-content">
                            <div className="notification-title">
                            Dev Channel
                            </div>
                            <div className="notification-text">
                            Build passed. Ready for production deploy.
                            </div>
                            <span className="notification-time">
                            12m ago
                            </span>
                        </div>
                        </a>
                        <a href="apps-chat.html" className="notification-item unread">
                        <span className="notification-dot" />
                        <img src="/Admin/assets/images/avatar-4.webp" alt="" className="notification-avatar" />
                        <div className="notification-content">
                            <div className="notification-title">
                            Sarah Kim
                            </div>
                            <div className="notification-text">
                            Shared file: Q1-forecast-report.pdf
                            </div>
                            <span className="notification-time">
                            35m ago
                            </span>
                        </div>
                        </a>
                    </div>
                    <div className="notification-footer">
                        <a href="apps-chat.html">
                        View all messages
                        <i className="bi bi-arrow-right" />
                        </a>
                    </div>
                    </div>
                </div>
                <button className="header-action theme-toggle" title="Toggle Theme">
                    <i className="ph-light ph-moon-stars theme-icon-dark" />
                    <i className="ph-light ph-sun theme-icon-light" />
                </button>
                <div className="header-action-wrap dropdown user-dropdown">
                    <button className="dropdown-toggle user-trigger" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/Admin/assets/images/profile-img.webp" alt="User" className="user-avatar" />
                    <div className="user-brief">
                        <span className="user-name">
                        John Doe
                        </span>
                        <span className="user-role">
                        Product Admin
                        </span>
                    </div>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end user-menu">
                    <div className="user-menu-header">
                        <img src="/Admin/assets/images/profile-img.webp" alt="User" className="user-menu-avatar" />
                        <div className="user-menu-info">
                        <div className="user-menu-name">
                            John Doe
                        </div>
                        <div className="user-menu-email">
                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1e74717670307a717b5e7b667f736e727b307d7173">
                            [email�protected]
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="user-menu-body">
                        <a className="user-menu-item" href="profile.html">
                        <i className="bi bi-person" />
                        <span>
                            My Profile
                        </span>
                        </a>
                        <a className="user-menu-item" href="settings.html">
                        <i className="bi bi-sliders" />
                        <span>
                            Preferences
                        </span>
                        </a>
                        <a className="user-menu-item" href="activity.html">
                        <i className="bi bi-activity" />
                        <span>
                            Activity Log
                        </span>
                        </a>
                        <a className="user-menu-item" href="invoice-list.html">
                        <i className="bi bi-credit-card" />
                        <span>
                            Billing
                        </span>
                        </a>
                    </div>
                    <div className="user-menu-footer">
                        <a className="user-menu-logout" href="auth-login.html">
                        <i className="bi bi-box-arrow-right" />
                        <span>
                            Sign Out
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="header-actions-mobile">
                <button className="header-action search-toggle" title="Search">
                    <i className="bi bi-search" />
                </button>
                <button className="header-action mobile-menu-toggle" title="More">
                    <i className="bi bi-three-dots" />
                </button>
                </div>
            </div>
            </header>
    </>
  )
}
export default HeaderCA;