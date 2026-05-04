const TrackOrder = () => {
    return (
        <>
            <main className="main">
                {/* Page Hero */}
                <section className="to-hero">
                    <div className="container">
                    <div className="to-hero-inner">
                        <div className="to-hero-icon">
                        <i className="bi bi-truck" />
                        </div>
                        <h1 className="to-hero-title">
                        Track Your Order
                        </h1>
                        <p className="to-hero-sub">
                        Enter your order ID or tracking number to get real-time shipment updates for your
                            industrial purchase.
                        </p>
                    </div>
                    </div>
                </section>
                {/* Breadcrumb */}
                <section className="to-breadcrumb">
                    <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <a href="index.html">
                            <i className="bi bi-house-fill me-1" />
                            Home
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Track Order
                        </li>
                        </ol>
                    </nav>
                    </div>
                </section>
                {/* Track Order Main Content */}
                <section className="to-section">
                    <div className="container">
                    <div className="row justify-content-center">
                        {/* Search Card */}
                        <div className="col-lg-8">
                        <div className="to-search-card">
                            <div className="to-search-header">
                            <i className="bi bi-search-heart" />
                            <h2>
                                Find Your Shipment
                            </h2>
                            <p>
                                Provide your order details to locate and track your delivery status.
                            </p>
                            </div>
                            <form id="trackOrderForm" className="to-form" noValidate={true}>
                            <div className="row g-3">
                                <div className="col-md-8">
                                <label htmlFor="trackInput" className="to-label">
                                    <i className="bi bi-hash me-1" />
                                    Order ID / Tracking Number
                                </label>
                                <div className="to-input-wrap">
                                    <input type="text" id="trackInput" className="to-input" placeholder="e.g. IL-2024-001234 or TRACK-XXXXXX" autoComplete="off" spellCheck="false" />
                                    <i className="bi bi-barcode to-input-icon" />
                                </div>
                                <div className="to-input-error" id="trackInputError">
                                    Please enter a valid order ID or tracking number.
                                </div>
                                </div>
                                <div className="col-md-4">
                                <label htmlFor="trackEmail" className="to-label">
                                    <i className="bi bi-envelope me-1" />
                                    Email (optional)
                                </label>
                                <div className="to-input-wrap">
                                    <input type="email" id="trackEmail" className="to-input" placeholder="your@email.com" autoComplete="email" />
                                    <i className="bi bi-envelope to-input-icon" />
                                </div>
                                </div>
                                <div className="col-12">
                                <button type="submit" className="to-btn-track" id="btnTrackOrder">
                                    <span className="to-btn-text">
                                    <i className="bi bi-truck me-2" />
                                    Track Order
                                    </span>
                                    <span className="to-btn-loading d-none">
                                    <span className="to-spinner" />
                                    Searching...
                                    </span>
                                </button>
                                </div>
                            </div>
                            </form>
                            {/* Quick Track Demo Chips */}
                            <div className="to-demo-chips">
                            <span className="to-demo-label">
                                Try a demo:
                            </span>
                            <button className="to-chip" data-demo="IL-2024-001234">
                                IL-2024-001234
                            </button>
                            <button className="to-chip" data-demo="IL-2024-005678">
                                IL-2024-005678
                            </button>
                            <button className="to-chip" data-demo="IL-2024-009999">
                                IL-2024-009999
                            </button>
                            </div>
                        </div>
                        {/* Order Not Found State */}
                        <div className="to-not-found d-none" id="toNotFound">
                            <div className="to-nf-icon">
                            <i className="bi bi-exclamation-circle" />
                            </div>
                            <h3>
                            Order Not Found
                            </h3>
                            <p>
                            We couldn't find an order matching
                            <strong id="nfOrderId" />
                            . Please double-check your order ID
                                or contact our support team.
                            </p>
                            <a href="contact.html" className="to-btn-support">
                            <i className="bi bi-headset me-2" />
                            Contact Support
                            </a>
                        </div>
                        </div>
                    </div>
                    {/* ===== Order Result Panel ===== */}
                    <div className="to-result-wrapper d-none" id="toResult">
                        {/* Order Summary Bar */}
                        <div className="to-summary-bar">
                        <div className="to-summary-left">
                            <div className="to-summary-order">
                            <span className="to-summary-label">
                                Order ID
                            </span>
                            <span className="to-summary-value fw-bold" id="resOrderId">
                                IL-2024-001234
                            </span>
                            </div>
                            <div className="to-summary-sep" />
                            <div className="to-summary-order">
                            <span className="to-summary-label">
                                Placed On
                            </span>
                            <span className="to-summary-value" id="resOrderDate">
                                Jan 15, 2024
                            </span>
                            </div>
                            <div className="to-summary-sep" />
                            <div className="to-summary-order">
                            <span className="to-summary-label">
                                Carrier
                            </span>
                            <span className="to-summary-value" id="resCarrier">
                                Viettel Post
                            </span>
                            </div>
                            <div className="to-summary-sep" />
                            <div className="to-summary-order">
                            <span className="to-summary-label">
                                Est. Delivery
                            </span>
                            <span className="to-summary-value" id="resEta">
                                Apr 25, 2024
                            </span>
                            </div>
                        </div>
                        <div className="to-summary-right">
                            <span className="to-status-badge" id="resStatusBadge">
                            <i className="bi bi-clock-history me-1" id="resStatusIcon" />
                            <span id="resStatusText">
                                In Transit
                            </span>
                            </span>
                        </div>
                        </div>
                        <div className="row g-4 mt-1">
                        {/* Tracking Timeline */}
                        <div className="col-lg-7">
                            <div className="to-card">
                            <div className="to-card-header">
                                <i className="bi bi-geo-alt-fill me-2" />
                                Shipment Timeline
                            </div>
                            <div className="to-card-body">
                                <div className="to-timeline" id="toTimeline">
                                {/* Injected by JS */}
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* Order Details & Delivery Info */}
                        <div className="col-lg-5">
                            {/* Items in order */}
                            <div className="to-card mb-4">
                            <div className="to-card-header">
                                <i className="bi bi-box-seam me-2" />
                                Order Items
                            </div>
                            <div className="to-card-body">
                                <div id="toOrderItems" className="to-items-list">
                                {/* Injected by JS */}
                                </div>
                                <div className="to-order-total">
                                <span>
                                    Order Total
                                </span>
                                <span className="fw-bold" id="resTotalPrice">
                                    $0.00
                                </span>
                                </div>
                            </div>
                            </div>
                            {/* Delivery Info */}
                            <div className="to-card">
                            <div className="to-card-header">
                                <i className="bi bi-house-door me-2" />
                                Delivery Information
                            </div>
                            <div className="to-card-body">
                                <div className="to-delivery-info">
                                <div className="to-di-row">
                                    <i className="bi bi-person-fill" />
                                    <div>
                                    <div className="to-di-label">
                                        Recipient
                                    </div>
                                    <div className="to-di-value" id="resRecipient">
                                        —
                                    </div>
                                    </div>
                                </div>
                                <div className="to-di-row">
                                    <i className="bi bi-geo-alt-fill" />
                                    <div>
                                    <div className="to-di-label">
                                        Delivery Address
                                    </div>
                                    <div className="to-di-value" id="resAddress">
                                        —
                                    </div>
                                    </div>
                                </div>
                                <div className="to-di-row">
                                    <i className="bi bi-telephone-fill" />
                                    <div>
                                    <div className="to-di-label">
                                        Phone
                                    </div>
                                    <div className="to-di-value" id="resPhone">
                                        —
                                    </div>
                                    </div>
                                </div>
                                <div className="to-di-row">
                                    <i className="bi bi-upc-scan" />
                                    <div>
                                    <div className="to-di-label">
                                        Tracking Number
                                    </div>
                                    <div className="to-di-value" id="resTracking">
                                        —
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <a href="contact.html" className="to-btn-support mt-3">
                                <i className="bi bi-headset me-2" />
                                Need Help?
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Help Banner */}
                        <div className="to-help-banner">
                        <div className="to-help-left">
                            <i className="bi bi-shield-check" />
                            <div>
                            <h5>
                                Need assistance with your order?
                            </h5>
                            <p>
                                Our industrial procurement support team is available Monday–Friday, 8am–6pm.
                            </p>
                            </div>
                        </div>
                        <div className="to-help-right">
                            <a href="contact.html" className="to-btn-outline">
                            Contact Us
                            </a>
                            <a href="support.html" className="to-btn-black">
                            Help Center
                            </a>
                        </div>
                        </div>
                    </div>
                    {/* /to-result-wrapper */}
                    </div>
                </section>
                </main>
        </>
    )
}
export default TrackOrder