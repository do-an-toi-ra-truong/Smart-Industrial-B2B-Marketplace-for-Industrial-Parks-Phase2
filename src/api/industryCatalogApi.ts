import axiosInstance from './axiosInstance';

const API_BASE = '/api/sadmin/catalog/industries';

// ── Types matching the backend DTOs ──

export interface IndustryProductResponse {
  id: number;
  name: string;
  description?: string;
  quantity: number;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IndustryCatalogResponse {
  id: number;
  name: string;
  sector: string;
  icon?: string;
  iconBg?: string;
  iconColor?: string;
  description?: string;
  enterprises: number;
  status: string;
  subCategories: number;
  products: IndustryProductResponse[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateIndustryRequest {
  name: string;
  sector: string;
  icon?: string;
  iconBg?: string;
  iconColor?: string;
  description?: string;
  enterprises?: number;
  status?: string;
}

export interface UpdateIndustryRequest {
  name?: string;
  sector?: string;
  icon?: string;
  iconBg?: string;
  iconColor?: string;
  description?: string;
  enterprises?: number;
  status?: string;
}

export interface CreateIndustryProductRequest {
  name: string;
  description?: string;
  quantity?: number;
  status?: string;
}

// ── API Functions ──

/**
 * GET /api/sadmin/catalog/industries
 */
export async function fetchIndustries(params?: {
  sector?: string;
  search?: string;
}): Promise<IndustryCatalogResponse[]> {
  const res = await axiosInstance.get(API_BASE, { params });
  return res.data;
}

/**
 * GET /api/sadmin/catalog/industries/{id}
 */
export async function fetchIndustryById(id: number): Promise<IndustryCatalogResponse> {
  const res = await axiosInstance.get(`${API_BASE}/${id}`);
  return res.data;
}

/**
 * POST /api/sadmin/catalog/industries
 */
export async function createIndustry(data: CreateIndustryRequest): Promise<IndustryCatalogResponse> {
  const res = await axiosInstance.post(API_BASE, data);
  return res.data;
}

/**
 * PUT /api/sadmin/catalog/industries/{id}
 */
export async function updateIndustry(id: number, data: UpdateIndustryRequest): Promise<IndustryCatalogResponse> {
  const res = await axiosInstance.put(`${API_BASE}/${id}`, data);
  return res.data;
}

/**
 * DELETE /api/sadmin/catalog/industries/{id}
 */
export async function deleteIndustry(id: number): Promise<void> {
  await axiosInstance.delete(`${API_BASE}/${id}`);
}

/**
 * POST /api/sadmin/catalog/industries/{industryId}/products
 */
export async function addIndustryProduct(
  industryId: number,
  data: CreateIndustryProductRequest
): Promise<IndustryProductResponse> {
  const res = await axiosInstance.post(`${API_BASE}/${industryId}/products`, data);
  return res.data;
}

/**
 * PUT /api/sadmin/catalog/industries/{industryId}/products/{productId}
 */
export async function updateIndustryProduct(
  industryId: number,
  productId: number,
  data: Partial<CreateIndustryProductRequest>
): Promise<IndustryProductResponse> {
  const res = await axiosInstance.put(`${API_BASE}/${industryId}/products/${productId}`, data);
  return res.data;
}

/**
 * DELETE /api/sadmin/catalog/industries/{industryId}/products/{productId}
 */
export async function removeIndustryProduct(industryId: number, productId: number): Promise<void> {
  await axiosInstance.delete(`${API_BASE}/${industryId}/products/${productId}`);
}
