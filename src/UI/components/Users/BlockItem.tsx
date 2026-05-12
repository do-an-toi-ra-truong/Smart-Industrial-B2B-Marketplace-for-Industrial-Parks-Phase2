import { Link } from 'react-router-dom'

const BlockItem = () => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="product-box border rounded shadow-sm h-100 bg-white">
                <div className="product-thumb position-relative overflow-hidden p-3 text-center">
                <span className="badge bg-success position-absolute top-0 start-0 m-3">
                    Sẵn kho
                </span>
                <Link to="/productDetails">
                    <img
                    src="/assets/images/product-1.webp"
                    alt="Bosch GSB 550"
                    className="img-fluid"
                    style={{ height: 200, objectFit: "contain" }}
                    />
                </Link>
                <div
                    className="product-overlay position-absolute bottom-0 start-0 end-0 p-2 bg-light bg-opacity-75 d-flex justify-content-center gap-2"
                    style={{
                    transform: "translateY(100%)",
                    transition: "0.3s"
                    }}
                >
                    <button
                    className="btn btn-sm btn-outline-dark"
                    title="Xem nhanh"
                    >
                    <i className="bi bi-eye" />
                    </button>
                    <button
                    className="btn btn-sm btn-outline-dark"
                    title="So sánh"
                    >
                    <i className="bi bi-arrow-left-right" />
                    </button>
                </div>
                </div>
                <div className="product-content p-3 pt-0">
                <div className="mb-2">
                    <span className="badge bg-light text-secondary border">
                    <i className="bi bi-building me-1" />
                    Cty Việt Nhật (VSIP 1)
                    </span>
                </div>
                <h5 className="product-title mb-2">
                    <Link
                    to="/productDetails"
                    className="text-decoration-none fw-bold"
                    style={{ color: "#353535" }}
                    >
                    Máy Khoan Động Lực Bosch GSB 550 (Vali Nhựa)
                    </Link>
                </h5>
                <ul className="list-unstyled small text-muted mb-3">
                    <li>
                    <i className="bi bi-dot" /> Công suất: 550W
                    </li>
                    <li>
                    <i className="bi bi-dot" /> Đầu kẹp: 13mm
                    </li>
                    <li>
                    <i className="bi bi-dot" /> Tốc độ: 0-2800 v/p
                    </li>
                </ul>
                <div className="d-flex justify-content-between align-items-end border-top pt-3">
                    <div>
                    <small className="text-muted d-block">
                        Đơn giá sỉ:
                    </small>
                    <span className="fw-bold text-danger fs-5">
                        Liên hệ
                    </span>
                    </div>
                    <button
                    className="btn btn-primary btn-sm rounded-pill px-3"
                    onClick={() => alert('Đã thêm vào yêu cầu báo giá!')}
                    >
                    <i className="bi bi-file-earmark-plus me-1" /> Báo giá
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default BlockItem