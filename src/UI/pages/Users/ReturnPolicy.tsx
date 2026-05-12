import { NavLink } from 'react-router-dom'
const ReturnPolicy = () => {
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
                            Return Policy
                        </li>
                        </ol>
                    </nav>
                    <h1>
                        Return Policy
                    </h1>
                    </div>
                </div>
                {/* End Page Title */}
                {/* Retun Policy Section */}
                <section id="retun-policy" className="retun-policy section">
                    <div className="container">
                    {/* Hero Section */}
                    <div className="return-hero">
                        <div className="hero-content">
                        <h2>
                            Returns Made Simple
                        </h2>
                        <p>
                            Not satisfied with your purchase? Our hassle-free return process ensures a smooth experience.
                        </p>
                        </div>
                        <div className="return-period-box">
                        <div className="box-content">
                            <span className="days">
                            30
                            </span>
                            <span className="text">
                            Day Returns
                            </span>
                        </div>
                        </div>
                    </div>
                    {/* Return Policy Overview */}
                    <div className="policy-overview">
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="feature-card">
                            <div className="card-content">
                                <i className="bi bi-shield-check" />
                                <h4>
                                Free Returns
                                </h4>
                                <p>
                                We cover return shipping costs for all eligible items
                                </p>
                                <a href="#" className="learn-more">
                                Learn More
                                <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature-card">
                            <div className="card-content">
                                <i className="bi bi-clock-history" />
                                <h4>
                                Quick Refunds
                                </h4>
                                <p>
                                Get your money back within 5-7 business days
                                </p>
                                <a href="#" className="learn-more">
                                Learn More
                                <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature-card">
                            <div className="card-content">
                                <i className="bi bi-arrow-repeat" />
                                <h4>
                                Easy Exchange
                                </h4>
                                <p>
                                Simple process to exchange items for different sizes
                                </p>
                                <a href="#" className="learn-more">
                                Learn More
                                <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Return Requirements */}
                    <div className="return-requirements">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="requirements-content">
                            <h3>
                                Return Requirements
                            </h3>
                            <p className="subtitle">
                                To be eligible for a return, your item must be:
                            </p>
                            <ul className="checks-list">
                                <li>
                                <i className="bi bi-check-lg" />
                                <div className="requirement-text">
                                    <h5>
                                    Unworn & Unwashed
                                    </h5>
                                    <p>
                                    Items must be in original condition
                                    </p>
                                </div>
                                </li>
                                <li>
                                <i className="bi bi-check-lg" />
                                <div className="requirement-text">
                                    <h5>
                                    Original Packaging
                                    </h5>
                                    <p>
                                    Include all tags and packaging
                                    </p>
                                </div>
                                </li>
                                <li>
                                <i className="bi bi-check-lg" />
                                <div className="requirement-text">
                                    <h5>
                                    Within 30 Days
                                    </h5>
                                    <p>
                                    From the delivery date
                                    </p>
                                </div>
                                </li>
                                <li>
                                <i className="bi bi-check-lg" />
                                <div className="requirement-text">
                                    <h5>
                                    Proof of Purchase
                                    </h5>
                                    <p>
                                    Order number or receipt
                                    </p>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="exceptions-box">
                            <div className="box-header">
                                <i className="bi bi-exclamation-circle" />
                                <h4>
                                Return Exceptions
                                </h4>
                            </div>
                            <div className="exceptions-grid">
                                <div className="exception-item">
                                <i className="bi bi-gift" />
                                <span>
                                    Gift Cards
                                </span>
                                </div>
                                <div className="exception-item">
                                <i className="bi bi-bag" />
                                <span>
                                    Intimate Items
                                </span>
                                </div>
                                <div className="exception-item">
                                <i className="bi bi-box-seam" />
                                <span>
                                    Custom Products
                                </span>
                                </div>
                                <div className="exception-item">
                                <i className="bi bi-tag" />
                                <span>
                                    Sale Items
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Return Process Steps */}
                    <div className="return-steps">
                        <h3>
                        How to Return
                        </h3>
                        <div className="steps-timeline">
                        <div className="step-item active">
                            <div className="step-number">
                            1
                            </div>
                            <div className="step-content">
                            <h5>
                                Start Return
                            </h5>
                            <p>
                                Sign in to your account and select items to return
                            </p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-number">
                            2
                            </div>
                            <div className="step-content">
                            <h5>
                                Package Items
                            </h5>
                            <p>
                                Pack items securely in original or similar packaging
                            </p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-number">
                            3
                            </div>
                            <div className="step-content">
                            <h5>
                                Ship Return
                            </h5>
                            <p>
                                Use our prepaid label to ship your return
                            </p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-number">
                            4
                            </div>
                            <div className="step-content">
                            <h5>
                                Get Refund
                            </h5>
                            <p>
                                Refund issued to original payment method
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* FAQs */}
                    <div className="return-faqs">
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="faq-header">
                            <h3>
                                Common Questions
                            </h3>
                            <p>
                                Find answers to frequently asked questions about our return policy
                            </p>
                            <a href="#" className="contact-support">
                                <i className="bi bi-headset" />
                                Need more help?
                            </a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="faq-list">
                            <div className="faq-item">
                                <h3>
                                Can I return part of my order?
                                <i className="bi bi-plus-lg faq-toggle" />
                                </h3>
                                <div className="faq-answer">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Yes, you can return individual items
                                    from your order. Each item will be evaluated separately for refund eligibility.
                                </p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h3>
                                How long does the refund process take?
                                <i className="bi bi-plus-lg faq-toggle" />
                                </h3>
                                <div className="faq-answer">
                                <p>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Refunds are typically
                                    processed within 2-3 business days of receiving your return. The funds may take an additional 3-5
                                    business days to appear in your account.
                                </p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h3>
                                Can I exchange for a different size?
                                <i className="bi bi-plus-lg faq-toggle" />
                                </h3>
                                <div className="faq-answer">
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Yes, you can request an exchange for a different size or color if the item is in stock.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Bottom CTA */}
                    <div className="return-cta">
                        <div className="cta-content">
                        <h4>
                            Ready to Start Your Return?
                        </h4>
                        <p>
                            Sign in to your account to initiate the return process
                        </p>
                        <div className="cta-buttons">
                            <a href="#" className="btn-primary">
                            Start Return
                            </a>
                            <a href="#" className="btn-secondary">
                            Track Return
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* /Retun Policy Section */}
                </main>
        </>
    )
}
export default ReturnPolicy