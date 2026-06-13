import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchNewProducts, fetchFeaturedProducts } from '../../../api/productApi';
import type { ProductResponse } from '../../../api/productApi';
import { fetchZoneCards, fetchCompanyCards } from '../../../api/metadataApi';
import type { MetadataResponse } from '../../../api/metadataApi';

const HomePage = () => {
  // ── API States ──
  const [newProducts, setNewProducts] = useState<ProductResponse[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<ProductResponse[]>([]);
  const [zoneCards, setZoneCards] = useState<MetadataResponse[]>([]);
  const [companyCards, setCompanyCards] = useState<MetadataResponse[]>([]);

  // ── Fetch Data ──
  useEffect(() => {
    const loadData = async () => {
      try {
        const [newProds, featProds, zones, companies] = await Promise.all([
          fetchNewProducts(),
          fetchFeaturedProducts(),
          fetchZoneCards(),
          fetchCompanyCards()
        ]);
        setNewProducts(newProds || []);
        setFeaturedProducts(featProds || []);
        setZoneCards(zones || []);
        setCompanyCards(companies || []);
      } catch (err) {
        console.error("Error loading HomePage data:", err);
      }
    };
    loadData();
  }, []);

  // ── Hero Slider ──
  const [heroIndex, setHeroIndex] = useState(0);
  const heroSlides = 2; // total slides
  useEffect(() => {
    const timer = setInterval(() => setHeroIndex(prev => (prev + 1) % heroSlides), 5000);
    return () => clearInterval(timer);
  }, []);
  const heroNext = () => setHeroIndex(prev => (prev + 1) % heroSlides);
  const heroPrev = () => setHeroIndex(prev => (prev - 1 + heroSlides) % heroSlides);

  // ── Product filter (New Products) ──
  const [newProdFilter, setNewProdFilter] = useState('all');

  // ── Product filter (Most Buy Products) ──
  const [mostBuyFilter, setMostBuyFilter] = useState('all');

  // ── Zone filter for companies ──
  const [zoneFilter, setZoneFilter] = useState('*');

  // ── Brand Carousel ──
  const [brandOffset, setBrandOffset] = useState(0);
  const brandCount = 8;
  const brandsVisible = 5;
  useEffect(() => {
    const timer = setInterval(() => setBrandOffset(prev => (prev + 1) % brandCount), 2500);
    return () => clearInterval(timer);
  }, []);

  const brandItems = [
    { src: 'assets/images/boge-logo.png', alt: 'BOGE' },
    { src: 'assets/images/leica-logo.png', alt: 'Leica' },
    { src: 'assets/images/specim-logo.png', alt: 'Specim' },
    { src: 'assets/images/smalley-logo.png', alt: 'Smalley' },
    { src: 'assets/images/topsolid-logo.png', alt: 'TopSolid' },
    { src: 'assets/images/turck-logo.png', alt: 'Turck' },
    { src: 'assets/images/evident-logo.png', alt: 'Evident' },
    { src: 'assets/images/lmao-logo.png', alt: 'Imao' },
  ];

  return (
    <>
      <main className="main">
        <section id="hero" className="hero section" style={{ padding: 0 }}>
          <div className="hero-swiper" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Slide 1 */}
            <div style={{ display: heroIndex === 0 ? 'block' : 'none', position: 'relative', minHeight: '75vh' }}>
              <div className="hero-bg" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920')` }}>
              </div>
              <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center" style={{ minHeight: '85vh', padding: '80px 0' }}>
                  <div className="col-lg-7 col-md-9 hero-content" style={{ opacity: 1, transform: 'none' }}>
                    <span className="badge bg-primary rounded-pill mb-3 px-3 py-2">
                      Vietnam's #1 B2B Platform
                    </span>
                    <h1 className="display-3 fw-bold text-white mb-4">
                      Connect with Verified Industrial Suppliers
                    </h1>
                    <p className="lead text-white-50 mb-5 w-75">
                      Access a network of 5,000+ audited factories in VSIP, Amata,
                      and My Phuoc industrial zones.
                    </p>
                    <div className="d-flex gap-3">
                      <a href="#company-results" className="btn btn-primary rounded-pill px-5 py-3 fw-bold">
                        Find Suppliers
                      </a>
                      <a href="#" className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold">
                        Join as Supplier
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div style={{ display: heroIndex === 1 ? 'block' : 'none', position: 'relative', minHeight: '75vh' }}>
              <div className="hero-bg" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920')` }}>
              </div>
              <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center" style={{ minHeight: '85vh', padding: '80px 0' }}>
                  <div className="col-lg-7 col-md-9 hero-content" style={{ opacity: 1, transform: 'none' }}>
                    <span className="badge bg-warning text-dark rounded-pill mb-3 px-3 py-2">
                      Global Logistics
                    </span>
                    <h1 className="display-3 fw-bold text-white mb-4">
                      Seamless Export from Vietnam to the World
                    </h1>
                    <p className="lead text-white-50 mb-5 w-75">
                      Integrated logistics solutions, customs clearance, and freight
                      forwarding for industrial goods.
                    </p>
                    <a href="#" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-dark">
                      Explore Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next text-white" onClick={heroNext} style={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }} />
            <div className="swiper-button-prev text-white" onClick={heroPrev} style={{ cursor: 'pointer', position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }} />
            <div style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10 }}>
              {[0, 1].map(i => (
                <span key={i} onClick={() => setHeroIndex(i)} style={{ width: 12, height: 12, borderRadius: '50%', background: heroIndex === i ? '#0d6efd' : 'rgba(255,255,255,0.5)', cursor: 'pointer', display: 'inline-block', transition: 'background 0.3s' }} />
              ))}
            </div>
          </div>
        </section >
        {/* ===== New Products ===== */}
        < section id="top-buy-products" className="tbp-section" >
          <div className="container">
            <div className="tbp-header">
              <div className="tbp-header-left">
                <h2 className="tbp-title">New Products</h2>
              </div>
              <div className="tbp-header-right">
                <div className="tbp-filter-tabs" id="tbpFilterTabs">
                  {['all', 'electronics', 'machinery', 'raw-materials', 'chemicals'].map(cat => (
                    <button key={cat} className={`tbp-tab${newProdFilter === cat ? ' active' : ''}`} onClick={() => setNewProdFilter(cat)}>
                      {cat === 'all' ? 'All' : cat === 'raw-materials' ? 'Raw Materials' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="tbp-grid" id="tbpGridNew">
              {newProducts
                .filter(p => newProdFilter === 'all' || p.category === newProdFilter)
                .map(p => (
                <div className="tbp-card" key={p.id} data-cat={p.category}>
                  <div className="tbp-card-img-wrap">
                    <img src={p.imagePath || 'assets/images/product-1.webp'} alt={p.name} className="tbp-card-img" loading="lazy" />
                    {p.badge && (
                      <span className={`tbp-badge tbp-badge--${p.badge}`}>
                        <i className={`bi ${p.badge === 'hot' ? 'bi-fire' : p.badge === 'top' ? 'bi-trophy' : 'bi-stars'}`} />
                        {p.badge.charAt(0).toUpperCase() + p.badge.slice(1)}
                      </span>
                    )}
                    <div className="tbp-card-actions">
                      <button className="tbp-action-btn" title="Quick view"><i className="bi bi-eye" /></button>
                      <button className="tbp-action-btn" title="Add to cart"><i className="bi bi-cart-plus" /></button>
                    </div>
                  </div>
                  <div className="tbp-card-body">
                    <div className="tbp-card-cat">{p.industryName || p.category || 'Product'}</div>
                    <h3 className="tbp-card-name">{p.name}</h3>
                    <div className="tbp-card-footer">
                      <Link to="/product-details" className="tbp-btn-view">View</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tbp-footer-cta">
              <Link to="/category" className="tbp-cta-link">
                Browse Full Catalog <i className="bi bi-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </section >
        {/* ===== Most Buy Products ===== */}
        < section id="most-buy-products" className="tbp-section" >
          <div className="container">
            <div className="tbp-header">
              <div className="tbp-header-left">
                <span className="tbp-eyebrow"><i className="bi bi-fire me-1" /> Trending Now</span>
                <h2 className="tbp-title">Most Buy Products</h2>
              </div>
              <div className="tbp-header-right">
                <div className="tbp-filter-tabs" id="tbpFilterTabsMostBuy">
                  {['all', 'electronics', 'machinery', 'raw-materials', 'chemicals'].map(cat => (
                    <button key={cat} className={`tbp-tab${mostBuyFilter === cat ? ' active' : ''}`} onClick={() => setMostBuyFilter(cat)}>
                      {cat === 'all' ? 'All' : cat === 'raw-materials' ? 'Raw Materials' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="tbp-grid" id="tbpGridMostBuy">
              {featuredProducts
                .filter(p => mostBuyFilter === 'all' || p.category === mostBuyFilter)
                .map(p => (
                <div className="tbp-card" key={p.id} data-cat={p.category}>
                  <div className="tbp-card-img-wrap">
                    <img src={p.imagePath || 'assets/images/product-1.webp'} alt={p.name} className="tbp-card-img" loading="lazy" />
                    {p.badge && (
                      <span className={`tbp-badge tbp-badge--${p.badge}`}>
                        <i className={`bi ${p.badge === 'hot' ? 'bi-fire' : p.badge === 'top' ? 'bi-trophy' : 'bi-stars'}`} />
                        {p.badge.charAt(0).toUpperCase() + p.badge.slice(1)}
                      </span>
                    )}
                    <div className="tbp-card-actions">
                      <button className="tbp-action-btn" title="Quick view"><i className="bi bi-eye" /></button>
                      <button className="tbp-action-btn" title="Add to cart"><i className="bi bi-cart-plus" /></button>
                    </div>
                  </div>
                  <div className="tbp-card-body">
                    <div className="tbp-card-cat">{p.industryName || p.category || 'Product'}</div>
                    <h3 className="tbp-card-name">{p.name}</h3>
                    <div className="tbp-card-footer">
                      <Link to="/product-details" className="tbp-btn-view">View</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tbp-footer-cta">
              <Link to="/category" className="tbp-cta-link">
                Browse Full Catalog <i className="bi bi-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </section >
        {/* 4 Feature Industrial zones */}
        < section id="zone-selection" className="section py-5 bg-white" >
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold mb-3">
                Explore Industrial Ecosystems
              </h1>
              <p className="lead text-muted">
                Click on an Industrial Zone to view its verified suppliers and manufacturers.
              </p>
            </div>
            <div className="row g-4 justify-content-center">
              {zoneCards.map(z => (
                <div className="col-lg-3 col-md-6" key={z.id}>
                  <div className="card h-80 shadow-sm zone-filter-card" style={{ cursor: 'default' }}>
                    <div className="position-relative zone-btn" onClick={() => setZoneFilter(`.zone-${z.zone}`)} style={{ height: '240px', overflow: 'hidden', cursor: 'pointer' }}>
                      <img src={z.imagePath || 'assets/images/kcnVsipBD.png'} className="card-img-top w-100 h-100" style={{ objectFit: 'cover' }} alt={z.name} />
                      <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                        <h3 className="text-white fw-bold mb-0">{z.name}</h3>
                        <small className="text-white-50"><i className="bi bi-geo-alt" /> {z.address}</small>
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <button className="btn btn-outline-primary rounded-pill px-4 zone-btn" onClick={() => setZoneFilter(`.zone-${z.zone}`)}>
                        View Companies
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section >
        <section id="company-results" className="section py-5 bg-white">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div>
                <h2 className="h3 fw-bold text-dark mb-1">Companies by Industrial Zone</h2>
                <p className="text-muted mb-0">Verified and trusted enterprises</p>
              </div>
            </div>
            <div className="product-filters isotope-filters mb-5">
              <ul className="d-flex flex-wrap gap-2 list-unstyled align-items-center">
                <li onClick={() => setZoneFilter('*')} className={`${zoneFilter === '*' ? 'filter-active' : ''} btn btn-light rounded-3 px-3 border`} style={{ cursor: 'pointer' }}>All</li>
                {zoneCards.map(z => (
                  <li key={z.id} onClick={() => setZoneFilter(`.zone-${z.zone}`)} className={`${zoneFilter === `.zone-${z.zone}` ? 'filter-active' : ''} btn btn-light rounded-3 px-3 border`} style={{ cursor: 'pointer' }}>{z.name}</li>
                ))}
              </ul>
            </div>
            <div className="row g-4 isotope-container" id="company-grid">
              {companyCards
                .filter(c => zoneFilter === '*' || zoneFilter === `.zone-${c.zone}`)
                .map(c => (
                <div className={`col-md-6 col-lg-3 isotope-item zone-${c.zone}`} key={c.id}>
                  <div className="card h-100 border rounded-3 shadow-sm hover-lift group">
                    <div className="position-relative overflow-hidden rounded-top" style={{ height: '180px' }}>
                      <img src={c.imagePath || 'https://images.unsplash.com/photo-1655876726270-2caec425d0cd?auto=format&fit=crop&q=80&w=400'} className="card-img-top w-100 h-100 object-fit-cover" alt={c.name} />
                      <div className="position-absolute top-0 end-0 m-2 px-2 py-1 bg-success text-white rounded small fw-bold">
                        <i className="bi bi-check-circle-fill" /> Verified
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <h6 className="card-title fw-bold text-dark mb-1">{c.name}</h6>
                      <div className="text-muted small mb-2">
                        <i className="bi bi-geo-alt" /> {c.address}
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="small text-warning fw-bold">
                          <i className="bi bi-star-fill" /> {c.rating} ({c.reviewCount})
                        </div>
                        <Link to="/company-detail" className="text-primary small fw-bold text-decoration-none">
                          Details <i className="bi bi-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 d-md-none">
              <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2">
                View All <i className="bi bi-arrow-right" />
              </button>
            </div>
          </div>
        </section>
        {/* ===== News & Industry Insights ===== */}
        <section id="news-insights" className="ni-section">
          <div className="container">
            {/* Section Header */}
            <div className="ni-header">
              <div className="ni-header-left">
                <span className="ni-eyebrow">
                  <i className="bi bi-newspaper me-1" />
                  Market Intelligence
                </span>
                <h2 className="ni-title">
                  News & Industry Insights
                </h2>
                <p className="ni-sub">
                  Stay ahead with the latest industrial trends, analysis, and supply-chain updates from
                  Vietnam and the region.
                </p>
              </div>
              <div className="ni-header-right">
                <a href="#" className="ni-view-all">
                  View All Articles
                  <i className="bi bi-arrow-right ms-1" />
                </a>
              </div>
            </div>
            <div className="ni-layout">
              {/* Featured Article (left, large) */}
              <article className="ni-featured">
                <a href="#" className="ni-featured-link">
                  <div className="ni-featured-img-wrap">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=900" alt="Vietnam Manufacturing Growth" className="ni-featured-img" loading="lazy" />
                    <span className="ni-cat-tag ni-cat-tag--primary">
                      Market Report
                    </span>
                  </div>
                  <div className="ni-featured-body">
                    <div className="ni-featured-meta">
                      <span className="ni-meta-date">
                        <i className="bi bi-calendar3 me-1" />
                        Apr 19, 2026
                      </span>
                      <span className="ni-meta-read">
                        <i className="bi bi-clock me-1" />
                        6 min read
                      </span>
                    </div>
                    <h3 className="ni-featured-title">
                      Vietnam's Industrial Output Rises 14% in Q1 2026 — Electronics Leads the
                      Surge
                    </h3>
                    <p className="ni-featured-excerpt">
                      Government data confirms Vietnam's manufacturing sector is sustaining
                      strong momentum, with electronics and machinery exports driving record-breaking numbers from VSIP and
                      Amata industrial zones.
                    </p>
                    <span className="ni-read-more">
                      Read Full Report
                      <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </a>
              </article>
              {/* Side Articles (right, list) */}
              <div className="ni-side-list">
                <article className="ni-side-card">
                  <a href="#" className="ni-side-link">
                    <div className="ni-side-img-wrap">
                      <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" alt="Smart Factory" className="ni-side-img" loading="lazy" />
                    </div>
                    <div className="ni-side-body">
                      <div className="ni-side-meta">
                        <span>
                          <i className="bi bi-calendar3 me-1" />
                          Apr 17, 2026
                        </span>
                        <span>
                          <i className="bi bi-clock me-1" />
                          4 min
                        </span>
                      </div>
                      <h4 className="ni-side-title">
                        Smart Factory Adoption Accelerates Across Vietnamese Industrial Zones
                      </h4>
                      <p className="ni-side-excerpt">
                        Over 60% of manufacturers in VSIP I report deploying IoT sensors and
                        automated QC systems in the past 12 months.
                      </p>
                    </div>
                  </a>
                </article>
                <article className="ni-side-card">
                  <a href="#" className="ni-side-link">
                    <div className="ni-side-img-wrap">
                      <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400" alt="Supply Chain" className="ni-side-img" loading="lazy" />
                    </div>
                    <div className="ni-side-body">
                      <div className="ni-side-meta">
                        <span>
                          <i className="bi bi-calendar3 me-1" />
                          Apr 14, 2026
                        </span>
                        <span>
                          <i className="bi bi-clock me-1" />
                          5 min
                        </span>
                      </div>
                      <h4 className="ni-side-title">
                        Global Raw Material Prices: Steel and Aluminium Stabilize After 4-Month
                        Rally
                      </h4>
                      <p className="ni-side-excerpt">
                        Procurement teams should lock in Q2 contracts now as analysts forecast a
                        possible reversal driven by Chinese demand slowdown.
                      </p>
                    </div>
                  </a>
                </article>
                <article className="ni-side-card">
                  <a href="#" className="ni-side-link">
                    <div className="ni-side-img-wrap">
                      <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400" alt="Energy Transition" className="ni-side-img" loading="lazy" />
                    </div>
                    <div className="ni-side-body">
                      <div className="ni-side-meta">
                        <span>
                          <i className="bi bi-calendar3 me-1" />
                          Apr 11, 2026
                        </span>
                        <span>
                          <i className="bi bi-clock me-1" />
                          3 min
                        </span>
                      </div>
                      <h4 className="ni-side-title">
                        Vietnam Targets 40% Renewable Energy in Industrial Zones by 2030
                      </h4>
                      <p className="ni-side-excerpt">
                        New government roadmap mandates solar rooftop adoption for factories over 5
                        hectares, creating major procurement opportunities.
                      </p>
                    </div>
                  </a>
                </article>
              </div>
              {/* /ni-side-list */}
            </div>
            {/* /ni-layout */}
            {/* Stats Bar */}
          </div>
        </section>
        {/* /News & Industry Insights */}
        {/* Checklist Modal */}
        <div className="modal fade" id="checklistModal" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content rounded-4 border-0 shadow-lg">
              <div className="modal-header border-bottom-0 pb-0">
                <div>
                  <h4 className="modal-title fw-bold">
                    Find Your Supplier
                  </h4>
                  <p className="text-muted small mb-0">
                    Select criteria to refine your search results.
                  </p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body p-4">
                <form id="filterForm">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 h-100">
                        <h6 className="fw-bold mb-3 text-primary">
                          <i className="bi bi-geo-alt-fill" />
                          Province
                        </h6>
                        <div className="d-flex flex-column gap-2" style={{ 'maxHeight': '150px', 'overflowY': 'auto' }}>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".prov-binhduong" id="chk_bd" />
                            <label className="form-check-label" htmlFor="chk_bd">
                              Bình
                              Dương
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".prov-dongnai" id="chk_dn" />
                            <label className="form-check-label" htmlFor="chk_dn">
                              Đồng
                              Nai
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".prov-haiphong" id="chk_hp" />
                            <label className="form-check-label" htmlFor="chk_hp">
                              Hải
                              Phòng
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".prov-hcm" id="chk_hcm" />
                            <label className="form-check-label" htmlFor="chk_hcm">
                              TP. Hồ Chí
                              Minh
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".prov-bacninh" id="chk_bn" />
                            <label className="form-check-label" htmlFor="chk_bn">
                              Bắc
                              Ninh
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 h-100">
                        <h6 className="fw-bold mb-3 text-danger">
                          <i className="bi bi-grid-fill" />
                          Industry
                        </h6>
                        <div className="d-flex flex-column gap-2">
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".cat-mech" id="chk_mech" />
                            <label className="form-check-label" htmlFor="chk_mech">
                              Mechanical
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".cat-elec" id="chk_elec" />
                            <label className="form-check-label" htmlFor="chk_elec">
                              Electronics
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".cat-chem" id="chk_chem" />
                            <label className="form-check-label" htmlFor="chk_chem">
                              Chemicals
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".cat-pack" id="chk_pack" />
                            <label className="form-check-label" htmlFor="chk_pack">
                              Packaging
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 h-100">
                        <h6 className="fw-bold mb-3 text-success">
                          <i className="bi bi-building-fill" />
                          Business Type
                        </h6>
                        <div className="d-flex flex-column gap-2">
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".type-mfg" id="chk_mfg" />
                            <label className="form-check-label" htmlFor="chk_mfg">
                              Manufacturer
                              (Factory)
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".type-dist" id="chk_dist" />
                            <label className="form-check-label" htmlFor="chk_dist">
                              Distributor /
                              Trader
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".type-service" id="chk_serv" />
                            <label className="form-check-label" htmlFor="chk_serv">
                              Service
                              Provider
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 h-100">
                        <h6 className="fw-bold mb-3 text-dark">
                          <i className="bi bi-box-fill" />
                          Material
                        </h6>
                        <div className="d-flex flex-column gap-2">
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".mat-steel" id="mat1" />
                            <label className="form-check-label" htmlFor="mat1">
                              Steel / Iron
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".mat-alum" id="mat2" />
                            <label className="form-check-label" htmlFor="mat2">
                              Aluminum
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".mat-plas" id="mat3" />
                            <label className="form-check-label" htmlFor="mat3">
                              Plastic /
                              Rubber
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".mat-wood" id="mat4" />
                            <label className="form-check-label" htmlFor="mat4">
                              Wood / Paper
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 h-100">
                        <h6 className="fw-bold mb-3 text-dark">
                          <i className="bi bi-gear-wide-connected" />
                          Process
                        </h6>
                        <div className="d-flex flex-column gap-2">
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".proc-cnc" id="proc1" />
                            <label className="form-check-label" htmlFor="proc1">
                              CNC Machining
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".proc-mold" id="proc2" />
                            <label className="form-check-label" htmlFor="proc2">
                              Injection
                              Molding
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".proc-stamp" id="proc3" />
                            <label className="form-check-label" htmlFor="proc3">
                              Stamping /
                              Casting
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".proc-surf" id="proc4" />
                            <label className="form-check-label" htmlFor="proc4">
                              Surface
                              Treatment
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 bg-light rounded-3 h-100">
                        <h6 className="fw-bold mb-3 text-dark">
                          <i className="bi bi-award-fill" />
                          Certification
                        </h6>
                        <div className="d-flex flex-column gap-2">
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".cert-iso9" id="cert1" />
                            <label className="form-check-label" htmlFor="cert1">
                              ISO 9001
                              (Quality)
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".cert-iso14" id="cert2" />
                            <label className="form-check-label" htmlFor="cert2">
                              ISO 14001
                              (Env)
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".cert-fda" id="cert3" />
                            <label className="form-check-label" htmlFor="cert3">
                              FDA / GMP
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input filter-chk" type="checkbox" value=".cert-ce" id="cert4" />
                            <label className="form-check-label" htmlFor="cert4">
                              CE / UL
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-top-0 pt-0 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" id="btnCancel" data-bs-dismiss="modal">
                  <i className="bi bi-x-circle" />
                  Cancel
                </button>
                <div>
                  <button type="button" className="btn btn-link text-decoration-none text-muted me-2" id="btnReset">
                    Clear
                    All
                  </button>
                  <button type="button" className="btn btn-primary px-4 rounded-3" id="applyFilters" data-bs-dismiss="modal">
                    <i className="bi bi-check2-circle" />
                    Show Results
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Brands-running */}
        <section id="brand-carousel" className="section py-5 bg-white border-top">
          <div className="container">
            <div className="section-header text-center mb-4">
              <h4 className="fw-bold text-dark">
                Top Industrial Brands
              </h4>
              <p className="text-muted small">
                Our most purchased partners and manufacturers.
              </p>
            </div>
            <div style={{ overflow: 'hidden', position: 'relative' }}>
              <div className="d-flex align-items-center" style={{ transition: 'transform 0.6s ease', transform: `translateX(-${brandOffset * (100 / brandsVisible)}%)` }}>
                {brandItems.concat(brandItems).map((brand, i) => (
                  <div key={i} className="d-flex justify-content-center flex-shrink-0" style={{ width: `${100 / brandsVisible}%`, padding: '0 15px' }}>
                    <img src={brand.src} className="img-fluid brand-img" alt={brand.alt} style={{ maxHeight: '60px', objectFit: 'contain', filter: 'grayscale(40%)', transition: 'filter 0.3s' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main >
    </>
  )
}
export default HomePage
