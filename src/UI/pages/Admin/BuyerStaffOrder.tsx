const BuyerStaffOrder = () => {
    return (
        <>
            <div className="main-content page-tables-datatables">
                {/* Page Header */}
                <h1 className="page-admin-order-title">
                    Buyer Staff Management
                </h1>
                <div className="page-header">
                    <nav className="breadcrumb">
                        <a href="index.html" className="breadcrumb-item">
                            Home
                        </a>
                        <span className="breadcrumb-item active">
                            Buyer Order
                        </span>
                    </nav>
                </div>
                {/* Order Management DataTable */}
                <div className="section-admin-order">
                    <h5 className="section-admin-order-title mb-3">
                        Order Management DataTable
                    </h5>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="card-title">
                                            Buyer Staffs
                                        </h5>
                                        <p className="card-subtitle">
                                            Track and manage buyer staff's orders
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
                                                        <a href="buyerStaffOrderDetails.html">
                                                            <button className="btn btn-icon btn-sm btn-light" title="View">
                                                                <i className="bi bi-eye" />
                                                            </button>
                                                        </a>
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
                                                        <button className="btn btn-icon btn-sm btn-light" title="View">
                                                            <i className="bi bi-eye" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="fw-medium">
                                                        #PO-2026-003
                                                    </a>
                                                </td>
                                                <td>
                                                    Nguyễn Văn Toản
                                                </td>
                                                <td>
                                                    Hoa Sen Group
                                                </td>
                                                <td data-sort="249">
                                                    5.000.000 VNĐ
                                                </td>
                                                <td data-sort="2026-01-14">
                                                    Jan 14, 2026
                                                </td>
                                                <td>
                                                    <span className="badge badge-soft-info">
                                                        Shipped
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="table-actions">
                                                        <button className="btn btn-icon btn-sm btn-light" title="View">
                                                            <i className="bi bi-eye" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="fw-medium">
                                                        #PO-2026-004
                                                    </a>
                                                </td>
                                                <td>
                                                    Hà Lê Huy
                                                </td>
                                                <td>
                                                    FPT Corporation
                                                </td>
                                                <td data-sort="799">
                                                    40.000.000 VNĐ
                                                </td>
                                                <td data-sort="2026-01-13">
                                                    Jan 13, 2026
                                                </td>
                                                <td>
                                                    <span className="badge badge-soft-danger">
                                                        Cancelled
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="table-actions">
                                                        <button className="btn btn-icon btn-sm btn-light" title="View">
                                                            <i className="bi bi-eye" />
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
                                                        <button className="btn btn-icon btn-sm btn-light" title="View">
                                                            <i className="bi bi-eye" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="fw-medium">
                                                        #PO-2026-006
                                                    </a>
                                                </td>
                                                <td>
                                                    Phạm Thị Thu
                                                </td>
                                                <td>
                                                    BOSCH VN
                                                </td>
                                                <td data-sort="299">
                                                    1.500.000 VNĐ
                                                </td>
                                                <td data-sort="2026-01-11">
                                                    Jan 11, 2026
                                                </td>
                                                <td>
                                                    <span className="badge badge-soft-success">
                                                        Delivered
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="table-actions">
                                                        <button className="btn btn-icon btn-sm btn-light" title="View">
                                                            <i className="bi bi-eye" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="fw-medium">
                                                        #PO-2026-007
                                                    </a>
                                                </td>
                                                <td>
                                                    Thái Trung Hiếu
                                                </td>
                                                <td>
                                                    Dai Duong Corp
                                                </td>
                                                <td data-sort="1599">
                                                    35.000.000 VNĐ
                                                </td>
                                                <td data-sort="2026-01-10">
                                                    Jan 10, 2026
                                                </td>
                                                <td>
                                                    <span className="badge badge-soft-info">
                                                        Shipped
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="table-actions">
                                                        <button className="btn btn-icon btn-sm btn-light" title="View">
                                                            <i className="bi bi-eye" />
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

export default BuyerStaffOrder;