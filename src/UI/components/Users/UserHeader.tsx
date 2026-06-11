import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { fetchPublicIndustries } from '../../../api/publicCatalogApi'
import type { IndustryCatalogResponse } from '../../../api/publicCatalogApi'

const UserHeader = () => {
    const [activeMegaCat, setActiveMegaCat] = useState('');
    const [industries, setIndustries] = useState<IndustryCatalogResponse[]>([]);
    const switchMegaCat = (category: string) => {
        setActiveMegaCat(category);
    }

    useEffect(() => {
        fetchPublicIndustries().then(data => {
            setIndustries(data.filter(i => i.status === 'ACTIVE'));
            if (data.length > 0) setActiveMegaCat(data[0].name);
        }).catch(() => {});
    }, []);
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
                                                            1 Ã— $89.99
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
                                                            1 Ã— $129.99
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
                                                            1 Ã— $59.99
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
                                            {/* LEFT: Category sidebar â€” dynamic from API */}
                                            <div className="megapanel-sidebar">
                                                {industries.map(ind => (
                                                    <div
                                                        key={ind.id}
                                                        className={`mgs-item${activeMegaCat === ind.name ? ' active' : ''} d-flex align-items-center gap-2`}
                                                        onMouseEnter={() => switchMegaCat(ind.name)}
                                                    >
                                                        <i className={ind.icon || 'bi bi-box-fill'} />
                                                        <span className="text-truncate">{ind.name}</span>
                                                        <i className="bi bi-chevron-right ms-auto" />
                                                    </div>
                                                ))}
                                                {industries.length === 0 && (
                                                    <div className="text-muted p-3">No categories available</div>
                                                )}
                                            </div>
                                            {/* RIGHT: Sub-content panels â€” dynamic from API */}
                                            <div className="megapanel-content">
                                                {industries.map(ind => (
                                                    <div
                                                        key={ind.id}
                                                        className={`mgc-panel${activeMegaCat === ind.name ? ' active' : ''}`}
                                                    >
                                                        <div className="mgc-group">
                                                            <div className="mgc-group-title">
                                                                {ind.name} â€” Products
                                                            </div>
                                                            <div className="mgc-links">
                                                                {ind.products && ind.products.length > 0 ? (
                                                                    ind.products.map(p => (
                                                                        <Link key={p.id} to="/category">
                                                                            <i className="bi bi-dot" />
                                                                            {p.name}
                                                                        </Link>
                                                                    ))
                                                                ) : (
                                                                    <span className="text-muted small">No products yet</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {ind.description && (
                                                            <div className="mgc-group">
                                                                <div className="mgc-group-title">Description</div>
                                                                <p className="small text-muted px-2">{ind.description}</p>
                                                            </div>
                                                        )}
                                                        <NavLink to="/category" className="mgc-view-all">
                                                            View all {ind.name}
                                                            <i className="bi bi-arrow-right" />
                                                        </NavLink>
                                                    </div>
                                                ))}
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
