const CompanyDetail = () => {
    return (
        <>
            <main className="company-body">
                <div className="container">
                    <div className="row gy-5">
                    {/* LEFT: Main Panel */}
                    <div className="col-lg-8" id="main-panel">
                        {/* ============ TAB: COMPANY INFO ============ */}
                        <div className="tab-panel active" id="tab-info">
                        <div id="section-info">
                            {/* About */}
                            <div className="info-card mb-4">
                            <div className="info-card-header">
                                <div className="icon">
                                <i className="bi bi-building" />
                                </div>
                                <div>
                                <h5>
                                    About Estec Vina
                                </h5>
                                <p style={{ 'margin': '0', 'fontSize': '0.82rem', 'color': 'var(--muted)' }}>
                                    Full company profile & background
                                </p>
                                </div>
                            </div>
                            <div className="info-card-body">
                                <p style={{ 'color': 'var(--muted)', 'fontSize': '0.95rem', 'lineHeight': '1.8', 'marginBottom': '16px' }}>
                                Estec Vina Co., Ltd. is a leading precision electronics manufacturer established in 2009,
                                    headquartered at VSIP II Industrial Park, Binh Duong Province. As a wholly-owned subsidiary of Estec
                                    Korea Ltd., the company brings over 30 years of global manufacturing expertise to Vietnam's rapidly
                                    growing industrial base.
                                </p>
                                <p style={{ 'color': 'var(--muted)', 'fontSize': '0.95rem', 'lineHeight': '1.8', 'marginBottom': '16px' }}>
                                Specializing in PCB assemblies, electronic modules, harness systems, and OEM precision components,
                                    Estec Vina serves tier-1 automotive, consumer electronics, and industrial automation clients across
                                    Asia, Europe, and North America. The facility spans 28,000m² with state-of-the-art SMT, THT, and
                                    automated testing lines.
                                </p>
                                <p style={{ 'color': 'var(--muted)', 'fontSize': '0.95rem', 'lineHeight': '1.8', 'marginBottom': '0' }}>
                                With ISO 9001:2015, IATF 16949, and ISO 14001 certifications, Estec Vina maintains the highest
                                    standards of quality management and environmental responsibility, making it one of Vietnam's most
                                    trusted B2B electronics suppliers.
                                </p>
                            </div>
                            </div>
                            {/* Key Details Grid */}
                            <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <div className="info-card h-100">
                                <div className="info-card-header">
                                    <div className="icon">
                                    <i className="bi bi-card-list" />
                                    </div>
                                    <div>
                                    <h5>
                                        Company Details
                                    </h5>
                                    </div>
                                </div>
                                <div className="info-card-body">
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-briefcase-fill" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Industry Type
                                        </span>
                                        <span className="ir-value">
                                        Electronics Manufacturing / Precision Engineering
                                        </span>
                                    </div>
                                    </div>
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-calendar2-check" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Year Established
                                        </span>
                                        <span className="ir-value">
                                        2009 (15 Years Operating)
                                        </span>
                                    </div>
                                    </div>
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-people-fill" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Total Employees
                                        </span>
                                        <span className="ir-value">
                                        320 full-time + 80 contractors
                                        </span>
                                    </div>
                                    </div>
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-currency-dollar" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Annual Revenue
                                        </span>
                                        <span className="ir-value">
                                        USD 45–60M (2024 estimate)
                                        </span>
                                    </div>
                                    </div>
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-building-gear" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Factory Floor Area
                                        </span>
                                        <span className="ir-value">
                                        28,000 m² (expandable to 45,000 m²)
                                        </span>
                                    </div>
                                    </div>
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-building-check" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Business Type
                                        </span>
                                        <span className="ir-value">
                                        Foreign-owned Manufacturer / OEM / ODM
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-card h-100">
                                <div className="info-card-header">
                                    <div className="icon">
                                    <i className="bi bi-geo-alt-fill" />
                                    </div>
                                    <div>
                                    <h5>
                                        Location & Operations
                                    </h5>
                                    </div>
                                </div>
                                <div className="info-card-body">
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-map-fill" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Industrial Zone
                                        </span>
                                        <span className="ir-value">
                                        VSIP II – Binh Duong
                                        </span>
                                    </div>
                                    </div>
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-pin-map-fill" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Full Address
                                        </span>
                                        <span className="ir-value">
                                        Plot I-10C, VSIP II, Binh Duong New City, Binh Duong Province
                                        </span>
                                    </div>
                                    </div>
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-globe2" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Export Markets
                                        </span>
                                        <span className="ir-value">
                                        Korea, Japan, USA, Germany, Thailand (+38 more)
                                        </span>
                                    </div>
                                    </div>
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-clock-fill" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Production Shifts
                                        </span>
                                        <span className="ir-value">
                                        24/7 (3 shifts, 365 days/year)
                                        </span>
                                    </div>
                                    </div>
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-box-seam-fill" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Min. Order Quantity
                                        </span>
                                        <span className="ir-value">
                                        100 pcs (custom orders negotiable)
                                        </span>
                                    </div>
                                    </div>
                                    <div className="info-row">
                                    <div className="ir-icon">
                                        <i className="bi bi-truck-flatbed" />
                                    </div>
                                    <div>
                                        <span className="ir-label">
                                        Lead Time
                                        </span>
                                        <span className="ir-value">
                                        7–21 business days (standard)
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* Certifications */}
                            <div className="info-card mb-4">
                            <div className="info-card-header">
                                <div className="icon">
                                <i className="bi bi-award-fill" />
                                </div>
                                <div>
                                <h5>
                                    Certifications & Standards
                                </h5>
                                </div>
                            </div>
                            <div className="info-card-body">
                                <div className="d-flex flex-wrap gap-3">
                                <div className="cert-badge">
                                    <i className="bi bi-patch-check-fill" />
                                    ISO 9001:2015
                                </div>
                                <div className="cert-badge">
                                    <i className="bi bi-patch-check-fill" />
                                    IATF 16949
                                </div>
                                <div className="cert-badge">
                                    <i className="bi bi-patch-check-fill" />
                                    ISO 14001:2015
                                </div>
                                <div className="cert-badge">
                                    <i className="bi bi-patch-check-fill" />
                                    RoHS Compliant
                                </div>
                                <div className="cert-badge">
                                    <i className="bi bi-patch-check-fill" />
                                    REACH Compliant
                                </div>
                                <div className="cert-badge">
                                    <i className="bi bi-patch-check-fill" />
                                    UL Listed
                                </div>
                                <div className="cert-badge">
                                    <i className="bi bi-patch-check-fill" />
                                    CE Marked
                                </div>
                                <div className="cert-badge">
                                    <i className="bi bi-patch-check-fill" />
                                    MSD Certified
                                </div>
                                <div className="cert-badge">
                                    <i className="bi bi-patch-check-fill" />
                                    IPC Class II/III
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* Factory Gallery */}
                            {/* Reviews */}
                        </div>
                        </div>
                        {/* ============ END TAB: COMPANY INFO ============ */}
                        {/* ============ TAB: PRODUCTS ============ */}
                        <div className="tab-panel" id="tab-products">
                        <div id="section-products">
                            <div className="sec-header">
                            <div>
                                <div className="sec-eyebrow">
                                <i className="bi bi-grid-fill" />
                                PRODUCT CATALOG
                                </div>
                                <h2 className="sec-title">
                                Product Categories & Featured Products
                                </h2>
                                <p className="sec-sub">
                                Browse Estec Vina's 1,200+ product lines across 5 major categories
                                </p>
                            </div>
                            <a href="category.html" style={{ 'display': 'inline-flex', 'alignItems': 'center', 'gap': '7px', 'color': 'var(--brand)', 'fontWeight': '700', 'fontSize': '0.88rem', 'textDecoration': 'none', 'border': '1.5px solid #c7d2fe', 'borderRadius': '10px', 'padding': '9px 18px', 'transition': 'all 0.2s' }} onMouseOver={() => {}} onMouseOut={() => {}}>
                                Full Catalog
                                <i className="bi bi-arrow-right" />
                            </a>
                            </div>
                            {/* Category tabs */}
                            <div className="cat-tab-bar">
                            <button className="cat-tab-btn active" data-grid="pcb" onClick={() => {}}>
                                <i className="bi bi-motherboard" />
                                PCB & Assemblies
                            </button>
                            <button className="cat-tab-btn" data-grid="harness" onClick={() => {}}>
                                <i className="bi bi-usb-drive" />
                                Wire Harness
                            </button>
                            <button className="cat-tab-btn" data-grid="sensors" onClick={() => {}}>
                                <i className="bi bi-broadcast" />
                                Sensors & Modules
                            </button>
                            <button className="cat-tab-btn" data-grid="oem" onClick={() => {}}>
                                <i className="bi bi-gear-wide-connected" />
                                OEM Parts
                            </button>
                            <button className="cat-tab-btn" data-grid="testing" onClick={() => {}}>
                                <i className="bi bi-clipboard2-pulse" />
                                Testing Equipment
                            </button>
                            </div>
                            {/* PCB Products */}
                            <div className="prod-grid active" id="grid-pcb">
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" alt="PCB" />
                                <span className="prod-card-badge">
                                    Bestseller
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 500
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Automotive Grade PCB Assembly (IATF 16949)
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (128 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $3.20/pcs
                                    </span>
                                    <span className="prod-card-price">
                                        $2.45/pcs
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400" alt="PCBA" />
                                <span className="prod-card-badge">
                                    ISO Certified
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 200
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    SMT + THT Mixed Technology PCBA
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (94 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $8.00/pcs
                                    </span>
                                    <span className="prod-card-price">
                                        $5.80/pcs
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>

                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1655876726270-2caec425d0cd?auto=format&fit=crop&q=80&w=400" alt="Flex PCB" />
                                <span className="prod-card-badge">
                                    New
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 1000
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Flexible PCB (FPC) – 4-Layer Rigid-Flex
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★☆
                                    <span>
                                    (56 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $1.80/pcs
                                    </span>
                                    <span className="prod-card-price">
                                        $1.20/pcs
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" alt="Control Board" />
                                <span className="prod-card-badge">
                                    Premium
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 100
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Industrial Control Board with ARM Cortex-M4
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (212 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $18.50/pcs
                                    </span>
                                    <span className="prod-card-price">
                                        $14.90/pcs
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            </div>
                            {/* Wire Harness Products */}
                            <div className="prod-grid" id="grid-harness">
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&q=80&w=400" alt="Harness" />
                                <span className="prod-card-badge">
                                    Automotive OEM
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 500
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Automotive Wire Harness Assembly – IATF 16949
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (340 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $12.00/set
                                    </span>
                                    <span className="prod-card-price">
                                        $9.50/set
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=400" alt="Industrial Cable" />
                                <span className="prod-card-badge">
                                    Bestseller
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 200
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Industrial Cable Assembly – Custom Spec
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (180 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $6.00/set
                                    </span>
                                    <span className="prod-card-price">
                                        $4.20/set
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400" alt="EV Harness" />
                                <span className="prod-card-badge">
                                    EV Certified
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 100
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    EV High-Voltage Wire Harness (800V rated)
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (67 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $42.00/set
                                    </span>
                                    <span className="prod-card-price">
                                        $38.00/set
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" alt="Harness Tester" />
                                <span className="prod-card-badge">
                                    Testing Kit
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 10
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Cable Continuity & Hi-Pot Test Fixtures
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★☆
                                    <span>
                                    (30 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $280/unit
                                    </span>
                                    <span className="prod-card-price">
                                        $220/unit
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            </div>
                            {/* Sensors Products */}
                            <div className="prod-grid" id="grid-sensors">
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&q=80&w=400" alt="Sensor" />
                                <span className="prod-card-badge">
                                    Industrial Grade
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 1000
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Temperature & Humidity Sensor Module (I2C)
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (450 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $0.85/pcs
                                    </span>
                                    <span className="prod-card-price">
                                        $0.62/pcs
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=400" alt="Proximity" />
                                <span className="prod-card-badge">
                                    OEM Available
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 500
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Capacitive Proximity Sensor – IP68
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (210 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $2.40/pcs
                                    </span>
                                    <span className="prod-card-price">
                                        $1.75/pcs
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" alt="IoT" />
                                <span className="prod-card-badge">
                                    IoT Ready
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 200
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Industrial IoT Gateway Module – LTE Cat-M1
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★☆
                                    <span>
                                    (88 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $24.00/pcs
                                    </span>
                                    <span className="prod-card-price">
                                        $19.50/pcs
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1655876726270-2caec425d0cd?auto=format&fit=crop&q=80&w=400" alt="Vision" />
                                <span className="prod-card-badge">
                                    Machine Vision
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 50
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Machine Vision Camera Module – 5MP
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (40 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $145/unit
                                    </span>
                                    <span className="prod-card-price">
                                        $118/unit
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            </div>
                            {/* OEM Parts */}
                            <div className="prod-grid" id="grid-oem">
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" alt="OEM Housing" />
                                <span className="prod-card-badge">
                                    Custom OEM
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 500
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Die-Cast Aluminum Motor Housing (OEM)
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (310 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $15.00/pcs
                                    </span>
                                    <span className="prod-card-price">
                                        $11.20/pcs
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=400" alt="Precision Parts" />
                                <span className="prod-card-badge">
                                    CNC Machined
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 100
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    CNC Precision Shaft – Stainless Steel 304
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (140 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $4.50/pcs
                                    </span>
                                    <span className="prod-card-price">
                                        $3.10/pcs
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&q=80&w=400" alt="Bracket" />
                                <span className="prod-card-badge">
                                    Sheet Metal
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 300
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Sheet Metal Bracket – Laser Cut SGCC
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★☆
                                    <span>
                                    (95 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $1.80/pcs
                                    </span>
                                    <span className="prod-card-price">
                                        $1.20/pcs
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400" alt="Gasket" />
                                <span className="prod-card-badge">
                                    Sealing
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 1000
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Custom Silicone Gasket – IP67 Grade
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (220 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $0.45/pcs
                                    </span>
                                    <span className="prod-card-price">
                                        $0.32/pcs
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            </div>
                            {/* Testing Equipment */}
                            <div className="prod-grid" id="grid-testing">
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&q=80&w=400" alt="AOI" />
                                <span className="prod-card-badge">
                                    AOI System
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 1
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Automated Optical Inspection (AOI) Unit
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (25 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $48,000
                                    </span>
                                    <span className="prod-card-price">
                                        $38,500
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400" alt="ICT" />
                                <span className="prod-card-badge">
                                    Functional Test
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 1
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    In-Circuit Test (ICT) Fixture Turnkey Service
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (40 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        Custom Quote
                                    </span>
                                    <span className="prod-card-price">
                                        Get Quote
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" alt="X-Ray" />
                                <span className="prod-card-badge">
                                    X-Ray Inspection
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: 1
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    BGA X-Ray Inspection Service (per batch)
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★★
                                    <span>
                                    (60 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        $350/batch
                                    </span>
                                    <span className="prod-card-price">
                                        $280/batch
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            <a href="product-details.html" className="prod-card">
                                <div className="prod-card-img">
                                <img src="https://images.unsplash.com/photo-1655876726270-2caec425d0cd?auto=format&fit=crop&q=80&w=400" alt="Environmental" />
                                <span className="prod-card-badge">
                                    Reliability
                                </span>
                                <span className="prod-card-moq">
                                    MOQ: Project
                                </span>
                                </div>
                                <div className="prod-card-body">
                                <div className="prod-card-name">
                                    Environmental Stress Screening (ESS) Service
                                </div>
                                <div className="prod-card-rating">
                                    ★★★★☆
                                    <span>
                                    (18 orders)
                                    </span>
                                </div>
                                <div className="prod-card-price-row">
                                    <div>
                                    <span className="prod-card-old">
                                        Custom
                                    </span>
                                    <span className="prod-card-price">
                                        Get Quote
                                    </span>
                                    </div>
                                    <button className="btn-quick-rfq" onClick={() => {}}>
                                    <i className="bi bi-file-text" />
                                    RFQ
                                    </button>
                                </div>
                                </div>
                            </a>
                            </div>
                        </div>
                        </div>
                        {/* ============ END TAB: PRODUCTS ============ */}
                        {/* ============ TAB: NEWS ============ */}
                        <div className="tab-panel" id="tab-news">
                        <div id="section-news">
                            <div className="sec-header">
                            <div>
                                <div className="sec-eyebrow">
                                <i className="bi bi-newspaper" />
                                NEWS & UPDATES
                                </div>
                                <h2 className="sec-title">
                                Company News & Press Releases
                                </h2>
                                <p className="sec-sub">
                                Latest updates from Estec Vina
                                </p>
                            </div>
                            </div>
                            {/* News grid */}
                            <div className="row g-4 mb-4">
                            <div className="col-md-6">
                                <div className="news-card-cd">
                                <div className="news-img-wrap">
                                    <img className="news-img" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=700" alt="Expansion News" />
                                </div>
                                <div className="news-body-cd">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <span className="news-cat-pill-cd" style={{ 'background': '#dbeafe', 'color': '#1d4ed8' }}>
                                        <i className="bi bi-building" />
                                        Company
                                    </span>
                                    <span style={{ 'fontSize': '0.75rem', 'color': '#94a3b8' }}>
                                        <i className="bi bi-calendar3 me-1" />
                                        12 April
                                        2026
                                    </span>
                                    </div>
                                    <a className="news-title-cd d-block" href="#">
                                    Estec Vina Breaks Ground on Phase 3 Expansion – 10,000m²
                                        New Production Hall
                                    </a>
                                    <p className="news-excerpt-cd">
                                    Estec Vina officially commenced construction on its Phase 3 factory
                                        expansion at VSIP II, adding 10,000m² of advanced SMT capacity to meet growing demand from
                                        tier-1 automotive clients in Korea and Germany...
                                    </p>
                                </div>
                                <div className="news-footer-cd">
                                    <span className="news-date-cd">
                                    <i className="bi bi-eye me-1" />
                                    1,420 views · 5 min read
                                    </span>
                                    <a href="#" className="news-read-link">
                                    Read more
                                    <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="news-card-cd">
                                <div className="news-img-wrap">
                                    <img className="news-img" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=700" alt="Certification" />
                                </div>
                                <div className="news-body-cd">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <span className="news-cat-pill-cd" style={{ 'background': '#dcfce7', 'color': '#15803d' }}>
                                        <i className="bi bi-award" />
                                        Certification
                                    </span>
                                    <span style={{ 'fontSize': '0.75rem', 'color': '#94a3b8' }}>
                                        <i className="bi bi-calendar3 me-1" />
                                        5 March
                                        2026
                                    </span>
                                    </div>
                                    <a className="news-title-cd d-block" href="#">
                                    Estec Vina Successfully Renews IATF 16949:2016
                                        Certification for Automotive Supply Chain
                                    </a>
                                    <p className="news-excerpt-cd">
                                    Following a rigorous 3-day audit by TÜV SÜD, Estec Vina has
                                        successfully renewed its IATF 16949:2016 certificate with zero major non-conformities,
                                        demonstrating its continued excellence in automotive quality management...
                                    </p>
                                </div>
                                <div className="news-footer-cd">
                                    <span className="news-date-cd">
                                    <i className="bi bi-eye me-1" />
                                    890 views · 3 min read
                                    </span>
                                    <a href="#" className="news-read-link">
                                    Read more
                                    <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="news-card-cd">
                                <div className="news-img-wrap">
                                    <img className="news-img" src="https://images.unsplash.com/photo-1655876726270-2caec425d0cd?auto=format&fit=crop&q=80&w=700" alt="AI" />
                                </div>
                                <div className="news-body-cd">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <span className="news-cat-pill-cd" style={{ 'background': '#f3e8ff', 'color': '#7c3aed' }}>
                                        <i className="bi bi-cpu" />
                                        Technology
                                    </span>
                                    <span style={{ 'fontSize': '0.75rem', 'color': '#94a3b8' }}>
                                        <i className="bi bi-calendar3 me-1" />
                                        18 January
                                        2026
                                    </span>
                                    </div>
                                    <a className="news-title-cd d-block" href="#">
                                    Estec Vina Deploys AI-Powered AOI System – Defect
                                        Detection Rate Reaches 99.97%
                                    </a>
                                    <p className="news-excerpt-cd">
                                    Estec Vina has implemented a new deep-learning based Automated Optical
                                        Inspection (AOI) system from Cognex Vision, enabling real-time defect detection across all SMT
                                        lines with an unprecedented 99.97% accuracy rate...
                                    </p>
                                </div>
                                <div className="news-footer-cd">
                                    <span className="news-date-cd">
                                    <i className="bi bi-eye me-1" />
                                    2,100 views · 4 min read
                                    </span>
                                    <a href="#" className="news-read-link">
                                    Read more
                                    <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="news-card-cd">
                                <div className="news-img-wrap">
                                    <img className="news-img" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=700" alt="Partnership" />
                                </div>
                                <div className="news-body-cd">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <span className="news-cat-pill-cd" style={{ 'background': '#fef3c7', 'color': '#b45309' }}>
                                        <i className="bi bi-handshake" />
                                        Partnership
                                    </span>
                                    <span style={{ 'fontSize': '0.75rem', 'color': '#94a3b8' }}>
                                        <i className="bi bi-calendar3 me-1" />
                                        10 November
                                        2025
                                    </span>
                                    </div>
                                    <a className="news-title-cd d-block" href="#">
                                    Estec Vina Signs Strategic EMS Partnership with Bosch
                                        Vietnam for EV Components
                                    </a>
                                    <p className="news-excerpt-cd">
                                    Estec Vina has entered into a 5-year strategic partnership with Bosch
                                        Vietnam as a preferred EMS supplier for electric vehicle (EV) power electronics, covering PCB
                                        assemblies and wire harness components for the Southeast Asian market...
                                    </p>
                                </div>
                                <div className="news-footer-cd">
                                    <span className="news-date-cd">
                                    <i className="bi bi-eye me-1" />
                                    3,500 views · 6 min read
                                    </span>
                                    <a href="#" className="news-read-link">
                                    Read more
                                    <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* Press releases */}
                            <div className="d-flex align-items-center gap-3 mb-4 mt-5">
                            <div className="sec-eyebrow" style={{ 'marginBottom': '0' }}>
                                <i className="bi bi-megaphone-fill" />
                                PRESS RELEASES
                            </div>
                            </div>
                            <a href="#" className="press-mini">
                            <div className="pm-icon">
                                <i className="bi bi-file-earmark-text-fill" />
                            </div>
                            <div>
                                <div className="pm-title">
                                Q1 2026 Financial and Operational Results – Record Revenue of USD 15.2M
                                </div>
                                <div className="pm-meta">
                                <i className="bi bi-calendar3 me-1" />
                                April 5, 2026  ·
                                <i className="bi bi-file-pdf me-1" />
                                PDF Available
                                </div>
                            </div>
                            </a>
                            <a href="#" className="press-mini">
                            <div className="pm-icon">
                                <i className="bi bi-trophy-fill" />
                            </div>
                            <div>
                                <div className="pm-title">
                                Estec Vina Wins "Best Supplier Award 2025" – VSIP Industrial Excellence Awards
                                </div>
                                <div className="pm-meta">
                                <i className="bi bi-calendar3 me-1" />
                                December 12, 2025  ·
                                <i className="bi bi-images me-1" />
                                Photos Available
                                </div>
                            </div>
                            </a>
                            <a href="#" className="press-mini">
                            <div className="pm-icon">
                                <i className="bi bi-globe2" />
                            </div>
                            <div>
                                <div className="pm-title">
                                Estec Vina Exhibiting at Productronica 2025, Munich – Booth D3.320
                                </div>
                                <div className="pm-meta">
                                <i className="bi bi-calendar3 me-1" />
                                October 28, 2025  ·  Exhibition
                                    Announcement
                                </div>
                            </div>
                            </a>
                            <a href="#" className="press-mini">
                            <div className="pm-icon">
                                <i className="bi bi-recycle" />
                            </div>
                            <div>
                                <div className="pm-title">
                                Estec Vina Achieves Zero Landfill Status – Environmental Sustainability Report
                                    2025
                                </div>
                                <div className="pm-meta">
                                <i className="bi bi-calendar3 me-1" />
                                August 15, 2025  ·
                                <i className="bi bi-file-pdf me-1" />
                                Full Report
                                </div>
                            </div>
                            </a>
                            <div className="mt-4 text-center">
                            <button style={{ 'background': 'transparent', 'border': '1.5px solid var(--border)', 'borderRadius': '10px', 'padding': '10px 28px', 'fontSize': '0.88rem', 'fontWeight': '700', 'color': 'var(--brand)', 'cursor': 'pointer', 'transition': 'all 0.2s' }} onMouseOver={() => {}} onMouseOut={() => {}}>
                                Load More News
                                <i className="bi bi-arrow-down ms-1" />
                            </button>
                            </div>
                        </div>
                        </div>
                        {/* ============ END TAB: NEWS ============ */}
                        {/* ============ TAB: RFQ ============ */}
                        <div className="tab-panel" id="tab-rfq">
                        <div id="section-rfq">
                            <div className="sec-header">
                            <div>
                                <div className="sec-eyebrow">
                                <i className="bi bi-file-earmark-text-fill" />
                                REQUEST FOR QUOTATION
                                </div>
                                <h2 className="sec-title">
                                Submit an RFQ to Estec Vina
                                </h2>
                                <p className="sec-sub">
                                Get a precise quote within 2 hours from a verified supplier
                                </p>
                            </div>
                            </div>
                            <div className="rfq-inline-card">
                            {/* Header */}
                            <div className="rfq-inline-header">
                                <div className="position-relative" style={{ 'zIndex': '1' }}>
                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <div style={{ 'width': '50px', 'height': '50px', 'borderRadius': '14px', 'background': 'rgba(255,255,255,0.12)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '1.4rem', 'fontWeight': '900', 'color': '#fff' }}>
                                    EV
                                    </div>
                                    <div>
                                    <div style={{ 'color': '#fff', 'fontWeight': '800', 'fontSize': '1.1rem' }}>
                                        Estec Vina Co., Ltd.
                                    </div>
                                    <div style={{ 'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap', 'marginTop': '4px' }}>
                                        <span style={{ 'display': 'inline-flex', 'alignItems': 'center', 'gap': '5px', 'fontSize': '0.76rem', 'fontWeight': '600', 'color': '#34d399' }}>
                                        <i className="bi bi-patch-check-fill" />
                                        Verified Supplier
                                        </span>
                                        <span style={{ 'display': 'inline-flex', 'alignItems': 'center', 'gap': '5px', 'fontSize': '0.76rem', 'fontWeight': '600', 'color': 'rgba(255,255,255,0.6)' }}>
                                        <i className="bi bi-clock" />
                                        Responds in less than 2h
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                <p style={{ 'color': 'rgba(255,255,255,0.55)', 'fontSize': '0.9rem', 'margin': '0' }}>
                                    Your enquiry will be directly
                                    sent to the procurement team at Estec Vina. All quotes are confidential.
                                </p>
                                </div>
                            </div>
                            {/* Form body */}
                            <div className="rfq-inline-body">
                                <form id="estec-rfq-form" noValidate={true}>
                                <div className="row g-4">
                                    {/* Product / Category */}
                                    <div className="col-12">
                                    <label className="rfq-label-cd">
                                        <i className="bi bi-grid-3x3-gap" />
                                        Product / Category
                                        <span className="req">
                                        *
                                        </span>
                                    </label>
                                    <select className="rfq-control" required={true} id="rfq-category">
                                        <option value="">
                                        — Select a product category —
                                        </option>
                                        <option>
                                        PCB & PCBA Assemblies
                                        </option>
                                        <option>
                                        Wire Harness & Cable Assembly
                                        </option>
                                        <option>
                                        Sensors & Electronic Modules
                                        </option>
                                        <option>
                                        OEM Precision Parts
                                        </option>
                                        <option>
                                        Testing Equipment & Services
                                        </option>
                                        <option>
                                        Custom / Other (specify below)
                                        </option>
                                    </select>
                                    </div>
                                    {/* Product Name + Product Code */}
                                    <div className="col-md-7">
                                    <label className="rfq-label-cd">
                                        <i className="bi bi-box-seam-fill" />
                                        Product Name / Description
                                        <span className="req">
                                        *
                                        </span>
                                    </label>
                                    <input type="text" className="rfq-control" id="rfq-product" placeholder="e.g. Automotive PCB Assembly – CAN Bus Controller" required={true} />
                                    </div>
                                    <div className="col-md-5">
                                    <label className="rfq-label-cd">
                                        <i className="bi bi-upc-scan" />
                                        Product / Part Number
                                        <span style={{ 'fontSize': '0.75rem', 'fontWeight': '500', 'color': 'var(--muted)' }}>
                                        (if known)
                                        </span>
                                    </label>
                                    <input type="text" className="rfq-control" id="rfq-partno" placeholder="e.g. EST-PCB-2024-A7" />
                                    </div>
                                    {/* Quantity + Unit */}
                                    <div className="col-md-5">
                                    <label className="rfq-label-cd">
                                        <i className="bi bi-hash" />
                                        Quantity Required
                                        <span className="req">
                                        *
                                        </span>
                                    </label>
                                    <input type="number" className="rfq-control" id="rfq-qty" min="1" placeholder="e.g. 5000" required={true} />
                                    </div>
                                    <div className="col-md-4">
                                    <label className="rfq-label-cd">
                                        <i className="bi bi-rulers" />
                                        Unit of Measure
                                    </label>
                                    <select className="rfq-control" id="rfq-unit">
                                        <option>
                                        Pieces (pcs)
                                        </option>
                                        <option>
                                        Sets
                                        </option>
                                        <option>
                                        Meters (m)
                                        </option>
                                        <option>
                                        Kilograms (kg)
                                        </option>
                                        <option>
                                        Lots / Batches
                                        </option>
                                    </select>
                                    </div>
                                    <div className="col-md-3">
                                    <label className="rfq-label-cd">
                                        <i className="bi bi-calendar-check" />
                                        Delivery Needed
                                    </label>
                                    <input type="date" className="rfq-control" id="rfq-delivery" />
                                    </div>
                                    {/* Budget range */}
                                    <div className="col-md-6">
                                    <label className="rfq-label-cd">
                                        <i className="bi bi-currency-dollar" />
                                        Target Budget (USD)
                                        <span style={{ 'fontSize': '0.75rem', 'color': 'var(--muted)' }}>
                                        (optional)
                                        </span>
                                    </label>
                                    <select className="rfq-control" id="rfq-budget">
                                        <option value="">
                                        — Select budget range —
                                        </option>
                                        <option>
                                        Under $5,000
                                        </option>
                                        <option>
                                        $5,000 – $20,000
                                        </option>
                                        <option>
                                        $20,000 – $100,000
                                        </option>
                                        <option>
                                        $100,000 – $500,000
                                        </option>
                                        <option>
                                        Above $500,000
                                        </option>
                                        <option>
                                        Open to quote
                                        </option>
                                    </select>
                                    </div>
                                    <div className="col-md-6">
                                    <label className="rfq-label-cd">
                                        <i className="bi bi-globe2" />
                                        Destination Country
                                    </label>
                                    <input type="text" className="rfq-control" id="rfq-dest" placeholder="e.g. South Korea, Germany" />
                                    </div>
                                    {/* Specifications */}
                                    <div className="col-12">
                                    <label className="rfq-label-cd">
                                        <i className="bi bi-file-earmark-text" />
                                        Technical Specifications
                                        <span className="req">
                                        *
                                        </span>
                                    </label>
                                    <textarea className="rfq-control rfq-textarea" id="rfq-specs" placeholder="Describe required specifications: dimensions, material, tolerance, certifications (ISO, IATF, RoHS), finish, testing requirements, etc." required={true} />
                                    <div style={{ 'textAlign': 'right', 'fontSize': '0.78rem', 'color': '#94a3b8', 'marginTop': '4px' }}>
                                        Be as detailed as
                                        possible for faster quotation.
                                    </div>
                                    </div>
                                    {/* Priority */}
                                    <div className="col-12">
                                    <label className="rfq-label-cd">
                                        <i className="bi bi-exclamation-circle-fill" />
                                        Request
                                        Priority
                                    </label>
                                    <div className="rfq-priority-row">
                                        <div className="rfq-prio-btn" data-p="standard" onClick={() => {}}>
                                        <i className="bi bi-clock" />
                                        Standard
                                        </div>
                                        <div className="rfq-prio-btn sel" data-p="urgent" onClick={() => {}}>
                                        <i className="bi bi-lightning-fill" />
                                        Urgent
                                        </div>
                                        <div className="rfq-prio-btn" data-p="critical" onClick={() => {}}>
                                        <i className="bi bi-alarm-fill" />
                                        Critical / Same-day
                                        </div>
                                    </div>
                                    </div>
                                    {/* Contact info */}
                                    <div className="col-12">
                                    <div style={{ 'background': '#f8fafc', 'border': '1px solid var(--border)', 'borderRadius': '14px', 'padding': '20px' }}>
                                        <div style={{ 'fontWeight': '700', 'fontSize': '0.93rem', 'color': 'var(--text)', 'marginBottom': '16px' }}>
                                        <i className="bi bi-person-fill me-2" style={{ 'color': 'var(--brand)' }} />
                                        Your Contact Details
                                        </div>
                                        <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="rfq-label-cd">
                                            <i className="bi bi-person" />
                                            Full Name
                                            <span className="req">
                                                *
                                            </span>
                                            </label>
                                            <input type="text" className="rfq-control" id="rfq-name" placeholder="Your full name" required={true} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="rfq-label-cd">
                                            <i className="bi bi-building" />
                                            Company Name
                                            <span className="req">
                                                *
                                            </span>
                                            </label>
                                            <input type="text" className="rfq-control" id="rfq-company" placeholder="Your company name" required={true} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="rfq-label-cd">
                                            <i className="bi bi-envelope-fill" />
                                            Business Email
                                            <span className="req">
                                                *
                                            </span>
                                            </label>
                                            <input type="email" className="rfq-control" id="rfq-email" placeholder="you@company.com" required={true} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="rfq-label-cd">
                                            <i className="bi bi-telephone-fill" />
                                            Phone / WhatsApp
                                            </label>
                                            <input type="tel" className="rfq-control" id="rfq-phone" placeholder="+1 (234) 567-890" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* Attachments note */}
                                    <div className="col-12">
                                    <div style={{ 'background': '#f0f4ff', 'border': '1.5px dashed #c7d2fe', 'borderRadius': '12px', 'padding': '16px 20px', 'display': 'flex', 'alignItems': 'center', 'gap': '14px', 'cursor': 'pointer' }} onClick={() => {}}>
                                        <i className="bi bi-paperclip" style={{ 'fontSize': '1.5rem', 'color': 'var(--brand)', 'flexShrink': '0' }} />
                                        <div>
                                        <div style={{ 'fontWeight': '700', 'fontSize': '0.92rem', 'color': 'var(--text)' }}>
                                            Attach Technical Drawing
                                            or Specification Sheet
                                        </div>
                                        <div style={{ 'fontSize': '0.8rem', 'color': 'var(--muted)' }}>
                                            Supported: PDF, DWG, DXF, STEP, BOM Excel
                                            – Max 20MB
                                        </div>
                                        </div>
                                        <input type="file" id="rfq-file" style={{ 'display': 'none' }} multiple={true} accept=".pdf,.dwg,.dxf,.step,.xlsx,.xls" />
                                    </div>
                                    </div>
                                    {/* Terms checkbox */}
                                    <div className="col-12">
                                    <label style={{ 'display': 'flex', 'alignItems': 'flex-start', 'gap': '10px', 'cursor': 'pointer' }}>
                                        <input type="checkbox" id="rfq-agree" style={{ 'marginTop': '3px', 'width': '16px', 'height': '16px', 'accentColor': 'var(--brand)' }} required={true} />
                                        <span style={{ 'fontSize': '0.87rem', 'color': 'var(--muted)', 'lineHeight': '1.6' }}>
                                        I agree to the
                                        <a href="tos.html" style={{ 'color': 'var(--brand)' }}>
                                            Terms of Service
                                        </a>
                                        and
                                        <a href="privacy.html" style={{ 'color': 'var(--brand)' }}>
                                            Privacy Policy
                                        </a>
                                        .
                                            I understand that my enquiry will be confidentially forwarded to Estec Vina and that
                                            IndustrialZone may contact me with relevant supplier recommendations.
                                        </span>
                                    </label>
                                    </div>
                                    {/* Submit */}
                                    <div className="col-12">
                                    <button type="submit" className="btn-rfq-submit-cd" id="rfq-submit-btn">
                                        <i className="bi bi-send-fill" />
                                        Send RFQ to Estec Vina
                                        <i className="bi bi-arrow-right" />
                                    </button>
                                    <p style={{ 'textAlign': 'center', 'fontSize': '0.8rem', 'color': 'var(--muted)', 'marginTop': '12px', 'marginBottom': '0' }}>
                                        <i className="bi bi-shield-check me-1" style={{ 'color': 'var(--success)' }} />
                                        Your information is encrypted and shared only with Estec Vina. Average response time:
                                        <strong>
                                        1h 45min
                                        </strong>
                                        .
                                    </p>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                            {/* Success Message (hidden) */}
                            <div id="rfq-success-msg" style={{ 'display': 'none', 'background': 'linear-gradient(135deg,#ecfdf5,#d1fae5)', 'border': '1.5px solid #a7f3d0', 'borderRadius': '18px', 'padding': '36px', 'textAlign': 'center', 'marginTop': '20px' }}>
                            <div style={{ 'fontSize': '3rem', 'marginBottom': '12px' }}>
                                ✅
                            </div>
                            <h4 style={{ 'fontWeight': '800', 'color': '#065f46', 'marginBottom': '8px' }}>
                                RFQ Submitted Successfully!
                            </h4>
                            <p style={{ 'color': '#047857', 'fontSize': '0.97rem', 'marginBottom': '20px' }}>
                                Your request has been sent to Estec Vina.
                                You'll receive a quote within 2 hours at your registered email.
                            </p>
                            <div style={{ 'display': 'flex', 'gap': '12px', 'justifyContent': 'center', 'flexWrap': 'wrap' }}>
                                <a href="rqf.html" style={{ 'display': 'inline-flex', 'alignItems': 'center', 'gap': '8px', 'background': 'linear-gradient(135deg,#6366f1,#8b5cf6)', 'color': '#fff', 'borderRadius': '10px', 'padding': '12px 24px', 'fontWeight': '700', 'textDecoration': 'none', 'fontSize': '0.95rem' }}>
                                <i className="bi bi-file-earmark-text" />
                                Submit Another RFQ
                                </a>
                                <a href="index.html" style={{ 'display': 'inline-flex', 'alignItems': 'center', 'gap': '8px', 'background': '#fff', 'color': 'var(--text)', 'border': '1.5px solid var(--border)', 'borderRadius': '10px', 'padding': '12px 24px', 'fontWeight': '700', 'textDecoration': 'none', 'fontSize': '0.95rem' }}>
                                <i className="bi bi-house" />
                                Back to Home
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* ============ END TAB: RFQ ============ */}
                    </div>
                    {/* END LEFT PANEL */}
                    {/* RIGHT: Sidebar */}
                    <div className="col-lg-4" id="sidebar-panel">
                        {/* Contact Widget */}
                        <div className="sidebar-widget">
                        <div className="sidebar-widget-header">
                            <i className="bi bi-telephone-fill" />
                            <h6>
                            Contact Estec Vina
                            </h6>
                        </div>
                        <div className="sidebar-widget-body">
                            <div className="contact-row">
                            <i className="bi bi-person-fill" />
                            <div>
                                <div style={{ 'fontSize': '0.78rem', 'color': 'var(--muted)' }}>
                                Sales Contact
                                </div>
                                <div style={{ 'fontWeight': '600', 'fontSize': '0.9rem' }}>
                                Ms. Phan Thu Hang
                                </div>
                            </div>
                            </div>
                            <div className="contact-row">
                            <i className="bi bi-envelope-fill" />
                            <a href="mailto:sales@estecvina.com">
                                sales@estecvina.com
                            </a>
                            </div>
                            <div className="contact-row">
                            <i className="bi bi-telephone-fill" />
                            <a href="tel:+842743756789">
                                +84 274 375 6789
                            </a>
                            </div>
                            <div className="contact-row">
                            <i className="bi bi-whatsapp" />
                            <a href="#">
                                +84 901 234 567 (WhatsApp)
                            </a>
                            </div>
                            <div className="contact-row">
                            <i className="bi bi-clock-fill" />
                            <span style={{ 'fontSize': '0.87rem', 'color': 'var(--text)' }}>
                                Mon–Fri: 8:00 AM – 5:30 PM (GMT+7)
                            </span>
                            </div>
                            <div className="contact-row">
                            <i className="bi bi-geo-alt-fill" />
                            <span style={{ 'fontSize': '0.87rem', 'color': 'var(--text)' }}>
                                Plot I-10C, VSIP II, Binh Duong
                            </span>
                            </div>
                            <button onClick={() => {}} style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'gap': '8px', 'width': '100%', 'marginTop': '14px', 'padding': '13px', 'borderRadius': '12px', 'background': 'linear-gradient(135deg,var(--brand),var(--accent))', 'color': '#fff', 'border': 'none', 'fontWeight': '700', 'cursor': 'pointer', 'transition': 'all 0.2s', 'fontSize': '0.93rem' }} onMouseOver={() => {}} onMouseOut={() => {}}>
                            <i className="bi bi-file-earmark-text-fill" />
                            Quick RFQ
                            </button>
                        </div>
                        </div>
                        {/* Key Facts Widget */}
                        <div className="sidebar-widget">
                        <div className="sidebar-widget-header">
                            <i className="bi bi-star-fill" />
                            <h6>
                            Supplier Highlights
                            </h6>
                        </div>
                        <div className="sidebar-widget-body">
                            <div className="trust-item">
                            <div className="ti-icon">
                                <i className="bi bi-shield-check" />
                            </div>
                            <div>
                                <div className="ti-title">
                                Verified & Audited
                                </div>
                                <div className="ti-sub">
                                Factory audit completed Q4 2025 by IndustrialZone team
                                </div>
                            </div>
                            </div>
                            <div className="trust-item">
                            <div className="ti-icon">
                                <i className="bi bi-award" />
                            </div>
                            <div>
                                <div className="ti-title">
                                Multi-Certified Quality
                                </div>
                                <div className="ti-sub">
                                ISO 9001, IATF 16949, ISO 14001, RoHS, REACH
                                </div>
                            </div>
                            </div>
                            <div className="trust-item">
                            <div className="ti-icon">
                                <i className="bi bi-truck" />
                            </div>
                            <div>
                                <div className="ti-title">
                                Fast & Reliable Delivery
                                </div>
                                <div className="ti-sub">
                                Standard lead time 7–21 days; express available
                                </div>
                            </div>
                            </div>
                            <div className="trust-item">
                            <div className="ti-icon">
                                <i className="bi bi-currency-exchange" />
                            </div>
                            <div>
                                <div className="ti-title">
                                Flexible Payment Terms
                                </div>
                                <div className="ti-sub">
                                T/T 30/70, L/C at sight, Net 30 for approved buyers
                                </div>
                            </div>
                            </div>
                            <div className="trust-item">
                            <div className="ti-icon">
                                <i className="bi bi-headset" />
                            </div>
                            <div>
                                <div className="ti-title">
                                Dedicated Account Manager
                                </div>
                                <div className="ti-sub">
                                Personal support for orders less than $10,000 USD
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Similar Companies Widget */}
                        <div className="sidebar-widget">
                        <div className="sidebar-widget-header">
                            <i className="bi bi-buildings-fill" />
                            <h6>
                            Similar Companies in VSIP II
                            </h6>
                        </div>
                        <div className="sidebar-widget-body">
                            <a href="company-detail.html" style={{ 'display': 'flex', 'gap': '12px', 'alignItems': 'center', 'padding': '10px 0', 'borderBottom': '1px solid #f8fafc', 'textDecoration': 'none', 'color': 'inherit', 'transition': 'all 0.2s' }} onMouseOver={() => {}} onMouseOut={() => {}}>
                            <div style={{ 'width': '40px', 'height': '40px', 'borderRadius': '10px', 'background': 'linear-gradient(135deg,#0ea5e9,#0284c7)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontWeight': '800', 'color': '#fff', 'fontSize': '0.85rem', 'flexShrink': '0' }}>
                                CP
                            </div>
                            <div>
                                <div style={{ 'fontWeight': '700', 'fontSize': '0.9rem' }}>
                                Cơ khí Precision
                                </div>
                                <div style={{ 'fontSize': '0.78rem', 'color': 'var(--muted)' }}>
                                VSIP I  ·  ★ 4.8 (124)
                                </div>
                            </div>
                            </a>
                            <a href="company-detail.html" style={{ 'display': 'flex', 'gap': '12px', 'alignItems': 'center', 'padding': '10px 0', 'borderBottom': '1px solid #f8fafc', 'textDecoration': 'none', 'color': 'inherit', 'transition': 'all 0.2s' }} onMouseOver={() => {}} onMouseOut={() => {}}>
                            <div style={{ 'width': '40px', 'height': '40px', 'borderRadius': '10px', 'background': 'linear-gradient(135deg,#10b981,#059669)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontWeight': '800', 'color': '#fff', 'fontSize': '0.85rem', 'flexShrink': '0' }}>
                                VP
                            </div>
                            <div>
                                <div style={{ 'fontWeight': '700', 'fontSize': '0.9rem' }}>
                                Vietnam Parkerizing
                                </div>
                                <div style={{ 'fontSize': '0.78rem', 'color': 'var(--muted)' }}>
                                VSIP I  ·  ★ 4.5 (89)
                                </div>
                            </div>
                            </a>
                            <a href="company-detail.html" style={{ 'display': 'flex', 'gap': '12px', 'alignItems': 'center', 'padding': '10px 0', 'textDecoration': 'none', 'color': 'inherit', 'transition': 'all 0.2s' }} onMouseOver={() => {}} onMouseOut={() => {}}>
                            <div style={{ 'width': '40px', 'height': '40px', 'borderRadius': '10px', 'background': 'linear-gradient(135deg,#f59e0b,#d97706)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontWeight': '800', 'color': '#fff', 'fontSize': '0.85rem', 'flexShrink': '0' }}>
                                TH
                            </div>
                            <div>
                                <div style={{ 'fontWeight': '700', 'fontSize': '0.9rem' }}>
                                TechVina Electronics
                                </div>
                                <div style={{ 'fontSize': '0.78rem', 'color': 'var(--muted)' }}>
                                My Phuoc 3  ·  ★ 4.9 (256)
                                </div>
                            </div>
                            </a>
                        </div>
                        </div>
                        {/* Map Widget */}
                        <div className="sidebar-widget">
                        <div className="sidebar-widget-header">
                            <i className="bi bi-map-fill" />
                            <h6>
                            Factory Location
                            </h6>
                        </div>
                        <div style={{ 'height': '200px', 'background': 'linear-gradient(135deg,#e2e8f0,#cbd5e1)', 'position': 'relative', 'overflow': 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" style={{ 'width': '100%', 'height': '100%', 'objectFit': 'cover', 'opacity': '0.5' }} alt="Map" />
                            <div style={{ 'position': 'absolute', 'inset': '0', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'gap': '8px' }}>
                            <i className="bi bi-geo-alt-fill" style={{ 'fontSize': '2.5rem', 'color': '#ef4444' }} />
                            <span style={{ 'background': '#fff', 'borderRadius': '8px', 'padding': '4px 14px', 'fontSize': '0.8rem', 'fontWeight': '700', 'color': 'var(--text)', 'boxShadow': '0 2px 10px rgba(0,0,0,0.15)' }}>
                                VSIP
                                II, Binh Duong
                            </span>
                            </div>
                        </div>
                        <div style={{ 'padding': '14px 20px' }}>
                            <a href="https://maps.google.com" target="_blank" style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'gap': '7px', 'fontSize': '0.87rem', 'fontWeight': '700', 'color': 'var(--brand)', 'textDecoration': 'none' }}>
                            <i className="bi bi-box-arrow-up-right" />
                            Open in Google Maps
                            </a>
                        </div>
                        </div>
                    </div>
                    {/* END SIDEBAR */}
                    </div>
                </div>
                </main>
        </>
    )
}

export default CompanyDetail