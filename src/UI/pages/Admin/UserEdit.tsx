import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { fetchUserById, updateUser, deleteUser } from '../../../api/userApi'
import type { UserResponse, UpdateUserRequest } from '../../../api/userApi'

const UserEdit = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    // ── State ──
    const [user, setUser] = useState<UserResponse | null>(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState('')
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

    // ── Form State ──
    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        dateOfBirth: '', gender: '',
        department: '', jobTitle: '', officeLocation: '', startDate: '',
        role: '', status: '',
        emailVerified: false, twoFactorEnabled: false, forcePasswordChange: false,
        newPassword: '', confirmPassword: '',
    })

    // ── Load user data ──
    useEffect(() => {
        if (!id) return
        setLoading(true)
        fetchUserById(Number(id))
            .then(u => {
                setUser(u)
                setForm({
                    firstName: u.firstName || '',
                    lastName: u.lastName || '',
                    email: u.email || '',
                    phone: u.phone || '',
                    dateOfBirth: u.dateOfBirth || '',
                    gender: u.gender || '',
                    department: u.department || '',
                    jobTitle: u.jobTitle || '',
                    officeLocation: u.officeLocation || '',
                    startDate: u.startDate || '',
                    role: u.role || 'USER',
                    status: u.status || 'ACTIVE',
                    emailVerified: u.emailVerified || false,
                    twoFactorEnabled: u.twoFactorEnabled || false,
                    forcePasswordChange: u.forcePasswordChange || false,
                    newPassword: '',
                    confirmPassword: '',
                })
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [id])

    // ── Save handler ──
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!user) return

        // Validate password if being changed
        if (form.newPassword && form.newPassword !== form.confirmPassword) {
            showToast('New password and confirmation do not match', 'error')
            return
        }

        setSaving(true)
        try {
            const payload: UpdateUserRequest = {
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                phone: form.phone || undefined,
                dateOfBirth: form.dateOfBirth || undefined,
                gender: form.gender || undefined,
                department: form.department || undefined,
                jobTitle: form.jobTitle || undefined,
                officeLocation: form.officeLocation || undefined,
                startDate: form.startDate || undefined,
                role: form.role,
                status: form.status,
                emailVerified: form.emailVerified,
                twoFactorEnabled: form.twoFactorEnabled,
                forcePasswordChange: form.forcePasswordChange,
            }

            // Only include password fields if user wants to change
            if (form.newPassword) {
                payload.newPassword = form.newPassword
                payload.confirmPassword = form.confirmPassword
            }

            const updated = await updateUser(user.id, payload)
            setUser(updated)
            showToast('User updated successfully', 'success')
        } catch (err: unknown) {
            showToast(err instanceof Error ? err.message : 'Failed to update user', 'error')
        } finally {
            setSaving(false)
        }
    }

    // ── Delete handler ──
    const handleDelete = async () => {
        if (!user) return
        if (!window.confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName}? This action cannot be undone.`)) return
        try {
            await deleteUser(user.id)
            navigate('/admin/users-list')
        } catch (err: unknown) {
            showToast(err instanceof Error ? err.message : 'Failed to delete user', 'error')
        }
    }

    // ── Toast helper ──
    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ message, type })
        setTimeout(() => setToast(null), 3000)
    }

    // ── Loading state ──
    if (loading) {
        return (
            <div className="main-content page-users-edit">
                <div style={{ textAlign: 'center', padding: '80px 0', color: '#6b7280' }}>
                    <i className="bi bi-arrow-repeat" style={{ fontSize: 32, animation: 'spin 1s linear infinite' }} />
                    <p style={{ marginTop: 12 }}>Loading user...</p>
                </div>
            </div>
        )
    }

    // ── Error state ──
    if (error || !user) {
        return (
            <div className="main-content page-users-edit">
                <div style={{ textAlign: 'center', padding: '80px 0', color: '#ef4444' }}>
                    <i className="bi bi-exclamation-triangle" style={{ fontSize: 32 }} />
                    <p style={{ marginTop: 12 }}>{error || 'User not found'}</p>
                    <Link to="/admin/users-list" className="btn btn-sm btn-outline-primary mt-2">Back to Users</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            {/* Toast */}
            {toast && (
                <div style={{
                    position: 'fixed', top: 20, right: 20, zIndex: 9999, padding: '12px 24px',
                    borderRadius: 8, color: '#fff', fontSize: 14, fontWeight: 500,
                    backgroundColor: toast.type === 'success' ? '#10b981' : '#ef4444',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}>
                    <i className={`bi ${toast.type === 'success' ? 'bi-check-circle' : 'bi-x-circle'} me-2`} />
                    {toast.message}
                </div>
            )}

            <div className="main-content page-users-edit">
                <div className="page-users-edit">
                    <h1>User Edit</h1>
                    <nav className="breadcrumb">
                        <Link to="/admin/dashboard" className="breadcrumb-item">Home</Link>
                        <Link to="/admin/users-list" className="breadcrumb-item">Users</Link>
                        <span className="breadcrumb-item active">Edit: {user.firstName} {user.lastName}</span>
                    </nav>
                    <div className="ue-shell-head mb-3">
                        <div>
                            <h1 className="page-title mb-1">User Edit Workspace</h1>
                            <p className="ue-shell-subtitle">
                                Adjust identity, role scope, and security settings before publishing updates.
                            </p>
                        </div>
                        <div className="page-header-actions">
                            <Link to={`/admin/users-view/${user.id}`} className="btn btn-outline-secondary btn-sm">
                                <i className="bi bi-eye me-1" />View Profile
                            </Link>
                            <button type="submit" form="userEditForm" className="btn btn-primary btn-sm" disabled={saving}>
                                <i className="bi bi-check-lg me-1" />
                                {saving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                    <form id="userEditForm" onSubmit={handleSave}>
                        <div className="row g-3">
                            {/* ═══ LEFT COLUMN ═══ */}
                            <div className="col-xl-4">
                                {/* Identity Snapshot */}
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Identity Snapshot</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="ue-shell-user">
                                            <div className="ue-avatar-upload">
                                                {user.avatarUrl ? (
                                                    <img src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} className="ue-avatar-preview" />
                                                ) : (
                                                    <div className="ue-avatar-preview" style={{
                                                        width: 96, height: 96, borderRadius: '50%',
                                                        background: '#e0e7ff', display: 'flex',
                                                        alignItems: 'center', justifyContent: 'center',
                                                        fontWeight: 700, fontSize: 32, color: '#4338ca'
                                                    }}>
                                                        {form.firstName.charAt(0)}{form.lastName.charAt(0)}
                                                    </div>
                                                )}
                                                <div className="ue-avatar-overlay">
                                                    <i className="bi bi-camera" />
                                                    <span>Change Photo</span>
                                                </div>
                                                <input type="file" className="ue-avatar-input" accept="image/*" />
                                            </div>
                                            <div className="ue-shell-user-meta">
                                                <strong>{form.firstName} {form.lastName}</strong>
                                                <span>{form.email}</span>
                                                {user.employeeId && <span className="ue-shell-chip">#{user.employeeId}</span>}
                                            </div>
                                        </div>
                                        <p className="ue-avatar-hint mb-0">JPG, PNG or WEBP. Max 2MB.</p>
                                    </div>
                                </div>

                                {/* Status & Security */}
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Status & Security</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <label className="form-label">Status</label>
                                            <select className="form-select" value={form.status}
                                                onChange={e => setForm({ ...form, status: e.target.value })}>
                                                <option value="ACTIVE">Active</option>
                                                <option value="INACTIVE">Inactive</option>
                                                <option value="SUSPENDED">Suspended</option>
                                            </select>
                                        </div>
                                        <div className="ue-toggles mb-3">
                                            <div className="ue-toggle-item">
                                                <div className="ue-toggle-info">
                                                    <span className="ue-toggle-label">Email Verified</span>
                                                    <span className="ue-toggle-desc">User has verified their email address</span>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox"
                                                        checked={form.emailVerified}
                                                        onChange={e => setForm({ ...form, emailVerified: e.target.checked })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="ue-toggle-item">
                                                <div className="ue-toggle-info">
                                                    <span className="ue-toggle-label">Two-Factor Auth</span>
                                                    <span className="ue-toggle-desc">Require 2FA on login</span>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox"
                                                        checked={form.twoFactorEnabled}
                                                        onChange={e => setForm({ ...form, twoFactorEnabled: e.target.checked })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="ue-toggle-item">
                                                <div className="ue-toggle-info">
                                                    <span className="ue-toggle-label">Force Password Change</span>
                                                    <span className="ue-toggle-desc">Require new password on next login</span>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox"
                                                        checked={form.forcePasswordChange}
                                                        onChange={e => setForm({ ...form, forcePasswordChange: e.target.checked })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {user.lastPasswordChange && (
                                            <div className="ue-shell-security-note">
                                                <i className="bi bi-shield-lock" />
                                                <span>Last password change: {new Date(user.lastPasswordChange).toLocaleDateString()}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Danger Zone */}
                                <div className="card ue-shell-card ue-danger-card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">
                                            <i className="bi bi-exclamation-triangle me-1" />
                                            Danger Zone
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="ue-danger-text">
                                            Once you delete a user, there is no going back. Please be certain.
                                        </p>
                                        <button type="button" className="btn btn-outline-danger w-100" onClick={handleDelete}>
                                            <i className="bi bi-trash me-1" />
                                            Delete User
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* ═══ RIGHT COLUMN ═══ */}
                            <div className="col-xl-8">
                                {/* Personal Information */}
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Personal Information</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label required">First Name</label>
                                                <input type="text" className="form-control" required
                                                    value={form.firstName}
                                                    onChange={e => setForm({ ...form, firstName: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label required">Last Name</label>
                                                <input type="text" className="form-control" required
                                                    value={form.lastName}
                                                    onChange={e => setForm({ ...form, lastName: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label required">Email Address</label>
                                                <input type="email" className="form-control" required
                                                    value={form.email}
                                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Phone Number</label>
                                                <input type="tel" className="form-control"
                                                    value={form.phone}
                                                    onChange={e => setForm({ ...form, phone: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Date of Birth</label>
                                                <input type="date" className="form-control"
                                                    value={form.dateOfBirth}
                                                    onChange={e => setForm({ ...form, dateOfBirth: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Gender</label>
                                                <select className="form-select" value={form.gender}
                                                    onChange={e => setForm({ ...form, gender: e.target.value })}>
                                                    <option value="">Select...</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                    <option value="prefer-not">Prefer not to say</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Work Information */}
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Work Information</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label">Department</label>
                                                <select className="form-select" value={form.department}
                                                    onChange={e => setForm({ ...form, department: e.target.value })}>
                                                    <option value="">Select department...</option>
                                                    <option value="engineering">Engineering</option>
                                                    <option value="design">Design</option>
                                                    <option value="marketing">Marketing</option>
                                                    <option value="sales">Sales</option>
                                                    <option value="support">Support</option>
                                                    <option value="hr">Human Resources</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Job Title</label>
                                                <input type="text" className="form-control"
                                                    value={form.jobTitle}
                                                    onChange={e => setForm({ ...form, jobTitle: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Office Location</label>
                                                <select className="form-select" value={form.officeLocation}
                                                    onChange={e => setForm({ ...form, officeLocation: e.target.value })}>
                                                    <option value="">Select location...</option>
                                                    <option value="ny">New York, USA</option>
                                                    <option value="sf">San Francisco, USA</option>
                                                    <option value="london">London, UK</option>
                                                    <option value="remote">Remote</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Employee ID</label>
                                                <input type="text" className="form-control" value={user.employeeId || ''} readOnly />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Start Date</label>
                                                <input type="date" className="form-control"
                                                    value={form.startDate}
                                                    onChange={e => setForm({ ...form, startDate: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Role & Permissions */}
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Role & Permissions</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label required">Role</label>
                                                <select className="form-select" required value={form.role}
                                                    onChange={e => setForm({ ...form, role: e.target.value })}>
                                                    <option value="">Select role...</option>
                                                    <option value="BUYER_STAFF">Buyer Staff</option>
                                                    <option value="SELLER_STAFF">Seller Staff</option>
                                                </select>
                                                <div className="form-text">
                                                    {form.role === 'BUYER_STAFF' ? 'Buyer Staff can manage purchase orders and quotations.' :
                                                     form.role === 'SELLER_STAFF' ? 'Seller Staff can manage products and fulfillment.' :
                                                     'Select a role for this user.'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Change Password */}
                                <div className="card ue-shell-card mb-3">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Change Password</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="ue-password-note">
                                            <i className="bi bi-info-circle" />
                                            <span>Leave blank to keep the current password.</span>
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label">New Password</label>
                                                <input type="password" className="form-control" placeholder="Enter new password"
                                                    value={form.newPassword}
                                                    onChange={e => setForm({ ...form, newPassword: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Confirm Password</label>
                                                <input type="password" className="form-control" placeholder="Confirm new password"
                                                    value={form.confirmPassword}
                                                    onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="ue-form-actions">
                                    <Link to="/admin/users-list" className="btn btn-secondary">Cancel</Link>
                                    <button type="submit" className="btn btn-primary" disabled={saving}>
                                        <i className="bi bi-check-lg me-1" />
                                        {saving ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-links">
                        <a href="#">Docs</a>
                        <a href="#">Privacy</a>
                        <a href="#">Security</a>
                        <a href="#">Support</a>
                    </div>
                    <div className="footer-credits">
                        <div className="footer-copyright">
                            © 2026 <a href="#">EIU</a>
                        </div>
                        <div className="footer-copyright">
                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default UserEdit