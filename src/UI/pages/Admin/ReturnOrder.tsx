const ReturnOrder = () => {
    return (
        <>
            <div className="main-content page-tables-datatables">
                {/* Page Header */}
                <h1 className="page-title">
                    Disputes and Returns
                </h1>
                <div className="page-header">
                    <nav className="breadcrumb">
                        <a href="index.html" className="breadcrumb-item">
                            Home
                        </a>
                        <span className="breadcrumb-item active">
                            Disputes and Returns
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
                                            Manage disputes and returns
                                        </h5>
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
                                                    Order ID
                                                </th>
                                                <th>
                                                    Staff
                                                </th>
                                                <th>
                                                    Position
                                                </th>
                                                <th>
                                                    Issue Description
                                                </th>
                                                <th>
                                                    Value
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
                                                    Buyer Staff
                                                </td>
                                                <td data-sort="2499">
                                                    Damaged goods upon delivery (rusted pipes).
                                                </td>
                                                <td data-sort="2026-01-15">
                                                    80.000.000 VNĐ
                                                </td>
                                                <td>
                                                    <span className="badge badge-soft-warning">
                                                        In Negotiation
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="table-actions">
                                                        <a href="returnOrderDetail.html">
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
                                                        #PO-2026-007
                                                    </a>
                                                </td>
                                                <td>
                                                    Thái Trung Hiếu
                                                </td>
                                                <td>
                                                    Buyer Staff
                                                </td>
                                                <td data-sort="1599">
                                                    Incorrect specifications
                                                </td>
                                                <td data-sort="2026-01-10">
                                                    35.000.000 VNĐ
                                                </td>
                                                <td>
                                                    <span className="badge badge-soft-danger">
                                                        Return Pending
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
                </section>
            </div>
        </>
    )
}
export default ReturnOrder