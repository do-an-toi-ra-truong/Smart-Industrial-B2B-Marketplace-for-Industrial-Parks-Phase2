import axiosInstance from './axiosInstance';

const ADMIN_API = '/api/admin/products';
const PUBLIC_API = '/api/public/products';

// ── Types ──

export interface ProductResponse {
  id: number;
  name: string;
  description?: string;
  status: string;
  quantity: number;
  industryId?: number;
  industryName?: string;
  industrySector?: string;
  imagePath?: string;
  category?: string;
  badge?: string;
  isFeatured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateProductRequest {
  name: string;
  description?: string;
  quantity?: number;
  status?: string;
  industryId: number;
  category?: string;
  badge?: string;
  isFeatured?: boolean;
}

export interface UpdateProductRequest {
  name?: string;
  description?: string;
  quantity?: number;
  status?: string;
  industryId?: number;
  category?: string;
  badge?: string;
  isFeatured?: boolean;
}

// ── Admin API (requires auth) ──

export async function fetchProducts(params?: {
  status?: string;
  search?: string;
  industryId?: number;
}): Promise<ProductResponse[]> {
  const res = await axiosInstance.get(ADMIN_API, { params });
  return res.data;
}

export async function fetchProductById(id: number): Promise<ProductResponse> {
  const res = await axiosInstance.get(`${ADMIN_API}/${id}`);
  return res.data;
}

export async function createProduct(data: CreateProductRequest): Promise<ProductResponse> {
  const res = await axiosInstance.post(ADMIN_API, data);
  return res.data;
}

export async function updateProduct(id: number, data: UpdateProductRequest): Promise<ProductResponse> {
  const res = await axiosInstance.put(`${ADMIN_API}/${id}`, data);
  return res.data;
}

export async function deleteProduct(id: number): Promise<void> {
  await axiosInstance.delete(`${ADMIN_API}/${id}`);
}

export async function uploadProductImage(id: number, file: File): Promise<ProductResponse> {
  const formData = new FormData();
  formData.append('file', file);
  const res = await axiosInstance.post(`${ADMIN_API}/${id}/image`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
}

export async function deleteProductImage(id: number): Promise<void> {
  await axiosInstance.delete(`${ADMIN_API}/${id}/image`);
}

// ── Public API (no auth) ──

export async function fetchPublicProducts(params?: {
  industryId?: number;
  search?: string;
}): Promise<ProductResponse[]> {
  const res = await axiosInstance.get(PUBLIC_API, { params });
  return res.data;
}

export async function fetchPublicProductById(id: number): Promise<ProductResponse> {
  const res = await axiosInstance.get(`${PUBLIC_API}/${id}`);
  return res.data;
}

export async function fetchNewProducts(): Promise<ProductResponse[]> {
  const res = await axiosInstance.get(`${PUBLIC_API}/new`);
  return res.data;
}

export async function fetchFeaturedProducts(): Promise<ProductResponse[]> {
  const res = await axiosInstance.get(`${PUBLIC_API}/featured`);
  return res.data;
}
