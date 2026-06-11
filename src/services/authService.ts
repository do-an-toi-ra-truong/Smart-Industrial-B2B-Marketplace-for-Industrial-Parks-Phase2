import axiosInstance from '../api/axiosInstance';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
}

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const res = await axiosInstance.post('/api/auth/login', { email, password });
  return res.data;
};

export const logout = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getSavedUser = () => {
  const raw = localStorage.getItem('user');
  return raw ? JSON.parse(raw) : null;
};