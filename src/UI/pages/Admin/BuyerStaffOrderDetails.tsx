const BuyerStaffOrderDetails = () => {
    return (
        <>
            <div className="main-content page-tables-responsive">
                {/* Page Header */}
                <h1 className="page-title">
                    Order Details
                </h1>
                <div className="page-header">
                    <nav className="breadcrumb">
                        <a href="index.html" className="breadcrumb-item">
                            Home
                        </a>
                        <a href="buyerStaffOrder.html" className="breadcrumb-item">
                            Buyer Order
                        </a>
                        <span className="breadcrumb-item active">
                            Buyer Order Details
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
                                        Order Audit Info
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
                                                        Supplier:
                                                    </td>
                                                    <td>
                                                        Hoa Phat Group
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Order Date:
                                                    </td>
                                                    <td>
                                                        Jan 15, 2026
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Payment Status:
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-soft-success">
                                                            Delivered
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
                            <div className="card h-60">
                                <div className="card-header">
                                    <h5 className="card-title">
                                        Purchased Item
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
                                                        Quantity
                                                    </th>
                                                    <th>
                                                        Unit Price
                                                    </th>
                                                    <th>
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Steel Pipes
                                                    </td>
                                                    <td>
                                                        20
                                                    </td>
                                                    <td>
                                                        4.000.000 VNĐ
                                                    </td>
                                                    <td>
                                                        80.000.000 VNĐ
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
                {/* Card-Based Responsive Table */}
                <section className="section">
                    <div className="row g-4">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">
                                        Progress
                                    </h5>
                                </div>
                                <div className="card-body">
                                    {/* Desktop Table View */}
                                    <div className="d-none d-md-block">
                                        <table className="table table-hover">
                                            <tbody>
                                                <tr>
                                                    <td style={{ 'minWidth': '120px' }}>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="progress flex-grow-1" style={{ 'height': '6px' }}>
                                                                <div className="progress-bar bg-success" role="progressbar" style={{ 'width': '100%' }} />
                                                            </div>
                                                            <span className="small fw-medium">
                                                                100%
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-soft-success">
                                                            Delivered
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Mobile Card View */}
                                    <div className="d-md-none">
                                        <div className="row g-3">
                                            {/* Card 1 */}
                                            <div className="col-12">
                                                <div className="card card-body">
                                                    <div className="mb-3">
                                                        <div className="d-flex justify-content-between small mb-1">
                                                            <span>
                                                                Delivered
                                                            </span>
                                                            <span className="fw-medium">
                                                                100%
                                                            </span>
                                                        </div>
                                                        <div className="progress" style={{ 'height': '6px' }}>
                                                            <div className="progress-bar bg-success" role="progressbar" style={{ 'width': '100%' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BuyerStaffOrderDetails;