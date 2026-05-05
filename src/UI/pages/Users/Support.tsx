import { NavLink } from 'react-router-dom'
const Support = () => {
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
                            Support
                        </li>
                        </ol>
                    </nav>
                    <h1>
                        Support
                    </h1>
                    </div>
                </div>
                {/* End Page Title */}
                {/* Support Section */}
                <section id="support" className="support section">
                    <div className="container">
                    <div className="row gy-5 gx-lg-5">
                        <div className="col-lg-8">
                        {/* Help Categories */}
                        <div className="help-categories">
                            <div className="section-heading">
                            <h3>
                                How Can We Help You?
                            </h3>
                            <p>
                                Browse through our help topics or search for specific assistance
                            </p>
                            </div>
                            <div className="category-grid">
                            <a href="#" className="category-card">
                                <div className="icon">
                                <i className="bi bi-box-seam" />
                                </div>
                                <h4>
                                Orders & Shipping
                                </h4>
                                <p>
                                Track orders, shipping info, returns
                                </p>
                            </a>
                            <a href="#" className="category-card">
                                <div className="icon">
                                <i className="bi bi-credit-card" />
                                </div>
                                <h4>
                                Payment & Billing
                                </h4>
                                <p>
                                Payment methods, invoices, refunds
                                </p>
                            </a>
                            <a href="#" className="category-card">
                                <div className="icon">
                                <i className="bi bi-person-circle" />
                                </div>
                                <h4>
                                Account Help
                                </h4>
                                <p>
                                Login issues, profile settings
                                </p>
                            </a>
                            <a href="#" className="category-card">
                                <div className="icon">
                                <i className="bi bi-gift" />
                                </div>
                                <h4>
                                Products & Services
                                </h4>
                                <p>
                                Product info, specifications, guides
                                </p>
                            </a>
                            </div>
                        </div>
                        {/* Common Help Topics */}
                        <div className="help-topics">
                            <div className="section-heading">
                            <h3>
                                Popular Help Topics
                            </h3>
                            <p>
                                Quick solutions to common questions
                            </p>
                            </div>
                            <div className="topics-grid">
                            <div className="topic-item">
                                <i className="bi bi-clock-history" />
                                <h5>
                                Track Your Order
                                </h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio.
                                </p>
                                <a href="#" className="learn-more">
                                Learn More
                                <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                            <div className="topic-item">
                                <i className="bi bi-arrow-repeat" />
                                <h5>
                                Return Policy
                                </h5>
                                <p>
                                Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem.
                                </p>
                                <a href="#" className="learn-more">
                                Learn More
                                <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                            <div className="topic-item">
                                <i className="bi bi-shield-check" />
                                <h5>
                                Account Security
                                </h5>
                                <p>
                                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                </p>
                                <a href="#" className="learn-more">
                                Learn More
                                <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                            <div className="topic-item">
                                <i className="bi bi-wallet2" />
                                <h5>
                                Payment Methods
                                </h5>
                                <p>
                                Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                                </p>
                                <a href="#" className="learn-more">
                                Learn More
                                <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                            </div>
                        </div>
                        {/* FAQ Section */}
                        <div className="faq-section">
                            <div className="section-heading">
                            <h3>
                                Frequently Asked Questions
                            </h3>
                            <p>
                                Quick answers to questions you may have
                            </p>
                            </div>
                            <div className="faq-list">
                            <div className="faq-item">
                                <h3>
                                How do I track my order?
                                <i className="bi bi-chevron-down faq-toggle" />
                                </h3>
                                <div className="faq-answer">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can track your order by clicking the
                                    tracking link in your shipping confirmation email, or by logging into your account.
                                </p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h3>
                                What payment methods do you accept?
                                <i className="bi bi-chevron-down faq-toggle" />
                                </h3>
                                <div className="faq-answer">
                                <p>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. We accept major credit cards,
                                    PayPal, and various other payment methods.
                                </p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <h3>
                                How can I change my password?
                                <i className="bi bi-chevron-down faq-toggle" />
                                </h3>
                                <div className="faq-answer">
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. You can reset your password through the account settings page.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="support-sidebar">
                            {/* Contact Support */}
                            <div className="contact-support">
                            <div className="icon-box">
                                <i className="bi bi-headset" />
                            </div>
                            <h4>
                                Need More Help?
                            </h4>
                            <p>
                                Our support team is available 24/7
                            </p>
                            <div className="support-actions">
                                <a href="#" className="btn-chat">
                                <i className="bi bi-chat-dots" />
                                Live Chat
                                </a>
                                <a href="#" className="btn-email">
                                <i className="bi bi-envelope" />
                                Send Email
                                </a>
                                <div className="divider">
                                or call us
                                </div>
                                <a href="tel:1234567890" className="phone-number">
                                <i className="bi bi-telephone" />
                                +1 (555) 123-4567
                                </a>
                            </div>
                            </div>
                            {/* Support Resources */}
                            <div className="support-resources">
                            <h5>
                                Support Resources
                            </h5>
                            <ul>
                                <li>
                                <i className="bi bi-file-text" />
                                <a href="#">
                                    User Guides
                                </a>
                                </li>
                                <li>
                                <i className="bi bi-play-circle" />
                                <a href="#">
                                    Video Tutorials
                                </a>
                                </li>
                                <li>
                                <i className="bi bi-book" />
                                <a href="#">
                                    Documentation
                                </a>
                                </li>
                                <li>
                                <i className="bi bi-download" />
                                <a href="#">
                                    Downloads
                                </a>
                                </li>
                            </ul>
                            </div>
                            {/* Business Hours */}
                            <div className="business-hours">
                            <h5>
                                Business Hours
                            </h5>
                            <ul>
                                <li>
                                <span>
                                    Monday - Friday:
                                </span>
                                <span>
                                    9:00 AM - 8:00 PM
                                </span>
                                </li>
                                <li>
                                <span>
                                    Saturday:
                                </span>
                                <span>
                                    10:00 AM - 6:00 PM
                                </span>
                                </li>
                                <li>
                                <span>
                                    Sunday:
                                </span>
                                <span>
                                    Closed
                                </span>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* /Support Section */}
                </main>
        </>
    )
}
export default Support