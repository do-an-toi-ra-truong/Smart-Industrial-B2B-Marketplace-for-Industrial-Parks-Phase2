import { NavLink } from 'react-router-dom'
const ProductDetails = () => {
    return (
        <>
            <main className="main">
            {/* Page Title */}
            <div className="page-title light-background">
                <div className="container">
                <nav className="breadcrumbs">
                    <ol>
                    <li>
                        <NavLink to="/">
                        Home
                        </NavLink>
                    </li>
                    <li className="current">
                        Product Details
                    </li>
                    </ol>
                </nav>
                <h1>
                    Product Details
                </h1>
                </div>
            </div>
            {/* End Page Title */}
            {/* Product Details Section */}
            <section id="product-details" className="product-details section">
                <div className="container">
                <div className="row g-5">
                    {/* Product Images Column */}
                    <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className="product-gallery">
                        {/* Vertical Thumbnails */}
                        <div className="thumbnails-vertical">
                        <div className="thumbnails-container">
                            <div className="thumbnail-item active" data-image="assets/images/product-details-1.webp">
                            <img src="assets/images/product-details-1.webp" alt="Product Thumbnail" className="img-fluid" />
                            </div>
                            <div className="thumbnail-item" data-image="assets/images/product-details-2.webp">
                            <img src="assets/images/product-details-2.webp" alt="Product Thumbnail" className="img-fluid" />
                            </div>
                            <div className="thumbnail-item" data-image="assets/images/product-details-3.webp">
                            <img src="assets/images/product-details-3.webp" alt="Product Thumbnail" className="img-fluid" />
                            </div>
                            <div className="thumbnail-item" data-image="assets/images/product-details-4.webp">
                            <img src="assets/images/product-details-4.webp" alt="Product Thumbnail" className="img-fluid" />
                            </div>
                            <div className="thumbnail-item" data-image="assets/images/product-details-5.webp">
                            <img src="assets/images/product-details-5.webp" alt="Product Thumbnail" className="img-fluid" />
                            </div>
                        </div>
                        </div>
                        {/* Main Image */}
                        <div className="main-image-wrapper">
                        <div className="image-zoom-container">
                            <img src="assets/images/product-details-1.webp" alt="Product Image" className="img-fluid main-image drift-zoom" id="main-product-image" data-zoom="assets/img/product/product-details-1.webp" />
                            <div className="zoom-overlay">
                            <i className="bi bi-zoom-in" />
                            </div>
                        </div>
                        <div className="image-nav">
                            <button className="image-nav-btn prev-image">
                            <i className="bi bi-chevron-left" />
                            </button>
                            <button className="image-nav-btn next-image">
                            <i className="bi bi-chevron-right" />
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Product Info Column */}
                    <div className="col-lg-7">
                    <div className="product-info-wrapper" id="product-info-sticky">
                        {/* Product Meta */}
                        <div className="product-meta">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="product-category">
                            Hand Tool
                            </span>
                            <div className="product-share">
                            <button className="share-btn" aria-label="Share product">
                                <i className="bi bi-share" />
                            </button>
                            <div className="share-dropdown">
                                <a href="#" aria-label="Share on Facebook">
                                <i className="bi bi-facebook" />
                                </a>
                                <a href="#" aria-label="Share on Twitter">
                                <i className="bi bi-twitter-x" />
                                </a>
                                <a href="#" aria-label="Share on Pinterest">
                                <i className="bi bi-pinterest" />
                                </a>
                                <a href="#" aria-label="Share via Email">
                                <i className="bi bi-envelope" />
                                </a>
                            </div>
                            </div>
                        </div>
                        <h1 className="product-title">
                            Máy khoan cầm tay Makita DA333D
                        </h1>
                        <div className="product-rating">
                            <div className="stars">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                            <span className="rating-value">
                                4.5
                            </span>
                            </div>
                            <a href="#reviews" className="rating-count">
                            42 Reviews
                            </a>
                        </div>
                        </div>
                        {/* Product Price */}
                        <div className="product-price-container">
                        <div className="price-wrapper align-items-center d-flex">
                            <NavLink to="/cart" className="btn btn-outline-danger fw-bold py-2 px-3 shadow-sm" style={{ 'borderWidth': '2px', 'borderRadius': '8px' }}>
                            Thêm vào giỏ hàng
                            </NavLink>
                        </div>
                        <div className="stock-info mt-3 text-success d-flex align-items-center">
                            <i className="bi bi-box-seam-fill me-2 fs-5" />
                            <div>
                            <div className="fw-bold">
                                Kho Bình Dương: Sẵn hàng
                            </div>
                            <div className="small text-muted">
                                Có thể giao ngay trong ngày
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Product Description */}
                        <div className="product-short-description">
                        <p>
                            Bạn đang tìm kiếm một máy khoan vặn vít dùng pin đáng tin cậy cho các dự án DIY của mình?
                            Vậy thì sản phẩm Makita DF333DSYE chắc chắn sẽ là sự lựa chọn hoàn hảo cho bạn.
                            Với công suất mạnh mẽ 170W và khả năng khoan thép lên đến 10mm, sản phẩm này có thể xử lý các nhiệm vụ
                            khoan lỗ lớn một cách dễ dàng.
                        </p>
                        </div>
                        {/* Product Options */}
                        <div className="product-options">
                        <div className="product-specs mt-4 mb-4">
                            <h5 className="mb-3">
                            Thông số kỹ thuật:
                            </h5>
                            <ul className="list-unstyled" style={{ 'lineHeight': '2' }}>
                            <li>
                                <i className="bi bi-check-circle-fill text-success me-2" />
                                <strong>
                                Công suất:
                                </strong>
                                170W
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill text-success me-2" />
                                <strong>
                                Khả năng khoan thép lên đến:
                                </strong>
                                10 mm
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill text-success me-2" />
                                <strong>
                                Trọng lượng:
                                </strong>
                                0.9 kg
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill text-success me-2" />
                                <strong>
                                Bảo hành:
                                </strong>
                                6 tháng
                                chính hãng
                            </li>
                            </ul>
                        </div>
                        {/* Quantity Selector */}
                        <div className="option-group">
                            <h6 className="option-title">
                            Số lượng
                            </h6>
                            <div className="quantity-selector">
                            <button className="quantity-btn decrease">
                                <i className="bi bi-dash" />
                            </button>
                            <input type="number" className="quantity-input" value="1" min="1" max="24" />
                            <button className="quantity-btn increase">
                                <i className="bi bi-plus" />
                            </button>
                            </div>
                        </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="buttons d-flex flex-wrap gap-2 mt-4">
                        <button className="btn btn-primary flex-grow-1 py-3 text-uppercase fw-bold shadow-sm" onClick={() => alert('Đã thêm sản phẩm vào danh sách yêu cầu báo giá!')}>
                            <i className="bi bi-cart-plus-fill me-2 fs-5" />
                            Thêm vào Giỏ Báo Giá
                        </button>
                        <button className="btn btn-outline-dark px-3" title="Tải Catalogue kỹ thuật">
                            <i className="bi bi-file-earmark-arrow-down fs-5" />
                        </button>
                        </div>
                        <div className="mt-3">
                        <small className="text-muted">
                            <i className="bi bi-info-circle me-1" />
                            Bạn có thể thêm nhiều sản phẩm vào giỏ rồi gửi yêu cầu báo giá một lần.
                        </small>
                        </div>
                        {/* Delivery Options */}
                        <div className="delivery-options">
                        <div className="delivery-option">
                            <i className="bi bi-truck" />
                            <div>
                            <h6>
                                Free Shipping
                            </h6>
                            <p>
                                On orders over 10.000.000VNĐ
                            </p>
                            </div>
                        </div>
                        <div className="delivery-option">
                            <i className="bi bi-arrow-repeat" />
                            <div>
                            <h6>
                                30-Day Returns
                            </h6>
                            <p>
                                Hassle-free returns
                            </p>
                            </div>
                        </div>
                        <div className="delivery-option">
                            <i className="bi bi-shield-check" />
                            <div>
                            <h6>
                                Quality Warranty Policy
                            </h6>
                            <p>
                                Full coverage
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Product Details Accordion */}
                <div className="row mt-5">
                    <div className="col-12">
                    <div className="product-details-accordion">
                        {/* Description Accordion */}
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#description" aria-expanded="true" aria-controls="description">
                            Product Description
                            </button>
                        </h2>
                        <div id="description" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                            <div className="product-description">
                                <h4>
                                Product Overview
                                </h4>
                                <p>
                                Bạn đang tìm kiếm một máy khoan vặn vít dùng pin đáng tin cậy cho các dự án DIY của mình? Vậy
                                    thì sản phẩm Makita DF333DSYE chắc chắn sẽ là sự lựa chọn hoàn hảo cho bạn. Với công suất mạnh
                                    mẽ 170W và khả năng khoan thép lên đến 10mm, sản phẩm này có thể xử lý các nhiệm vụ khoan lỗ lớn
                                    một cách dễ dàng. Ngoài ra, với đèn LED hỗ trợ, bạn có thể làm việc dễ dàng trong những khu vực
                                    thiếu sáng. Makita DF333DSYE được trang bị pin lithium-ion LXT x 2, đảm bảo thời gian hoạt động
                                    lâu hơn và thời gian sạc nhanh hơn. Điều này đảm bảo cho bạn sự tiện lợi và không gián đoạn công
                                    việc của mình. Với trọng lượng chỉ 0.9kg, máy khoan vặn vít này rất dễ cầm và sử dụng. Ngoài ra,
                                    Makita DF333DSYE còn được bảo hành 6 tháng, giúp bạn yên tâm sử dụng. Với tất cả các tính năng
                                    và tiện ích của mình, Makita DF333DSYE chắc chắn là một lựa chọn tuyệt vời cho người dùng tại
                                    nhà hay các thợ thủ công chuyên nghiệp.
                                </p>
                                <div className="row mt-4">
                                <div className="col-md-6">
                                    <h4>
                                    Key Features
                                    </h4>
                                    <ul className="feature-list">
                                    <li>
                                        <i className="bi bi-check-circle" />
                                        Sử dụng để khoan và vặn vít các vật liệu như thép,
                                        gỗ, nhựa, vv.
                                        elit
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle" />
                                        Phù hợp với các công việc DIY, xây dựng nhà cửa, lắp
                                        đặt thiết bị, vv.
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle" />
                                        Pin sạc tiện lợi cho việc sử dụng di động
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle" />
                                        Đèn LED hỗ trợ giúp làm việc dễ dàng trong điều kiện
                                        thiếu ánh sáng.
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle" />
                                        Thiết kế nhỏ gọn, dễ dàng di chuyển và sử dụng ở những
                                        không gian hẹp.
                                    </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>
                                    What's in the Box
                                    </h4>
                                    <ul className="feature-list">
                                    <li>
                                        <i className="bi bi-box" />
                                        01 thân máy DA333D
                                    </li>
                                    <li>
                                        <i className="bi bi-box" />
                                        01 móc treo
                                    </li>
                                    <li>
                                        <i className="bi bi-box" />
                                        Sách hướng dẫn sử dụng
                                    </li>
                                    <li>
                                        <i className="bi bi-box" />
                                        Sạc nhanh(DC10SB)
                                    </li>
                                    <li>
                                        <i className="bi bi-box" />
                                        2 pin 1.5Ah(BL1016)
                                    </li>
                                    <li>
                                        <i className="bi bi-box" />
                                        Mũi vít (+)(+)(784202-3)
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Specifications Accordion */}
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#specifications" aria-expanded="false" aria-controls="specifications">
                            Technical Specifications
                            </button>
                        </h2>
                        <div id="specifications" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            <div className="product-specifications">
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="specs-group">
                                    <h4>
                                        Technical Specifications
                                    </h4>
                                    <div className="specs-table">
                                        <div className="specs-row">
                                        <div className="specs-label">
                                            Mã sản phẩm
                                        </div>
                                        <div className="specs-value">
                                            DA333Dk
                                        </div>
                                        </div>
                                        <div className="specs-row">
                                        <div className="specs-label">
                                            Nhà sản xuất
                                        </div>
                                        <div className="specs-value">
                                            Makita
                                        </div>
                                        </div>
                                        <div className="specs-row">
                                        <div className="specs-label">
                                            Pin
                                        </div>
                                        <div className="specs-value">
                                            12 V
                                        </div>
                                        </div>
                                        <div className="specs-row">
                                        <div className="specs-label">
                                            Loại pin
                                        </div>
                                        <div className="specs-value">
                                            Lithium-ion LXT x 2
                                        </div>
                                        </div>
                                        <div className="specs-row">
                                        <div className="specs-label">
                                            Tốc độ không tải thấp
                                        </div>
                                        <div className="specs-value">
                                            0-450 vòng/phút
                                        </div>
                                        </div>
                                        <div className="specs-row">
                                        <div className="specs-label">
                                            Tốc độ không tải cao
                                        </div>
                                        <div className="specs-value">
                                            0-1700 vòng/phút
                                        </div>
                                        </div>
                                        <div className="specs-row">
                                        <div className="specs-label">
                                            Kích thước
                                        </div>
                                        <div className="specs-value">
                                            189x66x209mm (L x W x H)
                                        </div>
                                        </div>
                                        <div className="specs-row">
                                        <div className="specs-label">
                                            Trọng lượng
                                        </div>
                                        <div className="specs-value">
                                            0.9kg
                                        </div>
                                        </div>
                                        <div className="specs-row">
                                        <div className="specs-label">
                                            Công suất
                                        </div>
                                        <div className="specs-value">
                                            170W
                                        </div>
                                        </div>
                                        <div className="specs-row">
                                        <div className="specs-label">
                                            Lực siết tối đa
                                        </div>
                                        <div className="specs-value">
                                            Cứng/Mềm: 30/14 N.m
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
                        {/* Reviews Accordion */}
                        <div className="accordion-item" id="reviews">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#reviewsContent" aria-expanded="false" aria-controls="reviewsContent">
                            Customer Reviews (42)
                            </button>
                        </h2>
                        <div id="reviewsContent" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            <div className="product-reviews">
                                <div className="reviews-summary">
                                <div className="row">
                                    <div className="col-lg-4">
                                    <div className="overall-rating">
                                        <div className="rating-number">
                                        4.5
                                        </div>
                                        <div className="rating-stars">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                        </div>
                                        <div className="rating-count">
                                        Based on 42 reviews
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-8">
                                    <div className="rating-breakdown">
                                        <div className="rating-bar">
                                        <div className="rating-label">
                                            5 stars
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ 'width': '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="rating-count">
                                            27
                                        </div>
                                        </div>
                                        <div className="rating-bar">
                                        <div className="rating-label">
                                            4 stars
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ 'width': '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="rating-count">
                                            10
                                        </div>
                                        </div>
                                        <div className="rating-bar">
                                        <div className="rating-label">
                                            3 stars
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ 'width': '8%' }} aria-valuenow={8} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="rating-count">
                                            3
                                        </div>
                                        </div>
                                        <div className="rating-bar">
                                        <div className="rating-label">
                                            2 stars
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ 'width': '2%' }} aria-valuenow={2} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="rating-count">
                                            1
                                        </div>
                                        </div>
                                        <div className="rating-bar">
                                        <div className="rating-label">
                                            1 star
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ 'width': '2%' }} aria-valuenow={2} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="rating-count">
                                            1
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="reviews-list">
                                {/* Review Item */}
                                <div className="review-item">
                                    <div className="review-header">
                                    <div className="reviewer-info">
                                        <img src="assets/images/person-m-1.webp" alt="Reviewer" className="reviewer-avatar" />
                                        <div>
                                        <h5 className="reviewer-name">
                                            John Doe
                                        </h5>
                                        <div className="review-date">
                                            03/15/2024
                                        </div>
                                        </div>
                                    </div>
                                    <div className="review-rating">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </div>
                                    </div>
                                    <h5 className="review-title">
                                    Exceptional sound quality and comfort
                                    </h5>
                                    <div className="review-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue,
                                        suscipit elit nec, tincidunt orci. Phasellus egestas nisi vitae lectus imperdiet
                                        venenatis. Suspendisse vulputate quam diam, et consectetur augue condimentum in.
                                    </p>
                                    </div>
                                </div>
                                {/* End Review Item */}
                                {/* Review Item */}
                                <div className="review-item">
                                    <div className="review-header">
                                    <div className="reviewer-info">
                                        <img src="assets/images/person-f-2.webp" alt="Reviewer" className="reviewer-avatar" />
                                        <div>
                                        <h5 className="reviewer-name">
                                            Jane Smith
                                        </h5>
                                        <div className="review-date">
                                            02/28/2024
                                        </div>
                                        </div>
                                    </div>
                                    <div className="review-rating">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star" />
                                    </div>
                                    </div>
                                    <h5 className="review-title">
                                    Great headphones, battery could be better
                                    </h5>
                                    <div className="review-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue,
                                        suscipit elit nec, tincidunt orci. Phasellus egestas nisi vitae lectus imperdiet
                                        venenatis.
                                    </p>
                                    </div>
                                </div>
                                {/* End Review Item */}
                                {/* Review Item */}
                                <div className="review-item">
                                    <div className="review-header">
                                    <div className="reviewer-info">
                                        <img src="assets/images/person-m-3.webp" alt="Reviewer" className="reviewer-avatar" />
                                        <div>
                                        <h5 className="reviewer-name">
                                            Michael Johnson
                                        </h5>
                                        <div className="review-date">
                                            02/15/2024
                                        </div>
                                        </div>
                                    </div>
                                    <div className="review-rating">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                    </div>
                                    </div>
                                    <h5 className="review-title">
                                    Impressive noise cancellation
                                    </h5>
                                    <div className="review-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue,
                                        suscipit elit nec, tincidunt orci. Phasellus egestas nisi vitae lectus imperdiet
                                        venenatis. Suspendisse vulputate quam diam.
                                    </p>
                                    </div>
                                </div>
                                {/* End Review Item */}
                                </div>
                                <div className="review-form-container mt-5">
                                <h4>
                                    Write a Review
                                </h4>
                                <form className="review-form">
                                    <div className="rating-select mb-4">
                                    <label className="form-label">
                                        Your Rating
                                    </label>
                                    <div className="star-rating">
                                        <input type="radio" id="star5" name="rating" value="5" />
                                        <label htmlFor="star5" title="5 stars">
                                        <i className="bi bi-star-fill" />
                                        </label>
                                        <input type="radio" id="star4" name="rating" value="4" />
                                        <label htmlFor="star4" title="4 stars">
                                        <i className="bi bi-star-fill" />
                                        </label>
                                        <input type="radio" id="star3" name="rating" value="3" />
                                        <label htmlFor="star3" title="3 stars">
                                        <i className="bi bi-star-fill" />
                                        </label>
                                        <input type="radio" id="star2" name="rating" value="2" />
                                        <label htmlFor="star2" title="2 stars">
                                        <i className="bi bi-star-fill" />
                                        </label>
                                        <input type="radio" id="star1" name="rating" value="1" />
                                        <label htmlFor="star1" title="1 star">
                                        <i className="bi bi-star-fill" />
                                        </label>
                                    </div>
                                    </div>
                                    <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="review-name" className="form-label">
                                        Your Name
                                        </label>
                                        <input type="text" className="form-control" id="review-name" required={true} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="review-email" className="form-label">
                                        Your Email
                                        </label>
                                        <input type="email" className="form-control" id="review-email" required={true} />
                                    </div>
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="review-title" className="form-label">
                                        Review Title
                                    </label>
                                    <input type="text" className="form-control" id="review-title" required={true} />
                                    </div>
                                    <div className="mb-4">
                                    <label htmlFor="review-content" className="form-label">
                                        Your Review
                                    </label>
                                    <textarea className="form-control" id="review-content" rows={4} required={true} />
                                    <div className="form-text">
                                        Tell others what you think about this product. Be honest and helpful!
                                    </div>
                                    </div>
                                    <div className="loading">
                                    Loading
                                    </div>
                                    <div className="error-message" />
                                    <div className="sent-message">
                                    Your review has been submitted. Thank you!
                                    </div>
                                    <div className="text-end">
                                    <button type="submit" className="btn btn-primary">
                                        Submit Review
                                    </button>
                                    </div>
                                </form>
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
            {/* /Product Details Section */}
            </main>
        </>
    )
}
export default ProductDetails