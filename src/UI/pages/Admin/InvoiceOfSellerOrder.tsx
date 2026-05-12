const InvoiceOfSellerOrder = () => {
    return (
        <>
            <div className="main-content page-invoice">
                <div className="page-invoice">
                    <h1 className="page-title">
                        Seller Staff Management
                    </h1>
                    <div className="page-header">
                        <nav className="breadcrumb">
                            <a href="index.html" className="breadcrumb-item">
                                Home
                            </a>
                            <a href="sellerStaffOrder.html" className="breadcrumb-item">
                                Seller Order
                            </a>
                            <span className="breadcrumb-item active">
                                Invoice
                            </span>
                        </nav>
                    </div>
                    <section className="invv-top card mb-3">
                        <div className="card-body">
                            <div className="invv-top-grid">
                                <div>
                                    <span className="invv-kicker">
                                        Invoice Detail
                                    </span>
                                    <h1 className="page-title mb-2">
                                        Invoice #SO-2026-001
                                    </h1>
                                </div>
                                <div className="invv-actions">
                                    <button className="btn btn-outline-secondary btn-sm">
                                        <i className="bi bi-send me-1" />
                                        Send
                                    </button>
                                    <button
                                        className="btn btn-outline-secondary btn-sm"
                                        onClick={window.print}>
                                        <i className="bi bi-printer me-1" />
                                        Print
                                    </button>
                                    <button className="btn btn-primary btn-sm">
                                        <i className="bi bi-download me-1" />
                                        PDF
                                    </button>
                                </div>
                            </div>
                            <div className="invv-summary-row mt-3">
                                <article className="invv-summary-card">
                                    <span>
                                        Total
                                    </span>
                                    <strong>
                                        80.000.000 VNĐ
                                    </strong>
                                </article>
                                <article className="invv-summary-card">
                                    <span>
                                        Amount Paid
                                    </span>
                                    <strong className="text-success">
                                        80.000.000 VNĐ
                                    </strong>
                                </article>
                                <article className="invv-summary-card">
                                    <span>
                                        Balance
                                    </span>
                                    <strong>
                                        $0.00
                                    </strong>
                                </article>
                                <article className="invv-summary-card">
                                    <span>
                                        Status
                                    </span>
                                    <strong>
                                        <span className="inv-status paid">
                                            Paid
                                        </span>
                                    </strong>
                                </article>
                            </div>
                        </div>
                    </section>
                    <div className="row g-3">
                        <div className="col-xl-8">
                            <div className="card invv-sheet-card">
                                <div className="card-body">
                                    <div className="invv-sheet-head">
                                        <div className="inv-brand">
                                            <img src="assets/images/logo.webp" alt="NiceAdmin" />
                                            <div>
                                                <div className="inv-brand-name">
                                                    NiceAdmin
                                                </div>
                                                <div className="inv-brand-meta">
                                                    123 Business Street, New York, NY
                                                </div>
                                            </div>
                                        </div>
                                        <div className="invv-doc-meta">
                                            <div className="invv-doc-title">
                                                INVOICE
                                            </div>
                                            <div className="invv-doc-number">
                                                #SO-2026-001
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3 mb-3">
                                        <div className="col-sm-6">
                                            <div className="invv-address-card">
                                                <span className="invv-address-label">
                                                    From
                                                </span>
                                                <strong className="invv-address-name">
                                                    NiceAdmin
                                                </strong>
                                                <p>
                                                    123 Business Street
                                                    <br />
                                                    New York, NY 10001
                                                    <br />
                                                    <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="96f4fffafafff8f1d6f3eef7fbe6faf3b8f5f9fb">
                                                        [email�protected]
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="invv-address-card">
                                                <span className="invv-address-label">
                                                    Bill To
                                                </span>
                                                <strong className="invv-address-name">
                                                    Hoa Phat Group
                                                </strong>
                                                <p>
                                                    456 Client Avenue
                                                    <br />
                                                    San Francisco, CA 94102
                                                    <br />
                                                    <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c7a6a4a4a8b2a9b3b487a6a4aaa2e9a4a8aa">
                                                        [email�protected]
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive invv-line-wrap">
                                        <table className="table invv-line-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Description
                                                    </th>
                                                    <th className="text-center">
                                                        Qty
                                                    </th>
                                                    <th className="text-end">
                                                        Unit
                                                    </th>
                                                    <th className="text-end">
                                                        Amount
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="inv-line-name">
                                                            Steel Pipes
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        20
                                                    </td>
                                                    <td className="text-end">
                                                        4.000.000 VNĐ
                                                    </td>
                                                    <td className="text-end inv-amount">
                                                        80.000.000 VNĐ
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row justify-content-end mt-3">
                                        <div className="col-md-6 col-xl-5">
                                            <table className="table table-sm table-borderless invv-total-table mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            Subtotal
                                                        </td>
                                                        <td className="text-end">
                                                            $5,250.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Discount (0%)
                                                        </td>
                                                        <td className="text-end text-danger">
                                                            -0 VNĐ
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Tax (0% - Free Tax)
                                                        </td>
                                                        <td className="text-end">
                                                            0 VNĐ
                                                        </td>
                                                    </tr>
                                                    <tr className="invv-total">
                                                        <td>
                                                            Total
                                                        </td>
                                                        <td className="text-end">
                                                            80.000.000 VNĐ
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Amount Paid
                                                        </td>
                                                        <td className="text-end text-success">
                                                            -80.000.000 VNĐ
                                                        </td>
                                                    </tr>
                                                    <tr className="invv-balance">
                                                        <td>
                                                            Balance Due
                                                        </td>
                                                        <td className="text-end">
                                                            0 VNĐ
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="invv-note-block">
                                        <span className="invv-address-label">
                                            Notes
                                        </span>
                                        <p>
                                            Thank you for your business. If you have any questions about this invoice, contact our billing team.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card invv-side-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        Payment Details
                                    </h5>
                                </div>
                                <div className="card-body p-0">
                                    <div className="invv-side-list">
                                        <div className="invv-side-row">
                                            <span>
                                                Method
                                            </span>
                                            <strong>
                                                Credit Card
                                            </strong>
                                        </div>
                                        <div className="invv-side-row">
                                            <span>
                                                Card
                                            </span>
                                            <strong>
                                                **** **** **** 4242
                                            </strong>
                                        </div>
                                        <div className="invv-side-row">
                                            <span>
                                                Paid On
                                            </span>
                                            <strong>
                                                Jan 15, 2026
                                            </strong>
                                        </div>
                                        <div className="invv-side-row">
                                            <span>
                                                Txn ID
                                            </span>
                                            <strong>
                                                TXN-8472619
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card invv-side-card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        Client
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="inv-client">
                                        <span className="inv-client-avatar accent">
                                            HP
                                        </span>
                                        <div>
                                            <div className="inv-client-name">
                                                Hoa Phat Group
                                            </div>
                                            <div className="inv-client-email">
                                                <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="19787a7a766c776d6a59787a747c377a7674">
                                                    [email�protected]
                                                </a>
                                            </div>
                                        </div>
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

export default InvoiceOfSellerOrder 