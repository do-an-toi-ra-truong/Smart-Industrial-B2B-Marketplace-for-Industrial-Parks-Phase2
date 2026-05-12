const UserView = () => {
    return (
        <>
            <div className="main-content page-users-view">
                <div className="page-users-view">
                    <h1>
                        Users View
                    </h1>
                    <nav className="breadcrumb">
                        <a href="#" className="breadcrumb-item">
                            Home
                        </a>
                        <a href="users-list.html" className="breadcrumb-item">
                            Users
                        </a>
                        <span className="breadcrumb-item active">
                            John Doe
                        </span>
                    </nav>
                    <div className="uv-hero mb-3">
                        <div className="uv-hero-user">
                            <div className="uv-hero-avatar-wrap">
                                <img src="./assets/images/profile-img.webp" alt="John Doe" className="uv-hero-avatar" />
                                <span className="uv-hero-status" />
                            </div>
                            <div>
                                <h1 className="uv-hero-name">
                                    John Doe
                                </h1>
                                <p className="uv-hero-email">
                                    <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a8c2c7c0c686ccc7cde8cdd0c9c5d8c4cd86cbc7c5">
                                        [email�protected]
                                    </a>
                                </p>
                                <div className="uv-hero-tags">
                                    <span className="uv-pill uv-pill-admin">
                                        <i className="bi bi-shield-check" />
                                        Admin
                                    </span>
                                    <span className="uv-pill">
                                        #USR-001
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="uv-hero-actions">
                            <a href="users-edit.html" className="btn btn-primary btn-sm">
                                <i className="bi bi-pencil me-1" />
                                Edit User
                            </a>
                            <button className="btn btn-outline-danger btn-sm">
                                <i className="bi bi-trash me-1" />
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-8">
                            <div className="card uv-panel mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        Operational Feed
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="uv-feed">
                                        <div className="uv-feed-item">
                                            <span className="uv-feed-dot success" />
                                            <div>
                                                <strong>
                                                    Logged in
                                                </strong>
                                                <p>
                                                    Chrome on Windows • New York, USA
                                                </p>
                                            </div>
                                            <small>
                                                Now
                                            </small>
                                        </div>
                                        <div className="uv-feed-item">
                                            <span className="uv-feed-dot info" />
                                            <div>
                                                <strong>
                                                    Updated profile information
                                                </strong>
                                                <p>
                                                    Changed phone number and location
                                                </p>
                                            </div>
                                            <small>
                                                2h ago
                                            </small>
                                        </div>
                                        <div className="uv-feed-item">
                                            <span className="uv-feed-dot warning" />
                                            <div>
                                                <strong>
                                                    Enabled two-factor authentication
                                                </strong>
                                                <p>
                                                    Using authenticator app
                                                </p>
                                            </div>
                                            <small>
                                                Yesterday
                                            </small>
                                        </div>
                                        <div className="uv-feed-item">
                                            <span className="uv-feed-dot accent" />
                                            <div>
                                                <strong>
                                                    Joined Engineering team
                                                </strong>
                                                <p>
                                                    Added by Chris Thompson
                                                </p>
                                            </div>
                                            <small>
                                                3d ago
                                            </small>
                                        </div>
                                        <div className="uv-feed-item">
                                            <span className="uv-feed-dot success" />
                                            <div>
                                                <strong>
                                                    Completed 5 tasks in Project Alpha
                                                </strong>
                                                <p>
                                                    Sprint 12 milestone reached
                                                </p>
                                            </div>
                                            <small>
                                                5d ago
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card uv-panel">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="card-title mb-0">
                                        Project Coverage
                                    </h5>
                                    <a href="#" className="uv-inline-link">
                                        Open workload
                                    </a>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table align-middle mb-0 uv-project-table">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Project
                                                    </th>
                                                    <th>
                                                        Role
                                                    </th>
                                                    <th>
                                                        Load
                                                    </th>
                                                    <th>
                                                        Progress
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Alpha Platform
                                                    </td>
                                                    <td>
                                                        Owner
                                                    </td>
                                                    <td>
                                                        High
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-success-light text-success">
                                                            78%
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Billing Upgrade
                                                    </td>
                                                    <td>
                                                        Reviewer
                                                    </td>
                                                    <td>
                                                        Medium
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-primary-light text-primary">
                                                            56%
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Mobile Analytics
                                                    </td>
                                                    <td>
                                                        Contributor
                                                    </td>
                                                    <td>
                                                        Low
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-warning-light text-warning">
                                                            33%
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card uv-panel mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        Permission Surface
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="uv-perm-item">
                                        <span>
                                            Dashboard
                                        </span>
                                        <i className="bi bi-check-circle-fill text-success" />
                                    </div>
                                    <div className="uv-perm-item">
                                        <span>
                                            Users
                                        </span>
                                        <i className="bi bi-check-circle-fill text-success" />
                                    </div>
                                    <div className="uv-perm-item">
                                        <span>
                                            Roles
                                        </span>
                                        <i className="bi bi-check-circle-fill text-success" />
                                    </div>
                                    <div className="uv-perm-item">
                                        <span>
                                            Settings
                                        </span>
                                        <i className="bi bi-check-circle-fill text-success" />
                                    </div>
                                    <div className="uv-perm-item">
                                        <span>
                                            Reports
                                        </span>
                                        <i className="bi bi-check-circle-fill text-success" />
                                    </div>
                                </div>
                            </div>
                            <div className="card uv-panel">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        Session Devices
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="uv-session-item">
                                        <div className="uv-session-icon">
                                            <i className="bi bi-laptop" />
                                        </div>
                                        <div className="uv-session-info">
                                            <div className="uv-session-title">
                                                Chrome on Windows
                                                <span className="uv-session-current">
                                                    Current
                                                </span>
                                            </div>
                                            <div className="uv-session-details">
                                                New York • Active now
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uv-session-item">
                                        <div className="uv-session-icon">
                                            <i className="bi bi-phone" />
                                        </div>
                                        <div className="uv-session-info">
                                            <div className="uv-session-title">
                                                Safari on iPhone
                                            </div>
                                            <div className="uv-session-details">
                                                New York • Last active 3h ago
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-danger">
                                            Revoke
                                        </button>
                                    </div>
                                    <div className="uv-session-item">
                                        <div className="uv-session-icon">
                                            <i className="bi bi-tablet" />
                                        </div>
                                        <div className="uv-session-info">
                                            <div className="uv-session-title">
                                                Firefox on macOS
                                            </div>
                                            <div className="uv-session-details">
                                                Boston • Last active 2 days ago
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-outline-danger">
                                            Revoke
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserView