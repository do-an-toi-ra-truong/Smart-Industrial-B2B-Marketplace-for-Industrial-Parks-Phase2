import { Link } from 'react-router-dom'
const UserFooter = () => {
    return (
        <>
            <footer id="footer" className="footer light-background">
                <div className="footer-main">
                    <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6">
                        <div className="footer-widget footer-about">
                            <Link to="/" className="logo">
                            <span className="sitename">
                                SIBMIP
                            </span>
                            </Link>
                            <p>
                            B2B industrial marketplace connecting buyers with verified suppliers of machinery, raw materials,
                                chemicals, and more. Powering Vietnam's manufacturing and supply chain ecosystem.
                            </p>
                            <div className="social-links mt-4">
                            <h5>
                                Connect With Us
                            </h5>
                            <div className="social-icons">
                                <a href="#" aria-label="Facebook">
                                <i className="bi bi-facebook" />
                                </a>
                                <a href="#" aria-label="Instagram">
                                <i className="bi bi-instagram" />
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                <i className="bi bi-linkedin" />
                                </a>
                                <a href="#" aria-label="YouTube">
                                <i className="bi bi-youtube" />
                                </a>
                                <a href="#" aria-label="Twitter">
                                <i className="bi bi-twitter-x" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="footer-widget">
                            <h4>
                            Categories
                            </h4>
                            <ul className="footer-links">
                            <li>
                                <Link to="/category">
                                Electronics & Components
                                </Link>
                            </li>
                            <li>
                                <Link to="/category">
                                Machinery & Equipment
                                </Link>
                            </li>
                            <li>
                                <Link to="/category">
                                Raw Materials
                                </Link>
                            </li>
                            <li>
                                <Link to="/category">
                                Chemicals
                                </Link>
                            </li>
                            <li>
                                <Link to="/category">
                                Packaging & Logistics
                                </Link>
                            </li>
                            <li>
                                <Link to="/category">
                                Food & Agriculture
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="footer-widget">
                            <h4>
                            Support
                            </h4>
                            <ul className="footer-links">
                            <li>
                                <Link to="/support">
                                Help Center
                                </Link>
                            </li>
                            <li>
                                <Link to="/track-order">
                                Track Order
                                </Link>
                            </li>
                            <li>
                                <Link to="/rfq">
                                Request for Quotation
                                </Link>
                            </li>
                            <li>
                                <Link to="/return-policy">
                                Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                About SIBMIP
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                Contact Us
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="footer-widget">
                            <h4>
                            Contact Information
                            </h4>
                            <div className="footer-contact">
                            <div className="contact-item">
                                <i className="bi bi-geo-alt" />
                                <span>
                                Eastern International University, Binh Duong, Vietnam
                                </span>
                            </div>
                            <div className="contact-item">
                                <i className="bi bi-telephone" />
                                <span>
                                <a href="tel:+84384235007">
                                    0384235007
                                </a>
                                </span>
                            </div>
                            <div className="contact-item">
                                <i className="bi bi-envelope" />
                                <span>
                                <a href="mailto:huy.vuquang.cit22@eiu.edu.vn">
                                    huy.vuquang.cit22@eiu.edu.vn
                                </a>
                                </span>
                            </div>
                            <div className="contact-item">
                                <i className="bi bi-clock" />
                                <span>
                                Monday–Friday: 8am–5pm
                                <br />
                                Saturday: 8am–12pm
                                <br />
                                Sunday: Closed
                                </span>
                            </div>
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
                            ©
                            <span>
                                Copyright
                            </span>
                            <strong className="sitename">
                                SIBMIP
                            </strong>
                            . All Rights Reserved.
                            </p>
                        </div>
                        <div className="credits mt-1">
                            Designed by HDP
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
                                <i className="bi bi-bank" aria-label="Bank Transfer" />
                                <i className="bi bi-cash" aria-label="Cash on Delivery" />
                            </div>
                            </div>
                            <div className="legal-links">
                            <Link to="/terms">
                                Terms
                            </Link>
                            <Link to="/privacy">
                                Privacy
                            </Link>
                            <Link to="/terms">
                                Cookies
                            </Link>
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
export default UserFooter