import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

const IndustrialLogin = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Add body-login class for dark gradient background
    document.body.classList.add('body-login')

    const cssFiles = [
      '/Admin/assets/styles/bootstrap.min.css',
      '/Admin/assets/styles/bootstrap-icons.css',
      '/Admin/assets/styles/remixicon.css',
      '/Admin/assets/styles/all.min.css',
      '/Admin/assets/styles/style.css',
      '/Admin/assets/styles/indusAdmin.css',
    ]

    const links = cssFiles.map(href => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
      return link
    })

    return () => {
      document.body.classList.remove('body-login')
      links.forEach(link => document.head.removeChild(link))
    }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.')
      return
    }

    setLoading(true)
    try {
      await login(email.trim(), password)
      navigate('/ipadmin/dashboard')
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Login failed'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Particles */}
      <div className="particles" id="particles" />
      {/* Hexagonal grid background */}
      <div className="hex-grid" />

      <div className="login-wrapper">
        <div className="login-card">
          {/* Brand */}
          <div className="login-brand">
            <div className="login-brand-icon">
              <i className="bi bi-building" />
            </div>
            <div className="login-brand-title">SIBMIP</div>
            <span className="login-brand-badge">
              <i className="bi bi-buildings" />
              Industrial Park Admin
            </span>
          </div>

          {/* Step 1: Credentials */}
          <div id="step-credentials">
            <h1 className="login-heading">Welcome Back</h1>
            <p className="login-subtext">
              Sign in to manage your industrial park
            </p>

            {/* Alert */}
            {error && (
              <div className="alert-ia show" role="alert">
                <i className="bi bi-exclamation-circle-fill" />
                <span>{error}</span>
              </div>
            )}

            <form id="login-form" noValidate onSubmit={handleSubmit}>
{/* Industrial Park Selector */}

              {/* Username */}
              <div className="form-group">
                <label className="form-label" htmlFor="admin-username">
                  Username or Email
                </label>
                <div className="input-wrapper">
                  <input
                    id="admin-username"
                    type="text"
                    className="form-control-ia"
                    placeholder="admin@industrialpark.vn"
                    autoComplete="username"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <i className="bi bi-person input-icon" />
                </div>
              </div>

              {/* Password */}
              <div className="form-group">
                <label className="form-label" htmlFor="admin-password">
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    id="admin-password"
                    type={showPassword ? 'text' : 'password'}
                    className="form-control-ia"
                    placeholder="••••••••••••"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <i className="bi bi-lock input-icon" />
                  <button
                    type="button"
                    className="toggle-password"
                    title="Show/Hide Password"
                    aria-label="Toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} />
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="form-options">
                <label className="form-check-custom">
                  <input type="checkbox" id="remember-me" />
                  <span>Keep me signed in</span>
                </label>
                <a href="#" className="forgot-link">
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`btn-login${loading ? ' loading' : ''}`}
                id="btn-login"
                disabled={loading}
              >
                <span className="btn-icon">
                  <i className="bi bi-box-arrow-in-right" />
                </span>
                <span className="btn-text">Sign In to Dashboard</span>
                <span className="spinner" />
              </button>
            </form>

            <div className="security-note">
<i className="bi bi-shield-check" />
              <span>256-bit SSL encrypted · Session expires in 8h</span>
            </div>
          </div>

          {/* Step 2: 2FA */}
          <div className="twofa-section" id="step-2fa">
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>🔐</div>
            <h2 className="login-heading">Two-Factor Authentication</h2>
            <p className="login-subtext">
              Enter the 6-digit code sent to your registered authenticator app.
            </p>

            <div className="park-badge-sm">
              <i className="bi bi-building" />
              <span>VSIP I - Bình Dương</span>
            </div>

            <div className="otp-inputs">
              <input className="otp-input" id="otp1" type="text" maxLength={1} inputMode="numeric" aria-label="OTP digit 1" />
              <input className="otp-input" id="otp2" type="text" maxLength={1} inputMode="numeric" aria-label="OTP digit 2" />
              <input className="otp-input" id="otp3" type="text" maxLength={1} inputMode="numeric" aria-label="OTP digit 3" />
              <input className="otp-input" id="otp4" type="text" maxLength={1} inputMode="numeric" aria-label="OTP digit 4" />
              <input className="otp-input" id="otp5" type="text" maxLength={1} inputMode="numeric" aria-label="OTP digit 5" />
              <input className="otp-input" id="otp6" type="text" maxLength={1} inputMode="numeric" aria-label="OTP digit 6" />
            </div>

            <button
              className="btn-login"
              id="btn-verify"
              style={{ marginBottom: "16px" }}
            >
              <span className="btn-icon">
                <i className="bi bi-shield-check" />
              </span>
              <span className="btn-text">Verify & Enter</span>
              <span className="spinner" />
            </button>

            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
              Didn't receive a code?{" "}
              <a href="#" className="resend-link">
                Resend
              </a>
            </p>

            <button
              type="button"
              id="btn-back"
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                fontSize: "13px",
                cursor: "pointer",
                marginTop: "8px",
                fontFamily: "inherit",
              }}
            >
              ← Back to sign in
            </button>
          </div>
        </div>

        <div className="login-footer">
          © 2026 SIBMIP · <a href="#">Privacy Policy</a> · <a href="#">Support</a>
        </div>
      </div>
    </>
  );
};

export default IndustrialLogin;