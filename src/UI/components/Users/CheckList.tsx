const CheckList = () => {
    return (
        <div
                className="modal fade"
                id="checklistModal"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  {" "}
                  <div className="modal-content rounded-4 border-0 shadow-lg">
                    <div className="modal-header border-bottom-0 pb-0">
                      <div>
                        <h4 className="modal-title fw-bold">Find Your Supplier</h4>
                        <p className="text-muted small mb-0">
                          Select criteria to refine your search results.
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body p-4">
                      <form id="filterForm">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                          <div className="col">
                            <div className="p-3 bg-light rounded-3 h-100">
                              <h6 className="fw-bold mb-3 text-primary">
                                <i className="bi bi-geo-alt-fill" /> Province
                              </h6>
                              <div
                                className="d-flex flex-column gap-2"
                                style={{ maxHeight: 150, overflowY: "auto" }}
                              >
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".prov-binhduong"
                                    id="chk_bd"
                                  />
                                  <label className="form-check-label" htmlFor="chk_bd">
                                    Bình Dương
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".prov-dongnai"
                                    id="chk_dn"
                                  />
                                  <label className="form-check-label" htmlFor="chk_dn">
                                    Đồng Nai
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".prov-haiphong"
                                    id="chk_hp"
                                  />
                                  <label className="form-check-label" htmlFor="chk_hp">
                                    Hải Phòng
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".prov-hcm"
                                    id="chk_hcm"
                                  />
                                  <label className="form-check-label" htmlFor="chk_hcm">
                                    TP. Hồ Chí Minh
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".prov-bacninh"
                                    id="chk_bn"
                                  />
                                  <label className="form-check-label" htmlFor="chk_bn">
                                    Bắc Ninh
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="p-3 bg-light rounded-3 h-100">
                              <h6 className="fw-bold mb-3 text-danger">
                                <i className="bi bi-grid-fill" /> Industry
                              </h6>
                              <div className="d-flex flex-column gap-2">
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".cat-mech"
                                    id="chk_mech"
                                  />
                                  <label className="form-check-label" htmlFor="chk_mech">
                                    Mechanical
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".cat-elec"
                                    id="chk_elec"
                                  />
                                  <label className="form-check-label" htmlFor="chk_elec">
                                    Electronics
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".cat-chem"
                                    id="chk_chem"
                                  />
                                  <label className="form-check-label" htmlFor="chk_chem">
                                    Chemicals
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".cat-pack"
                                    id="chk_pack"
                                  />
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
                                <i className="bi bi-building-fill" /> Business Type
                              </h6>
                              <div className="d-flex flex-column gap-2">
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".type-mfg"
                                    id="chk_mfg"
                                  />
                                  <label className="form-check-label" htmlFor="chk_mfg">
                                    Manufacturer (Factory)
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".type-dist"
                                    id="chk_dist"
                                  />
                                  <label className="form-check-label" htmlFor="chk_dist">
                                    Distributor / Trader
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".type-service"
                                    id="chk_serv"
                                  />
                                  <label className="form-check-label" htmlFor="chk_serv">
                                    Service Provider
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="p-3 bg-light rounded-3 h-100">
                              <h6 className="fw-bold mb-3 text-dark">
                                <i className="bi bi-box-fill" /> Material
                              </h6>
                              <div className="d-flex flex-column gap-2">
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".mat-steel"
                                    id="mat1"
                                  />
                                  <label className="form-check-label" htmlFor="mat1">
                                    Steel / Iron
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".mat-alum"
                                    id="mat2"
                                  />
                                  <label className="form-check-label" htmlFor="mat2">
                                    Aluminum
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".mat-plas"
                                    id="mat3"
                                  />
                                  <label className="form-check-label" htmlFor="mat3">
                                    Plastic / Rubber
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".mat-wood"
                                    id="mat4"
                                  />
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
                                <i className="bi bi-gear-wide-connected" /> Process
                              </h6>
                              <div className="d-flex flex-column gap-2">
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".proc-cnc"
                                    id="proc1"
                                  />
                                  <label className="form-check-label" htmlFor="proc1">
                                    CNC Machining
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".proc-mold"
                                    id="proc2"
                                  />
                                  <label className="form-check-label" htmlFor="proc2">
                                    Injection Molding
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".proc-stamp"
                                    id="proc3"
                                  />
                                  <label className="form-check-label" htmlFor="proc3">
                                    Stamping / Casting
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".proc-surf"
                                    id="proc4"
                                  />
                                  <label className="form-check-label" htmlFor="proc4">
                                    Surface Treatment
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="p-3 bg-light rounded-3 h-100">
                              <h6 className="fw-bold mb-3 text-dark">
                                <i className="bi bi-award-fill" /> Certification
                              </h6>
                              <div className="d-flex flex-column gap-2">
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".cert-iso9"
                                    id="cert1"
                                  />
                                  <label className="form-check-label" htmlFor="cert1">
                                    ISO 9001 (Quality)
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".cert-iso14"
                                    id="cert2"
                                  />
                                  <label className="form-check-label" htmlFor="cert2">
                                    ISO 14001 (Env)
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".cert-fda"
                                    id="cert3"
                                  />
                                  <label className="form-check-label" htmlFor="cert3">
                                    FDA / GMP
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input filter-chk"
                                    type="checkbox"
                                    defaultValue=".cert-ce"
                                    id="cert4"
                                  />
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
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        id="btnCancel"
                        data-bs-dismiss="modal"
                      >
                        <i className="bi bi-x-circle" /> Cancel
                      </button>
                      <div>
                        <button
                          type="button"
                          className="btn btn-link text-decoration-none text-muted me-2"
                          id="btnReset"
                        >
                          Clear All
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary px-4 rounded-3"
                          id="applyFilters"
                          data-bs-dismiss="modal"
                        >
                          <i className="bi bi-check2-circle" /> Show Results
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
}
export default CheckList