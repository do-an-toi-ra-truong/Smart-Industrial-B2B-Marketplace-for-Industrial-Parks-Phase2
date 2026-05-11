import { Link } from 'react-router-dom'
const Login = () => {
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
                        <li className="current">
                            Login
                        </li>
                        </ol>
                    </nav>
                    <h1>
                        Login
                    </h1>
                    </div>
                </div>
                {/* End Page Title */}
                {/* Login Section */}
                <section id="login" className="login section">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8">
                        <div className="login-form-wrapper">
                            <div className="login-header text-center">
                            <h2>
                                Login
                            </h2>
                            <p>
                                Welcome back! Please enter your details
                            </p>
                            </div>
                            <form>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">
                                Email
                                </label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required={true} autoComplete="email" />
                            </div>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <Link to="/forgot-password" className="forgot-link">
                                    Forgot password?
                                </Link>
                                </div>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" required={true} autoComplete="current-password" />
                            </div>
                            <div className="mb-4 form-check">
                                <input type="checkbox" className="form-check-input" id="remember" />
                                <label className="form-check-label" htmlFor="remember">
                                Remember for 30 days
                                </label>
                            </div>
                            <div className="d-grid gap-2 mb-4">
                                <button type="submit" className="btn btn-primary">
                                Sign in
                                </button>
                                <button type="button" className="btn btn-outline">
                                <i className="bi bi-google me-2" />
                                Sign in with Google
                                </button>
                            </div>
                            <div className="signup-link text-center">
                                <span>
                                Don't have an account?
                                </span>
                                <Link to="/register">
                                Sign up for free
                                </Link>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* /Login Section */}
            </main>
        </>
    )
}
export default Login