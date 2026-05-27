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
                    <div className="row h-100">
                        <div className="col-lg-3 sidebar h-100 pt-0">
                            <div className="widgets-container pt-0 mt-0">
                                <div className="search-widget widget-item mt-0">
                                    <h3 className="widget-title mt-0">Tìm kiếm vật tư</h3>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="" aria-label="Recipient’s username" aria-describedby="button-addon2" />
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                            Search
                                        </button>
                                    </div>
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
                                    <div className="d-flex flex-column gap-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cat_raw_materials"
                                            />
                                            <label className="form-check-label" htmlFor="cat_raw_materials">
                                                Raw Materials
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cat_electronics"
                                            />
                                            <label className="form-check-label" htmlFor="cat_electronics">
                                                Electronics and Components
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cat_machinery"
                                            />
                                            <label className="form-check-label" htmlFor="cat_machinery">
                                                Machinery and Equipments
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cat_chemicals"
                                            />
                                            <label className="form-check-label" htmlFor="cat_chemicals">
                                                Chemicals
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cat_automotive"
                                            />
                                            <label className="form-check-label" htmlFor="cat_automotive">
                                                Automotive
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cat_textiles"
                                            />
                                            <label className="form-check-label" htmlFor="cat_textiles">
                                                Textiles and Fabrics
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cat_food_agri"
                                            />
                                            <label className="form-check-label" htmlFor="cat_food_agri">
                                                Food and Agriculture
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="cat_packaging"
                                            />
                                            <label className="form-check-label" htmlFor="cat_packaging">
                                                Packaging and Logistics
                                            </label>
                                        </div>
                                    </div>
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
                                                Đức
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="origin_jp"
                                            />
                                            <label className="form-check-label" htmlFor="origin_jp">
                                                Nhật Bản
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="origin_cn"
                                            />
                                            <label className="form-check-label" htmlFor="origin_cn">
                                                Trung Quốc
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
                        <div className="col-lg-9 h-100">

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
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
                                        <BlockItem />
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