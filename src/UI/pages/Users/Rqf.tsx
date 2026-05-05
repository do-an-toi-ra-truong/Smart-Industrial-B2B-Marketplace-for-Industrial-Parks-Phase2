import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Rqf = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [materialName, setMaterialName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [specifications, setSpecifications] = useState('');
    const [standards, setStandards] = useState('');
    const [preferredBrand, setPreferredBrand] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [dateNeeded, setDateNeeded] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [paymentTerms, setPaymentTerms] = useState('');
    const [budgetMin, setBudgetMin] = useState('');
    const [budgetMax, setBudgetMax] = useState('');
    const [budgetCurrency, setBudgetCurrency] = useState('VND');
    const [specCount, setSpecCount] = useState(0);
    const [notesCount, setNotesCount] = useState(0);

    const goToStep = (step: number) => {
        setCurrentStep(step);
    };

    const nextStep = (step: number) => {
        setCurrentStep(step + 1);
    };

    const prevStep = (step: number) => {
        setCurrentStep(step - 1);
    };

    const selectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const selectPriority = (priority: string) => {
        setSelectedPriority(priority);
    };

    const updateCharCount = (value: string, type: 'spec' | 'notes') => {
        if (type === 'spec') {
            setSpecCount(value.length);
        } else {
            setNotesCount(value.length);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.style.backgroundColor = '#f0f9ff';
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.style.backgroundColor = 'transparent';
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.style.backgroundColor = 'transparent';
        const files = Array.from(e.dataTransfer.files);
        handleFileSelect(files);
    };

    const handleFileSelect = (files: File[] | null) => {
        if (!files) return;
        const newFiles = Array.from(files).slice(0, 5 - uploadedFiles.length);
        setUploadedFiles([...uploadedFiles, ...newFiles]);
    };

    const submitRFQ = () => {
        console.log('Submitting RFQ...');
    };

    return (
        <>
            <main className="main">
                {/* ======= Hero Banner ======= */}
                <div className="rfq-hero">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="badge-tag">
                                    <i className="bi bi-file-earmark-text" />
                                    Hệ thống RFQ – Yêu cầu báo giá tự động
                                </div>
                                <h1>
                                    Tạo Yêu Cầu
                                    <span>
                                        Báo Giá
                                    </span>
                                    <br />
                                    Nhanh & Chuyên Nghiệp
                                </h1>
                                <p className="sub">
                                    Gửi yêu cầu chi tiết đến hàng nghìn nhà cung cấp đã xác minh trong khu công nghiệp.
                                    <br />
                                    Nhận
                                    báo giá trong vòng 24–48 giờ làm việc.
                                </p>
                                <div className="rfq-breadcrumb">
                                    <NavLink to="/">
                                        <i className="bi bi-house-fill me-1" />
                                        Trang chủ
                                    </NavLink>
                                    <span className="sep">
                                        /
                                    </span>
                                    <span className="current">
                                        Tạo Yêu Cầu Báo Giá (RFQ Creator)
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-4 d-none d-lg-flex justify-content-end">
                                <div style={{ 'background': '#fff', 'border': '1px solid var(--rfq-border)', 'borderRadius': '14px', 'padding': '24px 28px', 'textAlign': 'center' }}>
                                    <i className="bi bi-shield-check" style={{ 'fontSize': '2.2rem', 'color': '#353535', 'display': 'block', 'marginBottom': '12px' }} />
                                    <div style={{ 'color': 'var(--rfq-text)', 'fontWeight': '700', 'fontSize': '0.97rem', 'marginBottom': '6px' }}>
                                        5,000+ Nhà cung
                                        cấp
                                    </div>
                                    <div style={{ 'color': 'var(--rfq-muted)', 'fontSize': '0.82rem' }}>
                                        Đã xác minh tại VSIP, Amata & My Phuoc
                                    </div>
                                    <hr style={{ 'borderColor': 'var(--rfq-border)', 'margin': '14px 0' }} />
                                    <div style={{ 'color': 'var(--rfq-text)', 'fontWeight': '700', 'fontSize': '1.4rem' }}>
                                        24h
                                    </div>
                                    <div style={{ 'color': 'var(--rfq-muted)', 'fontSize': '0.82rem' }}>
                                        Thời gian phản hồi trung bình
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stats Strip */}
                <div className="rfq-stats">
                    <div className="container">
                        <div className="row g-3 align-items-center">
                            <div className="col-6 col-md-3">
                                <div className="rfq-stat-item">
                                    <i className="bi bi-file-earmark-check-fill" />
                                    <div>
                                        <div className="val">
                                            12,400+
                                        </div>
                                        <div className="lbl">
                                            RFQ đã xử lý
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="rfq-stat-item">
                                    <i className="bi bi-building-fill" />
                                    <div>
                                        <div className="val">
                                            5,000+
                                        </div>
                                        <div className="lbl">
                                            Nhà cung cấp
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="rfq-stat-item">
                                    <i className="bi bi-clock-history" />
                                    <div>
                                        <div className="val">
                                            ~24h
                                        </div>
                                        <div className="lbl">
                                            Thời gian phản hồi
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="rfq-stat-item">
                                    <i className="bi bi-percent" />
                                    <div>
                                        <div className="val">
                                            98%
                                        </div>
                                        <div className="lbl">
                                            Hài lòng khách hàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ======= RFQ Form Section ======= */}
                <section className="rfq-main">
                    <div className="container">
                        <div className="row g-4">
                            {/* ====== Left: Form ====== */}
                            <div className="col-lg-8">
                                {/* Progress Steps */}
                                <div className="rfq-steps" id="rfqSteps">
                                    <div className={`rfq-step ${currentStep === 1 ? 'active' : ''}`} data-step="1" onClick={() => goToStep(1)}>
                                        <div className="step-num" id="snum1">
                                            1
                                        </div>
                                        <span className="rfq-step-label">
                                            Thông tin cơ bản
                                        </span>
                                    </div>
                                    <div className={`rfq-step ${currentStep === 2 ? 'active' : ''}`} data-step="2" onClick={() => goToStep(2)}>
                                        <div className="step-num" id="snum2">
                                            2
                                        </div>
                                        <span className="rfq-step-label">
                                            Quy cách kỹ thuật
                                        </span>
                                    </div>
                                    <div className={`rfq-step ${currentStep === 3 ? 'active' : ''}`} data-step="3" onClick={() => goToStep(3)}>
                                        <div className="step-num" id="snum3">
                                            3
                                        </div>
                                        <span className="rfq-step-label">
                                            File & Ngày cần
                                        </span>
                                    </div>
                                    <div className={`rfq-step ${currentStep === 4 ? 'active' : ''}`} data-step="4" onClick={() => goToStep(4)}>
                                        <div className="step-num" id="snum4">
                                            4
                                        </div>
                                        <span className="rfq-step-label">
                                            Xem lại & Gửi
                                        </span>
                                    </div>
                                </div>
                                {/* Form Card */}
                                <div className="rfq-card">
                                    {/* ===== STEP 1: Basic Info ===== */}
                                    <div className={`rfq-section ${currentStep === 1 ? 'active' : ''}`} id="section1">
                                        <div className="rfq-card-header">
                                            <div className="d-flex align-items-center gap-16" style={{ 'gap': '16px' }}>
                                                <div className="step-icon">
                                                    <i className="bi bi-box-seam" />
                                                </div>
                                                <div>
                                                    <div className="step-title">
                                                        Bước 1: Thông tin vật tư & Số lượng
                                                    </div>
                                                    <div className="step-sub">
                                                        Tên vật tư cần mua, số lượng và loại hàng hóa
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rfq-card-body">
                                            {/* Loại công ty (Category) */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label">
                                                    <i className="bi bi-grid-3x3-gap-fill" />
                                                    Loại vật tư / Ngành hàng
                                                    <span className="req">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="category-grid" id="categoryGrid">
                                                    <div className={`cat-btn ${selectedCategory === 'electronics' ? 'active' : ''}`} data-cat="electronics" onClick={() => selectCategory('electronics')}>
                                                        <i className="bi bi-cpu-fill" />
                                                        <span>
                                                            Điện tử & Linh kiện
                                                        </span>
                                                    </div>
                                                    <div className={`cat-btn ${selectedCategory === 'raw-materials' ? 'active' : ''}`} data-cat="raw-materials" onClick={() => selectCategory('raw-materials')}>
                                                        <i className="bi bi-layers-fill" />
                                                        <span>
                                                            Nguyên liệu thô
                                                        </span>
                                                    </div>
                                                    <div className={`cat-btn ${selectedCategory === 'chemicals' ? 'active' : ''}`} data-cat="chemicals" onClick={() => selectCategory('chemicals')}>
                                                        <i className="bi bi-droplet-fill" />
                                                        <span>
                                                            Hóa chất công nghiệp
                                                        </span>
                                                    </div>
                                                    <div className={`cat-btn ${selectedCategory === 'machinery' ? 'active' : ''}`} data-cat="machinery" onClick={() => selectCategory('machinery')}>
                                                        <i className="bi bi-gear-wide-connected" />
                                                        <span>
                                                            Máy móc & Thiết bị
                                                        </span>
                                                    </div>
                                                    <div className={`cat-btn ${selectedCategory === 'automotive' ? 'active' : ''}`} data-cat="automotive" onClick={() => selectCategory('automotive')}>
                                                        <i className="bi bi-car-front-fill" />
                                                        <span>
                                                            Phụ tùng Ô tô
                                                        </span>
                                                    </div>
                                                    <div className={`cat-btn ${selectedCategory === 'textiles' ? 'active' : ''}`} data-cat="textiles" onClick={() => selectCategory('textiles')}>
                                                        <i className="bi bi-scissors" />
                                                        <span>
                                                            Dệt may & Vải sợi
                                                        </span>
                                                    </div>
                                                    <div className={`cat-btn ${selectedCategory === 'food-agri' ? 'active' : ''}`} data-cat="food-agri" onClick={() => selectCategory('food-agri')}>
                                                        <i className="bi bi-basket-fill" />
                                                        <span>
                                                            Thực phẩm & Nông nghiệp
                                                        </span>
                                                    </div>
                                                    <div className={`cat-btn ${selectedCategory === 'packaging' ? 'active' : ''}`} data-cat="packaging" onClick={() => selectCategory('packaging')}>
                                                        <i className="bi bi-box-fill" />
                                                        <span>
                                                            Bao bì & Đóng gói
                                                        </span>
                                                    </div>
                                                </div>
                                                <input type="hidden" id="selectedCategory" name="category" />
                                                <div className="rfq-error-msg" id="cat-error">
                                                    Vui lòng chọn loại vật tư.
                                                </div>
                                            </div>
                                            {/* Tên vật tư */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label" htmlFor="materialName">
                                                    <i className="bi bi-tag-fill" />
                                                    Tên vật tư / Mã hàng
                                                    <span className="vn">
                                                        (Material Name / Part No.)
                                                    </span>
                                                    <span className="req">
                                                        *
                                                    </span>
                                                </label>
                                                <input type="text" className="rfq-input" id="materialName" name="material_name" placeholder="Ví dụ: Ống thép không gỉ SUS304, Van bi DN50, Motor servo 750W..." value={materialName} onChange={(e) => setMaterialName(e.target.value)} />
                                                <div className="rfq-error-msg" id="name-error">
                                                    Vui lòng nhập tên vật tư.
                                                </div>
                                                <div className="rfq-hint">
                                                    <i className="bi bi-lightbulb-fill" />
                                                    <span>
                                                        Càng chi tiết càng nhận được báo giá chính xác. Nên ghi thêm nhãn hiệu, tiêu chuẩn nếu
                                                        biết.
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Số lượng & Đơn vị */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label">
                                                    <i className="bi bi-123" />
                                                    Số lượng
                                                    <span className="vn">
                                                        (Quantity)
                                                    </span>
                                                    <span className="req">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="rfq-row">
                                                    <div>
                                                        <input type="number" className="rfq-input" id="quantity" name="quantity" placeholder="Nhập số lượng" min="0.01" step="0.01" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                                        <div className="rfq-error-msg" id="qty-error">
                                                            Vui lòng nhập số lượng hợp lệ.
                                                        </div>
                                                    </div>
                                                    <div style={{ 'flex': '0 0 160px' }}>
                                                        <select className="rfq-select" id="unit" name="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
                                                            <option value="">
                                                                Chọn đơn vị
                                                            </option>
                                                            <optgroup label="Khối lượng">
                                                                <option value="kg">
                                                                    Kilogram (kg)
                                                                </option>
                                                                <option value="ton">
                                                                    Tấn (Metric Ton)
                                                                </option>
                                                                <option value="g">
                                                                    Gram (g)
                                                                </option>
                                                                <option value="lb">
                                                                    Pound (lb)
                                                                </option>
                                                            </optgroup>
                                                            <optgroup label="Kích thước">
                                                                <option value="m">
                                                                    Mét (m)
                                                                </option>
                                                                <option value="cm">
                                                                    Centimét (cm)
                                                                </option>
                                                                <option value="mm">
                                                                    Milimét (mm)
                                                                </option>
                                                                <option value="m2">
                                                                    m² (diện tích)
                                                                </option>
                                                                <option value="m3">
                                                                    m³ (thể tích)
                                                                </option>
                                                            </optgroup>
                                                            <optgroup label="Số lượng">
                                                                <option value="pcs">
                                                                    Cái / Chiếc (pcs)
                                                                </option>
                                                                <option value="set">
                                                                    Bộ (set)
                                                                </option>
                                                                <option value="box">
                                                                    Hộp (box)
                                                                </option>
                                                                <option value="roll">
                                                                    Cuộn (roll)
                                                                </option>
                                                                <option value="sheet">
                                                                    Tấm (sheet)
                                                                </option>
                                                            </optgroup>
                                                            <optgroup label="Thể tích lỏng">
                                                                <option value="L">
                                                                    Lít (L)
                                                                </option>
                                                                <option value="mL">
                                                                    Mililit (mL)
                                                                </option>
                                                                <option value="drum">
                                                                    Thùng phuy (drum)
                                                                </option>
                                                            </optgroup>
                                                        </select>
                                                        <div className="rfq-error-msg" id="unit-error">
                                                            Chọn đơn vị.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rfq-hint">
                                                    <i className="bi bi-info-circle-fill" />
                                                    <span>
                                                        Nếu cần nhiều đợt hàng, bạn có thể ghi chú ở phần Quy cách kỹ thuật.
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Tên công ty */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label" htmlFor="companyName">
                                                    <i className="bi bi-building" />
                                                    Tên doanh nghiệp / Người mua
                                                    <span className="req">
                                                        *
                                                    </span>
                                                </label>
                                                <input type="text" className="rfq-input" id="companyName" name="company_name" placeholder="Tên công ty hoặc tên cá nhân đặt hàng" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                                <div className="rfq-error-msg" id="company-error">
                                                    Vui lòng nhập tên doanh nghiệp.
                                                </div>
                                            </div>
                                            {/* Email & SĐT */}
                                            <div className="rfq-row">
                                                <div className="rfq-field-group" style={{ 'marginBottom': '0' }}>
                                                    <label className="rfq-label" htmlFor="contactEmail">
                                                        <i className="bi bi-envelope-fill" />
                                                        Email liên hệ
                                                        <span className="req">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input type="email" className="rfq-input" id="contactEmail" name="email" placeholder="email@congty.com" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                                                    <div className="rfq-error-msg" id="email-error">
                                                        Email không hợp lệ.
                                                    </div>
                                                </div>
                                                <div className="rfq-field-group" style={{ 'marginBottom': '0' }}>
                                                    <label className="rfq-label" htmlFor="contactPhone">
                                                        <i className="bi bi-telephone-fill" />
                                                        Số điện thoại
                                                        <span className="req">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input type="tel" className="rfq-input" id="contactPhone" name="phone" placeholder="0901 234 567" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} />
                                                    <div className="rfq-error-msg" id="phone-error">
                                                        Vui lòng nhập số điện thoại.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rfq-actions">
                                                <div />
                                                <button className="btn-rfq-next" onClick={() => nextStep(1)}>
                                                    Tiếp theo
                                                    <i className="bi bi-arrow-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ===== STEP 2: Technical Specifications ===== */}
                                    <div className={`rfq-section ${currentStep === 2 ? 'active' : ''}`} id="section2">
                                        <div className="rfq-card-header">
                                            <div className="d-flex align-items-center" style={{ 'gap': '16px' }}>
                                                <div className="step-icon">
                                                    <i className="bi bi-wrench-adjustable" />
                                                </div>
                                                <div>
                                                    <div className="step-title">
                                                        Bước 2: Quy cách kỹ thuật
                                                    </div>
                                                    <div className="step-sub">
                                                        Mô tả chi tiết tiêu chuẩn, thông số, yêu cầu chất lượng
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rfq-card-body">
                                            {/* Mô tả quy cách */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label" htmlFor="specifications">
                                                    <i className="bi bi-clipboard2-data-fill" />
                                                    Quy cách kỹ thuật chi tiết
                                                    <span className="vn">
                                                        (Technical Specifications)
                                                    </span>
                                                    <span className="req">
                                                        *
                                                    </span>
                                                </label>
                                                <textarea className="rfq-textarea" id="specifications" name="specifications" rows={7} maxLength={2000} value={specifications} onInput={(e) => { setSpecifications(e.currentTarget.value); updateCharCount(e.currentTarget.value, 'spec'); }} placeholder="Mô tả chi tiết yêu cầu kỹ thuật, ví dụ:
                • Vật liệu: Thép không gỉ SUS304
                • Kích thước: φ50mm × dài 1000mm, độ dày 3mm
                • Bề mặt: đánh bóng soi gương (Mirror Polish)
                • Tiêu chuẩn: ASTM A312 / JIS G3459
                • Chứng nhận: ISO 9001, FDA (nếu thực phẩm)
                • Màu sắc / Mác vật liệu:
                • Yêu cầu nhiệt độ / áp suất làm việc:" />
                                                <div className="char-counter">
                                                    <span id="spec-count">
                                                        {specCount}
                                                    </span>
                                                    / 2000 ký tự
                                                </div>
                                                <div className="rfq-error-msg" id="spec-error">
                                                    Vui lòng nhập quy cách kỹ thuật.
                                                </div>
                                            </div>
                                            {/* Tiêu chuẩn áp dụng */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label" htmlFor="standards">
                                                    <i className="bi bi-award-fill" />
                                                    Tiêu chuẩn / Chứng nhận yêu cầu
                                                    <span className="opt-badge">
                                                        Tùy chọn
                                                    </span>
                                                </label>
                                                <input type="text" className="rfq-input" id="standards" name="standards" placeholder="Ví dụ: ISO 9001, ASTM A36, JIS G3101, CE, RoHS, FDA..." value={standards} onChange={(e) => setStandards(e.target.value)} />
                                                <div className="rfq-hint">
                                                    <i className="bi bi-info-circle-fill" />
                                                    <span>
                                                        Ghi các tiêu chuẩn quốc tế hoặc Việt Nam (TCVN) nếu có yêu cầu đặc biệt.
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Thương hiệu ưu tiên / nhà sản xuất */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label" htmlFor="preferredBrand">
                                                    <i className="bi bi-star-fill" />
                                                    Thương hiệu / Nhà sản xuất ưu tiên
                                                    <span className="opt-badge">
                                                        Tùy chọn
                                                    </span>
                                                </label>
                                                <input type="text" className="rfq-input" id="preferredBrand" name="preferred_brand" placeholder="Ví dụ: Siemens, ABB, SMC, Schaeffler, hoặc 'bất kỳ' nếu không quan trọng" value={preferredBrand} onChange={(e) => setPreferredBrand(e.target.value)} />
                                            </div>
                                            {/* Ghi chú thêm */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label" htmlFor="additionalNotes">
                                                    <i className="bi bi-chat-left-text-fill" />
                                                    Ghi chú bổ sung
                                                    <span className="opt-badge">
                                                        Tùy chọn
                                                    </span>
                                                </label>
                                                <textarea className="rfq-textarea" id="additionalNotes" name="notes" rows={4} maxLength={1000} value={additionalNotes} onInput={(e) => { setAdditionalNotes(e.currentTarget.value); updateCharCount(e.currentTarget.value, 'notes'); }} placeholder="Thông tin bổ sung: điều kiện bảo quản, đóng gói, yêu cầu giao hàng đặc biệt, số lượng đặt hàng định kỳ..." />
                                                <div className="char-counter">
                                                    <span id="notes-count">
                                                        {notesCount}
                                                    </span>
                                                    / 1000 ký tự
                                                </div>
                                            </div>
                                            <div className="rfq-actions">
                                                <button className="btn-rfq-prev" onClick={() => prevStep(2)}>
                                                    <i className="bi bi-arrow-left" />
                                                    Quay lại
                                                </button>
                                                <button className="btn-rfq-next" onClick={() => nextStep(2)}>
                                                    Tiếp theo
                                                    <i className="bi bi-arrow-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ===== STEP 3: File Upload & Delivery Date ===== */}
                                    <div className={`rfq-section ${currentStep === 3 ? 'active' : ''}`} id="section3">
                                        <div className="rfq-card-header">
                                            <div className="d-flex align-items-center" style={{ 'gap': '16px' }}>
                                                <div className="step-icon">
                                                    <i className="bi bi-calendar2-week-fill" />
                                                </div>
                                                <div>
                                                    <div className="step-title">
                                                        Bước 3: File đính kèm & Ngày cần hàng
                                                    </div>
                                                    <div className="step-sub">
                                                        Tải lên bản vẽ, ảnh mẫu và xác định thời gian giao hàng
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rfq-card-body">
                                            {/* File đính kèm */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label">
                                                    <i className="bi bi-paperclip" />
                                                    File đính kèm
                                                    <span className="vn">
                                                        (Attachments)
                                                    </span>
                                                    <span className="opt-badge">
                                                        Tùy chọn
                                                    </span>
                                                </label>
                                                <div className="rfq-upload-zone" id="uploadZone" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                                                    <input type="file" id="fileInput" multiple={true} accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.bmp,.gif,.zip,.rar,.dwg,.step,.stp,.iges,.igs" onChange={(e) => handleFileSelect(e.target.files ? Array.from(e.target.files) : null)} />
                                                    <div className="upload-icon">
                                                        <i className="bi bi-cloud-arrow-up-fill" />
                                                    </div>
                                                    <div className="upload-title">
                                                        Kéo thả file vào đây hoặc nhấn để chọn file
                                                    </div>
                                                    <div className="upload-sub">
                                                        Hỗ trợ: PDF, DOC, XLS, JPG, PNG, DWG, STEP, IGES, ZIP
                                                        <br />
                                                        Tối đa 10MB / file · Tối đa 5 files
                                                    </div>
                                                </div>
                                                <div className="rfq-file-list" id="fileList" />
                                                <div className="rfq-hint">
                                                    <i className="bi bi-lightbulb-fill" />
                                                    <span>
                                                        Bản vẽ kỹ thuật (CAD/DWG), ảnh mẫu, tài liệu kỹ thuật sẽ giúp nhà cung cấp báo giá nhanh và
                                                        chính xác hơn.
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Ngày cần hàng */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label" htmlFor="dateNeeded">
                                                    <i className="bi bi-calendar-event-fill" />
                                                    Ngày cần hàng
                                                    <span className="vn">
                                                        (Required Delivery Date)
                                                    </span>
                                                    <span className="req">
                                                        *
                                                    </span>
                                                </label>
                                                <input type="date" className="rfq-input" id="dateNeeded" name="date_needed" style={{ 'cursor': 'pointer' }} value={dateNeeded} onChange={(e) => setDateNeeded(e.target.value)} />
                                                <div className="rfq-error-msg" id="date-error">
                                                    Vui lòng chọn ngày cần hàng.
                                                </div>
                                                <div className="rfq-hint">
                                                    <i className="bi bi-info-circle-fill" />
                                                    <span>
                                                        Chọn ngày bạn cần nhận hàng. Thời gian tối thiểu là 3 ngày làm việc sau ngày gửi RFQ.
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Mức độ ưu tiên */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label">
                                                    <i className="bi bi-flag-fill" />
                                                    Mức độ ưu tiên
                                                    <span className="vn">
                                                        (Priority Level)
                                                    </span>
                                                    <span className="req">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="priority-opts" id="priorityOpts">
                                                    <div className={`priority-opt ${selectedPriority === 'low' ? 'active' : ''}`} data-p="low" onClick={() => selectPriority('low')}>
                                                        <i className="bi bi-flag" />
                                                        Thấp
                                                    </div>
                                                    <div className={`priority-opt ${selectedPriority === 'medium' ? 'active' : ''}`} data-p="medium" onClick={() => selectPriority('medium')}>
                                                        <i className="bi bi-flag-fill" />
                                                        Trung bình
                                                    </div>
                                                    <div className={`priority-opt ${selectedPriority === 'high' ? 'active' : ''}`} data-p="high" onClick={() => selectPriority('high')}>
                                                        <i className="bi bi-exclamation-triangle-fill" />
                                                        Cao
                                                    </div>
                                                    <div className={`priority-opt ${selectedPriority === 'urgent' ? 'active' : ''}`} data-p="urgent" onClick={() => selectPriority('urgent')}>
                                                        <i className="bi bi-lightning-charge-fill" />
                                                        Khẩn cấp
                                                    </div>
                                                </div>
                                                <input type="hidden" id="selectedPriority" name="priority" />
                                                <div className="rfq-error-msg" id="priority-error">
                                                    Vui lòng chọn mức độ ưu tiên.
                                                </div>
                                            </div>
                                            {/* Địa chỉ giao hàng */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label" htmlFor="deliveryAddress">
                                                    <i className="bi bi-geo-alt-fill" />
                                                    Địa chỉ giao hàng
                                                    <span className="req">
                                                        *
                                                    </span>
                                                </label>
                                                <textarea className="rfq-textarea" id="deliveryAddress" name="delivery_address" rows={3} placeholder="Địa chỉ nhận hàng đầy đủ: Số nhà / đường, phường/xã, quận/huyện, tỉnh/thành phố..." value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
                                                <div className="rfq-error-msg" id="addr-error">
                                                    Vui lòng nhập địa chỉ giao hàng.
                                                </div>
                                            </div>
                                            {/* Điều khoản thanh toán */}
                                            <div className="rfq-field-group">
                                                <label className="rfq-label" htmlFor="paymentTerms">
                                                    <i className="bi bi-credit-card-2-front-fill" />
                                                    Điều khoản thanh toán mong muốn
                                                    <span className="opt-badge">
                                                        Tùy chọn
                                                    </span>
                                                </label>
                                                <select className="rfq-select" id="paymentTerms" name="payment_terms" value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)}>
                                                    <option value="">
                                                        -- Chọn điều khoản thanh toán --
                                                    </option>
                                                    <option value="cod">
                                                        Thanh toán khi nhận hàng (COD)
                                                    </option>
                                                    <option value="advance100">
                                                        Ứng trước 100% (Full Advance)
                                                    </option>
                                                    <option value="advance50">
                                                        Ứng trước 50%, còn lại khi giao hàng
                                                    </option>
                                                    <option value="net30">
                                                        Net 30 ngày
                                                    </option>
                                                    <option value="net60">
                                                        Net 60 ngày
                                                    </option>
                                                    <option value="lc">
                                                        L/C (Thư tín dụng)
                                                    </option>
                                                    <option value="negotiable">
                                                        Thương lượng
                                                    </option>
                                                </select>
                                            </div>
                                            {/* Ngân sách dự kiến */}
                                            <div className="rfq-field-group" style={{ 'marginBottom': '0' }}>
                                                <label className="rfq-label">
                                                    <i className="bi bi-cash-stack" />
                                                    Ngân sách dự kiến (VNĐ / USD)
                                                    <span className="opt-badge">
                                                        Tùy chọn
                                                    </span>
                                                </label>
                                                <div className="rfq-row">
                                                    <div>
                                                        <input type="number" className="rfq-input" id="budgetMin" name="budget_min" placeholder="Tối thiểu" min="0" value={budgetMin} onChange={(e) => setBudgetMin(e.target.value)} />
                                                    </div>
                                                    <div>
                                                        <input type="number" className="rfq-input" id="budgetMax" name="budget_max" placeholder="Tối đa" min="0" value={budgetMax} onChange={(e) => setBudgetMax(e.target.value)} />
                                                    </div>
                                                    <div style={{ 'flex': '0 0 120px' }}>
                                                        <select className="rfq-select" id="budgetCurrency" name="currency" value={budgetCurrency} onChange={(e) => setBudgetCurrency(e.target.value)}>
                                                            <option value="VND">
                                                                VNĐ
                                                            </option>
                                                            <option value="USD">
                                                                USD
                                                            </option>
                                                            <option value="EUR">
                                                                EUR
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="rfq-hint">
                                                    <i className="bi bi-info-circle-fill" />
                                                    <span>
                                                        Cung cấp ngân sách (nếu muốn) giúp nhà cung cấp đề xuất phương án phù hợp hơn.
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="rfq-actions">
                                                <button className="btn-rfq-prev" onClick={() => prevStep(3)}>
                                                    <i className="bi bi-arrow-left" />
                                                    Quay lại
                                                </button>
                                                <button className="btn-rfq-next" onClick={() => nextStep(3)}>
                                                    Xem lại & Gửi
                                                    <i className="bi bi-arrow-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ===== STEP 4: Review & Submit ===== */}
                                    <div className={`rfq-section ${currentStep === 4 ? 'active' : ''}`} id="section4">
                                        <div className="rfq-card-header">
                                            <div className="d-flex align-items-center" style={{ 'gap': '16px' }}>
                                                <div className="step-icon">
                                                    <i className="bi bi-send-check-fill" />
                                                </div>
                                                <div>
                                                    <div className="step-title">
                                                        Bước 4: Xem lại & Gửi RFQ
                                                    </div>
                                                    <div className="step-sub">
                                                        Kiểm tra thông tin trước khi gửi đến các nhà cung cấp
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rfq-card-body">
                                            <table className="review-table" id="reviewTable">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            Loại vật tư
                                                        </td>
                                                        <td id="rv-cat">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Tên vật tư
                                                        </td>
                                                        <td id="rv-name">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Số lượng
                                                        </td>
                                                        <td id="rv-qty">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Doanh nghiệp
                                                        </td>
                                                        <td id="rv-company">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Email
                                                        </td>
                                                        <td id="rv-email">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Số điện thoại
                                                        </td>
                                                        <td id="rv-phone">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Quy cách kỹ thuật
                                                        </td>
                                                        <td id="rv-spec" style={{ 'whiteSpace': 'pre-wrap' }}>
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Tiêu chuẩn
                                                        </td>
                                                        <td id="rv-std">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Thương hiệu ưu tiên
                                                        </td>
                                                        <td id="rv-brand">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            File đính kèm
                                                        </td>
                                                        <td id="rv-files">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Ngày cần hàng
                                                        </td>
                                                        <td id="rv-date">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Mức độ ưu tiên
                                                        </td>
                                                        <td id="rv-priority">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Địa chỉ giao hàng
                                                        </td>
                                                        <td id="rv-addr">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Điều khoản thanh toán
                                                        </td>
                                                        <td id="rv-payment">
                                                            —
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Ngân sách
                                                        </td>
                                                        <td id="rv-budget">
                                                            —
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {/* Terms checkbox */}
                                            <div style={{ 'marginTop': '24px', 'padding': '18px', 'background': '#f8fafc', 'borderRadius': '12px', 'border': '1px solid #e2e8f0' }}>
                                                <label style={{ 'display': 'flex', 'gap': '12px', 'alignItems': 'flex-start', 'cursor': 'pointer' }}>
                                                    <input type="checkbox" id="agreeTerms" style={{ 'width': '18px', 'height': '18px', 'marginTop': '2px', 'accentColor': '#4f46e5' }} />
                                                    <span style={{ 'fontSize': '0.88rem', 'color': '#374151', 'lineHeight': '1.6' }}>
                                                        Tôi đã kiểm tra và xác nhận thông tin trên là chính xác. Tôi đồng ý với
                                                        <a href="tos.html" style={{ 'color': '#4f46e5', 'textDecoration': 'none', 'fontWeight': '600' }}>
                                                            Điều khoản sử
                                                            dụng
                                                        </a>
                                                        và
                                                        <a href="privacy.html" style={{ 'color': '#4f46e5', 'textDecoration': 'none', 'fontWeight': '600' }}>
                                                            Chính sách
                                                            bảo mật
                                                        </a>
                                                        của hệ thống.
                                                    </span>
                                                </label>
                                                <div className="rfq-error-msg" id="terms-error">
                                                    Vui lòng đồng ý với điều khoản sử dụng.
                                                </div>
                                            </div>
                                            <div className="rfq-actions">
                                                <button className="btn-rfq-prev" onClick={() => prevStep(4)}>
                                                    <i className="bi bi-arrow-left" />
                                                    Quay lại
                                                </button>
                                                <button className="btn-rfq-submit" onClick={submitRFQ}>
                                                    <i className="bi bi-send-fill" />
                                                    Gửi Yêu Cầu Báo Giá
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ===== SUCCESS SCREEN ===== */}
                                    <div className="rfq-success" id="rfqSuccess">
                                        <div className="success-icon">
                                            <i className="bi bi-check-lg" />
                                        </div>
                                        <h2>
                                            Gửi RFQ thành công! 🎉
                                        </h2>
                                        <p>
                                            Yêu cầu báo giá của bạn đã được gửi đến các nhà cung cấp phù hợp. Chúng tôi sẽ liên hệ lại trong vòng
                                            <strong>
                                                24–48 giờ
                                            </strong>
                                            .
                                        </p>
                                        <div className="rfq-id-badge">
                                            <i className="bi bi-hash me-1" />
                                            RFQ-
                                            <span id="rfqIdDisplay">
                                                2026041500001
                                            </span>
                                        </div>
                                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                                            <a href="index.html" className="btn btn-outline-primary px-4 rounded-pill">
                                                <i className="bi bi-house me-2" />
                                                Về trang chủ
                                            </a>
                                            <a href="rqf.html" className="btn btn-primary px-4 rounded-pill">
                                                <i className="bi bi-plus-circle me-2" />
                                                Tạo RFQ mới
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* end rfq-card */}
                            </div>
                            {/* end col-lg-8 */}
                            {/* ====== Right: Sidebar ====== */}
                            <div className="col-lg-4">
                                {/* How It Works */}
                                <div className="rfq-sidebar-card">
                                    <div className="sc-header">
                                        <i className="bi bi-question-circle-fill" />
                                        <h6>
                                            Quy trình hoạt động
                                        </h6>
                                    </div>
                                    <div className="sc-body">
                                        <div className="rfq-info-row">
                                            <i className="bi bi-1-circle-fill" />
                                            <p>
                                                <strong>
                                                    Điền thông tin RFQ
                                                </strong>
                                                Tên vật tư, số lượng, quy cách kỹ thuật, file đính kèm và ngày
                                                cần hàng.
                                            </p>
                                        </div>
                                        <div className="rfq-info-row">
                                            <i className="bi bi-2-circle-fill" />
                                            <p>
                                                <strong>
                                                    Hệ thống phân phối tự động
                                                </strong>
                                                RFQ của bạn được gửi đến các nhà cung cấp phù hợp trong
                                                vòng vài phút.
                                            </p>
                                        </div>
                                        <div className="rfq-info-row">
                                            <i className="bi bi-3-circle-fill" />
                                            <p>
                                                <strong>
                                                    Nhận báo giá
                                                </strong>
                                                Các nhà cung cấp gửi báo giá trong 24–48 giờ làm việc qua email &
                                                hệ thống.
                                            </p>
                                        </div>
                                        <div className="rfq-info-row">
                                            <i className="bi bi-4-circle-fill" />
                                            <p>
                                                <strong>
                                                    So sánh & quyết định
                                                </strong>
                                                So sánh các báo giá, liên hệ trực tiếp và đặt hàng ngay
                                                trên nền tảng.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Tips */}
                                <div className="rfq-sidebar-card">
                                    <div className="sc-header">
                                        <i className="bi bi-lightbulb-fill" />
                                        <h6>
                                            Mẹo để nhận báo giá tốt nhất
                                        </h6>
                                    </div>
                                    <div className="sc-body">
                                        <div className="rfq-info-row">
                                            <i className="bi bi-check-circle-fill" style={{ 'color': '#10b981' }} />
                                            <p>
                                                Mô tả
                                                <strong>
                                                    tiêu chuẩn vật liệu
                                                </strong>
                                                (ISO, ASTM, JIS, TCVN) càng cụ thể càng tốt.
                                            </p>
                                        </div>
                                        <div className="rfq-info-row">
                                            <i className="bi bi-check-circle-fill" style={{ 'color': '#10b981' }} />
                                            <p>
                                                <strong>
                                                    Đính kèm bản vẽ kỹ thuật
                                                </strong>
                                                (DWG/PDF) để giảm thiểu sai lệch trong báo giá.
                                            </p>
                                        </div>
                                        <div className="rfq-info-row">
                                            <i className="bi bi-check-circle-fill" style={{ 'color': '#10b981' }} />
                                            <p>
                                                Ghi rõ
                                                <strong>
                                                    ngày cần hàng thực tế
                                                </strong>
                                                để nhà cung cấp cân nhắc khả năng đáp ứng.
                                            </p>
                                        </div>
                                        <div className="rfq-info-row">
                                            <i className="bi bi-check-circle-fill" style={{ 'color': '#10b981' }} />
                                            <p>
                                                Đề cập
                                                <strong>
                                                    số lượng định kỳ
                                                </strong>
                                                nếu có để nhận giá tốt hơn theo hợp đồng dài hạn.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Contact Support */}
                                <div className="rfq-sidebar-card">
                                    <div className="sc-header">
                                        <i className="bi bi-headset" />
                                        <h6>
                                            Cần hỗ trợ?
                                        </h6>
                                    </div>
                                    <div className="sc-body">
                                        <div className="rfq-info-row">
                                            <i className="bi bi-telephone-fill" />
                                            <p>
                                                <strong>
                                                    Hotline hỗ trợ RFQ
                                                </strong>
                                                1800 1234 (miễn phí, T2–T6: 8h–17h)
                                            </p>
                                        </div>
                                        <div className="rfq-info-row">
                                            <i className="bi bi-envelope-fill" />
                                            <p>
                                                <strong>
                                                    Email
                                                </strong>
                                                rfq@industrialpark.vn
                                            </p>
                                        </div>
                                        <div className="rfq-info-row">
                                            <i className="bi bi-chat-dots-fill" />
                                            <p>
                                                <strong>
                                                    Live Chat
                                                </strong>
                                                Nhấn icon chat ở góc màn hình để được hỗ trợ ngay.
                                            </p>
                                        </div>
                                        <a href="contact.html" className="btn btn-success w-100 rounded-pill mt-2 fw-bold" style={{ 'fontSize': '0.88rem' }}>
                                            <i className="bi bi-headset me-2" />
                                            Liên hệ hỗ trợ
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* end col-lg-4 */}
                        </div>
                        {/* end row */}
                    </div>
                </section>
            </main>
        </>
    )
}
export default Rqf