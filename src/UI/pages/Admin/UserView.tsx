import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { fetchUserById, deleteUser } from '../../../api/userApi'
import type { UserResponse } from '../../../api/userApi'

const UserView = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [user, setUser] = useState<UserResponse | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!id) return
        setLoading(true)
        fetchUserById(Number(id))
            .then(setUser)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [id])

    const handleDelete = async () => {
        if (!user) return
        if (!window.confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName}? This action cannot be undone.`)) return
        try {
            await deleteUser(user.id)
            navigate('/admin/users-list')
        } catch (err: unknown) {
            alert(err instanceof Error ? err.message : 'Failed to delete user')
        }
    }

    const formatDate = (dateStr?: string) => {
        if (!dateStr) return '—'
        return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }

    if (loading) {
        return (
            <div className="main-content page-users-view">
                <div style={{ textAlign: 'center', padding: '80px 0', color: '#6b7280' }}>
                    <i className="bi bi-arrow-repeat" style={{ fontSize: 32, animation: 'spin 1s linear infinite' }} />
                    <p style={{ marginTop: 12 }}>Loading user...</p>
                </div>
            </div>
        )
    }

    if (error || !user) {
        return (
            <div className="main-content page-users-view">
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
            <div className="main-content page-users-view">
                <div className="page-users-view">
                    <h1>Users View</h1>
                    <nav className="breadcrumb">
                        <Link to="/admin/dashboard" className="breadcrumb-item">Home</Link>
                        <Link to="/admin/users-list" className="breadcrumb-item">Users</Link>
                        <span className="breadcrumb-item active">{user.firstName} {user.lastName}</span>
                    </nav>
                    <div className="uv-hero mb-3">
                        <div className="uv-hero-user">
                            <div className="uv-hero-avatar-wrap">
                                {user.avatarUrl ? (
                                    <img src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} className="uv-hero-avatar" />
                                ) : (
                                    <div className="uv-hero-avatar" style={{
                                        width: 72, height: 72, borderRadius: '50%',
                                        background: '#e0e7ff', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center',
                                        fontWeight: 700, fontSize: 24, color: '#4338ca'
                                    }}>
                                        {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                                    </div>
                                )}
                                <span className="uv-hero-status" />
                            </div>
                            <div>
                                <h1 className="uv-hero-name">{user.firstName} {user.lastName}</h1>
                                <p className="uv-hero-email">{user.email}</p>
                                <div className="uv-hero-tags">
                                    <span className={`uv-pill ${user.role === 'SELLER_STAFF' ? 'uv-pill-admin' : ''}`}>
                                        <i className={user.role === 'BUYER_STAFF' ? 'bi bi-cart-check' : 'bi bi-shop'} />
                                        {user.role === 'BUYER_STAFF' ? 'Buyer Staff' : user.role === 'SELLER_STAFF' ? 'Seller Staff' : user.role}
                                    </span>
                                    {user.employeeId && <span className="uv-pill">#{user.employeeId}</span>}
                                </div>
                            </div>
                        </div>
                        <div className="uv-hero-actions">
                            <Link to={`/admin/users-edit/${user.id}`} className="btn btn-primary btn-sm">
                                <i className="bi bi-pencil me-1" />
                                Edit User
                            </Link>
                            <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>
                                <i className="bi bi-trash me-1" />
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-8">
                            {/* Personal & Work Information */}
                            <div className="card uv-panel mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Personal Information</h5>
                                </div>
                                <div className="card-body">
                                    <div className="uv-feed">
                                        <div className="uv-feed-item">
                                            <span className="uv-feed-dot info" />
                                            <div>
                                                <strong>Full Name</strong>
                                                <p>{user.firstName} {user.lastName}</p>
                                            </div>
                                        </div>
                                        <div className="uv-feed-item">
                                            <span className="uv-feed-dot info" />
                                            <div>
                                                <strong>Email</strong>
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                        {user.phone && (
                                            <div className="uv-feed-item">
                                                <span className="uv-feed-dot info" />
                                                <div>
                                                    <strong>Phone</strong>
                                                    <p>{user.phone}</p>
                                                </div>
                                            </div>
                                        )}
                                        {user.dateOfBirth && (
                                            <div className="uv-feed-item">
                                                <span className="uv-feed-dot info" />
                                                <div>
                                                    <strong>Date of Birth</strong>
                                                    <p>{formatDate(user.dateOfBirth)}</p>
                                                </div>
                                            </div>
                                        )}
                                        {user.gender && (
                                            <div className="uv-feed-item">
                                                <span className="uv-feed-dot info" />
                                                <div>
                                                    <strong>Gender</strong>
                                                    <p>{user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* Work Information */}
                            <div className="card uv-panel">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="card-title mb-0">Work Information</h5>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table align-middle mb-0 uv-project-table">
                                            <thead>
                                                <tr>
                                                    <th>Field</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Department</td>
                                                    <td>{user.department ? user.department.charAt(0).toUpperCase() + user.department.slice(1) : '—'}</td>
                                                </tr>
                                                <tr>
                                                    <td>Job Title</td>
                                                    <td>{user.jobTitle || '—'}</td>
                                                </tr>
                                                <tr>
                                                    <td>Office Location</td>
                                                    <td>{user.officeLocation || '—'}</td>
                                                </tr>
                                                <tr>
                                                    <td>Employee ID</td>
                                                    <td>{user.employeeId || '—'}</td>
                                                </tr>
                                                <tr>
                                                    <td>Start Date</td>
                                                    <td>{formatDate(user.startDate)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Status</td>
                                                    <td>
                                                        <span className={`badge bg-${user.status === 'ACTIVE' ? 'success' : user.status === 'SUSPENDED' ? 'warning' : 'secondary'}`}>
                                                            {user.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            {/* Security Surface */}
                            <div className="card uv-panel mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Security</h5>
                                </div>
                                <div className="card-body">
                                    <div className="uv-perm-item">
                                        <span>Email Verified</span>
                                        <i className={`bi ${user.emailVerified ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger'}`} />
                                    </div>
                                    <div className="uv-perm-item">
                                        <span>Two-Factor Auth</span>
                                        <i className={`bi ${user.twoFactorEnabled ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger'}`} />
                                    </div>
                                    <div className="uv-perm-item">
                                        <span>Force Password Change</span>
                                        <i className={`bi ${user.forcePasswordChange ? 'bi-check-circle-fill text-warning' : 'bi-x-circle-fill text-secondary'}`} />
                                    </div>
                                    {user.lastPasswordChange && (
                                        <div className="uv-perm-item">
                                            <span>Last Password Change</span>
                                            <small>{formatDate(user.lastPasswordChange)}</small>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Timestamps */}
                            <div className="card uv-panel">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Audit Trail</h5>
                                </div>
                                <div className="card-body">
                                    <div className="uv-session-item">
                                        <div className="uv-session-icon">
                                            <i className="bi bi-calendar-plus" />
                                        </div>
                                        <div className="uv-session-info">
                                            <div className="uv-session-title">Created</div>
                                            <div className="uv-session-details">{formatDate(user.createdAt)}</div>
                                        </div>
                                    </div>
                                    <div className="uv-session-item">
                                        <div className="uv-session-icon">
                                            <i className="bi bi-pencil-square" />
                                        </div>
                                        <div className="uv-session-info">
                                            <div className="uv-session-title">Last Updated</div>
                                            <div className="uv-session-details">{formatDate(user.updatedAt)}</div>
                                        </div>
                                    </div>
                                    {user.lastActive && (
                                        <div className="uv-session-item">
                                            <div className="uv-session-icon">
                                                <i className="bi bi-clock-history" />
                                            </div>
                                            <div className="uv-session-info">
                                                <div className="uv-session-title">Last Active</div>
                                                <div className="uv-session-details">{formatDate(user.lastActive)}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserView