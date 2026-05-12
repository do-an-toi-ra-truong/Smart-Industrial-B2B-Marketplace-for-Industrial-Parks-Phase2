import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const UserHeader = () => {
    const [activeMegaCat, setActiveMegaCat] = useState('electronics');
    const switchMegaCat = (category: string) => {
        setActiveMegaCat(category);
    }
    return (
        <>
            <header id="header" className="header position-relative">
                {/* Top Bar */}
                <div className="top-bar py-2 d-none d-lg-block">
                    <div className="container-fluid container-xl">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center">
                                    <div className="top-bar-item me-4">
                                        <i className="bi bi-telephone-fill me-2" />
                                        <span>
                                            Customer Support:
                                        </span>
                                        <a href="tel:+1234567890">
                                            0384235007
                                        </a>
                                    </div>
                                    <div className="top-bar-item">
                                        <i className="bi bi-envelope-fill me-2" />
                                        <a href="#">
                                            huy.vuquang.cit22@eiu.edu.vn
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Main Header */}
                <div className="main-header">
                    <div className="container-fluid container-xl">
                        <div className="d-flex py-3 align-items-center justify-content-between">
                            {/* Logo */}
                            <NavLink to="/" className="logo d-flex align-items-center">
                                {/* Uncomment the line below if you also wish to use an image logo */}
                                {/* <img src="assets/img/logo.webp" alt=""> */}
                                <h1 className="sitename">
                                    <span>
                                        SIBMIP
                                    </span>
                                </h1>
                            </NavLink>
                            {/* Search */}
                            <form className="search-form desktop-search-form">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for products..." />
                                    <button className="btn search-btn" type="submit">
                                        <i className="bi bi-search" />
                                    </button>
                                </div>
                            </form>
                            {/* Actions */}
                            <div className="header-actions d-flex align-items-center justify-content-end">
                                {/* Mobile Search Toggle */}
                                <button className="header-action-btn mobile-search-toggle d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#mobileSearch" aria-expanded="false" aria-controls="mobileSearch">
                                    <i className="bi bi-search" />
                                </button>
                                {/* Account */}
                                <div className="dropdown account-dropdown">
                                    <button className="header-action-btn" data-bs-toggle="dropdown">
                                        <i className="bi bi-person" />
                                        <span className="action-text d-none d-md-inline-block">
                                            Account
                                        </span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-header">
                                            <h6>
                                                Welcome to
                                                <span className="sitename">
                                                    SIBMIP
                                                </span>
                                            </h6>
                                            <p className="mb-0">
                                                Access account & manage orders
                                            </p>
                                        </div>
                                        <div className="dropdown-body">
                                            <NavLink className="dropdown-item d-flex align-items-center" to="/account">
                                                <i className="bi bi-person-circle me-2" />
                                                <span>
                                                    My Profile
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div className="dropdown-footer">
                                            <NavLink to="/login" className="btn btn-primary w-100 mb-2">
                                                Log in
                                            </NavLink>
                                            <NavLink to="/register" className="btn btn-outline-primary w-100">
                                                Register
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/* Wishlist */}
                                {/* Cart */}
                                <div className="dropdown cart-dropdown">
                                    <button className="header-action-btn" data-bs-toggle="dropdown">
                                        <i className="bi bi-cart3" />
                                        <span className="action-text d-none d-md-inline-block">
                                            Cart
                                        </span>
                                        <span className="badge">
                                            3
                                        </span>
                                    </button>
                                    <div className="dropdown-menu cart-dropdown-menu">
                                        <div className="dropdown-header">
                                            <h6>
                                                Shopping Cart (3)
                                            </h6>
                                        </div>
                                        <div className="dropdown-body">
                                            <div className="cart-items">
                                                {/* Cart Item 1 */}
                                                <div className="cart-item">
                                                    <div className="cart-item-image">
                                                        <img src="assets/images/product-1.webp" alt="Product" className="img-fluid" />
                                                    </div>
                                                    <div className="cart-item-content">
                                                        <h6 className="cart-item-title">
                                                            Wireless Headphones
                                                        </h6>
                                                        <div className="cart-item-meta">
                                                            1 × $89.99
                                                        </div>
                                                    </div>
                                                    <button className="cart-item-remove">
                                                        <i className="bi bi-x" />
                                                    </button>
                                                </div>
                                                {/* Cart Item 2 */}
                                                <div className="cart-item">
                                                    <div className="cart-item-image">
                                                        <img src="assets/images/product-2.webp" alt="Product" className="img-fluid" />
                                                    </div>
                                                    <div className="cart-item-content">
                                                        <h6 className="cart-item-title">
                                                            Smart Watch
                                                        </h6>
                                                        <div className="cart-item-meta">
                                                            1 × $129.99
                                                        </div>
                                                    </div>
                                                    <button className="cart-item-remove">
                                                        <i className="bi bi-x" />
                                                    </button>
                                                </div>
                                                {/* Cart Item 3 */}
                                                <div className="cart-item">
                                                    <div className="cart-item-image">
                                                        <img src="assets/images/product-3.webp" alt="Product" className="img-fluid" />
                                                    </div>
                                                    <div className="cart-item-content">
                                                        <h6 className="cart-item-title">
                                                            Bluetooth Speaker
                                                        </h6>
                                                        <div className="cart-item-meta">
                                                            1 × $59.99
                                                        </div>
                                                    </div>
                                                    <button className="cart-item-remove">
                                                        <i className="bi bi-x" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-footer">
                                            <div className="cart-total">
                                                <span>
                                                    Total:
                                                </span>
                                                <span className="cart-total-price">
                                                    $279.97
                                                </span>
                                            </div>
                                            <div className="cart-actions">
                                                <NavLink to="/cart" className="btn btn-outline-primary">
                                                    View Cart
                                                </NavLink>
                                                <NavLink to="/checkout" className="btn btn-primary">
                                                    Checkout
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Mobile Navigation Toggle */}
                                <i className="mobile-nav-toggle d-xl-none bi bi-list me-0" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navigation */}
                <div className="header-nav">
                    <div className="container-fluid container-xl position-relative">
                        <nav id="navmenu" className="navmenu">
                            <ul>
                                <li>
                                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                                        About
                                    </NavLink>
                                </li>
                                <li className="megamenu-trigger" id="nav-categories">
                                    <NavLink to="/category" className="megamenu-toggle">
                                        <i className="bi bi-grid-3x3-gap-fill me-1" />
                                        <span>
                                            Category
                                        </span>
                                        <i className="bi bi-chevron-down ms-1 toggle-dropdown" />
                                    </NavLink>
                                    {/* Mega Panel */}
                                    <div className="category-megapanel" id="categoryMegaPanel">
                                        <div className="megapanel-inner">
                                            {/* LEFT: Category sidebar */}
                                            <div className="megapanel-sidebar">
                                                <div className={`mgs-item${activeMegaCat === 'electronics' ? ' active' : ''} d-flex align-items-center gap-2`} data-cat="electronics" onMouseEnter={() => switchMegaCat('electronics')}>
                                                    <i className="bi bi-cpu-fill" />
                                                    <span className="text-truncate">
                                                        Electronics & Components
                                                    </span>
                                                    <i className="bi bi-chevron-right ms-auto" />
                                                </div>

                                                <div className={`mgs-item${activeMegaCat === 'raw-materials' ? ' active' : ''} d-flex align-items-center gap-2`} data-cat="raw-materials" onMouseEnter={() => switchMegaCat('raw-materials')}>
                                                    <i className="bi bi-layers-fill" />
                                                    <span className="text-truncate">
                                                        Raw Materials
                                                    </span>
                                                    <i className="bi bi-chevron-right ms-auto" />
                                                </div>

                                                <div className={`mgs-item${activeMegaCat === 'chemicals' ? ' active' : ''} d-flex align-items-center gap-2`} data-cat="chemicals" onMouseEnter={() => switchMegaCat('chemicals')}>
                                                    <i className="bi bi-droplet-fill" />
                                                    <span className="text-truncate">
                                                        Chemicals
                                                    </span>
                                                    <i className="bi bi-chevron-right ms-auto" />
                                                </div>

                                                <div className={`mgs-item${activeMegaCat === 'machinery' ? ' active' : ''} d-flex align-items-center gap-2`} data-cat="machinery" onMouseEnter={() => switchMegaCat('machinery')}>
                                                    <i className="bi bi-gear-wide-connected" />
                                                    <span className="text-truncate">
                                                        Machinery & Equipment
                                                    </span>
                                                    <i className="bi bi-chevron-right ms-auto" />
                                                </div>

                                                <div className={`mgs-item${activeMegaCat === 'automotive' ? ' active' : ''} d-flex align-items-center gap-2`} data-cat="automotive" onMouseEnter={() => switchMegaCat('automotive')}>
                                                    <i className="bi bi-car-front-fill" />
                                                    <span className="text-truncate">
                                                        Automotive
                                                    </span>
                                                    <i className="bi bi-chevron-right ms-auto" />
                                                </div>

                                                <div className={`mgs-item${activeMegaCat === 'textiles' ? ' active' : ''} d-flex align-items-center gap-2`} data-cat="textiles" onMouseEnter={() => switchMegaCat('textiles')}>
                                                    <i className="bi bi-scissors" />
                                                    <span className="text-truncate">
                                                        Textiles & Fabrics
                                                    </span>
                                                    <i className="bi bi-chevron-right ms-auto" />
                                                </div>

                                                <div className={`mgs-item${activeMegaCat === 'food-agri' ? ' active' : ''} d-flex align-items-center gap-2`} data-cat="food-agri" onMouseEnter={() => switchMegaCat('food-agri')}>
                                                    <i className="bi bi-basket-fill" />
                                                    <span className="text-truncate">
                                                        Food & Agriculture
                                                    </span>
                                                    <i className="bi bi-chevron-right ms-auto" />
                                                </div>

                                                <div className={`mgs-item${activeMegaCat === 'packaging' ? ' active' : ''} d-flex align-items-center gap-2`} data-cat="packaging" onMouseEnter={() => switchMegaCat('packaging')}>
                                                    <i className="bi bi-box-fill" />
                                                    <span className="text-truncate">
                                                        Packaging & Logistics
                                                    </span>
                                                    <i className="bi bi-chevron-right ms-auto" />
                                                </div>
                                            </div>
                                            {/* RIGHT: Sub-content panels */}
                                            <div className="megapanel-content">
                                                {/* Electronics Panel */}
                                                <div className={`mgc-panel${activeMegaCat === 'electronics' ? ' active' : ''}`} data-panel="electronics">
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Loại sản phẩm
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-phone" />
                                                                Smartphones & Tablets
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-laptop" />
                                                                Laptops & Computers
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-headphones" />
                                                                Audio & Wearables
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-camera" />
                                                                Cameras & Optics
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-house-gear" />
                                                                Smart Home Devices
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-plug" />
                                                                Power Supplies & UPS
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Linh kiện điện tử
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-cpu" />
                                                                IC & Microcontrollers
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-broadcast" />
                                                                Sensors & Modules
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-lightning-charge" />
                                                                Capacitors & Resistors
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-usb-drive" />
                                                                Connectors & Cables
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-motherboard" />
                                                                PCB & Assemblies
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Thương hiệu phổ biến
                                                        </div>
                                                        <div className="mgc-brands">
                                                            <span className="brand-tag">
                                                                Siemens
                                                            </span>
                                                            <span className="brand-tag">
                                                                ABB
                                                            </span>
                                                            <span className="brand-tag">
                                                                Schneider
                                                            </span>
                                                            <span className="brand-tag">
                                                                Mitsubishi
                                                            </span>
                                                            <span className="brand-tag">
                                                                Omron
                                                            </span>
                                                            <span className="brand-tag">
                                                                Samsung
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/category" className="mgc-view-all">
                                                        Xem tất cả Electronics
                                                        <i className="bi bi-arrow-right" />
                                                    </NavLink>
                                                </div>
                                                {/* Raw Materials Panel */}
                                                <div className={`mgc-panel${activeMegaCat === 'raw-materials' ? ' active' : ''}`} data-panel="raw-materials">
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Kim loại
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-layers" />
                                                                Thép & Sắt
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-brightness-high" />
                                                                Nhôm & Hợp kim
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-gem" />
                                                                Đồng & Inox
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-circle-half" />
                                                                Kim loại màu
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Phi kim loại
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-circle-half" />
                                                                Nhựa & Polymer
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-tree" />
                                                                Gỗ & Giấy
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-droplet" />
                                                                Cao su & Silicone
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-gem" />
                                                                Khoáng sản & Quặng
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-moisture" />
                                                                Sợi Carbon & Composite
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Tiêu chuẩn phổ biến
                                                        </div>
                                                        <div className="mgc-brands">
                                                            <span className="brand-tag">
                                                                ASTM A36
                                                            </span>
                                                            <span className="brand-tag">
                                                                SUS304
                                                            </span>
                                                            <span className="brand-tag">
                                                                6061-T6
                                                            </span>
                                                            <span className="brand-tag">
                                                                SS400
                                                            </span>
                                                            <span className="brand-tag">
                                                                JIS G3101
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/category" className="mgc-view-all">
                                                        Xem tất cả Raw Materials
                                                        <i className="bi bi-arrow-right" />
                                                    </NavLink>
                                                </div>
                                                {/* Chemicals Panel */}
                                                <div className={`mgc-panel${activeMegaCat === 'chemicals' ? ' active' : ''}`} data-panel="chemicals">
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Hóa chất CN
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-moisture" />
                                                                Hóa chất công nghiệp
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-cup-hot" />
                                                                Sơn & Keo dán
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-recycle" />
                                                                Dung môi & Tẩy rửa
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-shield-check" />
                                                                Hóa chất an toàn
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Chuyên ngành
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-flower1" />
                                                                Nông hóa phẩm
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-capsule" />
                                                                Hóa chất đặc biệt
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-droplet-half" />
                                                                Chất xúc tác
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-thermometer" />
                                                                Chất bôi trơn
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Chứng nhận
                                                        </div>
                                                        <div className="mgc-brands">
                                                            <span className="brand-tag">
                                                                ISO 9001
                                                            </span>
                                                            <span className="brand-tag">
                                                                REACH
                                                            </span>
                                                            <span className="brand-tag">
                                                                FDA
                                                            </span>
                                                            <span className="brand-tag">
                                                                RoHS
                                                            </span>
                                                            <span className="brand-tag">
                                                                GHS
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/category" className="mgc-view-all">
                                                        Xem tất cả Chemicals
                                                        <i className="bi bi-arrow-right" />
                                                    </NavLink>
                                                </div>
                                                {/* Machinery Panel */}
                                                <div className={`mgc-panel${activeMegaCat === 'machinery' ? ' active' : ''}`} data-panel="machinery">
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Máy gia công
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-gear" />
                                                                Máy CNC
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-robot" />
                                                                Robot công nghiệp
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-tools" />
                                                                Thiết bị gia công kim loại
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-wrench" />
                                                                Dụng cụ bảo trì
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Thiết bị năng lượng
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-lightning-charge" />
                                                                Máy phát điện
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-wind" />
                                                                Bơm & Máy nén khí
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-fan" />
                                                                Hệ thống HVAC
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-water" />
                                                                Máy bơm thủy lực
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Thương hiệu
                                                        </div>
                                                        <div className="mgc-brands">
                                                            <span className="brand-tag">
                                                                Fanuc
                                                            </span>
                                                            <span className="brand-tag">
                                                                Yaskawa
                                                            </span>
                                                            <span className="brand-tag">
                                                                KUKA
                                                            </span>
                                                            <span className="brand-tag">
                                                                Haas
                                                            </span>
                                                            <span className="brand-tag">
                                                                Grundfos
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/category" className="mgc-view-all">
                                                        Xem tất cả Machinery
                                                        <i className="bi bi-arrow-right" />
                                                    </NavLink>
                                                </div>
                                                {/* Automotive Panel */}
                                                <div className={`mgc-panel${activeMegaCat === 'automotive' ? ' active' : ''}`} data-panel="automotive">
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Phụ tùng xe
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-gear-wide" />
                                                                Phụ tùng & Linh kiện
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-car-front" />
                                                                Phụ kiện xe hơi
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-fuel-pump" />
                                                                Động cơ & Hộp số
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-cone-striped" />
                                                                Lốp & Cao su
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Xe điện (EV)
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-battery-charging" />
                                                                Pin & BMS
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-lightning" />
                                                                Motor điện
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-ev-station" />
                                                                Sạc EV
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-cpu" />
                                                                ECU & điều khiển
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Thương hiệu
                                                        </div>
                                                        <div className="mgc-brands">
                                                            <span className="brand-tag">
                                                                Bosch
                                                            </span>
                                                            <span className="brand-tag">
                                                                Denso
                                                            </span>
                                                            <span className="brand-tag">
                                                                Continental
                                                            </span>
                                                            <span className="brand-tag">
                                                                ZF
                                                            </span>
                                                            <span className="brand-tag">
                                                                NGK
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/category" className="mgc-view-all">
                                                        Xem tất cả Automotive
                                                        <i className="bi bi-arrow-right" />
                                                    </NavLink>
                                                </div>
                                                {/* Textiles Panel */}
                                                <div className={`mgc-panel${activeMegaCat === 'textiles' ? ' active' : ''}`} data-panel="textiles">
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Sợi & Vải
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-threads" />
                                                                Sợi & Chỉ
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-grid-3x3-gap" />
                                                                Vải dệt & đan
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-scissors" />
                                                                Quần áo may mặc
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-bag-fill" />
                                                                Vải kỹ thuật
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Vải chuyên dụng
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-shield" />
                                                                Vải bảo hộ
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-stars" />
                                                                Vải kỹ thuật cao
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-water" />
                                                                Vải chống thấm
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-thermometer-half" />
                                                                Vải chịu nhiệt
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Nguyên liệu
                                                        </div>
                                                        <div className="mgc-brands">
                                                            <span className="brand-tag">
                                                                Cotton
                                                            </span>
                                                            <span className="brand-tag">
                                                                Polyester
                                                            </span>
                                                            <span className="brand-tag">
                                                                Nylon
                                                            </span>
                                                            <span className="brand-tag">
                                                                Viscose
                                                            </span>
                                                            <span className="brand-tag">
                                                                Spandex
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/category" className="mgc-view-all">
                                                        Xem tất cả Textiles
                                                        <i className="bi bi-arrow-right" />
                                                    </NavLink>
                                                </div>
                                                {/* Food & Agri Panel */}
                                                <div className={`mgc-panel${activeMegaCat === 'food-agri' ? ' active' : ''}`} data-panel="food-agri">
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Thực phẩm
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-basket" />
                                                                Lúa gạo & Ngũ cốc
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-flower2" />
                                                                Rau củ quả tươi
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-egg-fried" />
                                                                Thực phẩm chế biến
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-water" />
                                                                Thủy hải sản
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Nông nghiệp
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-bug" />
                                                                Vật tư nông nghiệp
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-tree" />
                                                                Cây giống & Hạt giống
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-droplet" />
                                                                Phân bón & Thuốc BVTV
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-gear" />
                                                                Máy nông nghiệp
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Chứng nhận
                                                        </div>
                                                        <div className="mgc-brands">
                                                            <span className="brand-tag">
                                                                HACCP
                                                            </span>
                                                            <span className="brand-tag">
                                                                VietGAP
                                                            </span>
                                                            <span className="brand-tag">
                                                                GlobalGAP
                                                            </span>
                                                            <span className="brand-tag">
                                                                Organic
                                                            </span>
                                                            <span className="brand-tag">
                                                                Halal
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/category" className="mgc-view-all">
                                                        Xem tất cả Food & Agri
                                                        <i className="bi bi-arrow-right" />
                                                    </NavLink>
                                                </div>
                                                {/* Packaging Panel */}
                                                <div className={`mgc-panel${activeMegaCat === 'packaging' ? ' active' : ''}`} data-panel="packaging">
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Bao bì cứng
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-box-seam" />
                                                                Thùng & Hộp carton
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-cup" />
                                                                Chai & Lọ nhựa
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-grid" />
                                                                Pallet & Khung gỗ
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-shield" />
                                                                Bảo vệ & Chèn lót
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Bao bì mềm
                                                        </div>
                                                        <div className="mgc-links">
                                                            <Link to="/category">
                                                                <i className="bi bi-bag" />
                                                                Túi & Bao linh hoạt
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-tag" />
                                                                Nhãn & In ấn
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-layers" />
                                                                Màng & Cuộn co
                                                            </Link>
                                                            <Link to="/category">
                                                                <i className="bi bi-recycle" />
                                                                Bao bì thân thiện MT
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="mgc-group">
                                                        <div className="mgc-group-title">
                                                            Vật liệu
                                                        </div>
                                                        <div className="mgc-brands">
                                                            <span className="brand-tag">
                                                                PE/PP
                                                            </span>
                                                            <span className="brand-tag">
                                                                PET
                                                            </span>
                                                            <span className="brand-tag">
                                                                Kraft
                                                            </span>
                                                            <span className="brand-tag">
                                                                Corrugated
                                                            </span>
                                                            <span className="brand-tag">
                                                                Biodegradable
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <NavLink to="/category" className="mgc-view-all">
                                                        Xem tất cả Packaging
                                                        <i className="bi bi-arrow-right" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                            {/* end megapanel-content */}
                                        </div>
                                        {/* end megapanel-inner */}
                                    </div>
                                    {/* end category-megapanel */}
                                </li>
                                <li>
                                    <NavLink to="/product-details" className={({ isActive }) => isActive ? "active" : ""}>
                                        Product Details
                                    </NavLink>
                                </li>
                                {/* Product type */}
                                {/* Products Mega Menu 1 */}
                                <li>
                                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Mobile Search Form */}
                <div className="collapse" id="mobileSearch">
                    <div className="container">
                        <form className="search-form">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products..." />
                                <button className="btn search-btn" type="submit">
                                    <i className="bi bi-search" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
        </>
    )
}
export default UserHeader