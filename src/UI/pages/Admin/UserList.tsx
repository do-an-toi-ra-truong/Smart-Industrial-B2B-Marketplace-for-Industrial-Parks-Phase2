import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchUsers, createUser, deleteUser } from '../../../api/userApi'
import type { UserResponse, UserListResponse, CreateUserRequest } from '../../../api/userApi'

const UserList = () => {
    // ── State ──
    const [data, setData] = useState<UserListResponse | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    // ── Filters & Pagination ──
    const [currentPage, setCurrentPage] = useState(0)
    const [statusFilter, setStatusFilter] = useState<string | null>(null)
    const [roleFilter, setRoleFilter] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchInput, setSearchInput] = useState('')
    const pageSize = 8

    // ── Add User Modal ──
    const [showAddModal, setShowAddModal] = useState(false)
    const [addForm, setAddForm] = useState<CreateUserRequest>({
        firstName: '', lastName: '', email: '',
        password: '', confirmPassword: '', role: '',
    })
    const [addError, setAddError] = useState('')
    const [addLoading, setAddLoading] = useState(false)

    // ── Select All ──
    const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())

    // ── Toast ──
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

    // ── Fetch users ──
    const loadUsers = async () => {
        setLoading(true)
        setError('')
        try {
            const result = await fetchUsers({
                page: currentPage,
                size: pageSize,
                status: statusFilter || undefined,
                role: roleFilter || undefined,
                search: searchQuery || undefined,
            })
            setData(result)
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Failed to load users')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadUsers()
    }, [currentPage, statusFilter, roleFilter, searchQuery])

    // ── Search handler (debounce on Enter) ──
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setSearchQuery(searchInput)
            setCurrentPage(0)
        }
    }

    // ── Filter tab click ──
    const handleFilterTab = (status: string | null) => {
        setStatusFilter(status)
        setCurrentPage(0)
        setSelectedIds(new Set())
    }

    // ── Role filter ──
    const handleRoleFilter = (role: string | null) => {
        setRoleFilter(role)
        setCurrentPage(0)
    }

    // ── Select All toggle ──
    const handleSelectAll = (checked: boolean) => {
        if (checked && data) {
            setSelectedIds(new Set(data.users.map(u => u.id)))
        } else {
            setSelectedIds(new Set())
        }
    }

    // ── Single select toggle ──
    const handleSelectOne = (id: number, checked: boolean) => {
        const next = new Set(selectedIds)
        if (checked) next.add(id)
        else next.delete(id)
        setSelectedIds(next)
    }

    // ── Add User ──
    const handleAddUser = async () => {
        setAddError('')
        if (!addForm.firstName || !addForm.lastName || !addForm.email || !addForm.password || !addForm.role) {
            setAddError('Please fill in all required fields')
            return
        }
        if (addForm.password !== addForm.confirmPassword) {
            setAddError('Passwords do not match')
            return
        }
        setAddLoading(true)
        try {
            await createUser(addForm)
            setShowAddModal(false)
            setAddForm({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', role: '' })
            showToast('User created successfully', 'success')
            loadUsers()
        } catch (err: unknown) {
            setAddError(err instanceof Error ? err.message : 'Failed to create user')
        } finally {
            setAddLoading(false)
        }
    }

    // ── Delete User ──
    const handleDeleteUser = async (user: UserResponse) => {
        if (!window.confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName}?`)) return
        try {
            await deleteUser(user.id)
            showToast('User deleted successfully', 'success')
            loadUsers()
        } catch (err: unknown) {
            showToast(err instanceof Error ? err.message : 'Failed to delete user', 'error')
        }
    }

    // ── Toast helper ──
    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ message, type })
        setTimeout(() => setToast(null), 3000)
    }

    // ── Time formatting helper ──
    const formatDate = (dateStr?: string) => {
        if (!dateStr) return '—'
        return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }

    const formatLastActive = (dateStr?: string) => {
        if (!dateStr) return '—'
        const diff = Date.now() - new Date(dateStr).getTime()
        const mins = Math.floor(diff / 60000)
        if (mins < 1) return 'Just now'
        if (mins < 60) return `${mins} min ago`
        const hours = Math.floor(mins / 60)
        if (hours < 24) return `${hours} hours ago`
        const days = Math.floor(hours / 24)
        return `${days} days ago`
    }

    // ── Role badge class ──
    const getRoleClass = (role: string) => {
        switch (role.toUpperCase()) {
            case 'BUYER_STAFF': return 'manager'
            case 'SELLER_STAFF': return 'admin'
            default: return 'user'
        }
    }

    const getRoleIcon = (role: string) => {
        switch (role.toUpperCase()) {
            case 'BUYER_STAFF': return 'bi bi-cart-check'
            case 'SELLER_STAFF': return 'bi bi-shop'
            default: return 'bi bi-person'
        }
    }

    const formatRole = (role: string) => {
        switch (role.toUpperCase()) {
            case 'BUYER_STAFF': return 'Buyer Staff'
            case 'SELLER_STAFF': return 'Seller Staff'
            default: return role
        }
    }

    // ── Pagination helpers ──
    const renderPagination = () => {
        if (!data || data.totalPages <= 1) return null
        const pages: (number | string)[] = []
        for (let i = 0; i < data.totalPages; i++) {
            if (i === 0 || i === data.totalPages - 1 || Math.abs(i - data.currentPage) <= 1) {
                pages.push(i)
            } else if (pages[pages.length - 1] !== '...') {
                pages.push('...')
            }
        }
        return (
            <nav>
                <ul className="pagination pagination-sm mb-0">
                    <li className={`page-item ${data.currentPage === 0 ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" onClick={e => { e.preventDefault(); setCurrentPage(data.currentPage - 1) }}>
                            <i className="bi bi-chevron-left" />
                        </a>
                    </li>
                    {pages.map((p, i) =>
                        typeof p === 'string' ? (
                            <li key={`dots-${i}`} className="page-item disabled"><a className="page-link" href="#">...</a></li>
                        ) : (
                            <li key={p} className={`page-item ${p === data.currentPage ? 'active' : ''}`}>
                                <a className="page-link" href="#" onClick={e => { e.preventDefault(); setCurrentPage(p) }}>{p + 1}</a>
                            </li>
                        )
                    )}
                    <li className={`page-item ${data.currentPage === data.totalPages - 1 ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" onClick={e => { e.preventDefault(); setCurrentPage(data.currentPage + 1) }}>
                            <i className="bi bi-chevron-right" />
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }

    const totalAll = data ? data.totalUsers + (statusFilter ? 0 : 0) : 0

    return (
        <>
            {/* Toast Notification */}
            {toast && (
                <div style={{
                    position: 'fixed', top: 20, right: 20, zIndex: 9999, padding: '12px 24px',
                    borderRadius: 8, color: '#fff', fontSize: 14, fontWeight: 500,
                    backgroundColor: toast.type === 'success' ? '#10b981' : '#ef4444',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)', animation: 'fadeIn 0.3s ease'
                }}>
                    <i className={`bi ${toast.type === 'success' ? 'bi-check-circle' : 'bi-x-circle'} me-2`} />
                    {toast.message}
                </div>
            )}

            <div className="main-content page-users">
                <div className="page-users users-lab">
                    <h1 className="page-title mb-1">Users List</h1>
                    <nav className="breadcrumb">
                        <Link to="/admin/dashboard" className="breadcrumb-item">Home</Link>
                        <span className="breadcrumb-item active">Users List</span>
                    </nav>
                    <div className="users-lab-hero mb-3">
                        <div>
                            <p className="users-page-subtitle">
                                Manage member access, lifecycle status, and team distribution from one control surface.
                            </p>
                        </div>
                        <div className="page-header-actions">
                            <button className="btn btn-outline-secondary btn-sm">
                                <i className="bi bi-download me-1" />
                                Export
                            </button>
                            <button className="btn btn-primary btn-sm" onClick={() => setShowAddModal(true)}>
                                <i className="bi bi-plus-lg me-1" />
                                Add User
                            </button>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-12">
                            <div className="card users-list-card">
                                <div className="users-toolbar">
                                    <div className="users-toolbar-left">
                                        <div className="users-filter-tabs">
                                            <button
                                                className={`users-filter-tab ${!statusFilter ? 'active' : ''}`}
                                                onClick={() => handleFilterTab(null)}
                                            >
                                                All
                                                <span className="users-filter-count">{data ? data.totalUsers : 0}</span>
                                            </button>
                                            <button
                                                className={`users-filter-tab ${statusFilter === 'ACTIVE' ? 'active' : ''}`}
                                                onClick={() => handleFilterTab('ACTIVE')}
                                            >
                                                Active
                                                <span className="users-filter-count">{data?.activeCount ?? 0}</span>
                                            </button>
                                            <button
                                                className={`users-filter-tab ${statusFilter === 'INACTIVE' ? 'active' : ''}`}
                                                onClick={() => handleFilterTab('INACTIVE')}
                                            >
                                                Inactive
                                                <span className="users-filter-count">{data?.inactiveCount ?? 0}</span>
                                            </button>
                                            <button
                                                className={`users-filter-tab ${statusFilter === 'SUSPENDED' ? 'active' : ''}`}
                                                onClick={() => handleFilterTab('SUSPENDED')}
                                            >
                                                Suspended
                                                <span className="users-filter-count">{data?.suspendedCount ?? 0}</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="users-toolbar-right">
                                        <div className="users-search">
                                            <i className="bi bi-search" />
                                            <input
                                                type="text"
                                                placeholder="Search users, email, role..."
                                                autoComplete="off"
                                                value={searchInput}
                                                onChange={e => setSearchInput(e.target.value)}
                                                onKeyDown={handleSearch}
                                            />
                                        </div>
                                        <div className="dropdown">
                                            <button className="users-toolbar-btn dropdown-toggle" data-bs-toggle="dropdown">
                                                <i className="bi bi-sliders" />
                                                {roleFilter ? formatRole(roleFilter) : 'Role'}
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#" onClick={e => { e.preventDefault(); handleRoleFilter(null) }}>All Roles</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={e => { e.preventDefault(); handleRoleFilter('BUYER_STAFF') }}>Buyer Staff</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={e => { e.preventDefault(); handleRoleFilter('SELLER_STAFF') }}>Seller Staff</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Loading / Error / Table */}
                                {loading ? (
                                    <div style={{ textAlign: 'center', padding: '40px 0', color: '#6b7280' }}>
                                        <i className="bi bi-arrow-repeat" style={{ fontSize: 24, animation: 'spin 1s linear infinite' }} />
                                        <p style={{ marginTop: 8 }}>Loading users...</p>
                                    </div>
                                ) : error ? (
                                    <div style={{ textAlign: 'center', padding: '40px 0', color: '#ef4444' }}>
                                        <i className="bi bi-exclamation-triangle" style={{ fontSize: 24 }} />
                                        <p style={{ marginTop: 8 }}>{error}</p>
                                        <button className="btn btn-sm btn-outline-primary mt-2" onClick={loadUsers}>Retry</button>
                                    </div>
                                ) : (
                                    <div className="table-responsive users-table-wrap">
                                        <table className="table table-hover align-middle mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="users-th-check">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={data ? selectedIds.size === data.users.length && data.users.length > 0 : false}
                                                                onChange={e => handleSelectAll(e.target.checked)}
                                                            />
                                                        </div>
                                                    </th>
                                                    <th>User</th>
                                                    <th>Role</th>
                                                    <th>Status</th>
                                                    <th>Last Active</th>
                                                    <th>Joined</th>
                                                    <th className="users-th-actions">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data.users.length > 0 ? data.users.map(user => (
                                                    <tr key={user.id}>
                                                        <td>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    checked={selectedIds.has(user.id)}
                                                                    onChange={e => handleSelectOne(user.id, e.target.checked)}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="users-user">
                                                                <div className="users-avatar-wrap">
                                                                    <div className="users-avatar" style={{
                                                                        width: 36, height: 36, borderRadius: '50%',
                                                                        background: '#e0e7ff', display: 'flex',
                                                                        alignItems: 'center', justifyContent: 'center',
                                                                        fontWeight: 600, fontSize: 14, color: '#4338ca'
                                                                    }}>
                                                                        {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                                                                    </div>
                                                                    <span className={`users-avatar-status ${user.status === 'ACTIVE' ? 'online' : 'offline'}`} />
                                                                </div>
                                                                <div className="users-user-info">
                                                                    <Link to={`/admin/users-view/${user.id}`} className="users-user-name">
                                                                        {user.firstName} {user.lastName}
                                                                    </Link>
                                                                    <span className="users-user-email">{user.email}</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className={`users-role ${getRoleClass(user.role)}`}>
                                                                <i className={getRoleIcon(user.role)} />
                                                                {formatRole(user.role)}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className={`users-status ${user.status.toLowerCase()}`}>
                                                                <span className="users-status-dot" />
                                                                {user.status.charAt(0) + user.status.slice(1).toLowerCase()}
                                                            </span>
                                                        </td>
                                                        <td className="users-meta">{formatLastActive(user.lastActive)}</td>
                                                        <td className="users-meta">{formatDate(user.createdAt)}</td>
                                                        <td>
                                                            <div className="users-actions">
                                                                <Link to={`/admin/users-view/${user.id}`} className="users-action-btn" title="View">
                                                                    <i className="bi bi-eye" />
                                                                </Link>
                                                                <Link to={`/admin/users-edit/${user.id}`} className="users-action-btn" title="Edit">
                                                                    <i className="bi bi-pencil" />
                                                                </Link>
                                                                <div className="dropdown">
                                                                    <button className="users-action-btn dropdown-toggle" data-bs-toggle="dropdown">
                                                                        <i className="bi bi-three-dots" />
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">
                                                                                <i className="bi bi-envelope me-2" />Send Email
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">
                                                                                <i className="bi bi-key me-2" />Reset Password
                                                                            </a>
                                                                        </li>
                                                                        <li><hr className="dropdown-divider" /></li>
                                                                        <li>
                                                                            <a className="dropdown-item text-danger" href="#"
                                                                                onClick={e => { e.preventDefault(); handleDeleteUser(user) }}>
                                                                                <i className="bi bi-trash me-2" />Delete
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )) : (
                                                    <tr>
                                                        <td colSpan={7} style={{ textAlign: 'center', padding: '40px 0', color: '#9ca3af' }}>
                                                            <i className="bi bi-people" style={{ fontSize: 32, display: 'block', marginBottom: 8 }} />
                                                            No users found
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {/* Pagination */}
                                {data && data.totalPages > 0 && (
                                    <div className="users-pagination">
                                        <div className="users-pagination-info">
                                            Showing <strong>{data.currentPage * pageSize + 1}-{Math.min((data.currentPage + 1) * pageSize, data.totalUsers)}</strong> of <strong>{data.totalUsers}</strong> users
                                        </div>
                                        {renderPagination()}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ═══ Add User Modal ═══ */}
                    {showAddModal && (
                        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex={-1}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add New User</h5>
                                        <button type="button" className="btn-close" onClick={() => { setShowAddModal(false); setAddError('') }} />
                                    </div>
                                    <div className="modal-body">
                                        {addError && (
                                            <div className="alert alert-danger py-2" style={{ fontSize: 13 }}>
                                                <i className="bi bi-exclamation-circle me-1" />{addError}
                                            </div>
                                        )}
                                        <form onSubmit={e => e.preventDefault()}>
                                            <div className="row g-3">
                                                <div className="col-sm-6">
                                                    <label className="form-label">First Name</label>
                                                    <input type="text" className="form-control" placeholder="Enter first name"
                                                        value={addForm.firstName}
                                                        onChange={e => setAddForm({ ...addForm, firstName: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" placeholder="Enter last name"
                                                        value={addForm.lastName}
                                                        onChange={e => setAddForm({ ...addForm, lastName: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Email Address</label>
                                                    <input type="email" className="form-control" placeholder="Enter email address"
                                                        value={addForm.email}
                                                        onChange={e => setAddForm({ ...addForm, email: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Role</label>
                                                    <select className="form-select"
                                                        value={addForm.role}
                                                        onChange={e => setAddForm({ ...addForm, role: e.target.value })}
                                                    >
                                                        <option value="">Select role...</option>
                                                        <option value="BUYER_STAFF">Buyer Staff</option>
                                                        <option value="SELLER_STAFF">Seller Staff</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" className="form-control" placeholder="Enter password"
                                                        value={addForm.password}
                                                        onChange={e => setAddForm({ ...addForm, password: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="form-label">Confirm Password</label>
                                                    <input type="password" className="form-control" placeholder="Confirm password"
                                                        value={addForm.confirmPassword}
                                                        onChange={e => setAddForm({ ...addForm, confirmPassword: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={() => { setShowAddModal(false); setAddError('') }}>
                                            Cancel
                                        </button>
                                        <button type="button" className="btn btn-primary" onClick={handleAddUser} disabled={addLoading}>
                                            {addLoading ? 'Adding...' : 'Add User'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-links">
                    </div>
                    <div className="footer-credits">
                        <div className="footer-copyright">
                            2026
                            <a href="#">EIU</a>
                        </div>
                        <div className="footer-copyright">
                            <div className="credits">
                                Designed by
                                <a href="https://bootstrapmade.com/">ProjectAdin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default UserList