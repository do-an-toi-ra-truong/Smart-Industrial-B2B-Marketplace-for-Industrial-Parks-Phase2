import axiosInstance from './axiosInstance';

// ── Types ──
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

export async function fetchUsers(params?: {
  page?: number;
  size?: number;
  status?: string;
  role?: string;
  search?: string;
}): Promise<UserListResponse> {
  const res = await axiosInstance.get('/api/admin/users', { params });
  return res.data;
}

export async function fetchUserById(id: number): Promise<UserResponse> {
  const res = await axiosInstance.get(`/api/admin/users/${id}`);
  return res.data;
}

export async function createUser(data: CreateUserRequest): Promise<UserResponse> {
  const res = await axiosInstance.post('/api/admin/users', data);
  return res.data;
}

export async function updateUser(id: number, data: UpdateUserRequest): Promise<UserResponse> {
  const res = await axiosInstance.put(`/api/admin/users/${id}`, data);
  return res.data;
}

export async function deleteUser(id: number): Promise<void> {
  await axiosInstance.delete(`/api/admin/users/${id}`);
}