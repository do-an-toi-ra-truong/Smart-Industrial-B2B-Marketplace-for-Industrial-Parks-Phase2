const UserList = () => {
    return (
        <>
            <main className="main">
                <div className="main-content page-users">
                    <div className="page-users users-lab">
                    <h1 className="page-title mb-1">
                        Users List
                    </h1>
                    <nav className="breadcrumb">
                        <a href="#" className="breadcrumb-item">
                        Home
                        </a>
                        <a href="users-list.html" className="breadcrumb-item">
                        Users
                        </a>
                        <span className="breadcrumb-item active">
                        Users List
                        </span>
                    </nav>
                    <div className="users-lab-hero mb-3">
                        <div>
                        <p className="users-page-subtitle">
                            Manage member access, lifecycle status, and team distribution from one control surface.
                        </p>
                        </div>
                        <div className="page-header-actions">
                        <button className="btn btn-outline-secondary btn-sm">
                            <i className="bi bi-download me-1" />
                            Export
                        </button>
                        <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addUserModal">
                            <i className="bi bi-plus-lg me-1" />
                            Add User
                        </button>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-12">
                        <div className="card users-list-card">
                            <div className="users-toolbar">
                            <div className="users-toolbar-left">
                                <div className="users-filter-tabs">
                                <button className="users-filter-tab active" data-filter="all">
                                    All
                                    <span className="users-filter-count">
                                    248
                                    </span>
                                </button>
                                <button className="users-filter-tab" data-filter="active">
                                    Active
                                    <span className="users-filter-count">
                                    186
                                    </span>
                                </button>
                                <button className="users-filter-tab" data-filter="pending">
                                    Pending
                                    <span className="users-filter-count">
                                    24
                                    </span>
                                </button>
                                <button className="users-filter-tab" data-filter="inactive">
                                    Inactive
                                    <span className="users-filter-count">
                                    38
                                    </span>
                                </button>
                                </div>
                            </div>
                            <div className="users-toolbar-right">
                                <div className="users-search">
                                <i className="bi bi-search" />
                                <input type="text" placeholder="Search users, email, role..." autoComplete="off" />
                                </div>
                                <div className="dropdown">
                                <button className="users-toolbar-btn dropdown-toggle" data-bs-toggle="dropdown">
                                    <i className="bi bi-sliders" />
                                    Role
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                    <a className="dropdown-item" href="#">
                                        All Roles
                                    </a>
                                    </li>
                                    <li>
                                    <a className="dropdown-item" href="#">
                                        Admin
                                    </a>
                                    </li>
                                    <li>
                                    <a className="dropdown-item" href="#">
                                        Manager
                                    </a>
                                    </li>
                                    <li>
                                    <a className="dropdown-item" href="#">
                                        User
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="table-responsive users-table-wrap">
                            <table className="table table-hover align-middle mb-0">
                                <thead>
                                <tr>
                                    <th className="users-th-check">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="selectAll" />
                                    </div>
                                    </th>
                                    <th>
                                    User
                                    </th>
                                    <th>
                                    Role
                                    </th>
                                    <th>
                                    Status
                                    </th>
                                    <th>
                                    Last Active
                                    </th>
                                    <th>
                                    Joined
                                    </th>
                                    <th className="users-th-actions">
                                    Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                    </td>
                                    <td>
                                    <div className="users-user">
                                        <div className="users-avatar-wrap">
                                        <img src="/Admin/assets/images/avatar-1.webp" alt="" className="users-avatar" />
                                        <span className="users-avatar-status online" />
                                        </div>
                                        <div className="users-user-info">
                                        <a href="users-view.html" className="users-user-name">
                                            Sarah Johnson
                                        </a>
                                        <span className="users-user-email">
                                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6d1e0c1f0c0543070205031e02032d08150c001d0108430e0200">
                                            [email�protected]
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <span className="users-role admin">
                                        <i className="bi bi-shield-check" />
                                        Admin
                                    </span>
                                    </td>
                                    <td>
                                    <span className="users-status active">
                                        <span className="users-status-dot" />
                                        Active
                                    </span>
                                    </td>
                                    <td className="users-meta">
                                    Just now
                                    </td>
                                    <td className="users-meta">
                                    Jan 15, 2024
                                    </td>
                                    <td>
                                    <div className="users-actions">
                                        <a href="users-view.html" className="users-action-btn" title="View">
                                        <i className="bi bi-eye" />
                                        </a>
                                        <a href="users-edit.html" className="users-action-btn" title="Edit">
                                        <i className="bi bi-pencil" />
                                        </a>
                                        <div className="dropdown">
                                        <button className="users-action-btn dropdown-toggle" data-bs-toggle="dropdown">
                                            <i className="bi bi-three-dots" />
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi bi-envelope me-2" />
                                                Send Email
                                            </a>
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi bi-key me-2" />
                                                Reset Password
                                            </a>
                                            </li>
                                            <li>
                                            <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                            <a className="dropdown-item text-danger" href="#">
                                                <i className="bi bi-trash me-2" />
                                                Delete
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                    </td>
                                    <td>
                                    <div className="users-user">
                                        <div className="users-avatar-wrap">
                                        <img src="/Admin/assets/images/avatar-2.webp" alt="" className="users-avatar" />
                                        <span className="users-avatar-status online" />
                                        </div>
                                        <div className="users-user-info">
                                        <a href="users-view.html" className="users-user-name">
                                            Michael Chen
                                        </a>
                                        <span className="users-user-email">
                                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a6cb88c5cec3c8e6c3dec7cbd6cac388c5c9cb">
                                            [email�protected]
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <span className="users-role manager">
                                        <i className="bi bi-person-gear" />
                                        Manager
                                    </span>
                                    </td>
                                    <td>
                                    <span className="users-status active">
                                        <span className="users-status-dot" />
                                        Active
                                    </span>
                                    </td>
                                    <td className="users-meta">
                                    5 min ago
                                    </td>
                                    <td className="users-meta">
                                    Feb 3, 2024
                                    </td>
                                    <td>
                                    <div className="users-actions">
                                        <a href="users-view.html" className="users-action-btn" title="View">
                                        <i className="bi bi-eye" />
                                        </a>
                                        <a href="users-edit.html" className="users-action-btn" title="Edit">
                                        <i className="bi bi-pencil" />
                                        </a>
                                        <div className="dropdown">
                                        <button className="users-action-btn dropdown-toggle" data-bs-toggle="dropdown">
                                            <i className="bi bi-three-dots" />
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi bi-envelope me-2" />
                                                Send Email
                                            </a>
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi bi-key me-2" />
                                                Reset Password
                                            </a>
                                            </li>
                                            <li>
                                            <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                            <a className="dropdown-item text-danger" href="#">
                                                <i className="bi bi-trash me-2" />
                                                Delete
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                    </td>
                                    <td>
                                    <div className="users-user">
                                        <div className="users-avatar-wrap">
                                        <img src="/Admin/assets/images/avatar-3.webp" alt="" className="users-avatar" />
                                        <span className="users-avatar-status away" />
                                        </div>
                                        <div className="users-user-info">
                                        <a href="users-view.html" className="users-user-name">
                                            Emily Rodriguez
                                        </a>
                                        <span className="users-user-email">
                                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="61040c080d184f13210419000c110d044f020e0c">
                                            [email�protected]
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <span className="users-role user">
                                        <i className="bi bi-person" />
                                        User
                                    </span>
                                    </td>
                                    <td>
                                    <span className="users-status active">
                                        <span className="users-status-dot" />
                                        Active
                                    </span>
                                    </td>
                                    <td className="users-meta">
                                    2 hours ago
                                    </td>
                                    <td className="users-meta">
                                    Mar 12, 2024
                                    </td>
                                    <td>
                                    <div className="users-actions">
                                        <a href="users-view.html" className="users-action-btn" title="View">
                                        <i className="bi bi-eye" />
                                        </a>
                                        <a href="users-edit.html" className="users-action-btn" title="Edit">
                                        <i className="bi bi-pencil" />
                                        </a>
                                        <div className="dropdown">
                                        <button className="users-action-btn dropdown-toggle" data-bs-toggle="dropdown">
                                            <i className="bi bi-three-dots" />
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi bi-envelope me-2" />
                                                Send Email
                                            </a>
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi bi-key me-2" />
                                                Reset Password
                                            </a>
                                            </li>
                                            <li>
                                            <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                            <a className="dropdown-item text-danger" href="#">
                                                <i className="bi bi-trash me-2" />
                                                Delete
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                    </td>
                                    <td>
                                    <div className="users-user">
                                        <div className="users-avatar-wrap">
                                        <img src="/Admin/assets/images/avatar-4.webp" alt="" className="users-avatar" />
                                        <span className="users-avatar-status offline" />
                                        </div>
                                        <div className="users-user-info">
                                        <a href="users-view.html" className="users-user-name">
                                            David Kim
                                        </a>
                                        <span className="users-user-email">
                                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0b6f256062664b6e736a667b676e25686466">
                                            [email�protected]
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <span className="users-role user">
                                        <i className="bi bi-person" />
                                        User
                                    </span>
                                    </td>
                                    <td>
                                    <span className="users-status inactive">
                                        <span className="users-status-dot" />
                                        Inactive
                                    </span>
                                    </td>
                                    <td className="users-meta">
                                    3 days ago
                                    </td>
                                    <td className="users-meta">
                                    Jan 28, 2024
                                    </td>
                                    <td>
                                    <div className="users-actions">
                                        <a href="users-view.html" className="users-action-btn" title="View">
                                        <i className="bi bi-eye" />
                                        </a>
                                        <a href="users-edit.html" className="users-action-btn" title="Edit">
                                        <i className="bi bi-pencil" />
                                        </a>
                                        <div className="dropdown">
                                        <button className="users-action-btn dropdown-toggle" data-bs-toggle="dropdown">
                                            <i className="bi bi-three-dots" />
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi bi-envelope me-2" />
                                                Send Email
                                            </a>
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi bi-key me-2" />
                                                Reset Password
                                            </a>
                                            </li>
                                            <li>
                                            <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                            <a className="dropdown-item text-danger" href="#">
                                                <i className="bi bi-trash me-2" />
                                                Delete
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                    </td>
                                    <td>
                                    <div className="users-user">
                                        <div className="users-avatar-wrap">
                                        <img src="/Admin/assets/images/avatar-8.webp" alt="" className="users-avatar" />
                                        <span className="users-avatar-status online" />
                                        </div>
                                        <div className="users-user-info">
                                        <a href="users-view.html" className="users-user-name">
                                            Chris Thompson
                                        </a>
                                        <span className="users-user-email">
                                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="34571a405c5b5944475b5a74514c55594458511a575b59">
                                            [email�protected]
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <span className="users-role admin">
                                        <i className="bi bi-shield-check" />
                                        Admin
                                    </span>
                                    </td>
                                    <td>
                                    <span className="users-status active">
                                        <span className="users-status-dot" />
                                        Active
                                    </span>
                                    </td>
                                    <td className="users-meta">
                                    15 min ago
                                    </td>
                                    <td className="users-meta">
                                    Nov 20, 2023
                                    </td>
                                    <td>
                                    <div className="users-actions">
                                        <a href="users-view.html" className="users-action-btn" title="View">
                                        <i className="bi bi-eye" />
                                        </a>
                                        <a href="users-edit.html" className="users-action-btn" title="Edit">
                                        <i className="bi bi-pencil" />
                                        </a>
                                        <div className="dropdown">
                                        <button className="users-action-btn dropdown-toggle" data-bs-toggle="dropdown">
                                            <i className="bi bi-three-dots" />
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi bi-envelope me-2" />
                                                Send Email
                                            </a>
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi bi-key me-2" />
                                                Reset Password
                                            </a>
                                            </li>
                                            <li>
                                            <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                            <a className="dropdown-item text-danger" href="#">
                                                <i className="bi bi-trash me-2" />
                                                Delete
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            <div className="users-pagination">
                            <div className="users-pagination-info">
                                Showing
                                <strong>
                                1-8
                                </strong>
                                of
                                <strong>
                                248
                                </strong>
                                users
                            </div>
                            <nav>
                                <ul className="pagination pagination-sm mb-0">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#">
                                    <i className="bi bi-chevron-left" />
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">
                                    1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                    2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                    3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                    ...
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                    31
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                    <i className="bi bi-chevron-right" />
                                    </a>
                                </li>
                                </ul>
                            </nav>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="modal fade" id="addUserModal" tabIndex={-1}>
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title">
                                Add New User
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                            </div>
                            <div className="modal-body">
                            <form>
                                <div className="row g-3">
                                <div className="col-sm-6">
                                    <label className="form-label">
                                    First Name
                                    </label>
                                    <input type="text" className="form-control" placeholder="Enter first name" />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">
                                    Last Name
                                    </label>
                                    <input type="text" className="form-control" placeholder="Enter last name" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">
                                    Email Address
                                    </label>
                                    <input type="email" className="form-control" placeholder="Enter email address" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">
                                    Role
                                    </label>
                                    <select className="form-select">
                                    <option value="">
                                        Select role...
                                    </option>
                                    <option value="admin">
                                        Admin
                                    </option>
                                    <option value="manager">
                                        Manager
                                    </option>
                                    <option value="user">
                                        User
                                    </option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">
                                    Password
                                    </label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">
                                    Confirm Password
                                    </label>
                                    <input type="password" className="form-control" placeholder="Confirm password" />
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="sendInvite" checked={true} />
                                    <label className="form-check-label" htmlFor="sendInvite">
                                        Send welcome email with login details
                                    </label>
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary">
                                Add User
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Footer */}
                <footer className="footer">
                    <div className="footer-content">
                    <div className="footer-links">
                    </div>
                    <div className="footer-credits">
                        <div className="footer-copyright">
                        2026
                        <a href="#">
                            EIU
                        </a>
                        </div>
                        <div className="footer-copyright">
                        <div className="credits">
                            {/* All the links in the footer should remain intact. */}
                            {/* You can delete the links only if you purchased the pro version. */}
                            {/* Licensing information: https://bootstrapmade.com/license/ */}
                            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flex-admin-bootstrap-template/ */}
                            Designed by
                            <a href="https://bootstrapmade.com/">
                            ProjectAdin
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>
                </main>
        </>
    )
}
export default UserList