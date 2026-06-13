import axiosInstance from './axiosInstance';

const ADMIN_API = '/api/admin/metadata';
const PUBLIC_API = '/api/public/metadata';

// ── Types ──

export interface MetadataResponse {
  id: number;
  type: string;         // 'ZONE_CARD' | 'COMPANY_CARD'
  name: string;
  description?: string;
  address?: string;
  zone?: string;
  imagePath?: string;
  rating?: number;
  reviewCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateMetadataRequest {
  type: string;
  name: string;
  description?: string;
  address?: string;
  zone?: string;
  rating?: number;
  reviewCount?: number;
}

export interface UpdateMetadataRequest {
  name?: string;
  description?: string;
  address?: string;
  zone?: string;
  rating?: number;
  reviewCount?: number;
}

// ── Admin API (requires auth) ──

export async function fetchMetadata(params?: {
  type?: string;
}): Promise<MetadataResponse[]> {
  const res = await axiosInstance.get(ADMIN_API, { params });
  return res.data;
}

export async function fetchMetadataById(id: number): Promise<MetadataResponse> {
  const res = await axiosInstance.get(`${ADMIN_API}/${id}`);
  return res.data;
}

export async function createMetadata(data: CreateMetadataRequest): Promise<MetadataResponse> {
  const res = await axiosInstance.post(ADMIN_API, data);
  return res.data;
}

export async function updateMetadata(id: number, data: UpdateMetadataRequest): Promise<MetadataResponse> {
  const res = await axiosInstance.put(`${ADMIN_API}/${id}`, data);
  return res.data;
}

export async function deleteMetadata(id: number): Promise<void> {
  await axiosInstance.delete(`${ADMIN_API}/${id}`);
}

export async function uploadMetadataImage(id: number, file: File): Promise<MetadataResponse> {
  const formData = new FormData();
  formData.append('file', file);
  const res = await axiosInstance.post(`${ADMIN_API}/${id}/image`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
}

export async function deleteMetadataImage(id: number): Promise<void> {
  await axiosInstance.delete(`${ADMIN_API}/${id}/image`);
}

// ── Public API (no auth) ──

export async function fetchZoneCards(): Promise<MetadataResponse[]> {
  const res = await axiosInstance.get(`${PUBLIC_API}/zones`);
  return res.data;
}

export async function fetchCompanyCards(): Promise<MetadataResponse[]> {
  const res = await axiosInstance.get(`${PUBLIC_API}/companies`);
  return res.data;
}
