const ApprovalOrders = () => {
    return (
        <>
            <div className="main-content page-tables-datatables">
                {/* Page Header */}
                <h1 className="page-title">
                    Approval Requests
                </h1>
                <div className="page-header">
                    <nav className="breadcrumb">
                        <a href="index.html" className="breadcrumb-item">
                            Home
                        </a>
                        <span className="breadcrumb-item active">
                            Approval Requests
                        </span>
                    </nav>
                </div>
                {/* Order Management DataTable */}
                <section className="section">
                    <h5 className="section-title mb-3">
                        Order Management DataTable
                    </h5>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="card-title">
                                            Manage High Value Orders
                                        </h5>
                                        <p className="card-subtitle">
                                            Orders equal or above the value of 80.000.000 VNĐ must be approve.
                                        </p>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-outline-secondary btn-sm">
                                            <i className="bi bi-download me-1" />
                                            Export
                                        </button>
                                        <button className="btn btn-primary btn-sm">
                                            <i className="bi bi-plus-lg me-1" />
                                            New Order
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <table id="orderDataTable" className="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Product Order ID
                                                </th>
                                                <th>
                                                    Created By(Staff)
                                                </th>
                                                <th>
                                                    Supplier
                                                </th>
                                                <th>
                                                    Value
                                                </th>
                                                <th>
                                                    Date
                                                </th>
                                                <th>
                                                    Status
                                                </th>
                                                <th data-sortable="false">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="#" className="fw-medium">
                                                        #PO-2026-001
                                                    </a>
                                                </td>
                                                <td>
                                                    Lương Thành Hiếu
                                                </td>
                                                <td>
                                                    Hoa Phat Group
                                                </td>
                                                <td data-sort="2499">
                                                    80.000.000 VNĐ
                                                </td>
                                                <td data-sort="2026-01-15">
                                                    Jan 15, 2026
                                                </td>
                                                <td>
                                                    <span className="badge badge-soft-success">
                                                        Delivered
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="table-actions">
                                                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#successModal" onClick={(e) => e.currentTarget}>
                                                            Approve
                                                        </button>
                                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={(e) => e.currentTarget}>
                                                            <i className="bi bi-trash me-1" />
                                                            Reject
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="fw-medium">
                                                        #PO-2026-002
                                                    </a>
                                                </td>
                                                <td>
                                                    Phan Thị Mỹ Nữ
                                                </td>
                                                <td>
                                                    Petrovietnam - PVN
                                                </td>
                                                <td data-sort="1199">
                                                    100.000.000 VNĐ
                                                </td>
                                                <td data-sort="2026-01-14">
                                                    Jan 14, 2026
                                                </td>
                                                <td>
                                                    <span className="badge badge-soft-warning">
                                                        Processing
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="table-actions">
                                                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#successModal" onClick={(e) => e.currentTarget}>
                                                            Approve
                                                        </button>
                                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={(e) => e.currentTarget}>
                                                            <i className="bi bi-trash me-1" />
                                                            Reject
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="fw-medium">
                                                        #PO-2026-005
                                                    </a>
                                                </td>
                                                <td>
                                                    Trần Văn Mạnh
                                                </td>
                                                <td>
                                                    Gelex Group
                                                </td>
                                                <td data-sort="1099">
                                                    180.000.000 VNĐ
                                                </td>
                                                <td data-sort="2026-01-12">
                                                    Jan 12, 2026
                                                </td>
                                                <td>
                                                    <span className="badge badge-soft-success">
                                                        Delivered
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="table-actions">
                                                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#successModal" onClick={(e) => e.currentTarget}>
                                                            Approve
                                                        </button>
                                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={(e) => e.currentTarget}>
                                                            <i className="bi bi-trash me-1" />
                                                            Reject
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="modal fade" id="successModal" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered modal-sm">
                        <div className="modal-content">
                            <div className="modal-body text-center py-4">
                                <div className="mb-3">
                                    <span className="bg-success-subtle text-success rounded-circle d-inline-flex align-items-center justify-content-center" style={{ 'width': '64px', 'height': '64px' }}>
                                        <i className="bi bi-check-lg fs-1" />
                                    </span>
                                </div>
                                <h5>
                                    Success!
                                </h5>
                                <p className="text-muted mb-3">
                                    Your approval has been saved successfully.
                                </p>
                                <button type="button" className="btn btn-success" id="confirmApproveBtn">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="deleteModal" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body text-center py-4">
                                <div className="mb-3">
                                    <span className="bg-danger-subtle text-danger rounded-circle d-inline-flex align-items-center justify-content-center" style={{ 'width': '64px', 'height': '64px' }}>
                                        <i className="bi bi-exclamation-triangle fs-1" />
                                    </span>
                                </div>
                                <h5>
                                    Delete Item?
                                </h5>
                                <p className="text-muted mb-0">
                                    Are you sure you want to reject this item? This action cannot be undone.
                                </p>
                            </div>
                            <div className="modal-footer justify-content-center border-0 pt-0">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-danger" id="confirmRejectBtn">
                                    Reject
                                </button>
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
    );
}

export default ApprovalOrders;