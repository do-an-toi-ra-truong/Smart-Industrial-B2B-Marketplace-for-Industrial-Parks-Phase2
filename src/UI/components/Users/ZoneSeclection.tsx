const ZoneSelection = () => {
    return (
        <section id="zone-selection" className="section py-5 bg-white">
                <div className="container">
                  <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold mb-3">
                      Explore Industrial Ecosystems
                    </h1>
                    <p className="lead text-muted">
                      Click on an Industrial Zone to view its verified suppliers and
                      manufacturers.
                    </p>
                  </div>
                  <div className="row g-4 justify-content-center">
                    <div
                      className="col-lg-3 col-md-6"
                      
                      
                    >
                      <div
                        className="card h-100 shadow-sm zone-filter-card zone-btn"
                        data-filter=".zone-vsip"
                      >
                        <div
                          className="position-relative"
                          style={{ height: 240, overflow: "hidden" }}
                        >
                          <img
                            src="/assets/images/kcnVsipBD.png"
                            className="card-img-top w-100 h-100"
                            style={{ objectFit: "cover" }}
                            alt="VSIP"
                          />
                          <div
                            className="position-absolute bottom-0 start-0 w-100 p-3"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                            }}
                          >
                            <h3 className="text-white fw-bold mb-0">VSIP I &amp; II</h3>
                            <small className="text-white-50">
                              <i className="bi bi-geo-alt" /> Binh Duong
                            </small>
                          </div>
                        </div>
                        <div className="card-body text-center">
                          <p className="card-text text-muted mb-3">
                            The flagship 500-hectare industrial park in Thuan An; a
                            high-tech model with modern infrastructure and 100% occupancy.
                          </p>
                          <button className="btn btn-outline-primary rounded-pill px-4">
                            View 4 Companies
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6"
                      
                    >
                      <div
                        className="card h-100 shadow-sm zone-filter-card zone-btn"
                        data-filter=".zone-myphuoc"
                      >
                        <div
                          className="position-relative"
                          style={{ height: 240, overflow: "hidden" }}
                        >
                          <img
                            src="/assets/images/kcnMyPhuoc.png"
                            className="card-img-top w-100 h-100"
                            style={{ objectFit: "cover" }}
                            alt="My Phuoc"
                          />
                          <div
                            className="position-absolute bottom-0 start-0 w-100 p-3"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                            }}
                          >
                            <h3 className="text-white fw-bold mb-0">KCN My Phuoc</h3>
                            <small className="text-white-50">
                              <i className="bi bi-geo-alt" /> Ben Cat
                            </small>
                          </div>
                        </div>
                        <div className="card-body text-center">
                          <p className="card-text text-muted mb-3">
                            A massive industrial-urban complex by Becamex IDC, integrating
                            manufacturing with full residential and commercial amenities.
                          </p>
                          <button className="btn btn-outline-success rounded-pill px-4">
                            View 4 Companies
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6"
                      
                    >
                      <div
                        className="card h-100 shadow-sm zone-filter-card zone-btn"
                        data-filter=".zone-amata"
                      >
                        <div
                          className="position-relative"
                          style={{ height: 240, overflow: "hidden" }}
                        >
                          <img
                            src="/assets/images/kcnAmataCity.png"
                            className="card-img-top w-100 h-100"
                            style={{ objectFit: "cover" }}
                            alt="Amata"
                          />
                          <div
                            className="position-absolute bottom-0 start-0 w-100 p-3"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                            }}
                          >
                            <h3 className="text-white fw-bold mb-0">Amata City</h3>
                            <small className="text-white-50">
                              <i className="bi bi-geo-alt" /> Dong Nai
                            </small>
                          </div>
                        </div>
                        <div className="card-body text-center">
                          <p className="card-text text-muted mb-3">
                            A premier Eco-Industrial Park in Dong Nai, offering
                            international standards and strategic connectivity to major
                            logistics hubs.
                          </p>
                          <button className="btn btn-outline-danger rounded-pill px-4">
                            View 4 Companies
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6"
                      
                    >
                      <div
                        className="card h-100 shadow-sm zone-filter-card zone-btn"
                        data-filter=".zone-hp"
                      >
                        <div
                          className="position-relative"
                          style={{ height: 240, overflow: "hidden" }}
                        >
                          <img
                            src="/assets/images/kcnVsipHP.png"
                            className="card-img-top w-100 h-100"
                            style={{ objectFit: "cover" }}
                            alt="VSIP"
                          />
                          <div
                            className="position-absolute bottom-0 start-0 w-100 p-3"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                            }}
                          >
                            <h3 className="text-white fw-bold mb-0">VSIP Hai Phong</h3>
                            <small className="text-white-50">
                              <i className="bi bi-geo-alt" /> Hai Phong
                            </small>
                          </div>
                        </div>
                        <div className="card-body text-center">
                          <p className="card-text text-muted mb-3">
                            A 1,600-hectare integrated township and park in the Dinh Vu -
                            Cat Hai Economic Zone, optimized for global electronics and
                            maritime trade.
                          </p>
                          <button className="btn btn-outline-primary rounded-pill px-4">
                            View 4 Companies
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    )
}
export default ZoneSelection