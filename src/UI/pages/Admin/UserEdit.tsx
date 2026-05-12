const UserEdit = () => {
    return (
        <>
            <div className="main-content page-users-edit">
                <div className="page-users-edit">
                    <h1>
                        User Edit
                    </h1>
                    <nav className="breadcrumb">
                        <a href="#" className="breadcrumb-item">
                            Home
                        </a>
                        <a href="users-list.html" className="breadcrumb-item">
                            Users
                        </a>
                        <span className="breadcrumb-item active">
                            Users Edit
                        </span>
                    </nav>
                    <div className="ue-shell-head mb-3">
                        <div>
                            <h1 className="page-title mb-1">
                                User Edit Workspace
                            </h1>
                            <p className="ue-shell-subtitle">
                                Adjust identity, role scope, and security settings before publishing updates.
                            </p>
                        </div>
                        <div className="page-header-actions">
                            <a href="users-view.html" className="btn btn-outline-secondary btn-sm">
                                <i className="bi bi-eye me-1" />
                                View Profile
                            </a>
                            <button type="submit" form="userEditForm" className="btn btn-primary btn-sm">
                                <i className="bi bi-check-lg me-1" />
                                Save Changes
                            </button>
                        </div>
                    </div>
                    <form id="userEditForm">
                        <div className="row g-3">
                            <div className="col-xl-4">
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Identity Snapshot
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="ue-shell-user">
                                            <div className="ue-avatar-upload">
                                                <img src="/Admin/assets/images/profile-img.webp" alt="John Doe" className="ue-avatar-preview" />
                                                <div className="ue-avatar-overlay">
                                                    <i className="bi bi-camera" />
                                                    <span>
                                                        Change Photo
                                                    </span>
                                                </div>
                                                <input type="file" className="ue-avatar-input" accept="image/*" />
                                            </div>
                                            <div className="ue-shell-user-meta">
                                                <strong>
                                                    John Doe
                                                </strong>
                                                <span>
                                                    <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="214b4e494f0f454e44614459404c514d440f424e4c">
                                                        [email�protected]
                                                    </a>
                                                </span>
                                                <span className="ue-shell-chip">
                                                    #USR-001
                                                </span>
                                            </div>
                                        </div>
                                        <p className="ue-avatar-hint mb-0">
                                            JPG, PNG or WEBP. Max 2MB.
                                        </p>
                                    </div>
                                </div>
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Status & Security
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Status
                                            </label>
                                            <select className="form-select" defaultValue="active">
                                                <option value="active">
                                                    Active
                                                </option>
                                                <option value="inactive">
                                                    Inactive
                                                </option>
                                                <option value="suspended">
                                                    Suspended
                                                </option>
                                            </select>
                                        </div>
                                        <div className="ue-toggles mb-3">
                                            <div className="ue-toggle-item">
                                                <div className="ue-toggle-info">
                                                    <span className="ue-toggle-label">
                                                        Email Verified
                                                    </span>
                                                    <span className="ue-toggle-desc">
                                                        User has verified their email address
                                                    </span>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="emailVerified" defaultChecked />
                                                </div>
                                            </div>
                                            <div className="ue-toggle-item">
                                                <div className="ue-toggle-info">
                                                    <span className="ue-toggle-label">
                                                        Two-Factor Auth
                                                    </span>
                                                    <span className="ue-toggle-desc">
                                                        Require 2FA on login
                                                    </span>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="twoFactor" defaultChecked />
                                                </div>
                                            </div>
                                            <div className="ue-toggle-item">
                                                <div className="ue-toggle-info">
                                                    <span className="ue-toggle-label">
                                                        Force Password Change
                                                    </span>
                                                    <span className="ue-toggle-desc">
                                                        Require new password on next login
                                                    </span>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="forcePasswordChange" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ue-shell-security-note">
                                            <i className="bi bi-shield-lock" />
                                            <span>
                                                Last password change: 22 days ago
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card ue-shell-card ue-danger-card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            <i className="bi bi-exclamation-triangle me-1" />
                                            Danger Zone
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="ue-danger-text">
                                            Once you delete a user, there is no going back. Please be certain.
                                        </p>
                                        <button type="button" className="btn btn-outline-danger w-100" data-bs-toggle="modal" data-bs-target="#deleteUserModal">
                                            <i className="bi bi-trash me-1" />
                                            Delete User
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Personal Information
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label required">
                                                    First Name
                                                </label>
                                                <input type="text" className="form-control" value="John" required={true} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label required">
                                                    Last Name
                                                </label>
                                                <input type="text" className="form-control" value="Doe" required={true} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label required">
                                                    Email Address
                                                </label>
                                                <input type="email" className="form-control" value="john.doe@example.com" required={true} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Phone Number
                                                </label>
                                                <input type="tel" className="form-control" value="+1 (555) 123-4567" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Date of Birth
                                                </label>
                                                <input type="date" className="form-control" value="1990-03-15" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Gender
                                                </label>
                                                <select className="form-select" defaultValue="male">
                                                    <option value="">
                                                        Select...
                                                    </option>
                                                    <option value="male" >
                                                        Male
                                                    </option>
                                                    <option value="female">
                                                        Female
                                                    </option>
                                                    <option value="other">
                                                        Other
                                                    </option>
                                                    <option value="prefer-not">
                                                        Prefer not to say
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Work Information
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Department
                                                </label>
                                                <select className="form-select" defaultValue="engineering">
                                                    <option value="">
                                                        Select department...
                                                    </option>
                                                    <option value="engineering">
                                                        Engineering
                                                    </option>
                                                    <option value="design">
                                                        Design
                                                    </option>
                                                    <option value="marketing">
                                                        Marketing
                                                    </option>
                                                    <option value="sales">
                                                        Sales
                                                    </option>
                                                    <option value="support">
                                                        Support
                                                    </option>
                                                    <option value="hr">
                                                        Human Resources
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Job Title
                                                </label>
                                                <input type="text" className="form-control" value="Senior Developer" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Manager
                                                </label>
                                                <select className="form-select" defaultValue="2">
                                                    <option value="">
                                                        Select manager...
                                                    </option>
                                                    <option value="2">
                                                        Chris Thompson
                                                    </option>
                                                    <option value="3">
                                                        Michael Chen
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Office Location
                                                </label>
                                                <select className="form-select" defaultValue="ny">
                                                    <option value="">
                                                        Select location...
                                                    </option>
                                                    <option value="ny">
                                                        New York, USA
                                                    </option>
                                                    <option value="sf">
                                                        San Francisco, USA
                                                    </option>
                                                    <option value="london">
                                                        London, UK
                                                    </option>
                                                    <option value="remote">
                                                        Remote
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Employee ID
                                                </label>
                                                <input type="text" className="form-control" value="EMP-001" readOnly={true} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Start Date
                                                </label>
                                                <input type="date" className="form-control" value="2024-01-15" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Role & Permissions
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label required">
                                                    Role
                                                </label>
                                                <select className="form-select" required={true} defaultValue="admin">
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
                                                <div className="form-text">
                                                    Admins have full access to all features.
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Teams
                                                </label>
                                                <select className="form-select" multiple={true} size={4} defaultValue={["engineering", "product", "design", "leadership"]}>
                                                    <option value="engineering" >
                                                        Engineering
                                                    </option>
                                                    <option value="product" >
                                                        Product
                                                    </option>
                                                    <option value="design" >
                                                        Design
                                                    </option>
                                                    <option value="leadership">
                                                        Leadership
                                                    </option>
                                                    <option value="marketing">
                                                        Marketing
                                                    </option>
                                                    <option value="sales">
                                                        Sales
                                                    </option>
                                                </select>
                                                <div className="form-text">
                                                    Hold Ctrl/Cmd to select multiple.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            Change Password
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="ue-password-note">
                                            <i className="bi bi-info-circle" />
                                            <span>
                                                Leave blank to keep the current password.
                                            </span>
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    New Password
                                                </label>
                                                <input type="password" className="form-control" placeholder="Enter new password" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Confirm Password
                                                </label>
                                                <input type="password" className="form-control" placeholder="Confirm new password" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ue-form-actions">
                                    <a href="users.html" className="btn btn-secondary">
                                        Cancel
                                    </a>
                                    <button type="submit" className="btn btn-primary">
                                        <i className="bi bi-check-lg me-1" />
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Delete User Modal */}
                <div className="modal fade" id="deleteUserModal" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body text-center p-4">
                                <div className="ue-delete-icon">
                                    <i className="bi bi-exclamation-triangle" />
                                </div>
                                <h5 className="mb-2">
                                    Delete User
                                </h5>
                                <p className="text-muted mb-4">
                                    Are you sure you want to delete
                                    <strong>
                                        John Doe
                                    </strong>
                                    ? This action cannot be undone.
                                </p>
                                <div className="d-flex justify-content-center gap-2">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                        Cancel
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                        Delete User
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
                        <a href="#">
                            Docs
                        </a>
                        <a href="#">
                            Privacy
                        </a>
                        <a href="#">
                            Security
                        </a>
                        <a href="#">
                            Support
                        </a>
                    </div>
                    <div className="footer-credits">
                        <div className="footer-copyright">
                            � 2026
                            <a href="#">
                                NiceAdmin
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
                                    BootstrapMade
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default UserEdit