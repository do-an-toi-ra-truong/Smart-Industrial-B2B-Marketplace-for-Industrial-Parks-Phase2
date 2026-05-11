import { Link } from 'react-router-dom'
const ForgotPassword = () => {
    return (
        <>
            <main className="main">
                {/* Page Title */}
                <div className="page-title light-background position-relative">
                    <div className="container">
                    <nav className="breadcrumbs">
                        <ol>
                        <li>
                            <Link to="/">
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                            Login
                            </Link>
                        </li>
                        <li className="current">
                            Forgot Password
                        </li>
                        </ol>
                    </nav>
                    <h1>
                        Forgot Password
                    </h1>
                    </div>
                </div>
                {/* End Page Title */}
                {/* Forgot Password Section */}
                <section id="forgot-password" className="login section">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8">
                        <div className="login-form-wrapper">
                            <div className="login-header text-center">
                            <div className="forgot-pw-icon">
                                <i className="bi bi-shield-lock" />
                            </div>
                            <h2>
                                Reset Your Password
                            </h2>
                            <p>
                                Enter the email address associated with your account and we'll send you a link to reset your password.
                            </p>
                            </div>
                            <form onSubmit={(e) => { e.preventDefault(); }}>
                            <div className="mb-4">
                                <label htmlFor="reset-email" className="form-label">
                                Email Address
                                </label>
                                <input type="email" className="form-control" id="reset-email" placeholder="Enter your registered email" required={true} autoComplete="email" />
                            </div>
                            {/* Success message (hidden by default) */}
                            <div id="forgot-pw-success" className="forgot-pw-success-msg" style={{ 'display': 'none' }}>
                                <div className="forgot-pw-success-icon">
                                    <i className="bi bi-check-circle-fill" />
                                </div>
                                <div>
                                    <strong>Reset link sent!</strong>
                                    <p>We've sent a password reset link to your email. Please check your inbox and spam folder.</p>
                                </div>
                            </div>
                            <div className="d-grid gap-2 mb-4">
                                <button type="submit" className="btn btn-primary" id="forgot-pw-submit">
                                <i className="bi bi-envelope me-2" />
                                Send Reset Link
                                </button>
                            </div>
                            <div className="forgot-pw-footer text-center">
                                <div className="back-to-login">
                                    <Link to="/login">
                                        <i className="bi bi-arrow-left me-1" />
                                        Back to Login
                                    </Link>
                                </div>
                                <div className="forgot-pw-help">
                                    <span>
                                        Still need help?
                                    </span>
                                    <Link to="/support">
                                        Contact Support
                                    </Link>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* /Forgot Password Section */}
            </main>
        </>
    )
}
export default ForgotPassword
