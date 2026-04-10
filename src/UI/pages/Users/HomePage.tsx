import HeroSlider from '../../components/Users/HeroSlider'
import ZoneSelection from '../../components/Users/ZoneSeclection'
import BlockProducts from '../../components/Users/BlockProducts'
import BrandCarousel from '../../components/Users/BrandCarousel'
import CheckList from '../../components/Users/CheckList'
const HomePage = () => {
    return (
        <>
            <main className="main">
              <HeroSlider />
              <ZoneSelection />
              <section id="company-results" className="section py-5 bg-white">
                <div className="container">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <h2 className="h3 fw-bold text-dark mb-1">Công ty theo Cụm KCN</h2>
                      <p className="text-muted mb-0">Doanh nghiệp uy tín được xác thực</p>
                    </div>
                  </div>
                  {/* Sorting */}
                  <div className="product-filters isotope-filters mb-5">
                    <ul className="d-flex flex-wrap gap-2 list-unstyled align-items-center">
                      <li
                        data-filter="*"
                        className="filter-active btn btn-light rounded-3 px-3 border"
                      >
                        All
                      </li>
                      <li
                        data-filter=".zone-vsip"
                        className="btn btn-light rounded-3 px-3 border"
                      >
                        VSIP I &amp; II
                      </li>
                      <li
                        data-filter=".zone-myphuoc"
                        className="btn btn-light rounded-3 px-3 border"
                      >
                        KCN My Phuoc
                      </li>
                      <li
                        data-filter=".zone-amata"
                        className="btn btn-light rounded-3 px-3 border"
                      >
                        AmataCity
                      </li>
                      <li
                        data-filter=".zone-hp"
                        className="btn btn-light rounded-3 px-3 border"
                      >
                        VSIP Hai Phong
                      </li>
                      <li className="list-inline-item ms-auto">
                        <button
                          className="btn btn-primary rounded-3 px-4 d-flex align-items-center gap-2"
                          data-bs-toggle="modal"
                          data-bs-target="#checklistModal"
                        >
                          <i className="bi bi-sliders" /> Filter Options
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="row g-4 isotope-container" id="company-grid">
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>  
                    <BlockProducts/>
                    <BlockProducts/>
                    <BlockProducts/>
                  </div>
                  <div className="mt-4 d-md-none">
                    <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2">
                      Xem tất cả <i className="bi bi-arrow-right" />
                    </button>
                  </div>
                </div>
              </section>
              {/* Checklist Modal */}
              <CheckList/>
              {/* Brands-running */}
              <BrandCarousel/>
            </main>
        </>
    )
}
export default HomePage