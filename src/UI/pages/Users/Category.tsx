import React, { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import { fetchPublicIndustries } from "../../../api/publicCatalogApi"
import type { IndustryCatalogResponse } from "../../../api/publicCatalogApi"

const Category = () => {
    const [industries, setIndustries] = useState<IndustryCatalogResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSector, setSelectedSector] = useState<string | null>(null);
    const [selectedIndustries, setSelectedIndustries] = useState<number[]>([]);

    useEffect(() => {
        fetchPublicIndustries()
            .then(data => {
                setIndustries(data.filter(i => i.status === 'ACTIVE'));
            })
            .catch(err => console.error('Failed to load industries:', err))
            .finally(() => setLoading(false));
    }, []);

    // Get unique sectors
    const sectors = Array.from(new Set(industries.map(i => i.sector)));

    // Filter industries by selected sector and search term
    const filteredIndustries = industries.filter(ind => {
        const matchesSector = !selectedSector || ind.sector === selectedSector;
        const matchesSearch = !searchTerm || ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ind.products?.some(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesSelected = selectedIndustries.length === 0 || selectedIndustries.includes(ind.id);
        return matchesSector && matchesSearch && matchesSelected;
    });

    const toggleIndustry = (id: number) => {
        setSelectedIndustries(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <>
            <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container">
                        <nav className="breadcrumbs">
                            <ol>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="current">Category</li>
                            </ol>
                        </nav>
                        <h1>Category</h1>
                    </div>
                </div>
                {/* End Page Title */}
                <div className="container">
                    <div className="row h-100">
                        <div className="col-lg-3 sidebar h-100 pt-0">
                            <div className="widgets-container pt-0 mt-0">
                                {/* Search */}
                                <div className="search-widget widget-item mt-0">
                                    <h3 className="widget-title mt-0">Search Products</h3>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search..."
                                            value={searchTerm}
                                            onChange={e => setSearchTerm(e.target.value)}
                                        />
                                        <button className="btn btn-outline-secondary" type="button">
                                            Search
                                        </button>
                                    </div>
                                </div>

                                {/* Sector Filter */}
                                <div className="kcn-filter-widget widget-item">
                                    <h3 className="widget-title">Sector</h3>
                                    <div className="d-flex flex-column gap-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="sector_all"
                                                checked={!selectedSector}
                                                onChange={() => setSelectedSector(null)}
                                            />
                                            <label className="form-check-label" htmlFor="sector_all">
                                                All Sectors
                                            </label>
                                        </div>
                                        {sectors.map(sector => (
                                            <div className="form-check" key={sector}>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id={`sector_${sector}`}
                                                    checked={selectedSector === sector}
                                                    onChange={() => setSelectedSector(sector)}
                                                />
                                                <label className="form-check-label" htmlFor={`sector_${sector}`}>
                                                    {sector}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Industry Filter */}
                                <div className="product-categories-widget widget-item">
                                    <h3 className="widget-title">Industries</h3>
                                    <div className="d-flex flex-column gap-2">
                                        {industries.map(ind => (
                                            <div className="form-check" key={ind.id}>
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`cat_${ind.id}`}
                                                    checked={selectedIndustries.includes(ind.id)}
                                                    onChange={() => toggleIndustry(ind.id)}
                                                />
                                                <label className="form-check-label" htmlFor={`cat_${ind.id}`}>
                                                    {ind.name} <span className="text-muted small">({ind.subCategories})</span>
                                                </label>
                                            </div>
                                        ))}
                                        {industries.length === 0 && !loading && (
                                            <p className="text-muted small">No industries available</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 h-100">
                            {/* Industries Grid */}
                            <section id="category-product-list" className="category-product-list section">
                                <div>
                                    {loading ? (
                                        <div className="text-center py-5">
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    ) : filteredIndustries.length === 0 ? (
                                        <div className="text-center py-5 text-muted">
                                            <i className="bi bi-inbox fs-1 d-block mb-2"></i>
                                            <p>No industries found</p>
                                        </div>
                                    ) : (
                                        <div className="row g-4">
                                            {filteredIndustries.map(ind => (
                                                <div className="col-lg-4 col-md-6" key={ind.id}>
                                                    <div className="product-box border rounded shadow-sm h-100 bg-white">
                                                        <div className="product-thumb position-relative overflow-hidden p-3 text-center"
                                                            style={{
                                                                backgroundColor: ind.iconBg || 'rgba(59,130,246,0.1)',
                                                                minHeight: 120,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center'
                                                            }}>
                                                            <span className="badge bg-success position-absolute top-0 start-0 m-3">
                                                                {ind.status}
                                                            </span>
                                                            <i className={ind.icon || 'bi bi-box-fill'}
                                                                style={{
                                                                    fontSize: '3rem',
                                                                    color: ind.iconColor || '#2563eb'
                                                                }} />
                                                        </div>
                                                        <div className="product-content p-3 pt-2">
                                                            <div className="mb-2">
                                                                <span className="badge bg-light text-secondary border">
                                                                    <i className="bi bi-grid me-1" />
                                                                    {ind.sector}
                                                                </span>
                                                            </div>
                                                            <h5 className="product-title mb-2">
                                                                <span className="text-decoration-none fw-bold" style={{ color: "#353535" }}>
                                                                    {ind.name}
                                                                </span>
                                                            </h5>
                                                            {ind.description && (
                                                                <p className="text-muted small mb-2" style={{
                                                                    display: '-webkit-box',
                                                                    WebkitLineClamp: 2,
                                                                    WebkitBoxOrient: 'vertical',
                                                                    overflow: 'hidden'
                                                                }}>
                                                                    {ind.description}
                                                                </p>
                                                            )}
                                                            <div className="d-flex justify-content-between align-items-end border-top pt-3">
                                                                <div>
                                                                    <small className="text-muted d-block">
                                                                        {ind.subCategories} products · {ind.enterprises} enterprises
                                                                    </small>
                                                                </div>
                                                                <Link to={`/category`} className="btn btn-primary btn-sm rounded-pill px-3">
                                                                    <i className="bi bi-arrow-right me-1" /> View
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Category