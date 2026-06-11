import axiosInstance from './axiosInstance';

// ── Types ──
export interface UserResponse {
  id: number;
  parentId?: number;
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
  parentId?: number;
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

// ── Role-aware base URL ──
function getApiBase(role?: string): string {
  if (role === 'SUPER_ADMIN') return '/api/sadmin/users';
  if (role === 'IP_ADMIN') return '/api/ipadmin/users';
  return '/api/admin/users';
}

// ── API Functions ──

export async function fetchUsers(params?: {
  page?: number;
  size?: number;
  status?: string;
  role?: string;
  search?: string;
}, callerRole?: string): Promise<UserListResponse> {
  const base = getApiBase(callerRole);
  const res = await axiosInstance.get(base, { params });
  return res.data;
}

export async function fetchUserById(id: number, callerRole?: string): Promise<UserResponse> {
  const base = getApiBase(callerRole);
  const res = await axiosInstance.get(`${base}/${id}`);
  return res.data;
}

export async function createUser(data: CreateUserRequest, callerRole?: string): Promise<UserResponse> {
  const base = getApiBase(callerRole);
  const res = await axiosInstance.post(base, data);
  return res.data;
}

export async function updateUser(id: number, data: UpdateUserRequest, callerRole?: string): Promise<UserResponse> {
  const base = getApiBase(callerRole);
  const res = await axiosInstance.put(`${base}/${id}`, data);
  return res.data;
}

export async function deleteUser(id: number, callerRole?: string): Promise<void> {
  const base = getApiBase(callerRole);
  await axiosInstance.delete(`${base}/${id}`);
}

export async function softDeleteUser(id: number, callerRole?: string): Promise<void> {
  const base = getApiBase(callerRole);
  await axiosInstance.put(`${base}/${id}/deactivate`);
}