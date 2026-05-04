import { Link } from 'react-router-dom'
const Account = () => {
    return (
        <>
            <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container">
                        <nav className="breadcrumbs">
                            <ol>
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="current">
                                    Account
                                </li>
                            </ol>
                        </nav>
                        <h1>
                            Account
                        </h1>
                    </div>
                </div>
                {/* End Page Title */}
                {/* Account Section */}
                <section id="account" className="account section">
                    <div className="container">
                        {/* Mobile Sidebar Toggle Button */}
                        <div className="sidebar-toggle d-lg-none mb-3">
                            <button className="btn btn-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#profileSidebar" aria-expanded="false" aria-controls="profileSidebar">
                                <i className="bi bi-list me-2" />
                                Profile Menu
                            </button>
                        </div>
                        <div className="row">
                            {/* Profile Sidebar */}
                            <div className="col-lg-3 profile-sidebar collapse d-lg-block" id="profileSidebar">
                                <div className="profile-header">
                                    <div className="profile-avatar">
                                        <span>
                                            S
                                        </span>
                                    </div>
                                    <div className="profile-info">
                                        <h4>
                                            Sarah Anderson
                                        </h4>
                                        <div className="profile-bonus">
                                            <i className="bi bi-gift" />
                                            <span>
                                                100 bonuses available
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-nav">
                                    <ul className="nav flex-column" id="profileTabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" type="button" role="tab" aria-controls="general" aria-selected="true">
                                                <i className="bi bi-person-vcard" />
                                                <span>
                                                    General Information
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="password-tab" data-bs-toggle="tab" data-bs-target="#password" type="button" role="tab" aria-controls="password" aria-selected="false">
                                                <i className="bi bi-shield-lock" />
                                                <span>
                                                    Change Password
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="purchases-tab" data-bs-toggle="tab" data-bs-target="#purchases" type="button" role="tab" aria-controls="purchases" aria-selected="false">
                                                <i className="bi bi-bag-check" />
                                                <span>
                                                    Purchase History
                                                </span>
                                                <span className="badge">
                                                    6
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="quotations-tab" data-bs-toggle="tab" data-bs-target="#quotations" type="button" role="tab" aria-controls="quotations" aria-selected="false">
                                                <i className="bi bi-file-earmark-text" />
                                                <span>
                                                    Quotation History
                                                </span>
                                                <span className="badge">
                                                    4
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="logistics-tab" data-bs-toggle="tab" data-bs-target="#logistics" type="button" role="tab" aria-controls="logistics" aria-selected="false">
                                                <i className="bi bi-truck" />
                                                <span>
                                                    Logistics Request
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                    <h6 className="nav-section-title">
                                        Account
                                    </h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link to="/support" className="nav-link">
                                                <i className="bi bi-question-circle" />
                                                <span>
                                                    Help center
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/terms" className="nav-link">
                                                <i className="bi bi-file-text" />
                                                <span>
                                                    Terms and conditions
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link logout">
                                                <i className="bi bi-box-arrow-right" />
                                                <span>
                                                    Log out
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Profile Content */}
                            <div className="col-lg-9 profile-content">
                                <div className="tab-content" id="profileTabsContent">
                                    {/* ===== TAB 5: LOGISTICS REQUEST ===== */}
                                    <div className="tab-pane fade" id="logistics" role="tabpanel" aria-labelledby="logistics-tab">
                                        <div className="tab-header">
                                            <h2>
                                                Logistics Request
                                            </h2>
                                        </div>
                                        <p style={{ 'fontSize': '0.85rem', 'color': '#64748b', 'marginBottom': '20px' }}>
                                            Submit a freight or
                                            delivery request. Our logistics team will contact you with a quote within 24 hours.
                                        </p>
                                        <div className="personal-info-form">
                                            <form className="php-email-form" onSubmit={(e) => { e.preventDefault(); }}>
                                                {/* Route */}
                                                <h6 className="nav-section-title" style={{ 'marginBottom': '12px' }}>
                                                    Route Information
                                                </h6>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="lg-origin" className="form-label">
                                                            Origin (Pickup
                                                            Location)
                                                        </label>
                                                        <select className="form-control" id="lg-origin" name="origin" required={true}>
                                                            <option value="">
                                                                -- Select Industrial Zone --
                                                            </option>
                                                            <option>
                                                                VSIP I – Binh Duong
                                                            </option>
                                                            <option>
                                                                VSIP II – Binh Duong
                                                            </option>
                                                            <option>
                                                                Long Thanh – Dong Nai
                                                            </option>
                                                            <option>
                                                                Tan Binh – Ho Chi Minh City
                                                            </option>
                                                            <option>
                                                                Phu My – Ba Ria Vung Tau
                                                            </option>
                                                            <option>
                                                                My Phuoc – Binh Duong
                                                            </option>
                                                            <option>
                                                                Other (specify in notes)
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="lg-dest" className="form-label">
                                                            Destination
                                                        </label>
                                                        <input type="text" className="form-control" id="lg-dest" name="destination" placeholder="City, Country" required={true} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="lg-date" className="form-label">
                                                            Requested Pickup Date
                                                        </label>
                                                        <input type="date" className="form-control" id="lg-date" name="pickupDate" />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="lg-mode" className="form-label">
                                                            Transport Mode
                                                        </label>
                                                        <select className="form-control" id="lg-mode" name="mode" required={true}>
                                                            <option value="">
                                                                -- Select mode --
                                                            </option>
                                                            <option>
                                                                Sea – FCL (Full Container Load)
                                                            </option>
                                                            <option>
                                                                Sea – LCL (Less than Container Load)
                                                            </option>
                                                            <option>
                                                                Air Freight
                                                            </option>
                                                            <option>
                                                                Road – FTL (Full Truck Load)
                                                            </option>
                                                            <option>
                                                                Road – LTL (Partial Truck Load)
                                                            </option>
                                                            <option>
                                                                Rail Freight
                                                            </option>
                                                            <option>
                                                                Multimodal
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                {/* Cargo */}
                                                <h6 className="nav-section-title" style={{ 'margin': '18px 0 12px' }}>
                                                    Cargo Details
                                                </h6>
                                                <div className="row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="lg-weight" className="form-label">
                                                            Total Weight (kg)
                                                        </label>
                                                        <input type="number" className="form-control" id="lg-weight" name="weight" placeholder="e.g. 1500" min="1" />
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="lg-volume" className="form-label">
                                                            Volume (m³)
                                                            <small className="text-muted">
                                                                optional
                                                            </small>
                                                        </label>
                                                        <input type="number" className="form-control" id="lg-volume" name="volume" placeholder="e.g. 10" min="0" step="0.1" />
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="lg-pkg" className="form-label">
                                                            Packaging Type
                                                        </label>
                                                        <select className="form-control" id="lg-pkg" name="packaging">
                                                            <option>
                                                                Pallet
                                                            </option>
                                                            <option>
                                                                Carton / Box
                                                            </option>
                                                            <option>
                                                                Drum / Barrel
                                                            </option>
                                                            <option>
                                                                Bulk / Loose
                                                            </option>
                                                            <option>
                                                                Container
                                                            </option>
                                                            <option>
                                                                Other
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                {/* Additional Services */}
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Additional Services
                                                        <small className="text-muted">
                                                            (optional)
                                                        </small>
                                                    </label>
                                                    <div className="d-flex flex-wrap gap-2">
                                                        <div className="form-check me-3">
                                                            <input className="form-check-input" type="checkbox" id="svc-customs" />
                                                            <label className="form-check-label" htmlFor="svc-customs">
                                                                Customs Clearance
                                                            </label>
                                                        </div>
                                                        <div className="form-check me-3">
                                                            <input className="form-check-input" type="checkbox" id="svc-ins" />
                                                            <label className="form-check-label" htmlFor="svc-ins">
                                                                Cargo Insurance
                                                            </label>
                                                        </div>
                                                        <div className="form-check me-3">
                                                            <input className="form-check-input" type="checkbox" id="svc-wh" />
                                                            <label className="form-check-label" htmlFor="svc-wh">
                                                                Warehousing
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="svc-track" />
                                                            <label className="form-check-label" htmlFor="svc-track">
                                                                Real-time Tracking
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="lg-notes" className="form-label">
                                                        Additional Notes
                                                    </label>
                                                    <textarea className="form-control" id="lg-notes" name="notes" rows={3} placeholder="Describe cargo type, special handling requirements, hazardous materials, etc." />
                                                </div>
                                                <div id="lg-success" className="sent-message" style={{ 'display': 'none' }}>
                                                    ✅ Your logistics
                                                    request has been submitted! Reference:
                                                    <strong id="lg-ref" />
                                                    . Our
                                                    team will contact you within 24 hours.
                                                </div>
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-save">
                                                        Submit Logistics Request
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* /Logistics Request */}
                                    {/* ===== TAB 1: GENERAL INFORMATION ===== */}
                                    <div className="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                        <div className="tab-header">
                                            <h2>
                                                General Information
                                            </h2>
                                        </div>
                                        <div className="personal-info-form">
                                            <form className="php-email-form" onSubmit={(e) => { e.preventDefault(); }}>
                                                {/* Personal Details */}
                                                <h6 className="nav-section-title" style={{ 'marginBottom': '12px' }}>
                                                    Personal Details
                                                </h6>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="gi-firstName" className="form-label">
                                                            First Name
                                                        </label>
                                                        <input type="text" className="form-control" id="gi-firstName" name="firstName" value="Nguyen" required={true} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="gi-lastName" className="form-label">
                                                            Last Name
                                                        </label>
                                                        <input type="text" className="form-control" id="gi-lastName" name="lastName" value="Van A" required={true} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="gi-email" className="form-label">
                                                            Email Address
                                                        </label>
                                                        <input type="email" className="form-control" id="gi-email" name="email" value="buyer@company.vn" required={true} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="gi-phone" className="form-label">
                                                            Phone / WhatsApp
                                                        </label>
                                                        <input type="tel" className="form-control" id="gi-phone" name="phone" value="+84 901 234 567" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="gi-job" className="form-label">
                                                            Job Title / Role
                                                        </label>
                                                        <input type="text" className="form-control" id="gi-job" name="job" value="Procurement Manager" />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="gi-dob" className="form-label">
                                                            Date of Birth
                                                        </label>
                                                        <input type="date" className="form-control" id="gi-dob" name="dob" value="1990-05-15" />
                                                    </div>
                                                </div>
                                                {/* Company Details */}
                                                <h6 className="nav-section-title" style={{ 'margin': '18px 0 12px' }}>
                                                    Company Details
                                                </h6>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="gi-company" className="form-label">
                                                            Company Name
                                                        </label>
                                                        <input type="text" className="form-control" id="gi-company" name="company" value="ABC Manufacturing Co., Ltd" required={true} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="gi-taxid" className="form-label">
                                                            Tax ID / Business Registration
                                                            No.
                                                        </label>
                                                        <input type="text" className="form-control" id="gi-taxid" name="taxid" value="0123456789" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="gi-industry" className="form-label">
                                                            Industry / Sector
                                                        </label>
                                                        <select className="form-control" id="gi-industry" name="industry">
                                                            <option value="electronics" selected={true}>
                                                                Electronics & Components
                                                            </option>
                                                            <option value="automotive">
                                                                Automotive Parts
                                                            </option>
                                                            <option value="machinery">
                                                                Industrial Machinery
                                                            </option>
                                                            <option value="chemicals">
                                                                Chemicals & Materials
                                                            </option>
                                                            <option value="textiles">
                                                                Textiles & Garments
                                                            </option>
                                                            <option value="food">
                                                                Food & Agriculture
                                                            </option>
                                                            <option value="other">
                                                                Other
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="gi-zone" className="form-label">
                                                            Industrial Zone
                                                        </label>
                                                        <select className="form-control" id="gi-zone" name="zone">
                                                            <option>
                                                                VSIP I – Binh Duong
                                                            </option>
                                                            <option selected={true}>
                                                                VSIP II – Binh Duong
                                                            </option>
                                                            <option>
                                                                Long Thanh – Dong Nai
                                                            </option>
                                                            <option>
                                                                Tan Binh – Ho Chi Minh City
                                                            </option>
                                                            <option>
                                                                Phu My – Ba Ria Vung Tau
                                                            </option>
                                                            <option>
                                                                Other
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="gi-address" className="form-label">
                                                        Company Address
                                                    </label>
                                                    <input type="text" className="form-control" id="gi-address" name="address" value="Lot B-12, VSIP II, Binh Duong Province, Vietnam" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="gi-website" className="form-label">
                                                        Company Website
                                                    </label>
                                                    <input type="url" className="form-control" id="gi-website" name="website" value="https://www.abcmanufacturing.vn" placeholder="https://" />
                                                </div>
                                                <div id="gi-success" className="sent-message" style={{ 'display': 'none' }}>
                                                    Your information
                                                    has been updated successfully!
                                                </div>
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-save">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* /General Information */}
                                    {/* ===== TAB 2: CHANGE PASSWORD ===== */}
                                    <div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                                        <div className="tab-header">
                                            <h2>
                                                Change Password
                                            </h2>
                                        </div>
                                        <div className="personal-info-form">
                                            <form className="php-email-form" onSubmit={(e) => { e.preventDefault(); }}>
                                                <div className="mb-3">
                                                    <label htmlFor="pw-current" className="form-label">
                                                        Current Password
                                                    </label>
                                                    <input type="password" className="form-control" id="pw-current" placeholder="Enter your current password" required={true} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="pw-new" className="form-label">
                                                        New Password
                                                    </label>
                                                    <input type="password" className="form-control" id="pw-new" placeholder="At least 8 characters" required={true} onInput={() => {}} />
                                                    {/* Strength bar */}
                                                    <div style={{ 'marginTop': '8px' }}>
                                                        <div style={{ 'height': '5px', 'borderRadius': '4px', 'background': '#e2e8f0', 'overflow': 'hidden' }}>
                                                            <div id="pw-strength-bar" style={{ 'height': '100%', 'width': '0', 'transition': 'all .3s', 'borderRadius': '4px' }}>
                                                            </div>
                                                        </div>
                                                        <small id="pw-strength-label" style={{ 'fontSize': '0.75rem', 'color': '#94a3b8', 'marginTop': '4px', 'display': 'block' }} />
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="pw-confirm" className="form-label">
                                                        Confirm New Password
                                                    </label>
                                                    <input type="password" className="form-control" id="pw-confirm" placeholder="Repeat new password" required={true} />
                                                </div>
                                                <div className="mb-3" style={{ 'background': '#f8fafc', 'border': '1px solid #e2e8f0', 'borderRadius': '10px', 'padding': '14px 18px' }}>
                                                    <div style={{ 'fontSize': '0.82rem', 'fontWeight': '700', 'color': '#374151', 'marginBottom': '8px' }}>
                                                        Password Requirements:
                                                    </div>
                                                    <ul style={{ 'margin': '0', 'paddingLeft': '18px', 'color': '#64748b', 'fontSize': '0.8rem', 'lineHeight': '1.8' }}>
                                                        <li>
                                                            At least 8 characters long
                                                        </li>
                                                        <li>
                                                            Contains uppercase and lowercase letters
                                                        </li>
                                                        <li>
                                                            Contains at least one number
                                                        </li>
                                                        <li>
                                                            Contains at least one special character (!@#$%)
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="pw-success" className="sent-message" style={{ 'display': 'none' }}>
                                                    Password changed
                                                    successfully!
                                                </div>
                                                <div id="pw-error" className="error-message" style={{ 'display': 'none' }}>
                                                    Passwords do not
                                                    match. Please try again.
                                                </div>
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-save">
                                                        Update Password
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* /Change Password */}
                                    {/* ===== TAB 3: PURCHASE HISTORY ===== */}
                                    <div className="tab-pane fade" id="purchases" role="tabpanel" aria-labelledby="purchases-tab">
                                        <div className="tab-header">
                                            <h2>
                                                Purchase History
                                            </h2>
                                            <button className="btn btn-add-payment" type="button" onClick={() => {}}>
                                                <i className="bi bi-file-earmark-excel me-1" />
                                                Export Excel
                                            </button>
                                        </div>
                                        {/* Filters */}
                                        <div className="tab-filters mb-3">
                                            <div className="row">
                                                <div className="col-md-6 mb-3 mb-md-0">
                                                    <div className="dropdown">
                                                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                            <span>
                                                                All statuses
                                                            </span>
                                                            <i className="bi bi-chevron-down" />
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    All statuses
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    Completed
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    In Progress
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    Cancelled
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="dropdown">
                                                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                            <span>
                                                                All time
                                                            </span>
                                                            <i className="bi bi-chevron-down" />
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    All time
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    Last 30 days
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    Last 6 months
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    This year
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="orders-table">
                                            <div className="table-header">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <div className="sort-header">
                                                            Order #
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="sort-header">
                                                            Product / Supplier
                                                            <i className="bi bi-arrow-down-up" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="sort-header">
                                                            Date
                                                            <i className="bi bi-arrow-down-up" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="sort-header">
                                                            Status
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="sort-header">
                                                            Amount
                                                            <i className="bi bi-arrow-down-up" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-items" id="purchase-table-body">
                                                {/* Row 1 */}
                                                <div className="order-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-2">
                                                            <div className="order-id">
                                                                PO-2026-001
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div style={{ 'fontWeight': '600', 'fontSize': '0.88rem' }}>
                                                                SMT PCB Boards x500
                                                            </div>
                                                            <div style={{ 'fontSize': '0.78rem', 'color': '#64748b' }}>
                                                                SaigonTech Electronics
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                12/04/2026
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-status delivered">
                                                                <span className="status-dot" />
                                                                <span>
                                                                    Completed
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="order-total">
                                                                $12,500.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Row 2 */}
                                                <div className="order-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-2">
                                                            <div className="order-id">
                                                                PO-2026-002
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div style={{ 'fontWeight': '600', 'fontSize': '0.88rem' }}>
                                                                Industrial Hydraulic
                                                                Pumps x10
                                                            </div>
                                                            <div style={{ 'fontSize': '0.78rem', 'color': '#64748b' }}>
                                                                VN Machinery Group
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                25/03/2026
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-status in-progress">
                                                                <span className="status-dot" />
                                                                <span>
                                                                    In Progress
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="order-total">
                                                                $8,200.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Row 3 */}
                                                <div className="order-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-2">
                                                            <div className="order-id">
                                                                PO-2026-003
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div style={{ 'fontWeight': '600', 'fontSize': '0.88rem' }}>
                                                                Steel Coils 50 ton
                                                            </div>
                                                            <div style={{ 'fontSize': '0.78rem', 'color': '#64748b' }}>
                                                                Hoa Phat Steel
                                                                Distribution
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                10/03/2026
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-status delivered">
                                                                <span className="status-dot" />
                                                                <span>
                                                                    Completed
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="order-total">
                                                                $31,750.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Row 4 */}
                                                <div className="order-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-2">
                                                            <div className="order-id">
                                                                PO-2025-089
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div style={{ 'fontWeight': '600', 'fontSize': '0.88rem' }}>
                                                                Polypropylene Resin
                                                                20 ton
                                                            </div>
                                                            <div style={{ 'fontSize': '0.78rem', 'color': '#64748b' }}>
                                                                Binh Son Refining
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                18/11/2025
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-status delivered">
                                                                <span className="status-dot" />
                                                                <span>
                                                                    Completed
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="order-total">
                                                                $19,400.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Row 5 */}
                                                <div className="order-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-2">
                                                            <div className="order-id">
                                                                PO-2025-071
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div style={{ 'fontWeight': '600', 'fontSize': '0.88rem' }}>
                                                                Cable Harness
                                                                Assembly x2000
                                                            </div>
                                                            <div style={{ 'fontSize': '0.78rem', 'color': '#64748b' }}>
                                                                Delta Wire Vietnam
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                02/09/2025
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-status canceled">
                                                                <span className="status-dot" />
                                                                <span>
                                                                    Cancelled
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="order-total">
                                                                $6,600.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Row 6 */}
                                                <div className="order-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-2">
                                                            <div className="order-id">
                                                                PO-2025-044
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div style={{ 'fontWeight': '600', 'fontSize': '0.88rem' }}>
                                                                CNC Milling Machine
                                                                x2
                                                            </div>
                                                            <div style={{ 'fontSize': '0.78rem', 'color': '#64748b' }}>
                                                                Makino Vietnam
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                14/06/2025
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-status delivered">
                                                                <span className="status-dot" />
                                                                <span>
                                                                    Completed
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="order-total">
                                                                $88,000.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /order-items */}
                                        </div>
                                        {/* /orders-table */}
                                        <div className="pagination-container">
                                            <nav aria-label="Purchase history pagination">
                                                <ul className="pagination">
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
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    {/* /Purchase History */}
                                    {/* ===== TAB 4: QUOTATION / RFQ HISTORY ===== */}
                                    <div className="tab-pane fade" id="quotations" role="tabpanel" aria-labelledby="quotations-tab">
                                        <div className="tab-header">
                                            <h2>
                                                Quotation Submission History
                                            </h2>
                                            <button className="btn btn-add-payment" type="button" onClick={() => {}}>
                                                <i className="bi bi-file-earmark-excel me-1" />
                                                Export Excel
                                            </button>
                                        </div>
                                        <p style={{ 'fontSize': '0.85rem', 'color': '#64748b', 'marginBottom': '20px' }}>
                                            All RFQ submissions
                                            published to the
                                            <a href="rqf.html" style={{ 'color': 'var(--accent-color,#4f46e5)' }}>
                                                RFQ
                                                Management page
                                            </a>
                                            .
                                        </p>
                                        <div className="orders-table">
                                            <div className="table-header">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <div className="sort-header">
                                                            RFQ #
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="sort-header">
                                                            Product / Category
                                                            <i className="bi bi-arrow-down-up" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="sort-header">
                                                            Submitted
                                                            <i className="bi bi-arrow-down-up" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="sort-header">
                                                            Deadline
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="sort-header">
                                                            Quotes
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="sort-header">
                                                            Status
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-items">
                                                {/* RFQ Row 1 */}
                                                <div className="order-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-2">
                                                            <div className="order-id">
                                                                RFQ-2026-041
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div style={{ 'fontWeight': '600', 'fontSize': '0.88rem' }}>
                                                                Copper Wire Rod 10
                                                                ton
                                                            </div>
                                                            <div style={{ 'fontSize': '0.78rem', 'color': '#64748b' }}>
                                                                Metals & Raw
                                                                Materials
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                05/04/2026
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                20/04/2026
                                                            </div>
                                                        </div>
                                                        <div className="col-md-1">
                                                            <div style={{ 'fontWeight': '700', 'color': '#4f46e5', 'textAlign': 'center' }}>
                                                                3
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-status in-progress">
                                                                <span className="status-dot" />
                                                                <span>
                                                                    Open
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* RFQ Row 2 */}
                                                <div className="order-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-2">
                                                            <div className="order-id">
                                                                RFQ-2026-033
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div style={{ 'fontWeight': '600', 'fontSize': '0.88rem' }}>
                                                                Injection Mold
                                                                Tooling x4
                                                            </div>
                                                            <div style={{ 'fontSize': '0.78rem', 'color': '#64748b' }}>
                                                                Machinery &
                                                                Tooling
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                21/03/2026
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                10/04/2026
                                                            </div>
                                                        </div>
                                                        <div className="col-md-1">
                                                            <div style={{ 'fontWeight': '700', 'color': '#4f46e5', 'textAlign': 'center' }}>
                                                                5
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-status delivered">
                                                                <span className="status-dot" />
                                                                <span>
                                                                    Accepted
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* RFQ Row 3 */}
                                                <div className="order-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-2">
                                                            <div className="order-id">
                                                                RFQ-2026-019
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div style={{ 'fontWeight': '600', 'fontSize': '0.88rem' }}>
                                                                Industrial
                                                                Lubricants 500L
                                                            </div>
                                                            <div style={{ 'fontSize': '0.78rem', 'color': '#64748b' }}>
                                                                Chemicals & Fluids
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                08/02/2026
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                25/02/2026
                                                            </div>
                                                        </div>
                                                        <div className="col-md-1">
                                                            <div style={{ 'fontWeight': '700', 'color': '#4f46e5', 'textAlign': 'center' }}>
                                                                2
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-status delivered">
                                                                <span className="status-dot" />
                                                                <span>
                                                                    Closed
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* RFQ Row 4 */}
                                                <div className="order-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-2">
                                                            <div className="order-id">
                                                                RFQ-2025-098
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div style={{ 'fontWeight': '600', 'fontSize': '0.88rem' }}>
                                                                Safety Helmets &
                                                                PPE x1000
                                                            </div>
                                                            <div style={{ 'fontSize': '0.78rem', 'color': '#64748b' }}>
                                                                Safety &
                                                                Protective Equipment
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                15/11/2025
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-date">
                                                                30/11/2025
                                                            </div>
                                                        </div>
                                                        <div className="col-md-1">
                                                            <div style={{ 'fontWeight': '700', 'color': '#4f46e5', 'textAlign': 'center' }}>
                                                                7
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="order-status canceled">
                                                                <span className="status-dot" />
                                                                <span>
                                                                    Cancelled
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /order-items */}
                                        </div>
                                        {/* /orders-table */}
                                        <div className="pagination-container">
                                            <nav aria-label="Quotation history pagination">
                                                <ul className="pagination">
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
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    {/* /Quotation History */}
                                    {/* Orders Tab */}
                                    {/* Wishlist Tab */}
                                    {/* Payment Methods Tab */}
                                    <div className="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                                        <div className="tab-header">
                                            <h2>
                                                Payment Methods
                                            </h2>
                                            <button className="btn btn-add-payment" type="button">
                                                <i className="bi bi-plus-lg" />
                                                Add payment method
                                            </button>
                                        </div>
                                        <div className="payment-methods">
                                            {/* Payment Method 1 */}
                                            <div className="payment-method-item">
                                                <div className="payment-card">
                                                    <div className="card-type">
                                                        <i className="bi bi-credit-card" />
                                                    </div>
                                                    <div className="card-info">
                                                        <div className="card-number">
                                                            **** **** **** 4589
                                                        </div>
                                                        <div className="card-expiry">
                                                            Expires 09/2026
                                                        </div>
                                                    </div>
                                                    <div className="card-actions">
                                                        <button className="btn-edit-card" type="button">
                                                            <i className="bi bi-pencil" />
                                                        </button>
                                                        <button className="btn-delete-card" type="button">
                                                            <i className="bi bi-trash" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="default-badge">
                                                    Default
                                                </div>
                                            </div>
                                            {/* End Payment Method */}
                                            {/* Payment Method 2 */}
                                            <div className="payment-method-item">
                                                <div className="payment-card">
                                                    <div className="card-type">
                                                        <i className="bi bi-credit-card" />
                                                    </div>
                                                    <div className="card-info">
                                                        <div className="card-number">
                                                            **** **** **** 7821
                                                        </div>
                                                        <div className="card-expiry">
                                                            Expires 05/2025
                                                        </div>
                                                    </div>
                                                    <div className="card-actions">
                                                        <button className="btn-edit-card" type="button">
                                                            <i className="bi bi-pencil" />
                                                        </button>
                                                        <button className="btn-delete-card" type="button">
                                                            <i className="bi bi-trash" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <button className="btn btn-sm btn-make-default" type="button">
                                                    Make default
                                                </button>
                                            </div>
                                            {/* End Payment Method */}
                                        </div>
                                    </div>
                                    {/* Reviews Tab */}
                                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                        <div className="tab-header">
                                            <h2>
                                                My Reviews
                                            </h2>
                                        </div>
                                        <div className="reviews-list">
                                            {/* Review Item 1 */}
                                            <div className="review-item">
                                                <div className="review-header">
                                                    <div className="review-product">
                                                        <img src="assets/images/product-4.webp" alt="Product" className="product-image" loading="lazy" />
                                                        <div className="product-info">
                                                            <h5>
                                                                Lorem ipsum dolor sit amet
                                                            </h5>
                                                            <div className="review-date">
                                                                Reviewed on 01/15/2025
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="review-rating">
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star" />
                                                    </div>
                                                </div>
                                                <div className="review-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
                                                        nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies
                                                        nisl nisl eget nisl.
                                                    </p>
                                                </div>
                                                <div className="review-actions">
                                                    <button className="btn btn-sm btn-edit-review" type="button">
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-sm btn-delete-review" type="button">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                            {/* End Review Item */}
                                            {/* Review Item 2 */}
                                            <div className="review-item">
                                                <div className="review-header">
                                                    <div className="review-product">
                                                        <img src="assets/images/product-5.webp" alt="Product" className="product-image" loading="lazy" />
                                                        <div className="product-info">
                                                            <h5>
                                                                Consectetur adipiscing elit
                                                            </h5>
                                                            <div className="review-date">
                                                                Reviewed on 12/03/2024
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="review-rating">
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                    </div>
                                                </div>
                                                <div className="review-content">
                                                    <p>
                                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                        aliquip ex ea commodo consequat.
                                                    </p>
                                                </div>
                                                <div className="review-actions">
                                                    <button className="btn btn-sm btn-edit-review" type="button">
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-sm btn-delete-review" type="button">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                            {/* End Review Item */}
                                        </div>
                                    </div>
                                    {/* Personal Info Tab */}
                                    <div className="tab-pane fade" id="personal" role="tabpanel" aria-labelledby="personal-tab">
                                        <div className="tab-header">
                                            <h2>
                                                Personal Information
                                            </h2>
                                        </div>
                                        <div className="personal-info-form">
                                            <form className="php-email-form">
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="firstName" className="form-label">
                                                            First Name
                                                        </label>
                                                        <input type="text" className="form-control" id="firstName" name="firstName" value="Lorem" required={true} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="lastName" className="form-label">
                                                            Last Name
                                                        </label>
                                                        <input type="text" className="form-control" id="lastName" name="lastName" value="Ipsum" required={true} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="email" className="form-label">
                                                            Email
                                                        </label>
                                                        <input type="email" className="form-control" id="email" name="email" value="lorem@example.com" required={true} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="phone" className="form-label">
                                                            Phone
                                                        </label>
                                                        <input type="tel" className="form-control" id="phone" name="phone" value="+1 (555) 123-4567" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="birthdate" className="form-label">
                                                        Date of Birth
                                                    </label>
                                                    <input type="date" className="form-control" id="birthdate" name="birthdate" value="1990-01-01" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label d-block">
                                                        Gender
                                                    </label>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="gender" id="genderMale" value="male" checked={true} />
                                                        <label className="form-check-label" htmlFor="genderMale">
                                                            Male
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="female" />
                                                        <label className="form-check-label" htmlFor="genderFemale">
                                                            Female
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="gender" id="genderOther" value="other" />
                                                        <label className="form-check-label" htmlFor="genderOther">
                                                            Other
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="loading">
                                                    Loading
                                                </div>
                                                <div className="error-message" />
                                                <div className="sent-message">
                                                    Your information has been updated. Thank you!
                                                </div>
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-save">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* Addresses Tab */}
                                    <div className="tab-pane fade" id="addresses" role="tabpanel" aria-labelledby="addresses-tab">
                                        <div className="tab-header">
                                            <h2>
                                                My Addresses
                                            </h2>
                                            <button className="btn btn-add-address" type="button">
                                                <i className="bi bi-plus-lg" />
                                                Add new address
                                            </button>
                                        </div>
                                        <div className="addresses-list">
                                            <div className="row">
                                                {/* Address Item 1 */}
                                                <div className="col-lg-6 mb-4">
                                                    <div className="address-item">
                                                        <div className="address-header">
                                                            <h5>
                                                                Home Address
                                                            </h5>
                                                            <div className="address-actions">
                                                                <button className="btn-edit-address" type="button">
                                                                    <i className="bi bi-pencil" />
                                                                </button>
                                                                <button className="btn-delete-address" type="button">
                                                                    <i className="bi bi-trash" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="address-content">
                                                            <p>
                                                                123 Main Street
                                                                <br />
                                                                Apt 4B
                                                                <br />
                                                                New York, NY 10001
                                                                <br />
                                                                United States
                                                            </p>
                                                        </div>
                                                        <div className="default-badge">
                                                            Default
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Address Item */}
                                                {/* Address Item 2 */}
                                                <div className="col-lg-6 mb-4">
                                                    <div className="address-item">
                                                        <div className="address-header">
                                                            <h5>
                                                                Work Address
                                                            </h5>
                                                            <div className="address-actions">
                                                                <button className="btn-edit-address" type="button">
                                                                    <i className="bi bi-pencil" />
                                                                </button>
                                                                <button className="btn-delete-address" type="button">
                                                                    <i className="bi bi-trash" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="address-content">
                                                            <p>
                                                                456 Business Ave
                                                                <br />
                                                                Suite 200
                                                                <br />
                                                                San Francisco, CA
                                                                94107
                                                                <br />
                                                                United States
                                                            </p>
                                                        </div>
                                                        <button className="btn btn-sm btn-make-default" type="button">
                                                            Make
                                                            default
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* End Address Item */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Notifications Tab */}
                                    <div className="tab-pane fade" id="notifications" role="tabpanel" aria-labelledby="notifications-tab">
                                        <div className="tab-header">
                                            <h2>
                                                Notification Settings
                                            </h2>
                                        </div>
                                        <div className="notifications-settings">
                                            <div className="notification-group">
                                                <h5>
                                                    Order Updates
                                                </h5>
                                                <div className="notification-item">
                                                    <div className="notification-info">
                                                        <div className="notification-title">
                                                            Order status changes
                                                        </div>
                                                        <div className="notification-desc">
                                                            Receive notifications when your order
                                                            status changes
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="orderStatusNotif" checked={true} />
                                                        <label className="form-check-label" htmlFor="orderStatusNotif" />
                                                    </div>
                                                </div>
                                                <div className="notification-item">
                                                    <div className="notification-info">
                                                        <div className="notification-title">
                                                            Shipping updates
                                                        </div>
                                                        <div className="notification-desc">
                                                            Receive notifications about shipping and
                                                            delivery
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="shippingNotif" checked={true} />
                                                        <label className="form-check-label" htmlFor="shippingNotif" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="notification-group">
                                                <h5>
                                                    Account Activity
                                                </h5>
                                                <div className="notification-item">
                                                    <div className="notification-info">
                                                        <div className="notification-title">
                                                            Security alerts
                                                        </div>
                                                        <div className="notification-desc">
                                                            Receive notifications about
                                                            security-related activity
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="securityNotif" checked={true} />
                                                        <label className="form-check-label" htmlFor="securityNotif" />
                                                    </div>
                                                </div>
                                                <div className="notification-item">
                                                    <div className="notification-info">
                                                        <div className="notification-title">
                                                            Password changes
                                                        </div>
                                                        <div className="notification-desc">
                                                            Receive notifications when your password
                                                            is changed
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="passwordNotif" checked={true} />
                                                        <label className="form-check-label" htmlFor="passwordNotif" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="notification-group">
                                                <h5>
                                                    Marketing
                                                </h5>
                                                <div className="notification-item">
                                                    <div className="notification-info">
                                                        <div className="notification-title">
                                                            Promotions and deals
                                                        </div>
                                                        <div className="notification-desc">
                                                            Receive notifications about special
                                                            offers and discounts
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="promoNotif" />
                                                        <label className="form-check-label" htmlFor="promoNotif" />
                                                    </div>
                                                </div>
                                                <div className="notification-item">
                                                    <div className="notification-info">
                                                        <div className="notification-title">
                                                            New product arrivals
                                                        </div>
                                                        <div className="notification-desc">
                                                            Receive notifications when new products
                                                            are added
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="newProductNotif" />
                                                        <label className="form-check-label" htmlFor="newProductNotif" />
                                                    </div>
                                                </div>
                                                <div className="notification-item">
                                                    <div className="notification-info">
                                                        <div className="notification-title">
                                                            Personalized recommendations
                                                        </div>
                                                        <div className="notification-desc">
                                                            Receive notifications with product
                                                            recommendations based on your interests
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="recommendNotif" checked={true} />
                                                        <label className="form-check-label" htmlFor="recommendNotif" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="notification-actions">
                                                <button type="button" className="btn btn-save">
                                                    Save Preferences
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Account Section */}
            </main>
        </>
    )
}

export default Account