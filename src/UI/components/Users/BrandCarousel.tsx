const BrandCarousel = () => {
    return (
        <section id="brand-carousel" className="section py-5 bg-white border-top">
                <div className="container">
                  <div className="section-header text-center mb-4">
                    <h4 className="fw-bold text-dark">Top Industrial Brands</h4>
                    <p className="text-muted small">
                      Our most purchased partners and manufacturers.
                    </p>
                  </div>
                  <div className="swiper brand-swiper">
                    <div className="swiper-wrapper align-items-center">
                      <div className="swiper-slide d-flex justify-content-center">
                        <img
                          src="/assets/images/boge-logo.png"
                          className="img-fluid brand-img"
                          alt="BOGE"
                        />
                      </div>
                      <div className="swiper-slide d-flex justify-content-center">
                        <img
                          src="/assets/images/leica-logo.png"
                          className="img-fluid brand-img"
                          alt="Leica"
                        />
                      </div>
                      <div className="swiper-slide d-flex justify-content-center">
                        <img
                          src="/assets/images/specim-logo.png"
                          className="img-fluid brand-img"
                          alt="Specim"
                        />
                      </div>
                      <div className="swiper-slide d-flex justify-content-center">
                        <img
                          src="/assets/images/smalley-logo.png"
                          className="img-fluid brand-img"
                          alt="Smalley"
                        />
                      </div>
                      <div className="swiper-slide d-flex justify-content-center">
                        <img
                          src="/assets/images/topsolid-logo.png"
                          className="img-fluid brand-img"
                          alt="TopSolid"
                        />
                      </div>
                      <div className="swiper-slide d-flex justify-content-center">
                        <img
                          src="/assets/images/turck-logo.png"
                          className="img-fluid brand-img"
                          alt="Turck"
                        />
                      </div>
                      <div className="swiper-slide d-flex justify-content-center">
                        <img
                          src="/assets/images/evident-logo.png"
                          className="img-fluid brand-img"
                          alt="Evident"
                        />
                      </div>
                      <div className="swiper-slide d-flex justify-content-center">
                        <img
                          src="/assets/images/lmao-logo.png"
                          className="img-fluid brand-img"
                          alt="Imao"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    )
}
export default BrandCarousel   