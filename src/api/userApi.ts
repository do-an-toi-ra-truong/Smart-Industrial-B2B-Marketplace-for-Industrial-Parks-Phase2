
const API_BASE = 'http://localhost:8080/api/admin/users';

// ── Types matching the backend DTOs ──

export interface UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  avatarUrl?: string;
  department?: string;
  jobTitle?: string;
  officeLocation?: string;
  employeeId?: string;
  startDate?: string;
  role: string;
  status: string;
  emailVerified?: boolean;
  twoFactorEnabled?: boolean;
  forcePasswordChange?: boolean;
  lastPasswordChange?: string;
  lastActive?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserListResponse {
  users: UserResponse[];
  currentPage: number;
  totalPages: number;
  totalUsers: number;
  activeCount: number;
  inactiveCount: number;
  suspendedCount: number;
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  department?: string;
  jobTitle?: string;
  officeLocation?: string;
  startDate?: string;
  status?: string;
}

export interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  department?: string;
  jobTitle?: string;
  officeLocation?: string;
  startDate?: string;
  role?: string;
  status?: string;
  emailVerified?: boolean;
  twoFactorEnabled?: boolean;
  forcePasswordChange?: boolean;
  newPassword?: string;
  confirmPassword?: string;
}

// ── API Functions ──

/**
 * GET /api/admin/users
 * Fetches paginated user list with optional filters
 */
export async function fetchUsers(params?: {
  page?: number;
  size?: number;
  status?: string;
  role?: string;
  search?: string;
}): Promise<UserListResponse> {
  const query = new URLSearchParams();
  if (params?.page !== undefined) query.set('page', String(params.page));
  if (params?.size !== undefined) query.set('size', String(params.size));
  if (params?.status) query.set('status', params.status);
  if (params?.role) query.set('role', params.role);
  if (params?.search) query.set('search', params.search);

  const url = query.toString() ? `${API_BASE}?${query}` : API_BASE;
  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to fetch users');
  }
  return res.json();
}

/**
 * GET /api/admin/users/{id}
 * Fetches a single user's full details
 */
export async function fetchUserById(id: number): Promise<UserResponse> {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'User not found');
  }
  return res.json();
}

/**
 * POST /api/admin/users
 * Creates a new user
 */
export async function createUser(data: CreateUserRequest): Promise<UserResponse> {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to create user');
  }
  return res.json();
}

/**
 * PUT /api/admin/users/{id}
 * Updates an existing user (partial update)
 */
export async function updateUser(id: number, data: UpdateUserRequest): Promise<UserResponse> {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to update user');
  }
  return res.json();
}

/**
 * DELETE /api/admin/users/{id}
 * Deletes a user permanently
 */
export async function deleteUser(id: number): Promise<void> {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to delete user');
  }
}
