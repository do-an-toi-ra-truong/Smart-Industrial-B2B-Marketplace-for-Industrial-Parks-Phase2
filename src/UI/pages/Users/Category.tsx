import React from "react"
import { NavLink } from "react-router-dom"
import BlockItem from "../../components/Users/BlockItem"

const Category = () => {
    return (
        <>
            <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                <div className="container">
                    <nav className="breadcrumbs">
                    <ol>
                        <li>
                        <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="current">Category</li>
                    </ol>
                    </nav>
                    <h1>Category</h1>
                </div>
                </div>
                {/* End Page Title */}
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 sidebar">
                    <div className="widgets-container">
                        <div className="search-widget widget-item">
                        <h3 className="widget-title">Tìm kiếm vật tư</h3>
                        <form action="#">
                            <div className="position-relative">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập tên máy, mã SP..."
                                style={{
                                height: 45,
                                borderRadius: 5,
                                paddingRight: 45,
                                border: "1px solid #ddd"
                                }}
                            />
                            <button
                                type="button"
                                className="btn position-absolute top-0 end-0 h-100 d-flex align-items-center justify-content-center"
                                style={{
                                width: 45,
                                border: "none",
                                background: "transparent",
                                zIndex: 5
                                }}
                            >
                                <i
                                className="bi bi-search text-secondary"
                                style={{ fontSize: "1.1rem" }}
                                />
                            </button>
                            </div>
                        </form>
                        </div>
                        <div className="kcn-filter-widget widget-item">
                        <h3 className="widget-title">Chọn Khu Vực (KCN)</h3>
                        <div className="d-flex flex-column gap-2">
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="kcn_vsip1"
                                defaultChecked
                            />
                            <label className="form-check-label" htmlFor="kcn_vsip1">
                                VSIP 1 (Thuận An)
                            </label>
                            </div>
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="kcn_vsip2"
                            />
                            <label className="form-check-label" htmlFor="kcn_vsip2">
                                VSIP 2 / 2A (Tân Uyên)
                            </label>
                            </div>
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="kcn_mp"
                            />
                            <label className="form-check-label" htmlFor="kcn_mp">
                                KCN Mỹ Phước 1, 2, 3
                            </label>
                            </div>
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="kcn_songthan"
                            />
                            <label className="form-check-label" htmlFor="kcn_songthan">
                                KCN Sóng Thần
                            </label>
                            </div>
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="kcn_baubang"
                            />
                            <label className="form-check-label" htmlFor="kcn_baubang">
                                KCN Bàu Bàng
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="product-categories-widget widget-item">
                        <h3 className="widget-title">Ngành Hàng</h3>
                        <ul className="category-tree list-unstyled mb-0">
                            <li className="category-item">
                            <div
                                className="category-header d-flex justify-content-between align-items-center collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#cat-cokhi"
                            >
                                <a href="#" className="category-link">
                                <i className="bi bi-gear-fill me-2 text-secondary" />
                                Cơ khí chế tạo
                                </a>
                                <span className="category-toggle">
                                <i className="bi bi-chevron-down" />
                                </span>
                            </div>
                            <ul
                                id="cat-cokhi"
                                className="subcategory-list list-unstyled collapse ps-3 mt-2"
                            >
                                <li>
                                <a href="#" className="subcategory-link">
                                    Máy khoan, mài, cắt
                                </a>
                                </li>
                                <li>
                                <a href="#" className="subcategory-link">
                                    Dụng cụ cầm tay
                                </a>
                                </li>
                                <li>
                                <a href="#" className="subcategory-link">
                                    Vật tư kim khí (Ốc, vít)
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="category-item">
                            <div
                                className="category-header d-flex justify-content-between align-items-center collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#cat-dien"
                            >
                                <a href="#" className="category-link">
                                <i className="bi bi-lightning-charge-fill me-2 text-secondary" />
                                Điện công nghiệp
                                </a>
                                <span className="category-toggle">
                                <i className="bi bi-chevron-down" />
                                </span>
                            </div>
                            <ul
                                id="cat-dien"
                                className="subcategory-list list-unstyled collapse ps-3 mt-2"
                            >
                                <li>
                                <a href="#" className="subcategory-link">
                                    Tủ điện &amp; Phụ kiện
                                </a>
                                </li>
                                <li>
                                <a href="#" className="subcategory-link">
                                    Dây cáp &amp; Đầu nối
                                </a>
                                </li>
                                <li>
                                <a href="#" className="subcategory-link">
                                    Đèn chiếu sáng nhà xưởng
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="category-item">
                            <div className="category-header d-flex justify-content-between align-items-center">
                                <a href="#" className="category-link">
                                <i className="bi bi-shield-check me-2 text-secondary" />
                                Bảo hộ lao động
                                </a>
                            </div>
                            </li>
                            <li className="category-item">
                            <div className="category-header d-flex justify-content-between align-items-center">
                                <a href="#" className="category-link">
                                <i className="bi bi-droplet-fill me-2 text-secondary" />
                                Hóa chất &amp; Keo
                                </a>
                            </div>
                            </li>
                        </ul>
                        </div>
                        <div className="origin-filter-widget widget-item">
                        <h3 className="widget-title">Xuất xứ (Origin)</h3>
                        <div className="d-flex flex-column gap-2">
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="origin_de"
                            />
                            <label className="form-check-label" htmlFor="origin_de">
                                Đức (Germany)
                            </label>
                            </div>
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="origin_jp"
                            />
                            <label className="form-check-label" htmlFor="origin_jp">
                                Nhật Bản (Japan)
                            </label>
                            </div>
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="origin_cn"
                            />
                            <label className="form-check-label" htmlFor="origin_cn">
                                Trung Quốc (China)
                            </label>
                            </div>
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="origin_vn"
                            />
                            <label className="form-check-label" htmlFor="origin_vn">
                                Việt Nam
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="brand-filter-widget widget-item">
                        <h3 className="widget-title">Thương hiệu</h3>
                        <div className="brand-filter-content">
                            <div className="brand-search mb-3">
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Tìm hãng..."
                            />
                            </div>
                            <div
                            className="d-flex flex-column gap-2"
                            style={{ maxHeight: 200, overflowY: "auto" }}
                            >
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="brand_bosch"
                                />
                                <label className="form-check-label" htmlFor="brand_bosch">
                                Bosch <span className="text-muted small">(45)</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="brand_makita"
                                />
                                <label className="form-check-label" htmlFor="brand_makita">
                                Makita <span className="text-muted small">(32)</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="brand_3m"
                                />
                                <label className="form-check-label" htmlFor="brand_3m">
                                3M <span className="text-muted small">(15)</span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="brand_honeywell"
                                />
                                <label
                                className="form-check-label"
                                htmlFor="brand_honeywell"
                                >
                                Honeywell <span className="text-muted small">(8)</span>
                                </label>
                            </div>
                            </div>
                            <div className="mt-3">
                            <button className="btn btn-sm btn-primary w-100">
                                Áp dụng bộ lọc
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-8">
                    {/* Category Header Section */}
                    <section
                        id="category-header"
                        className="category-header section bg-light py-4"
                    >
                        <div className="container">
                        <div
                            className="filter-container p-3 bg-white rounded shadow-sm"
                            
                        >
                            <div className="row g-3 align-items-center">
                            <div className="col-12 col-md-5 col-lg-5">
                                <div className="filter-item search-form">
                                <label
                                    htmlFor="productSearch"
                                    className="form-label fw-bold text-secondary small text-uppercase"
                                >
                                    Tìm vật tư
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0">
                                    <i className="bi bi-search" />
                                    </span>
                                    <input
                                    type="text"
                                    className="form-control border-start-0 ps-0"
                                    id="productSearch"
                                    placeholder="Nhập tên máy, mã part (SKU)..."
                                    aria-label="Search"
                                    />
                                    <button
                                    className="btn btn-primary"
                                    type="button"
                                    style={{ backgroundColor: "#353535" }}
                                    >
                                    Tìm kiếm
                                    </button>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-2">
                                <div className="filter-item">
                                <label
                                    htmlFor="stockStatus"
                                    className="form-label fw-bold text-secondary small text-uppercase"
                                >
                                    Tình trạng kho
                                </label>
                                <select className="form-select" id="stockStatus">
                                    <option defaultValue="">Tất cả</option>
                                    <option value={1}>Sẵn hàng giao ngay</option>
                                    <option value={2}>Đặt hàng (3-5 ngày)</option>
                                    <option value={3}>Hàng nhập khẩu (2-4 tuần)</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="filter-item">
                                <label
                                    htmlFor="sortBy"
                                    className="form-label fw-bold text-secondary small text-uppercase"
                                >
                                    Sắp xếp theo
                                </label>
                                <select className="form-select" id="sortBy">
                                    <option defaultValue="">Độ uy tín NPP (Mặc định)</option>
                                    <option>Gần tôi nhất (KCN)</option>
                                    <option>Giá: Thấp đến Cao</option>
                                    <option>Hàng mới về</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-12 col-lg-2">
                                <div className="filter-item text-lg-end">
                                <label className="form-label fw-bold text-secondary small text-uppercase d-block">
                                    Hiển thị
                                </label>
                                <div className="d-inline-flex align-items-center gap-2">
                                    <button
                                    type="button"
                                    className="btn btn-outline-secondary active btn-sm"
                                    aria-label="Grid view"
                                    >
                                    <i className="bi bi-grid-3x3-gap-fill" />
                                    </button>
                                    <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-sm"
                                    aria-label="List view"
                                    >
                                    <i className="bi bi-list-ul" />
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row mt-3 border-top pt-3">
                            <div className="col-12">
                                <div className="active-filters d-flex align-items-center">
                                <span className="small text-muted me-2 fw-bold">
                                    Đang lọc:
                                </span>
                                <div className="filter-tags d-flex flex-wrap gap-2">
                                    <span className="badge bg-light text-dark border d-flex align-items-center px-3 py-2">
                                    KCN: VSIP 1{" "}
                                    <i className="bi bi-x ms-2 cursor-pointer text-danger" />
                                    </span>
                                    <span className="badge bg-light text-dark border d-flex align-items-center px-3 py-2">
                                    Hãng: Bosch{" "}
                                    <i className="bi bi-x ms-2 cursor-pointer text-danger" />
                                    </span>
                                    <a
                                    href="#"
                                    className="text-danger small text-decoration-none ms-2 fw-bold"
                                    >
                                    Xóa bộ lọc
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* Products */}
                    <section
                        id="category-product-list"
                        className="category-product-list section"
                    >
                        <div>
                        <div className="row g-4">
                            <BlockItem />
                            <BlockItem />
                            <BlockItem />
                        </div>
                        <div className="pagination-area mt-5 text-center">
                            <button className="btn btn-outline-secondary rounded-pill px-4">
                            Xem thêm 20 sản phẩm nữa <i className="bi bi-arrow-down" />
                            </button>
                        </div>
                        </div>
                    </section>
                    {/* Category Pagination Section */}
                    <section
                        id="category-pagination"
                        className="category-pagination section"
                    >
                        <div className="container">
                        <nav
                            className="d-flex justify-content-center"
                            aria-label="Page navigation"
                        >
                            <ul>
                            <li>
                                <a href="#" aria-label="Previous page">
                                <i className="bi bi-arrow-left" />
                                <span className="d-none d-sm-inline">Previous</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="active">
                                1
                                </a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li className="ellipsis">...</li>
                            <li>
                                <a href="#">8</a>
                            </li>
                            <li>
                                <a href="#">9</a>
                            </li>
                            <li>
                                <a href="#">10</a>
                            </li>
                            <li>
                                <a href="#" aria-label="Next page">
                                <span className="d-none d-sm-inline">Next</span>
                                <i className="bi bi-arrow-right" />
                                </a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </section>
                    {/* /Category Pagination Section */}
                    </div>
                </div>
                </div>
            </main>
        </>

    )
}
export default Category