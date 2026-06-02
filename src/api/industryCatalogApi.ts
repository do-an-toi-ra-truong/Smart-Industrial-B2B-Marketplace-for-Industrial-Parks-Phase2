
const API_BASE = 'http://localhost:8080/api/sadmin/catalog/industries';

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
 * Fetches all industries with optional sector/search filters
 */
export async function fetchIndustries(params?: {
  sector?: string;
  search?: string;
}): Promise<IndustryCatalogResponse[]> {
  const query = new URLSearchParams();
  if (params?.sector) query.set('sector', params.sector);
  if (params?.search) query.set('search', params.search);

  const url = query.toString() ? `${API_BASE}?${query}` : API_BASE;
  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to fetch industries');
  }
  return res.json();
}

/**
 * GET /api/sadmin/catalog/industries/{id}
 * Fetches a single industry with its products
 */
export async function fetchIndustryById(id: number): Promise<IndustryCatalogResponse> {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Industry not found');
  }
  return res.json();
}

/**
 * POST /api/sadmin/catalog/industries
 * Creates a new industry
 */
export async function createIndustry(data: CreateIndustryRequest): Promise<IndustryCatalogResponse> {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to create industry');
  }
  return res.json();
}

/**
 * PUT /api/sadmin/catalog/industries/{id}
 * Updates an existing industry (partial update)
 */
export async function updateIndustry(id: number, data: UpdateIndustryRequest): Promise<IndustryCatalogResponse> {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to update industry');
  }
  return res.json();
}

/**
 * DELETE /api/sadmin/catalog/industries/{id}
 * Deletes an industry and all its products
 */
export async function deleteIndustry(id: number): Promise<void> {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to delete industry');
  }
}

/**
 * POST /api/sadmin/catalog/industries/{industryId}/products
 * Adds a product to an industry
 */
export async function addIndustryProduct(
  industryId: number,
  data: CreateIndustryProductRequest
): Promise<IndustryProductResponse> {
  const res = await fetch(`${API_BASE}/${industryId}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to add product');
  }
  return res.json();
}

/**
 * PUT /api/sadmin/catalog/industries/{industryId}/products/{productId}
 * Updates a product in an industry
 */
export async function updateIndustryProduct(
  industryId: number,
  productId: number,
  data: Partial<CreateIndustryProductRequest>
): Promise<IndustryProductResponse> {
  const res = await fetch(`${API_BASE}/${industryId}/products/${productId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to update product');
  }
  return res.json();
}

/**
 * DELETE /api/sadmin/catalog/industries/{industryId}/products/{productId}
 * Removes a product from an industry
 */
export async function removeIndustryProduct(industryId: number, productId: number): Promise<void> {
  const res = await fetch(`${API_BASE}/${industryId}/products/${productId}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to remove product');
  }
}
