import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

const SuperAdminLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.classList.add('body-login')
    const cssFiles = [
      '/Admin/assets/styles/bootstrap.min.css',
      '/Admin/assets/styles/bootstrap-icons.css',
      '/Admin/assets/styles/remixicon.css',
      '/Admin/assets/styles/all.min.css',
      '/Admin/assets/styles/style.css',
      '/Admin/assets/styles/superadmin.css',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/saadmin/sa-dashboard');
    } catch (err: any) {
      setError(err.response?.data || 'Email hoặc mật khẩu không đúng');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="particles" id="particles" />
      <div className="login-wrapper">
        <div className="login-card">
          {/* Brand */}
          <div className="login-brand">
            <div className="login-brand-icon">
              <i className="bi bi-shield-lock-fill" />
            </div>
            <div className="login-brand-title">SIBMIP</div>
            <span className="login-brand-badge">
              <i className="bi bi-star-fill" />
              Super Admin Portal
            </span>
          </div>

          {/* Form */}
          <div id="step-credentials">
            <h1 className="login-heading">Welcome Back</h1>
            <p className="login-subtext">
              Sign in to access the system management console
            </p>

            {/* Hiện lỗi nếu có */}
            {error && (
              <div className="alert-sa" role="alert">
                <i className="bi bi-exclamation-circle-fill" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Email */}
              <div className="form-group">
                <label className="form-label" htmlFor="admin-username">
                  Username or Email
                </label>
                <div className="input-wrapper">
                  <input
                    id="admin-username"
                    type="email"
                    className="form-control-sa"
                    placeholder="superadmin@sibmip.vn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    className="form-control-sa"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <i className="bi bi-lock input-icon" />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} />
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-login"
                disabled={loading}
              >
                <span className="btn-icon">
                  <i className="bi bi-box-arrow-in-right" />
                </span>
                <span className="btn-text">
                  {loading ? 'Signing in...' : 'Sign In to Console'}
                </span>
              </button>
            </form>

            <div className="security-note">
              <i className="bi bi-shield-check" />
              <span>256-bit SSL encrypted · Session expires in 24h</span>
            </div>
          </div>
        </div>

        <div className="login-footer">
          © 2026 SIBMIP · <a href="#">Privacy Policy</a> · <a href="#">Support</a>
        </div>
      </div>
    </>
  );
};

export default SuperAdminLogin;