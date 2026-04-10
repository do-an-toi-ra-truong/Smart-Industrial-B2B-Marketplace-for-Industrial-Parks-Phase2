const BlockProducts = () => {
    return (
        <div className="col-md-6 col-lg-3 isotope-item zone-vsip">
                      <div className="card h-100 border rounded-3 shadow-sm hover-lift group">
                        <div className="position-relative" style={{ height: 180 }}>
                          <img
                            src="https://images.unsplash.com/photo-1655876726270-2caec425d0cd?auto=format&fit=crop&q=80&w=400"
                            className="card-img-top w-100 h-100 object-fit-cover"
                            alt="Precision"
                          />
                          <div className="position-absolute top-0 end-0 m-2 px-2 py-1 bg-success text-white rounded small fw-bold">
                            <i className="bi bi-check-circle-fill" /> Verified
                          </div>
                        </div>
                        <div className="card-body p-3">
                          <h6 className="card-title fw-bold text-dark mb-1">
                            Cơ khí Precision
                          </h6>
                          <div className="text-muted small mb-2">
                            <i className="bi bi-geo-alt" /> VSIP I, Binh Duong
                          </div>
                          <div className="d-flex gap-3 mb-3 border-top border-bottom py-2 bg-light rounded px-2">
                            <div className="small">
                              <i className="bi bi-people-fill text-primary" /> 150 NV
                            </div>
                            <div className="small">
                              <i className="bi bi-box-seam-fill text-primary" /> 500+ SP
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="small text-warning fw-bold">
                              <i className="bi bi-star-fill" /> 4.8 (124)
                            </div>
                            <a
                              href="#"
                              className="text-primary small fw-bold text-decoration-none"
                            >
                              Chi tiết <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
    )
}
export default BlockProducts