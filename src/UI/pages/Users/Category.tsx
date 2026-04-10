const Category = () => {
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
                            <span>Customer Support: </span>
                            <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </div>
                        <div className="top-bar-item">
                            <i className="bi bi-envelope-fill me-2" />
                            <a href="/cdn-cgi/l/email-protection#35464045455a474175504d54584559501b565a58">
                            <span
                                className="__cf_email__"
                                data-cfemail="88fbfdf8f8e7fafcc8edf0e9e5f8e4eda6ebe7e5"
                            >
                                [email&nbsp;protected]
                            </span>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-end">
                        <div className="top-bar-item me-4">
                            <a href="track-order.html">
                            <i className="bi bi-truck me-2" />
                            Track Order
                            </a>
                        </div>
                        <div className="top-bar-item dropdown me-4">
                            <a
                            href="#"
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            >
                            <i className="bi bi-translate me-2" />
                            English
                            </a>
                            <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                <i className="bi bi-check2 me-2 selected-icon" />
                                English
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Español
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Français
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Deutsch
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="top-bar-item dropdown">
                            <a
                            href="#"
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            >
                            <i className="bi bi-currency-dollar me-2" />
                            USD
                            </a>
                            <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                <i className="bi bi-check2 me-2 selected-icon" />
                                USD
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                EUR
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                GBP
                                </a>
                            </li>
                            </ul>
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
                    <a href="index.html" className="logo d-flex align-items-center">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.webp" alt=""> */}
                        <h1 className="sitename">
                        Fashion<span>Store</span>
                        </h1>
                    </a>
                    {/* Search */}
                    <form className="search-form desktop-search-form">
                        <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for products..."
                        />
                        <button className="btn search-btn" type="submit">
                            <i className="bi bi-search" />
                        </button>
                        </div>
                    </form>
                    {/* Actions */}
                    <div className="header-actions d-flex align-items-center justify-content-end">
                        {/* Mobile Search Toggle */}
                        <button
                        className="header-action-btn mobile-search-toggle d-xl-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mobileSearch"
                        aria-expanded="false"
                        aria-controls="mobileSearch"
                        >
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
                                Welcome to <span className="sitename">FashionStore</span>
                            </h6>
                            <p className="mb-0">Access account &amp; manage orders</p>
                            </div>
                            <div className="dropdown-body">
                            <a
                                className="dropdown-item d-flex align-items-center"
                                href="account.html"
                            >
                                <i className="bi bi-person-circle me-2" />
                                <span>My Profile</span>
                            </a>
                            <a
                                className="dropdown-item d-flex align-items-center"
                                href="orders.html"
                            >
                                <i className="bi bi-bag-check me-2" />
                                <span>My Orders</span>
                            </a>
                            <a
                                className="dropdown-item d-flex align-items-center"
                                href="wishlist.html"
                            >
                                <i className="bi bi-heart me-2" />
                                <span>My Wishlist</span>
                            </a>
                            <a
                                className="dropdown-item d-flex align-items-center"
                                href="returns.html"
                            >
                                <i className="bi bi-arrow-return-left me-2" />
                                <span>Returns &amp; Refunds</span>
                            </a>
                            <a
                                className="dropdown-item d-flex align-items-center"
                                href="settings.html"
                            >
                                <i className="bi bi-gear me-2" />
                                <span>Settings</span>
                            </a>
                            </div>
                            <div className="dropdown-footer">
                            <a href="login.html" className="btn btn-primary w-100 mb-2">
                                Sign In
                            </a>
                            <a
                                href="register.html"
                                className="btn btn-outline-primary w-100"
                            >
                                Register
                            </a>
                            </div>
                        </div>
                        </div>
                        {/* Wishlist */}
                        <a
                        href="wishlist.html"
                        className="header-action-btn d-none d-md-flex"
                        >
                        <i className="bi bi-heart" />
                        <span className="action-text d-none d-md-inline-block">
                            Wishlist
                        </span>
                        <span className="badge">0</span>
                        </a>
                        {/* Cart */}
                        <div className="dropdown cart-dropdown">
                        <button className="header-action-btn" data-bs-toggle="dropdown">
                            <i className="bi bi-cart3" />
                            <span className="action-text d-none d-md-inline-block">
                            Cart
                            </span>
                            <span className="badge">3</span>
                        </button>
                        <div className="dropdown-menu cart-dropdown-menu">
                            <div className="dropdown-header">
                            <h6>Shopping Cart (3)</h6>
                            </div>
                            <div className="dropdown-body">
                            <div className="cart-items">
                                {/* Cart Item 1 */}
                                <div className="cart-item">
                                <div className="cart-item-image">
                                    <img
                                    src="assets/images/product-1.webp"
                                    alt="Product"
                                    className="img-fluid"
                                    />
                                </div>
                                <div className="cart-item-content">
                                    <h6 className="cart-item-title">Wireless Headphones</h6>
                                    <div className="cart-item-meta">1 × $89.99</div>
                                </div>
                                <button className="cart-item-remove">
                                    <i className="bi bi-x" />
                                </button>
                                </div>
                                {/* Cart Item 2 */}
                                <div className="cart-item">
                                <div className="cart-item-image">
                                    <img
                                    src="assets/images/product-2.webp"
                                    alt="Product"
                                    className="img-fluid"
                                    />
                                </div>
                                <div className="cart-item-content">
                                    <h6 className="cart-item-title">Smart Watch</h6>
                                    <div className="cart-item-meta">1 × $129.99</div>
                                </div>
                                <button className="cart-item-remove">
                                    <i className="bi bi-x" />
                                </button>
                                </div>
                                {/* Cart Item 3 */}
                                <div className="cart-item">
                                <div className="cart-item-image">
                                    <img
                                    src="assets/images/product-3.webp"
                                    alt="Product"
                                    className="img-fluid"
                                    />
                                </div>
                                <div className="cart-item-content">
                                    <h6 className="cart-item-title">Bluetooth Speaker</h6>
                                    <div className="cart-item-meta">1 × $59.99</div>
                                </div>
                                <button className="cart-item-remove">
                                    <i className="bi bi-x" />
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="dropdown-footer">
                            <div className="cart-total">
                                <span>Total:</span>
                                <span className="cart-total-price">$279.97</span>
                            </div>
                            <div className="cart-actions">
                                <a href="cart.html" className="btn btn-outline-primary">
                                View Cart
                                </a>
                                <a href="checkout.html" className="btn btn-primary">
                                Checkout
                                </a>
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
                        <a href="index.html">Home</a>
                        </li>
                        <li>
                        <a href="about.html">About</a>
                        </li>
                        <li>
                        <a href="category.html" className="active">
                            Category
                        </a>
                        </li>
                        <li>
                        <a href="product-details.html">Product Details</a>
                        </li>
                        <li>
                        <a href="cart.html">Cart</a>
                        </li>
                        <li>
                        <a href="checkout.html">Checkout</a>
                        </li>
                        <li className="dropdown">
                        <a href="#">
                            <span>Dropdown</span>{" "}
                            <i className="bi bi-chevron-down toggle-dropdown" />
                        </a>
                        <ul>
                            <li>
                            <a href="#">Dropdown 1</a>
                            </li>
                            <li className="dropdown">
                            <a href="#">
                                <span>Deep Dropdown</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown" />
                            </a>
                            <ul>
                                <li>
                                <a href="#">Deep Dropdown 1</a>
                                </li>
                                <li>
                                <a href="#">Deep Dropdown 2</a>
                                </li>
                                <li>
                                <a href="#">Deep Dropdown 3</a>
                                </li>
                                <li>
                                <a href="#">Deep Dropdown 4</a>
                                </li>
                                <li>
                                <a href="#">Deep Dropdown 5</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="#">Dropdown 2</a>
                            </li>
                            <li>
                            <a href="#">Dropdown 3</a>
                            </li>
                            <li>
                            <a href="#">Dropdown 4</a>
                            </li>
                        </ul>
                        </li>
                        {/* Products Mega Menu 1 */}
                        <li className="products-megamenu-1">
                        <a href="#">
                            <span>Megamenu 1</span>{" "}
                            <i className="bi bi-chevron-down toggle-dropdown" />
                        </a>
                        {/* Products Mega Menu 1 Mobile View */}
                        <ul className="mobile-megamenu">
                            <li>
                            <a href="#">Featured Products</a>
                            </li>
                            <li>
                            <a href="#">New Arrivals</a>
                            </li>
                            <li>
                            <a href="#">Sale Items</a>
                            </li>
                            <li className="dropdown">
                            <a href="#">
                                <span>Clothing</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown" />
                            </a>
                            <ul>
                                <li>
                                <a href="#">Men's Wear</a>
                                </li>
                                <li>
                                <a href="#">Women's Wear</a>
                                </li>
                                <li>
                                <a href="#">Kids Collection</a>
                                </li>
                                <li>
                                <a href="#">Sportswear</a>
                                </li>
                                <li>
                                <a href="#">Accessories</a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown">
                            <a href="#">
                                <span>Electronics</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown" />
                            </a>
                            <ul>
                                <li>
                                <a href="#">Smartphones</a>
                                </li>
                                <li>
                                <a href="#">Laptops</a>
                                </li>
                                <li>
                                <a href="#">Audio Devices</a>
                                </li>
                                <li>
                                <a href="#">Smart Home</a>
                                </li>
                                <li>
                                <a href="#">Accessories</a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown">
                            <a href="#">
                                <span>Home &amp; Living</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown" />
                            </a>
                            <ul>
                                <li>
                                <a href="#">Furniture</a>
                                </li>
                                <li>
                                <a href="#">Decor</a>
                                </li>
                                <li>
                                <a href="#">Kitchen</a>
                                </li>
                                <li>
                                <a href="#">Bedding</a>
                                </li>
                                <li>
                                <a href="#">Lighting</a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown">
                            <a href="#">
                                <span>Beauty</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown" />
                            </a>
                            <ul>
                                <li>
                                <a href="#">Skincare</a>
                                </li>
                                <li>
                                <a href="#">Makeup</a>
                                </li>
                                <li>
                                <a href="#">Haircare</a>
                                </li>
                                <li>
                                <a href="#">Fragrances</a>
                                </li>
                                <li>
                                <a href="#">Personal Care</a>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        {/* End Products Mega Menu 1 Mobile View */}
                        {/* Products Mega Menu 1 Desktop View */}
                        <div className="desktop-megamenu">
                            <div className="megamenu-tabs">
                            <ul
                                className="nav nav-tabs"
                                id="productMegaMenuTabs"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="featured-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#featured-content-1862"
                                    type="button"
                                    aria-selected="true"
                                    role="tab"
                                >
                                    Featured
                                </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="new-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#new-content-1862"
                                    type="button"
                                    aria-selected="false"
                                    tabIndex={-1}
                                    role="tab"
                                >
                                    New Arrivals
                                </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="sale-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#sale-content-1862"
                                    type="button"
                                    aria-selected="false"
                                    tabIndex={-1}
                                    role="tab"
                                >
                                    Sale
                                </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="category-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#category-content-1862"
                                    type="button"
                                    aria-selected="false"
                                    tabIndex={-1}
                                    role="tab"
                                >
                                    Categories
                                </button>
                                </li>
                            </ul>
                            </div>
                            {/* Tabs Content */}
                            <div className="megamenu-content tab-content">
                            {/* Featured Tab */}
                            <div
                                className="tab-pane fade show active"
                                id="featured-content-1862"
                                role="tabpanel"
                                aria-labelledby="featured-tab"
                            >
                                <div className="product-grid">
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-1.webp"
                                        alt="Featured Product"
                                        loading="lazy"
                                    />
                                    </div>
                                    <div className="product-info">
                                    <h5>Premium Headphones</h5>
                                    <p className="price">$129.99</p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-2.webp"
                                        alt="Featured Product"
                                        loading="lazy"
                                    />
                                    </div>
                                    <div className="product-info">
                                    <h5>Smart Watch</h5>
                                    <p className="price">$199.99</p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-3.webp"
                                        alt="Featured Product"
                                        loading="lazy"
                                    />
                                    </div>
                                    <div className="product-info">
                                    <h5>Wireless Earbuds</h5>
                                    <p className="price">$89.99</p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-4.webp"
                                        alt="Featured Product"
                                        loading="lazy"
                                    />
                                    </div>
                                    <div className="product-info">
                                    <h5>Bluetooth Speaker</h5>
                                    <p className="price">$79.99</p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* New Arrivals Tab */}
                            <div
                                className="tab-pane fade"
                                id="new-content-1862"
                                role="tabpanel"
                                aria-labelledby="new-tab"
                            >
                                <div className="product-grid">
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-5.webp"
                                        alt="New Arrival"
                                        loading="lazy"
                                    />
                                    <span className="badge-new">New</span>
                                    </div>
                                    <div className="product-info">
                                    <h5>Fitness Tracker</h5>
                                    <p className="price">$69.99</p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-6.webp"
                                        alt="New Arrival"
                                        loading="lazy"
                                    />
                                    <span className="badge-new">New</span>
                                    </div>
                                    <div className="product-info">
                                    <h5>Wireless Charger</h5>
                                    <p className="price">$39.99</p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-7.webp"
                                        alt="New Arrival"
                                        loading="lazy"
                                    />
                                    <span className="badge-new">New</span>
                                    </div>
                                    <div className="product-info">
                                    <h5>Smart Bulb Set</h5>
                                    <p className="price">$49.99</p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-8.webp"
                                        alt="New Arrival"
                                        loading="lazy"
                                    />
                                    <span className="badge-new">New</span>
                                    </div>
                                    <div className="product-info">
                                    <h5>Portable Power Bank</h5>
                                    <p className="price">$59.99</p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* Sale Tab */}
                            <div
                                className="tab-pane fade"
                                id="sale-content-1862"
                                role="tabpanel"
                                aria-labelledby="sale-tab"
                            >
                                <div className="product-grid">
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-9.webp"
                                        alt="Sale Product"
                                        loading="lazy"
                                    />
                                    <span className="badge-sale">-30%</span>
                                    </div>
                                    <div className="product-info">
                                    <h5>Wireless Keyboard</h5>
                                    <p className="price">
                                        <span className="original-price">$89.99</span>{" "}
                                        $62.99
                                    </p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-10.webp"
                                        alt="Sale Product"
                                        loading="lazy"
                                    />
                                    <span className="badge-sale">-25%</span>
                                    </div>
                                    <div className="product-info">
                                    <h5>Gaming Mouse</h5>
                                    <p className="price">
                                        <span className="original-price">$59.99</span>{" "}
                                        $44.99
                                    </p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-11.webp"
                                        alt="Sale Product"
                                        loading="lazy"
                                    />
                                    <span className="badge-sale">-40%</span>
                                    </div>
                                    <div className="product-info">
                                    <h5>Desk Lamp</h5>
                                    <p className="price">
                                        <span className="original-price">$49.99</span>{" "}
                                        $29.99
                                    </p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <div className="product-image">
                                    <img
                                        src="assets/images/product-12.webp"
                                        alt="Sale Product"
                                        loading="lazy"
                                    />
                                    <span className="badge-sale">-20%</span>
                                    </div>
                                    <div className="product-info">
                                    <h5>USB-C Hub</h5>
                                    <p className="price">
                                        <span className="original-price">$39.99</span>{" "}
                                        $31.99
                                    </p>
                                    <a href="#" className="btn-view">
                                        View Product
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* Categories Tab */}
                            <div
                                className="tab-pane fade"
                                id="category-content-1862"
                                role="tabpanel"
                                aria-labelledby="category-tab"
                            >
                                <div className="category-grid">
                                <div className="category-column">
                                    <h4>Clothing</h4>
                                    <ul>
                                    <li>
                                        <a href="#">Men's Wear</a>
                                    </li>
                                    <li>
                                        <a href="#">Women's Wear</a>
                                    </li>
                                    <li>
                                        <a href="#">Kids Collection</a>
                                    </li>
                                    <li>
                                        <a href="#">Sportswear</a>
                                    </li>
                                    <li>
                                        <a href="#">Accessories</a>
                                    </li>
                                    </ul>
                                </div>
                                <div className="category-column">
                                    <h4>Electronics</h4>
                                    <ul>
                                    <li>
                                        <a href="#">Smartphones</a>
                                    </li>
                                    <li>
                                        <a href="#">Laptops</a>
                                    </li>
                                    <li>
                                        <a href="#">Audio Devices</a>
                                    </li>
                                    <li>
                                        <a href="#">Smart Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Accessories</a>
                                    </li>
                                    </ul>
                                </div>
                                <div className="category-column">
                                    <h4>Home &amp; Living</h4>
                                    <ul>
                                    <li>
                                        <a href="#">Furniture</a>
                                    </li>
                                    <li>
                                        <a href="#">Decor</a>
                                    </li>
                                    <li>
                                        <a href="#">Kitchen</a>
                                    </li>
                                    <li>
                                        <a href="#">Bedding</a>
                                    </li>
                                    <li>
                                        <a href="#">Lighting</a>
                                    </li>
                                    </ul>
                                </div>
                                <div className="category-column">
                                    <h4>Beauty</h4>
                                    <ul>
                                    <li>
                                        <a href="#">Skincare</a>
                                    </li>
                                    <li>
                                        <a href="#">Makeup</a>
                                    </li>
                                    <li>
                                        <a href="#">Haircare</a>
                                    </li>
                                    <li>
                                        <a href="#">Fragrances</a>
                                    </li>
                                    <li>
                                        <a href="#">Personal Care</a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End Products Mega Menu 1 Desktop View */}
                        </li>
                        {/* End Products Mega Menu 1 */}
                        {/* Products Mega Menu 2 */}
                        <li className="products-megamenu-2">
                        <a href="#">
                            <span>Megamenu 2</span>{" "}
                            <i className="bi bi-chevron-down toggle-dropdown" />
                        </a>
                        {/* Products Mega Menu 2 Mobile View */}
                        <ul className="mobile-megamenu">
                            <li>
                            <a href="#">Women</a>
                            </li>
                            <li>
                            <a href="#">Men</a>
                            </li>
                            <li>
                            <a href="#">Kids'</a>
                            </li>
                            <li className="dropdown">
                            <a href="#">
                                <span>Clothing</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown" />
                            </a>
                            <ul>
                                <li>
                                <a href="#">Shirts &amp; Tops</a>
                                </li>
                                <li>
                                <a href="#">Coats &amp; Outerwear</a>
                                </li>
                                <li>
                                <a href="#">Underwear</a>
                                </li>
                                <li>
                                <a href="#">Sweatshirts</a>
                                </li>
                                <li>
                                <a href="#">Dresses</a>
                                </li>
                                <li>
                                <a href="#">Swimwear</a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown">
                            <a href="#">
                                <span>Shoes</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown" />
                            </a>
                            <ul>
                                <li>
                                <a href="#">Boots</a>
                                </li>
                                <li>
                                <a href="#">Sandals</a>
                                </li>
                                <li>
                                <a href="#">Heels</a>
                                </li>
                                <li>
                                <a href="#">Loafers</a>
                                </li>
                                <li>
                                <a href="#">Slippers</a>
                                </li>
                                <li>
                                <a href="#">Oxfords</a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown">
                            <a href="#">
                                <span>Accessories</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown" />
                            </a>
                            <ul>
                                <li>
                                <a href="#">Handbags</a>
                                </li>
                                <li>
                                <a href="#">Eyewear</a>
                                </li>
                                <li>
                                <a href="#">Hats</a>
                                </li>
                                <li>
                                <a href="#">Watches</a>
                                </li>
                                <li>
                                <a href="#">Jewelry</a>
                                </li>
                                <li>
                                <a href="#">Belts</a>
                                </li>
                            </ul>
                            </li>
                            <li className="dropdown">
                            <a href="#">
                                <span>Specialty Sizes</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown" />
                            </a>
                            <ul>
                                <li>
                                <a href="#">Plus Size</a>
                                </li>
                                <li>
                                <a href="#">Petite</a>
                                </li>
                                <li>
                                <a href="#">Wide Shoes</a>
                                </li>
                                <li>
                                <a href="#">Narrow Shoes</a>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        {/* End Products Mega Menu 2 Mobile View */}
                        {/* Products Mega Menu 2 Desktop View */}
                        <div className="desktop-megamenu">
                            <div className="megamenu-tabs">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="womens-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#womens-content-1883"
                                    type="button"
                                    aria-selected="true"
                                    role="tab"
                                >
                                    WOMEN
                                </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="mens-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#mens-content-1883"
                                    type="button"
                                    aria-selected="false"
                                    tabIndex={-1}
                                    role="tab"
                                >
                                    MEN
                                </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="kids-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#kids-content-1883"
                                    type="button"
                                    aria-selected="false"
                                    tabIndex={-1}
                                    role="tab"
                                >
                                    KIDS
                                </button>
                                </li>
                            </ul>
                            </div>
                            {/* Tabs Content */}
                            <div className="megamenu-content tab-content">
                            {/* Women Tab */}
                            <div
                                className="tab-pane fade show active"
                                id="womens-content-1883"
                                role="tabpanel"
                                aria-labelledby="womens-tab"
                            >
                                <div className="category-layout">
                                <div className="categories-section">
                                    <div className="category-headers">
                                    <h4>Clothing</h4>
                                    <h4>Shoes</h4>
                                    <h4>Accessories</h4>
                                    <h4>Specialty Sizes</h4>
                                    </div>
                                    <div className="category-links">
                                    <div className="link-row">
                                        <a href="#">Shirts &amp; Tops</a>
                                        <a href="#">Boots</a>
                                        <a href="#">Handbags</a>
                                        <a href="#">Plus Size</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Coats &amp; Outerwear</a>
                                        <a href="#">Sandals</a>
                                        <a href="#">Eyewear</a>
                                        <a href="#">Petite</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Underwear</a>
                                        <a href="#">Heels</a>
                                        <a href="#">Hats</a>
                                        <a href="#">Wide Shoes</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Sweatshirts</a>
                                        <a href="#">Loafers</a>
                                        <a href="#">Watches</a>
                                        <a href="#">Narrow Shoes</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Dresses</a>
                                        <a href="#">Slippers</a>
                                        <a href="#">Jewelry</a>
                                        <a href="#" />
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Swimwear</a>
                                        <a href="#">Oxfords</a>
                                        <a href="#">Belts</a>
                                        <a href="#" />
                                    </div>
                                    <div className="link-row">
                                        <a href="#">View all</a>
                                        <a href="#">View all</a>
                                        <a href="#">View all</a>
                                        <a href="#" />
                                    </div>
                                    </div>
                                </div>
                                <div className="featured-section">
                                    <div className="featured-image">
                                    <img
                                        src="assets/images/product-f-1.webp"
                                        alt="Women's Heels Collection"
                                    />
                                    <div className="featured-content">
                                        <h3>
                                        Women's
                                        <br />
                                        Bags
                                        <br />
                                        Collection
                                        </h3>
                                        <a href="#" className="btn-shop">
                                        Shop now
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* Men Tab */}
                            <div
                                className="tab-pane fade"
                                id="mens-content-1883"
                                role="tabpanel"
                                aria-labelledby="mens-tab"
                            >
                                <div className="category-layout">
                                <div className="categories-section">
                                    <div className="category-headers">
                                    <h4>Clothing</h4>
                                    <h4>Shoes</h4>
                                    <h4>Accessories</h4>
                                    <h4>Specialty Sizes</h4>
                                    </div>
                                    <div className="category-links">
                                    <div className="link-row">
                                        <a href="#">Shirts &amp; Polos</a>
                                        <a href="#">Sneakers</a>
                                        <a href="#">Watches</a>
                                        <a href="#">Big &amp; Tall</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Jackets &amp; Coats</a>
                                        <a href="#">Boots</a>
                                        <a href="#">Belts</a>
                                        <a href="#">Slim Fit</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Underwear</a>
                                        <a href="#">Loafers</a>
                                        <a href="#">Ties</a>
                                        <a href="#">Wide Shoes</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Hoodies</a>
                                        <a href="#">Dress Shoes</a>
                                        <a href="#">Wallets</a>
                                        <a href="#">Extended Sizes</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Suits</a>
                                        <a href="#">Sandals</a>
                                        <a href="#">Sunglasses</a>
                                        <a href="#" />
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Activewear</a>
                                        <a href="#">Slippers</a>
                                        <a href="#">Hats</a>
                                        <a href="#" />
                                    </div>
                                    <div className="link-row">
                                        <a href="#">View all</a>
                                        <a href="#">View all</a>
                                        <a href="#">View all</a>
                                        <a href="#" />
                                    </div>
                                    </div>
                                </div>
                                <div className="featured-section">
                                    <div className="featured-image">
                                    <img
                                        src="assets/images/product-m-4.webp"
                                        alt="Men's Footwear Collection"
                                    />
                                    <div className="featured-content">
                                        <h3>
                                        Men's
                                        <br />
                                        Footwear
                                        <br />
                                        Collection
                                        </h3>
                                        <a href="#" className="btn-shop">
                                        Shop now
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* Kids Tab */}
                            <div
                                className="tab-pane fade"
                                id="kids-content-1883"
                                role="tabpanel"
                                aria-labelledby="kids-tab"
                            >
                                <div className="category-layout">
                                <div className="categories-section">
                                    <div className="category-headers">
                                    <h4>Clothing</h4>
                                    <h4>Shoes</h4>
                                    <h4>Accessories</h4>
                                    <h4>By Age</h4>
                                    </div>
                                    <div className="category-links">
                                    <div className="link-row">
                                        <a href="#">T-shirts &amp; Tops</a>
                                        <a href="#">Sneakers</a>
                                        <a href="#">Backpacks</a>
                                        <a href="#">Babies (0-24 months)</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Outerwear</a>
                                        <a href="#">Boots</a>
                                        <a href="#">Hats &amp; Caps</a>
                                        <a href="#">Toddlers (2-4 years)</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Pajamas</a>
                                        <a href="#">Sandals</a>
                                        <a href="#">Socks</a>
                                        <a href="#">Kids (4-7 years)</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Sweatshirts</a>
                                        <a href="#">Slippers</a>
                                        <a href="#">Gloves</a>
                                        <a href="#">Older Kids (8-14 years)</a>
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Dresses</a>
                                        <a href="#">School Shoes</a>
                                        <a href="#">Scarves</a>
                                        <a href="#" />
                                    </div>
                                    <div className="link-row">
                                        <a href="#">Swimwear</a>
                                        <a href="#">Sports Shoes</a>
                                        <a href="#">Hair Accessories</a>
                                        <a href="#" />
                                    </div>
                                    <div className="link-row">
                                        <a href="#">View all</a>
                                        <a href="#">View all</a>
                                        <a href="#">View all</a>
                                        <a href="#" />
                                    </div>
                                    </div>
                                </div>
                                <div className="featured-section">
                                    <div className="featured-image">
                                    <img
                                        src="assets/images/product-9.webp"
                                        alt="Kids' New Arrivals"
                                    />
                                    <div className="featured-content">
                                        <h3>
                                        Kids
                                        <br />
                                        New
                                        <br />
                                        Arrivals
                                        </h3>
                                        <a href="#" className="btn-shop">
                                        Shop now
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End Products Mega Menu 2 Desktop View */}
                        </li>
                        {/* End Products Mega Menu 2 */}
                        <li>
                        <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
                {/* Announcement Bar */}
                <div className="announcement-bar py-2">
                <div className="container-fluid container-xl">
                    <div className="announcement-slider swiper init-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                        🚚 Free shipping on orders over $50
                        </div>
                        <div className="swiper-slide">💰 30 days money back guarantee</div>
                        <div className="swiper-slide">
                        🎁 20% off on your first order - Use code: FIRST20
                        </div>
                        <div className="swiper-slide">
                        ⚡ Flash Sale! Up to 70% off on selected items
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* Mobile Search Form */}
                <div className="collapse" id="mobileSearch">
                <div className="container">
                    <form className="search-form">
                    <div className="input-group">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Search for products..."
                        />
                        <button className="btn search-btn" type="submit">
                        <i className="bi bi-search" />
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </header>
            <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                <div className="container">
                    <nav className="breadcrumbs">
                    <ol>
                        <li>
                        <a href="index.html">Home</a>
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
                        <div className="container" data-aos="fade-up">
                        <div
                            className="filter-container p-3 bg-white rounded shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay={100}
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
                        <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                            <div className="product-box border rounded shadow-sm h-100 bg-white">
                                <div className="product-thumb position-relative overflow-hidden p-3 text-center">
                                <span className="badge bg-success position-absolute top-0 start-0 m-3">
                                    Sẵn kho
                                </span>
                                <a href="product_detail.html">
                                    <img
                                    src="assets/images/product-1.webp"
                                    alt="Bosch GSB 550"
                                    className="img-fluid"
                                    style={{ height: 200, objectFit: "contain" }}
                                    />
                                </a>
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
                                    <a
                                    href="product_detail.html"
                                    className="text-decoration-none fw-bold"
                                    style={{ color: "#353535" }}
                                    >
                                    Máy Khoan Động Lực Bosch GSB 550 (Vali Nhựa)
                                    </a>
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
                            <div className="col-lg-4 col-md-6">
                            <div className="product-box border rounded shadow-sm h-100 bg-white">
                                <div className="product-thumb position-relative overflow-hidden p-3 text-center">
                                <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-3">
                                    Đặt trước 2 ngày
                                </span>
                                <a href="product_detail.html">
                                    <img
                                    src="assets/images/product-2.webp"
                                    alt="Makita 9553NB"
                                    className="img-fluid"
                                    style={{ height: 200, objectFit: "contain" }}
                                    />
                                </a>
                                </div>
                                <div className="product-content p-3 pt-0">
                                <div className="mb-2">
                                    <span className="badge bg-light text-secondary border">
                                    <i className="bi bi-building me-1" />
                                    Cty An Phát (Mỹ Phước)
                                    </span>
                                </div>
                                <h5 className="product-title mb-2">
                                    <a
                                    href="product_detail.html"
                                    className="text-decoration-none fw-bold"
                                    style={{ color: "#353535" }}
                                    >
                                    Máy Mài Góc Makita 9553NB (100mm)
                                    </a>
                                </h5>
                                <ul className="list-unstyled small text-muted mb-3">
                                    <li>
                                    <i className="bi bi-dot" /> Công suất: 710W
                                    </li>
                                    <li>
                                    <i className="bi bi-dot" /> Đường kính đá: 100mm
                                    </li>
                                    <li>
                                    <i className="bi bi-dot" /> Trọng lượng: 1.8kg
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-between align-items-end border-top pt-3">
                                    <div>
                                    <small className="text-muted d-block">
                                        Giá tham khảo:
                                    </small>
                                    <span className="fw-bold text-dark fs-5">~950k</span>
                                    </div>
                                    <button className="btn btn-primary btn-sm rounded-pill px-3">
                                    <i className="bi bi-file-earmark-plus me-1" /> Báo giá
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <div className="product-box border rounded shadow-sm h-100 bg-white">
                                <div className="product-thumb position-relative overflow-hidden p-3 text-center">
                                <span className="badge bg-success position-absolute top-0 start-0 m-3">
                                    Sẵn kho
                                </span>
                                <a href="product_detail.html">
                                    <img
                                    src="assets/images/product-3.webp"
                                    alt="Safety Shoes"
                                    className="img-fluid"
                                    style={{ height: 200, objectFit: "contain" }}
                                    />
                                </a>
                                </div>
                                <div className="product-content p-3 pt-0">
                                <div className="mb-2">
                                    <span className="badge bg-light text-secondary border">
                                    <i className="bi bi-building me-1" />
                                    Bảo Hộ 3M (Sóng Thần)
                                    </span>
                                </div>
                                <h5 className="product-title mb-2">
                                    <a
                                    href="product_detail.html"
                                    className="text-decoration-none fw-bold"
                                    style={{ color: "#353535" }}
                                    >
                                    Giày Bảo Hộ Jogger Bestrun S3 (Thấp cổ)
                                    </a>
                                </h5>
                                <ul className="list-unstyled small text-muted mb-3">
                                    <li>
                                    <i className="bi bi-dot" /> Tiêu chuẩn: S3 SRC
                                    </li>
                                    <li>
                                    <i className="bi bi-dot" /> Mũi thép, đế lót thép
                                    </li>
                                    <li>
                                    <i className="bi bi-dot" /> Size: 38 - 44
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
                                    <button className="btn btn-primary btn-sm rounded-pill px-3">
                                    <i className="bi bi-file-earmark-plus me-1" /> Báo giá
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
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
            <footer id="footer" className="footer light-background">
                <div className="footer-main">
                <div className="container">
                    <div className="row gy-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget footer-about">
                        <a href="index.html" className="logo">
                            <span className="sitename">FashionStore</span>
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            in nibh vehicula, facilisis magna ut, consectetur lorem. Proin
                            eget tortor risus.
                        </p>
                        <div className="social-links mt-4">
                            <h5>Connect With Us</h5>
                            <div className="social-icons">
                            <a href="#" aria-label="Facebook">
                                <i className="bi bi-facebook" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <i className="bi bi-instagram" />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <i className="bi bi-twitter-x" />
                            </a>
                            <a href="#" aria-label="TikTok">
                                <i className="bi bi-tiktok" />
                            </a>
                            <a href="#" aria-label="Pinterest">
                                <i className="bi bi-pinterest" />
                            </a>
                            <a href="#" aria-label="YouTube">
                                <i className="bi bi-youtube" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="footer-widget">
                        <h4>Shop</h4>
                        <ul className="footer-links">
                            <li>
                            <a href="category.html">New Arrivals</a>
                            </li>
                            <li>
                            <a href="category.html">Bestsellers</a>
                            </li>
                            <li>
                            <a href="category.html">Women's Clothing</a>
                            </li>
                            <li>
                            <a href="category.html">Men's Clothing</a>
                            </li>
                            <li>
                            <a href="category.html">Accessories</a>
                            </li>
                            <li>
                            <a href="category.html">Sale</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="footer-widget">
                        <h4>Support</h4>
                        <ul className="footer-links">
                            <li>
                            <a href="support.html">Help Center</a>
                            </li>
                            <li>
                            <a href="account.html">Order Status</a>
                            </li>
                            <li>
                            <a href="shipping-info.html">Shipping Info</a>
                            </li>
                            <li>
                            <a href="return-policy.html">Returns &amp; Exchanges</a>
                            </li>
                            <li>
                            <a href="#">Size Guide</a>
                            </li>
                            <li>
                            <a href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget">
                        <h4>Contact Information</h4>
                        <div className="footer-contact">
                            <div className="contact-item">
                            <i className="bi bi-geo-alt" />
                            <span>123 Fashion Street, New York, NY 10001</span>
                            </div>
                            <div className="contact-item">
                            <i className="bi bi-telephone" />
                            <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="contact-item">
                            <i className="bi bi-envelope" />
                            <span>
                                <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="78101d141417381d00191508141d561b1715"
                                >
                                [email&nbsp;protected]
                                </a>
                            </span>
                            </div>
                            <div className="contact-item">
                            <i className="bi bi-clock" />
                            <span>
                                Monday-Friday: 9am-6pm
                                <br />
                                Saturday: 10am-4pm
                                <br />
                                Sunday: Closed
                            </span>
                            </div>
                        </div>
                        <div className="app-buttons mt-4">
                            <a href="#" className="app-btn">
                            <i className="bi bi-apple" />
                            <span>App Store</span>
                            </a>
                            <a href="#" className="app-btn">
                            <i className="bi bi-google-play" />
                            <span>Google Play</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer-bottom">
                <div className="container">
                    <div className="row gy-3 align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="copyright">
                        <p>
                            © <span>Copyright</span>{" "}
                            <strong className="sitename">MyWebsite</strong>. All Rights
                            Reserved.
                        </p>
                        </div>
                        <div className="credits mt-1">
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you've purchased the pro version. */}
                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="d-flex flex-wrap justify-content-lg-end justify-content-center align-items-center gap-4">
                        <div className="payment-methods">
                            <div className="payment-icons">
                            <i className="bi bi-credit-card" aria-label="Credit Card" />
                            <i className="bi bi-paypal" aria-label="PayPal" />
                            <i className="bi bi-apple" aria-label="Apple Pay" />
                            <i className="bi bi-google" aria-label="Google Pay" />
                            <i className="bi bi-shop" aria-label="Shop Pay" />
                            <i className="bi bi-cash" aria-label="Cash on Delivery" />
                            </div>
                        </div>
                        <div className="legal-links">
                            <a href="tos.html">Terms</a>
                            <a href="privacy.html">Privacy</a>
                            <a href="tos.html">Cookies</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
        </>

    )
}
export default Category