import axiosInstance from './axiosInstance';

const PUBLIC_API_BASE = '/api/public/catalog/industries';

// ── Types ──
export interface IndustryProductResponse {
  id: number;
  name: string;
  description?: string;
  quantity: number;
  status: string;
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
}

// ── Public API (no auth needed) ──

export async function fetchPublicIndustries(params?: {
  sector?: string;
  search?: string;
}): Promise<IndustryCatalogResponse[]> {
  const res = await axiosInstance.get(PUBLIC_API_BASE, { params });
  return res.data;
}

export async function fetchPublicIndustryById(id: number): Promise<IndustryCatalogResponse> {
  const res = await axiosInstance.get(`${PUBLIC_API_BASE}/${id}`);
  return res.data;
}
