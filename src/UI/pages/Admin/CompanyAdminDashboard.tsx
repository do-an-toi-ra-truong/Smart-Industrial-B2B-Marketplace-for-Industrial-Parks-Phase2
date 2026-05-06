const CompanyAdminDashboard = () => {
    return (
        <>
            <main className="main">
                <div className="main-content page-dashboard">
                    <div className="page-dashboard nd-dashboard">
                    <section className="nd-topbar">
                        <div>
                        <h1 className="nd-title">
                            Company Dashboard
                        </h1>
                        <p className="nd-subtitle">
                            Overview of marketplace activity and company administration.
                        </p>
                        </div>
                    </section>
                    <section className="row g-3 mb-3 nd-kpi-rail">
                        <div className="col-xl-3 col-md-6">
                        <article className="nd-kpi-card nd-kpi-revenue">
                            <span className="nd-kpi-icon">
                            <i className="bi bi-graph-up-arrow" />
                            </span>
                            <span className="nd-kpi-label">
                            RFQ Win Rate
                            </span>
                            <strong className="nd-kpi-value">
                            67%
                            </strong>
                            <span className="nd-kpi-trend down">
                            Success rate this quarter
                            </span>
                        </article>
                        </div>
                        <div className="col-xl-3 col-md-6">
                        <article className="nd-kpi-card nd-kpi-leads">
                            <span className="nd-kpi-icon">
                            <i className="bi bi-send-check" />
                            </span>
                            <span className="nd-kpi-label">
                            Submitted Quotations
                            </span>
                            <strong className="nd-kpi-value">
                            24
                            </strong>
                            <span className="nd-kpi-trend up">
                            Total quotations this month
                            </span>
                        </article>
                        </div>
                        <div className="col-xl-3 col-md-6">
                        <article className="nd-kpi-card nd-kpi-retention">
                            <span className="nd-kpi-icon">
                            <i className="bi bi-file-earmark-text" />
                            </span>
                            <span className="nd-kpi-label">
                            Active RFQs Participated
                            </span>
                            <strong className="nd-kpi-value">
                            18
                            </strong>
                            <span className="nd-kpi-trend up">
                            Currently active in marketplace
                            </span>
                        </article>
                        </div>
                        <div className="col-xl-3 col-md-6">
                        <article className="nd-kpi-card nd-kpi-cycle">
                            <span className="nd-kpi-icon">
                            <i className="bi bi-stopwatch" />
                            </span>
                            <span className="nd-kpi-label">
                            Expiring Documents
                            </span>
                            <strong className="nd-kpi-value">
                            2
                            </strong>
                            <span className="nd-kpi-trend up">
                            Compliance docs need attention
                            </span>
                        </article>
                        </div>
                    </section>
                    <section className="row g-3 mb-3">
                        <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                            <h5 className="card-title">
                                RFQ Participation Trend
                            </h5>
                            <div className="card-actions">
                                <select className="form-select form-select-sm" style={{ 'width': 'auto' }} id="financePeriod">
                                <option value="7">
                                    Last 7 days
                                </option>
                                <option value="30" selected={true}>
                                    Last 30 days
                                </option>
                                <option value="90">
                                    Last 90 days
                                </option>
                                <option value="365">
                                    Last year
                                </option>
                                </select>
                            </div>
                            </div>
                            <div className="card-body">
                            <div className="chart-container" id="revenueExpensesChart" />
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6">
                        <div className="card mb-3">
                            <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="card-title mb-0">
                                Recent RFQ Activity
                            </h5>
                            </div>
                            <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table align-middle mb-0 nd-transaction-table">
                                <thead>
                                    <tr>
                                    <th>
                                        RFQ ID
                                    </th>
                                    <th>
                                        Role
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                    <th>
                                        Deadline
                                    </th>
                                    <th>
                                        Action
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>
                                        RFQ-2026-0342
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-primary">
                                        Supplier
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-info">
                                        Open
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-15
                                    </td>
                                    <td>
                                        <button className="badge bg-info-light text-info">
                                        <i className="bi bi-eye" />
                                        <span>
                                            View
                                        </span>
                                        </button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        RFQ-2026-0338
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-primary">
                                        Supplier
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-warning">
                                        In Progess
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-12
                                    </td>
                                    <td>
                                        <button className="badge bg-info-light text-info">
                                        <i className="bi bi-eye" />
                                        <span>
                                            View
                                        </span>
                                        </button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        RFQ-2026-0335
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-primary">
                                        Buyer
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-info">
                                        Open
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-15
                                    </td>
                                    <td>
                                        <button className="badge bg-info-light text-info">
                                        <i className="bi bi-eye" />
                                        <span>
                                            View
                                        </span>
                                        </button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        RFQ-2026-0331
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-primary">
                                        Supplier
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-success">
                                        Won
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-15
                                    </td>
                                    <td>
                                        <button className="badge bg-info-light text-info">
                                        <i className="bi bi-eye" />
                                        <span>
                                            View
                                        </span>
                                        </button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        RFQ-2026-0342
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-primary">
                                        Supplier
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-secondary">
                                        Closed
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-15
                                    </td>
                                    <td>
                                        <button className="badge bg-info-light text-info">
                                        <i className="bi bi-eye" />
                                        <span>
                                            View
                                        </span>
                                        </button>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                            <h5 className="card-title">
                                Internal User Overview
                            </h5>
                            </div>
                            <div className="card-body">
                            <div className="device-list">
                                <div className="device-item">
                                <div className="device-icon device-icon-wi-he-phat device-icon-text-info-phat">
                                    <i className="bi bi-people" />
                                </div>
                                <div className="device-info">
                                    <div className="device-name">
                                    Total Users
                                    </div>
                                </div>
                                <div className="device-stats">
                                    <span className="device-percent-phat">
                                    24
                                    </span>
                                </div>
                                </div>
                                <div className="device-item">
                                <div className="device-icon device-icon-wi-he-phat device-icon-text-success-phat">
                                    <i className="bi bi-person-check" />
                                </div>
                                <div className="device-info">
                                    <div className="device-name">
                                    Active Users
                                    </div>
                                </div>
                                <div className="device-stats">
                                    <span className="device-percent-phat">
                                    21
                                    </span>
                                </div>
                                </div>
                                <div className="device-item">
                                <div className="device-icon device-icon-wi-he-phat device-icon-text-warning-phat">
                                    <i className="bi bi-person-add" />
                                </div>
                                <div className="device-info">
                                    <div className="device-name">
                                    Pending Invitations
                                    </div>
                                </div>
                                <div className="device-stats">
                                    <span className="device-percent-phat">
                                    3
                                    </span>
                                </div>
                                </div>
                            </div>
                            <div className="d-grid mt-3">
                                <button className="btn btn-light-primary-phat" type="button">
                                Manage Users
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                            <h5 className="card-title">
                                Compliance Documents
                            </h5>
                            </div>
                            <div className="card-body">
                            <div className="device-list">
                                <div className="device-item">
                                <i className="bi bi-check2-circle device-icon-text-success-phat" />
                                <div className="device-info">
                                    <div className="device-name">
                                    ISO 9001 Certificate
                                    </div>
                                    <span className="device-count">
                                    144,148
                                    </span>
                                </div>
                                <div className="device-stats">
                                    <span className="badge badge-soft-success">
                                    Verified
                                    </span>
                                </div>
                                </div>
                                <div className="device-item">
                                <i className="bi bi-check2-circle device-icon-text-success-phat" />
                                <div className="device-info">
                                    <div className="device-name">
                                    ISO 9001 Certificate
                                    </div>
                                    <span className="device-count">
                                    144,148
                                    </span>
                                </div>
                                <div className="device-stats">
                                    <span className="badge badge-soft-success">
                                    Verified
                                    </span>
                                </div>
                                </div>
                                <div className="device-item">
                                <i className="bi bi-exclamation-triangle device-icon-text-warning-phat" />
                                <div className="device-info">
                                    <div className="device-name">
                                    ISO 9001 Certificate
                                    </div>
                                    <span className="device-count">
                                    144,148
                                    </span>
                                </div>
                                <div className="device-stats">
                                    <span className="badge badge-soft-warning">
                                    Expiring Soon
                                    </span>
                                </div>
                                </div>
                                <div className="device-item">
                                <i className="bi bi-check2-circle device-icon-text-success-phat" />
                                <div className="device-info">
                                    <div className="device-name">
                                    ISO 9001 Certificate
                                    </div>
                                    <span className="device-count">
                                    144,148
                                    </span>
                                </div>
                                <div className="device-stats">
                                    <span className="badge badge-soft-success">
                                    Verified
                                    </span>
                                </div>
                                </div>
                                <div className="device-item">
                                <i className="bi bi-exclamation-triangle device-icon-text-warning-phat" />
                                <div className="device-info">
                                    <div className="device-name">
                                    ISO 9001 Certificate
                                    </div>
                                    <span className="device-count">
                                    144,148
                                    </span>
                                </div>
                                <div className="device-stats">
                                    <span className="badge badge-soft-warning">
                                    Expiring Soon
                                    </span>
                                </div>
                                </div>
                            </div>
                            <div className="d-grid mt-3">
                                <button className="btn btn-light-primary-phat" type="button">
                                Manage Users
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="card mb-3">
                            <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="card-title mb-0">
                                Recent System Activity
                            </h5>
                            <a href="activity.html" className="nd-inline-link">
                                View all
                            </a>
                            </div>
                            <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table align-middle mb-0 nd-matrix-table">
                                <thead>
                                    <tr>
                                    <th>
                                        User
                                    </th>
                                    <th>
                                        Action
                                    </th>
                                    <th>
                                        Module
                                    </th>
                                    <th>
                                        Timestamp
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className="fw-bold">
                                        John Smith
                                    </td>
                                    <td>
                                        Submitted quotation
                                    </td>
                                    <td>
                                        <span className="badge bg-body-secondary text-dark">
                                        RFQ Management
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-07 14:32
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="fw-bold">
                                        Sarah Johnson
                                    </td>
                                    <td>
                                        Updated company profile
                                    </td>
                                    <td>
                                        <span className="badge bg-body-secondary text-dark">
                                        Company Settings
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-07 13:15
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="fw-bold">
                                        Mike Chen
                                    </td>
                                    <td>
                                        Uploaded document
                                    </td>
                                    <td>
                                        <span className="badge bg-body-secondary text-dark">
                                        Compliance
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-07 11:48
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="fw-bold">
                                        Admin User
                                    </td>
                                    <td>
                                        Added new user
                                    </td>
                                    <td>
                                        <span className="badge bg-body-secondary text-dark">
                                        User Management
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-07 10:22
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="fw-bold">
                                        Emma Wilson
                                    </td>
                                    <td>
                                        Participated in RFQ
                                    </td>
                                    <td>
                                        <span className="badge bg-body-secondary text-dark">
                                        RFQ Management
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-07 09:05
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="fw-bold">
                                        David Lee
                                    </td>
                                    <td>
                                        Updated compliance doc
                                    </td>
                                    <td>
                                        <span className="badge bg-body-secondary text-dark">
                                        Compliance
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-06 16:41
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="fw-bold">
                                        Lisa Brown
                                    </td>
                                    <td>
                                        Reviewed quotation
                                    </td>
                                    <td>
                                        <span className="badge bg-body-secondary text-dark">
                                        RFQ Management
                                        </span>
                                    </td>
                                    <td>
                                        2026-03-06 15:18
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>
                </div>
                </main>
        </>
    );
}
export default CompanyAdminDashboard