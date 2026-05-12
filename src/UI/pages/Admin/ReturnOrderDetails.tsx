const ReturnOrderDetails = () => {
    return (
        <>
            <div className="main-content page-tables-responsive">
                {/* Page Header */}
                <h1 className="page-title">
                    Disputes and Returns
                </h1>
                <div className="page-header">
                    <nav className="breadcrumb">
                        <a href="index.html" className="breadcrumb-item">
                            Home
                        </a>
                        <a href="returnOrder.html" className="breadcrumb-item">
                            Disputes and Returns
                        </a>
                        <span className="breadcrumb-item active">
                            Return Order Details
                        </span>
                    </nav>
                </div>
                {/* Breakpoint Responsive Tables */}
                <section className="section">
                    <div className="row g-4">
                        {/* Small Breakpoint */}
                        <div className="col-lg-6">
                            <div className="card h-100">
                                <div className="card-header">
                                    <h5 className="card-title">
                                        Return Order Info
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive-sm">
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Info
                                                    </th>
                                                    <th>
                                                        Details
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Staff Responsible:
                                                    </td>
                                                    <td>
                                                        Lương Thành Hiếu
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Order ID:
                                                    </td>
                                                    <td>
                                                        PO-2026-001
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Type:
                                                    </td>
                                                    <td>
                                                        Buying (Return to Vendor)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Current Status:
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-soft-warning">
                                                            In Negotiation
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Medium Breakpoint */}
                        <div className="col-lg-6">
                            <div className="card h-100">
                                <div className="card-header">
                                    <h5 className="card-title">
                                        Evidences & Logs
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive-md">
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Product Description
                                                    </th>
                                                    <th>
                                                        File detail
                                                    </th>
                                                    <th>
                                                        Photo attach
                                                    </th>
                                                    <th>
                                                        Staff's note
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Rusted pipes received.
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3 p-3 bg-light rounded">
                                                            <i className="bi bi-file-earmark-zip text-warning fs-4" />
                                                            <div className="flex-grow-1">
                                                                <div className="d-flex justify-content-between mb-1">
                                                                    <span className="small fw-medium">
                                                                        product-files.zip
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="progress progress-sm"
                                                                    role="progressbar"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                >
                                                                    <div
                                                                        className="progress-bar"
                                                                        style={{ width: '0%' }}
                                                                    />
                                                                </div>
                                                                <span className="small text-muted">
                                                                    5.8 MB
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3 p-3 bg-light rounded">
                                                            <i className="bi bi-file-earmark-image text-warning fs-4" />
                                                            <div className="flex-grow-1">
                                                                <div className="d-flex justify-content-between mb-1">
                                                                    <span className="small fw-medium">
                                                                        product.image
                                                                    </span>
                                                                </div>
                                                                <div className="progress progress-sm" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                                                    <div className="progress-bar" style={{ 'width': '0%' }} />
                                                                </div>
                                                                <span className="small text-muted">
                                                                    45.7 MB
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        I have contacted the other party.
                                                        They agreed to partial refund.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ReturnOrderDetails